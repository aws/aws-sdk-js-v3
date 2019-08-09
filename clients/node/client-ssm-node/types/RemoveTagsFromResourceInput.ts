import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RemoveTagsFromResourceInput shape
 */
export interface RemoveTagsFromResourceInput {
  /**
   * <p>The type of resource from which you want to remove a tag.</p> <note> <p>The ManagedInstance type for this API action is only for on-premises managed instances. Specify the name of the managed instance in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f.</p> </note>
   */
  ResourceType:
    | "Document"
    | "ManagedInstance"
    | "MaintenanceWindow"
    | "Parameter"
    | "PatchBaseline"
    | "OpsItem"
    | string;

  /**
   * <p>The ID of the resource from which you want to remove tags. For example:</p> <p>ManagedInstance: mi-012345abcde</p> <p>MaintenanceWindow: mw-012345abcde</p> <p>PatchBaseline: pb-012345abcde</p> <p>For the Document and Parameter values, use the name of the resource.</p> <note> <p>The ManagedInstance type for this API action is only for on-premises managed instances. Specify the name of the managed instance in the following format: mi-ID_number. For example, mi-1a2b3c4d5e6f.</p> </note>
   */
  ResourceId: string;

  /**
   * <p>Tag keys that you want to remove from the specified resource.</p>
   */
  TagKeys: Array<string> | Iterable<string>;

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
