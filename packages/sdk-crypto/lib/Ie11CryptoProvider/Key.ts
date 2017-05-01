export interface Key {
    readonly algorithm: string;
    readonly extractable: boolean;
    readonly keyUsage: Array<string>;
    readonly type: string;
}
