/**
 * <p>Represents a device filter used to select a set of devices to be included in a test run. This data structure is passed in as the <code>deviceSelectionConfiguration</code> parameter to ScheduleRun. For an example of the JSON request syntax, see <a>ScheduleRun</a>.</p> <p>It is also passed in as the <code>filters</code> parameter to ListDevices. For an example of the JSON request syntax, see <a>ListDevices</a>.</p>
 */
export interface _DeviceFilter {
  /**
   * <p>The aspect of a device such as platform or model used as the selection criteria in a device filter.</p> <p>The supported operators for each attribute are provided in the following list.</p> <dl> <dt>ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device. For example, "arn:aws:devicefarm:us-west-2::device:12345Example".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>PLATFORM</dt> <dd> <p>The device platform. Valid values are "ANDROID" or "IOS".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>OS_VERSION</dt> <dd> <p>The operating system version. For example, "10.3.2".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>GREATER_THAN</code>, <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>, <code>LESS_THAN</code>, <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code> </p> </dd> <dt>MODEL</dt> <dd> <p>The device model. For example, "iPad 5th Gen".</p> <p> <i>Supported operators</i>: <code>CONTAINS</code>, <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>AVAILABILITY</dt> <dd> <p>The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>FORM_FACTOR</dt> <dd> <p>The device form factor. Valid values are "PHONE" or "TABLET".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>MANUFACTURER</dt> <dd> <p>The device manufacturer. For example, "Apple".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>REMOTE_ACCESS_ENABLED</dt> <dd> <p>Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>REMOTE_DEBUG_ENABLED</dt> <dd> <p>Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>INSTANCE_ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device instance.</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>INSTANCE_LABELS</dt> <dd> <p>The label of the device instance.</p> <p> <i>Supported operators</i>: <code>CONTAINS</code> </p> </dd> <dt>FLEET_TYPE</dt> <dd> <p>The fleet type. Valid values are "PUBLIC" or "PRIVATE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> </dl>
   */
  attribute?:
    | "ARN"
    | "PLATFORM"
    | "OS_VERSION"
    | "MODEL"
    | "AVAILABILITY"
    | "FORM_FACTOR"
    | "MANUFACTURER"
    | "REMOTE_ACCESS_ENABLED"
    | "REMOTE_DEBUG_ENABLED"
    | "INSTANCE_ARN"
    | "INSTANCE_LABELS"
    | "FLEET_TYPE"
    | string;

  /**
   * <p>Specifies how Device Farm compares the filter's attribute to the value. For the operators that are supported by each attribute, see the attribute descriptions.</p>
   */
  operator?:
    | "EQUALS"
    | "LESS_THAN"
    | "LESS_THAN_OR_EQUALS"
    | "GREATER_THAN"
    | "GREATER_THAN_OR_EQUALS"
    | "IN"
    | "NOT_IN"
    | "CONTAINS"
    | string;

  /**
   * <p>An array of one or more filter values used in a device filter.</p> <p class="title"> <b>Operator Values</b> </p> <ul> <li> <p>The IN and NOT_IN operators can take a values array that has more than one element.</p> </li> <li> <p>The other operators require an array with a single element.</p> </li> </ul> <p class="title"> <b>Attribute Values</b> </p> <ul> <li> <p>The PLATFORM attribute can be set to "ANDROID" or "IOS".</p> </li> <li> <p>The AVAILABILITY attribute can be set to "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p> </li> <li> <p>The FORM_FACTOR attribute can be set to "PHONE" or "TABLET".</p> </li> <li> <p>The FLEET_TYPE attribute can be set to "PUBLIC" or "PRIVATE".</p> </li> </ul>
   */
  values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDeviceFilter extends _DeviceFilter {
  /**
   * <p>An array of one or more filter values used in a device filter.</p> <p class="title"> <b>Operator Values</b> </p> <ul> <li> <p>The IN and NOT_IN operators can take a values array that has more than one element.</p> </li> <li> <p>The other operators require an array with a single element.</p> </li> </ul> <p class="title"> <b>Attribute Values</b> </p> <ul> <li> <p>The PLATFORM attribute can be set to "ANDROID" or "IOS".</p> </li> <li> <p>The AVAILABILITY attribute can be set to "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p> </li> <li> <p>The FORM_FACTOR attribute can be set to "PHONE" or "TABLET".</p> </li> <li> <p>The FLEET_TYPE attribute can be set to "PUBLIC" or "PRIVATE".</p> </li> </ul>
   */
  values?: Array<string>;
}
