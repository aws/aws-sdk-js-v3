import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeExecutionOutput shape
 */
export interface DescribeExecutionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the execution.</p>
   */
  executionArn: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the executed stated machine.</p>
   */
  stateMachineArn: string;

  /**
   * <p>The name of the execution.</p> <p>A name must <i>not</i> contain:</p> <ul> <li> <p>whitespace</p> </li> <li> <p>brackets <code>&lt; &gt; { } [ ]</code> </p> </li> <li> <p>wildcard characters <code>? *</code> </p> </li> <li> <p>special characters <code>" # % \ ^ | ~ ` $ &amp; , ; : /</code> </p> </li> <li> <p>control characters (<code>U+0000-001F</code>, <code>U+007F-009F</code>)</p> </li> </ul>
   */
  name?: string;

  /**
   * <p>The current status of the execution.</p>
   */
  status: "RUNNING" | "SUCCEEDED" | "FAILED" | "TIMED_OUT" | "ABORTED" | string;

  /**
   * <p>The date the execution is started.</p>
   */
  startDate: Date;

  /**
   * <p>If the execution has already ended, the date the execution stopped.</p>
   */
  stopDate?: Date;

  /**
   * <p>The string that contains the JSON input data of the execution.</p>
   */
  input: string;

  /**
   * <p>The JSON output data of the execution.</p> <note> <p>This field is set only if the execution succeeds. If the execution fails, this field is null.</p> </note>
   */
  output?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
