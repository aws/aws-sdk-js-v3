import {
  _ThingConnectivity,
  _UnmarshalledThingConnectivity
} from "./_ThingConnectivity";

/**
 * <p>The thing search index document.</p>
 */
export interface _ThingDocument {
  /**
   * <p>The thing name.</p>
   */
  thingName?: string;

  /**
   * <p>The thing ID.</p>
   */
  thingId?: string;

  /**
   * <p>The thing type name.</p>
   */
  thingTypeName?: string;

  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: Array<string> | Iterable<string>;

  /**
   * <p>The attributes.</p>
   */
  attributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The shadow.</p>
   */
  shadow?: string;

  /**
   * <p>Indicates whether the thing is connected to the AWS IoT service.</p>
   */
  connectivity?: _ThingConnectivity;
}

export interface _UnmarshalledThingDocument extends _ThingDocument {
  /**
   * <p>Thing group names.</p>
   */
  thingGroupNames?: Array<string>;

  /**
   * <p>The attributes.</p>
   */
  attributes?: { [key: string]: string };

  /**
   * <p>Indicates whether the thing is connected to the AWS IoT service.</p>
   */
  connectivity?: _UnmarshalledThingConnectivity;
}
