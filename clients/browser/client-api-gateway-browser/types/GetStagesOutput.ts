import { _UnmarshalledStage } from "./_Stage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/stages.html">Deploying API in Stages</a></div>
 */
export interface GetStagesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current page of elements from this collection.</p>
   */
  item?: Array<_UnmarshalledStage>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
