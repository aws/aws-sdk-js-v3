import {_RedshiftMetadata, _UnmarshalledRedshiftMetadata} from './_RedshiftMetadata';
import {_RDSMetadata, _UnmarshalledRDSMetadata} from './_RDSMetadata';

/**
 * <p> Represents the output of the <code>GetDataSource</code> operation. </p> <p> The content consists of the detailed metadata and data file information and the current status of the <code>DataSource</code>. </p>
 */
export interface _DataSource {
    /**
     * <p>The ID that is assigned to the <code>DataSource</code> during creation.</p>
     */
    DataSourceId?: string;

    /**
     * <p>The location and name of the data in Amazon Simple Storage Service (Amazon S3) that is used by a <code>DataSource</code>.</p>
     */
    DataLocationS3?: string;

    /**
     * <p>A JSON string that represents the splitting and rearrangement requirement used when this <code>DataSource</code> was created.</p>
     */
    DataRearrangement?: string;

    /**
     * <p>The AWS user account from which the <code>DataSource</code> was created. The account type can be either an AWS root account or an AWS Identity and Access Management (IAM) user account.</p>
     */
    CreatedByIamUser?: string;

    /**
     * <p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date|string|number;

    /**
     * <p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date|string|number;

    /**
     * <p>The total number of observations contained in the data files that the <code>DataSource</code> references.</p>
     */
    DataSizeInBytes?: number;

    /**
     * <p>The number of data files referenced by the <code>DataSource</code>.</p>
     */
    NumberOfFiles?: number;

    /**
     * <p>A user-supplied name or description of the <code>DataSource</code>.</p>
     */
    Name?: string;

    /**
     * <p>The current status of the <code>DataSource</code>. This element can have one of the following values: </p> <ul> <li>PENDING - Amazon Machine Learning (Amazon ML) submitted a request to create a <code>DataSource</code>.</li> <li>INPROGRESS - The creation process is underway.</li> <li>FAILED - The request to create a <code>DataSource</code> did not run to completion. It is not usable.</li> <li>COMPLETED - The creation process completed successfully.</li> <li>DELETED - The <code>DataSource</code> is marked as deleted. It is not usable.</li> </ul>
     */
    Status?: 'PENDING'|'INPROGRESS'|'FAILED'|'COMPLETED'|'DELETED'|string;

    /**
     * <p>A description of the most recent details about creating the <code>DataSource</code>.</p>
     */
    Message?: string;

    /**
     * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
     */
    RedshiftMetadata?: _RedshiftMetadata;

    /**
     * <p>The datasource details that are specific to Amazon RDS.</p>
     */
    RDSMetadata?: _RDSMetadata;

    /**
     * <p>The Amazon Resource Name (ARN) of an <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/roles-toplevel.html#roles-about-termsandconcepts">AWS IAM Role</a>, such as the following: arn:aws:iam::account:role/rolename. </p>
     */
    RoleARN?: string;

    /**
     * <p> The parameter is <code>true</code> if statistics need to be generated from the observation data. </p>
     */
    ComputeStatistics?: boolean;

    /**
     * <p>Long integer type that is a 64-bit signed number.</p>
     */
    ComputeTime?: number;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    FinishedAt?: Date|string|number;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    StartedAt?: Date|string|number;
}

export interface _UnmarshalledDataSource extends _DataSource {
    /**
     * <p>The time that the <code>DataSource</code> was created. The time is expressed in epoch time.</p>
     */
    CreatedAt?: Date;

    /**
     * <p>The time of the most recent edit to the <code>BatchPrediction</code>. The time is expressed in epoch time.</p>
     */
    LastUpdatedAt?: Date;

    /**
     * <p>Describes the <code>DataSource</code> details specific to Amazon Redshift.</p>
     */
    RedshiftMetadata?: _UnmarshalledRedshiftMetadata;

    /**
     * <p>The datasource details that are specific to Amazon RDS.</p>
     */
    RDSMetadata?: _UnmarshalledRDSMetadata;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    FinishedAt?: Date;

    /**
     * <p>A timestamp represented in epoch time.</p>
     */
    StartedAt?: Date;
}