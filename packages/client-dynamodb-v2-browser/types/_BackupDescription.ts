import {_BackupDetails, _UnmarshalledBackupDetails} from './_BackupDetails';
import {_SourceTableDetails, _UnmarshalledSourceTableDetails} from './_SourceTableDetails';
import {_SourceTableFeatureDetails, _UnmarshalledSourceTableFeatureDetails} from './_SourceTableFeatureDetails';

/**
 * <p>Contains the description of the backup created for the table.</p>
 */
export interface _BackupDescription {
    /**
     * <p>Contains the details of the backup created for the table. </p>
     */
    BackupDetails?: _BackupDetails;

    /**
     * <p>Contains the details of the table when the backup was created. </p>
     */
    SourceTableDetails?: _SourceTableDetails;

    /**
     * <p>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.</p>
     */
    SourceTableFeatureDetails?: _SourceTableFeatureDetails;
}

export interface _UnmarshalledBackupDescription extends _BackupDescription {
    /**
     * <p>Contains the details of the backup created for the table. </p>
     */
    BackupDetails?: _UnmarshalledBackupDetails;

    /**
     * <p>Contains the details of the table when the backup was created. </p>
     */
    SourceTableDetails?: _UnmarshalledSourceTableDetails;

    /**
     * <p>Contains the details of the features enabled on the table when the backup was created. For example, LSIs, GSIs, streams, TTL.</p>
     */
    SourceTableFeatureDetails?: _UnmarshalledSourceTableFeatureDetails;
}