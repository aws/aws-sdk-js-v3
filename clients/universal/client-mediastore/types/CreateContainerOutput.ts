import { _UnmarshalledContainer } from "./_Container";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateContainerOutput shape
 */
export interface CreateContainerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>ContainerARN: The Amazon Resource Name (ARN) of the newly created container. The ARN has the following format: arn:aws:&lt;region&gt;:&lt;account that owns this container&gt;:container/&lt;name of container&gt;. For example: arn:aws:mediastore:us-west-2:111122223333:container/movies </p> <p>ContainerName: The container name as specified in the request.</p> <p>CreationTime: Unix time stamp.</p> <p>Status: The status of container creation or deletion. The status is one of the following: <code>CREATING</code>, <code>ACTIVE</code>, or <code>DELETING</code>. While the service is creating the container, the status is <code>CREATING</code>. When an endpoint is available, the status changes to <code>ACTIVE</code>.</p> <p>The return value does not include the container's endpoint. To make downstream requests, you must obtain this value by using <a>DescribeContainer</a> or <a>ListContainers</a>.</p>
   */
  Container: _UnmarshalledContainer;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
