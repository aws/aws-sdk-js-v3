import { Headers } from '@aws/types';

/**
 * An implementation of the ES2015 Map<string, string> interface with
 * case-insensitive keys.
 */
export class HttpHeaders implements Headers {
    private originalHeaders: {
        [key: string]: [string, string]
    } = Object.create(null);

    [Symbol.toStringTag]!: 'Map'

    [Symbol.iterator]() {
        return this.entries()
    }

    clear() {
        this.originalHeaders = {}
    }

    delete(headerName: string): boolean {
        const canonical = headerName.toLowerCase()
        if (canonical in this.originalHeaders) {
            delete this.originalHeaders[canonical]
            return true
        }

        return false
    }

    *entries() {
        for (const canonicalHeader of Object.keys(this.originalHeaders)) {
            yield this.originalHeaders[canonicalHeader]
        }
    }

    forEach(
        cb: (value: string, key: string, map: Headers) => void,
        thisArg?: any
    ): void {
        if (thisArg !== undefined) {
            cb = cb.bind(thisArg)
        }

        for (const [key, value] of this.entries()) {
            cb(value, key, this)
        }
    }

    get(headerName: string): string|undefined {
        const canonical = headerName.toLowerCase()
        if (canonical in this.originalHeaders) {
            return this.originalHeaders[canonical][1]
        }
    }

    *keys() {
        for (const [key] of this.entries()) {
            yield key
        }
    }

    has(headerName: string): boolean {
        return headerName.toLowerCase() in this.originalHeaders
    }

    set(name: string, value: string): this {
        this.originalHeaders[name.toLowerCase()] = [name, value]

        return this
    }

    get size() {
        return Object.keys(this.originalHeaders).length
    }

    *values() {
        for (const [_, value] of this.entries()) {
            yield value
        }
    }

    withHeader(name: string, value: string): Headers {
        return this.clone().set(name, value)
    }

    withoutHeader(name: string): Headers {
        const clone = this.clone()
        clone.delete(name)

        return clone
    }

    private clone() {
        const clone = new HttpHeaders
        clone.originalHeaders = {...this.originalHeaders}

        return clone
    }
}

Object.defineProperty(HttpHeaders.prototype, Symbol.toStringTag as any, {
    value: 'Map'
})
