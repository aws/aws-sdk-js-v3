export interface Provider<T> {
    (): Promise<T>;
}
