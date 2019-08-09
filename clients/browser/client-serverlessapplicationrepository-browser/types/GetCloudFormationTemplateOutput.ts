import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCloudFormationTemplateOutput shape
 */
export interface GetCloudFormationTemplateOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The application Amazon Resource Name (ARN).</p>
   */
  ApplicationId?: string;

  /**
   * <p>The date and time this resource was created.</p>
   */
  CreationTime?: string;

  /**
   * <p>The date and time this template expires. Templates
   *  expire 1 hour after creation.</p>
   */
  ExpirationTime?: string;

  /**
   * <p>The semantic version of the application:</p><p>
   *  <a href="https://semver.org/">https://semver.org/</a>
   *  </p>
   */
  SemanticVersion?: string;

  /**
   * <p>Status of the template creation workflow.</p><p>Possible values: PREPARING | ACTIVE | EXPIRED
   *  </p>
   */
  Status?: "PREPARING" | "ACTIVE" | "EXPIRED" | string;

  /**
   * <p>The UUID returned by CreateCloudFormationTemplate.</p><p>Pattern: [0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}</p>
   */
  TemplateId?: string;

  /**
   * <p>A link to the template that can be used to deploy the application using
   *  AWS CloudFormation.</p>
   */
  TemplateUrl?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
