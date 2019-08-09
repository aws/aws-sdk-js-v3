import { _UnmarshalledEndpointDetails } from "./_EndpointDetails";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface GetDataflowEndpointGroupOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>ARN of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupArn?: string;

  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;

  /**
   * <p>Details of a dataflow endpoint.</p>
   */
  endpointsDetails?: Array<_UnmarshalledEndpointDetails>;

  /**
   * <p>Tags assigned to a dataflow endpoint group.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
