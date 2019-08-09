import { _UnmarshalledNotebookInstanceLifecycleHook } from "./_NotebookInstanceLifecycleHook";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeNotebookInstanceLifecycleConfigOutput shape
 */
export interface DescribeNotebookInstanceLifecycleConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigArn?: string;

  /**
   * <p>The name of the lifecycle configuration.</p>
   */
  NotebookInstanceLifecycleConfigName?: string;

  /**
   * <p>The shell script that runs only once, when you create a notebook instance.</p>
   */
  OnCreate?: Array<_UnmarshalledNotebookInstanceLifecycleHook>;

  /**
   * <p>The shell script that runs every time you start a notebook instance, including when you create the notebook instance.</p>
   */
  OnStart?: Array<_UnmarshalledNotebookInstanceLifecycleHook>;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A timestamp that tells when the lifecycle configuration was created.</p>
   */
  CreationTime?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
