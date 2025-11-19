// smithy-typescript generated code
import { DeletionMode, ExpirationTimeResponse, TargetStore, TtlDurationUnit } from "./enums";

/**
 * <p>The identifier that identifies the batch of Records you are retrieving in a
 *          batch.</p>
 * @public
 */
export interface BatchGetRecordIdentifier {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the <code>FeatureGroup</code> containing the
   *          records you are retrieving in a batch.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value for a list of record identifiers in string format.</p>
   * @public
   */
  RecordIdentifiersValueAsString: string[] | undefined;

  /**
   * <p>List of names of Features to be retrieved. If not specified, the latest value for all
   *          the Features are returned.</p>
   * @public
   */
  FeatureNames?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetRecordRequest {
  /**
   * <p>A list containing the name or Amazon Resource Name (ARN) of the
   *             <code>FeatureGroup</code>, the list of names of <code>Feature</code>s to be retrieved,
   *          and the corresponding <code>RecordIdentifier</code> values as strings.</p>
   * @public
   */
  Identifiers: BatchGetRecordIdentifier[] | undefined;

  /**
   * <p>Parameter to request <code>ExpiresAt</code> in response. If <code>Enabled</code>,
   *             <code>BatchGetRecord</code> will return the value of <code>ExpiresAt</code>, if it is
   *          not null. If <code>Disabled</code> and null, <code>BatchGetRecord</code> will return
   *          null.</p>
   * @public
   */
  ExpirationTimeResponse?: ExpirationTimeResponse | undefined;
}

/**
 * <p>The error that has occurred when attempting to retrieve a batch of Records.</p>
 * @public
 */
export interface BatchGetRecordError {
  /**
   * <p>The name of the feature group that the record belongs to.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value for the <code>RecordIdentifier</code> in string format of a Record from a
   *             <code>FeatureGroup</code> that is causing an error when attempting to be
   *          retrieved.</p>
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>The error code of an error that has occurred when attempting to retrieve a batch of
   *          Records. For more information on errors, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_GetRecord.html#API_feature_store_GetRecord_Errors">Errors</a>.</p>
   * @public
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message of an error that has occurred when attempting to retrieve a record in
   *          the batch.</p>
   * @public
   */
  ErrorMessage: string | undefined;
}

/**
 * <p>The value associated with a feature.</p>
 * @public
 */
export interface FeatureValue {
  /**
   * <p>The name of a feature that a feature value corresponds to.</p>
   * @public
   */
  FeatureName: string | undefined;

  /**
   * <p>The value in string format associated with a feature. Used when your
   *             <code>CollectionType</code> is <code>None</code>. Note that features types can be
   *             <code>String</code>, <code>Integral</code>, or <code>Fractional</code>. This value
   *          represents all three types as a string.</p>
   * @public
   */
  ValueAsString?: string | undefined;

  /**
   * <p>The list of values in string format associated with a feature. Used when your
   *             <code>CollectionType</code> is a <code>List</code>, <code>Set</code>, or
   *             <code>Vector</code>. Note that features types can be <code>String</code>,
   *             <code>Integral</code>, or <code>Fractional</code>. These values represents all three
   *          types as a string.</p>
   * @public
   */
  ValueAsStringList?: string[] | undefined;
}

/**
 * <p>The output of records that have been retrieved in a batch.</p>
 * @public
 */
export interface BatchGetRecordResultDetail {
  /**
   * <p>The <code>FeatureGroupName</code> containing Records you retrieved in a batch.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value of the record identifier in string format.</p>
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>The <code>Record</code> retrieved.</p>
   * @public
   */
  Record: FeatureValue[] | undefined;

  /**
   * <p>The <code>ExpiresAt</code> ISO string of the requested record.</p>
   * @public
   */
  ExpiresAt?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetRecordResponse {
  /**
   * <p>A list of Records you requested to be retrieved in batch.</p>
   * @public
   */
  Records: BatchGetRecordResultDetail[] | undefined;

  /**
   * <p>A list of errors that have occurred when retrieving a batch of Records.</p>
   * @public
   */
  Errors: BatchGetRecordError[] | undefined;

  /**
   * <p>A unprocessed list of <code>FeatureGroup</code> names, with their corresponding
   *             <code>RecordIdentifier</code> value, and Feature name.</p>
   * @public
   */
  UnprocessedIdentifiers: BatchGetRecordIdentifier[] | undefined;
}

/**
 * @public
 */
export interface DeleteRecordRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group to delete the record from.
   *       </p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value for the <code>RecordIdentifier</code> that uniquely identifies the record, in
   *          string format. </p>
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>Timestamp indicating when the deletion event occurred. <code>EventTime</code> can be
   *          used to query data at a certain point in time.</p>
   * @public
   */
  EventTime: string | undefined;

  /**
   * <p>A list of stores from which you're deleting the record. By default, Feature Store
   *          deletes the record from all of the stores that you're using for the
   *             <code>FeatureGroup</code>.</p>
   * @public
   */
  TargetStores?: TargetStore[] | undefined;

  /**
   * <p>The name of the deletion mode for deleting the record. By default, the deletion mode is
   *          set to <code>SoftDelete</code>.</p>
   * @public
   */
  DeletionMode?: DeletionMode | undefined;
}

/**
 * @public
 */
export interface GetRecordRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group from which you want to
   *          retrieve a record.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value that corresponds to <code>RecordIdentifier</code> type and uniquely identifies
   *          the record in the <code>FeatureGroup</code>. </p>
   * @public
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>List of names of Features to be retrieved. If not specified, the latest value for all
   *          the Features are returned.</p>
   * @public
   */
  FeatureNames?: string[] | undefined;

  /**
   * <p>Parameter to request <code>ExpiresAt</code> in response. If <code>Enabled</code>,
   *             <code>GetRecord</code> will return the value of <code>ExpiresAt</code>, if it is not
   *          null. If <code>Disabled</code> and null, <code>GetRecord</code> will return null.</p>
   * @public
   */
  ExpirationTimeResponse?: ExpirationTimeResponse | undefined;
}

/**
 * @public
 */
export interface GetRecordResponse {
  /**
   * <p>The record you requested. A list of <code>FeatureValues</code>.</p>
   * @public
   */
  Record?: FeatureValue[] | undefined;

  /**
   * <p>The <code>ExpiresAt</code> ISO string of the requested record.</p>
   * @public
   */
  ExpiresAt?: string | undefined;
}

/**
 * <p>Time to live duration, where the record is hard deleted after the expiration time is
 *          reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For
 *          information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide.</p>
 * @public
 */
export interface TtlDuration {
  /**
   * <p>
   *             <code>TtlDuration</code> time unit.</p>
   * @public
   */
  Unit: TtlDurationUnit | undefined;

  /**
   * <p>
   *             <code>TtlDuration</code> time value.</p>
   * @public
   */
  Value: number | undefined;
}

/**
 * @public
 */
export interface PutRecordRequest {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the feature group that you want to insert the
   *          record into.</p>
   * @public
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>List of FeatureValues to be inserted. This will be a full over-write. If you only want
   *          to update few of the feature values, do the following:</p>
   *          <ul>
   *             <li>
   *                <p>Use <code>GetRecord</code> to retrieve the latest record.</p>
   *             </li>
   *             <li>
   *                <p>Update the record returned from <code>GetRecord</code>. </p>
   *             </li>
   *             <li>
   *                <p>Use <code>PutRecord</code> to update feature values.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Record: FeatureValue[] | undefined;

  /**
   * <p>A list of stores to which you're adding the record. By default, Feature Store adds the
   *          record to all of the stores that you're using for the <code>FeatureGroup</code>.</p>
   * @public
   */
  TargetStores?: TargetStore[] | undefined;

  /**
   * <p>Time to live duration, where the record is hard deleted after the expiration time is
   *          reached; <code>ExpiresAt</code> = <code>EventTime</code> + <code>TtlDuration</code>. For
   *          information on HardDelete, see the <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_DeleteRecord.html">DeleteRecord</a> API in the Amazon SageMaker API Reference guide.</p>
   * @public
   */
  TtlDuration?: TtlDuration | undefined;
}
