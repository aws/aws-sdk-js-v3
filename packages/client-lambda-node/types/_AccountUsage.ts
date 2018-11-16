/**
 * <p>Provides code size usage and function count associated with the current account and region.</p>
 */
export interface _AccountUsage {
    /**
     * <p>Total size, in bytes, of the account's deployment packages per region.</p>
     */
    TotalCodeSize?: number;

    /**
     * <p>The number of your account's existing functions per region.</p>
     */
    FunctionCount?: number;
}

export type _UnmarshalledAccountUsage = _AccountUsage;