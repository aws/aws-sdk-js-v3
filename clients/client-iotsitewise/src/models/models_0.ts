// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

/**
 * <p>Contains information for a group identity in an access policy.</p>
 */
export interface GroupIdentity {
  /**
   * <p>The IAM Identity Center ID of the group.</p>
   */
  id: string | undefined;
}

/**
 * <p>Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface IAMRoleIdentity {
  /**
   * <p>The ARN of the IAM role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>.</p>
   */
  arn: string | undefined;
}

/**
 * <p>Contains information about an Identity and Access Management user.</p>
 */
export interface IAMUserIdentity {
  /**
   * <p>The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>.</p>
   *          <note>
   *             <p>If you delete the IAM user, access policies that contain this identity include an
   *         empty <code>arn</code>. You can delete the access policy for the IAM user that no longer
   *         exists.</p>
   *          </note>
   */
  arn: string | undefined;
}

/**
 * <p>Contains information for a user identity in an access policy.</p>
 */
export interface UserIdentity {
  /**
   * <p>The IAM Identity Center ID of the user.</p>
   */
  id: string | undefined;
}

/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p>
 *          <note>
 *             <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the
 *         IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p>
 *          </note>
 */
export interface Identity {
  /**
   * <p>An IAM Identity Center user identity.</p>
   */
  user?: UserIdentity;

  /**
   * <p>An IAM Identity Center group identity.</p>
   */
  group?: GroupIdentity;

  /**
   * <p>An IAM user identity.</p>
   */
  iamUser?: IAMUserIdentity;

  /**
   * <p>An IAM role identity.</p>
   */
  iamRole?: IAMRoleIdentity;
}

export enum Permission {
  ADMINISTRATOR = "ADMINISTRATOR",
  VIEWER = "VIEWER",
}

/**
 * <p>Identifies an IoT SiteWise Monitor portal.</p>
 */
export interface PortalResource {
  /**
   * <p>The ID of the portal.</p>
   */
  id: string | undefined;
}

/**
 * <p>Identifies a specific IoT SiteWise Monitor project.</p>
 */
export interface ProjectResource {
  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;
}

/**
 * <p>Contains an IoT SiteWise Monitor resource ID for a portal or project.</p>
 */
export interface Resource {
  /**
   * <p>A portal resource.</p>
   */
  portal?: PortalResource;

  /**
   * <p>A project resource.</p>
   */
  project?: ProjectResource;
}

/**
 * <p>Contains an access policy that defines an identity's access to an IoT SiteWise Monitor
 *       resource.</p>
 */
export interface AccessPolicySummary {
  /**
   * <p>The ID of the access policy.</p>
   */
  id: string | undefined;

  /**
   * <p>The identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user).</p>
   */
  identity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource (a portal or project).</p>
   */
  resource: Resource | undefined;

  /**
   * <p>The permissions for the access policy. Note that a project <code>ADMINISTRATOR</code> is
   *       also known as a project owner.</p>
   */
  permission: Permission | string | undefined;

  /**
   * <p>The date the access policy was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

export enum Quality {
  BAD = "BAD",
  GOOD = "GOOD",
  UNCERTAIN = "UNCERTAIN",
}

/**
 * <p>Contains the (pre-calculated) aggregate values for an asset property.</p>
 */
export interface Aggregates {
  /**
   * <p>The average (mean) value of the time series over a time interval window.</p>
   */
  average?: number;

  /**
   * <p>The count of data points in the time series over a time interval window.</p>
   */
  count?: number;

  /**
   * <p>The maximum value of the time series over a time interval window.</p>
   */
  maximum?: number;

  /**
   * <p>The minimum value of the time series over a time interval window.</p>
   */
  minimum?: number;

  /**
   * <p>The sum of the time series over a time interval window.</p>
   */
  sum?: number;

  /**
   * <p>The standard deviation of the time series over a time interval window.</p>
   */
  standardDeviation?: number;
}

/**
 * <p>Contains aggregated asset property values (for example, average, minimum, and
 *       maximum).</p>
 */
export interface AggregatedValue {
  /**
   * <p>The date the aggregating computations occurred, in Unix epoch time.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>The quality of the aggregated data.</p>
   */
  quality?: Quality | string;

  /**
   * <p>The value of the aggregates.</p>
   */
  value: Aggregates | undefined;
}

export enum AggregateType {
  AVERAGE = "AVERAGE",
  COUNT = "COUNT",
  MAXIMUM = "MAXIMUM",
  MINIMUM = "MINIMUM",
  STANDARD_DEVIATION = "STANDARD_DEVIATION",
  SUM = "SUM",
}

/**
 * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
 *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
 *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
 */
export interface Alarms {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows the alarm to perform actions and access Amazon Web Services
   *       resources and services, such as IoT Events.</p>
   */
  alarmRoleArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function that manages alarm notifications. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">Managing alarm
   *         notifications</a> in the <i>IoT Events Developer Guide</i>.</p>
   */
  notificationLambdaArn?: string;
}

export enum PropertyDataType {
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  INTEGER = "INTEGER",
  STRING = "STRING",
  STRUCT = "STRUCT",
}

export enum PropertyNotificationState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value
 *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface PropertyNotification {
  /**
   * <p>The MQTT topic to which IoT SiteWise publishes property value update notifications.</p>
   */
  topic: string | undefined;

  /**
   * <p>The current notification state.</p>
   */
  state: PropertyNotificationState | string | undefined;
}

/**
 * <p>Contains asset property information.</p>
 */
export interface AssetProperty {
  /**
   * <p>The ID of the asset property.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
   */
  notification?: PropertyNotification;

  /**
   * <p>The data type of the asset property.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   */
  dataTypeSpec?: string;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   */
  unit?: string;
}

/**
 * <p>Contains information about a composite model in an asset. This object contains the asset's
 *       properties that you define in the composite model.</p>
 */
export interface AssetCompositeModel {
  /**
   * <p>The name of the composite model.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the composite model.</p>
   */
  description?: string;

  /**
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   */
  type: string | undefined;

  /**
   * <p>The asset properties that this composite model defines.</p>
   */
  properties: AssetProperty[] | undefined;

  /**
   * <p>
   *       The ID of the asset composite model.
   *     </p>
   */
  id?: string;
}

export enum AssetErrorCode {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>Contains error details for the requested associate project asset action.</p>
 */
export interface AssetErrorDetails {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The error code.</p>
   */
  code: AssetErrorCode | string | undefined;

  /**
   * <p>The error message.</p>
   */
  message: string | undefined;
}

/**
 * <p>Describes an asset hierarchy that contains a hierarchy's name and ID.</p>
 */
export interface AssetHierarchy {
  /**
   * <p>The ID of the hierarchy. This ID is a <code>hierarchyId</code>.</p>
   */
  id?: string;

  /**
   * <p>The hierarchy name provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>
   *       API operation.</p>
   */
  name: string | undefined;
}

/**
 * <p>Contains information about a parent asset and a child asset that are related through an
 *       asset hierarchy.</p>
 */
export interface AssetHierarchyInfo {
  /**
   * <p>The ID of the parent asset in this asset relationship.</p>
   */
  parentAssetId?: string;

  /**
   * <p>The ID of the child asset in this asset relationship.</p>
   */
  childAssetId?: string;
}

/**
 * <p>Contains an asset attribute property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Attribute {
  /**
   * <p>The default value of the asset model property attribute. All assets that you create from
   *       the asset model contain this attribute value. You can update an attribute's value after you
   *       create an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html">Updating attribute values</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  defaultValue?: string;
}

export enum ForwardingConfigState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>The forwarding configuration for a given property.</p>
 */
export interface ForwardingConfig {
  /**
   * <p>The forwarding state for the given property. </p>
   */
  state: ForwardingConfigState | string | undefined;
}

/**
 * <p>The processing configuration for the given measurement property.
 *       You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud.
 *       By default, measurements are forwarded to the cloud.</p>
 */
export interface MeasurementProcessingConfig {
  /**
   * <p>The forwarding configuration for the given measurement property. </p>
   */
  forwardingConfig: ForwardingConfig | undefined;
}

/**
 * <p>Contains an asset measurement property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Measurement {
  /**
   * <p>The processing configuration for the given measurement property.
   *       You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud.
   *       By default, measurements are forwarded to the cloud.</p>
   */
  processingConfig?: MeasurementProcessingConfig;
}

export enum ComputeLocation {
  CLOUD = "CLOUD",
  EDGE = "EDGE",
}

/**
 * <p>The processing configuration for the given metric property.
 *       You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud.
 *       By default, metrics are forwarded to the cloud.</p>
 */
export interface MetricProcessingConfig {
  /**
   * <p>The compute location for the given metric property. </p>
   */
  computeLocation: ComputeLocation | string | undefined;
}

/**
 * <p>Identifies a property value used in an expression.</p>
 */
export interface VariableValue {
  /**
   * <p>The ID of the property to use as the variable. You can use the property <code>name</code>
   *       if it's from the same asset model.</p>
   */
  propertyId: string | undefined;

  /**
   * <p>The ID of the hierarchy to query for the property ID. You can use the hierarchy's name
   *       instead of the hierarchy's ID.</p>
   *          <p>You use a hierarchy ID instead of a model ID because you can have several hierarchies
   *       using the same model and therefore the same <code>propertyId</code>. For example, you might
   *       have separately grouped assets that come from the same asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId?: string;
}

/**
 * <p>Contains expression variable information.</p>
 */
export interface ExpressionVariable {
  /**
   * <p>The friendly name of the variable to be used in the expression.</p>
   */
  name: string | undefined;

  /**
   * <p>The variable that identifies an asset property from which to use values.</p>
   */
  value: VariableValue | undefined;
}

/**
 * <p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and
 *       contiguous time window. You can use this window in metrics to aggregate data from properties
 *       and other assets.</p>
 *          <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code> when you
 *       specify an interval or offset. Note that <code>m</code> represents minutes, <code>h</code>
 *       represents hours, <code>d</code> represents days, and <code>w</code> represents weeks. You can
 *       also use <code>s</code> to represent seconds in <code>offset</code>.</p>
 *          <p>The <code>interval</code> and <code>offset</code> parameters support the <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>. For example,
 *         <code>PT5S</code> represents 5 seconds, <code>PT5M</code> represents 5 minutes, and
 *         <code>PT5H</code> represents 5 hours.</p>
 */
export interface TumblingWindow {
  /**
   * <p>The time interval for the tumbling window. The interval time must be between 1 minute and
   *       1 week.</p>
   *          <p>IoT SiteWise computes the <code>1w</code> interval the end of Sunday at midnight each week (UTC),
   *       the <code>1d</code> interval at the end of each day at midnight (UTC), the <code>1h</code>
   *       interval at the end of each hour, and so on. </p>
   *          <p>When IoT SiteWise aggregates data points for metric computations, the start of each interval is
   *       exclusive and the end of each interval is inclusive. IoT SiteWise places the computed data point at
   *       the end of the interval.</p>
   */
  interval: string | undefined;

  /**
   * <p>The offset for the tumbling window. The <code>offset</code> parameter accepts the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>The offset time.</p>
   *                <p>For example, if you specify <code>18h</code> for <code>offset</code> and
   *             <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following
   *           ways:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you create the metric before or at 6 PM (UTC), you get the first aggregation
   *               result at 6 PM (UTC) on the day when you create the metric.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you create the metric after 6 PM (UTC), you get the first aggregation result at
   *               6 PM (UTC) the next day.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The ISO 8601 format.</p>
   *                <p>For example, if you specify <code>PT18H</code> for <code>offset</code> and
   *             <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following
   *           ways:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you create the metric before or at 6 PM (UTC), you get the first aggregation
   *               result at 6 PM (UTC) on the day when you create the metric.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you create the metric after 6 PM (UTC), you get the first aggregation result at
   *               6 PM (UTC) the next day.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The 24-hour clock.</p>
   *                <p>For example, if you specify <code>00:03:00</code> for <code>offset</code>,
   *             <code>5m</code> for <code>interval</code>, and you create the metric at 2 PM (UTC), you
   *           get the first aggregation result at 2:03 PM (UTC). You get the second aggregation result
   *           at 2:08 PM (UTC). </p>
   *             </li>
   *             <li>
   *                <p>The offset time zone.</p>
   *                <p>For example, if you specify <code>2021-07-23T18:00-08</code> for <code>offset</code>
   *           and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the
   *           following ways:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you create the metric before or at 6 PM (PST), you get the first aggregation
   *               result at 6 PM (PST) on the day when you create the metric.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you create the metric after 6 PM (PST), you get the first aggregation result at
   *               6 PM (PST) the next day.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  offset?: string;
}

/**
 * <p>Contains a time interval window used for data aggregate computations (for example,
 *       average, sum, count, and so on).</p>
 */
export interface MetricWindow {
  /**
   * <p>The tumbling time interval window.</p>
   */
  tumbling?: TumblingWindow;
}

/**
 * <p>Contains an asset metric property. With metrics, you can calculate aggregate functions,
 *       such as an average, maximum, or minimum, as specified through an expression. A metric maps
 *       several values to a single value (such as a sum).</p>
 *          <p>The maximum number of dependent/cascading variables used in any one metric calculation is
 *       10. Therefore, a <i>root</i> metric can have
 *       up to 10 cascading metrics in its computational dependency
 *       tree. Additionally, a metric can only have a data type of <code>DOUBLE</code> and consume
 *       properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Metric {
  /**
   * <p>The mathematical expression that defines the metric aggregation function. You can specify
   *       up to 10 variables per expression. You can specify up to 10 functions
   *       per expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  expression: string | undefined;

  /**
   * <p>The list of variables used in the expression.</p>
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * <p>The window (time interval) over which IoT SiteWise computes the metric's aggregation expression.
   *       IoT SiteWise computes one data point per <code>window</code>.</p>
   */
  window: MetricWindow | undefined;

  /**
   * <p>The processing configuration for the given metric property.
   *       You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud.
   *       By default, metrics are forwarded to the cloud.</p>
   */
  processingConfig?: MetricProcessingConfig;
}

/**
 * <p>The processing configuration for the given transform property.
 *       You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud.
 *       You can also configure transforms to be computed at the edge or in the cloud.</p>
 */
export interface TransformProcessingConfig {
  /**
   * <p>The compute location for the given transform property. </p>
   */
  computeLocation: ComputeLocation | string | undefined;

  /**
   * <p>The forwarding configuration for a given property.</p>
   */
  forwardingConfig?: ForwardingConfig;
}

/**
 * <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's
 *       data points from one form to another. For example, you can use a transform to convert a
 *       Celsius data stream to Fahrenheit by applying the transformation expression to each data point
 *       of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and
 *       consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Transform {
  /**
   * <p>The mathematical expression that defines the transformation function. You can specify up
   *       to 10 variables per expression. You can specify up to 10 functions per
   *       expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  expression: string | undefined;

  /**
   * <p>The list of variables used in the expression.</p>
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * <p>The processing configuration for the given transform property.
   *       You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud.
   *       You can also configure transforms to be computed at the edge or in the cloud.</p>
   */
  processingConfig?: TransformProcessingConfig;
}

/**
 * <p>Contains a property type, which can be one of <code>attribute</code>,
 *         <code>measurement</code>, <code>metric</code>, or <code>transform</code>.</p>
 */
export interface PropertyType {
  /**
   * <p>Specifies an asset attribute property. An attribute generally contains static information,
   *       such as the serial number of an <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">IIoT</a> wind turbine.</p>
   */
  attribute?: Attribute;

  /**
   * <p>Specifies an asset measurement property. A measurement represents a device's raw sensor
   *       data stream, such as timestamped temperature values or timestamped power values.</p>
   */
  measurement?: Measurement;

  /**
   * <p>Specifies an asset transform property. A transform contains a mathematical expression that
   *       maps a property's data points from one form to another, such as a unit conversion from Celsius
   *       to Fahrenheit.</p>
   */
  transform?: Transform;

  /**
   * <p>Specifies an asset metric property. A metric contains a mathematical expression that uses
   *       aggregate functions to process all input data points over a time interval and output a single
   *       data point, such as to calculate the average hourly temperature.</p>
   */
  metric?: Metric;
}

/**
 * <p>Contains information about an asset model property.</p>
 */
export interface AssetModelProperty {
  /**
   * <p>The ID of the asset model property.</p>
   */
  id?: string;

  /**
   * <p>The name of the asset model property.</p>
   */
  name: string | undefined;

  /**
   * <p>The data type of the asset model property.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   */
  dataTypeSpec?: string;

  /**
   * <p>The unit of the asset model property, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   */
  unit?: string;

  /**
   * <p>The property type (see <code>PropertyType</code>).</p>
   */
  type: PropertyType | undefined;
}

/**
 * <p>Contains information about a composite model in an asset model. This object contains the
 *       asset property definitions that you define in the composite model.</p>
 */
export interface AssetModelCompositeModel {
  /**
   * <p>The name of the composite model.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the composite model.</p>
   */
  description?: string;

  /**
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   */
  type: string | undefined;

  /**
   * <p>The asset property definitions for this composite model.</p>
   */
  properties?: AssetModelProperty[];

  /**
   * <p>
   *       The ID of the asset model composite model.
   *     </p>
   */
  id?: string;
}

/**
 * <p>Contains an asset model property definition. This property definition is applied to all
 *       assets created from the asset model.</p>
 */
export interface AssetModelPropertyDefinition {
  /**
   * <p>The name of the property definition.</p>
   */
  name: string | undefined;

  /**
   * <p>The data type of the property definition.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to
   *       identify the type of the structure for this property.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter is required on properties
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model in which you
   *       define this property. Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite
   *       models.</p>
   */
  dataTypeSpec?: string;

  /**
   * <p>The unit of the property definition, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   */
  unit?: string;

  /**
   * <p>The property definition type (see <code>PropertyType</code>). You can only specify one
   *       type in a property definition.</p>
   */
  type: PropertyType | undefined;
}

/**
 * <p>Contains a composite model definition in an asset model. This composite model definition
 *       is applied to all assets created from the asset model.</p>
 */
export interface AssetModelCompositeModelDefinition {
  /**
   * <p>The name of the composite model.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the composite model.</p>
   */
  description?: string;

  /**
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   */
  type: string | undefined;

  /**
   * <p>The asset property definitions for this composite model.</p>
   */
  properties?: AssetModelPropertyDefinition[];
}

/**
 * <p>Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model
 *       ID that specifies the type of asset that can be in this hierarchy.</p>
 */
export interface AssetModelHierarchy {
  /**
   * <p>The ID of the asset model hierarchy. This ID is a <code>hierarchyId</code>.</p>
   */
  id?: string;

  /**
   * <p>The name of the asset model hierarchy that you specify by using the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset model. All assets in this hierarchy must be instances of the
   *         <code>childAssetModelId</code> asset model.</p>
   */
  childAssetModelId: string | undefined;
}

/**
 * <p>Contains an asset model hierarchy used in asset model creation. An asset model hierarchy
 *       determines the kind (or type) of asset that can belong to a hierarchy.</p>
 */
export interface AssetModelHierarchyDefinition {
  /**
   * <p>The name of the asset model hierarchy definition (as specified in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation).</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of an asset model for this hierarchy.</p>
   */
  childAssetModelId: string | undefined;
}

/**
 * <p>Contains a summary of a property associated with a model.</p>
 */
export interface AssetModelPropertySummary {
  /**
   * <p>The ID of the property.</p>
   */
  id?: string;

  /**
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * <p>The data type of the property.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   */
  dataTypeSpec?: string;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the property.</p>
   */
  unit?: string;

  /**
   * <p>Contains a property type, which can be one of <code>attribute</code>,
   *         <code>measurement</code>, <code>metric</code>, or <code>transform</code>.</p>
   */
  type: PropertyType | undefined;

  /**
   * <p>
   *       The ID of the composite model that contains the asset model property.
   *     </p>
   */
  assetModelCompositeModelId?: string;
}

export enum AssetModelState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  PROPAGATING = "PROPAGATING",
  UPDATING = "UPDATING",
}

export enum ErrorCode {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

export enum DetailedErrorCode {
  INCOMPATIBLE_COMPUTE_LOCATION = "INCOMPATIBLE_COMPUTE_LOCATION",
  INCOMPATIBLE_FORWARDING_CONFIGURATION = "INCOMPATIBLE_FORWARDING_CONFIGURATION",
}

/**
 * <p>Contains detailed error information. </p>
 */
export interface DetailedError {
  /**
   * <p>The error code. </p>
   */
  code: DetailedErrorCode | string | undefined;

  /**
   * <p>The error message. </p>
   */
  message: string | undefined;
}

/**
 * <p>Contains the details of an IoT SiteWise error.</p>
 */
export interface ErrorDetails {
  /**
   * <p>The error code.</p>
   */
  code: ErrorCode | string | undefined;

  /**
   * <p>The error message.</p>
   */
  message: string | undefined;

  /**
   * <p> A list of detailed errors. </p>
   */
  details?: DetailedError[];
}

/**
 * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
 *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface AssetModelStatus {
  /**
   * <p>The current state of the asset model.</p>
   */
  state: AssetModelState | string | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   */
  error?: ErrorDetails;
}

/**
 * <p>Contains a summary of an asset model.</p>
 */
export interface AssetModelSummary {
  /**
   * <p>The ID of the asset model (used with IoT SiteWise APIs).</p>
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the asset model.</p>
   */
  name: string | undefined;

  /**
   * <p>The asset model description.</p>
   */
  description: string | undefined;

  /**
   * <p>The date the asset model was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset model.</p>
   */
  status: AssetModelStatus | undefined;
}

/**
 * <p>Contains a summary of a property associated with an asset.</p>
 */
export interface AssetPropertySummary {
  /**
   * <p>The ID of the property.</p>
   */
  id?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * <p>
   *       The unit of measure (such as Newtons or RPM) of the asset property.
   *     </p>
   */
  unit?: string;

  /**
   * <p>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  notification?: PropertyNotification;

  /**
   * <p>
   *       The ID of the composite model that contains the asset property.
   *     </p>
   */
  assetCompositeModelId?: string;
}

/**
 * <p>Contains a timestamp with optional nanosecond granularity.</p>
 */
export interface TimeInNanos {
  /**
   * <p>The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is
   *       provided by <code>offsetInNanos</code>.</p>
   */
  timeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset from <code>timeInSeconds</code>.</p>
   */
  offsetInNanos?: number;
}

/**
 * <p>Contains an asset property value (of a single type only).</p>
 */
export interface Variant {
  /**
   * <p>Asset property data of type string (sequence of characters).</p>
   */
  stringValue?: string;

  /**
   * <p>Asset property data of type integer (whole number).</p>
   */
  integerValue?: number;

  /**
   * <p>Asset property data of type double (floating point number).</p>
   */
  doubleValue?: number;

  /**
   * <p>Asset property data of type Boolean (true or false).</p>
   */
  booleanValue?: boolean;
}

/**
 * <p>Contains asset property value information.</p>
 */
export interface AssetPropertyValue {
  /**
   * <p>The value of the asset property (see <code>Variant</code>).</p>
   */
  value: Variant | undefined;

  /**
   * <p>The timestamp of the asset property value.</p>
   */
  timestamp: TimeInNanos | undefined;

  /**
   * <p>The quality of the asset property value.</p>
   */
  quality?: Quality | string;
}

export enum AssetRelationshipType {
  HIERARCHY = "HIERARCHY",
}

/**
 * <p>Contains information about assets that are related to one another.</p>
 */
export interface AssetRelationshipSummary {
  /**
   * <p>The assets that are related through an asset hierarchy.</p>
   *          <p>This object is present if the <code>relationshipType</code> is
   *       <code>HIERARCHY</code>.</p>
   */
  hierarchyInfo?: AssetHierarchyInfo;

  /**
   * <p>The relationship type of the assets in this relationship. This value is one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HIERARCHY</code> – The assets are related through an asset hierarchy. If
   *           you specify this relationship type, this asset relationship includes the
   *             <code>hierarchyInfo</code> object.</p>
   *             </li>
   *          </ul>
   */
  relationshipType: AssetRelationshipType | string | undefined;
}

export enum AssetState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>Contains information about the current status of an asset. For more information, see
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
 *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface AssetStatus {
  /**
   * <p>The current status of the asset.</p>
   */
  state: AssetState | string | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   */
  error?: ErrorDetails;
}

/**
 * <p>Contains a summary of an asset.</p>
 */
export interface AssetSummary {
  /**
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset model used to create this asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset.</p>
   */
  status: AssetStatus | undefined;

  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>A description for the asset.</p>
   */
  description?: string;
}

export interface AssociateAssetsRequest {
  /**
   * <p>The ID of the parent asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings
   *       of assets to be formed that all come from the same asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * <p>The ID of the child asset to be associated.</p>
   */
  childAssetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 */
export class ConflictingOperationException extends __BaseException {
  readonly name: "ConflictingOperationException" = "ConflictingOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that conflicts with this operation.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that conflicts with this operation.</p>
   */
  resourceArn: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictingOperationException, __BaseException>) {
    super({
      name: "ConflictingOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictingOperationException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * <p>IoT SiteWise can't process your request right now. Try again later.</p>
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>The resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that already exists.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that already exists.</p>
   */
  resourceArn: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
}

/**
 * <p>The requested resource can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>Contains a summary of an associated asset.</p>
 */
export interface AssociatedAssetsSummary {
  /**
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset model used to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset.</p>
   */
  status: AssetStatus | undefined;

  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>A description for the asset.</p>
   */
  description?: string;
}

export interface AssociateTimeSeriesToAssetPropertyRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   */
  alias: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export enum AuthMode {
  IAM = "IAM",
  SSO = "SSO",
}

export interface BatchAssociateProjectAssetsRequest {
  /**
   * <p>The ID of the project to which to associate the assets.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The IDs of the assets to be associated to the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface BatchAssociateProjectAssetsResponse {
  /**
   * <p>A list of associated error information, if any.</p>
   */
  errors?: AssetErrorDetails[];
}

export interface BatchDisassociateProjectAssetsRequest {
  /**
   * <p>The ID of the project from which to disassociate the assets.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The IDs of the assets to be disassociated from the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface BatchDisassociateProjectAssetsResponse {
  /**
   * <p>A list of associated error information, if any.</p>
   */
  errors?: AssetErrorDetails[];
}

export enum TimeOrdering {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>Contains information for an asset property aggregate entry that is associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 *          <p>To identify an asset property, you must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
 *             </li>
 *             <li>
 *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
 *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
 *             </li>
 *          </ul>
 */
export interface BatchGetAssetPropertyAggregatesEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The data aggregating function.</p>
   */
  aggregateTypes: (AggregateType | string)[] | undefined;

  /**
   * <p>The time interval over which to aggregate data.</p>
   */
  resolution: string | undefined;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate: Date | undefined;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate: Date | undefined;

  /**
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: (Quality | string)[];

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering | string;
}

export interface BatchGetAssetPropertyAggregatesRequest {
  /**
   * <p>The list of asset property aggregate entries for the batch get request. You can specify up
   *       to 16 entries per request.</p>
   */
  entries: BatchGetAssetPropertyAggregatesEntry[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is less than 1 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is less than the value of
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p>
   *             </li>
   *          </ul>
   */
  maxResults?: number;
}

export enum BatchGetAssetPropertyAggregatesErrorCode {
  AccessDeniedException = "AccessDeniedException",
  InvalidRequestException = "InvalidRequestException",
  ResourceNotFoundException = "ResourceNotFoundException",
}

/**
 * <p>Contains error information for an asset property aggregate entry that is associated with
 *       the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 */
export interface BatchGetAssetPropertyAggregatesErrorEntry {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | string | undefined;

  /**
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;
}

export enum BatchEntryCompletionStatus {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

/**
 * <p>Contains the error code and the timestamp for an asset property aggregate entry that is
 *       associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 */
export interface BatchGetAssetPropertyAggregatesErrorInfo {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | string | undefined;

  /**
   * <p>The date the error occurred, in Unix epoch time.</p>
   */
  errorTimestamp: Date | undefined;
}

/**
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request.</p>
 */
export interface BatchGetAssetPropertyAggregatesSkippedEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
   */
  completionStatus: BatchEntryCompletionStatus | string | undefined;

  /**
   * <p>The error information, such as the error code and the timestamp.</p>
   */
  errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
}

/**
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 */
export interface BatchGetAssetPropertyAggregatesSuccessEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The requested aggregated asset property values (for example, average, minimum, and
   *       maximum).</p>
   */
  aggregatedValues: AggregatedValue[] | undefined;
}

export interface BatchGetAssetPropertyAggregatesResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchGetAssetPropertyAggregatesErrorEntry[] | undefined;

  /**
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   */
  successEntries: BatchGetAssetPropertyAggregatesSuccessEntry[] | undefined;

  /**
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   */
  skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntry[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>The requested service is unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * <p>Contains information for an asset property value entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 *          <p>To identify an asset property, you must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
 *             </li>
 *             <li>
 *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
 *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
 *             </li>
 *          </ul>
 */
export interface BatchGetAssetPropertyValueEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;
}

export interface BatchGetAssetPropertyValueRequest {
  /**
   * <p>The list of asset property value entries for the batch get request. You can specify up to
   *       16 entries per request.</p>
   */
  entries: BatchGetAssetPropertyValueEntry[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

export enum BatchGetAssetPropertyValueErrorCode {
  AccessDeniedException = "AccessDeniedException",
  InvalidRequestException = "InvalidRequestException",
  ResourceNotFoundException = "ResourceNotFoundException",
}

/**
 * <p>Contains error information for an asset property value entry that is associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 */
export interface BatchGetAssetPropertyValueErrorEntry {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | string | undefined;

  /**
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;
}

/**
 * <p>The error information, such as the error code and the timestamp.</p>
 */
export interface BatchGetAssetPropertyValueErrorInfo {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | string | undefined;

  /**
   * <p>The date the error occurred, in Unix epoch time.</p>
   */
  errorTimestamp: Date | undefined;
}

/**
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.</p>
 */
export interface BatchGetAssetPropertyValueSkippedEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.</p>
   */
  completionStatus: BatchEntryCompletionStatus | string | undefined;

  /**
   * <p>The error information, such as the error code and the timestamp.</p>
   */
  errorInfo?: BatchGetAssetPropertyValueErrorInfo;
}

/**
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 */
export interface BatchGetAssetPropertyValueSuccessEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>Contains asset property value information.</p>
   */
  assetPropertyValue?: AssetPropertyValue;
}

export interface BatchGetAssetPropertyValueResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchGetAssetPropertyValueErrorEntry[] | undefined;

  /**
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   */
  successEntries: BatchGetAssetPropertyValueSuccessEntry[] | undefined;

  /**
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   */
  skippedEntries: BatchGetAssetPropertyValueSkippedEntry[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains information for an asset property historical value entry that is associated with
 *       the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p>
 *          <p>To identify an asset property, you must specify one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>The <code>assetId</code> and <code>propertyId</code> of an asset property.</p>
 *             </li>
 *             <li>
 *                <p>A <code>propertyAlias</code>, which is a data stream alias (for example,
 *           <code>/company/windfarm/3/turbine/7/temperature</code>). To define an asset property's alias, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
 *             </li>
 *          </ul>
 */
export interface BatchGetAssetPropertyValueHistoryEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate?: Date;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate?: Date;

  /**
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: (Quality | string)[];

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering | string;
}

export interface BatchGetAssetPropertyValueHistoryRequest {
  /**
   * <p>The list of asset property historical value entries for the batch get request. You can
   *       specify up to 16 entries per request.</p>
   */
  entries: BatchGetAssetPropertyValueHistoryEntry[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is less than 1 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is less than the value of
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p>
   *             </li>
   *          </ul>
   */
  maxResults?: number;
}

export enum BatchGetAssetPropertyValueHistoryErrorCode {
  AccessDeniedException = "AccessDeniedException",
  InvalidRequestException = "InvalidRequestException",
  ResourceNotFoundException = "ResourceNotFoundException",
}

/**
 * <p>A list of the errors (if any) associated with the batch request. Each error entry
 *       contains the <code>entryId</code> of the entry that failed.</p>
 */
export interface BatchGetAssetPropertyValueHistoryErrorEntry {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | string | undefined;

  /**
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;
}

/**
 * <p>The error information, such as the error code and the timestamp.</p>
 */
export interface BatchGetAssetPropertyValueHistoryErrorInfo {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | string | undefined;

  /**
   * <p>The date the error occurred, in Unix epoch time.</p>
   */
  errorTimestamp: Date | undefined;
}

/**
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request.</p>
 */
export interface BatchGetAssetPropertyValueHistorySkippedEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html">BatchGetAssetPropertyValueHistory</a> API.</p>
   */
  completionStatus: BatchEntryCompletionStatus | string | undefined;

  /**
   * <p>The error information, such as the error code and the timestamp.</p>
   */
  errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
}

/**
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p>
 */
export interface BatchGetAssetPropertyValueHistorySuccessEntry {
  /**
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The requested historical values for the specified asset property.</p>
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;
}

export interface BatchGetAssetPropertyValueHistoryResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchGetAssetPropertyValueHistoryErrorEntry[] | undefined;

  /**
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   */
  successEntries: BatchGetAssetPropertyValueHistorySuccessEntry[] | undefined;

  /**
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   */
  skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntry[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * <p>Contains a list of value updates for an asset property in the list of asset entries
 *       consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API
 *       operation.</p>
 */
export interface PutAssetPropertyValueEntry {
  /**
   * <p>The user specified ID for the entry. You can use this ID to identify which entries
   *       failed.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset to update.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property for this entry.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The list of property values to upload. You can specify up to 10
   *         <code>propertyValues</code> array elements. </p>
   */
  propertyValues: AssetPropertyValue[] | undefined;
}

export interface BatchPutAssetPropertyValueRequest {
  /**
   * <p>The list of asset property value entries for the batch put request. You can specify up to
   *       10 entries per request.</p>
   */
  entries: PutAssetPropertyValueEntry[] | undefined;
}

export enum BatchPutAssetPropertyValueErrorCode {
  AccessDeniedException = "AccessDeniedException",
  ConflictingOperationException = "ConflictingOperationException",
  InternalFailureException = "InternalFailureException",
  InvalidRequestException = "InvalidRequestException",
  LimitExceededException = "LimitExceededException",
  ResourceNotFoundException = "ResourceNotFoundException",
  ServiceUnavailableException = "ServiceUnavailableException",
  ThrottlingException = "ThrottlingException",
  TimestampOutOfRangeException = "TimestampOutOfRangeException",
}

/**
 * <p>Contains error information from updating a batch of asset property values.</p>
 */
export interface BatchPutAssetPropertyError {
  /**
   * <p>The error code.</p>
   */
  errorCode: BatchPutAssetPropertyValueErrorCode | string | undefined;

  /**
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * <p>A list of timestamps for each  error, if any.</p>
   */
  timestamps: TimeInNanos[] | undefined;
}

/**
 * <p>Contains error information for asset property value entries that are associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.</p>
 */
export interface BatchPutAssetPropertyErrorEntry {
  /**
   * <p>The ID of the failed entry.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The list of update property value errors.</p>
   */
  errors: BatchPutAssetPropertyError[] | undefined;
}

export interface BatchPutAssetPropertyValueResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch put request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchPutAssetPropertyErrorEntry[] | undefined;
}

export interface CreateAccessPolicyRequest {
  /**
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   */
  accessPolicyPermission: Permission | string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A list of key-value pairs that contain metadata for the access policy. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your
   *         IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateAccessPolicyResponse {
  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}</code>
   *          </p>
   */
  accessPolicyArn: string | undefined;
}

export interface CreateAssetRequest {
  /**
   * <p>A friendly name for the asset.</p>
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset model from which to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>A description for the asset.</p>
   */
  assetDescription?: string;
}

export interface CreateAssetResponse {
  /**
   * <p>The ID of the asset. This ID uniquely identifies the asset within IoT SiteWise and can be used with other
   *       IoT SiteWise APIs.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  assetArn: string | undefined;

  /**
   * <p>The status of the asset, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

export interface CreateAssetModelRequest {
  /**
   * <p>A unique, friendly name for the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * <p>A description for the asset model.</p>
   */
  assetModelDescription?: string;

  /**
   * <p>The property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelProperties?: AssetModelPropertyDefinition[];

  /**
   * <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model
   *       whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelHierarchies?: AssetModelHierarchyDefinition[];

  /**
   * <p>The composite asset models that are part of this asset model.
   *       Composite asset models are asset models that contain specific properties. Each composite model
   *       has a type that defines the properties that the composite model supports. Use composite asset
   *       models to define alarms on this asset model.</p>
   */
  assetModelCompositeModels?: AssetModelCompositeModelDefinition[];

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset model. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateAssetModelResponse {
  /**
   * <p>The ID of the asset model. You can use this ID when you call other IoT SiteWise APIs.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code>
   *          </p>
   */
  assetModelArn: string | undefined;

  /**
   * <p>The status of the asset model, which contains a state (<code>CREATING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
 */
export interface ErrorReportLocation {
  /**
   * <p>The name of the Amazon S3 bucket to which errors associated with the bulk import job are
   *       sent.</p>
   */
  bucket: string | undefined;

  /**
   * <p>Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has
   *       a key that is its unique identifier in the bucket. Each object in a bucket has exactly one
   *       key. The prefix must end with a forward slash (/). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects
   *         using prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  prefix: string | undefined;
}

/**
 * <p>The file in Amazon S3 where your data is saved. </p>
 */
export interface File {
  /**
   * <p>The name of the Amazon S3 bucket from which data is imported.</p>
   */
  bucket: string | undefined;

  /**
   * <p>The key of the Amazon S3 object that contains your data. Each object has a key that is a unique
   *       identifier. Each object has exactly one key.</p>
   */
  key: string | undefined;

  /**
   * <p>The version ID to identify a specific version of the Amazon S3 object that contains your
   *       data.</p>
   */
  versionId?: string;
}

export enum ColumnName {
  ALIAS = "ALIAS",
  ASSET_ID = "ASSET_ID",
  DATA_TYPE = "DATA_TYPE",
  PROPERTY_ID = "PROPERTY_ID",
  QUALITY = "QUALITY",
  TIMESTAMP_NANO_OFFSET = "TIMESTAMP_NANO_OFFSET",
  TIMESTAMP_SECONDS = "TIMESTAMP_SECONDS",
  VALUE = "VALUE",
}

/**
 * <p>A .csv file.</p>
 */
export interface Csv {
  /**
   * <p>The column names specified in the .csv file.</p>
   */
  columnNames?: (ColumnName | string)[];
}

/**
 * <p>The file format of the data.</p>
 */
export interface FileFormat {
  /**
   * <p>The .csv file format.</p>
   */
  csv?: Csv;
}

/**
 * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
 */
export interface JobConfiguration {
  /**
   * <p>The file format of the data in Amazon S3.</p>
   */
  fileFormat: FileFormat | undefined;
}

export interface CreateBulkImportJobRequest {
  /**
   * <p>The unique name that helps identify the job request.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.</p>
   */
  jobRoleArn: string | undefined;

  /**
   * <p>The files in the specified Amazon S3 bucket that contain your data.</p>
   */
  files: File[] | undefined;

  /**
   * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
   */
  jobConfiguration: JobConfiguration | undefined;
}

export enum JobStatus {
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILURES = "COMPLETED_WITH_FAILURES",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
}

export interface CreateBulkImportJobResponse {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – The bulk import job has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *          </ul>
   */
  jobStatus: JobStatus | string | undefined;
}

export interface CreateDashboardRequest {
  /**
   * <p>The ID of the project in which to create the dashboard.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A friendly name for the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * <p>A description for the dashboard.</p>
   */
  dashboardDescription?: string;

  /**
   * <p>The dashboard definition specified in a JSON literal. For detailed information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A list of key-value pairs that contain metadata for the dashboard. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateDashboardResponse {
  /**
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}</code>
   *          </p>
   */
  dashboardArn: string | undefined;
}

/**
 * <p>Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass,
 *       you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass
 *       group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a
 *         gateway</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Greengrass {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Greengrass group. For more information about how to find a group's
   *       ARN, see <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html">ListGroups</a> and <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html">GetGroup</a> in the
   *         <i>IoT Greengrass API Reference</i>.</p>
   */
  groupArn: string | undefined;
}

/**
 * <p>Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass
 *       V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass
 *         device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more
 *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 */
export interface GreengrassV2 {
  /**
   * <p>The name of the IoT thing for your IoT Greengrass V2 core device.</p>
   */
  coreDeviceThingName: string | undefined;
}

/**
 * <p>Contains a gateway's platform information.</p>
 */
export interface GatewayPlatform {
  /**
   * <p>A gateway that runs on IoT Greengrass.</p>
   */
  greengrass?: Greengrass;

  /**
   * <p>A gateway that runs on IoT Greengrass V2.</p>
   */
  greengrassV2?: GreengrassV2;
}

export interface CreateGatewayRequest {
  /**
   * <p>A unique, friendly name for the gateway.</p>
   */
  gatewayName: string | undefined;

  /**
   * <p>The gateway's platform. You can only specify one platform in a gateway.</p>
   */
  gatewayPlatform: GatewayPlatform | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the gateway. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateGatewayResponse {
  /**
   * <p>The ID of the gateway device. You can use this ID when you call other IoT SiteWise APIs.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}</code>
   *          </p>
   */
  gatewayArn: string | undefined;
}

export enum ImageFileType {
  PNG = "PNG",
}

/**
 * <p>Contains an image file.</p>
 */
export interface ImageFile {
  /**
   * <p>The image file contents, represented as a base64-encoded string. The file size must be
   *       less than 1 MB.</p>
   */
  data: Uint8Array | undefined;

  /**
   * <p>The file type of the image.</p>
   */
  type: ImageFileType | string | undefined;
}

export interface CreatePortalRequest {
  /**
   * <p>A friendly name for the portal.</p>
   */
  portalName: string | undefined;

  /**
   * <p>A description for the portal.</p>
   */
  portalDescription?: string;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A logo image to display in the portal. Upload a square, high-resolution image. The
   *       image is displayed on a dark background.</p>
   */
  portalLogoImageFile?: ImageFile;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the portal. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>The service to use to authenticate users to the portal. Choose from the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSO</code> – The portal uses IAM Identity Center (successor to Single Sign-On) to authenticate users and manage
   *           user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center.
   *           For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling IAM Identity Center</a> in the
   *             <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than
   *           the China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage
   *           user permissions.</p>
   *             </li>
   *          </ul>
   *          <p>You can't change this value after you create a portal.</p>
   *          <p>Default: <code>SSO</code>
   *          </p>
   */
  portalAuthMode?: AuthMode | string;

  /**
   * <p>The email address that sends alarm notifications.</p>
   *          <important>
   *             <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda
   *           function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email
   *           address in Amazon SES</a>.</p>
   *          </important>
   */
  notificationSenderEmail?: string;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   */
  alarms?: Alarms;
}

export enum MonitorErrorCode {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
  LIMIT_EXCEEDED = "LIMIT_EXCEEDED",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
 * <p>Contains IoT SiteWise Monitor error details.</p>
 */
export interface MonitorErrorDetails {
  /**
   * <p>The error code.</p>
   */
  code?: MonitorErrorCode | string;

  /**
   * <p>The error message.</p>
   */
  message?: string;
}

export enum PortalState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>Contains information about the current status of a portal.</p>
 */
export interface PortalStatus {
  /**
   * <p>The current state of the portal.</p>
   */
  state: PortalState | string | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   */
  error?: MonitorErrorDetails;
}

export interface CreatePortalResponse {
  /**
   * <p>The ID of the created portal.</p>
   */
  portalId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}</code>
   *          </p>
   */
  portalArn: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The status of the portal, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The associated IAM Identity Center application ID, if the portal uses IAM Identity Center.</p>
   */
  ssoApplicationId: string | undefined;
}

export interface CreateProjectRequest {
  /**
   * <p>The ID of the portal in which to create the project.</p>
   */
  portalId: string | undefined;

  /**
   * <p>A friendly name for the project.</p>
   */
  projectName: string | undefined;

  /**
   * <p>A description for the project.</p>
   */
  projectDescription?: string;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A list of key-value pairs that contain metadata for the project. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

export interface CreateProjectResponse {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}</code>
   *          </p>
   */
  projectArn: string | undefined;
}

export interface DeleteAccessPolicyRequest {
  /**
   * <p>The ID of the access policy to be deleted.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DeleteAccessPolicyResponse {}

export interface DeleteAssetRequest {
  /**
   * <p>The ID of the asset to delete.</p>
   */
  assetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DeleteAssetResponse {
  /**
   * <p>The status of the asset, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

export interface DeleteAssetModelRequest {
  /**
   * <p>The ID of the asset model to delete.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DeleteAssetModelResponse {
  /**
   * <p>The status of the asset model, which contains a state (<code>DELETING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

export interface DeleteDashboardRequest {
  /**
   * <p>The ID of the dashboard to delete.</p>
   */
  dashboardId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DeleteDashboardResponse {}

export interface DeleteGatewayRequest {
  /**
   * <p>The ID of the gateway to delete.</p>
   */
  gatewayId: string | undefined;
}

export interface DeletePortalRequest {
  /**
   * <p>The ID of the portal to delete.</p>
   */
  portalId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DeletePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;
}

export interface DeleteProjectRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DeleteProjectResponse {}

export interface DeleteTimeSeriesRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DescribeAccessPolicyRequest {
  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;
}

export interface DescribeAccessPolicyResponse {
  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}</code>
   *          </p>
   */
  accessPolicyArn: string | undefined;

  /**
   * <p>The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy
   *       applies.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource (portal or project) to which this access policy provides
   *       access.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The access policy permission. Note that a project <code>ADMINISTRATOR</code> is also known
   *       as a project owner.</p>
   */
  accessPolicyPermission: Permission | string | undefined;

  /**
   * <p>The date the access policy was created, in Unix epoch time.</p>
   */
  accessPolicyCreationDate: Date | undefined;

  /**
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   */
  accessPolicyLastUpdateDate: Date | undefined;
}

export interface DescribeAssetRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>
   *       Whether or not to exclude asset properties from the response.
   *     </p>
   */
  excludeProperties?: boolean;
}

export interface DescribeAssetResponse {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  assetArn: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset model that was used to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The list of asset properties for the asset.</p>
   *          <p>This object doesn't include properties that you define in composite models. You can find
   *       composite model properties in the <code>assetCompositeModels</code> object.</p>
   */
  assetProperties: AssetProperty[] | undefined;

  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  assetHierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>The composite models for the asset.</p>
   */
  assetCompositeModels?: AssetCompositeModel[];

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  assetCreationDate: Date | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  assetLastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset, which contains a state and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;

  /**
   * <p>A description for the asset.</p>
   */
  assetDescription?: string;
}

export interface DescribeAssetModelRequest {
  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>
   *       Whether or not to exclude asset model properties from the response.
   *     </p>
   */
  excludeProperties?: boolean;
}

export interface DescribeAssetModelResponse {
  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code>
   *          </p>
   */
  assetModelArn: string | undefined;

  /**
   * <p>The name of the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * <p>The asset model's description.</p>
   */
  assetModelDescription: string | undefined;

  /**
   * <p>The list of asset properties for the asset model.</p>
   *          <p>This object doesn't include properties that you define in composite models. You can find
   *       composite model properties in the <code>assetModelCompositeModels</code> object.</p>
   */
  assetModelProperties: AssetModelProperty[] | undefined;

  /**
   * <p>A list of asset model hierarchies that each contain a <code>childAssetModelId</code> and a
   *         <code>hierarchyId</code> (named <code>id</code>). A hierarchy specifies allowed parent/child
   *       asset relationships for an asset model.</p>
   */
  assetModelHierarchies: AssetModelHierarchy[] | undefined;

  /**
   * <p>The list of composite asset models for the asset model.</p>
   */
  assetModelCompositeModels?: AssetModelCompositeModel[];

  /**
   * <p>The date the asset model was created, in Unix epoch time.</p>
   */
  assetModelCreationDate: Date | undefined;

  /**
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   */
  assetModelLastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset model, which contains a state and any error
   *       message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

export interface DescribeAssetPropertyRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;
}

/**
 * <p>Contains asset property information.</p>
 */
export interface Property {
  /**
   * <p>The ID of the asset property.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
   */
  notification?: PropertyNotification;

  /**
   * <p>The property data type.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   */
  unit?: string;

  /**
   * <p>The property type (see <code>PropertyType</code>). A property contains one type.</p>
   */
  type?: PropertyType;
}

/**
 * <p>Contains information about a composite model property on an asset.</p>
 */
export interface CompositeModelProperty {
  /**
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of the composite model that defines this property.</p>
   */
  type: string | undefined;

  /**
   * <p>Contains asset property information.</p>
   */
  assetProperty: Property | undefined;

  /**
   * <p>
   *       The ID of the composite model that contains the property.
   *     </p>
   */
  id?: string;
}

export interface DescribeAssetPropertyResponse {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The asset property's definition, alias, and notification state.</p>
   *          <p>This response includes this object for normal asset properties. If you describe an asset
   *       property in a composite model, this response includes the asset property information in
   *         <code>compositeModel</code>.</p>
   */
  assetProperty?: Property;

  /**
   * <p>The composite asset model that declares this asset property, if this asset property exists
   *       in a composite model.</p>
   */
  compositeModel?: CompositeModelProperty;
}

export interface DescribeBulkImportJobRequest {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

export interface DescribeBulkImportJobResponse {
  /**
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   */
  jobName: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – The bulk import job has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *          </ul>
   */
  jobStatus: JobStatus | string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.</p>
   */
  jobRoleArn: string | undefined;

  /**
   * <p>The files in the specified Amazon S3 bucket that contain your data.</p>
   */
  files: File[] | undefined;

  /**
   * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
   */
  jobConfiguration: JobConfiguration | undefined;

  /**
   * <p>The date the job was created, in Unix epoch TIME.</p>
   */
  jobCreationDate: Date | undefined;

  /**
   * <p>The date the job was last updated, in Unix epoch time.</p>
   */
  jobLastUpdateDate: Date | undefined;
}

export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;
}

export interface DescribeDashboardResponse {
  /**
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:dashboard/${DashboardId}</code>
   *          </p>
   */
  dashboardArn: string | undefined;

  /**
   * <p>The name of the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * <p>The ID of the project that the dashboard is in.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The dashboard's description.</p>
   */
  dashboardDescription?: string;

  /**
   * <p>The dashboard's definition JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating
   *         dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   */
  dashboardCreationDate: Date | undefined;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   */
  dashboardLastUpdateDate: Date | undefined;
}

export interface DescribeDefaultEncryptionConfigurationRequest {}

/**
 * <p>Contains the details of an IoT SiteWise configuration error.</p>
 */
export interface ConfigurationErrorDetails {
  /**
   * <p>The error code.</p>
   */
  code: ErrorCode | string | undefined;

  /**
   * <p>The error message.</p>
   */
  message: string | undefined;
}

export enum ConfigurationState {
  ACTIVE = "ACTIVE",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATE_IN_PROGRESS = "UPDATE_IN_PROGRESS",
}

/**
 * <p>Contains current status information for the configuration.</p>
 */
export interface ConfigurationStatus {
  /**
   * <p>The current state of the configuration.</p>
   */
  state: ConfigurationState | string | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   */
  error?: ConfigurationErrorDetails;
}

export enum EncryptionType {
  KMS_BASED_ENCRYPTION = "KMS_BASED_ENCRYPTION",
  SITEWISE_DEFAULT_ENCRYPTION = "SITEWISE_DEFAULT_ENCRYPTION",
}

export interface DescribeDefaultEncryptionConfigurationResponse {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | string | undefined;

  /**
   * <p>The key ARN of the customer managed key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there's an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

export interface DescribeGatewayRequest {
  /**
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;
}

export enum CapabilitySyncStatus {
  IN_SYNC = "IN_SYNC",
  OUT_OF_SYNC = "OUT_OF_SYNC",
  SYNC_FAILED = "SYNC_FAILED",
  UNKNOWN = "UNKNOWN",
}

/**
 * <p>Contains a summary of a gateway capability configuration.</p>
 */
export interface GatewayCapabilitySummary {
  /**
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC-UA
   *       sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The synchronization status of the capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> – The gateway is running the capability configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> – The gateway hasn't received the capability configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> – The gateway rejected the capability configuration.</p>
   *             </li>
   *          </ul>
   */
  capabilitySyncStatus: CapabilitySyncStatus | string | undefined;
}

export interface DescribeGatewayResponse {
  /**
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The name of the gateway.</p>
   */
  gatewayName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:gateway/${GatewayId}</code>
   *          </p>
   */
  gatewayArn: string | undefined;

  /**
   * <p>The gateway's platform.</p>
   */
  gatewayPlatform?: GatewayPlatform;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   */
  gatewayCapabilitySummaries: GatewayCapabilitySummary[] | undefined;

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;
}

export interface DescribeGatewayCapabilityConfigurationRequest {
  /**
   * <p>The ID of the gateway that defines the capability configuration.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC-UA
   *       sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;
}

export interface DescribeGatewayCapabilityConfigurationResponse {
  /**
   * <p>The ID of the gateway that defines the capability configuration.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the gateway capability.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the gateway capability's configuration. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  capabilityConfiguration: string | undefined;

  /**
   * <p>The synchronization status of the capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> – The gateway is running the capability configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> – The gateway hasn't received the capability configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> – The gateway rejected the capability configuration.</p>
   *             </li>
   *          </ul>
   */
  capabilitySyncStatus: CapabilitySyncStatus | string | undefined;
}

export interface DescribeLoggingOptionsRequest {}

export enum LoggingLevel {
  ERROR = "ERROR",
  INFO = "INFO",
  OFF = "OFF",
}

/**
 * <p>Contains logging options.</p>
 */
export interface LoggingOptions {
  /**
   * <p>The IoT SiteWise logging verbosity level.</p>
   */
  level: LoggingLevel | string | undefined;
}

export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export interface DescribePortalRequest {
  /**
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;
}

/**
 * <p>Contains an image that is uploaded to IoT SiteWise and available at a URL.</p>
 */
export interface ImageLocation {
  /**
   * <p>The ID of the image.</p>
   */
  id: string | undefined;

  /**
   * <p>The URL where the image is available. The URL is valid for 15 minutes so that you can view
   *       and download the image</p>
   */
  url: string | undefined;
}

export interface DescribePortalResponse {
  /**
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}</code>
   *          </p>
   */
  portalArn: string | undefined;

  /**
   * <p>The name of the portal.</p>
   */
  portalName: string | undefined;

  /**
   * <p>The portal's description.</p>
   */
  portalDescription?: string;

  /**
   * <p>The IAM Identity Center application generated client ID (used with IAM Identity Center APIs). IoT SiteWise includes
   *         <code>portalClientId</code> for only portals that use IAM Identity Center to authenticate users.</p>
   */
  portalClientId: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * <p>The current status of the portal, which contains a state and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   */
  portalCreationDate: Date | undefined;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   */
  portalLastUpdateDate: Date | undefined;

  /**
   * <p>The portal's logo image, which is available at a URL.</p>
   */
  portalLogoImageLocation?: ImageLocation;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn?: string;

  /**
   * <p>The service to use to authenticate users to the portal.</p>
   */
  portalAuthMode?: AuthMode | string;

  /**
   * <p>The email address that sends alarm notifications.</p>
   */
  notificationSenderEmail?: string;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.</p>
   */
  alarms?: Alarms;
}

export interface DescribeProjectRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;
}

export interface DescribeProjectResponse {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}</code>
   *          </p>
   */
  projectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the portal that the project is in.</p>
   */
  portalId: string | undefined;

  /**
   * <p>The project's description.</p>
   */
  projectDescription?: string;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   */
  projectCreationDate: Date | undefined;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   */
  projectLastUpdateDate: Date | undefined;
}

export interface DescribeStorageConfigurationRequest {}

export enum DisassociatedDataStorageState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Contains information about a customer managed Amazon S3 bucket.</p>
 */
export interface CustomerManagedS3Storage {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Amazon S3 object. For more information about how to find the ARN for an
   *       Amazon S3 object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html">Amazon S3 resources</a> in the
   *         <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  s3ResourceArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.</p>
   */
  roleArn: string | undefined;
}

/**
 * <p>Contains information about the storage destination.</p>
 */
export interface MultiLayerStorage {
  /**
   * <p>Contains information about a customer managed Amazon S3 bucket.</p>
   */
  customerManagedS3Storage: CustomerManagedS3Storage | undefined;
}

/**
 * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
 */
export interface RetentionPeriod {
  /**
   * <p>The number of days that your data is kept.</p>
   *          <note>
   *             <p>If you specified a value for this parameter, the <code>unlimited</code> parameter must
   *         be <code>false</code>.</p>
   *          </note>
   */
  numberOfDays?: number;

  /**
   * <p>If true, your data is kept indefinitely.</p>
   *          <note>
   *             <p>If configured to <code>true</code>, you must not specify a value for the
   *           <code>numberOfDays</code> parameter.</p>
   *          </note>
   */
  unlimited?: boolean;
}

export enum StorageType {
  MULTI_LAYER_STORAGE = "MULTI_LAYER_STORAGE",
  SITEWISE_DEFAULT_STORAGE = "SITEWISE_DEFAULT_STORAGE",
}

export interface DescribeStorageConfigurationResponse {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   */
  storageType: StorageType | string | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | string;

  /**
   * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The date the storage configuration was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

export interface DescribeTimeSeriesRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;
}

export interface DescribeTimeSeriesResponse {
  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * <p>The ID of the time series.</p>
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   */
  dataTypeSpec?: string;

  /**
   * <p>The date that the time series was created, in Unix epoch time.</p>
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   */
  timeSeriesLastUpdateDate: Date | undefined;
}

export interface DisassociateAssetsRequest {
  /**
   * <p>The ID of the parent asset from which to disassociate the child asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings
   *       of assets to be formed that all come from the same asset model. You can use the hierarchy ID
   *       to identify the correct asset to disassociate. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * <p>The ID of the child asset to disassociate.</p>
   */
  childAssetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface DisassociateTimeSeriesFromAssetPropertyRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   */
  alias: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface GetAssetPropertyAggregatesRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The data aggregating function.</p>
   */
  aggregateTypes: (AggregateType | string)[] | undefined;

  /**
   * <p>The time interval over which to aggregate data.</p>
   */
  resolution: string | undefined;

  /**
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: (Quality | string)[];

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate: Date | undefined;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate: Date | undefined;

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering | string;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 100</p>
   */
  maxResults?: number;
}

export interface GetAssetPropertyAggregatesResponse {
  /**
   * <p>The requested aggregated values.</p>
   */
  aggregatedValues: AggregatedValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface GetAssetPropertyValueRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;
}

export interface GetAssetPropertyValueResponse {
  /**
   * <p>The current asset property value.</p>
   */
  propertyValue?: AssetPropertyValue;
}

export interface GetAssetPropertyValueHistoryRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate?: Date;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate?: Date;

  /**
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: (Quality | string)[];

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering | string;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 100</p>
   */
  maxResults?: number;
}

export interface GetAssetPropertyValueHistoryResponse {
  /**
   * <p>The asset property's value history.</p>
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface GetInterpolatedAssetPropertyValuesRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The exclusive start of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   */
  startTimeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset converted from <code>startTimeInSeconds</code>.</p>
   */
  startTimeOffsetInNanos?: number;

  /**
   * <p>The inclusive end of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   */
  endTimeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset converted from <code>endTimeInSeconds</code>.</p>
   */
  endTimeOffsetInNanos?: number;

  /**
   * <p>The quality of the asset property value. You can use this parameter as a filter to choose
   *       only the asset property values that have a specific quality.</p>
   */
  quality: Quality | string | undefined;

  /**
   * <p>The time interval in seconds over which to interpolate data. Each interval starts when the
   *       previous one ends.</p>
   */
  intervalInSeconds: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 10.</p>
   */
  maxResults?: number;

  /**
   * <p>The interpolation type.</p>
   *          <p>Valid values: <code>LINEAR_INTERPOLATION | LOCF_INTERPOLATION</code>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>LINEAR_INTERPOLATION</code> – Estimates missing data using <a href="https://en.wikipedia.org/wiki/Linear_interpolation">linear
   *           interpolation</a>.</p>
   *                <p>For example, you can use this operation to return the interpolated temperature values
   *           for a wind turbine every 24 hours over a duration of 7 days. If the interpolation starts
   *           July 1, 2021, at 9 AM, IoT SiteWise returns the first interpolated value on July 2, 2021, at 9 AM,
   *           the second interpolated value on July 3, 2021, at 9 AM, and so on.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCF_INTERPOLATION</code> – Estimates missing data using last observation
   *           carried forward interpolation</p>
   *                <p>If no data point is found for an interval, IoT SiteWise returns the last observed data point
   *           for the previous interval and carries forward this interpolated value until a new data
   *           point is found.</p>
   *                <p>For example, you can get the state of an on-off valve every 24 hours over a duration
   *           of 7 days. If the interpolation starts July 1, 2021, at 9 AM, IoT SiteWise returns the last
   *           observed data point between July 1, 2021, at 9 AM and July 2, 2021, at 9 AM as the first
   *           interpolated value. If a data point isn't found after 9 AM on July 2, 2021, IoT SiteWise uses the
   *           same interpolated value for the rest of the days.</p>
   *             </li>
   *          </ul>
   */
  type: string | undefined;

  /**
   * <p>The query interval for the window, in seconds. IoT SiteWise computes each interpolated value by
   *       using data points from the timestamp of each interval, minus the window to the timestamp of
   *       each interval plus the window. If not specified, the window ranges between the start time
   *       minus the interval and the end time plus the interval.</p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you specify a value for the <code>intervalWindowInSeconds</code> parameter, the
   *             value for the <code>type</code> parameter must be
   *             <code>LINEAR_INTERPOLATION</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If a data point isn't found during the specified query window, IoT SiteWise won't return an
   *             interpolated value for the interval. This indicates that there's a gap in the ingested
   *             data points.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>For example, you can get the interpolated temperature values for a wind turbine every 24
   *       hours over a duration of 7 days. If the interpolation starts on July 1, 2021, at 9 AM with a
   *       window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM
   *       plus 2 hours) on July 2, 2021 to compute the first interpolated value. Next, IoT SiteWise uses the
   *       data points from 7 AM (9 AM minus 2 hours) to 11 AM (9 AM plus 2 hours) on July 3, 2021 to
   *       compute the second interpolated value, and so on. </p>
   */
  intervalWindowInSeconds?: number;
}

/**
 * <p>Contains information about an interpolated asset property value.</p>
 */
export interface InterpolatedAssetPropertyValue {
  /**
   * <p>Contains a timestamp with optional nanosecond granularity.</p>
   */
  timestamp: TimeInNanos | undefined;

  /**
   * <p>Contains an asset property value (of a single type only).</p>
   */
  value: Variant | undefined;
}

export interface GetInterpolatedAssetPropertyValuesResponse {
  /**
   * <p>The requested interpolated values.</p>
   */
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum IdentityType {
  GROUP = "GROUP",
  IAM = "IAM",
  USER = "USER",
}

export enum ResourceType {
  PORTAL = "PORTAL",
  PROJECT = "PROJECT",
}

export interface ListAccessPoliciesRequest {
  /**
   * <p>The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required
   *       if you specify <code>identityId</code>.</p>
   */
  identityType?: IdentityType | string;

  /**
   * <p>The ID of the identity. This parameter is required if you specify <code>USER</code> or
   *         <code>GROUP</code> for <code>identityType</code>.</p>
   */
  identityId?: string;

  /**
   * <p>The type of resource (portal or project). This parameter is required if you specify
   *         <code>resourceId</code>.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The ID of the resource. This parameter is required if you specify
   *         <code>resourceType</code>.</p>
   */
  resourceId?: string;

  /**
   * <p>The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>. This parameter is required if you specify
   *         <code>IAM</code> for <code>identityType</code>.</p>
   */
  iamArn?: string;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

export interface ListAccessPoliciesResponse {
  /**
   * <p>A list that summarizes each access policy.</p>
   */
  accessPolicySummaries: AccessPolicySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum ListAssetModelPropertiesFilter {
  ALL = "ALL",
  BASE = "BASE",
}

export interface ListAssetModelPropertiesRequest {
  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p> Filters the requested list of asset model properties. You can choose one of the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all asset model properties for a given asset
   *           model ID. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASE</code> – The list includes only base asset model properties for a given
   *           asset model ID. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>BASE</code>
   *          </p>
   */
  filter?: ListAssetModelPropertiesFilter | string;
}

export interface ListAssetModelPropertiesResponse {
  /**
   * <p>A list that summarizes the properties associated with the specified asset model.</p>
   */
  assetModelPropertySummaries: AssetModelPropertySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListAssetModelsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

export interface ListAssetModelsResponse {
  /**
   * <p>A list that summarizes each asset model.</p>
   */
  assetModelSummaries: AssetModelSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum ListAssetPropertiesFilter {
  ALL = "ALL",
  BASE = "BASE",
}

export interface ListAssetPropertiesRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   */
  maxResults?: number;

  /**
   * <p> Filters the requested list of asset properties. You can choose one of the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all asset properties for a given asset
   *           model ID. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BASE</code> – The list includes only base asset properties for a given
   *           asset model ID. </p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>BASE</code>
   *          </p>
   */
  filter?: ListAssetPropertiesFilter | string;
}

export interface ListAssetPropertiesResponse {
  /**
   * <p>A list that summarizes the properties associated with the specified asset.</p>
   */
  assetPropertySummaries: AssetPropertySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum TraversalType {
  PATH_TO_ROOT = "PATH_TO_ROOT",
}

export interface ListAssetRelationshipsRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The type of traversal to use to identify asset relationships. Choose the following
   *       option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PATH_TO_ROOT</code> – Identify the asset's parent assets up to the root
   *           asset. The asset that you specify in <code>assetId</code> is the first result in the list
   *           of <code>assetRelationshipSummaries</code>, and the root asset is the last result.</p>
   *             </li>
   *          </ul>
   */
  traversalType: TraversalType | string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   */
  maxResults?: number;
}

export interface ListAssetRelationshipsResponse {
  /**
   * <p>A list that summarizes each asset relationship.</p>
   */
  assetRelationshipSummaries: AssetRelationshipSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum ListAssetsFilter {
  ALL = "ALL",
  TOP_LEVEL = "TOP_LEVEL",
}

export interface ListAssetsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the asset model by which to filter the list of assets. This parameter is
   *       required if you choose <code>ALL</code> for <code>filter</code>.</p>
   */
  assetModelId?: string;

  /**
   * <p>The filter for the requested list of assets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ALL</code> – The list includes all assets for a given asset model ID. The
   *             <code>assetModelId</code> parameter is required if you filter by
   *           <code>ALL</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_LEVEL</code> – The list includes only top-level assets in the asset
   *           hierarchy tree.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>ALL</code>
   *          </p>
   */
  filter?: ListAssetsFilter | string;
}

export interface ListAssetsResponse {
  /**
   * <p>A list that summarizes each asset.</p>
   */
  assetSummaries: AssetSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum TraversalDirection {
  CHILD = "CHILD",
  PARENT = "PARENT",
}

export interface ListAssociatedAssetsRequest {
  /**
   * <p>The ID of the asset to query.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the hierarchy by which child assets are associated to the asset. To find a
   *       hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a> operations. This
   *       parameter is required if you choose <code>CHILD</code> for
   *       <code>traversalDirection</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId?: string;

  /**
   * <p>The direction to list associated assets. Choose one of the following options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CHILD</code> – The list includes all child assets associated to the
   *           asset. The <code>hierarchyId</code> parameter is required if you choose
   *           <code>CHILD</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PARENT</code> – The list includes the asset's parent asset.</p>
   *             </li>
   *          </ul>
   *          <p>Default: <code>CHILD</code>
   *          </p>
   */
  traversalDirection?: TraversalDirection | string;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

export interface ListAssociatedAssetsResponse {
  /**
   * <p>A list that summarizes the associated assets.</p>
   */
  assetSummaries: AssociatedAssetsSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export enum ListBulkImportJobsFilter {
  ALL = "ALL",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  COMPLETED_WITH_FAILURES = "COMPLETED_WITH_FAILURES",
  FAILED = "FAILED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
}

export interface ListBulkImportJobsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>You can use a filter to select the bulk import jobs that you want to retrieve.</p>
   */
  filter?: ListBulkImportJobsFilter | string;
}

/**
 * <p>Contains a job summary information.</p>
 */
export interface JobSummary {
  /**
   * <p>The ID of the job.</p>
   */
  id: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   */
  name: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PENDING</code> – IoT SiteWise is waiting for the current bulk import job to finish.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCELLED</code> – The bulk import job has been canceled.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> – IoT SiteWise is processing your request to import your data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED</code> – IoT SiteWise successfully completed your request to import data from Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> – IoT SiteWise couldn't process your request to import data from Amazon S3.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>COMPLETED_WITH_FAILURES</code> – IoT SiteWise completed your request to import data from Amazon S3 with errors.
   *         You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.</p>
   *             </li>
   *          </ul>
   */
  status: JobStatus | string | undefined;
}

export interface ListBulkImportJobsResponse {
  /**
   * <p>One or more job summaries to list.</p>
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListDashboardsRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains a dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * <p>The ID of the dashboard.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the dashboard</p>
   */
  name: string | undefined;

  /**
   * <p>The dashboard's description.</p>
   */
  description?: string;

  /**
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

export interface ListDashboardsResponse {
  /**
   * <p>A list that summarizes each dashboard in the project.</p>
   */
  dashboardSummaries: DashboardSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListGatewaysRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains a summary of a gateway.</p>
 */
export interface GatewaySummary {
  /**
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  gatewayName: string | undefined;

  /**
   * <p>Contains a gateway's platform information.</p>
   */
  gatewayPlatform?: GatewayPlatform;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   */
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[];

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;
}

export interface ListGatewaysResponse {
  /**
   * <p>A list that summarizes each gateway.</p>
   */
  gatewaySummaries: GatewaySummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListPortalsRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains a portal summary.</p>
 */
export interface PortalSummary {
  /**
   * <p>The ID of the portal.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the portal.</p>
   */
  name: string | undefined;

  /**
   * <p>The portal's description.</p>
   */
  description?: string;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  startUrl: string | undefined;

  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn?: string;

  /**
   * <p>Contains information about the current status of a portal.</p>
   */
  status: PortalStatus | undefined;
}

export interface ListPortalsResponse {
  /**
   * <p>A list that summarizes each portal.</p>
   */
  portalSummaries?: PortalSummary[];

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListProjectAssetsRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

export interface ListProjectAssetsResponse {
  /**
   * <p>A list that contains the IDs of each asset associated with the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListProjectsRequest {
  /**
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * <p>Contains project summary information.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * <p>The project's description.</p>
   */
  description?: string;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

export interface ListProjectsResponse {
  /**
   * <p>A list that summarizes each project in the portal.</p>
   */
  projectSummaries: ProjectSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.</p>
   */
  resourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * <p>You are not authorized.</p>
 */
export class UnauthorizedException extends __BaseException {
  readonly name: "UnauthorizedException" = "UnauthorizedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

export enum ListTimeSeriesType {
  ASSOCIATED = "ASSOCIATED",
  DISASSOCIATED = "DISASSOCIATED",
}

export interface ListTimeSeriesRequest {
  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return for each paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The alias prefix of the time series.</p>
   */
  aliasPrefix?: string;

  /**
   * <p>The type of the time series. The time series type can be one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASSOCIATED</code> – The time series is associated with an asset
   *           property.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISASSOCIATED</code> – The time series isn't associated with any asset
   *           property.</p>
   *             </li>
   *          </ul>
   */
  timeSeriesType?: ListTimeSeriesType | string;
}

/**
 * <p>Contains a summary of a time series (data stream).</p>
 */
export interface TimeSeriesSummary {
  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * <p>The ID of the time series.</p>
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   */
  dataTypeSpec?: string;

  /**
   * <p>The date that the time series was created, in Unix epoch time.</p>
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   */
  timeSeriesLastUpdateDate: Date | undefined;
}

export interface ListTimeSeriesResponse {
  /**
   * <p>One or more time series summaries to list.</p>
   */
  TimeSeriesSummaries: TimeSeriesSummary[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | string | undefined;

  /**
   * <p>The Key ID of the customer managed key used for KMS encryption. This is required if you
   *       use <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyId?: string;
}

export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | string | undefined;

  /**
   * <p>The Key ARN of the KMS key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there is an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

export interface PutLoggingOptionsRequest {
  /**
   * <p>The logging options to set.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export interface PutLoggingOptionsResponse {}

export interface PutStorageConfigurationRequest {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   */
  storageType: StorageType | string | undefined;

  /**
   * <p>Identifies a storage destination. If you specified <code>MULTI_LAYER_STORAGE</code> for the storage type,
   *       you must specify a <code>MultiLayerStorage</code> object.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | string;

  /**
   * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

export interface PutStorageConfigurationResponse {
  /**
   * <p>The storage tier that you specified for your data.
   *       The <code>storageType</code> parameter can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise saves your data into the hot tier.
   *           The hot tier is a service-managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise saves your data in both the cold tier and the hot tier.
   *           The cold tier is a customer-managed Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   */
  storageType: StorageType | string | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * <p>Contains the storage configuration for time series (data streams) that aren't associated with asset properties.
   *       The <code>disassociatedDataStorage</code> can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code> – IoT SiteWise accepts time series that aren't associated with asset properties.</p>
   *                <important>
   *                   <p>After the <code>disassociatedDataStorage</code> is enabled, you can't disable it.</p>
   *                </important>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code> – IoT SiteWise doesn't accept time series (data streams) that aren't associated with asset properties.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/data-streams.html">Data streams</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | string;

  /**
   * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

/**
 * <p>You've reached the limit for the number of tags allowed for a resource. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag naming limits and
 *         requirements</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The name of the resource with too many tags.</p>
   */
  resourceName?: string;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
    this.resourceName = opts.resourceName;
  }
}

export interface UntagResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of keys for tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateAccessPolicyRequest {
  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   */
  accessPolicyPermission: Permission | string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface UpdateAccessPolicyResponse {}

export interface UpdateAssetRequest {
  /**
   * <p>The ID of the asset to update.</p>
   */
  assetId: string | undefined;

  /**
   * <p>A friendly name for the asset.</p>
   */
  assetName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A description for the asset.</p>
   */
  assetDescription?: string;
}

export interface UpdateAssetResponse {
  /**
   * <p>The status of the asset, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

export interface UpdateAssetModelRequest {
  /**
   * <p>The ID of the asset model to update.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>A unique, friendly name for the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * <p>A description for the asset model.</p>
   */
  assetModelDescription?: string;

  /**
   * <p>The updated property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelProperties?: AssetModelProperty[];

  /**
   * <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset
   *       model whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelHierarchies?: AssetModelHierarchy[];

  /**
   * <p>The composite asset models that are part of this asset model.
   *       Composite asset models are asset models that contain specific properties. Each composite model
   *       has a type that defines the properties that the composite model supports. Use composite asset
   *       models to define alarms on this asset model.</p>
   */
  assetModelCompositeModels?: AssetModelCompositeModel[];

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface UpdateAssetModelResponse {
  /**
   * <p>The status of the asset model, which contains a state (<code>UPDATING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

export interface UpdateAssetPropertyRequest {
  /**
   * <p>The ID of the asset to be updated.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property to be updated.</p>
   */
  propertyId: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the alias is removed from the property.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The MQTT notification state (enabled or disabled) for this asset property.
   *       When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>
   */
  propertyNotificationState?: PropertyNotificationState | string;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a
   *       value for this parameter, the service uses the value of the <code>assetModelProperty</code> in
   *       the asset model.</p>
   */
  propertyUnit?: string;
}

export interface UpdateDashboardRequest {
  /**
   * <p>The ID of the dashboard to update.</p>
   */
  dashboardId: string | undefined;

  /**
   * <p>A new friendly name for the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * <p>A new description for the dashboard.</p>
   */
  dashboardDescription?: string;

  /**
   * <p>The new dashboard definition, as specified in a JSON literal. For detailed information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface UpdateDashboardResponse {}

export interface UpdateGatewayRequest {
  /**
   * <p>The ID of the gateway to update.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>A unique, friendly name for the gateway.</p>
   */
  gatewayName: string | undefined;
}

export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * <p>The ID of the gateway to be updated.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the gateway capability configuration to be updated.
   *       For example, if you configure OPC-UA
   *       sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the configuration for the gateway capability. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  capabilityConfiguration: string | undefined;
}

export interface UpdateGatewayCapabilityConfigurationResponse {
  /**
   * <p>The namespace of the gateway capability.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The synchronization status of the capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> – The gateway is running the capability configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> – The gateway hasn't received the capability configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> – The gateway rejected the capability configuration.</p>
   *             </li>
   *          </ul>
   *          <p>After you update a capability configuration, its sync status is <code>OUT_OF_SYNC</code>
   *       until the gateway receives and applies or rejects the updated configuration.</p>
   */
  capabilitySyncStatus: CapabilitySyncStatus | string | undefined;
}

/**
 * <p>Contains an image that is one of the following:</p>
 *          <ul>
 *             <li>
 *                <p>An image file. Choose this option to upload a new image.</p>
 *             </li>
 *             <li>
 *                <p>The ID of an existing image. Choose this option to keep an existing image.</p>
 *             </li>
 *          </ul>
 */
export interface Image {
  /**
   * <p>The ID of an existing image. Specify this parameter to keep an existing image.</p>
   */
  id?: string;

  /**
   * <p>Contains an image file.</p>
   */
  file?: ImageFile;
}

export interface UpdatePortalRequest {
  /**
   * <p>The ID of the portal to update.</p>
   */
  portalId: string | undefined;

  /**
   * <p>A new friendly name for the portal.</p>
   */
  portalName: string | undefined;

  /**
   * <p>A new description for the portal.</p>
   */
  portalDescription?: string;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * <p>Contains an image that is one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>An image file. Choose this option to upload a new image.</p>
   *             </li>
   *             <li>
   *                <p>The ID of an existing image. Choose this option to keep an existing image.</p>
   *             </li>
   *          </ul>
   */
  portalLogoImage?: Image;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The email address that sends alarm notifications.</p>
   */
  notificationSenderEmail?: string;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   */
  alarms?: Alarms;
}

export interface UpdatePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;
}

export interface UpdateProjectRequest {
  /**
   * <p>The ID of the project to update.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A new friendly name for the project.</p>
   */
  projectName: string | undefined;

  /**
   * <p>A new description for the project.</p>
   */
  projectDescription?: string;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export interface UpdateProjectResponse {}

/**
 * @internal
 */
export const GroupIdentityFilterSensitiveLog = (obj: GroupIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IAMRoleIdentityFilterSensitiveLog = (obj: IAMRoleIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IAMUserIdentityFilterSensitiveLog = (obj: IAMUserIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UserIdentityFilterSensitiveLog = (obj: UserIdentity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IdentityFilterSensitiveLog = (obj: Identity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortalResourceFilterSensitiveLog = (obj: PortalResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectResourceFilterSensitiveLog = (obj: ProjectResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceFilterSensitiveLog = (obj: Resource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPolicySummaryFilterSensitiveLog = (obj: AccessPolicySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregatesFilterSensitiveLog = (obj: Aggregates): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregatedValueFilterSensitiveLog = (obj: AggregatedValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmsFilterSensitiveLog = (obj: Alarms): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyNotificationFilterSensitiveLog = (obj: PropertyNotification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetPropertyFilterSensitiveLog = (obj: AssetProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetCompositeModelFilterSensitiveLog = (obj: AssetCompositeModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetErrorDetailsFilterSensitiveLog = (obj: AssetErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetHierarchyFilterSensitiveLog = (obj: AssetHierarchy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetHierarchyInfoFilterSensitiveLog = (obj: AssetHierarchyInfo): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttributeFilterSensitiveLog = (obj: Attribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ForwardingConfigFilterSensitiveLog = (obj: ForwardingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeasurementProcessingConfigFilterSensitiveLog = (obj: MeasurementProcessingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MeasurementFilterSensitiveLog = (obj: Measurement): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricProcessingConfigFilterSensitiveLog = (obj: MetricProcessingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariableValueFilterSensitiveLog = (obj: VariableValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExpressionVariableFilterSensitiveLog = (obj: ExpressionVariable): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TumblingWindowFilterSensitiveLog = (obj: TumblingWindow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricWindowFilterSensitiveLog = (obj: MetricWindow): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricFilterSensitiveLog = (obj: Metric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformProcessingConfigFilterSensitiveLog = (obj: TransformProcessingConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TransformFilterSensitiveLog = (obj: Transform): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyTypeFilterSensitiveLog = (obj: PropertyType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelPropertyFilterSensitiveLog = (obj: AssetModelProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelCompositeModelFilterSensitiveLog = (obj: AssetModelCompositeModel): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelPropertyDefinitionFilterSensitiveLog = (obj: AssetModelPropertyDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelCompositeModelDefinitionFilterSensitiveLog = (obj: AssetModelCompositeModelDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelHierarchyFilterSensitiveLog = (obj: AssetModelHierarchy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelHierarchyDefinitionFilterSensitiveLog = (obj: AssetModelHierarchyDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelPropertySummaryFilterSensitiveLog = (obj: AssetModelPropertySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetailedErrorFilterSensitiveLog = (obj: DetailedError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorDetailsFilterSensitiveLog = (obj: ErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelStatusFilterSensitiveLog = (obj: AssetModelStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetModelSummaryFilterSensitiveLog = (obj: AssetModelSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetPropertySummaryFilterSensitiveLog = (obj: AssetPropertySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeInNanosFilterSensitiveLog = (obj: TimeInNanos): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VariantFilterSensitiveLog = (obj: Variant): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetPropertyValueFilterSensitiveLog = (obj: AssetPropertyValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetRelationshipSummaryFilterSensitiveLog = (obj: AssetRelationshipSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetStatusFilterSensitiveLog = (obj: AssetStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssetSummaryFilterSensitiveLog = (obj: AssetSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateAssetsRequestFilterSensitiveLog = (obj: AssociateAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatedAssetsSummaryFilterSensitiveLog = (obj: AssociatedAssetsSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateTimeSeriesToAssetPropertyRequestFilterSensitiveLog = (
  obj: AssociateTimeSeriesToAssetPropertyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateProjectAssetsRequestFilterSensitiveLog = (obj: BatchAssociateProjectAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchAssociateProjectAssetsResponseFilterSensitiveLog = (
  obj: BatchAssociateProjectAssetsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateProjectAssetsRequestFilterSensitiveLog = (
  obj: BatchDisassociateProjectAssetsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDisassociateProjectAssetsResponseFilterSensitiveLog = (
  obj: BatchDisassociateProjectAssetsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesRequestFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesErrorEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesErrorEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesErrorInfoFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesErrorInfo
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesSkippedEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesSkippedEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesSuccessEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesSuccessEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyAggregatesResponseFilterSensitiveLog = (
  obj: BatchGetAssetPropertyAggregatesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueEntryFilterSensitiveLog = (obj: BatchGetAssetPropertyValueEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueRequestFilterSensitiveLog = (obj: BatchGetAssetPropertyValueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueErrorEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueErrorEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueErrorInfoFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueErrorInfo
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueSkippedEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueSkippedEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueSuccessEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueSuccessEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueResponseFilterSensitiveLog = (obj: BatchGetAssetPropertyValueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistoryEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistoryEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistoryRequestFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistoryErrorEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistoryErrorEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistoryErrorInfoFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistoryErrorInfo
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistorySkippedEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistorySkippedEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistorySuccessEntryFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistorySuccessEntry
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchGetAssetPropertyValueHistoryResponseFilterSensitiveLog = (
  obj: BatchGetAssetPropertyValueHistoryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutAssetPropertyValueEntryFilterSensitiveLog = (obj: PutAssetPropertyValueEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutAssetPropertyValueRequestFilterSensitiveLog = (obj: BatchPutAssetPropertyValueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutAssetPropertyErrorFilterSensitiveLog = (obj: BatchPutAssetPropertyError): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutAssetPropertyErrorEntryFilterSensitiveLog = (obj: BatchPutAssetPropertyErrorEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutAssetPropertyValueResponseFilterSensitiveLog = (obj: BatchPutAssetPropertyValueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessPolicyRequestFilterSensitiveLog = (obj: CreateAccessPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAccessPolicyResponseFilterSensitiveLog = (obj: CreateAccessPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssetRequestFilterSensitiveLog = (obj: CreateAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssetResponseFilterSensitiveLog = (obj: CreateAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssetModelRequestFilterSensitiveLog = (obj: CreateAssetModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAssetModelResponseFilterSensitiveLog = (obj: CreateAssetModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ErrorReportLocationFilterSensitiveLog = (obj: ErrorReportLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileFilterSensitiveLog = (obj: File): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CsvFilterSensitiveLog = (obj: Csv): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FileFormatFilterSensitiveLog = (obj: FileFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobConfigurationFilterSensitiveLog = (obj: JobConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBulkImportJobRequestFilterSensitiveLog = (obj: CreateBulkImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBulkImportJobResponseFilterSensitiveLog = (obj: CreateBulkImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDashboardRequestFilterSensitiveLog = (obj: CreateDashboardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDashboardResponseFilterSensitiveLog = (obj: CreateDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GreengrassFilterSensitiveLog = (obj: Greengrass): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GreengrassV2FilterSensitiveLog = (obj: GreengrassV2): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatewayPlatformFilterSensitiveLog = (obj: GatewayPlatform): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGatewayRequestFilterSensitiveLog = (obj: CreateGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateGatewayResponseFilterSensitiveLog = (obj: CreateGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFileFilterSensitiveLog = (obj: ImageFile): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePortalRequestFilterSensitiveLog = (obj: CreatePortalRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MonitorErrorDetailsFilterSensitiveLog = (obj: MonitorErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortalStatusFilterSensitiveLog = (obj: PortalStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePortalResponseFilterSensitiveLog = (obj: CreatePortalResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResponseFilterSensitiveLog = (obj: CreateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPolicyRequestFilterSensitiveLog = (obj: DeleteAccessPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAccessPolicyResponseFilterSensitiveLog = (obj: DeleteAccessPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssetRequestFilterSensitiveLog = (obj: DeleteAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssetResponseFilterSensitiveLog = (obj: DeleteAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssetModelRequestFilterSensitiveLog = (obj: DeleteAssetModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAssetModelResponseFilterSensitiveLog = (obj: DeleteAssetModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDashboardRequestFilterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDashboardResponseFilterSensitiveLog = (obj: DeleteDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteGatewayRequestFilterSensitiveLog = (obj: DeleteGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePortalRequestFilterSensitiveLog = (obj: DeletePortalRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePortalResponseFilterSensitiveLog = (obj: DeletePortalResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResponseFilterSensitiveLog = (obj: DeleteProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTimeSeriesRequestFilterSensitiveLog = (obj: DeleteTimeSeriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccessPolicyRequestFilterSensitiveLog = (obj: DescribeAccessPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccessPolicyResponseFilterSensitiveLog = (obj: DescribeAccessPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetRequestFilterSensitiveLog = (obj: DescribeAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetResponseFilterSensitiveLog = (obj: DescribeAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetModelRequestFilterSensitiveLog = (obj: DescribeAssetModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetModelResponseFilterSensitiveLog = (obj: DescribeAssetModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetPropertyRequestFilterSensitiveLog = (obj: DescribeAssetPropertyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PropertyFilterSensitiveLog = (obj: Property): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompositeModelPropertyFilterSensitiveLog = (obj: CompositeModelProperty): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAssetPropertyResponseFilterSensitiveLog = (obj: DescribeAssetPropertyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBulkImportJobRequestFilterSensitiveLog = (obj: DescribeBulkImportJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBulkImportJobResponseFilterSensitiveLog = (obj: DescribeBulkImportJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardRequestFilterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDashboardResponseFilterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDefaultEncryptionConfigurationRequestFilterSensitiveLog = (
  obj: DescribeDefaultEncryptionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationErrorDetailsFilterSensitiveLog = (obj: ConfigurationErrorDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationStatusFilterSensitiveLog = (obj: ConfigurationStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDefaultEncryptionConfigurationResponseFilterSensitiveLog = (
  obj: DescribeDefaultEncryptionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGatewayRequestFilterSensitiveLog = (obj: DescribeGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatewayCapabilitySummaryFilterSensitiveLog = (obj: GatewayCapabilitySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGatewayResponseFilterSensitiveLog = (obj: DescribeGatewayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGatewayCapabilityConfigurationRequestFilterSensitiveLog = (
  obj: DescribeGatewayCapabilityConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeGatewayCapabilityConfigurationResponseFilterSensitiveLog = (
  obj: DescribeGatewayCapabilityConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoggingOptionsRequestFilterSensitiveLog = (obj: DescribeLoggingOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoggingOptionsFilterSensitiveLog = (obj: LoggingOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoggingOptionsResponseFilterSensitiveLog = (obj: DescribeLoggingOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePortalRequestFilterSensitiveLog = (obj: DescribePortalRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageLocationFilterSensitiveLog = (obj: ImageLocation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePortalResponseFilterSensitiveLog = (obj: DescribePortalResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectRequestFilterSensitiveLog = (obj: DescribeProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectResponseFilterSensitiveLog = (obj: DescribeProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStorageConfigurationRequestFilterSensitiveLog = (
  obj: DescribeStorageConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomerManagedS3StorageFilterSensitiveLog = (obj: CustomerManagedS3Storage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultiLayerStorageFilterSensitiveLog = (obj: MultiLayerStorage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetentionPeriodFilterSensitiveLog = (obj: RetentionPeriod): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeStorageConfigurationResponseFilterSensitiveLog = (
  obj: DescribeStorageConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTimeSeriesRequestFilterSensitiveLog = (obj: DescribeTimeSeriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTimeSeriesResponseFilterSensitiveLog = (obj: DescribeTimeSeriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateAssetsRequestFilterSensitiveLog = (obj: DisassociateAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateTimeSeriesFromAssetPropertyRequestFilterSensitiveLog = (
  obj: DisassociateTimeSeriesFromAssetPropertyRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetPropertyAggregatesRequestFilterSensitiveLog = (obj: GetAssetPropertyAggregatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetPropertyAggregatesResponseFilterSensitiveLog = (obj: GetAssetPropertyAggregatesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetPropertyValueRequestFilterSensitiveLog = (obj: GetAssetPropertyValueRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetPropertyValueResponseFilterSensitiveLog = (obj: GetAssetPropertyValueResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetPropertyValueHistoryRequestFilterSensitiveLog = (
  obj: GetAssetPropertyValueHistoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetAssetPropertyValueHistoryResponseFilterSensitiveLog = (
  obj: GetAssetPropertyValueHistoryResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInterpolatedAssetPropertyValuesRequestFilterSensitiveLog = (
  obj: GetInterpolatedAssetPropertyValuesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InterpolatedAssetPropertyValueFilterSensitiveLog = (obj: InterpolatedAssetPropertyValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetInterpolatedAssetPropertyValuesResponseFilterSensitiveLog = (
  obj: GetInterpolatedAssetPropertyValuesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPoliciesRequestFilterSensitiveLog = (obj: ListAccessPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAccessPoliciesResponseFilterSensitiveLog = (obj: ListAccessPoliciesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetModelPropertiesRequestFilterSensitiveLog = (obj: ListAssetModelPropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetModelPropertiesResponseFilterSensitiveLog = (obj: ListAssetModelPropertiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetModelsRequestFilterSensitiveLog = (obj: ListAssetModelsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetModelsResponseFilterSensitiveLog = (obj: ListAssetModelsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetPropertiesRequestFilterSensitiveLog = (obj: ListAssetPropertiesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetPropertiesResponseFilterSensitiveLog = (obj: ListAssetPropertiesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetRelationshipsRequestFilterSensitiveLog = (obj: ListAssetRelationshipsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetRelationshipsResponseFilterSensitiveLog = (obj: ListAssetRelationshipsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetsRequestFilterSensitiveLog = (obj: ListAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssetsResponseFilterSensitiveLog = (obj: ListAssetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedAssetsRequestFilterSensitiveLog = (obj: ListAssociatedAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAssociatedAssetsResponseFilterSensitiveLog = (obj: ListAssociatedAssetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBulkImportJobsRequestFilterSensitiveLog = (obj: ListBulkImportJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobSummaryFilterSensitiveLog = (obj: JobSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBulkImportJobsResponseFilterSensitiveLog = (obj: ListBulkImportJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDashboardsRequestFilterSensitiveLog = (obj: ListDashboardsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DashboardSummaryFilterSensitiveLog = (obj: DashboardSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDashboardsResponseFilterSensitiveLog = (obj: ListDashboardsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGatewaysRequestFilterSensitiveLog = (obj: ListGatewaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GatewaySummaryFilterSensitiveLog = (obj: GatewaySummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListGatewaysResponseFilterSensitiveLog = (obj: ListGatewaysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPortalsRequestFilterSensitiveLog = (obj: ListPortalsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PortalSummaryFilterSensitiveLog = (obj: PortalSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPortalsResponseFilterSensitiveLog = (obj: ListPortalsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectAssetsRequestFilterSensitiveLog = (obj: ListProjectAssetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectAssetsResponseFilterSensitiveLog = (obj: ListProjectAssetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectSummaryFilterSensitiveLog = (obj: ProjectSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResponseFilterSensitiveLog = (obj: ListProjectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTimeSeriesRequestFilterSensitiveLog = (obj: ListTimeSeriesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TimeSeriesSummaryFilterSensitiveLog = (obj: TimeSeriesSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTimeSeriesResponseFilterSensitiveLog = (obj: ListTimeSeriesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDefaultEncryptionConfigurationRequestFilterSensitiveLog = (
  obj: PutDefaultEncryptionConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutDefaultEncryptionConfigurationResponseFilterSensitiveLog = (
  obj: PutDefaultEncryptionConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLoggingOptionsRequestFilterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLoggingOptionsResponseFilterSensitiveLog = (obj: PutLoggingOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStorageConfigurationRequestFilterSensitiveLog = (obj: PutStorageConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutStorageConfigurationResponseFilterSensitiveLog = (obj: PutStorageConfigurationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccessPolicyRequestFilterSensitiveLog = (obj: UpdateAccessPolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAccessPolicyResponseFilterSensitiveLog = (obj: UpdateAccessPolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetRequestFilterSensitiveLog = (obj: UpdateAssetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetResponseFilterSensitiveLog = (obj: UpdateAssetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetModelRequestFilterSensitiveLog = (obj: UpdateAssetModelRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetModelResponseFilterSensitiveLog = (obj: UpdateAssetModelResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAssetPropertyRequestFilterSensitiveLog = (obj: UpdateAssetPropertyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDashboardRequestFilterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDashboardResponseFilterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewayRequestFilterSensitiveLog = (obj: UpdateGatewayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewayCapabilityConfigurationRequestFilterSensitiveLog = (
  obj: UpdateGatewayCapabilityConfigurationRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateGatewayCapabilityConfigurationResponseFilterSensitiveLog = (
  obj: UpdateGatewayCapabilityConfigurationResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageFilterSensitiveLog = (obj: Image): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePortalRequestFilterSensitiveLog = (obj: UpdatePortalRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdatePortalResponseFilterSensitiveLog = (obj: UpdatePortalResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectResponseFilterSensitiveLog = (obj: UpdateProjectResponse): any => ({
  ...obj,
});
