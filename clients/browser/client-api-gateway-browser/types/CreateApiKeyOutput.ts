import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A resource that can be distributed to callers for executing <a>Method</a> resources that require an API key. API keys can be mapped to any <a>Stage</a> on any <a>RestApi</a>, which indicates that the callers with the API key can make requests to that stage.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-api-keys.html">Use API Keys</a> </div>
 */
export interface CreateApiKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the API Key.</p>
   */
  id?: string;

  /**
   * <p>The value of the API Key.</p>
   */
  value?: string;

  /**
   * <p>The name of the API Key.</p>
   */
  name?: string;

  /**
   * <p>An AWS Marketplace customer identifier , when integrating with the AWS SaaS Marketplace.</p>
   */
  customerId?: string;

  /**
   * <p>The description of the API Key.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the API Key can be used by callers.</p>
   */
  enabled?: boolean;

  /**
   * <p>The timestamp when the API Key was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The timestamp when the API Key was last updated.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>A list of <a>Stage</a> resources that are associated with the <a>ApiKey</a> resource.</p>
   */
  stageKeys?: Array<string>;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
