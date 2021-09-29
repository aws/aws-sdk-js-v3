import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have permission to perform an action.</p>
 */
export interface AccessForbidden extends __SmithyException, $MetadataBearer {
  name: "AccessForbidden";
  $fault: "client";
  Message?: string;
}

export namespace AccessForbidden {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessForbidden): any => ({
    ...obj,
  });
}

/**
 * <p>The identifier that identifies the batch of Records you are retrieving in a batch.</p>
 */
export interface BatchGetRecordIdentifier {
  /**
   * <p>A <code>FeatureGroupName</code> containing Records you are retrieving in a batch.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value for a list of record identifiers in string format.</p>
   */
  RecordIdentifiersValueAsString: string[] | undefined;

  /**
   * <p>List of names of Features to be retrieved. If not specified, the latest value for all
   *          the Features are returned.</p>
   */
  FeatureNames?: string[];
}

export namespace BatchGetRecordIdentifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRecordIdentifier): any => ({
    ...obj,
  });
}

export interface BatchGetRecordRequest {
  /**
   * <p>A list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name
   *       that have been requested to be retrieved in batch.</p>
   */
  Identifiers: BatchGetRecordIdentifier[] | undefined;
}

export namespace BatchGetRecordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRecordRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The error that has occurred when attempting to retrieve a batch of Records.</p>
 */
export interface BatchGetRecordError {
  /**
   * <p>The name of the feature group that the record belongs to.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value for the <code>RecordIdentifier</code> in string format of a Record from a <code>FeatureGroup</code> that is causing
   *       an error when attempting to be retrieved.</p>
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>The error code of an error that has occured when attempting to retrieve a batch of Records. For more information on errors, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_GetRecord.html#API_feature_store_GetRecord_Errors"> Errors</a>.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message of an error that has occured when attempting to retrieve a record in the batch.</p>
   */
  ErrorMessage: string | undefined;
}

export namespace BatchGetRecordError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRecordError): any => ({
    ...obj,
  });
}

/**
 * <p>The value associated with a feature.</p>
 */
export interface FeatureValue {
  /**
   * <p>The name of a feature that a feature value corresponds to.</p>
   */
  FeatureName: string | undefined;

  /**
   * <p>The value associated with a feature, in string format. Note that features types can be
   *          String, Integral, or Fractional. This value represents all three types as a string.</p>
   */
  ValueAsString: string | undefined;
}

export namespace FeatureValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FeatureValue): any => ({
    ...obj,
  });
}

/**
 * <p>The output of Records that have been retrieved in a batch.</p>
 */
export interface BatchGetRecordResultDetail {
  /**
   * <p>The <code>FeatureGroupName</code> containing Records you retrieved in a batch.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value of the record identifer in string format.</p>
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>The <code>Record</code> retrieved.</p>
   */
  Record: FeatureValue[] | undefined;
}

export namespace BatchGetRecordResultDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRecordResultDetail): any => ({
    ...obj,
  });
}

export interface BatchGetRecordResponse {
  /**
   * <p>A list of Records you requested to be retrieved in batch.</p>
   */
  Records: BatchGetRecordResultDetail[] | undefined;

  /**
   * <p>A list of errors that have occured when retrieving a batch of Records.</p>
   */
  Errors: BatchGetRecordError[] | undefined;

  /**
   * <p>A unprocessed list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value,
   *        and Feature name.</p>
   */
  UnprocessedIdentifiers: BatchGetRecordIdentifier[] | undefined;
}

export namespace BatchGetRecordResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchGetRecordResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact AWS customer support.</p>
 */
export interface InternalFailure extends __SmithyException, $MetadataBearer {
  name: "InternalFailure";
  $fault: "server";
  Message?: string;
}

export namespace InternalFailure {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailure): any => ({
    ...obj,
  });
}

/**
 * <p>The service is currently unavailable.</p>
 */
export interface ServiceUnavailable extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailable";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailable): any => ({
    ...obj,
  });
}

/**
 * <p>There was an error validating your request.</p>
 */
export interface ValidationError extends __SmithyException, $MetadataBearer {
  name: "ValidationError";
  $fault: "client";
  Message?: string;
}

export namespace ValidationError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationError): any => ({
    ...obj,
  });
}

export interface DeleteRecordRequest {
  /**
   * <p>The name of the feature group to delete the record from. </p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value for the <code>RecordIdentifier</code> that uniquely identifies the record, in
   *          string format. </p>
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>Timestamp indicating when the deletion event occurred. <code>EventTime</code> can be
   *          used to query data at a certain point in time.</p>
   */
  EventTime: string | undefined;
}

export namespace DeleteRecordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecordRequest): any => ({
    ...obj,
  });
}

export interface GetRecordRequest {
  /**
   * <p>The name of the feature group in which you want to put the records.</p>
   */
  FeatureGroupName: string | undefined;

  /**
   * <p>The value that corresponds to <code>RecordIdentifier</code> type and uniquely identifies
   *          the record in the <code>FeatureGroup</code>. </p>
   */
  RecordIdentifierValueAsString: string | undefined;

  /**
   * <p>List of names of Features to be retrieved. If not specified, the latest value for all
   *          the Features are returned.</p>
   */
  FeatureNames?: string[];
}

export namespace GetRecordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecordRequest): any => ({
    ...obj,
  });
}

export interface GetRecordResponse {
  /**
   * <p>The record you requested. A list of <code>FeatureValues</code>.</p>
   */
  Record?: FeatureValue[];
}

export namespace GetRecordResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecordResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A resource that is required to perform an action was not found.</p>
 */
export interface ResourceNotFound extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFound";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFound {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFound): any => ({
    ...obj,
  });
}

export interface PutRecordRequest {
  /**
   * <p>The name of the feature group that you want to insert the record into.</p>
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
   */
  Record: FeatureValue[] | undefined;
}

export namespace PutRecordRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutRecordRequest): any => ({
    ...obj,
  });
}
