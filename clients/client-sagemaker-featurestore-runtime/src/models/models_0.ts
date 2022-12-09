// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SageMakerFeatureStoreRuntimeServiceException as __BaseException } from "./SageMakerFeatureStoreRuntimeServiceException";

/**
 * <p>You do not have permission to perform an action.</p>
 */
export class AccessForbidden extends __BaseException {
  readonly name: "AccessForbidden" = "AccessForbidden";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessForbidden, __BaseException>) {
    super({
      name: "AccessForbidden",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessForbidden.prototype);
    this.Message = opts.Message;
  }
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

export interface BatchGetRecordRequest {
  /**
   * <p>A list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value, and Feature name
   *       that have been requested to be retrieved in batch.</p>
   */
  Identifiers: BatchGetRecordIdentifier[] | undefined;
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
   * <p>The error code of an error that has occured when attempting to retrieve a batch of
   *          Records. For more information on errors, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_feature_store_GetRecord.html#API_feature_store_GetRecord_Errors">Errors</a>.</p>
   */
  ErrorCode: string | undefined;

  /**
   * <p>The error message of an error that has occured when attempting to retrieve a record in the batch.</p>
   */
  ErrorMessage: string | undefined;
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

export interface BatchGetRecordResponse {
  /**
   * <p>A list of Records you requested to be retrieved in batch.</p>
   */
  Records: BatchGetRecordResultDetail[] | undefined;

  /**
   * <p>A list of errors that have occurred when retrieving a batch of Records.</p>
   */
  Errors: BatchGetRecordError[] | undefined;

  /**
   * <p>A unprocessed list of <code>FeatureGroup</code> names, with their corresponding <code>RecordIdentifier</code> value,
   *        and Feature name.</p>
   */
  UnprocessedIdentifiers: BatchGetRecordIdentifier[] | undefined;
}

/**
 * <p>An internal failure occurred. Try your request again. If the problem
 *          persists, contact Amazon Web Services customer support.</p>
 */
export class InternalFailure extends __BaseException {
  readonly name: "InternalFailure" = "InternalFailure";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailure, __BaseException>) {
    super({
      name: "InternalFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailure.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The service is currently unavailable.</p>
 */
export class ServiceUnavailable extends __BaseException {
  readonly name: "ServiceUnavailable" = "ServiceUnavailable";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailable, __BaseException>) {
    super({
      name: "ServiceUnavailable",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailable.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>There was an error validating your request.</p>
 */
export class ValidationError extends __BaseException {
  readonly name: "ValidationError" = "ValidationError";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationError, __BaseException>) {
    super({
      name: "ValidationError",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationError.prototype);
    this.Message = opts.Message;
  }
}

export enum TargetStore {
  OFFLINE_STORE = "OfflineStore",
  ONLINE_STORE = "OnlineStore",
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

  /**
   * <p>A list of stores from which you're deleting the record. By default, Feature Store deletes the record from all of the stores that you're using for the <code>FeatureGroup</code>.</p>
   */
  TargetStores?: (TargetStore | string)[];
}

export interface GetRecordRequest {
  /**
   * <p>The name of the feature group from which you want to retrieve a record.</p>
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

export interface GetRecordResponse {
  /**
   * <p>The record you requested. A list of <code>FeatureValues</code>.</p>
   */
  Record?: FeatureValue[];
}

/**
 * <p>A resource that is required to perform an action was not found.</p>
 */
export class ResourceNotFound extends __BaseException {
  readonly name: "ResourceNotFound" = "ResourceNotFound";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFound, __BaseException>) {
    super({
      name: "ResourceNotFound",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFound.prototype);
    this.Message = opts.Message;
  }
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

  /**
   * <p>A list of stores to which you're adding the record. By default, Feature Store adds the record to all of the stores that you're using for the <code>FeatureGroup</code>.</p>
   */
  TargetStores?: (TargetStore | string)[];
}

/**
 * @internal
 */
export const BatchGetRecordIdentifierFilterSensitiveLog = (obj: BatchGetRecordIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRecordRequestFilterSensitiveLog = (obj: BatchGetRecordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRecordErrorFilterSensitiveLog = (obj: BatchGetRecordError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FeatureValueFilterSensitiveLog = (obj: FeatureValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRecordResultDetailFilterSensitiveLog = (obj: BatchGetRecordResultDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetRecordResponseFilterSensitiveLog = (obj: BatchGetRecordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecordRequestFilterSensitiveLog = (obj: DeleteRecordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecordRequestFilterSensitiveLog = (obj: GetRecordRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetRecordResponseFilterSensitiveLog = (obj: GetRecordResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRecordRequestFilterSensitiveLog = (obj: PutRecordRequest): any => ({
  ...obj,
});
