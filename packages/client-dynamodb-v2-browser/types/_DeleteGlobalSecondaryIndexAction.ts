/**
 * <p>Represents a global secondary index to be deleted from an existing table.</p>
 */
export interface _DeleteGlobalSecondaryIndexAction {
    /**
     * <p>The name of the global secondary index to be deleted.</p>
     */
    IndexName: string;
}

export type _UnmarshalledDeleteGlobalSecondaryIndexAction = _DeleteGlobalSecondaryIndexAction;