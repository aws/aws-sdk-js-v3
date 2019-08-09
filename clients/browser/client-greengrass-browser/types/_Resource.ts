import {
  _ResourceDataContainer,
  _UnmarshalledResourceDataContainer
} from "./_ResourceDataContainer";

/**
 * Information about a resource.
 */
export interface _Resource {
  /**
   * The resource ID, used to refer to a resource in the Lambda function configuration. Max length is 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Id: string;

  /**
   * The descriptive resource name, which is displayed on the AWS IoT Greengrass console. Max length 128 characters with pattern ''[a-zA-Z0-9:_-]+''. This must be unique within a Greengrass group.
   */
  Name: string;

  /**
   * A container of data for all resource types.
   */
  ResourceDataContainer: _ResourceDataContainer;
}

export interface _UnmarshalledResource extends _Resource {
  /**
   * A container of data for all resource types.
   */
  ResourceDataContainer: _UnmarshalledResourceDataContainer;
}
