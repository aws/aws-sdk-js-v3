export function flushPromises(): Promise<void> {
    return new Promise<void>(resolve => setTimeout(resolve, 0));
}
