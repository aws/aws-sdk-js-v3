/**
 * <p>Represents a condition for a device pool.</p>
 */
export interface _Rule {
  /**
   * <p>The rule's stringified attribute. For example, specify the value as <code>"\"abc\""</code>.</p> <p>The supported operators for each attribute are provided in the following list.</p> <dl> <dt>APPIUM_VERSION</dt> <dd> <p>The Appium version for the test.</p> <p> <i>Supported operators</i>: <code>CONTAINS</code> </p> </dd> <dt>ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device. For example, "arn:aws:devicefarm:us-west-2::device:12345Example".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>AVAILABILITY</dt> <dd> <p>The current availability of the device. Valid values are "AVAILABLE", "HIGHLY_AVAILABLE", "BUSY", or "TEMPORARY_NOT_AVAILABLE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>FLEET_TYPE</dt> <dd> <p>The fleet type. Valid values are "PUBLIC" or "PRIVATE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>FORM_FACTOR</dt> <dd> <p>The device form factor. Valid values are "PHONE" or "TABLET".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>INSTANCE_ARN</dt> <dd> <p>The Amazon Resource Name (ARN) of the device instance.</p> <p> <i>Supported operators</i>: <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>INSTANCE_LABELS</dt> <dd> <p>The label of the device instance.</p> <p> <i>Supported operators</i>: <code>CONTAINS</code> </p> </dd> <dt>MANUFACTURER</dt> <dd> <p>The device manufacturer. For example, "Apple".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>MODEL</dt> <dd> <p>The device model, such as "Apple iPad Air 2" or "Google Pixel".</p> <p> <i>Supported operators</i>: <code>CONTAINS</code>, <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>OS_VERSION</dt> <dd> <p>The operating system version. For example, "10.3.2".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>GREATER_THAN</code>, <code>GREATER_THAN_OR_EQUALS</code>, <code>IN</code>, <code>LESS_THAN</code>, <code>LESS_THAN_OR_EQUALS</code>, <code>NOT_IN</code> </p> </dd> <dt>PLATFORM</dt> <dd> <p>The device platform. Valid values are "ANDROID" or "IOS".</p> <p> <i>Supported operators</i>: <code>EQUALS</code>, <code>IN</code>, <code>NOT_IN</code> </p> </dd> <dt>REMOTE_ACCESS_ENABLED</dt> <dd> <p>Whether the device is enabled for remote access. Valid values are "TRUE" or "FALSE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> <dt>REMOTE_DEBUG_ENABLED</dt> <dd> <p>Whether the device is enabled for remote debugging. Valid values are "TRUE" or "FALSE".</p> <p> <i>Supported operators</i>: <code>EQUALS</code> </p> </dd> </dl>
   */
  attribute?:
    | "ARN"
    | "PLATFORM"
    | "FORM_FACTOR"
    | "MANUFACTURER"
    | "REMOTE_ACCESS_ENABLED"
    | "REMOTE_DEBUG_ENABLED"
    | "APPIUM_VERSION"
    | "INSTANCE_ARN"
    | "INSTANCE_LABELS"
    | "FLEET_TYPE"
    | "OS_VERSION"
    | "MODEL"
    | "AVAILABILITY"
    | string;

  /**
   * <p>Specifies how Device Farm compares the rule's attribute to the value. For the operators that are supported by each attribute, see the attribute descriptions.</p>
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
   * <p>The rule's value.</p>
   */
  value?: string;
}

export type _UnmarshalledRule = _Rule;
