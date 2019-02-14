import {_PointInTimeRecoveryDescription, _UnmarshalledPointInTimeRecoveryDescription} from './_PointInTimeRecoveryDescription';

/**
 * <p>Represents the continuous backups and point in time recovery settings on the table.</p>
 */
export interface _ContinuousBackupsDescription {
    /**
     * <p> <code>ContinuousBackupsStatus</code> can be one of the following states: ENABLED, DISABLED</p>
     */
    ContinuousBackupsStatus: 'ENABLED'|'DISABLED'|string;

    /**
     * <p>The description of the point in time recovery settings applied to the table.</p>
     */
    PointInTimeRecoveryDescription?: _PointInTimeRecoveryDescription;
}

export interface _UnmarshalledContinuousBackupsDescription extends _ContinuousBackupsDescription {
    /**
     * <p>The description of the point in time recovery settings applied to the table.</p>
     */
    PointInTimeRecoveryDescription?: _UnmarshalledPointInTimeRecoveryDescription;
}