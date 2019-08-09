import {
  _ClientProperties,
  _UnmarshalledClientProperties
} from "./_ClientProperties";

/**
 * <p>Information about the Amazon WorkSpaces client.</p>
 */
export interface _ClientPropertiesResult {
  /**
   * <p>The resource identifier, in the form of a directory ID.</p>
   */
  ResourceId?: string;

  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties?: _ClientProperties;
}

export interface _UnmarshalledClientPropertiesResult
  extends _ClientPropertiesResult {
  /**
   * <p>Information about the Amazon WorkSpaces client.</p>
   */
  ClientProperties?: _UnmarshalledClientProperties;
}
