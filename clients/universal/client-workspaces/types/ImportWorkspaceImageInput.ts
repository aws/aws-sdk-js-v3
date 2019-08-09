import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportWorkspaceImageInput shape
 */
export interface ImportWorkspaceImageInput {
  /**
   * <p>The identifier of the EC2 image.</p>
   */
  Ec2ImageId: string;

  /**
   * <p>The ingestion process to be used when importing the image.</p>
   */
  IngestionProcess:
    | "BYOL_REGULAR"
    | "BYOL_GRAPHICS"
    | "BYOL_GRAPHICSPRO"
    | string;

  /**
   * <p>The name of the WorkSpace image.</p>
   */
  ImageName: string;

  /**
   * <p>The description of the WorkSpace image.</p>
   */
  ImageDescription: string;

  /**
   * <p>The tags. Each WorkSpaces resource can have a maximum of 50 tags.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
