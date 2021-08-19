import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Contains information for a group identity in an access policy.</p>
 */
export interface GroupIdentity {
  /**
   * <p>The Amazon Web Services SSO ID of the group.</p>
   */
  id: string | undefined;
}

export namespace GroupIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GroupIdentity): any => ({
    ...obj,
  });
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

export namespace IAMRoleIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IAMRoleIdentity): any => ({
    ...obj,
  });
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

export namespace IAMUserIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IAMUserIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information for a user identity in an access policy.</p>
 */
export interface UserIdentity {
  /**
   * <p>The Amazon Web Services SSO ID of the user.</p>
   */
  id: string | undefined;
}

export namespace UserIdentity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UserIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p>
 *          <note>
 *             <p>Currently, you can't use Amazon Web Services APIs to retrieve Amazon Web Services SSO identity IDs. You can find the
 *         Amazon Web Services SSO identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">Amazon Web Services SSO console</a>.</p>
 *          </note>
 */
export interface Identity {
  /**
   * <p>An Amazon Web Services SSO user identity.</p>
   */
  user?: UserIdentity;

  /**
   * <p>An Amazon Web Services SSO group identity.</p>
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

export namespace Identity {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
  });
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

export namespace PortalResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortalResource): any => ({
    ...obj,
  });
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

export namespace ProjectResource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectResource): any => ({
    ...obj,
  });
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

export namespace Resource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
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
   * <p>The identity (an Amazon Web Services SSO user, an Amazon Web Services SSO group, or an IAM user).</p>
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

export namespace AccessPolicySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessPolicySummary): any => ({
    ...obj,
  });
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

export namespace Aggregates {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Aggregates): any => ({
    ...obj,
  });
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

export namespace AggregatedValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregatedValue): any => ({
    ...obj,
  });
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

export namespace Alarms {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Alarms): any => ({
    ...obj,
  });
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

export namespace PropertyNotification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyNotification): any => ({
    ...obj,
  });
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

export namespace AssetProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetProperty): any => ({
    ...obj,
  });
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
}

export namespace AssetCompositeModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetCompositeModel): any => ({
    ...obj,
  });
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

export namespace AssetErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetErrorDetails): any => ({
    ...obj,
  });
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

export namespace AssetHierarchy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetHierarchy): any => ({
    ...obj,
  });
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

export namespace AssetHierarchyInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetHierarchyInfo): any => ({
    ...obj,
  });
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

export namespace Attribute {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
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

export namespace ForwardingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ForwardingConfig): any => ({
    ...obj,
  });
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

export namespace MeasurementProcessingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MeasurementProcessingConfig): any => ({
    ...obj,
  });
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

export namespace Measurement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Measurement): any => ({
    ...obj,
  });
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

export namespace MetricProcessingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricProcessingConfig): any => ({
    ...obj,
  });
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

export namespace VariableValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VariableValue): any => ({
    ...obj,
  });
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

export namespace ExpressionVariable {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExpressionVariable): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and
 *       contiguous time window. You use this window in metrics to aggregate data from properties and other assets.</p>
 *          <p>You can use <code>m</code>, <code>h</code>, <code>d</code>, and <code>w</code>
 *       when you specify an interval or offset. Note that <code>m</code> represents minutes,
 *       and <code>w</code> represents weeks. You can also use <code>s</code> to represent seconds
 *       in <code>offset</code>.</p>
 *          <p>The <code>interval</code> and <code>offset</code> parameters support the
 *       <a href="https://en.wikipedia.org/wiki/ISO_8601">ISO 8601 format</a>.
 *       For example, <code>PT5S</code> represents five seconds, <code>PT5M</code> represents five minutes,
 *       and <code>PT5H</code> represents five hours.</p>
 */
export interface TumblingWindow {
  /**
   * <p>The time interval for the tumbling window. The interval time must be between 1 minute and 1 week.</p>
   *          <p>IoT SiteWise computes the <code>1w</code> interval the end of Sunday at midnight
   *       each week (UTC), the <code>1d</code> interval at the end of each day at midnight (UTC), the
   *       <code>1h</code> interval at the end of each hour, and so on. </p>
   *          <p>When IoT SiteWise aggregates data points for metric computations, the start of each interval is
   *       exclusive and the end of each interval is inclusive. IoT SiteWise places the computed data point at
   *       the end of the interval.</p>
   */
  interval: string | undefined;

  /**
   * <p>The offset for the tumbling window. The <code>offset</code> parameter accepts the following:</p>
   *          <ul>
   *             <li>
   *                <p>The offset time.</p>
   *                <p>For example, if you specify <code>18h</code> for <code>offset</code>
   *           and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following ways:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you create the metric before or at 6:00 PM (UTC),
   *               you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you create the metric after 6:00 PM (UTC),
   *               you get the first aggregation result at 6 PM (UTC) the next day.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The ISO 8601 format.</p>
   *                <p>For example, if you specify <code>PT18H</code> for <code>offset</code>
   *           and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following ways:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you create the metric before or at 6:00 PM (UTC),
   *               you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you create the metric after 6:00 PM (UTC),
   *               you get the first aggregation result at 6 PM (UTC) the next day.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>The 24-hour clock.</p>
   *                <p>For example, if you specify <code>00:03:00</code> for <code>offset</code>
   *           and <code>5m</code> for <code>interval</code>, and you create the metric at 2 PM (UTC),
   *           you get the first aggregation result at 2:03 PM (UTC).
   *           You get the second aggregation result at 2:08 PM (UTC). </p>
   *             </li>
   *             <li>
   *                <p>The offset time zone.</p>
   *                <p>For example, if you specify <code>2021-07-23T18:00-08</code> for <code>offset</code>
   *           and <code>1d</code> for <code>interval</code>, IoT SiteWise aggregates data in one of the following ways:</p>
   *                <ul>
   *                   <li>
   *                      <p>If you create the metric before or at 6:00 PM (PST),
   *               you get the first aggregation result at 6 PM (PST) on the day when you create the metric.</p>
   *                   </li>
   *                   <li>
   *                      <p>If you create the metric after 6:00 PM (PST),
   *               you get the first aggregation result at 6 PM (PST) the next day.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  offset?: string;
}

export namespace TumblingWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TumblingWindow): any => ({
    ...obj,
  });
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

export namespace MetricWindow {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetricWindow): any => ({
    ...obj,
  });
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

export namespace Metric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Metric): any => ({
    ...obj,
  });
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

export namespace TransformProcessingConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformProcessingConfig): any => ({
    ...obj,
  });
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

export namespace Transform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Transform): any => ({
    ...obj,
  });
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

export namespace PropertyType {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PropertyType): any => ({
    ...obj,
  });
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

export namespace AssetModelProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelProperty): any => ({
    ...obj,
  });
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
}

export namespace AssetModelCompositeModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelCompositeModel): any => ({
    ...obj,
  });
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

export namespace AssetModelPropertyDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelPropertyDefinition): any => ({
    ...obj,
  });
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

export namespace AssetModelCompositeModelDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelCompositeModelDefinition): any => ({
    ...obj,
  });
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

export namespace AssetModelHierarchy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelHierarchy): any => ({
    ...obj,
  });
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

export namespace AssetModelHierarchyDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelHierarchyDefinition): any => ({
    ...obj,
  });
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

export namespace DetailedError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DetailedError): any => ({
    ...obj,
  });
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

export namespace ErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
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

export namespace AssetModelStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelStatus): any => ({
    ...obj,
  });
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

export namespace AssetModelSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetModelSummary): any => ({
    ...obj,
  });
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

export namespace TimeInNanos {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TimeInNanos): any => ({
    ...obj,
  });
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

export namespace Variant {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Variant): any => ({
    ...obj,
  });
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

export namespace AssetPropertyValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetPropertyValue): any => ({
    ...obj,
  });
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

export namespace AssetRelationshipSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetRelationshipSummary): any => ({
    ...obj,
  });
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

export namespace AssetStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetStatus): any => ({
    ...obj,
  });
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
}

export namespace AssetSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssetSummary): any => ({
    ...obj,
  });
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

export namespace AssociateAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociateAssetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 */
export interface ConflictingOperationException extends __SmithyException, $MetadataBearer {
  name: "ConflictingOperationException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The ID of the resource that conflicts with this operation.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that conflicts with this operation.</p>
   */
  resourceArn: string | undefined;
}

export namespace ConflictingOperationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictingOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>IoT SiteWise can't process your request right now. Try again later.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalFailureException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request isn't valid. This can occur if your request contains malformed JSON or
 *       unsupported characters. Check your request and try again.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  message: string | undefined;
}

export namespace InvalidRequestException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace LimitExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The requested resource can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message: string | undefined;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
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
}

export namespace AssociatedAssetsSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedAssetsSummary): any => ({
    ...obj,
  });
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

export namespace BatchAssociateProjectAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateProjectAssetsRequest): any => ({
    ...obj,
  });
}

export interface BatchAssociateProjectAssetsResponse {
  /**
   * <p>A list of associated error information, if any.</p>
   */
  errors?: AssetErrorDetails[];
}

export namespace BatchAssociateProjectAssetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchAssociateProjectAssetsResponse): any => ({
    ...obj,
  });
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

export namespace BatchDisassociateProjectAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateProjectAssetsRequest): any => ({
    ...obj,
  });
}

export interface BatchDisassociateProjectAssetsResponse {
  /**
   * <p>A list of associated error information, if any.</p>
   */
  errors?: AssetErrorDetails[];
}

export namespace BatchDisassociateProjectAssetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDisassociateProjectAssetsResponse): any => ({
    ...obj,
  });
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

export namespace PutAssetPropertyValueEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutAssetPropertyValueEntry): any => ({
    ...obj,
  });
}

export interface BatchPutAssetPropertyValueRequest {
  /**
   * <p>The list of asset property value entries for the batch put request. You can specify up to
   *       10 entries per request.</p>
   */
  entries: PutAssetPropertyValueEntry[] | undefined;
}

export namespace BatchPutAssetPropertyValueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutAssetPropertyValueRequest): any => ({
    ...obj,
  });
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

export namespace BatchPutAssetPropertyError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutAssetPropertyError): any => ({
    ...obj,
  });
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

export namespace BatchPutAssetPropertyErrorEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutAssetPropertyErrorEntry): any => ({
    ...obj,
  });
}

export interface BatchPutAssetPropertyValueResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch put request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   */
  errorEntries: BatchPutAssetPropertyErrorEntry[] | undefined;
}

export namespace BatchPutAssetPropertyValueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchPutAssetPropertyValueResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The requested service is unavailable.</p>
 */
export interface ServiceUnavailableException extends __SmithyException, $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message: string | undefined;
}

export namespace ServiceUnavailableException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export interface CreateAccessPolicyRequest {
  /**
   * <p>The identity for this access policy. Choose an Amazon Web Services SSO user, an Amazon Web Services SSO group, or an IAM user.</p>
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
  tags?: { [key: string]: string };
}

export namespace CreateAccessPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccessPolicyRequest): any => ({
    ...obj,
  });
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

export namespace CreateAccessPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAccessPolicyResponse): any => ({
    ...obj,
  });
}

export interface CreateAssetRequest {
  /**
   * <p>A unique, friendly name for the asset.</p>
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
  tags?: { [key: string]: string };
}

export namespace CreateAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssetRequest): any => ({
    ...obj,
  });
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

export namespace CreateAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The resource already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message: string | undefined;
  /**
   * <p>The ID of the resource that already exists.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that already exists.</p>
   */
  resourceArn: string | undefined;
}

export namespace ResourceAlreadyExistsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateAssetModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssetModelRequest): any => ({
    ...obj,
  });
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

export namespace CreateAssetModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssetModelResponse): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDashboardRequest): any => ({
    ...obj,
  });
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

export namespace CreateDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDashboardResponse): any => ({
    ...obj,
  });
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

export namespace Greengrass {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Greengrass): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2,
 *       you must deploy the IoT SiteWise Edge component to your gateway device.
 *       Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass device role</a>
 *       must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more information,
 *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a>
 *       in the <i>IoT SiteWise User Guide</i>.</p>
 */
export interface GreengrassV2 {
  /**
   * <p>The name of the IoT thing for your IoT Greengrass V2 core device.</p>
   */
  coreDeviceThingName: string | undefined;
}

export namespace GreengrassV2 {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GreengrassV2): any => ({
    ...obj,
  });
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

export namespace GatewayPlatform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayPlatform): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGatewayRequest): any => ({
    ...obj,
  });
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

export namespace CreateGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateGatewayResponse): any => ({
    ...obj,
  });
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

export namespace ImageFile {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageFile): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };

  /**
   * <p>The service to use to authenticate users to the portal. Choose from the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSO</code> – The portal uses Amazon Web Services Single Sign On to authenticate users and manage
   *           user permissions. Before you can create a portal that uses Amazon Web Services SSO, you must enable Amazon Web Services SSO.
   *           For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso">Enabling Amazon Web Services SSO</a> in the
   *             <i>IoT SiteWise User Guide</i>. This option is only available in Amazon Web Services Regions other than
   *           the China Regions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IAM</code> – The portal uses Identity and Access Management to authenticate users and manage
   *           user permissions. This option is only available in the China Regions.</p>
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

export namespace CreatePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePortalRequest): any => ({
    ...obj,
  });
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

export namespace MonitorErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MonitorErrorDetails): any => ({
    ...obj,
  });
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

export namespace PortalStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortalStatus): any => ({
    ...obj,
  });
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
   *       use Amazon Web Services SSO for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The status of the portal, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The associated Amazon Web Services SSO application ID, if the portal uses Amazon Web Services SSO.</p>
   */
  ssoApplicationId: string | undefined;
}

export namespace CreatePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreatePortalResponse): any => ({
    ...obj,
  });
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
  tags?: { [key: string]: string };
}

export namespace CreateProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
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

export namespace CreateProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectResponse): any => ({
    ...obj,
  });
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

export namespace DeleteAccessPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccessPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessPolicyResponse {}

export namespace DeleteAccessPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAccessPolicyResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssetRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssetResponse {
  /**
   * <p>The status of the asset, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

export namespace DeleteAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssetResponse): any => ({
    ...obj,
  });
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

export namespace DeleteAssetModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssetModelRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssetModelResponse {
  /**
   * <p>The status of the asset model, which contains a state (<code>DELETING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

export namespace DeleteAssetModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssetModelResponse): any => ({
    ...obj,
  });
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

export namespace DeleteDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
    ...obj,
  });
}

export interface DeleteDashboardResponse {}

export namespace DeleteDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDashboardResponse): any => ({
    ...obj,
  });
}

export interface DeleteGatewayRequest {
  /**
   * <p>The ID of the gateway to delete.</p>
   */
  gatewayId: string | undefined;
}

export namespace DeleteGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteGatewayRequest): any => ({
    ...obj,
  });
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

export namespace DeletePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePortalRequest): any => ({
    ...obj,
  });
}

export interface DeletePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;
}

export namespace DeletePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePortalResponse): any => ({
    ...obj,
  });
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

export namespace DeleteProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteProjectResponse {}

export namespace DeleteProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectResponse): any => ({
    ...obj,
  });
}

export interface DescribeAccessPolicyRequest {
  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;
}

export namespace DescribeAccessPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccessPolicyRequest): any => ({
    ...obj,
  });
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
   * <p>The identity (Amazon Web Services SSO user, Amazon Web Services SSO group, or IAM user) to which this access policy
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

export namespace DescribeAccessPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAccessPolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeAssetRequest {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;
}

export namespace DescribeAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssetRequest): any => ({
    ...obj,
  });
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
}

export namespace DescribeAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssetResponse): any => ({
    ...obj,
  });
}

export interface DescribeAssetModelRequest {
  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;
}

export namespace DescribeAssetModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssetModelRequest): any => ({
    ...obj,
  });
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

export namespace DescribeAssetModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssetModelResponse): any => ({
    ...obj,
  });
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

export namespace DescribeAssetPropertyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssetPropertyRequest): any => ({
    ...obj,
  });
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

export namespace Property {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Property): any => ({
    ...obj,
  });
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
}

export namespace CompositeModelProperty {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CompositeModelProperty): any => ({
    ...obj,
  });
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

export namespace DescribeAssetPropertyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeAssetPropertyResponse): any => ({
    ...obj,
  });
}

export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;
}

export namespace DescribeDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
    ...obj,
  });
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

export namespace DescribeDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
    ...obj,
  });
}

export interface DescribeDefaultEncryptionConfigurationRequest {}

export namespace DescribeDefaultEncryptionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDefaultEncryptionConfigurationRequest): any => ({
    ...obj,
  });
}

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

export namespace ConfigurationErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationErrorDetails): any => ({
    ...obj,
  });
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

export namespace ConfigurationStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfigurationStatus): any => ({
    ...obj,
  });
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
   * <p>The key ARN of the customer managed customer master key (CMK) used for KMS encryption if
   *       you use <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there's an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

export namespace DescribeDefaultEncryptionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDefaultEncryptionConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeGatewayRequest {
  /**
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;
}

export namespace DescribeGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGatewayRequest): any => ({
    ...obj,
  });
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

export namespace GatewayCapabilitySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewayCapabilitySummary): any => ({
    ...obj,
  });
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

export namespace DescribeGatewayResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGatewayResponse): any => ({
    ...obj,
  });
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

export namespace DescribeGatewayCapabilityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGatewayCapabilityConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace DescribeGatewayCapabilityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeGatewayCapabilityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsRequest {}

export namespace DescribeLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsRequest): any => ({
    ...obj,
  });
}

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

export namespace LoggingOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LoggingOptions): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current logging options.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace DescribeLoggingOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeLoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface DescribePortalRequest {
  /**
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;
}

export namespace DescribePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePortalRequest): any => ({
    ...obj,
  });
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

export namespace ImageLocation {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageLocation): any => ({
    ...obj,
  });
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
   * <p>The Amazon Web Services SSO application generated client ID (used with Amazon Web Services SSO APIs). IoT SiteWise includes
   *         <code>portalClientId</code> for only portals that use Amazon Web Services SSO to authenticate users.</p>
   */
  portalClientId: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use Amazon Web Services SSO for authentication. For portals that use IAM for authentication, you must use the
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

export namespace DescribePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribePortalResponse): any => ({
    ...obj,
  });
}

export interface DescribeProjectRequest {
  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;
}

export namespace DescribeProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProjectRequest): any => ({
    ...obj,
  });
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

export namespace DescribeProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProjectResponse): any => ({
    ...obj,
  });
}

export interface DescribeStorageConfigurationRequest {}

export namespace DescribeStorageConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStorageConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about a customer managed Amazon S3 bucket.</p>
 */
export interface CustomerManagedS3Storage {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Amazon S3 object. For more information about how to find the ARN for an
   *       Amazon S3 object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html">Amazon S3 resources</a> in the
   *       <i>Amazon Simple Storage Service User Guide</i>.</p>
   */
  s3ResourceArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.</p>
   */
  roleArn: string | undefined;
}

export namespace CustomerManagedS3Storage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomerManagedS3Storage): any => ({
    ...obj,
  });
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

export namespace MultiLayerStorage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultiLayerStorage): any => ({
    ...obj,
  });
}

export enum StorageType {
  MULTI_LAYER_STORAGE = "MULTI_LAYER_STORAGE",
  SITEWISE_DEFAULT_STORAGE = "SITEWISE_DEFAULT_STORAGE",
}

export interface DescribeStorageConfigurationResponse {
  /**
   * <p>The type of storage that you specified for your data. The storage type can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise replicates your data into a service managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise replicates your data into a service managed database and saves a copy of your raw data and metadata in an Amazon S3 object that you specified.</p>
   *             </li>
   *          </ul>
   */
  storageType: StorageType | string | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The date the storage configuration was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;
}

export namespace DescribeStorageConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeStorageConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace DisassociateAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DisassociateAssetsRequest): any => ({
    ...obj,
  });
}

export enum TimeOrdering {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
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

export namespace GetAssetPropertyAggregatesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetPropertyAggregatesRequest): any => ({
    ...obj,
  });
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

export namespace GetAssetPropertyAggregatesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetPropertyAggregatesResponse): any => ({
    ...obj,
  });
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

export namespace GetAssetPropertyValueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetPropertyValueRequest): any => ({
    ...obj,
  });
}

export interface GetAssetPropertyValueResponse {
  /**
   * <p>The current asset property value.</p>
   */
  propertyValue?: AssetPropertyValue;
}

export namespace GetAssetPropertyValueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetPropertyValueResponse): any => ({
    ...obj,
  });
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

export namespace GetAssetPropertyValueHistoryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetPropertyValueHistoryRequest): any => ({
    ...obj,
  });
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

export namespace GetAssetPropertyValueHistoryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssetPropertyValueHistoryResponse): any => ({
    ...obj,
  });
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
   *          <p>For the <code>LOCF_INTERPOLATION</code> interpolation, if no data point is found for an interval,
   *       IoT SiteWise returns the same interpolated value calculated for the previous interval
   *       and carries forward this interpolated value until a new data point is found.</p>
   *          <p>For example, you can get the interpolated temperature values for a wind turbine every 24 hours over a duration of 7 days.
   *       If the <code>LOCF_INTERPOLATION</code> interpolation starts on July 1, 2021, at 9 AM, IoT SiteWise uses the data points from July 1, 2021,
   *       at 9 AM to July 2, 2021, at 9 AM to compute the first interpolated value.
   *       If no data points is found after 9 A.M. on July 2, 2021, IoT SiteWise uses the same interpolated value for the rest of the days.</p>
   */
  type: string | undefined;

  /**
   * <p>The query interval for the window in seconds. IoT SiteWise computes each interpolated value by using data points
   *       from the timestamp of each interval minus the window to the timestamp of each interval plus the window.
   *       If not specified, the window is between the start time minus the interval and the end time plus the interval. </p>
   *          <note>
   *             <ul>
   *                <li>
   *                   <p>If you specify a value for the <code>intervalWindowInSeconds</code> parameter,
   *             the <code>type</code> parameter must be <code>LINEAR_INTERPOLATION</code>.</p>
   *                </li>
   *                <li>
   *                   <p>If no data point is found during the specified query window,
   *             IoT SiteWise won't return an interpolated value for the interval.
   *             This indicates that there's a gap in the ingested data points.</p>
   *                </li>
   *             </ul>
   *          </note>
   *          <p>For example, you can get the interpolated temperature values for a wind turbine
   *       every 24 hours over a duration of 7 days. If the interpolation starts on July 1, 2021,
   *       at 9 AM with a window of 2 hours, IoT SiteWise uses the data points from 7 AM (9 AM - 2 hours)
   *       to 11 AM (9 AM + 2 hours) on July 2, 2021 to compute the first interpolated value,
   *       uses the data points from 7 AM (9 AM - 2 hours) to 11 AM (9 AM + 2 hours) on July 3, 2021
   *       to compute the second interpolated value, and so on. </p>
   */
  intervalWindowInSeconds?: number;
}

export namespace GetInterpolatedAssetPropertyValuesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInterpolatedAssetPropertyValuesRequest): any => ({
    ...obj,
  });
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

export namespace InterpolatedAssetPropertyValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InterpolatedAssetPropertyValue): any => ({
    ...obj,
  });
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

export namespace GetInterpolatedAssetPropertyValuesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetInterpolatedAssetPropertyValuesResponse): any => ({
    ...obj,
  });
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
   * <p>The type of identity (Amazon Web Services SSO user, Amazon Web Services SSO group, or IAM user). This parameter is required
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

export namespace ListAccessPoliciesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessPoliciesRequest): any => ({
    ...obj,
  });
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

export namespace ListAccessPoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAccessPoliciesResponse): any => ({
    ...obj,
  });
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

export namespace ListAssetModelsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssetModelsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssetModelsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssetModelsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssetRelationshipsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssetRelationshipsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssetRelationshipsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssetRelationshipsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssetsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssetsResponse): any => ({
    ...obj,
  });
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

export namespace ListAssociatedAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedAssetsRequest): any => ({
    ...obj,
  });
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

export namespace ListAssociatedAssetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssociatedAssetsResponse): any => ({
    ...obj,
  });
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

export namespace ListDashboardsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDashboardsRequest): any => ({
    ...obj,
  });
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

export namespace DashboardSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DashboardSummary): any => ({
    ...obj,
  });
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

export namespace ListDashboardsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDashboardsResponse): any => ({
    ...obj,
  });
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

export namespace ListGatewaysRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGatewaysRequest): any => ({
    ...obj,
  });
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

export namespace GatewaySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GatewaySummary): any => ({
    ...obj,
  });
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

export namespace ListGatewaysResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListGatewaysResponse): any => ({
    ...obj,
  });
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

export namespace ListPortalsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPortalsRequest): any => ({
    ...obj,
  });
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
   *       use Amazon Web Services SSO for authentication. For portals that use IAM for authentication, you must use the
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

export namespace PortalSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PortalSummary): any => ({
    ...obj,
  });
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

export namespace ListPortalsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListPortalsResponse): any => ({
    ...obj,
  });
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

export namespace ListProjectAssetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectAssetsRequest): any => ({
    ...obj,
  });
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

export namespace ListProjectAssetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectAssetsResponse): any => ({
    ...obj,
  });
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

export namespace ListProjectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
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

export namespace ProjectSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
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

export namespace ListProjectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You are not authorized.</p>
 */
export interface UnauthorizedException extends __SmithyException, $MetadataBearer {
  name: "UnauthorizedException";
  $fault: "client";
  message: string | undefined;
}

export namespace UnauthorizedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnauthorizedException): any => ({
    ...obj,
  });
}

export interface PutDefaultEncryptionConfigurationRequest {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | string | undefined;

  /**
   * <p>The Key ID of the customer managed customer master key (CMK) used for KMS encryption.
   *       This is required if you use <code>KMS_BASED_ENCRYPTION</code>.</p>
   */
  kmsKeyId?: string;
}

export namespace PutDefaultEncryptionConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDefaultEncryptionConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutDefaultEncryptionConfigurationResponse {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   */
  encryptionType: EncryptionType | string | undefined;

  /**
   * <p>The Key ARN of the KMS CMK used for KMS encryption if you use
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

export namespace PutDefaultEncryptionConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDefaultEncryptionConfigurationResponse): any => ({
    ...obj,
  });
}

export interface PutLoggingOptionsRequest {
  /**
   * <p>The logging options to set.</p>
   */
  loggingOptions: LoggingOptions | undefined;
}

export namespace PutLoggingOptionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface PutLoggingOptionsResponse {}

export namespace PutLoggingOptionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutLoggingOptionsResponse): any => ({
    ...obj,
  });
}

export interface PutStorageConfigurationRequest {
  /**
   * <p>The type of storage that you specified for your data. The storage type can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise replicates your data into a service managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise replicates your data into a service managed database and saves a copy of your raw data and metadata in an Amazon S3 object that you specified.</p>
   *             </li>
   *          </ul>
   */
  storageType: StorageType | string | undefined;

  /**
   * <p>Identifies a storage destination. If you specified <code>MULTI_LAYER_STORAGE</code> for the storage type,
   *       you must specify a <code>MultiLayerStorage</code> object.</p>
   */
  multiLayerStorage?: MultiLayerStorage;
}

export namespace PutStorageConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutStorageConfigurationRequest): any => ({
    ...obj,
  });
}

export interface PutStorageConfigurationResponse {
  /**
   * <p>The type of storage that you specified for your data. The storage type can be one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SITEWISE_DEFAULT_STORAGE</code> – IoT SiteWise replicates your data into a service managed database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MULTI_LAYER_STORAGE</code> – IoT SiteWise replicates your data into a service managed database and saves a copy of your raw data and metadata in an Amazon S3 object that you specified.</p>
   *             </li>
   *          </ul>
   */
  storageType: StorageType | string | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   */
  multiLayerStorage?: MultiLayerStorage;

  /**
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;
}

export namespace PutStorageConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutStorageConfigurationResponse): any => ({
    ...obj,
  });
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
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit for the number of tags allowed for a resource. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag naming limits and
 *         requirements</a> in the <i>Amazon Web Services General Reference</i>.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
  /**
   * <p>The name of the resource with too many tags.</p>
   */
  resourceName?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccessPolicyRequest {
  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The identity for this access policy. Choose an Amazon Web Services SSO user, an Amazon Web Services SSO group, or an IAM user.</p>
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

export namespace UpdateAccessPolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccessPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccessPolicyResponse {}

export namespace UpdateAccessPolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAccessPolicyResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssetRequest {
  /**
   * <p>The ID of the asset to update.</p>
   */
  assetId: string | undefined;

  /**
   * <p>A unique, friendly name for the asset.</p>
   */
  assetName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export namespace UpdateAssetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssetResponse {
  /**
   * <p>The status of the asset, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;
}

export namespace UpdateAssetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetResponse): any => ({
    ...obj,
  });
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

export namespace UpdateAssetModelRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetModelRequest): any => ({
    ...obj,
  });
}

export interface UpdateAssetModelResponse {
  /**
   * <p>The status of the asset model, which contains a state (<code>UPDATING</code> after
   *       successfully calling this operation) and any error message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

export namespace UpdateAssetModelResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetModelResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateAssetPropertyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateAssetPropertyRequest): any => ({
    ...obj,
  });
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

export namespace UpdateDashboardRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardResponse {}

export namespace UpdateDashboardResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateGatewayRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGatewayRequest): any => ({
    ...obj,
  });
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

export namespace UpdateGatewayCapabilityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGatewayCapabilityConfigurationRequest): any => ({
    ...obj,
  });
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

export namespace UpdateGatewayCapabilityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateGatewayCapabilityConfigurationResponse): any => ({
    ...obj,
  });
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

export namespace Image {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
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

export namespace UpdatePortalRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePortalRequest): any => ({
    ...obj,
  });
}

export interface UpdatePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>UPDATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;
}

export namespace UpdatePortalResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePortalResponse): any => ({
    ...obj,
  });
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

export namespace UpdateProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
  });
}

export interface UpdateProjectResponse {}

export namespace UpdateProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectResponse): any => ({
    ...obj,
  });
}
