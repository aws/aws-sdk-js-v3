/**
 * Detects if the function is invoked within a Node.JS environment based on the
 * presence of `process` global variable and its `toString` output.
 */
export function isNode(): boolean {
    return Object.prototype.toString.call(
        typeof process !== 'undefined' ? process : 0
    ) === '[object process]';
}
