/**
 * <p>Container for information regarding the access control for replicas.</p>
 */
export interface _AccessControlTranslation {
    /**
     * <p>The override value for the owner of the replica object.</p>
     */
    Owner: 'Destination'|string;
}

export type _UnmarshalledAccessControlTranslation = _AccessControlTranslation;