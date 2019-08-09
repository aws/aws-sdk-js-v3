import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a usage plan key to identify a plan customer.</p> <div class="remarks"> <p>To associate an API stage with a selected API key in a usage plan, you must create a UsagePlanKey resource to represent the selected <a>ApiKey</a>.</p> </div>" <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-api-usage-plans.html">Create and Use Usage Plans</a> </div>
 */
export interface CreateUsagePlanKeyOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Id of a usage plan key.</p>
   */
  id?: string;

  /**
   * <p>The type of a usage plan key. Currently, the valid key type is <code>API_KEY</code>.</p>
   */
  type?: string;

  /**
   * <p>The value of a usage plan key.</p>
   */
  value?: string;

  /**
   * <p>The name of a usage plan key.</p>
   */
  name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
