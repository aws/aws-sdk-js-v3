import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have permission to perform an action.</p>
 */
export interface AccessForbidden extends __SmithyException, $MetadataBearer {
  name: "AccessForbidden";
  $fault: "client";
  Message?: string;
}

export namespace AccessForbidden {
  export const filterSensitiveLog = (obj: AccessForbidden): any => ({
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
  export const filterSensitiveLog = (obj: DeleteRecordRequest): any => ({
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
  export const filterSensitiveLog = (obj: ValidationError): any => ({
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
  export const filterSensitiveLog = (obj: GetRecordRequest): any => ({
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
  export const filterSensitiveLog = (obj: FeatureValue): any => ({
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
  export const filterSensitiveLog = (obj: PutRecordRequest): any => ({
    ...obj,
  });
}
