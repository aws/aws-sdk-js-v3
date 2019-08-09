import { _UnmarshalledApiKey } from "./_ApiKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a collection of API keys as represented by an <a>ApiKeys</a> resource.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
 */
export interface GetApiKeysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of warning messages logged during the import of API keys when the <code>failOnWarnings</code> option is set to true.</p>
   */
  warnings?: Array<string>;

  /**
   * _String shape
   */
  position?: string;

  /**
   * <p>The current page of elements from this collection.</p>
   */
  items?: Array<_UnmarshalledApiKey>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
