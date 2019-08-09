import { _UnmarshalledAccessLogSettings } from "./_AccessLogSettings";
import { _UnmarshalledRouteSettings } from "./_RouteSettings";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStageOutput shape
 */
export interface CreateStageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Settings for logging access in this stage.</p>
   */
  AccessLogSettings?: _UnmarshalledAccessLogSettings;

  /**
   * <p>The identifier of a client certificate for a Stage.</p>
   */
  ClientCertificateId?: string;

  /**
   * <p>The timestamp when the stage was created.</p>
   */
  CreatedDate?: Date;

  /**
   * <p>Default route settings for the stage.</p>
   */
  DefaultRouteSettings?: _UnmarshalledRouteSettings;

  /**
   * <p>The identifier of the Deployment that the Stage is
   *  associated with.</p>
   */
  DeploymentId?: string;

  /**
   * <p>The description of the stage.</p>
   */
  Description?: string;

  /**
   * <p>The timestamp when the stage was last updated.</p>
   */
  LastUpdatedDate?: Date;

  /**
   * <p>Route settings for the stage.</p>
   */
  RouteSettings?: { [key: string]: _UnmarshalledRouteSettings };

  /**
   * <p>The name of the stage.</p>
   */
  StageName?: string;

  /**
   * <p>A map that defines the stage variables for a stage resource. Variable names can
   *  have alphanumeric and underscore characters, and the values must match
   *  [A-Za-z0-9-._~:/?#&=,]+.</p>
   */
  StageVariables?: { [key: string]: string };

  /**
   * <p>The key-value map of strings. The valid character set is [a-zA-Z+-=._:/]. The tag key can be up to 128 characters and must not start with aws:. The tag value can be up to 256 characters..</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
