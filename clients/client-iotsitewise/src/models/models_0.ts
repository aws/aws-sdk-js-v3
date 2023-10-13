// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

/**
 * @public
 * <p>Contains information for a group identity in an access policy.</p>
 */
export interface GroupIdentity {
  /**
   * @public
   * <p>The IAM Identity Center ID of the group.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *         <i>IAM User Guide</i>.</p>
 */
export interface IAMRoleIdentity {
  /**
   * @public
   * <p>The ARN of the IAM role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 * <p>Contains information about an Identity and Access Management user.</p>
 */
export interface IAMUserIdentity {
  /**
   * @public
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
 * @public
 * <p>Contains information for a user identity in an access policy.</p>
 */
export interface UserIdentity {
  /**
   * @public
   * <p>The IAM Identity Center ID of the user.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p>
 *          <note>
 *             <p>Currently, you can't use Amazon Web Services APIs to retrieve IAM Identity Center identity IDs. You can find the
 *         IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p>
 *          </note>
 */
export interface Identity {
  /**
   * @public
   * <p>An IAM Identity Center user identity.</p>
   */
  user?: UserIdentity;

  /**
   * @public
   * <p>An IAM Identity Center group identity.</p>
   */
  group?: GroupIdentity;

  /**
   * @public
   * <p>An IAM user identity.</p>
   */
  iamUser?: IAMUserIdentity;

  /**
   * @public
   * <p>An IAM role identity.</p>
   */
  iamRole?: IAMRoleIdentity;
}

/**
 * @public
 * @enum
 */
export const Permission = {
  ADMINISTRATOR: "ADMINISTRATOR",
  VIEWER: "VIEWER",
} as const;

/**
 * @public
 */
export type Permission = (typeof Permission)[keyof typeof Permission];

/**
 * @public
 * <p>Identifies an IoT SiteWise Monitor portal.</p>
 */
export interface PortalResource {
  /**
   * @public
   * <p>The ID of the portal.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Identifies a specific IoT SiteWise Monitor project.</p>
 */
export interface ProjectResource {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Contains an IoT SiteWise Monitor resource ID for a portal or project.</p>
 */
export interface Resource {
  /**
   * @public
   * <p>A portal resource.</p>
   */
  portal?: PortalResource;

  /**
   * @public
   * <p>A project resource.</p>
   */
  project?: ProjectResource;
}

/**
 * @public
 * <p>Contains an access policy that defines an identity's access to an IoT SiteWise Monitor
 *       resource.</p>
 */
export interface AccessPolicySummary {
  /**
   * @public
   * <p>The ID of the access policy.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user).</p>
   */
  identity: Identity | undefined;

  /**
   * @public
   * <p>The IoT SiteWise Monitor resource (a portal or project).</p>
   */
  resource: Resource | undefined;

  /**
   * @public
   * <p>The permissions for the access policy. Note that a project <code>ADMINISTRATOR</code> is
   *       also known as a project owner.</p>
   */
  permission: Permission | undefined;

  /**
   * @public
   * <p>The date the access policy was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

/**
 * @public
 * @enum
 */
export const Quality = {
  BAD: "BAD",
  GOOD: "GOOD",
  UNCERTAIN: "UNCERTAIN",
} as const;

/**
 * @public
 */
export type Quality = (typeof Quality)[keyof typeof Quality];

/**
 * @public
 * <p>Contains the (pre-calculated) aggregate values for an asset property.</p>
 */
export interface Aggregates {
  /**
   * @public
   * <p>The average (mean) value of the time series over a time interval window.</p>
   */
  average?: number;

  /**
   * @public
   * <p>The count of data points in the time series over a time interval window.</p>
   */
  count?: number;

  /**
   * @public
   * <p>The maximum value of the time series over a time interval window.</p>
   */
  maximum?: number;

  /**
   * @public
   * <p>The minimum value of the time series over a time interval window.</p>
   */
  minimum?: number;

  /**
   * @public
   * <p>The sum of the time series over a time interval window.</p>
   */
  sum?: number;

  /**
   * @public
   * <p>The standard deviation of the time series over a time interval window.</p>
   */
  standardDeviation?: number;
}

/**
 * @public
 * <p>Contains aggregated asset property values (for example, average, minimum, and
 *       maximum).</p>
 */
export interface AggregatedValue {
  /**
   * @public
   * <p>The date the aggregating computations occurred, in Unix epoch time.</p>
   */
  timestamp: Date | undefined;

  /**
   * @public
   * <p>The quality of the aggregated data.</p>
   */
  quality?: Quality;

  /**
   * @public
   * <p>The value of the aggregates.</p>
   */
  value: Aggregates | undefined;
}

/**
 * @public
 * @enum
 */
export const AggregateType = {
  AVERAGE: "AVERAGE",
  COUNT: "COUNT",
  MAXIMUM: "MAXIMUM",
  MINIMUM: "MINIMUM",
  STANDARD_DEVIATION: "STANDARD_DEVIATION",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type AggregateType = (typeof AggregateType)[keyof typeof AggregateType];

/**
 * @public
 * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
 *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
 *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
 */
export interface Alarms {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows the alarm to perform actions and access Amazon Web Services
   *       resources and services, such as IoT Events.</p>
   */
  alarmRoleArn: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function that manages alarm notifications. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">Managing alarm
   *         notifications</a> in the <i>IoT Events Developer Guide</i>.</p>
   */
  notificationLambdaArn?: string;
}

/**
 * @public
 * @enum
 */
export const PropertyDataType = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INTEGER: "INTEGER",
  STRING: "STRING",
  STRUCT: "STRUCT",
} as const;

/**
 * @public
 */
export type PropertyDataType = (typeof PropertyDataType)[keyof typeof PropertyDataType];

/**
 * @public
 * @enum
 */
export const PropertyNotificationState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type PropertyNotificationState = (typeof PropertyNotificationState)[keyof typeof PropertyNotificationState];

/**
 * @public
 * <p>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value
 *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface PropertyNotification {
  /**
   * @public
   * <p>The MQTT topic to which IoT SiteWise publishes property value update notifications.</p>
   */
  topic: string | undefined;

  /**
   * @public
   * <p>The current notification state.</p>
   */
  state: PropertyNotificationState | undefined;
}

/**
 * @public
 * <p>Contains asset property information.</p>
 */
export interface AssetProperty {
  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
   */
  notification?: PropertyNotification;

  /**
   * @public
   * <p>The data type of the asset property.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   */
  dataTypeSpec?: string;

  /**
   * @public
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   */
  unit?: string;
}

/**
 * @public
 * <p>Contains information about a composite model in an asset. This object contains the asset's
 *       properties that you define in the composite model.</p>
 */
export interface AssetCompositeModel {
  /**
   * @public
   * <p>The name of the composite model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the composite model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The asset properties that this composite model defines.</p>
   */
  properties: AssetProperty[] | undefined;

  /**
   * @public
   * <p>
   *       The ID of the asset composite model.
   *     </p>
   */
  id?: string;
}

/**
 * @public
 * @enum
 */
export const AssetErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
} as const;

/**
 * @public
 */
export type AssetErrorCode = (typeof AssetErrorCode)[keyof typeof AssetErrorCode];

/**
 * @public
 * <p>Contains error details for the requested associate project asset action.</p>
 */
export interface AssetErrorDetails {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The error code.</p>
   */
  code: AssetErrorCode | undefined;

  /**
   * @public
   * <p>The error message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>Describes an asset hierarchy that contains a hierarchy's name and ID.</p>
 */
export interface AssetHierarchy {
  /**
   * @public
   * <p>The ID of the hierarchy. This ID is a <code>hierarchyId</code>.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The hierarchy name provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>
   *       API operation.</p>
   */
  name: string | undefined;
}

/**
 * @public
 * <p>Contains information about a parent asset and a child asset that are related through an
 *       asset hierarchy.</p>
 */
export interface AssetHierarchyInfo {
  /**
   * @public
   * <p>The ID of the parent asset in this asset relationship.</p>
   */
  parentAssetId?: string;

  /**
   * @public
   * <p>The ID of the child asset in this asset relationship.</p>
   */
  childAssetId?: string;
}

/**
 * @public
 * <p>Contains an asset attribute property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Attribute {
  /**
   * @public
   * <p>The default value of the asset model property attribute. All assets that you create from
   *       the asset model contain this attribute value. You can update an attribute's value after you
   *       create an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html">Updating attribute values</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  defaultValue?: string;
}

/**
 * @public
 * @enum
 */
export const ForwardingConfigState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ForwardingConfigState = (typeof ForwardingConfigState)[keyof typeof ForwardingConfigState];

/**
 * @public
 * <p>The forwarding configuration for a given property.</p>
 */
export interface ForwardingConfig {
  /**
   * @public
   * <p>The forwarding state for the given property. </p>
   */
  state: ForwardingConfigState | undefined;
}

/**
 * @public
 * <p>The processing configuration for the given measurement property.
 *       You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud.
 *       By default, measurements are forwarded to the cloud.</p>
 */
export interface MeasurementProcessingConfig {
  /**
   * @public
   * <p>The forwarding configuration for the given measurement property. </p>
   */
  forwardingConfig: ForwardingConfig | undefined;
}

/**
 * @public
 * <p>Contains an asset measurement property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Measurement {
  /**
   * @public
   * <p>The processing configuration for the given measurement property.
   *       You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud.
   *       By default, measurements are forwarded to the cloud.</p>
   */
  processingConfig?: MeasurementProcessingConfig;
}

/**
 * @public
 * @enum
 */
export const ComputeLocation = {
  CLOUD: "CLOUD",
  EDGE: "EDGE",
} as const;

/**
 * @public
 */
export type ComputeLocation = (typeof ComputeLocation)[keyof typeof ComputeLocation];

/**
 * @public
 * <p>The processing configuration for the given metric property.
 *       You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud.
 *       By default, metrics are forwarded to the cloud.</p>
 */
export interface MetricProcessingConfig {
  /**
   * @public
   * <p>The compute location for the given metric property. </p>
   */
  computeLocation: ComputeLocation | undefined;
}

/**
 * @public
 * <p>Identifies a property value used in an expression.</p>
 */
export interface VariableValue {
  /**
   * @public
   * <p>The ID of the property to use as the variable. You can use the property <code>name</code>
   *       if it's from the same asset model.</p>
   */
  propertyId: string | undefined;

  /**
   * @public
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
 * @public
 * <p>Contains expression variable information.</p>
 */
export interface ExpressionVariable {
  /**
   * @public
   * <p>The friendly name of the variable to be used in the expression.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The variable that identifies an asset property from which to use values.</p>
   */
  value: VariableValue | undefined;
}

/**
 * @public
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
   * @public
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
   * @public
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
 * @public
 * <p>Contains a time interval window used for data aggregate computations (for example,
 *       average, sum, count, and so on).</p>
 */
export interface MetricWindow {
  /**
   * @public
   * <p>The tumbling time interval window.</p>
   */
  tumbling?: TumblingWindow;
}

/**
 * @public
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
   * @public
   * <p>The mathematical expression that defines the metric aggregation function. You can specify
   *       up to 10 variables per expression. You can specify up to 10 functions
   *       per expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  expression: string | undefined;

  /**
   * @public
   * <p>The list of variables used in the expression.</p>
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * @public
   * <p>The window (time interval) over which IoT SiteWise computes the metric's aggregation expression.
   *       IoT SiteWise computes one data point per <code>window</code>.</p>
   */
  window: MetricWindow | undefined;

  /**
   * @public
   * <p>The processing configuration for the given metric property.
   *       You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud.
   *       By default, metrics are forwarded to the cloud.</p>
   */
  processingConfig?: MetricProcessingConfig;
}

/**
 * @public
 * <p>The processing configuration for the given transform property.
 *       You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud.
 *       You can also configure transforms to be computed at the edge or in the cloud.</p>
 */
export interface TransformProcessingConfig {
  /**
   * @public
   * <p>The compute location for the given transform property. </p>
   */
  computeLocation: ComputeLocation | undefined;

  /**
   * @public
   * <p>The forwarding configuration for a given property.</p>
   */
  forwardingConfig?: ForwardingConfig;
}

/**
 * @public
 * <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's
 *       data points from one form to another. For example, you can use a transform to convert a
 *       Celsius data stream to Fahrenheit by applying the transformation expression to each data point
 *       of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and
 *       consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Transform {
  /**
   * @public
   * <p>The mathematical expression that defines the transformation function. You can specify up
   *       to 10 variables per expression. You can specify up to 10 functions per
   *       expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  expression: string | undefined;

  /**
   * @public
   * <p>The list of variables used in the expression.</p>
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * @public
   * <p>The processing configuration for the given transform property.
   *       You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud.
   *       You can also configure transforms to be computed at the edge or in the cloud.</p>
   */
  processingConfig?: TransformProcessingConfig;
}

/**
 * @public
 * <p>Contains a property type, which can be one of <code>attribute</code>,
 *         <code>measurement</code>, <code>metric</code>, or <code>transform</code>.</p>
 */
export interface PropertyType {
  /**
   * @public
   * <p>Specifies an asset attribute property. An attribute generally contains static information,
   *       such as the serial number of an <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">IIoT</a> wind turbine.</p>
   */
  attribute?: Attribute;

  /**
   * @public
   * <p>Specifies an asset measurement property. A measurement represents a device's raw sensor
   *       data stream, such as timestamped temperature values or timestamped power values.</p>
   */
  measurement?: Measurement;

  /**
   * @public
   * <p>Specifies an asset transform property. A transform contains a mathematical expression that
   *       maps a property's data points from one form to another, such as a unit conversion from Celsius
   *       to Fahrenheit.</p>
   */
  transform?: Transform;

  /**
   * @public
   * <p>Specifies an asset metric property. A metric contains a mathematical expression that uses
   *       aggregate functions to process all input data points over a time interval and output a single
   *       data point, such as to calculate the average hourly temperature.</p>
   */
  metric?: Metric;
}

/**
 * @public
 * <p>Contains information about an asset model property.</p>
 */
export interface AssetModelProperty {
  /**
   * @public
   * <p>The ID of the asset model property.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the asset model property.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The data type of the asset model property.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   */
  dataTypeSpec?: string;

  /**
   * @public
   * <p>The unit of the asset model property, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>The property type (see <code>PropertyType</code>).</p>
   */
  type: PropertyType | undefined;
}

/**
 * @public
 * <p>Contains information about a composite model in an asset model. This object contains the
 *       asset property definitions that you define in the composite model.</p>
 */
export interface AssetModelCompositeModel {
  /**
   * @public
   * <p>The name of the composite model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the composite model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The asset property definitions for this composite model.</p>
   */
  properties?: AssetModelProperty[];

  /**
   * @public
   * <p>
   *       The ID of the asset model composite model.
   *     </p>
   */
  id?: string;
}

/**
 * @public
 * <p>Contains an asset model property definition. This property definition is applied to all
 *       assets created from the asset model.</p>
 */
export interface AssetModelPropertyDefinition {
  /**
   * @public
   * <p>The name of the property definition.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The data type of the property definition.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to
   *       identify the type of the structure for this property.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The data type of the structure for this property. This parameter is required on properties
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model in which you
   *       define this property. Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite
   *       models.</p>
   */
  dataTypeSpec?: string;

  /**
   * @public
   * <p>The unit of the property definition, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>The property definition type (see <code>PropertyType</code>). You can only specify one
   *       type in a property definition.</p>
   */
  type: PropertyType | undefined;
}

/**
 * @public
 * <p>Contains a composite model definition in an asset model. This composite model definition
 *       is applied to all assets created from the asset model.</p>
 */
export interface AssetModelCompositeModelDefinition {
  /**
   * @public
   * <p>The name of the composite model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the composite model.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>The asset property definitions for this composite model.</p>
   */
  properties?: AssetModelPropertyDefinition[];
}

/**
 * @public
 * <p>Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model
 *       ID that specifies the type of asset that can be in this hierarchy.</p>
 */
export interface AssetModelHierarchy {
  /**
   * @public
   * <p>The ID of the asset model hierarchy. This ID is a <code>hierarchyId</code>.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the asset model hierarchy that you specify by using the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the asset model. All assets in this hierarchy must be instances of the
   *         <code>childAssetModelId</code> asset model.</p>
   */
  childAssetModelId: string | undefined;
}

/**
 * @public
 * <p>Contains an asset model hierarchy used in asset model creation. An asset model hierarchy
 *       determines the kind (or type) of asset that can belong to a hierarchy.</p>
 */
export interface AssetModelHierarchyDefinition {
  /**
   * @public
   * <p>The name of the asset model hierarchy definition (as specified in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation).</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of an asset model for this hierarchy.</p>
   */
  childAssetModelId: string | undefined;
}

/**
 * @public
 * <p>Contains a summary of a property associated with a model.</p>
 */
export interface AssetModelPropertySummary {
  /**
   * @public
   * <p>The ID of the property.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The data type of the property.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   */
  dataTypeSpec?: string;

  /**
   * @public
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the property.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>Contains a property type, which can be one of <code>attribute</code>,
   *         <code>measurement</code>, <code>metric</code>, or <code>transform</code>.</p>
   */
  type: PropertyType | undefined;

  /**
   * @public
   * <p>
   *       The ID of the composite model that contains the asset model property.
   *     </p>
   */
  assetModelCompositeModelId?: string;
}

/**
 * @public
 * @enum
 */
export const AssetModelState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROPAGATING: "PROPAGATING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AssetModelState = (typeof AssetModelState)[keyof typeof AssetModelState];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const DetailedErrorCode = {
  INCOMPATIBLE_COMPUTE_LOCATION: "INCOMPATIBLE_COMPUTE_LOCATION",
  INCOMPATIBLE_FORWARDING_CONFIGURATION: "INCOMPATIBLE_FORWARDING_CONFIGURATION",
} as const;

/**
 * @public
 */
export type DetailedErrorCode = (typeof DetailedErrorCode)[keyof typeof DetailedErrorCode];

/**
 * @public
 * <p>Contains detailed error information. </p>
 */
export interface DetailedError {
  /**
   * @public
   * <p>The error code. </p>
   */
  code: DetailedErrorCode | undefined;

  /**
   * @public
   * <p>The error message. </p>
   */
  message: string | undefined;
}

/**
 * @public
 * <p>Contains the details of an IoT SiteWise error.</p>
 */
export interface ErrorDetails {
  /**
   * @public
   * <p>The error code.</p>
   */
  code: ErrorCode | undefined;

  /**
   * @public
   * <p>The error message.</p>
   */
  message: string | undefined;

  /**
   * @public
   * <p> A list of detailed errors. </p>
   */
  details?: DetailedError[];
}

/**
 * @public
 * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
 *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface AssetModelStatus {
  /**
   * @public
   * <p>The current state of the asset model.</p>
   */
  state: AssetModelState | undefined;

  /**
   * @public
   * <p>Contains associated error information, if any.</p>
   */
  error?: ErrorDetails;
}

/**
 * @public
 * <p>Contains a summary of an asset model.</p>
 */
export interface AssetModelSummary {
  /**
   * @public
   * <p>The ID of the asset model (used with IoT SiteWise APIs).</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the asset model.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The asset model description.</p>
   */
  description: string | undefined;

  /**
   * @public
   * <p>The date the asset model was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * @public
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The current status of the asset model.</p>
   */
  status: AssetModelStatus | undefined;
}

/**
 * @public
 * <p>Contains a summary of a property associated with an asset.</p>
 */
export interface AssetPropertySummary {
  /**
   * @public
   * <p>The ID of the property.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>
   *       The unit of measure (such as Newtons or RPM) of the asset property.
   *     </p>
   */
  unit?: string;

  /**
   * @public
   * <p>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  notification?: PropertyNotification;

  /**
   * @public
   * <p>
   *       The ID of the composite model that contains the asset property.
   *     </p>
   */
  assetCompositeModelId?: string;
}

/**
 * @public
 * <p>Contains a timestamp with optional nanosecond granularity.</p>
 */
export interface TimeInNanos {
  /**
   * @public
   * <p>The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is
   *       provided by <code>offsetInNanos</code>.</p>
   */
  timeInSeconds: number | undefined;

  /**
   * @public
   * <p>The nanosecond offset from <code>timeInSeconds</code>.</p>
   */
  offsetInNanos?: number;
}

/**
 * @public
 * <p>Contains an asset property value (of a single type only).</p>
 */
export interface Variant {
  /**
   * @public
   * <p>Asset property data of type string (sequence of characters).</p>
   */
  stringValue?: string;

  /**
   * @public
   * <p>Asset property data of type integer (whole number).</p>
   */
  integerValue?: number;

  /**
   * @public
   * <p>Asset property data of type double (floating point number).</p>
   */
  doubleValue?: number;

  /**
   * @public
   * <p>Asset property data of type Boolean (true or false).</p>
   */
  booleanValue?: boolean;
}

/**
 * @public
 * <p>Contains asset property value information.</p>
 */
export interface AssetPropertyValue {
  /**
   * @public
   * <p>The value of the asset property (see <code>Variant</code>).</p>
   */
  value: Variant | undefined;

  /**
   * @public
   * <p>The timestamp of the asset property value.</p>
   */
  timestamp: TimeInNanos | undefined;

  /**
   * @public
   * <p>The quality of the asset property value.</p>
   */
  quality?: Quality;
}

/**
 * @public
 * @enum
 */
export const AssetRelationshipType = {
  HIERARCHY: "HIERARCHY",
} as const;

/**
 * @public
 */
export type AssetRelationshipType = (typeof AssetRelationshipType)[keyof typeof AssetRelationshipType];

/**
 * @public
 * <p>Contains information about assets that are related to one another.</p>
 */
export interface AssetRelationshipSummary {
  /**
   * @public
   * <p>The assets that are related through an asset hierarchy.</p>
   *          <p>This object is present if the <code>relationshipType</code> is
   *       <code>HIERARCHY</code>.</p>
   */
  hierarchyInfo?: AssetHierarchyInfo;

  /**
   * @public
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
  relationshipType: AssetRelationshipType | undefined;
}

/**
 * @public
 * @enum
 */
export const AssetState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type AssetState = (typeof AssetState)[keyof typeof AssetState];

/**
 * @public
 * <p>Contains information about the current status of an asset. For more information, see
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
 *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface AssetStatus {
  /**
   * @public
   * <p>The current status of the asset.</p>
   */
  state: AssetState | undefined;

  /**
   * @public
   * <p>Contains associated error information, if any.</p>
   */
  error?: ErrorDetails;
}

/**
 * @public
 * <p>Contains a summary of an asset.</p>
 */
export interface AssetSummary {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the asset model used to create this asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * @public
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The current status of the asset.</p>
   */
  status: AssetStatus | undefined;

  /**
   * @public
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * @public
   * <p>A description for the asset.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface AssociateAssetsRequest {
  /**
   * @public
   * <p>The ID of the parent asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings
   *       of assets to be formed that all come from the same asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * @public
   * <p>The ID of the child asset to be associated.</p>
   */
  childAssetId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 */
export class ConflictingOperationException extends __BaseException {
  readonly name: "ConflictingOperationException" = "ConflictingOperationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that conflicts with this operation.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>The resource already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The ID of the resource that already exists.</p>
   */
  resourceId: string | undefined;

  /**
   * @public
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
 * @public
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
 * @public
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
 * @public
 * <p>Contains a summary of an associated asset.</p>
 */
export interface AssociatedAssetsSummary {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The ID of the asset model used to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * @public
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The current status of the asset.</p>
   */
  status: AssetStatus | undefined;

  /**
   * @public
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * @public
   * <p>A description for the asset.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface AssociateTimeSeriesToAssetPropertyRequest {
  /**
   * @public
   * <p>The alias that identifies the time series.</p>
   */
  alias: string | undefined;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 * @enum
 */
export const AuthMode = {
  IAM: "IAM",
  SSO: "SSO",
} as const;

/**
 * @public
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

/**
 * @public
 */
export interface BatchAssociateProjectAssetsRequest {
  /**
   * @public
   * <p>The ID of the project to which to associate the assets.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The IDs of the assets to be associated to the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface BatchAssociateProjectAssetsResponse {
  /**
   * @public
   * <p>A list of associated error information, if any.</p>
   */
  errors?: AssetErrorDetails[];
}

/**
 * @public
 */
export interface BatchDisassociateProjectAssetsRequest {
  /**
   * @public
   * <p>The ID of the project from which to disassociate the assets.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The IDs of the assets to be disassociated from the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface BatchDisassociateProjectAssetsResponse {
  /**
   * @public
   * <p>A list of associated error information, if any.</p>
   */
  errors?: AssetErrorDetails[];
}

/**
 * @public
 * @enum
 */
export const TimeOrdering = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type TimeOrdering = (typeof TimeOrdering)[keyof typeof TimeOrdering];

/**
 * @public
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
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The data aggregating function.</p>
   */
  aggregateTypes: AggregateType[] | undefined;

  /**
   * @public
   * <p>The time interval over which to aggregate data.</p>
   */
  resolution: string | undefined;

  /**
   * @public
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate: Date | undefined;

  /**
   * @public
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate: Date | undefined;

  /**
   * @public
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: Quality[];

  /**
   * @public
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyAggregatesRequest {
  /**
   * @public
   * <p>The list of asset property aggregate entries for the batch get request. You can specify up
   *       to 16 entries per request.</p>
   */
  entries: BatchGetAssetPropertyAggregatesEntry[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 1 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *           <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p>
   *             </li>
   *          </ul>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const BatchGetAssetPropertyAggregatesErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
} as const;

/**
 * @public
 */
export type BatchGetAssetPropertyAggregatesErrorCode =
  (typeof BatchGetAssetPropertyAggregatesErrorCode)[keyof typeof BatchGetAssetPropertyAggregatesErrorCode];

/**
 * @public
 * <p>Contains error information for an asset property aggregate entry that is associated with
 *       the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 */
export interface BatchGetAssetPropertyAggregatesErrorEntry {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | undefined;

  /**
   * @public
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchEntryCompletionStatus = {
  ERROR: "ERROR",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type BatchEntryCompletionStatus = (typeof BatchEntryCompletionStatus)[keyof typeof BatchEntryCompletionStatus];

/**
 * @public
 * <p>Contains the error code and the timestamp for an asset property aggregate entry that is
 *       associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 */
export interface BatchGetAssetPropertyAggregatesErrorInfo {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | undefined;

  /**
   * @public
   * <p>The date the error occurred, in Unix epoch time.</p>
   */
  errorTimestamp: Date | undefined;
}

/**
 * @public
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request.</p>
 */
export interface BatchGetAssetPropertyAggregatesSkippedEntry {
  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * @public
   * <p>The error information, such as the error code and the timestamp.</p>
   */
  errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo;
}

/**
 * @public
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 */
export interface BatchGetAssetPropertyAggregatesSuccessEntry {
  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The requested aggregated asset property values (for example, average, minimum, and
   *       maximum).</p>
   */
  aggregatedValues: AggregatedValue[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyAggregatesResponse {
  /**
   * @public
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchGetAssetPropertyAggregatesErrorEntry[] | undefined;

  /**
   * @public
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   */
  successEntries: BatchGetAssetPropertyAggregatesSuccessEntry[] | undefined;

  /**
   * @public
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   */
  skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntry[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
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
 * @public
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
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueRequest {
  /**
   * @public
   * <p>The list of asset property value entries for the batch get request. You can specify up to
   *       128 entries per request.</p>
   */
  entries: BatchGetAssetPropertyValueEntry[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const BatchGetAssetPropertyValueErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
} as const;

/**
 * @public
 */
export type BatchGetAssetPropertyValueErrorCode =
  (typeof BatchGetAssetPropertyValueErrorCode)[keyof typeof BatchGetAssetPropertyValueErrorCode];

/**
 * @public
 * <p>Contains error information for an asset property value entry that is associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 */
export interface BatchGetAssetPropertyValueErrorEntry {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | undefined;

  /**
   * @public
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;
}

/**
 * @public
 * <p>The error information, such as the error code and the timestamp.</p>
 */
export interface BatchGetAssetPropertyValueErrorInfo {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | undefined;

  /**
   * @public
   * <p>The date the error occurred, in Unix epoch time.</p>
   */
  errorTimestamp: Date | undefined;
}

/**
 * @public
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.</p>
 */
export interface BatchGetAssetPropertyValueSkippedEntry {
  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.</p>
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * @public
   * <p>The error information, such as the error code and the timestamp.</p>
   */
  errorInfo?: BatchGetAssetPropertyValueErrorInfo;
}

/**
 * @public
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 */
export interface BatchGetAssetPropertyValueSuccessEntry {
  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>Contains asset property value information.</p>
   */
  assetPropertyValue?: AssetPropertyValue;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueResponse {
  /**
   * @public
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchGetAssetPropertyValueErrorEntry[] | undefined;

  /**
   * @public
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   */
  successEntries: BatchGetAssetPropertyValueSuccessEntry[] | undefined;

  /**
   * @public
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   */
  skippedEntries: BatchGetAssetPropertyValueSkippedEntry[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
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
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate?: Date;

  /**
   * @public
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate?: Date;

  /**
   * @public
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: Quality[];

  /**
   * @public
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryRequest {
  /**
   * @public
   * <p>The list of asset property historical value entries for the batch get request. You can
   *       specify up to 16 entries per request.</p>
   */
  entries: BatchGetAssetPropertyValueHistoryEntry[] | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 4 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 20000.</p>
   *             </li>
   *          </ul>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const BatchGetAssetPropertyValueHistoryErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  InvalidRequestException: "InvalidRequestException",
  ResourceNotFoundException: "ResourceNotFoundException",
} as const;

/**
 * @public
 */
export type BatchGetAssetPropertyValueHistoryErrorCode =
  (typeof BatchGetAssetPropertyValueHistoryErrorCode)[keyof typeof BatchGetAssetPropertyValueHistoryErrorCode];

/**
 * @public
 * <p>A list of the errors (if any) associated with the batch request. Each error entry
 *       contains the <code>entryId</code> of the entry that failed.</p>
 */
export interface BatchGetAssetPropertyValueHistoryErrorEntry {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | undefined;

  /**
   * @public
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;
}

/**
 * @public
 * <p>The error information, such as the error code and the timestamp.</p>
 */
export interface BatchGetAssetPropertyValueHistoryErrorInfo {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | undefined;

  /**
   * @public
   * <p>The date the error occurred, in Unix epoch time.</p>
   */
  errorTimestamp: Date | undefined;
}

/**
 * @public
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request.</p>
 */
export interface BatchGetAssetPropertyValueHistorySkippedEntry {
  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html">BatchGetAssetPropertyValueHistory</a> API.</p>
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * @public
   * <p>The error information, such as the error code and the timestamp.</p>
   */
  errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo;
}

/**
 * @public
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p>
 */
export interface BatchGetAssetPropertyValueHistorySuccessEntry {
  /**
   * @public
   * <p>The ID of the entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The requested historical values for the specified asset property.</p>
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryResponse {
  /**
   * @public
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchGetAssetPropertyValueHistoryErrorEntry[] | undefined;

  /**
   * @public
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   */
  successEntries: BatchGetAssetPropertyValueHistorySuccessEntry[] | undefined;

  /**
   * @public
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   */
  skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntry[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Contains a list of value updates for an asset property in the list of asset entries
 *       consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API
 *       operation.</p>
 */
export interface PutAssetPropertyValueEntry {
  /**
   * @public
   * <p>The user specified ID for the entry. You can use this ID to identify which entries
   *       failed.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset to update.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property for this entry.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The list of property values to upload. You can specify up to 10
   *         <code>propertyValues</code> array elements. </p>
   */
  propertyValues: AssetPropertyValue[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAssetPropertyValueRequest {
  /**
   * @public
   * <p>The list of asset property value entries for the batch put request. You can specify up to
   *       10 entries per request.</p>
   */
  entries: PutAssetPropertyValueEntry[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchPutAssetPropertyValueErrorCode = {
  AccessDeniedException: "AccessDeniedException",
  ConflictingOperationException: "ConflictingOperationException",
  InternalFailureException: "InternalFailureException",
  InvalidRequestException: "InvalidRequestException",
  LimitExceededException: "LimitExceededException",
  ResourceNotFoundException: "ResourceNotFoundException",
  ServiceUnavailableException: "ServiceUnavailableException",
  ThrottlingException: "ThrottlingException",
  TimestampOutOfRangeException: "TimestampOutOfRangeException",
} as const;

/**
 * @public
 */
export type BatchPutAssetPropertyValueErrorCode =
  (typeof BatchPutAssetPropertyValueErrorCode)[keyof typeof BatchPutAssetPropertyValueErrorCode];

/**
 * @public
 * <p>Contains error information from updating a batch of asset property values.</p>
 */
export interface BatchPutAssetPropertyError {
  /**
   * @public
   * <p>The error code.</p>
   */
  errorCode: BatchPutAssetPropertyValueErrorCode | undefined;

  /**
   * @public
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;

  /**
   * @public
   * <p>A list of timestamps for each  error, if any.</p>
   */
  timestamps: TimeInNanos[] | undefined;
}

/**
 * @public
 * <p>Contains error information for asset property value entries that are associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.</p>
 */
export interface BatchPutAssetPropertyErrorEntry {
  /**
   * @public
   * <p>The ID of the failed entry.</p>
   */
  entryId: string | undefined;

  /**
   * @public
   * <p>The list of update property value errors.</p>
   */
  errors: BatchPutAssetPropertyError[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAssetPropertyValueResponse {
  /**
   * @public
   * <p>A list of the errors (if any) associated with the batch put request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchPutAssetPropertyErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyRequest {
  /**
   * @public
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * @public
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * @public
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the access policy. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your
   *         IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAccessPolicyResponse {
  /**
   * @public
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:access-policy/$\{AccessPolicyId\}</code>
   *          </p>
   */
  accessPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetRequest {
  /**
   * @public
   * <p>A friendly name for the asset.</p>
   */
  assetName: string | undefined;

  /**
   * @public
   * <p>The ID of the asset model from which to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the asset. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>A description for the asset.</p>
   */
  assetDescription?: string;
}

/**
 * @public
 */
export interface CreateAssetResponse {
  /**
   * @public
   * <p>The ID of the asset. This ID uniquely identifies the asset within IoT SiteWise and can be used with other
   *       IoT SiteWise APIs.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   */
  assetArn: string | undefined;

  /**
   * @public
   * <p>The status of the asset, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelRequest {
  /**
   * @public
   * <p>A unique, friendly name for the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * @public
   * <p>A description for the asset model.</p>
   */
  assetModelDescription?: string;

  /**
   * @public
   * <p>The property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelProperties?: AssetModelPropertyDefinition[];

  /**
   * @public
   * <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model
   *       whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelHierarchies?: AssetModelHierarchyDefinition[];

  /**
   * @public
   * <p>The composite asset models that are part of this asset model.
   *       Composite asset models are asset models that contain specific properties. Each composite model
   *       has a type that defines the properties that the composite model supports. Use composite asset
   *       models to define alarms on this asset model.</p>
   */
  assetModelCompositeModels?: AssetModelCompositeModelDefinition[];

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the asset model. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateAssetModelResponse {
  /**
   * @public
   * <p>The ID of the asset model. You can use this ID when you call other IoT SiteWise APIs.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   */
  assetModelArn: string | undefined;

  /**
   * @public
   * <p>The status of the asset model, which contains a state (<code>CREATING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
 */
export interface ErrorReportLocation {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket to which errors associated with the bulk import job are
   *       sent.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p>Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has
   *       a key that is its unique identifier in the bucket. Each object in a bucket has exactly one
   *       key. The prefix must end with a forward slash (/). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects
   *         using prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  prefix: string | undefined;
}

/**
 * @public
 * <p>The file in Amazon S3 where your data is saved. </p>
 */
export interface File {
  /**
   * @public
   * <p>The name of the Amazon S3 bucket from which data is imported.</p>
   */
  bucket: string | undefined;

  /**
   * @public
   * <p>The key of the Amazon S3 object that contains your data. Each object has a key that is a unique
   *       identifier. Each object has exactly one key.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The version ID to identify a specific version of the Amazon S3 object that contains your
   *       data.</p>
   */
  versionId?: string;
}

/**
 * @public
 * @enum
 */
export const ColumnName = {
  ALIAS: "ALIAS",
  ASSET_ID: "ASSET_ID",
  DATA_TYPE: "DATA_TYPE",
  PROPERTY_ID: "PROPERTY_ID",
  QUALITY: "QUALITY",
  TIMESTAMP_NANO_OFFSET: "TIMESTAMP_NANO_OFFSET",
  TIMESTAMP_SECONDS: "TIMESTAMP_SECONDS",
  VALUE: "VALUE",
} as const;

/**
 * @public
 */
export type ColumnName = (typeof ColumnName)[keyof typeof ColumnName];

/**
 * @public
 * <p>A .csv file.</p>
 */
export interface Csv {
  /**
   * @public
   * <p>The column names specified in the .csv file.</p>
   */
  columnNames?: ColumnName[];
}

/**
 * @public
 * <p>The file format of the data.</p>
 */
export interface FileFormat {
  /**
   * @public
   * <p>The .csv file format.</p>
   */
  csv?: Csv;
}

/**
 * @public
 * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
 */
export interface JobConfiguration {
  /**
   * @public
   * <p>The file format of the data in Amazon S3.</p>
   */
  fileFormat: FileFormat | undefined;
}

/**
 * @public
 */
export interface CreateBulkImportJobRequest {
  /**
   * @public
   * <p>The unique name that helps identify the job request.</p>
   */
  jobName: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.</p>
   */
  jobRoleArn: string | undefined;

  /**
   * @public
   * <p>The files in the specified Amazon S3 bucket that contain your data.</p>
   */
  files: File[] | undefined;

  /**
   * @public
   * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * @public
   * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
   */
  jobConfiguration: JobConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const JobStatus = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type JobStatus = (typeof JobStatus)[keyof typeof JobStatus];

/**
 * @public
 */
export interface CreateBulkImportJobResponse {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The unique name that helps identify the job request.</p>
   */
  jobName: string | undefined;

  /**
   * @public
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
  jobStatus: JobStatus | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * @public
   * <p>The ID of the project in which to create the dashboard.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>A friendly name for the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * @public
   * <p>A description for the dashboard.</p>
   */
  dashboardDescription?: string;

  /**
   * @public
   * <p>The dashboard definition specified in a JSON literal. For detailed information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the dashboard. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * @public
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dashboard/$\{DashboardId\}</code>
   *          </p>
   */
  dashboardArn: string | undefined;
}

/**
 * @public
 * <p>Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass,
 *       you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass
 *       group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a
 *         gateway</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface Greengrass {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Greengrass group. For more information about how to find a group's
   *       ARN, see <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html">ListGroups</a> and <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html">GetGroup</a> in the
   *         <i>IoT Greengrass API Reference</i>.</p>
   */
  groupArn: string | undefined;
}

/**
 * @public
 * <p>Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass
 *       V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass
 *         device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more
 *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 */
export interface GreengrassV2 {
  /**
   * @public
   * <p>The name of the IoT thing for your IoT Greengrass V2 core device.</p>
   */
  coreDeviceThingName: string | undefined;
}

/**
 * @public
 * <p>Contains a gateway's platform information.</p>
 */
export interface GatewayPlatform {
  /**
   * @public
   * <p>A gateway that runs on IoT Greengrass.</p>
   */
  greengrass?: Greengrass;

  /**
   * @public
   * <p>A gateway that runs on IoT Greengrass V2.</p>
   */
  greengrassV2?: GreengrassV2;
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * @public
   * <p>A unique, friendly name for the gateway.</p>
   */
  gatewayName: string | undefined;

  /**
   * @public
   * <p>The gateway's platform. You can only specify one platform in a gateway.</p>
   */
  gatewayPlatform: GatewayPlatform | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the gateway. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * @public
   * <p>The ID of the gateway device. You can use this ID when you call other IoT SiteWise APIs.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:gateway/$\{GatewayId\}</code>
   *          </p>
   */
  gatewayArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImageFileType = {
  PNG: "PNG",
} as const;

/**
 * @public
 */
export type ImageFileType = (typeof ImageFileType)[keyof typeof ImageFileType];

/**
 * @public
 * <p>Contains an image file.</p>
 */
export interface ImageFile {
  /**
   * @public
   * <p>The image file contents, represented as a base64-encoded string. The file size must be
   *       less than 1 MB.</p>
   */
  data: Uint8Array | undefined;

  /**
   * @public
   * <p>The file type of the image.</p>
   */
  type: ImageFileType | undefined;
}

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * @public
   * <p>A friendly name for the portal.</p>
   */
  portalName: string | undefined;

  /**
   * @public
   * <p>A description for the portal.</p>
   */
  portalDescription?: string;

  /**
   * @public
   * <p>The Amazon Web Services administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A logo image to display in the portal. Upload a square, high-resolution image. The
   *       image is displayed on a dark background.</p>
   */
  portalLogoImageFile?: ImageFile;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the portal. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
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
  portalAuthMode?: AuthMode;

  /**
   * @public
   * <p>The email address that sends alarm notifications.</p>
   *          <important>
   *             <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda
   *           function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email
   *           address in Amazon SES</a>.</p>
   *          </important>
   */
  notificationSenderEmail?: string;

  /**
   * @public
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   */
  alarms?: Alarms;
}

/**
 * @public
 * @enum
 */
export const MonitorErrorCode = {
  INTERNAL_FAILURE: "INTERNAL_FAILURE",
  LIMIT_EXCEEDED: "LIMIT_EXCEEDED",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type MonitorErrorCode = (typeof MonitorErrorCode)[keyof typeof MonitorErrorCode];

/**
 * @public
 * <p>Contains IoT SiteWise Monitor error details.</p>
 */
export interface MonitorErrorDetails {
  /**
   * @public
   * <p>The error code.</p>
   */
  code?: MonitorErrorCode;

  /**
   * @public
   * <p>The error message.</p>
   */
  message?: string;
}

/**
 * @public
 * @enum
 */
export const PortalState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type PortalState = (typeof PortalState)[keyof typeof PortalState];

/**
 * @public
 * <p>Contains information about the current status of a portal.</p>
 */
export interface PortalStatus {
  /**
   * @public
   * <p>The current state of the portal.</p>
   */
  state: PortalState | undefined;

  /**
   * @public
   * <p>Contains associated error information, if any.</p>
   */
  error?: MonitorErrorDetails;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * @public
   * <p>The ID of the created portal.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:portal/$\{PortalId\}</code>
   *          </p>
   */
  portalArn: string | undefined;

  /**
   * @public
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * @public
   * <p>The status of the portal, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * @public
   * <p>The associated IAM Identity Center application ID, if the portal uses IAM Identity Center.</p>
   */
  ssoApplicationId: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>The ID of the portal in which to create the project.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>A friendly name for the project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>A description for the project.</p>
   */
  projectDescription?: string;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the project. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}</code>
   *          </p>
   */
  projectArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyRequest {
  /**
   * @public
   * <p>The ID of the access policy to be deleted.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAccessPolicyResponse {}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * @public
   * <p>The ID of the asset to delete.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAssetResponse {
  /**
   * @public
   * <p>The status of the asset, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelRequest {
  /**
   * @public
   * <p>The ID of the asset model to delete.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteAssetModelResponse {
  /**
   * @public
   * <p>The status of the asset model, which contains a state (<code>DELETING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * @public
   * <p>The ID of the dashboard to delete.</p>
   */
  dashboardId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * @public
   * <p>The ID of the gateway to delete.</p>
   */
  gatewayId: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * @public
   * <p>The ID of the portal to delete.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeletePortalResponse {
  /**
   * @public
   * <p>The status of the portal, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DeleteProjectResponse {}

/**
 * @public
 */
export interface DeleteTimeSeriesRequest {
  /**
   * @public
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DescribeAccessPolicyRequest {
  /**
   * @public
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPolicyResponse {
  /**
   * @public
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:access-policy/$\{AccessPolicyId\}</code>
   *          </p>
   */
  accessPolicyArn: string | undefined;

  /**
   * @public
   * <p>The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy
   *       applies.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * @public
   * <p>The IoT SiteWise Monitor resource (portal or project) to which this access policy provides
   *       access.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * @public
   * <p>The access policy permission. Note that a project <code>ADMINISTRATOR</code> is also known
   *       as a project owner.</p>
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * @public
   * <p>The date the access policy was created, in Unix epoch time.</p>
   */
  accessPolicyCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   */
  accessPolicyLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeAssetRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>
   *       Whether or not to exclude asset properties from the response.
   *     </p>
   */
  excludeProperties?: boolean;
}

/**
 * @public
 */
export interface DescribeAssetResponse {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   */
  assetArn: string | undefined;

  /**
   * @public
   * <p>The name of the asset.</p>
   */
  assetName: string | undefined;

  /**
   * @public
   * <p>The ID of the asset model that was used to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The list of asset properties for the asset.</p>
   *          <p>This object doesn't include properties that you define in composite models. You can find
   *       composite model properties in the <code>assetCompositeModels</code> object.</p>
   */
  assetProperties: AssetProperty[] | undefined;

  /**
   * @public
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  assetHierarchies: AssetHierarchy[] | undefined;

  /**
   * @public
   * <p>The composite models for the asset.</p>
   */
  assetCompositeModels?: AssetCompositeModel[];

  /**
   * @public
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  assetCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  assetLastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The current status of the asset, which contains a state and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;

  /**
   * @public
   * <p>A description for the asset.</p>
   */
  assetDescription?: string;
}

/**
 * @public
 */
export interface DescribeAssetModelRequest {
  /**
   * @public
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>
   *       Whether or not to exclude asset model properties from the response.
   *     </p>
   */
  excludeProperties?: boolean;
}

/**
 * @public
 */
export interface DescribeAssetModelResponse {
  /**
   * @public
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   */
  assetModelArn: string | undefined;

  /**
   * @public
   * <p>The name of the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * @public
   * <p>The asset model's description.</p>
   */
  assetModelDescription: string | undefined;

  /**
   * @public
   * <p>The list of asset properties for the asset model.</p>
   *          <p>This object doesn't include properties that you define in composite models. You can find
   *       composite model properties in the <code>assetModelCompositeModels</code> object.</p>
   */
  assetModelProperties: AssetModelProperty[] | undefined;

  /**
   * @public
   * <p>A list of asset model hierarchies that each contain a <code>childAssetModelId</code> and a
   *         <code>hierarchyId</code> (named <code>id</code>). A hierarchy specifies allowed parent/child
   *       asset relationships for an asset model.</p>
   */
  assetModelHierarchies: AssetModelHierarchy[] | undefined;

  /**
   * @public
   * <p>The list of composite asset models for the asset model.</p>
   */
  assetModelCompositeModels?: AssetModelCompositeModel[];

  /**
   * @public
   * <p>The date the asset model was created, in Unix epoch time.</p>
   */
  assetModelCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   */
  assetModelLastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The current status of the asset model, which contains a state and any error
   *       message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAssetPropertyRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;
}

/**
 * @public
 * <p>Contains asset property information.</p>
 */
export interface Property {
  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
   */
  notification?: PropertyNotification;

  /**
   * @public
   * <p>The property data type.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   */
  unit?: string;

  /**
   * @public
   * <p>The property type (see <code>PropertyType</code>). A property contains one type.</p>
   */
  type?: PropertyType;
}

/**
 * @public
 * <p>Contains information about a composite model property on an asset.</p>
 */
export interface CompositeModelProperty {
  /**
   * @public
   * <p>The name of the property.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The type of the composite model that defines this property.</p>
   */
  type: string | undefined;

  /**
   * @public
   * <p>Contains asset property information.</p>
   */
  assetProperty: Property | undefined;

  /**
   * @public
   * <p>
   *       The ID of the composite model that contains the property.
   *     </p>
   */
  id?: string;
}

/**
 * @public
 */
export interface DescribeAssetPropertyResponse {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The name of the asset.</p>
   */
  assetName: string | undefined;

  /**
   * @public
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The asset property's definition, alias, and notification state.</p>
   *          <p>This response includes this object for normal asset properties. If you describe an asset
   *       property in a composite model, this response includes the asset property information in
   *         <code>compositeModel</code>.</p>
   */
  assetProperty?: Property;

  /**
   * @public
   * <p>The composite asset model that declares this asset property, if this asset property exists
   *       in a composite model.</p>
   */
  compositeModel?: CompositeModelProperty;
}

/**
 * @public
 */
export interface DescribeBulkImportJobRequest {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeBulkImportJobResponse {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The unique name that helps identify the job request.</p>
   */
  jobName: string | undefined;

  /**
   * @public
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
  jobStatus: JobStatus | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.</p>
   */
  jobRoleArn: string | undefined;

  /**
   * @public
   * <p>The files in the specified Amazon S3 bucket that contain your data.</p>
   */
  files: File[] | undefined;

  /**
   * @public
   * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * @public
   * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
   */
  jobConfiguration: JobConfiguration | undefined;

  /**
   * @public
   * <p>The date the job was created, in Unix epoch TIME.</p>
   */
  jobCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the job was last updated, in Unix epoch time.</p>
   */
  jobLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * @public
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * @public
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dashboard/$\{DashboardId\}</code>
   *          </p>
   */
  dashboardArn: string | undefined;

  /**
   * @public
   * <p>The name of the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * @public
   * <p>The ID of the project that the dashboard is in.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The dashboard's description.</p>
   */
  dashboardDescription?: string;

  /**
   * @public
   * <p>The dashboard's definition JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating
   *         dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * @public
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   */
  dashboardCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   */
  dashboardLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultEncryptionConfigurationRequest {}

/**
 * @public
 * <p>Contains the details of an IoT SiteWise configuration error.</p>
 */
export interface ConfigurationErrorDetails {
  /**
   * @public
   * <p>The error code.</p>
   */
  code: ErrorCode | undefined;

  /**
   * @public
   * <p>The error message.</p>
   */
  message: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConfigurationState = {
  ACTIVE: "ACTIVE",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATE_IN_PROGRESS: "UPDATE_IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ConfigurationState = (typeof ConfigurationState)[keyof typeof ConfigurationState];

/**
 * @public
 * <p>Contains current status information for the configuration.</p>
 */
export interface ConfigurationStatus {
  /**
   * @public
   * <p>The current state of the configuration.</p>
   */
  state: ConfigurationState | undefined;

  /**
   * @public
   * <p>Contains associated error information, if any.</p>
   */
  error?: ConfigurationErrorDetails;
}

/**
 * @public
 * @enum
 */
export const EncryptionType = {
  KMS_BASED_ENCRYPTION: "KMS_BASED_ENCRYPTION",
  SITEWISE_DEFAULT_ENCRYPTION: "SITEWISE_DEFAULT_ENCRYPTION",
} as const;

/**
 * @public
 */
export type EncryptionType = (typeof EncryptionType)[keyof typeof EncryptionType];

/**
 * @public
 */
export interface DescribeDefaultEncryptionConfigurationResponse {
  /**
   * @public
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | undefined;

  /**
   * @public
   * <p>The key ARN of the customer managed key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there's an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * @public
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapabilitySyncStatus = {
  IN_SYNC: "IN_SYNC",
  OUT_OF_SYNC: "OUT_OF_SYNC",
  SYNC_FAILED: "SYNC_FAILED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CapabilitySyncStatus = (typeof CapabilitySyncStatus)[keyof typeof CapabilitySyncStatus];

/**
 * @public
 * <p>Contains a summary of a gateway capability configuration.</p>
 */
export interface GatewayCapabilitySummary {
  /**
   * @public
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC-UA
   *       sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * @public
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
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * @public
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The name of the gateway.</p>
   */
  gatewayName: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:gateway/$\{GatewayId\}</code>
   *          </p>
   */
  gatewayArn: string | undefined;

  /**
   * @public
   * <p>The gateway's platform.</p>
   */
  gatewayPlatform?: GatewayPlatform;

  /**
   * @public
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   */
  gatewayCapabilitySummaries: GatewayCapabilitySummary[] | undefined;

  /**
   * @public
   * <p>The date the gateway was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * @public
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayCapabilityConfigurationRequest {
  /**
   * @public
   * <p>The ID of the gateway that defines the capability configuration.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC-UA
   *       sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayCapabilityConfigurationResponse {
  /**
   * @public
   * <p>The ID of the gateway that defines the capability configuration.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The namespace of the gateway capability.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * @public
   * <p>The JSON document that defines the gateway capability's configuration. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  capabilityConfiguration: string | undefined;

  /**
   * @public
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
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsRequest {}

/**
 * @public
 * @enum
 */
export const LoggingLevel = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
} as const;

/**
 * @public
 */
export type LoggingLevel = (typeof LoggingLevel)[keyof typeof LoggingLevel];

/**
 * @public
 * <p>Contains logging options.</p>
 */
export interface LoggingOptions {
  /**
   * @public
   * <p>The IoT SiteWise logging verbosity level.</p>
   */
  level: LoggingLevel | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * @public
   * <p>The current logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface DescribePortalRequest {
  /**
   * @public
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;
}

/**
 * @public
 * <p>Contains an image that is uploaded to IoT SiteWise and available at a URL.</p>
 */
export interface ImageLocation {
  /**
   * @public
   * <p>The ID of the image.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The URL where the image is available. The URL is valid for 15 minutes so that you can view
   *       and download the image</p>
   */
  url: string | undefined;
}

/**
 * @public
 */
export interface DescribePortalResponse {
  /**
   * @public
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:portal/$\{PortalId\}</code>
   *          </p>
   */
  portalArn: string | undefined;

  /**
   * @public
   * <p>The name of the portal.</p>
   */
  portalName: string | undefined;

  /**
   * @public
   * <p>The portal's description.</p>
   */
  portalDescription?: string;

  /**
   * @public
   * <p>The IAM Identity Center application generated client ID (used with IAM Identity Center APIs). IoT SiteWise includes
   *         <code>portalClientId</code> for only portals that use IAM Identity Center to authenticate users.</p>
   */
  portalClientId: string | undefined;

  /**
   * @public
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * @public
   * <p>The current status of the portal, which contains a state and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * @public
   * <p>The date the portal was created, in Unix epoch time.</p>
   */
  portalCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   */
  portalLastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The portal's logo image, which is available at a URL.</p>
   */
  portalLogoImageLocation?: ImageLocation;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>The service to use to authenticate users to the portal.</p>
   */
  portalAuthMode?: AuthMode;

  /**
   * @public
   * <p>The email address that sends alarm notifications.</p>
   */
  notificationSenderEmail?: string;

  /**
   * @public
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.</p>
   */
  alarms?: Alarms;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}</code>
   *          </p>
   */
  projectArn: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The ID of the portal that the project is in.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>The project's description.</p>
   */
  projectDescription?: string;

  /**
   * @public
   * <p>The date the project was created, in Unix epoch time.</p>
   */
  projectCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date the project was last updated, in Unix epoch time.</p>
   */
  projectLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeStorageConfigurationRequest {}

/**
 * @public
 * @enum
 */
export const DisassociatedDataStorageState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type DisassociatedDataStorageState =
  (typeof DisassociatedDataStorageState)[keyof typeof DisassociatedDataStorageState];

/**
 * @public
 * <p>Contains information about a customer managed Amazon S3 bucket.</p>
 */
export interface CustomerManagedS3Storage {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Amazon S3 object. For more information about how to find the ARN for an
   *       Amazon S3 object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html">Amazon S3 resources</a> in the
   *         <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  s3ResourceArn: string | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.</p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>Contains information about the storage destination.</p>
 */
export interface MultiLayerStorage {
  /**
   * @public
   * <p>Contains information about a customer managed Amazon S3 bucket.</p>
   */
  customerManagedS3Storage: CustomerManagedS3Storage | undefined;
}

/**
 * @public
 * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
 */
export interface RetentionPeriod {
  /**
   * @public
   * <p>The number of days that your data is kept.</p>
   *          <note>
   *             <p>If you specified a value for this parameter, the <code>unlimited</code> parameter must
   *         be <code>false</code>.</p>
   *          </note>
   */
  numberOfDays?: number;

  /**
   * @public
   * <p>If true, your data is kept indefinitely.</p>
   *          <note>
   *             <p>If configured to <code>true</code>, you must not specify a value for the
   *           <code>numberOfDays</code> parameter.</p>
   *          </note>
   */
  unlimited?: boolean;
}

/**
 * @public
 * @enum
 */
export const StorageType = {
  MULTI_LAYER_STORAGE: "MULTI_LAYER_STORAGE",
  SITEWISE_DEFAULT_STORAGE: "SITEWISE_DEFAULT_STORAGE",
} as const;

/**
 * @public
 */
export type StorageType = (typeof StorageType)[keyof typeof StorageType];

/**
 * @public
 */
export interface DescribeStorageConfigurationResponse {
  /**
   * @public
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
  storageType: StorageType | undefined;

  /**
   * @public
   * <p>Contains information about the storage destination.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * @public
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
  disassociatedDataStorage?: DisassociatedDataStorageState;

  /**
   * @public
   * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * @public
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * @public
   * <p>The date the storage configuration was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

/**
 * @public
 */
export interface DescribeTimeSeriesRequest {
  /**
   * @public
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;
}

/**
 * @public
 */
export interface DescribeTimeSeriesResponse {
  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ID of the time series.</p>
   */
  timeSeriesId: string | undefined;

  /**
   * @public
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   */
  dataTypeSpec?: string;

  /**
   * @public
   * <p>The date that the time series was created, in Unix epoch time.</p>
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}</code>
   *          </p>
   */
  timeSeriesArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAssetsRequest {
  /**
   * @public
   * <p>The ID of the parent asset from which to disassociate the child asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings
   *       of assets to be formed that all come from the same asset model. You can use the hierarchy ID
   *       to identify the correct asset to disassociate. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * @public
   * <p>The ID of the child asset to disassociate.</p>
   */
  childAssetId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface DisassociateTimeSeriesFromAssetPropertyRequest {
  /**
   * @public
   * <p>The alias that identifies the time series.</p>
   */
  alias: string | undefined;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The data aggregating function.</p>
   */
  aggregateTypes: AggregateType[] | undefined;

  /**
   * @public
   * <p>The time interval over which to aggregate data.</p>
   */
  resolution: string | undefined;

  /**
   * @public
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: Quality[];

  /**
   * @public
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate: Date | undefined;

  /**
   * @public
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate: Date | undefined;

  /**
   * @public
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 1 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *           <code>maxResults</code>. The maximum value of <code>maxResults</code> is 250.</p>
   *             </li>
   *          </ul>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesResponse {
  /**
   * @public
   * <p>The requested aggregated values.</p>
   */
  aggregatedValues: AggregatedValue[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetAssetPropertyValueRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;
}

/**
 * @public
 */
export interface GetAssetPropertyValueResponse {
  /**
   * @public
   * <p>The current asset property value.</p>
   */
  propertyValue?: AssetPropertyValue;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate?: Date;

  /**
   * @public
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate?: Date;

  /**
   * @public
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: Quality[];

  /**
   * @public
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   */
  timeOrdering?: TimeOrdering;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 4 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *           <code>maxResults</code>. The maximum value of <code>maxResults</code> is 20000.</p>
   *             </li>
   *          </ul>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryResponse {
  /**
   * @public
   * <p>The asset property's value history.</p>
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The exclusive start of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   */
  startTimeInSeconds: number | undefined;

  /**
   * @public
   * <p>The nanosecond offset converted from <code>startTimeInSeconds</code>.</p>
   */
  startTimeOffsetInNanos?: number;

  /**
   * @public
   * <p>The inclusive end of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   */
  endTimeInSeconds: number | undefined;

  /**
   * @public
   * <p>The nanosecond offset converted from <code>endTimeInSeconds</code>.</p>
   */
  endTimeOffsetInNanos?: number;

  /**
   * @public
   * <p>The quality of the asset property value. You can use this parameter as a filter to choose
   *       only the asset property values that have a specific quality.</p>
   */
  quality: Quality | undefined;

  /**
   * @public
   * <p>The time interval in seconds over which to interpolate data. Each interval starts when the
   *       previous one ends.</p>
   */
  intervalInSeconds: number | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 10.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   * @public
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
 * @public
 * <p>Contains information about an interpolated asset property value.</p>
 */
export interface InterpolatedAssetPropertyValue {
  /**
   * @public
   * <p>Contains a timestamp with optional nanosecond granularity.</p>
   */
  timestamp: TimeInNanos | undefined;

  /**
   * @public
   * <p>Contains an asset property value (of a single type only).</p>
   */
  value: Variant | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesResponse {
  /**
   * @public
   * <p>The requested interpolated values.</p>
   */
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const IdentityType = {
  GROUP: "GROUP",
  IAM: "IAM",
  USER: "USER",
} as const;

/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  PORTAL: "PORTAL",
  PROJECT: "PROJECT",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface ListAccessPoliciesRequest {
  /**
   * @public
   * <p>The type of identity (IAM Identity Center user, IAM Identity Center group, or IAM user). This parameter is required
   *       if you specify <code>identityId</code>.</p>
   */
  identityType?: IdentityType;

  /**
   * @public
   * <p>The ID of the identity. This parameter is required if you specify <code>USER</code> or
   *         <code>GROUP</code> for <code>identityType</code>.</p>
   */
  identityId?: string;

  /**
   * @public
   * <p>The type of resource (portal or project). This parameter is required if you specify
   *         <code>resourceId</code>.</p>
   */
  resourceType?: ResourceType;

  /**
   * @public
   * <p>The ID of the resource. This parameter is required if you specify
   *         <code>resourceType</code>.</p>
   */
  resourceId?: string;

  /**
   * @public
   * <p>The ARN of the IAM user. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>. This parameter is required if you specify
   *         <code>IAM</code> for <code>identityType</code>.</p>
   */
  iamArn?: string;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAccessPoliciesResponse {
  /**
   * @public
   * <p>A list that summarizes each access policy.</p>
   */
  accessPolicySummaries: AccessPolicySummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListAssetModelPropertiesFilter = {
  ALL: "ALL",
  BASE: "BASE",
} as const;

/**
 * @public
 */
export type ListAssetModelPropertiesFilter =
  (typeof ListAssetModelPropertiesFilter)[keyof typeof ListAssetModelPropertiesFilter];

/**
 * @public
 */
export interface ListAssetModelPropertiesRequest {
  /**
   * @public
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   */
  maxResults?: number;

  /**
   * @public
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
  filter?: ListAssetModelPropertiesFilter;
}

/**
 * @public
 */
export interface ListAssetModelPropertiesResponse {
  /**
   * @public
   * <p>A list that summarizes the properties associated with the specified asset model.</p>
   */
  assetModelPropertySummaries: AssetModelPropertySummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListAssetModelsRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssetModelsResponse {
  /**
   * @public
   * <p>A list that summarizes each asset model.</p>
   */
  assetModelSummaries: AssetModelSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListAssetPropertiesFilter = {
  ALL: "ALL",
  BASE: "BASE",
} as const;

/**
 * @public
 */
export type ListAssetPropertiesFilter = (typeof ListAssetPropertiesFilter)[keyof typeof ListAssetPropertiesFilter];

/**
 * @public
 */
export interface ListAssetPropertiesRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 50.</p>
   */
  maxResults?: number;

  /**
   * @public
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
  filter?: ListAssetPropertiesFilter;
}

/**
 * @public
 */
export interface ListAssetPropertiesResponse {
  /**
   * @public
   * <p>A list that summarizes the properties associated with the specified asset.</p>
   */
  assetPropertySummaries: AssetPropertySummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TraversalType = {
  PATH_TO_ROOT: "PATH_TO_ROOT",
} as const;

/**
 * @public
 */
export type TraversalType = (typeof TraversalType)[keyof typeof TraversalType];

/**
 * @public
 */
export interface ListAssetRelationshipsRequest {
  /**
   * @public
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * @public
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
  traversalType: TraversalType | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssetRelationshipsResponse {
  /**
   * @public
   * <p>A list that summarizes each asset relationship.</p>
   */
  assetRelationshipSummaries: AssetRelationshipSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListAssetsFilter = {
  ALL: "ALL",
  TOP_LEVEL: "TOP_LEVEL",
} as const;

/**
 * @public
 */
export type ListAssetsFilter = (typeof ListAssetsFilter)[keyof typeof ListAssetsFilter];

/**
 * @public
 */
export interface ListAssetsRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The ID of the asset model by which to filter the list of assets. This parameter is
   *       required if you choose <code>ALL</code> for <code>filter</code>.</p>
   */
  assetModelId?: string;

  /**
   * @public
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
  filter?: ListAssetsFilter;
}

/**
 * @public
 */
export interface ListAssetsResponse {
  /**
   * @public
   * <p>A list that summarizes each asset.</p>
   */
  assetSummaries: AssetSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const TraversalDirection = {
  CHILD: "CHILD",
  PARENT: "PARENT",
} as const;

/**
 * @public
 */
export type TraversalDirection = (typeof TraversalDirection)[keyof typeof TraversalDirection];

/**
 * @public
 */
export interface ListAssociatedAssetsRequest {
  /**
   * @public
   * <p>The ID of the asset to query.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of the hierarchy by which child assets are associated to the asset. To find a
   *       hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a> operations. This
   *       parameter is required if you choose <code>CHILD</code> for
   *       <code>traversalDirection</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId?: string;

  /**
   * @public
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
  traversalDirection?: TraversalDirection;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListAssociatedAssetsResponse {
  /**
   * @public
   * <p>A list that summarizes the associated assets.</p>
   */
  assetSummaries: AssociatedAssetsSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * @enum
 */
export const ListBulkImportJobsFilter = {
  ALL: "ALL",
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  COMPLETED_WITH_FAILURES: "COMPLETED_WITH_FAILURES",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ListBulkImportJobsFilter = (typeof ListBulkImportJobsFilter)[keyof typeof ListBulkImportJobsFilter];

/**
 * @public
 */
export interface ListBulkImportJobsRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>You can use a filter to select the bulk import jobs that you want to retrieve.</p>
   */
  filter?: ListBulkImportJobsFilter;
}

/**
 * @public
 * <p>Contains a job summary information.</p>
 */
export interface JobSummary {
  /**
   * @public
   * <p>The ID of the job.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The unique name that helps identify the job request.</p>
   */
  name: string | undefined;

  /**
   * @public
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
  status: JobStatus | undefined;
}

/**
 * @public
 */
export interface ListBulkImportJobsResponse {
  /**
   * @public
   * <p>One or more job summaries to list.</p>
   */
  jobSummaries: JobSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDashboardsRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a dashboard summary.</p>
 */
export interface DashboardSummary {
  /**
   * @public
   * <p>The ID of the dashboard.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the dashboard</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The dashboard's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

/**
 * @public
 */
export interface ListDashboardsResponse {
  /**
   * @public
   * <p>A list that summarizes each dashboard in the project.</p>
   */
  dashboardSummaries: DashboardSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListGatewaysRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a summary of a gateway.</p>
 */
export interface GatewaySummary {
  /**
   * @public
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The name of the asset.</p>
   */
  gatewayName: string | undefined;

  /**
   * @public
   * <p>Contains a gateway's platform information.</p>
   */
  gatewayPlatform?: GatewayPlatform;

  /**
   * @public
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   */
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[];

  /**
   * @public
   * <p>The date the gateway was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * @public
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface ListGatewaysResponse {
  /**
   * @public
   * <p>A list that summarizes each gateway.</p>
   */
  gatewaySummaries: GatewaySummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains a portal summary.</p>
 */
export interface PortalSummary {
  /**
   * @public
   * <p>The ID of the portal.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the portal.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The portal's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  startUrl: string | undefined;

  /**
   * @public
   * <p>The date the portal was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn?: string;

  /**
   * @public
   * <p>Contains information about the current status of a portal.</p>
   */
  status: PortalStatus | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * @public
   * <p>A list that summarizes each portal.</p>
   */
  portalSummaries?: PortalSummary[];

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProjectAssetsRequest {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListProjectAssetsResponse {
  /**
   * @public
   * <p>A list that contains the IDs of each asset associated with the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   *          <p>Default: 50</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Contains project summary information.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The project's description.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The date the project was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * @public
   * <p>The date the project was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * @public
   * <p>A list that summarizes each project in the portal.</p>
   */
  projectSummaries: ProjectSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
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

/**
 * @public
 * @enum
 */
export const ListTimeSeriesType = {
  ASSOCIATED: "ASSOCIATED",
  DISASSOCIATED: "DISASSOCIATED",
} as const;

/**
 * @public
 */
export type ListTimeSeriesType = (typeof ListTimeSeriesType)[keyof typeof ListTimeSeriesType];

/**
 * @public
 */
export interface ListTimeSeriesRequest {
  /**
   * @public
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return for each paginated request.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The alias prefix of the time series.</p>
   */
  aliasPrefix?: string;

  /**
   * @public
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
  timeSeriesType?: ListTimeSeriesType;
}

/**
 * @public
 * <p>Contains a summary of a time series (data stream).</p>
 */
export interface TimeSeriesSummary {
  /**
   * @public
   * <p>The ID of the asset in which the asset property was created.</p>
   */
  assetId?: string;

  /**
   * @public
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * @public
   * <p>The alias that identifies the time series.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>The ID of the time series.</p>
   */
  timeSeriesId: string | undefined;

  /**
   * @public
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   */
  dataType: PropertyDataType | undefined;

  /**
   * @public
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   */
  dataTypeSpec?: string;

  /**
   * @public
   * <p>The date that the time series was created, in Unix epoch time.</p>
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * @public
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}</code>
   *          </p>
   */
  timeSeriesArn: string | undefined;
}

/**
 * @public
 */
export interface ListTimeSeriesResponse {
  /**
   * @public
   * <p>One or more time series summaries to list.</p>
   */
  TimeSeriesSummaries: TimeSeriesSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * @public
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | undefined;

  /**
   * @public
   * <p>The Key ID of the customer managed key used for KMS encryption. This is required if you
   *       use <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyId?: string;
}

/**
 * @public
 */
export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * @public
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | undefined;

  /**
   * @public
   * <p>The Key ARN of the KMS key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyArn?: string;

  /**
   * @public
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there is an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsRequest {
  /**
   * @public
   * <p>The logging options to set.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * @public
 */
export interface PutLoggingOptionsResponse {}

/**
 * @public
 */
export interface PutStorageConfigurationRequest {
  /**
   * @public
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
  storageType: StorageType | undefined;

  /**
   * @public
   * <p>Identifies a storage destination. If you specified <code>MULTI_LAYER_STORAGE</code> for the storage type,
   *       you must specify a <code>MultiLayerStorage</code> object.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * @public
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
  disassociatedDataStorage?: DisassociatedDataStorageState;

  /**
   * @public
   * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;
}

/**
 * @public
 */
export interface PutStorageConfigurationResponse {
  /**
   * @public
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
  storageType: StorageType | undefined;

  /**
   * @public
   * <p>Contains information about the storage destination.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * @public
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
  disassociatedDataStorage?: DisassociatedDataStorageState;

  /**
   * @public
   * <p>How many days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * @public
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p>You've reached the limit for the number of tags allowed for a resource. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag naming limits and
 *         requirements</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @public
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

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>A list of keys for tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccessPolicyRequest {
  /**
   * @public
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * @public
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * @public
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * @public
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateAccessPolicyResponse {}

/**
 * @public
 */
export interface UpdateAssetRequest {
  /**
   * @public
   * <p>The ID of the asset to update.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>A friendly name for the asset.</p>
   */
  assetName: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>A description for the asset.</p>
   */
  assetDescription?: string;
}

/**
 * @public
 */
export interface UpdateAssetResponse {
  /**
   * @public
   * <p>The status of the asset, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetModelRequest {
  /**
   * @public
   * <p>The ID of the asset model to update.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>A unique, friendly name for the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * @public
   * <p>A description for the asset model.</p>
   */
  assetModelDescription?: string;

  /**
   * @public
   * <p>The updated property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelProperties?: AssetModelProperty[];

  /**
   * @public
   * <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset
   *       model whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelHierarchies?: AssetModelHierarchy[];

  /**
   * @public
   * <p>The composite asset models that are part of this asset model.
   *       Composite asset models are asset models that contain specific properties. Each composite model
   *       has a type that defines the properties that the composite model supports. Use composite asset
   *       models to define alarms on this asset model.</p>
   */
  assetModelCompositeModels?: AssetModelCompositeModel[];

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateAssetModelResponse {
  /**
   * @public
   * <p>The status of the asset model, which contains a state (<code>UPDATING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetPropertyRequest {
  /**
   * @public
   * <p>The ID of the asset to be updated.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset property to be updated.</p>
   */
  propertyId: string | undefined;

  /**
   * @public
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the alias is removed from the property.</p>
   */
  propertyAlias?: string;

  /**
   * @public
   * <p>The MQTT notification state (enabled or disabled) for this asset property.
   *       When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>
   */
  propertyNotificationState?: PropertyNotificationState;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The unit of measure (such as Newtons or RPM) of the asset property. If you don't specify a
   *       value for this parameter, the service uses the value of the <code>assetModelProperty</code> in
   *       the asset model.</p>
   */
  propertyUnit?: string;
}

/**
 * @public
 */
export interface UpdateDashboardRequest {
  /**
   * @public
   * <p>The ID of the dashboard to update.</p>
   */
  dashboardId: string | undefined;

  /**
   * @public
   * <p>A new friendly name for the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * @public
   * <p>A new description for the dashboard.</p>
   */
  dashboardDescription?: string;

  /**
   * @public
   * <p>The new dashboard definition, as specified in a JSON literal. For detailed information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDashboardResponse {}

/**
 * @public
 */
export interface UpdateGatewayRequest {
  /**
   * @public
   * <p>The ID of the gateway to update.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>A unique, friendly name for the gateway.</p>
   */
  gatewayName: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * @public
   * <p>The ID of the gateway to be updated.</p>
   */
  gatewayId: string | undefined;

  /**
   * @public
   * <p>The namespace of the gateway capability configuration to be updated.
   *       For example, if you configure OPC-UA
   *       sources from the IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * @public
   * <p>The JSON document that defines the configuration for the gateway capability. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  capabilityConfiguration: string | undefined;
}

/**
 * @public
 */
export interface UpdateGatewayCapabilityConfigurationResponse {
  /**
   * @public
   * <p>The namespace of the gateway capability.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * @public
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
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
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
   * @public
   * <p>The ID of an existing image. Specify this parameter to keep an existing image.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Contains an image file.</p>
   */
  file?: ImageFile;
}

/**
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * @public
   * <p>The ID of the portal to update.</p>
   */
  portalId: string | undefined;

  /**
   * @public
   * <p>A new friendly name for the portal.</p>
   */
  portalName: string | undefined;

  /**
   * @public
   * <p>A new description for the portal.</p>
   */
  portalDescription?: string;

  /**
   * @public
   * <p>The Amazon Web Services administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * @public
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
   * @public
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The email address that sends alarm notifications.</p>
   */
  notificationSenderEmail?: string;

  /**
   * @public
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   */
  alarms?: Alarms;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * @public
   * <p>The status of the portal, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * @public
   * <p>The ID of the project to update.</p>
   */
  projectId: string | undefined;

  /**
   * @public
   * <p>A new friendly name for the project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>A new description for the project.</p>
   */
  projectDescription?: string;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateProjectResponse {}
