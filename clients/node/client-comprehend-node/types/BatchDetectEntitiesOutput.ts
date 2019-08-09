import { _UnmarshalledBatchDetectEntitiesItemResult } from "./_BatchDetectEntitiesItemResult";
import { _UnmarshalledBatchItemError } from "./_BatchItemError";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchDetectEntitiesOutput shape
 */
export interface BatchDetectEntitiesOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of objects containing the results of the operation. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If all of the documents contain an error, the <code>ResultList</code> is empty.</p>
   */
  ResultList: Array<_UnmarshalledBatchDetectEntitiesItemResult>;

  /**
   * <p>A list containing one object for each document that contained an error. The results are sorted in ascending order by the <code>Index</code> field and match the order of the documents in the input list. If there are no errors in the batch, the <code>ErrorList</code> is empty.</p>
   */
  ErrorList: Array<_UnmarshalledBatchItemError>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
