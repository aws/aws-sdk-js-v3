import { _UnmarshalledBudget } from "./_Budget";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p> Response of DescribeBudget </p>
 */
export interface DescribeBudgetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The description of the budget.</p>
   */
  Budget?: _UnmarshalledBudget;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
