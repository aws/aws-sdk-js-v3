export function flushPromises(): Promise<void> {
    return new Promise<void>(resolve => setImmediate(resolve));
}
