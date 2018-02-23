import { escapeUri } from '@aws/util-uri-escape';

/**
 * A querystring builder, parser, and manipulator largely based on the
 * `URLSearchParms` interface defined in the WHATWG URL specification. This
 * class differs intentionally in its handling of valueless querystring
 * parameters (e.g., `baz` in `?fizz=buzz&foo=bar&baz`). Instances of
 * `Querystring` will serialize parameters whose value is undefined or `null`
 * **without** the 0x3D (`=`) character.
 */
export class Querystring {
    private readonly parameters: {
        [key: string]: Array<string|undefined>
    } = Object.create(null)

    /**
     * Create a Querystring object, optionally by parsing a serialized query
     * string
     */
    constructor(serialized?: string) {
        if (serialized) {
            for (const [key, value] of serialized.replace(/^\?/, '')
                .split('&')
                .filter(pair => pair.length > 0)
                .map(serializedPair => (
                    serializedPair.split('=', 2) as [string, string|undefined]
                ))
            ) {
                this.append(
                    decodeURIComponent(key),
                    value !== undefined ? decodeURIComponent(value) : undefined
                )
            }
        }
    }

    [Symbol.iterator]() {
        return this.entries()
    }

    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(
        key: string,
        value: string|{toString(): string}|undefined|null
    ) {
        if (!(key in this.parameters)) {
            this.parameters[key] = []
        }

        this.parameters[key].push(
            value === undefined || value === null ? undefined : String(value)
        )
    }

    /**
     * Deletes the given search parameter, and its associated value, from the
     * list of all search parameters.
     */
    delete(key: string) {
        delete this.parameters[key]
    }

    /**
     * Iterate through all key/value pairs contained in this object.
     *
     * If multiple values have been added for a single key, that key will be
     * yielded multiple time.
     */
    *entries() {
        for (const key of Object.keys(this.parameters)) {
            const set = this.parameters[key]
            for (const value of set) {
                yield [key, value]
            }
        }
    }

    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(key: string) {
        if (key in this.parameters) {
            return [...this.parameters[key]]
        }

        return []
    }

    /**
     * Returns a boolean indicating whether any value has been set for a given
     * search parameter
     */
    has(key: string) {
        return key in this.parameters
    }

    /**
     * Iterates through all the search parameter names for which a value has
     * been set.
     *
     * Unlike the iterator returned byt `entries` method, the iterator returned
     * by `keys` will only include each key a single time, regardless of how
     * many values it may have.
     */
    keys() {
        return Object.keys(this.parameters)
    }

    /**
     * Sets the value associated with a given search parameter to the provided
     * value.
     */
    set(
        key: string,
        val: string|{toString(): string}|undefined|null
    ) {
        this.parameters[key] = [
            val === undefined || val === null ? undefined : String(val)
        ]
    }

    /**
     * Sorts all key/value pairs, if any, by their keys.
     */
    sort() {
        for (const key of Object.keys(this.parameters).sort()) {
            const value = this.parameters[key]
            delete this.parameters[key]
            this.parameters[key] = value
        }
    }

    /**
     * Returns a string containing a query string suitable for use in a URL.
     *
     * The return value will not be prefixed with a question mark.
     */
    toString() {
        const parts: Array<string> = []
        for (const key of Object.keys(this.parameters)) {
            const escaped = escapeUri(key)
            for (const value of this.parameters[key]) {
                if (value === undefined) {
                    parts.push(escaped)
                } else {
                    parts.push(`${escaped}=${escapeUri(value)}`)
                }
            }
        }

        return parts.join('&')
    }

    /**
     * Iterates through all the values of the key/value pairs contained in this
     * object.
     */
    *values() {
        for (const key of Object.keys(this.parameters)) {
            const set = this.parameters[key]
            for (const value of set) {
                yield value
            }
        }
    }
}
