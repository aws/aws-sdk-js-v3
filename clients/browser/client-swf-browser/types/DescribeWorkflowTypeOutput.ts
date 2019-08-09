import { _UnmarshalledWorkflowTypeInfo } from "./_WorkflowTypeInfo";
import { _UnmarshalledWorkflowTypeConfiguration } from "./_WorkflowTypeConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains details about a workflow type.</p>
 */
export interface DescribeWorkflowTypeOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>General information about the workflow type.</p> <p>The status of the workflow type (returned in the WorkflowTypeInfo structure) can be one of the following.</p> <ul> <li> <p> <code>REGISTERED</code> – The type is registered and available. Workers supporting this type should be running.</p> </li> <li> <p> <code>DEPRECATED</code> – The type was deprecated using <a>DeprecateWorkflowType</a>, but is still in use. You should keep workers supporting this type running. You cannot create new workflow executions of this type.</p> </li> </ul>
   */
  typeInfo: _UnmarshalledWorkflowTypeInfo;

  /**
   * <p>Configuration settings of the workflow type registered through <a>RegisterWorkflowType</a> </p>
   */
  configuration: _UnmarshalledWorkflowTypeConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
