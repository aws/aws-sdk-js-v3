import { _UnmarshalledMethodSetting } from "./_MethodSetting";
import { _UnmarshalledAccessLogSettings } from "./_AccessLogSettings";
import { _UnmarshalledCanarySettings } from "./_CanarySettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents a unique identifier for a version of a deployed <a>RestApi</a> that is callable by users.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/how-to-deploy-api.html">Deploy an API</a> </div>
 */
export interface UpdateStageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the <a>Deployment</a> that the stage points to.</p>
   */
  deploymentId?: string;

  /**
   * <p>The identifier of a client certificate for an API stage.</p>
   */
  clientCertificateId?: string;

  /**
   * <p>The name of the stage is the first path segment in the Uniform Resource Identifier (URI) of a call to API Gateway. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.</p>
   */
  stageName?: string;

  /**
   * <p>The stage's description.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether a cache cluster is enabled for the stage.</p>
   */
  cacheClusterEnabled?: boolean;

  /**
   * <p>The size of the cache cluster for the stage, if enabled.</p>
   */
  cacheClusterSize?:
    | "0.5"
    | "1.6"
    | "6.1"
    | "13.5"
    | "28.4"
    | "58.2"
    | "118"
    | "237"
    | string;

  /**
   * <p>The status of the cache cluster for the stage, if enabled.</p>
   */
  cacheClusterStatus?:
    | "CREATE_IN_PROGRESS"
    | "AVAILABLE"
    | "DELETE_IN_PROGRESS"
    | "NOT_AVAILABLE"
    | "FLUSH_IN_PROGRESS"
    | string;

  /**
   * <p>A map that defines the method settings for a <a>Stage</a> resource. Keys (designated as <code>/{method_setting_key</code> below) are method paths defined as <code>{resource_path}/{http_method}</code> for an individual method override, or <code>/\\*\/\*</code> for overriding all methods in the stage. </p>
   */
  methodSettings?: { [key: string]: _UnmarshalledMethodSetting };

  /**
   * <p>A map that defines the stage variables for a <a>Stage</a> resource. Variable names can have alphanumeric and underscore characters, and the values must match <code>[A-Za-z0-9-._~:/?#&amp;=,]+</code>.</p>
   */
  variables?: { [key: string]: string };

  /**
   * <p>The version of the associated API documentation.</p>
   */
  documentationVersion?: string;

  /**
   * <p>Settings for logging access in this stage.</p>
   */
  accessLogSettings?: _UnmarshalledAccessLogSettings;

  /**
   * <p>Settings for the canary deployment in this stage.</p>
   */
  canarySettings?: _UnmarshalledCanarySettings;

  /**
   * <p>Specifies whether active tracing with X-ray is enabled for the <a>Stage</a>.</p>
   */
  tracingEnabled?: boolean;

  /**
   * <p>The ARN of the WebAcl associated with the <a>Stage</a>.</p>
   */
  webAclArn?: string;

  /**
   * <p>The collection of tags. Each tag element is associated with a given resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The timestamp when the stage last updated.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
