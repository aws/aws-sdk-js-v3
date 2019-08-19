import {
  _DeviceTemplate,
  _UnmarshalledDeviceTemplate
} from "./_DeviceTemplate";

/**
 * <p>An object defining the template for a placement.</p>
 */
export interface _PlacementTemplate {
  /**
   * <p>The default attributes (key/value pairs) to be applied to all placements using this template.</p>
   */
  defaultAttributes?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this (<a>PlacementTemplate</a>) template.</p>
   */
  deviceTemplates?:
    | { [key: string]: _DeviceTemplate }
    | Iterable<[string, _DeviceTemplate]>;
}

export interface _UnmarshalledPlacementTemplate extends _PlacementTemplate {
  /**
   * <p>The default attributes (key/value pairs) to be applied to all placements using this template.</p>
   */
  defaultAttributes?: { [key: string]: string };

  /**
   * <p>An object specifying the <a>DeviceTemplate</a> for all placements using this (<a>PlacementTemplate</a>) template.</p>
   */
  deviceTemplates?: { [key: string]: _UnmarshalledDeviceTemplate };
}
