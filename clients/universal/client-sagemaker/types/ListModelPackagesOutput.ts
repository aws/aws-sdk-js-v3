import { _UnmarshalledModelPackageSummary } from "./_ModelPackageSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListModelPackagesOutput shape
 */
export interface ListModelPackagesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of <code>ModelPackageSummary</code> objects, each of which lists a model package.</p>
   */
  ModelPackageSummaryList: Array<_UnmarshalledModelPackageSummary>;

  /**
   * <p>If the response is truncated, Amazon SageMaker returns this token. To retrieve the next set of model packages, use it in the subsequent request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
