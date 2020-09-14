import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Contains information for a group identity in an access policy.</p>
 */
export interface GroupIdentity {
  /**
   * <p>The AWS SSO ID of the group.</p>
   */
  id: string | undefined;
}

export namespace GroupIdentity {
  export const filterSensitiveLog = (obj: GroupIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information for a user identity in an access policy.</p>
 */
export interface UserIdentity {
  /**
   * <p>The AWS SSO ID of the user.</p>
   */
  id: string | undefined;
}

export namespace UserIdentity {
  export const filterSensitiveLog = (obj: UserIdentity): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an AWS SSO identity ID for a user or group.</p>
 *          <note>
 *             <p>Currently, you can't use AWS APIs to retrieve AWS SSO identity IDs. You can find the AWS SSO
 *         identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">AWS SSO console</a>.</p>
 *          </note>
 */
export interface Identity {
  /**
   * <p>A group identity.</p>
   */
  group?: GroupIdentity;

  /**
   * <p>A user identity.</p>
   */
  user?: UserIdentity;
}

export namespace Identity {
  export const filterSensitiveLog = (obj: Identity): any => ({
    ...obj,
  });
}

export enum Permission {
  ADMINISTRATOR = "ADMINISTRATOR",
  VIEWER = "VIEWER",
}

/**
 * <p>Identifies an AWS IoT SiteWise Monitor portal.</p>
 */
export interface PortalResource {
  /**
   * <p>The ID of the portal.</p>
   */
  id: string | undefined;
}

export namespace PortalResource {
  export const filterSensitiveLog = (obj: PortalResource): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies a specific AWS IoT SiteWise Monitor project.</p>
 */
export interface ProjectResource {
  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;
}

export namespace ProjectResource {
  export const filterSensitiveLog = (obj: ProjectResource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an AWS IoT SiteWise Monitor resource ID for a portal or project.</p>
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
  export const filterSensitiveLog = (obj: Resource): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an access policy that defines an AWS SSO identity's access to an AWS IoT SiteWise Monitor
 *       resource.</p>
 */
export interface AccessPolicySummary {
  /**
   * <p>The AWS IoT SiteWise Monitor resource (a portal or project).</p>
   */
  resource: Resource | undefined;

  /**
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;

  /**
   * <p>The AWS SSO identity (a user or group).</p>
   */
  identity: Identity | undefined;

  /**
   * <p>The permissions for the access policy. Note that a project <code>ADMINISTRATOR</code> is
   *       also known as a project owner.</p>
   */
  permission: Permission | string | undefined;

  /**
   * <p>The ID of the access policy.</p>
   */
  id: string | undefined;

  /**
   * <p>The date the access policy was created, in Unix epoch time.</p>
   */
  creationDate?: Date;
}

export namespace AccessPolicySummary {
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
   * <p>The sum of the time series over a time interval window.</p>
   */
  sum?: number;

  /**
   * <p>The average (mean) value of the time series over a time interval window.</p>
   */
  average?: number;

  /**
   * <p>The maximum value of the time series over a time interval window.</p>
   */
  maximum?: number;

  /**
   * <p>The count of data points in the time series over a time interval window.</p>
   */
  count?: number;

  /**
   * <p>The standard deviation of the time series over a time interval window.</p>
   */
  standardDeviation?: number;

  /**
   * <p>The minimum value of the time series over a time interval window.</p>
   */
  minimum?: number;
}

export namespace Aggregates {
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
   * <p>The value of the aggregates.</p>
   */
  value: Aggregates | undefined;

  /**
   * <p>The date the aggregating computations occurred, in Unix epoch time.</p>
   */
  timestamp: Date | undefined;

  /**
   * <p>The quality of the aggregated data.</p>
   */
  quality?: Quality | string;
}

export namespace AggregatedValue {
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

export enum AssetErrorCode {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>Contains error details for the requested associate project asset action.</p>
 */
export interface AssetErrorDetails {
  /**
   * <p>The error code.</p>
   */
  code: AssetErrorCode | string | undefined;

  /**
   * <p>The error message.</p>
   */
  message: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;
}

export namespace AssetErrorDetails {
  export const filterSensitiveLog = (obj: AssetErrorDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an asset hierarchy that contains a hierarchy's name and ID.</p>
 */
export interface AssetHierarchy {
  /**
   * <p>The hierarchy name provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the hierarchy. This ID is a <code>hierarchyId</code>.</p>
   */
  id?: string;
}

export namespace AssetHierarchy {
  export const filterSensitiveLog = (obj: AssetHierarchy): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model
 *       ID that specifies the type of asset that can be in this hierarchy.</p>
 */
export interface AssetModelHierarchy {
  /**
   * <p>The ID of the asset model. All assets in this hierarchy must be instances of the
   *         <code>childAssetModelId</code> asset model.</p>
   */
  childAssetModelId: string | undefined;

  /**
   * <p>The ID of the asset model hierarchy. This ID is a <code>hierarchyId</code>.</p>
   */
  id?: string;

  /**
   * <p>The name of the asset model hierarchy that you specify by using the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API.</p>
   */
  name: string | undefined;
}

export namespace AssetModelHierarchy {
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
   * <p>The ID of an asset model for this hierarchy.</p>
   */
  childAssetModelId: string | undefined;

  /**
   * <p>The name of the asset model hierarchy definition (as specified in <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>).</p>
   */
  name: string | undefined;
}

export namespace AssetModelHierarchyDefinition {
  export const filterSensitiveLog = (obj: AssetModelHierarchyDefinition): any => ({
    ...obj,
  });
}

export enum PropertyDataType {
  BOOLEAN = "BOOLEAN",
  DOUBLE = "DOUBLE",
  INTEGER = "INTEGER",
  STRING = "STRING",
}

/**
 * <p>Contains an asset attribute property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface Attribute {
  /**
   * <p>The default value of the asset model property attribute. All assets that you create from
   *       the asset model contain this attribute value. You can update an attribute's value after you
   *       create an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html">Updating Attribute Values</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  defaultValue?: string;
}

export namespace Attribute {
  export const filterSensitiveLog = (obj: Attribute): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an asset measurement property. This structure is empty. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface Measurement {}

export namespace Measurement {
  export const filterSensitiveLog = (obj: Measurement): any => ({
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
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId?: string;
}

export namespace VariableValue {
  export const filterSensitiveLog = (obj: VariableValue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains expression variable information.</p>
 */
export interface ExpressionVariable {
  /**
   * <p>The variable that identifies an asset property from which to use values.</p>
   */
  value: VariableValue | undefined;

  /**
   * <p>The friendly name of the variable to be used in the expression.</p>
   */
  name: string | undefined;
}

export namespace ExpressionVariable {
  export const filterSensitiveLog = (obj: ExpressionVariable): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and
 *       contiguous time interval. This window is used in metric and aggregation computations.</p>
 */
export interface TumblingWindow {
  /**
   * <p>The time interval for the tumbling window. Note that <code>w</code> represents weeks,
   *         <code>d</code> represents days, <code>h</code> represents hours, and <code>m</code>
   *       represents minutes. AWS IoT SiteWise computes the <code>1w</code> interval the end of Sunday at midnight
   *       each week (UTC), the <code>1d</code> interval at the end of each day at midnight (UTC), the
   *         <code>1h</code> interval at the end of each hour, and so on. </p>
   *          <p>When AWS IoT SiteWise aggregates data points for metric computations, the start of each interval is
   *       exclusive and the end of each interval is inclusive. AWS IoT SiteWise places the computed data point at
   *       the end of the interval.</p>
   */
  interval: string | undefined;
}

export namespace TumblingWindow {
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
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics">Metrics</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface Metric {
  /**
   * <p>The window (time interval) over which AWS IoT SiteWise computes the metric's aggregation expression.
   *       AWS IoT SiteWise computes one data point per <code>window</code>.</p>
   */
  window: MetricWindow | undefined;

  /**
   * <p>The list of variables used in the expression.</p>
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * <p>The mathematical expression that defines the metric aggregation function. You can specify
   *       up to 10 variables per expression. You can specify up to 10 functions
   *       per expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  expression: string | undefined;
}

export namespace Metric {
  export const filterSensitiveLog = (obj: Metric): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's
 *       data points from one form to another. For example, you can use a transform to convert a
 *       Celsius data stream to Fahrenheit by applying the transformation expression to each data point
 *       of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and
 *       consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface Transform {
  /**
   * <p>The mathematical expression that defines the transformation function. You can specify up
   *       to 10 variables per expression. You can specify up to 10 functions per
   *       expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  expression: string | undefined;

  /**
   * <p>The list of variables used in the expression.</p>
   */
  variables: ExpressionVariable[] | undefined;
}

export namespace Transform {
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
   * <p>Specifies an asset measurement property. A measurement represents a device's raw sensor
   *       data stream, such as timestamped temperature values or timestamped power values.</p>
   */
  measurement?: Measurement;

  /**
   * <p>Specifies an asset metric property. A metric contains a mathematical expression that uses
   *       aggregate functions to process all input data points over a time interval and output a single
   *       data point, such as to calculate the average hourly temperature.</p>
   */
  metric?: Metric;

  /**
   * <p>Specifies an asset attribute property. An attribute generally contains static information,
   *       such as the serial number of an <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">IIoT</a> wind turbine.</p>
   */
  attribute?: Attribute;

  /**
   * <p>Specifies an asset transform property. A transform contains a mathematical expression that
   *       maps a property's data points from one form to another, such as a unit conversion from Celsius
   *       to Fahrenheit.</p>
   */
  transform?: Transform;
}

export namespace PropertyType {
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
   * <p>The unit of the asset model property, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   */
  unit?: string;

  /**
   * <p>The name of the asset model property.</p>
   */
  name: string | undefined;

  /**
   * <p>The property type (see <code>PropertyType</code>).</p>
   */
  type: PropertyType | undefined;

  /**
   * <p>The data type of the asset model property.</p>
   */
  dataType: PropertyDataType | string | undefined;
}

export namespace AssetModelProperty {
  export const filterSensitiveLog = (obj: AssetModelProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an asset model property definition. This property definition is applied to all
 *       assets created from the asset model.</p>
 */
export interface AssetModelPropertyDefinition {
  /**
   * <p>The property definition type (see <code>PropertyType</code>). You can only specify one
   *       type in a property definition.</p>
   */
  type: PropertyType | undefined;

  /**
   * <p>The data type of the property definition.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The name of the property definition.</p>
   */
  name: string | undefined;

  /**
   * <p>The unit of the property definition, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   */
  unit?: string;
}

export namespace AssetModelPropertyDefinition {
  export const filterSensitiveLog = (obj: AssetModelPropertyDefinition): any => ({
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

/**
 * <p>Contains the details of an AWS IoT SiteWise error.</p>
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
}

export namespace ErrorDetails {
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
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
  export const filterSensitiveLog = (obj: AssetModelStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of an asset model.</p>
 */
export interface AssetModelSummary {
  /**
   * <p>The date the asset model was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * <p>The ID of the asset model (used with AWS IoT SiteWise APIs).</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the asset model.</p>
   */
  name: string | undefined;

  /**
   * <p>The asset model description.</p>
   */
  description: string | undefined;

  /**
   * <p>The current status of the asset model.</p>
   */
  status: AssetModelStatus | undefined;

  /**
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;
}

export namespace AssetModelSummary {
  export const filterSensitiveLog = (obj: AssetModelSummary): any => ({
    ...obj,
  });
}

export enum PropertyNotificationState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Contains asset property value notification information. When the notification state is enabled, AWS IoT SiteWise publishes property value
 *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface PropertyNotification {
  /**
   * <p>The current notification state.</p>
   */
  state: PropertyNotificationState | string | undefined;

  /**
   * <p>The MQTT topic to which AWS IoT SiteWise publishes property value update notifications.</p>
   */
  topic: string | undefined;
}

export namespace PropertyNotification {
  export const filterSensitiveLog = (obj: PropertyNotification): any => ({
    ...obj,
  });
}

/**
 * <p>Contains asset property information.</p>
 */
export interface AssetProperty {
  /**
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>
   *          </p>
   */
  notification?: PropertyNotification;

  /**
   * <p>The data type of the asset property.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   */
  unit?: string;

  /**
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the property.</p>
   */
  name: string | undefined;
}

export namespace AssetProperty {
  export const filterSensitiveLog = (obj: AssetProperty): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a timestamp with optional nanosecond granularity.</p>
 */
export interface TimeInNanos {
  /**
   * <p>The nanosecond offset from <code>timeInSeconds</code>.</p>
   */
  offsetInNanos?: number;

  /**
   * <p>The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is
   *       provided by <code>offsetInNanos</code>.</p>
   */
  timeInSeconds: number | undefined;
}

export namespace TimeInNanos {
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
   * <p>Asset property data of type Boolean (true or false).</p>
   */
  booleanValue?: boolean;

  /**
   * <p>Asset property data of type integer (whole number).</p>
   */
  integerValue?: number;

  /**
   * <p>Asset property data of type double (floating point number).</p>
   */
  doubleValue?: number;
}

export namespace Variant {
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
  export const filterSensitiveLog = (obj: AssetPropertyValue): any => ({
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
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and Model States</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface AssetStatus {
  /**
   * <p>Contains associated error information, if any.</p>
   */
  error?: ErrorDetails;

  /**
   * <p>The current status of the asset.</p>
   */
  state: AssetState | string | undefined;
}

export namespace AssetStatus {
  export const filterSensitiveLog = (obj: AssetStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of an asset.</p>
 */
export interface AssetSummary {
  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  arn: string | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The current status of the asset.</p>
   */
  status: AssetStatus | undefined;

  /**
   * <p>The ID of the asset model used to create this asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;
}

export namespace AssetSummary {
  export const filterSensitiveLog = (obj: AssetSummary): any => ({
    ...obj,
  });
}

export interface AssociateAssetsRequest {
  /**
   * <p>The ID of the child asset to be associated.</p>
   */
  childAssetId: string | undefined;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings
   *       of assets to be formed that all come from the same asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the parent asset.</p>
   */
  assetId: string | undefined;
}

export namespace AssociateAssetsRequest {
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
  /**
   * <p>The ID of the resource that conflicts with this operation.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that conflicts with this operation.</p>
   */
  resourceArn: string | undefined;

  message: string | undefined;
}

export namespace ConflictingOperationException {
  export const filterSensitiveLog = (obj: ConflictingOperationException): any => ({
    ...obj,
  });
}

/**
 * <p>AWS IoT SiteWise can't process your request right now. Try again later.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message: string | undefined;
}

export namespace InternalFailureException {
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
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message: string | undefined;
}

export namespace LimitExceededException {
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
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>Your request exceeded a rate limit. For example, you might have exceeded the number of
 *       AWS IoT SiteWise assets that can be created per second, the allowed number of messages per second, and so
 *       on.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message: string | undefined;
}

export namespace ThrottlingException {
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of an associated asset.</p>
 */
export interface AssociatedAssetsSummary {
  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>The ID of the asset model used to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  name: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  arn: string | undefined;

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
   * <p>The ID of the asset.</p>
   */
  id: string | undefined;
}

export namespace AssociatedAssetsSummary {
  export const filterSensitiveLog = (obj: AssociatedAssetsSummary): any => ({
    ...obj,
  });
}

export interface BatchAssociateProjectAssetsRequest {
  /**
   * <p>The IDs of the assets to be associated to the project.</p>
   */
  assetIds: string[] | undefined;

  /**
   * <p>The ID of the project to which to associate the assets.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export namespace BatchAssociateProjectAssetsRequest {
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
  export const filterSensitiveLog = (obj: BatchDisassociateProjectAssetsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a list of value updates for an asset property in the list of asset entries
 *       consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.</p>
 */
export interface PutAssetPropertyValueEntry {
  /**
   * <p>The ID of the asset property for this entry.</p>
   */
  propertyId?: string;

  /**
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The list of property values to upload. You can specify up to 10
   *         <code>propertyValues</code> array elements. </p>
   */
  propertyValues: AssetPropertyValue[] | undefined;

  /**
   * <p>The user specified ID for the entry. You can use this ID to identify which entries
   *       failed.</p>
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset to update.</p>
   */
  assetId?: string;
}

export namespace PutAssetPropertyValueEntry {
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
   * <p>A list of timestamps for each  error, if any.</p>
   */
  timestamps: TimeInNanos[] | undefined;

  /**
   * <p>The error code.</p>
   */
  errorCode: BatchPutAssetPropertyValueErrorCode | string | undefined;

  /**
   * <p>The associated error message.</p>
   */
  errorMessage: string | undefined;
}

export namespace BatchPutAssetPropertyError {
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
   * <p>The list of update property value errors.</p>
   */
  errors: BatchPutAssetPropertyError[] | undefined;

  /**
   * <p>The ID of the failed entry.</p>
   */
  entryId: string | undefined;
}

export namespace BatchPutAssetPropertyErrorEntry {
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
  export const filterSensitiveLog = (obj: ServiceUnavailableException): any => ({
    ...obj,
  });
}

export interface CreateAccessPolicyRequest {
  /**
   * <p>The identity for this access policy. Choose either a <code>user</code> or a <code>group</code> but not both.</p>
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The AWS IoT SiteWise Monitor resource for this access policy. Choose either <code>portal</code> or <code>project</code> but not both.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   */
  accessPolicyPermission: Permission | string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the access policy. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise
   *         resources</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateAccessPolicyRequest {
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
  export const filterSensitiveLog = (obj: CreateAccessPolicyResponse): any => ({
    ...obj,
  });
}

export interface CreateAssetRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the asset model from which to create the asset.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A unique, friendly name for the asset.</p>
   */
  assetName: string | undefined;
}

export namespace CreateAssetRequest {
  export const filterSensitiveLog = (obj: CreateAssetRequest): any => ({
    ...obj,
  });
}

export interface CreateAssetResponse {
  /**
   * <p>The ID of the asset. This ID uniquely identifies the asset within AWS IoT SiteWise and can be used with other
   *       AWS IoT SiteWise APIs.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The status of the asset, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset/${AssetId}</code>
   *          </p>
   */
  assetArn: string | undefined;
}

export namespace CreateAssetResponse {
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
  /**
   * <p>The ID of the resource that already exists.</p>
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that already exists.</p>
   */
  resourceArn: string | undefined;

  message: string | undefined;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
}

export interface CreateAssetModelRequest {
  /**
   * <p>A description for the asset model.</p>
   */
  assetModelDescription?: string;

  /**
   * <p>The property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  assetModelProperties?: AssetModelPropertyDefinition[];

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A unique, friendly name for the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset model. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model
   *       whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  assetModelHierarchies?: AssetModelHierarchyDefinition[];
}

export namespace CreateAssetModelRequest {
  export const filterSensitiveLog = (obj: CreateAssetModelRequest): any => ({
    ...obj,
  });
}

export interface CreateAssetModelResponse {
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

  /**
   * <p>The ID of the asset model. You can use this ID when you call other AWS IoT SiteWise APIs.</p>
   */
  assetModelId: string | undefined;
}

export namespace CreateAssetModelResponse {
  export const filterSensitiveLog = (obj: CreateAssetModelResponse): any => ({
    ...obj,
  });
}

export interface CreateDashboardRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The dashboard definition specified in a JSON literal. For detailed information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the dashboard. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A friendly name for the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * <p>The ID of the project in which to create the dashboard.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A description for the dashboard.</p>
   */
  dashboardDescription?: string;
}

export namespace CreateDashboardRequest {
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
  export const filterSensitiveLog = (obj: CreateDashboardResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass,
 *       you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass
 *       group must also have permissions to upload data to AWS IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the
 *         <i>AWS IoT SiteWise User Guide</i>.</p>
 */
export interface Greengrass {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Greengrass group. For more information about how to find a group's
   *       ARN, see <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/listgroups-get.html">ListGroups</a> and <a href="https://docs.aws.amazon.com/greengrass/latest/apireference/getgroup-get.html">GetGroup</a> in
   *       the <i>AWS IoT Greengrass API Reference</i>.</p>
   */
  groupArn: string | undefined;
}

export namespace Greengrass {
  export const filterSensitiveLog = (obj: Greengrass): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a gateway's platform information.</p>
 */
export interface GatewayPlatform {
  /**
   * <p>A gateway that runs on AWS IoT Greengrass.</p>
   */
  greengrass: Greengrass | undefined;
}

export namespace GatewayPlatform {
  export const filterSensitiveLog = (obj: GatewayPlatform): any => ({
    ...obj,
  });
}

export interface CreateGatewayRequest {
  /**
   * <p>The gateway's platform. You can only specify one platform in a gateway.</p>
   */
  gatewayPlatform: GatewayPlatform | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the gateway. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A unique, friendly name for the gateway.</p>
   */
  gatewayName: string | undefined;
}

export namespace CreateGatewayRequest {
  export const filterSensitiveLog = (obj: CreateGatewayRequest): any => ({
    ...obj,
  });
}

export interface CreateGatewayResponse {
  /**
   * <p>The ID of the gateway device. You can use this ID when you call other AWS IoT SiteWise APIs.</p>
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
  export const filterSensitiveLog = (obj: ImageFile): any => ({
    ...obj,
  });
}

export interface CreatePortalRequest {
  /**
   * <p>A list of key-value pairs that contain metadata for the portal. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A friendly name for the portal.</p>
   */
  portalName: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>The AWS administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * <p>A logo image to display in the portal. Upload a square, high-resolution image. The
   *       image is displayed on a dark background.</p>
   */
  portalLogoImageFile?: ImageFile;

  /**
   * <p>A description for the portal.</p>
   */
  portalDescription?: string;
}

export namespace CreatePortalRequest {
  export const filterSensitiveLog = (obj: CreatePortalRequest): any => ({
    ...obj,
  });
}

export enum MonitorErrorCode {
  INTERNAL_FAILURE = "INTERNAL_FAILURE",
}

/**
 * <p>Contains AWS IoT SiteWise Monitor error details.</p>
 */
export interface MonitorErrorDetails {
  /**
   * <p>The error message.</p>
   */
  message?: string;

  /**
   * <p>The error code.</p>
   */
  code?: MonitorErrorCode | string;
}

export namespace MonitorErrorDetails {
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
   * <p>Contains associated error information, if any.</p>
   */
  error?: MonitorErrorDetails;

  /**
   * <p>The current state of the portal.</p>
   */
  state: PortalState | string | undefined;
}

export namespace PortalStatus {
  export const filterSensitiveLog = (obj: PortalStatus): any => ({
    ...obj,
  });
}

export interface CreatePortalResponse {
  /**
   * <p>The associated AWS SSO application Id.</p>
   */
  ssoApplicationId: string | undefined;

  /**
   * <p>The status of the portal, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}</code>
   *          </p>
   */
  portalArn: string | undefined;

  /**
   * <p>The public URL for the AWS IoT SiteWise Monitor portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The ID of the created portal.</p>
   */
  portalId: string | undefined;
}

export namespace CreatePortalResponse {
  export const filterSensitiveLog = (obj: CreatePortalResponse): any => ({
    ...obj,
  });
}

export interface CreateProjectRequest {
  /**
   * <p>A list of key-value pairs that contain metadata for the project. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>A description for the project.</p>
   */
  projectDescription?: string;

  /**
   * <p>A friendly name for the project.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the portal in which to create the project.</p>
   */
  portalId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export namespace CreateProjectRequest {
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
}

export interface CreateProjectResponse {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:project/${ProjectId}</code>
   *          </p>
   */
  projectArn: string | undefined;

  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;
}

export namespace CreateProjectResponse {
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
  export const filterSensitiveLog = (obj: DeleteAccessPolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteAccessPolicyResponse {}

export namespace DeleteAccessPolicyResponse {
  export const filterSensitiveLog = (obj: DeleteAccessPolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssetRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the asset to delete.</p>
   */
  assetId: string | undefined;
}

export namespace DeleteAssetRequest {
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
  export const filterSensitiveLog = (obj: DeleteAssetResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssetModelRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the asset model to delete.</p>
   */
  assetModelId: string | undefined;
}

export namespace DeleteAssetModelRequest {
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
  export const filterSensitiveLog = (obj: DeleteDashboardRequest): any => ({
    ...obj,
  });
}

export interface DeleteDashboardResponse {}

export namespace DeleteDashboardResponse {
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
  export const filterSensitiveLog = (obj: DeletePortalResponse): any => ({
    ...obj,
  });
}

export interface DeleteProjectRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;
}

export namespace DeleteProjectRequest {
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteProjectResponse {}

export namespace DeleteProjectResponse {
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
  export const filterSensitiveLog = (obj: DescribeAccessPolicyRequest): any => ({
    ...obj,
  });
}

export interface DescribeAccessPolicyResponse {
  /**
   * <p>The date the access policy was created, in Unix epoch time.</p>
   */
  accessPolicyCreationDate: Date | undefined;

  /**
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   */
  accessPolicyLastUpdateDate: Date | undefined;

  /**
   * <p>The access policy permission. Note that a project <code>ADMINISTRATOR</code> is also known
   *       as a project owner.</p>
   */
  accessPolicyPermission: Permission | string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:access-policy/${AccessPolicyId}</code>
   *          </p>
   */
  accessPolicyArn: string | undefined;

  /**
   * <p>The AWS IoT SiteWise Monitor resource (portal or project) to which this access policy provides
   *       access.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The AWS SSO identity (user or group) to which this access policy applies.</p>
   */
  accessPolicyIdentity: Identity | undefined;
}

export namespace DescribeAccessPolicyResponse {
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
  export const filterSensitiveLog = (obj: DescribeAssetRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssetResponse {
  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   */
  assetHierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   */
  assetLastUpdateDate: Date | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   */
  assetCreationDate: Date | undefined;

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
   * <p>The current status of the asset, which contains a state and any error message.</p>
   */
  assetStatus: AssetStatus | undefined;

  /**
   * <p>The list of asset properties for the asset.</p>
   */
  assetProperties: AssetProperty[] | undefined;

  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;
}

export namespace DescribeAssetResponse {
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
  export const filterSensitiveLog = (obj: DescribeAssetModelRequest): any => ({
    ...obj,
  });
}

export interface DescribeAssetModelResponse {
  /**
   * <p>A list of asset model hierarchies that each contain a <code>childAssetModelId</code> and a
   *         <code>hierarchyId</code> (named <code>id</code>). A hierarchy specifies allowed parent/child
   *       asset relationships for an asset model.</p>
   */
  assetModelHierarchies: AssetModelHierarchy[] | undefined;

  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The name of the asset model.</p>
   */
  assetModelName: string | undefined;

  /**
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   */
  assetModelLastUpdateDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:asset-model/${AssetModelId}</code>
   *          </p>
   */
  assetModelArn: string | undefined;

  /**
   * <p>The list of asset properties for the asset model.</p>
   */
  assetModelProperties: AssetModelProperty[] | undefined;

  /**
   * <p>The asset model's description.</p>
   */
  assetModelDescription: string | undefined;

  /**
   * <p>The current status of the asset model, which contains a state and any error
   *       message.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * <p>The date the asset model was created, in Unix epoch time.</p>
   */
  assetModelCreationDate: Date | undefined;
}

export namespace DescribeAssetModelResponse {
  export const filterSensitiveLog = (obj: DescribeAssetModelResponse): any => ({
    ...obj,
  });
}

export interface DescribeAssetPropertyRequest {
  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId: string | undefined;

  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;
}

export namespace DescribeAssetPropertyRequest {
  export const filterSensitiveLog = (obj: DescribeAssetPropertyRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains asset property information.</p>
 */
export interface Property {
  /**
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  alias?: string;

  /**
   * <p>The property data type.</p>
   */
  dataType: PropertyDataType | string | undefined;

  /**
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>
   *          </p>
   */
  notification?: PropertyNotification;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   */
  unit?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  id: string | undefined;

  /**
   * <p>The property type (see <code>PropertyType</code>). A property contains one type.</p>
   */
  type?: PropertyType;

  /**
   * <p>The name of the property.</p>
   */
  name: string | undefined;
}

export namespace Property {
  export const filterSensitiveLog = (obj: Property): any => ({
    ...obj,
  });
}

export interface DescribeAssetPropertyResponse {
  /**
   * <p>The ID of the asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset model.</p>
   */
  assetModelId: string | undefined;

  /**
   * <p>The asset property's definition, alias, and notification state.</p>
   */
  assetProperty: Property | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  assetName: string | undefined;
}

export namespace DescribeAssetPropertyResponse {
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
  export const filterSensitiveLog = (obj: DescribeDashboardRequest): any => ({
    ...obj,
  });
}

export interface DescribeDashboardResponse {
  /**
   * <p>The ID of the project that the dashboard is in.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   */
  dashboardCreationDate: Date | undefined;

  /**
   * <p>The ID of the dashboard.</p>
   */
  dashboardId: string | undefined;

  /**
   * <p>The dashboard's description.</p>
   */
  dashboardDescription?: string;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   */
  dashboardLastUpdateDate: Date | undefined;

  /**
   * <p>The dashboard's definition JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in
   *       the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

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
}

export namespace DescribeDashboardResponse {
  export const filterSensitiveLog = (obj: DescribeDashboardResponse): any => ({
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
  export const filterSensitiveLog = (obj: DescribeGatewayRequest): any => ({
    ...obj,
  });
}

export enum CapabilitySyncStatus {
  IN_SYNC = "IN_SYNC",
  OUT_OF_SYNC = "OUT_OF_SYNC",
  SYNC_FAILED = "SYNC_FAILED",
}

/**
 * <p>Contains a summary of a gateway capability configuration.</p>
 */
export interface GatewayCapabilitySummary {
  /**
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC-UA
   *       sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace
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
  export const filterSensitiveLog = (obj: GatewayCapabilitySummary): any => ({
    ...obj,
  });
}

export interface DescribeGatewayResponse {
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
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;

  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The gateway's platform.</p>
   */
  gatewayPlatform?: GatewayPlatform;

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   */
  gatewayCapabilitySummaries: GatewayCapabilitySummary[] | undefined;
}

export namespace DescribeGatewayResponse {
  export const filterSensitiveLog = (obj: DescribeGatewayResponse): any => ({
    ...obj,
  });
}

export interface DescribeGatewayCapabilityConfigurationRequest {
  /**
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC-UA
   *       sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The ID of the gateway that defines the capability configuration.</p>
   */
  gatewayId: string | undefined;
}

export namespace DescribeGatewayCapabilityConfigurationRequest {
  export const filterSensitiveLog = (obj: DescribeGatewayCapabilityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DescribeGatewayCapabilityConfigurationResponse {
  /**
   * <p>The namespace of the gateway capability.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the gateway capability's configuration. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
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

  /**
   * <p>The ID of the gateway that defines the capability configuration.</p>
   */
  gatewayId: string | undefined;
}

export namespace DescribeGatewayCapabilityConfigurationResponse {
  export const filterSensitiveLog = (obj: DescribeGatewayCapabilityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DescribeLoggingOptionsRequest {}

export namespace DescribeLoggingOptionsRequest {
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
   * <p>The AWS IoT SiteWise logging verbosity level.</p>
   */
  level: LoggingLevel | string | undefined;
}

export namespace LoggingOptions {
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
  export const filterSensitiveLog = (obj: DescribePortalRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains an image that is uploaded to AWS IoT SiteWise and available at a URL.</p>
 */
export interface ImageLocation {
  /**
   * <p>The URL where the image is available. The URL is valid for 15 minutes so that you can view
   *       and download the image</p>
   */
  url: string | undefined;

  /**
   * <p>The ID of the image.</p>
   */
  id: string | undefined;
}

export namespace ImageLocation {
  export const filterSensitiveLog = (obj: ImageLocation): any => ({
    ...obj,
  });
}

export interface DescribePortalResponse {
  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   */
  portalCreationDate: Date | undefined;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   */
  portalLastUpdateDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *         <p>
   *             <code>arn:${Partition}:iotsitewise:${Region}:${Account}:portal/${PortalId}</code>
   *          </p>
   */
  portalArn: string | undefined;

  /**
   * <p>The portal's logo image, which is available at a URL.</p>
   */
  portalLogoImageLocation?: ImageLocation;

  /**
   * <p>The AWS SSO application generated client ID (used with AWS SSO APIs).</p>
   */
  portalClientId: string | undefined;

  /**
   * <p>The AWS administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * <p>The ID of the portal.</p>
   */
  portalId: string | undefined;

  /**
   * <p>The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.</p>
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your AWS IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  roleArn?: string;

  /**
   * <p>The name of the portal.</p>
   */
  portalName: string | undefined;

  /**
   * <p>The current status of the portal, which contains a state and any error message.</p>
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The portal's description.</p>
   */
  portalDescription?: string;
}

export namespace DescribePortalResponse {
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
  export const filterSensitiveLog = (obj: DescribeProjectRequest): any => ({
    ...obj,
  });
}

export interface DescribeProjectResponse {
  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   */
  projectLastUpdateDate: Date | undefined;

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
   * <p>The name of the project.</p>
   */
  projectName: string | undefined;

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

export namespace DescribeProjectResponse {
  export const filterSensitiveLog = (obj: DescribeProjectResponse): any => ({
    ...obj,
  });
}

export interface DisassociateAssetsRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. Hierarchies allow different groupings
   *       of assets to be formed that all come from the same asset model. You can use the hierarchy ID
   *       to identify the correct asset to disassociate. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * <p>The ID of the parent asset from which to disassociate the child asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the child asset to disassociate.</p>
   */
  childAssetId: string | undefined;
}

export namespace DisassociateAssetsRequest {
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
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate: Date | undefined;

  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate: Date | undefined;

  /**
   * <p>The data aggregating function.</p>
   */
  aggregateTypes: (AggregateType | string)[] | undefined;

  /**
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The time interval over which to aggregate data.</p>
   */
  resolution: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The chronological sorting order of the requested information.</p>
   */
  timeOrdering?: TimeOrdering | string;

  /**
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: (Quality | string)[];
}

export namespace GetAssetPropertyAggregatesRequest {
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
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;
}

export namespace GetAssetPropertyValueRequest {
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
  export const filterSensitiveLog = (obj: GetAssetPropertyValueResponse): any => ({
    ...obj,
  });
}

export interface GetAssetPropertyValueHistoryRequest {
  /**
   * <p>The quality by which to filter asset data.</p>
   */
  qualities?: (Quality | string)[];

  /**
   * <p>The chronological sorting order of the requested information.</p>
   */
  timeOrdering?: TimeOrdering | string;

  /**
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The ID of the asset property.</p>
   */
  propertyId?: string;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  startDate?: Date;

  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the asset.</p>
   */
  assetId?: string;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   */
  endDate?: Date;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

export namespace GetAssetPropertyValueHistoryRequest {
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
  export const filterSensitiveLog = (obj: GetAssetPropertyValueHistoryResponse): any => ({
    ...obj,
  });
}

export enum IdentityType {
  GROUP = "GROUP",
  USER = "USER",
}

export enum ResourceType {
  PORTAL = "PORTAL",
  PROJECT = "PROJECT",
}

export interface ListAccessPoliciesRequest {
  /**
   * <p>The ID of the identity. This parameter is required if you specify
   *         <code>identityType</code>.</p>
   */
  identityId?: string;

  /**
   * <p>The type of identity (user or group). This parameter is required if you specify
   *         <code>identityId</code>.</p>
   */
  identityType?: IdentityType | string;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The ID of the resource. This parameter is required if you specify
   *         <code>resourceType</code>.</p>
   */
  resourceId?: string;

  /**
   * <p>The type of resource (portal or project). This parameter is required if you specify
   *         <code>resourceId</code>.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;
}

export namespace ListAccessPoliciesRequest {
  export const filterSensitiveLog = (obj: ListAccessPoliciesRequest): any => ({
    ...obj,
  });
}

export interface ListAccessPoliciesResponse {
  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list that summarizes each access policy.</p>
   */
  accessPolicySummaries: AccessPolicySummary[] | undefined;
}

export namespace ListAccessPoliciesResponse {
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
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;
}

export namespace ListAssetModelsRequest {
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
  export const filterSensitiveLog = (obj: ListAssetModelsResponse): any => ({
    ...obj,
  });
}

export enum ListAssetsFilter {
  ALL = "ALL",
  TOP_LEVEL = "TOP_LEVEL",
}

export interface ListAssetsRequest {
  /**
   * <p>The ID of the asset model by which to filter the list of assets. This parameter is
   *       required if you choose <code>ALL</code> for <code>filter</code>.</p>
   */
  assetModelId?: string;

  /**
   * <p>The filter for the requested list of assets. Choose one of the following options. Defaults
   *       to <code>ALL</code>.</p>
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
   */
  filter?: ListAssetsFilter | string;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;
}

export namespace ListAssetsRequest {
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
  export const filterSensitiveLog = (obj: ListAssetsResponse): any => ({
    ...obj,
  });
}

export interface ListAssociatedAssetsRequest {
  /**
   * <p>The ID of the parent asset.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The hierarchy ID (of the parent asset model) whose associated assets are returned. To find
   *       a hierarchy ID, use the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAsset.html">DescribeAsset</a>
   *       or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>
   *       actions.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  hierarchyId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

export namespace ListAssociatedAssetsRequest {
  export const filterSensitiveLog = (obj: ListAssociatedAssetsRequest): any => ({
    ...obj,
  });
}

export interface ListAssociatedAssetsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list that summarizes the associated assets.</p>
   */
  assetSummaries: AssociatedAssetsSummary[] | undefined;
}

export namespace ListAssociatedAssetsResponse {
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
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

export namespace ListDashboardsRequest {
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
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;

  /**
   * <p>The dashboard's description.</p>
   */
  description?: string;

  /**
   * <p>The name of the dashboard</p>
   */
  name: string | undefined;
}

export namespace DashboardSummary {
  export const filterSensitiveLog = (obj: DashboardSummary): any => ({
    ...obj,
  });
}

export interface ListDashboardsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list that summarizes each dashboard in the project.</p>
   */
  dashboardSummaries: DashboardSummary[] | undefined;
}

export namespace ListDashboardsResponse {
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
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;
}

export namespace ListGatewaysRequest {
  export const filterSensitiveLog = (obj: ListGatewaysRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a summary of a gateway.</p>
 */
export interface GatewaySummary {
  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The name of the asset.</p>
   */
  gatewayName: string | undefined;

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   */
  creationDate: Date | undefined;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   */
  gatewayCapabilitySummaries?: GatewayCapabilitySummary[];

  /**
   * <p>The ID of the gateway device.</p>
   */
  gatewayId: string | undefined;
}

export namespace GatewaySummary {
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
  export const filterSensitiveLog = (obj: ListGatewaysResponse): any => ({
    ...obj,
  });
}

export interface ListPortalsRequest {
  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

export namespace ListPortalsRequest {
  export const filterSensitiveLog = (obj: ListPortalsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a portal summary.</p>
 */
export interface PortalSummary {
  /**
   * <p>The portal's description.</p>
   */
  description?: string;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your AWS IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  roleArn?: string;

  /**
   * <p>The public root URL for the AWS IoT AWS IoT SiteWise Monitor application portal.</p>
   */
  startUrl: string | undefined;

  /**
   * <p>The name of the portal.</p>
   */
  name: string | undefined;

  /**
   * <p>The ID of the portal.</p>
   */
  id: string | undefined;

  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   */
  creationDate?: Date;
}

export namespace PortalSummary {
  export const filterSensitiveLog = (obj: PortalSummary): any => ({
    ...obj,
  });
}

export interface ListPortalsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list that summarizes each portal.</p>
   */
  portalSummaries?: PortalSummary[];
}

export namespace ListPortalsResponse {
  export const filterSensitiveLog = (obj: ListPortalsResponse): any => ({
    ...obj,
  });
}

export interface ListProjectAssetsRequest {
  /**
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;

  /**
   * <p>The ID of the project.</p>
   */
  projectId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   */
  nextToken?: string;
}

export namespace ListProjectAssetsRequest {
  export const filterSensitiveLog = (obj: ListProjectAssetsRequest): any => ({
    ...obj,
  });
}

export interface ListProjectAssetsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list that contains the IDs of each asset associated with the project.</p>
   */
  assetIds: string[] | undefined;
}

export namespace ListProjectAssetsResponse {
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
   * <p>The maximum number of results to be returned per paginated request.</p>
   */
  maxResults?: number;
}

export namespace ListProjectsRequest {
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains project summary information.</p>
 */
export interface ProjectSummary {
  /**
   * <p>The project's description.</p>
   */
  description?: string;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   */
  lastUpdateDate?: Date;

  /**
   * <p>The ID of the project.</p>
   */
  id: string | undefined;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   */
  creationDate?: Date;

  /**
   * <p>The name of the project.</p>
   */
  name: string | undefined;
}

export namespace ProjectSummary {
  export const filterSensitiveLog = (obj: ProjectSummary): any => ({
    ...obj,
  });
}

export interface ListProjectsResponse {
  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list that summarizes each project in the portal.</p>
   */
  projectSummaries: ProjectSummary[] | undefined;
}

export namespace ListProjectsResponse {
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
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of key-value pairs that contain metadata for the resource. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
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
  export const filterSensitiveLog = (obj: PutLoggingOptionsRequest): any => ({
    ...obj,
  });
}

export interface PutLoggingOptionsResponse {}

export namespace PutLoggingOptionsResponse {
  export const filterSensitiveLog = (obj: PutLoggingOptionsResponse): any => ({
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
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You've reached the limit for the number of tags allowed for a resource. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html#tag-conventions">Tag naming limits
 *         and requirements</a> in the <i>AWS General Reference</i>.</p>
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
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>A list of keys for tags to remove from the resource.</p>
   */
  tagKeys: string[] | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the resource to untag.</p>
   */
  resourceArn: string | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

export interface UpdateAccessPolicyRequest {
  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   */
  accessPolicyPermission: Permission | string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the access policy.</p>
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The AWS IoT SiteWise Monitor resource for this access policy. Choose either <code>portal</code> or <code>project</code> but not both.</p>
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The identity for this access policy. Choose either a <code>user</code> or a <code>group</code> but not both.</p>
   */
  accessPolicyIdentity: Identity | undefined;
}

export namespace UpdateAccessPolicyRequest {
  export const filterSensitiveLog = (obj: UpdateAccessPolicyRequest): any => ({
    ...obj,
  });
}

export interface UpdateAccessPolicyResponse {}

export namespace UpdateAccessPolicyResponse {
  export const filterSensitiveLog = (obj: UpdateAccessPolicyResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssetRequest {
  /**
   * <p>A unique, friendly name for the asset.</p>
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset to update.</p>
   */
  assetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export namespace UpdateAssetRequest {
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
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>A description for the asset model.</p>
   */
  assetModelDescription?: string;

  /**
   * <p>The updated property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset Properties</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  assetModelProperties?: AssetModelProperty[];

  /**
   * <p>The updated hierarchy definitions of the asset model. Each hierarchy specifies an asset
   *       model whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset Hierarchies</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  assetModelHierarchies?: AssetModelHierarchy[];
}

export namespace UpdateAssetModelRequest {
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
  export const filterSensitiveLog = (obj: UpdateAssetModelResponse): any => ({
    ...obj,
  });
}

export interface UpdateAssetPropertyRequest {
  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The property alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping Industrial Data Streams to Asset Properties</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the alias is removed from the property.</p>
   */
  propertyAlias?: string;

  /**
   * <p>The ID of the asset property to be updated.</p>
   */
  propertyId: string | undefined;

  /**
   * <p>The ID of the asset to be updated.</p>
   */
  assetId: string | undefined;

  /**
   * <p>The MQTT notification state (enabled or disabled) for this asset property.
   *       When the notification state is enabled, AWS IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with Other Services</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   *          <p>If you omit this parameter, the notification state is set to <code>DISABLED</code>.</p>
   */
  propertyNotificationState?: PropertyNotificationState | string;
}

export namespace UpdateAssetPropertyRequest {
  export const filterSensitiveLog = (obj: UpdateAssetPropertyRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardRequest {
  /**
   * <p>A new friendly name for the dashboard.</p>
   */
  dashboardName: string | undefined;

  /**
   * <p>The ID of the dashboard to update.</p>
   */
  dashboardId: string | undefined;

  /**
   * <p>A new description for the dashboard.</p>
   */
  dashboardDescription?: string;

  /**
   * <p>The new dashboard definition, as specified in a JSON literal. For detailed information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating Dashboards (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export namespace UpdateDashboardRequest {
  export const filterSensitiveLog = (obj: UpdateDashboardRequest): any => ({
    ...obj,
  });
}

export interface UpdateDashboardResponse {}

export namespace UpdateDashboardResponse {
  export const filterSensitiveLog = (obj: UpdateDashboardResponse): any => ({
    ...obj,
  });
}

export interface UpdateGatewayRequest {
  /**
   * <p>A unique, friendly name for the gateway.</p>
   */
  gatewayName: string | undefined;

  /**
   * <p>The ID of the gateway to update.</p>
   */
  gatewayId: string | undefined;
}

export namespace UpdateGatewayRequest {
  export const filterSensitiveLog = (obj: UpdateGatewayRequest): any => ({
    ...obj,
  });
}

export interface UpdateGatewayCapabilityConfigurationRequest {
  /**
   * <p>The namespace of the gateway capability configuration to be updated.
   *       For example, if you configure OPC-UA
   *       sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:version</code>, where <code>version</code> is a number such as
   *         <code>1</code>.</p>
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the configuration for the gateway capability. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  capabilityConfiguration: string | undefined;

  /**
   * <p>The ID of the gateway to be updated.</p>
   */
  gatewayId: string | undefined;
}

export namespace UpdateGatewayCapabilityConfigurationRequest {
  export const filterSensitiveLog = (obj: UpdateGatewayCapabilityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface UpdateGatewayCapabilityConfigurationResponse {
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
   *          <p>After you update a capability configuration, its sync status is
   *         <code>OUT_OF_SYNC</code> until the gateway receives and applies or rejects the updated
   *       configuration.</p>
   */
  capabilitySyncStatus: CapabilitySyncStatus | string | undefined;

  /**
   * <p>The namespace of the gateway capability.</p>
   */
  capabilityNamespace: string | undefined;
}

export namespace UpdateGatewayCapabilityConfigurationResponse {
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
  export const filterSensitiveLog = (obj: Image): any => ({
    ...obj,
  });
}

export interface UpdatePortalRequest {
  /**
   * <p>A new friendly name for the portal.</p>
   */
  portalName: string | undefined;

  /**
   * <p>A new description for the portal.</p>
   */
  portalDescription?: string;

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
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * <p>The ID of the portal to update.</p>
   */
  portalId: string | undefined;

  /**
   * <p>The AWS administrator's contact email address.</p>
   */
  portalContactEmail: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your AWS IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for AWS IoT SiteWise Monitor</a> in the
   *         <i>AWS IoT SiteWise User Guide</i>.</p>
   */
  roleArn: string | undefined;
}

export namespace UpdatePortalRequest {
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
  export const filterSensitiveLog = (obj: UpdatePortalResponse): any => ({
    ...obj,
  });
}

export interface UpdateProjectRequest {
  /**
   * <p>A new description for the project.</p>
   */
  projectDescription?: string;

  /**
   * <p>A new friendly name for the project.</p>
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the project to update.</p>
   */
  projectId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;
}

export namespace UpdateProjectRequest {
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
  });
}

export interface UpdateProjectResponse {}

export namespace UpdateProjectResponse {
  export const filterSensitiveLog = (obj: UpdateProjectResponse): any => ({
    ...obj,
  });
}
