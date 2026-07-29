// smithy-typescript generated code
import type {
  AggregateType,
  ApplicationStatus,
  AssetErrorCode,
  AssetModelState,
  AssetModelType,
  AssetModelVersionType,
  AssetRelationshipType,
  AssetState,
  AuthMode,
  BatchEntryCompletionStatus,
  BatchGetAssetPropertyAggregatesErrorCode,
  BatchGetAssetPropertyValueErrorCode,
  BatchGetAssetPropertyValueHistoryErrorCode,
  BatchPutAssetPropertyValueErrorCode,
  CapabilitySyncStatus,
  ColumnName,
  ComputationModelState,
  ComputeLocation,
  ComputeNodeErrorCode,
  ComputeNodeExecutionState,
  ConfigurationState,
  CoreDeviceOperatingSystem,
  DataSegmentErrorCode,
  DatasetEnrichmentStatus,
  DatasetExportJobStatus,
  DatasetSourceFormat,
  DatasetSourceType,
  DatasetState,
  DatasetTypeEnum,
  DetailedErrorCode,
  DetailedPipelineErrorCode,
  EncryptionType,
  EnrichmentJobStatus,
  ErrorCode,
  ExecutionState,
  ExportDataType,
  ForwardingConfigState,
  ImageFileType,
  JobStatus,
  JobType,
  LoggingLevel,
  MonitorErrorCode,
  Permission,
  PipelineErrorCode,
  PipelineExecutionState,
  PortalState,
  PortalType,
  ProcessingType,
  ProcessingUnit,
  PropertyDataType,
  PropertyNotificationState,
  Quality,
  QueryStatus,
  RawValueType,
  ResolveToResourceType,
  ResourceErrorCode,
  ResourceState,
  TimeOrdering,
  WorkspaceState,
} from "./enums";

/**
 * <p>Contains information for a group identity in an access policy.</p>
 * @public
 */
export interface GroupIdentity {
  /**
   * <p>The IAM Identity Center ID of the group.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Contains information about an Identity and Access Management role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *         <i>IAM User Guide</i>.</p>
 * @public
 */
export interface IAMRoleIdentity {
  /**
   * <p>The ARN of the IAM role. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html">IAM ARNs</a> in the
   *         <i>IAM User Guide</i>.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Contains information about an Identity and Access Management user.</p>
 * @public
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
   * @public
   */
  arn: string | undefined;
}

/**
 * <p>Contains information for a user identity in an access policy.</p>
 * @public
 */
export interface UserIdentity {
  /**
   * <p>The IAM Identity Center ID of the user.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Contains an identity that can access an IoT SiteWise Monitor resource.</p>
 *          <note>
 *             <p>Currently, you can't use Amazon Web Services API operations to retrieve IAM Identity Center identity IDs. You can
 *         find the IAM Identity Center identity IDs in the URL of user and group pages in the <a href="https://console.aws.amazon.com/singlesignon">IAM Identity Center console</a>.</p>
 *          </note>
 * @public
 */
export interface Identity {
  /**
   * <p>An IAM Identity Center user identity.</p>
   * @public
   */
  user?: UserIdentity | undefined;

  /**
   * <p>An IAM Identity Center group identity.</p>
   * @public
   */
  group?: GroupIdentity | undefined;

  /**
   * <p>An IAM user identity.</p>
   * @public
   */
  iamUser?: IAMUserIdentity | undefined;

  /**
   * <p>An IAM role identity.</p>
   * @public
   */
  iamRole?: IAMRoleIdentity | undefined;
}

/**
 * <p>Identifies an IoT SiteWise Monitor portal.</p>
 * @public
 */
export interface PortalResource {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Identifies a specific IoT SiteWise Monitor project.</p>
 * @public
 */
export interface ProjectResource {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Contains an IoT SiteWise Monitor resource ID for a portal or project.</p>
 * @public
 */
export interface Resource {
  /**
   * <p>A portal resource.</p>
   * @public
   */
  portal?: PortalResource | undefined;

  /**
   * <p>A project resource.</p>
   * @public
   */
  project?: ProjectResource | undefined;
}

/**
 * <p>Contains an access policy that defines an identity's access to an IoT SiteWise Monitor
 *       resource.</p>
 * @public
 */
export interface AccessPolicySummary {
  /**
   * <p>The ID of the access policy.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user).</p>
   * @public
   */
  identity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource (a portal or project).</p>
   * @public
   */
  resource: Resource | undefined;

  /**
   * <p>The permissions for the access policy. Note that a project <code>ADMINISTRATOR</code> is
   *       also known as a project owner.</p>
   * @public
   */
  permission: Permission | undefined;

  /**
   * <p>The date the access policy was created, in Unix epoch time.</p>
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * <p>Contains a definition for an action.</p>
 * @public
 */
export interface ActionDefinition {
  /**
   * <p>The ID of the action definition.</p>
   * @public
   */
  actionDefinitionId: string | undefined;

  /**
   * <p>The name of the action definition.</p>
   * @public
   */
  actionName: string | undefined;

  /**
   * <p>The type of the action definition.</p>
   * @public
   */
  actionType: string | undefined;
}

/**
 * <p>The JSON payload of the action.</p>
 * @public
 */
export interface ActionPayload {
  /**
   * <p>The payload of the action in a JSON string.</p>
   * @public
   */
  stringValue: string | undefined;
}

/**
 * <p>The detailed resource this execution summary resolves to.</p>
 * @public
 */
export interface ResolveTo {
  /**
   * <p>The ID of the asset that the resource resolves to.</p>
   * @public
   */
  assetId: string | undefined;
}

/**
 * <p>The resource the action will be taken on. This can include asset-based resources and
 *       computation model resources.</p>
 * @public
 */
export interface TargetResource {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId?: string | undefined;
}

/**
 * <p>Contains the summary of the actions, including information about where the action resolves
 *       to.</p>
 * @public
 */
export interface ActionSummary {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId?: string | undefined;

  /**
   * <p>The ID of the action definition.</p>
   * @public
   */
  actionDefinitionId?: string | undefined;

  /**
   * <p>The resource the action will be taken on.</p>
   * @public
   */
  targetResource?: TargetResource | undefined;

  /**
   * <p>The detailed resource this action resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * <p>Contains the (pre-calculated) aggregate values for an asset property.</p>
 * @public
 */
export interface Aggregates {
  /**
   * <p>The average (mean) value of the time series over a time interval window.</p>
   * @public
   */
  average?: number | undefined;

  /**
   * <p>The count of data points in the time series over a time interval window.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The maximum value of the time series over a time interval window.</p>
   * @public
   */
  maximum?: number | undefined;

  /**
   * <p>The minimum value of the time series over a time interval window.</p>
   * @public
   */
  minimum?: number | undefined;

  /**
   * <p>The sum of the time series over a time interval window.</p>
   * @public
   */
  sum?: number | undefined;

  /**
   * <p>The standard deviation of the time series over a time interval window.</p>
   * @public
   */
  standardDeviation?: number | undefined;
}

/**
 * <p>Contains aggregated asset property values (for example, average, minimum, and
 *       maximum).</p>
 * @public
 */
export interface AggregatedValue {
  /**
   * <p>The date the aggregating computations occurred, in Unix epoch time.</p>
   * @public
   */
  timestamp: Date | undefined;

  /**
   * <p>The quality of the aggregated data.</p>
   * @public
   */
  quality?: Quality | undefined;

  /**
   * <p>The value of the aggregates.</p>
   * @public
   */
  value: Aggregates | undefined;
}

/**
 * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
 *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
 *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
 * @public
 */
export interface Alarms {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows the alarm to perform actions and access Amazon Web Services
   *       resources and services, such as IoT Events.</p>
   * @public
   */
  alarmRoleArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Lambda function that manages alarm notifications. For more
   *       information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">Managing alarm
   *         notifications</a> in the <i>IoT Events Developer Guide</i>.</p>
   * @public
   */
  notificationLambdaArn?: string | undefined;
}

/**
 * <p>The annotation format configuration for bulk import files.</p>
 * @public
 */
export interface Annotation {}

/**
 * <p>Summary of an application for list operations</p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>ARN of the application</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Unique identifier of the application</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Name of the application</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Current status of the application</p>
   * @public
   */
  status: ApplicationStatus | undefined;

  /**
   * <p>Timestamp when the application was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Name of the workspace this application belongs to</p>
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * <p>A filter used to match data bindings based on a specific asset. This filter identifies all
 *       computation models referencing a particular asset in their data bindings.</p>
 * @public
 */
export interface AssetBindingValueFilter {
  /**
   * <p>The ID of the asset to filter data bindings by. Only data bindings referencing this
   *       specific asset are matched.</p>
   * @public
   */
  assetId: string | undefined;
}

/**
 * <p>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value
 *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface PropertyNotification {
  /**
   * <p>The MQTT topic to which IoT SiteWise publishes property value update notifications.</p>
   * @public
   */
  topic: string | undefined;

  /**
   * <p>The current notification state.</p>
   * @public
   */
  state: PropertyNotificationState | undefined;
}

/**
 * <p>Represents one level between a property and the root of the asset.</p>
 * @public
 */
export interface AssetPropertyPathSegment {
  /**
   * <p>The ID of the path segment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the path segment.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains asset property information.</p>
 * @public
 */
export interface AssetProperty {
  /**
   * <p>The ID of the asset property.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of the asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
   * @public
   */
  notification?: PropertyNotification | undefined;

  /**
   * <p>The data type of the asset property.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>The structured path to the property from the root of the asset.</p>
   * @public
   */
  path?: AssetPropertyPathSegment[] | undefined;
}

/**
 * <p>Contains information about a composite model in an asset. This object contains the asset's
 *       properties that you define in the composite model.</p>
 * @public
 */
export interface AssetCompositeModel {
  /**
   * <p>The name of the composite model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the composite model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The asset properties that this composite model defines.</p>
   * @public
   */
  properties: AssetProperty[] | undefined;

  /**
   * <p> The ID of the asset composite model. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID of the asset composite model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;
}

/**
 * <p>Represents one level between a composite model and the root of the asset.</p>
 * @public
 */
export interface AssetCompositeModelPathSegment {
  /**
   * <p>The ID of the path segment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the path segment.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains a summary of the composite model for a specific asset.</p>
 * @public
 */
export interface AssetCompositeModelSummary {
  /**
   * <p>The ID of the composite model that this summary describes.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An external ID to assign to the asset model.</p>
   *          <p>If the composite model is a derived composite model, or one nested inside a component
   *       model, you can only set the external ID using <code>UpdateAssetModelCompositeModel</code> and
   *       specifying the derived ID of the model or property from the created model it's a part
   *       of.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the composite model that this summary describes.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of asset model.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ASSET_MODEL</b> – (default) An asset model that you can use to create assets.
   *    Can't be included as a component in another asset model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPONENT_MODEL</b> – A reusable component that you can include in the composite
   *    models of other asset models. You can't create assets directly from this type of asset model. </p>
   *             </li>
   *          </ul>
   * @public
   */
  type: string | undefined;

  /**
   * <p>A description of the composite model that this summary describes.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The path that includes all the components of the asset model for the asset.</p>
   * @public
   */
  path: AssetCompositeModelPathSegment[] | undefined;
}

/**
 * <p>Contains error details for the requested associate project asset action.</p>
 * @public
 */
export interface AssetErrorDetails {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The error code.</p>
   * @public
   */
  code: AssetErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Describes an asset hierarchy that contains a hierarchy's name and ID.</p>
 * @public
 */
export interface AssetHierarchy {
  /**
   * <p>The ID of the hierarchy. This ID is a <code>hierarchyId</code>.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID of the hierarchy, if it has one. When you update an asset hierarchy, you
   *       may assign an external ID if it doesn't already have one. You can't change the external ID of
   *       an asset hierarchy that already has one. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The hierarchy name provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>
   *       API operation.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Contains information about a parent asset and a child asset that are related through an
 *       asset hierarchy.</p>
 * @public
 */
export interface AssetHierarchyInfo {
  /**
   * <p>The ID of the parent asset in this asset relationship.</p>
   * @public
   */
  parentAssetId?: string | undefined;

  /**
   * <p>The ID of the child asset in this asset relationship.</p>
   * @public
   */
  childAssetId?: string | undefined;
}

/**
 * <p>A filter used to match data bindings based on a specific asset model. This filter
 *       identifies all computation models referencing a particular asset model in their data
 *       bindings.</p>
 * @public
 */
export interface AssetModelBindingValueFilter {
  /**
   * <p>The ID of the asset model to filter data bindings by. Only data bindings referemncing this
   *       specific asset model are matched.</p>
   * @public
   */
  assetModelId: string | undefined;
}

/**
 * <p>Represents one level between a property and the root of the asset model.</p>
 * @public
 */
export interface AssetModelPropertyPathSegment {
  /**
   * <p>The ID of the path segment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the path segment.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains an asset attribute property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes">Attributes</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface Attribute {
  /**
   * <p>The default value of the asset model property attribute. All assets that you create from
   *       the asset model contain this attribute value. You can update an attribute's value after you
   *       create an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html">Updating attribute values</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * <p>The forwarding configuration for a given property.</p>
 * @public
 */
export interface ForwardingConfig {
  /**
   * <p>The forwarding state for the given property. </p>
   * @public
   */
  state: ForwardingConfigState | undefined;
}

/**
 * <p>The processing configuration for the given measurement property.
 *       You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud.
 *       By default, measurements are forwarded to the cloud.</p>
 * @public
 */
export interface MeasurementProcessingConfig {
  /**
   * <p>The forwarding configuration for the given measurement property. </p>
   * @public
   */
  forwardingConfig: ForwardingConfig | undefined;
}

/**
 * <p>Contains an asset measurement property. For more information, see
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements">Measurements</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface Measurement {
  /**
   * <p>The processing configuration for the given measurement property.
   *       You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud.
   *       By default, measurements are forwarded to the cloud.</p>
   * @public
   */
  processingConfig?: MeasurementProcessingConfig | undefined;
}

/**
 * <p>The processing configuration for the given metric property.
 *       You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud.
 *       By default, metrics are forwarded to the cloud.</p>
 * @public
 */
export interface MetricProcessingConfig {
  /**
   * <p>The compute location for the given metric property. </p>
   * @public
   */
  computeLocation: ComputeLocation | undefined;
}

/**
 * <p>Identifies a property value used in an expression.</p>
 * @public
 */
export interface VariableValue {
  /**
   * <p>The ID of the property to use as the variable. You can use the property <code>name</code>
   *       if it's from the same asset model. If the property has an external ID, you can specify
   *         <code>externalId:</code> followed by the external ID. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The ID of the hierarchy to query for the property ID. You can use the hierarchy's name
   *       instead of the hierarchy's ID. If the hierarchy has an external ID, you can specify
   *         <code>externalId:</code> followed by the external ID. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You use a hierarchy ID instead of a model ID because you can have several hierarchies
   *       using the same model and therefore the same <code>propertyId</code>. For example, you might
   *       have separately grouped assets that come from the same asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  hierarchyId?: string | undefined;

  /**
   * <p>The path of the property.</p>
   * @public
   */
  propertyPath?: AssetModelPropertyPathSegment[] | undefined;
}

/**
 * <p>Contains expression variable information.</p>
 * @public
 */
export interface ExpressionVariable {
  /**
   * <p>The friendly name of the variable to be used in the expression.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The variable that identifies an asset property from which to use values.</p>
   * @public
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
 * @public
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
   * @public
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
   * @public
   */
  offset?: string | undefined;
}

/**
 * <p>Contains a time interval window used for data aggregate computations (for example,
 *       average, sum, count, and so on).</p>
 * @public
 */
export interface MetricWindow {
  /**
   * <p>The tumbling time interval window.</p>
   * @public
   */
  tumbling?: TumblingWindow | undefined;
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
 * @public
 */
export interface Metric {
  /**
   * <p>The mathematical expression that defines the metric aggregation function. You can specify
   *       up to 10 variables per expression. You can specify up to 10 functions
   *       per expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  expression?: string | undefined;

  /**
   * <p>The list of variables used in the expression.</p>
   * @public
   */
  variables?: ExpressionVariable[] | undefined;

  /**
   * <p>The window (time interval) over which IoT SiteWise computes the metric's aggregation expression.
   *       IoT SiteWise computes one data point per <code>window</code>.</p>
   * @public
   */
  window: MetricWindow | undefined;

  /**
   * <p>The processing configuration for the given metric property.
   *       You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud.
   *       By default, metrics are forwarded to the cloud.</p>
   * @public
   */
  processingConfig?: MetricProcessingConfig | undefined;
}

/**
 * <p>The processing configuration for the given transform property.
 *       You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud.
 *       You can also configure transforms to be computed at the edge or in the cloud.</p>
 * @public
 */
export interface TransformProcessingConfig {
  /**
   * <p>The compute location for the given transform property. </p>
   * @public
   */
  computeLocation: ComputeLocation | undefined;

  /**
   * <p>The forwarding configuration for a given property.</p>
   * @public
   */
  forwardingConfig?: ForwardingConfig | undefined;
}

/**
 * <p>Contains an asset transform property. A transform is a one-to-one mapping of a property's
 *       data points from one form to another. For example, you can use a transform to convert a
 *       Celsius data stream to Fahrenheit by applying the transformation expression to each data point
 *       of the Celsius stream. A transform can only have a data type of <code>DOUBLE</code> and
 *       consume properties with data types of <code>INTEGER</code> or <code>DOUBLE</code>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms">Transforms</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface Transform {
  /**
   * <p>The mathematical expression that defines the transformation function. You can specify up
   *       to 10 variables per expression. You can specify up to 10 functions per
   *       expression. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  expression: string | undefined;

  /**
   * <p>The list of variables used in the expression.</p>
   * @public
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * <p>The processing configuration for the given transform property.
   *       You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud.
   *       You can also configure transforms to be computed at the edge or in the cloud.</p>
   * @public
   */
  processingConfig?: TransformProcessingConfig | undefined;
}

/**
 * <p>Contains a property type, which can be one of <code>attribute</code>,
 *         <code>measurement</code>, <code>metric</code>, or <code>transform</code>.</p>
 * @public
 */
export interface PropertyType {
  /**
   * <p>Specifies an asset attribute property. An attribute generally contains static information,
   *       such as the serial number of an <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">IIoT</a> wind turbine.</p>
   * @public
   */
  attribute?: Attribute | undefined;

  /**
   * <p>Specifies an asset measurement property. A measurement represents a device's raw sensor
   *       data stream, such as timestamped temperature values or timestamped power values.</p>
   * @public
   */
  measurement?: Measurement | undefined;

  /**
   * <p>Specifies an asset transform property. A transform contains a mathematical expression that
   *       maps a property's data points from one form to another, such as a unit conversion from Celsius
   *       to Fahrenheit.</p>
   * @public
   */
  transform?: Transform | undefined;

  /**
   * <p>Specifies an asset metric property. A metric contains a mathematical expression that uses
   *       aggregate functions to process all input data points over a time interval and output a single
   *       data point, such as to calculate the average hourly temperature.</p>
   * @public
   */
  metric?: Metric | undefined;
}

/**
 * <p>Contains information about an asset model property.</p>
 * @public
 */
export interface AssetModelProperty {
  /**
   * <p>The ID of the asset model property.</p>
   *          <ul>
   *             <li>
   *                <p>If you are callling <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> to create a
   *             <i>new</i> property: You can specify its ID here, if desired.
   *           IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   *             </li>
   *             <li>
   *                <p>If you are calling UpdateAssetModel to modify an <i>existing</i>
   *           property: This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID (if any) provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>
   *       operation. You can assign an external ID by specifying
   *       this value as part of a call to <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>. However, you can't change the external ID if one is already assigned. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the asset model property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the asset model property.</p>
   *          <p>The <code>VIDEO</code>, <code>ANNOTATION</code>, and <code>JSON</code> data types aren't supported for asset model properties. These types are used only by time series that store data for datasets in a workspace.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to
   *       identify the type of the structure for this property.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The unit of the asset model property, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>The property type (see <code>PropertyType</code>).</p>
   * @public
   */
  type: PropertyType | undefined;

  /**
   * <p>The structured path to the property from the root of the asset model.</p>
   * @public
   */
  path?: AssetModelPropertyPathSegment[] | undefined;
}

/**
 * <p>Contains information about a composite model in an asset model. This object contains the
 *       asset property definitions that you define in the composite model.</p>
 * @public
 */
export interface AssetModelCompositeModel {
  /**
   * <p>The name of the composite model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the composite model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The asset property definitions for this composite model.</p>
   * @public
   */
  properties?: AssetModelProperty[] | undefined;

  /**
   * <p> The ID of the asset model composite model. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID of the asset model composite model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;
}

/**
 * <p>Contains an asset model property definition. This property definition is applied to all
 *       assets created from the asset model.</p>
 * @public
 */
export interface AssetModelPropertyDefinition {
  /**
   * <p>The ID to assign to the asset model property, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>An external ID to assign to the property definition. The external ID must be unique among
   *       property definitions within this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the property definition.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the property definition.</p>
   *          <p>The <code>VIDEO</code>, <code>ANNOTATION</code>, and <code>JSON</code> data types aren't supported for asset model properties. These types are used only by time series that store data for datasets in a workspace.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to
   *       identify the type of the structure for this property.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter is required on properties
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model in which you
   *       define this property. Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite
   *       models.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The unit of the property definition, such as <code>Newtons</code> or
   *       <code>RPM</code>.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>The property definition type (see <code>PropertyType</code>). You can only specify one
   *       type in a property definition.</p>
   * @public
   */
  type: PropertyType | undefined;
}

/**
 * <p>Contains a composite model definition in an asset model. This composite model definition
 *       is applied to all assets created from the asset model.</p>
 * @public
 */
export interface AssetModelCompositeModelDefinition {
  /**
   * <p>The ID to assign to the composite model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>An external ID to assign to the composite model. The external ID must be unique among
   *       composite models within this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the composite model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the composite model.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The type of the composite model. For alarm composite models, this type is
   *         <code>AWS/ALARM</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The asset property definitions for this composite model.</p>
   * @public
   */
  properties?: AssetModelPropertyDefinition[] | undefined;
}

/**
 * <p>Represents one level between a composite model and the root of the asset model.</p>
 * @public
 */
export interface AssetModelCompositeModelPathSegment {
  /**
   * <p>The ID of the path segment.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the path segment.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Contains a summary of the composite model.</p>
 * @public
 */
export interface AssetModelCompositeModelSummary {
  /**
   * <p>The ID of the composite model that this summary describes..</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of a composite model on this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the composite model that this summary describes..</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The composite model type. Valid values are <code>AWS/ALARM</code>, <code>CUSTOM</code>, or <code> AWS/L4E_ANOMALY</code>.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>The description of the composite model that this summary describes..</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The path that includes all the pieces that make up the composite model.</p>
   * @public
   */
  path?: AssetModelCompositeModelPathSegment[] | undefined;
}

/**
 * <p>Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model
 *       ID that specifies the type of asset that can be in this hierarchy.</p>
 * @public
 */
export interface AssetModelHierarchy {
  /**
   * <p>The ID of the asset model hierarchy. This ID is a <code>hierarchyId</code>.</p>
   *          <ul>
   *             <li>
   *                <p>If you are callling <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> to create a
   *             <i>new</i> hierarchy: You can specify its ID here, if desired.
   *           IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   *             </li>
   *             <li>
   *                <p>If you are calling UpdateAssetModel to modify an <i>existing</i>
   *           hierarchy: This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID (if any) provided in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>
   *       operation. You can assign an external ID by specifying
   *       this value as part of a call to <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>. However, you can't change the external ID if one is already assigned. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the asset model hierarchy that you specify by using the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset model, in UUID format. All assets in this hierarchy must be instances of the
   *         <code>childAssetModelId</code> asset model. IoT SiteWise will always return the actual
   *       asset model ID for this value. However, when you are specifying this value as part of a call to
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a>, you may provide either the asset model ID or else <code>externalId:</code>
   *       followed by the asset model's external ID. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.
   *     </p>
   * @public
   */
  childAssetModelId: string | undefined;
}

/**
 * <p>Contains an asset model hierarchy used in asset model creation. An asset model hierarchy
 *       determines the kind (or type) of asset that can belong to a hierarchy.</p>
 * @public
 */
export interface AssetModelHierarchyDefinition {
  /**
   * <p>The ID to assign to the asset model hierarchy, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>An external ID to assign to the asset model hierarchy. The external ID must be unique
   *       among asset model hierarchies within this asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the asset model hierarchy definition (as specified in the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html">CreateAssetModel</a> or
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html">UpdateAssetModel</a> API operation).</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of an asset model for this hierarchy. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  childAssetModelId: string | undefined;
}

/**
 * <p>Contains information about an <code>assetModelProperty</code> binding value.</p>
 * @public
 */
export interface AssetModelPropertyBindingValue {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the asset model property used in data binding value.</p>
   * @public
   */
  propertyId: string | undefined;
}

/**
 * <p>A filter used to match data bindings based on a specific asset model property. This filter
 *       identifies all computation models that reference a particular property of an asset model in
 *       their data bindings.</p>
 * @public
 */
export interface AssetModelPropertyBindingValueFilter {
  /**
   * <p>The ID of the asset model containing the filter property. This identifies the specific
   *       asset model that contains the property of interest.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the property within the asset model to filter by. Only data bindings referencing
   *       this specific property of the specified asset model are matched.</p>
   * @public
   */
  propertyId: string | undefined;
}

/**
 * <p>Contains summary information about an interface that a property belongs to.</p>
 * @public
 */
export interface InterfaceSummary {
  /**
   * <p>The ID of the interface asset model that contains this property.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The ID of the property in the interface asset model that corresponds to this
   *       property.</p>
   * @public
   */
  interfaceAssetModelPropertyId: string | undefined;
}

/**
 * <p>Contains a summary of a property associated with a model. This includes information about
 *       which interfaces the property belongs to, if any.</p>
 * @public
 */
export interface AssetModelPropertySummary {
  /**
   * <p>The ID of the property.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID of the property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The data type of the property.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this property. This parameter exists on properties that
   *       have the <code>STRUCT</code> data type.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the property.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>Contains a property type, which can be one of <code>attribute</code>,
   *         <code>measurement</code>, <code>metric</code>, or <code>transform</code>.</p>
   * @public
   */
  type: PropertyType | undefined;

  /**
   * <p> The ID of the composite model that contains the asset model property. </p>
   * @public
   */
  assetModelCompositeModelId?: string | undefined;

  /**
   * <p>The structured path to the property from the root of the asset model.</p>
   * @public
   */
  path?: AssetModelPropertyPathSegment[] | undefined;

  /**
   * <p>A list of interface summaries that describe which interfaces this property belongs to,
   *       including the interface asset model ID and the corresponding property ID in the
   *       interface.</p>
   * @public
   */
  interfaceSummaries?: InterfaceSummary[] | undefined;
}

/**
 * <p>Contains detailed error information. </p>
 * @public
 */
export interface DetailedError {
  /**
   * <p>The error code. </p>
   * @public
   */
  code: DetailedErrorCode | undefined;

  /**
   * <p>The error message. </p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Contains the details of an IoT SiteWise error.</p>
 * @public
 */
export interface ErrorDetails {
  /**
   * <p>The error code.</p>
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p> A list of detailed errors. </p>
   * @public
   */
  details?: DetailedError[] | undefined;
}

/**
 * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
 *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface AssetModelStatus {
  /**
   * <p>The current state of the asset model.</p>
   * @public
   */
  state: AssetModelState | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * <p>Contains a summary of an asset model.</p>
 * @public
 */
export interface AssetModelSummary {
  /**
   * <p>The ID of the asset model (used with IoT SiteWise API operations).</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of the asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the asset model.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of asset model.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ASSET_MODEL</b> – (default) An asset model that you can use to create assets.
   *    Can't be included as a component in another asset model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPONENT_MODEL</b> – A reusable component that you can include in the composite
   *    models of other asset models. You can't create assets directly from this type of asset model. </p>
   *             </li>
   *          </ul>
   * @public
   */
  assetModelType?: AssetModelType | undefined;

  /**
   * <p>The asset model description.</p>
   * @public
   */
  description: string | undefined;

  /**
   * <p>The date the asset model was created, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset model.</p>
   * @public
   */
  status: AssetModelStatus | undefined;

  /**
   * <p>The version number of the asset model.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Represents a data binding value referencing a specific asset property. It's used to bind
 *       computation model variables to actual asset property values for processing.</p>
 * @public
 */
export interface AssetPropertyBindingValue {
  /**
   * <p>The ID of the asset containing the property. This identifies the specific asset instance's
   *       property value used in the computation model.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the property within the asset. This identifies the specific property's value
   *       used in the computation model.</p>
   * @public
   */
  propertyId: string | undefined;
}

/**
 * <p>A filter used to match data bindings based on a specific asset property. This filter helps
 *       identify all computation models referencing a particular property of an asset in their data
 *       bindings.</p>
 * @public
 */
export interface AssetPropertyBindingValueFilter {
  /**
   * <p>The ID of the asset containing the property to filter by. This identifies the specific
   *       asset instance containing the property of interest.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the property within the asset to filter by. Only data bindings referencing this
   *       specific property of the specified asset are matched.</p>
   * @public
   */
  propertyId: string | undefined;
}

/**
 * <p>Contains a summary of a property associated with an asset.</p>
 * @public
 */
export interface AssetPropertySummary {
  /**
   * <p>The ID of the property.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of the property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p> The unit of measure (such as Newtons or RPM) of the asset property. </p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value
   *       updates to a unique MQTT topic. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html">Interacting with other services</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  notification?: PropertyNotification | undefined;

  /**
   * <p> The ID of the composite model that contains the asset property. </p>
   * @public
   */
  assetCompositeModelId?: string | undefined;

  /**
   * <p>The structured path to the property from the root of the asset.</p>
   * @public
   */
  path?: AssetPropertyPathSegment[] | undefined;
}

/**
 * <p>Contains a timestamp with optional nanosecond granularity.</p>
 * @public
 */
export interface TimeInNanos {
  /**
   * <p>The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is
   *       provided by <code>offsetInNanos</code>.</p>
   * @public
   */
  timeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset from <code>timeInSeconds</code>.</p>
   * @public
   */
  offsetInNanos?: number | undefined;
}

/**
 * <p>The value type of null asset property data with BAD and UNCERTAIN qualities.</p>
 * @public
 */
export interface PropertyValueNullValue {
  /**
   * <p>The type of null asset property data.</p>
   * @public
   */
  valueType: RawValueType | undefined;
}

/**
 * <p>Contains an asset property value (of a single type only).</p>
 * @public
 */
export interface Variant {
  /**
   * <p> Asset property data of type string (sequence of characters). The allowed pattern:
   *       "^$|[^\u0000-\u001F\u007F]+". The max length is 1024. </p>
   * @public
   */
  stringValue?: string | undefined;

  /**
   * <p>Asset property data of type integer (whole number).</p>
   * @public
   */
  integerValue?: number | undefined;

  /**
   * <p> Asset property data of type double (floating point number). The min value is -10^10. The
   *       max value is 10^10. Double.NaN is allowed. </p>
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * <p>Asset property data of type Boolean (true or false).</p>
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * <p>The type of null asset property data with BAD and UNCERTAIN qualities.</p>
   * @public
   */
  nullValue?: PropertyValueNullValue | undefined;
}

/**
 * <p>Contains asset property value information.</p>
 * @public
 */
export interface AssetPropertyValue {
  /**
   * <p>The value of the asset property (see <code>Variant</code>).</p>
   * @public
   */
  value: Variant | undefined;

  /**
   * <p>The timestamp of the asset property value.</p>
   * @public
   */
  timestamp: TimeInNanos | undefined;

  /**
   * <p>The quality of the asset property value.</p>
   * @public
   */
  quality?: Quality | undefined;
}

/**
 * <p>Contains information about assets that are related to one another.</p>
 * @public
 */
export interface AssetRelationshipSummary {
  /**
   * <p>The assets that are related through an asset hierarchy.</p>
   *          <p>This object is present if the <code>relationshipType</code> is
   *       <code>HIERARCHY</code>.</p>
   * @public
   */
  hierarchyInfo?: AssetHierarchyInfo | undefined;

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
   * @public
   */
  relationshipType: AssetRelationshipType | undefined;
}

/**
 * <p>Contains information about the current status of an asset. For more information, see
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
 *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface AssetStatus {
  /**
   * <p>The current status of the asset.</p>
   * @public
   */
  state: AssetState | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * <p>Contains a summary of an asset.</p>
 * @public
 */
export interface AssetSummary {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset model used to create this asset.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset.</p>
   * @public
   */
  status: AssetStatus | undefined;

  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   * @public
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>A description for the asset.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAssetsRequest {
  /**
   * <p>The ID of the parent asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.) Hierarchies allow
   *       different groupings of assets to be formed that all come from the same asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  hierarchyId: string | undefined;

  /**
   * <p>The ID of the child asset to be associated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  childAssetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains a summary of an associated asset.</p>
 * @public
 */
export interface AssociatedAssetsSummary {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the asset model used to create the asset.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset.</p>
   * @public
   */
  status: AssetStatus | undefined;

  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   * @public
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>A description for the asset.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Contains information about a data segment entry to associate with a dataset.</p>
 * @public
 */
export interface AssociateDataSegmentEntry {
  /**
   * <p>The ID of the source dataset that contains the data segment.</p>
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment to associate.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment to associate.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface AssociateTimeSeriesToAssetPropertyRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateDataSegmentsToDatasetRequest {
  /**
   * <p>The ID of the curated dataset to associate data segments with.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The list of data segment entries to associate with the dataset.</p>
   * @public
   */
  associateDataSegmentEntries: AssociateDataSegmentEntry[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is
   *       idempotent. If you retry a request that completed successfully using the same client token,
   *       the retry succeeds without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains error information for a data segment association that failed.</p>
 * @public
 */
export interface FailedDataSegmentAssociation {
  /**
   * <p>The ID of the source dataset.</p>
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * <p>The error code for the failed association.</p>
   * @public
   */
  errorCode: DataSegmentErrorCode | undefined;

  /**
   * <p>The error message for the failed association.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateDataSegmentsToDatasetResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The version of the dataset after association.</p>
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * <p>A list of data segment associations that failed.</p>
   * @public
   */
  failedAssociations: FailedDataSegmentAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateProjectAssetsRequest {
  /**
   * <p>The ID of the project to which to associate the assets.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The IDs of the assets to be associated to the project.</p>
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateProjectAssetsResponse {
  /**
   * <p>A list of associated error information, if any.</p>
   * @public
   */
  errors?: AssetErrorDetails[] | undefined;
}

/**
 * <p>Contains information about a data segment entry to delete.</p>
 * @public
 */
export interface DeleteDataSegmentEntry {
  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment to delete.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment to delete.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDatasetDataSegmentsRequest {
  /**
   * <p>The ID of the session dataset from which to delete data segments.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The list of data segment entries to delete.</p>
   * @public
   */
  deleteDataSegmentEntries: DeleteDataSegmentEntry[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is
   *       idempotent. If you retry a request that completed successfully using the same client token,
   *       the retry succeeds without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains error information for a data segment deletion that failed.</p>
 * @public
 */
export interface FailedDataSegmentDeletion {
  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * <p>The error code for the failed deletion.</p>
   * @public
   */
  errorCode: DataSegmentErrorCode | undefined;

  /**
   * <p>The error message for the failed deletion.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDatasetDataSegmentsResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The version of the dataset after deletion.</p>
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * <p>A list of data segment deletions that failed.</p>
   * @public
   */
  errors: FailedDataSegmentDeletion[] | undefined;
}

/**
 * <p>Contains information about a data segment entry to disassociate from a dataset.</p>
 * @public
 */
export interface DisassociateDataSegmentEntry {
  /**
   * <p>The ID of the source dataset that contains the data segment.</p>
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment to disassociate.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment to disassociate.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateDataSegmentsFromDatasetRequest {
  /**
   * <p>The ID of the curated dataset to disassociate data segments from.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The list of data segment entries to disassociate from the dataset.</p>
   * @public
   */
  disassociateDataSegmentEntries: DisassociateDataSegmentEntry[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is
   *       idempotent. If you retry a request that completed successfully using the same client token,
   *       the retry succeeds without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains error information for a data segment disassociation that failed.</p>
 * @public
 */
export interface FailedDataSegmentDisassociation {
  /**
   * <p>The ID of the source dataset.</p>
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The nanosecond-precision start time of the data segment.</p>
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the data segment.</p>
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * <p>The error code for the failed disassociation.</p>
   * @public
   */
  errorCode: DataSegmentErrorCode | undefined;

  /**
   * <p>The error message for the failed disassociation.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateDataSegmentsFromDatasetResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The version of the dataset after disassociation.</p>
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * <p>A list of data segment disassociations that failed.</p>
   * @public
   */
  failedDisassociations: FailedDataSegmentDisassociation[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateProjectAssetsRequest {
  /**
   * <p>The ID of the project from which to disassociate the assets.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The IDs of the assets to be disassociated from the project.</p>
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateProjectAssetsResponse {
  /**
   * <p>A list of associated error information, if any.</p>
   * @public
   */
  errors?: AssetErrorDetails[] | undefined;
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
 * @public
 */
export interface BatchGetAssetPropertyAggregatesEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The data aggregating function.</p>
   * @public
   */
  aggregateTypes: AggregateType[] | undefined;

  /**
   * <p>The time interval over which to aggregate data.</p>
   * @public
   */
  resolution: string | undefined;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  startDate: Date | undefined;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  endDate: Date | undefined;

  /**
   * <p>The quality by which to filter asset data.</p>
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyAggregatesRequest {
  /**
   * <p>The list of asset property aggregate entries for the batch get request. You can specify up
   *       to 16 entries per request.</p>
   * @public
   */
  entries: BatchGetAssetPropertyAggregatesEntry[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs
   *       first.</p>
   *          <ul>
   *             <li>
   *                <p>The size of the result set is equal to 1 MB.</p>
   *             </li>
   *             <li>
   *                <p>The number of data points in the result set is equal to the value of
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 4000.</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains error information for an asset property aggregate entry that is associated with
 *       the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 * @public
 */
export interface BatchGetAssetPropertyAggregatesErrorEntry {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | undefined;

  /**
   * <p>The associated error message.</p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;
}

/**
 * <p>Contains the error code and the timestamp for an asset property aggregate entry that is
 *       associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 * @public
 */
export interface BatchGetAssetPropertyAggregatesErrorInfo {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | undefined;

  /**
   * <p>The date the error occurred, in Unix epoch time.</p>
   * @public
   */
  errorTimestamp: Date | undefined;
}

/**
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> request.</p>
 * @public
 */
export interface BatchGetAssetPropertyAggregatesSkippedEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
   * @public
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * <p>The error information, such as the error code and the timestamp.</p>
   * @public
   */
  errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo | undefined;
}

/**
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html">BatchGetAssetPropertyAggregates</a> API.</p>
 * @public
 */
export interface BatchGetAssetPropertyAggregatesSuccessEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The requested aggregated asset property values (for example, average, minimum, and
   *       maximum).</p>
   * @public
   */
  aggregatedValues: AggregatedValue[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyAggregatesResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   * @public
   */
  errorEntries: BatchGetAssetPropertyAggregatesErrorEntry[] | undefined;

  /**
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   * @public
   */
  successEntries: BatchGetAssetPropertyAggregatesSuccessEntry[] | undefined;

  /**
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   * @public
   */
  skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntry[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * @public
 */
export interface BatchGetAssetPropertyValueEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueRequest {
  /**
   * <p>The list of asset property value entries for the batch get request. You can specify up to
   *       128 entries per request.</p>
   * @public
   */
  entries: BatchGetAssetPropertyValueEntry[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains error information for an asset property value entry that is associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueErrorEntry {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | undefined;

  /**
   * <p>The associated error message.</p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;
}

/**
 * <p>The error information, such as the error code and the timestamp.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueErrorInfo {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | undefined;

  /**
   * <p>The date the error occurred, in Unix epoch time.</p>
   * @public
   */
  errorTimestamp: Date | undefined;
}

/**
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueSkippedEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> request.</p>
   * @public
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * <p>The error information, such as the error code and the timestamp.</p>
   * @public
   */
  errorInfo?: BatchGetAssetPropertyValueErrorInfo | undefined;
}

/**
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValue</a> API.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueSuccessEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>Contains asset property value information.</p>
   * @public
   */
  assetPropertyValue?: AssetPropertyValue | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   * @public
   */
  errorEntries: BatchGetAssetPropertyValueErrorEntry[] | undefined;

  /**
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   * @public
   */
  successEntries: BatchGetAssetPropertyValueSuccessEntry[] | undefined;

  /**
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   * @public
   */
  skippedEntries: BatchGetAssetPropertyValueSkippedEntry[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
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
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property, in UUID format.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  startDate?: Date | undefined;

  /**
   * <p>The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.</p>
   * @public
   */
  endDate?: Date | undefined;

  /**
   * <p>The quality by which to filter asset data.</p>
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryRequest {
  /**
   * <p>The list of asset property historical value entries for the batch get request. You can
   *       specify up to 16 entries per request.</p>
   * @public
   */
  entries: BatchGetAssetPropertyValueHistoryEntry[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
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
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>A list of the errors (if any) associated with the batch request. Each error entry
 *       contains the <code>entryId</code> of the entry that failed.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryErrorEntry {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | undefined;

  /**
   * <p>The associated error message.</p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;
}

/**
 * <p>The error information, such as the error code and the timestamp.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryErrorInfo {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | undefined;

  /**
   * <p>The date the error occurred, in Unix epoch time.</p>
   * @public
   */
  errorTimestamp: Date | undefined;
}

/**
 * <p>Contains information for an entry that has been processed by the previous <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> request.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueHistorySkippedEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The completion status of each entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html">BatchGetAssetPropertyValueHistory</a> API.</p>
   * @public
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * <p>The error information, such as the error code and the timestamp.</p>
   * @public
   */
  errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo | undefined;
}

/**
 * <p>Contains success information for an entry that is associated with the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html">BatchGetAssetPropertyValueHistory</a> API.</p>
 * @public
 */
export interface BatchGetAssetPropertyValueHistorySuccessEntry {
  /**
   * <p>The ID of the entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The requested historical values for the specified asset property.</p>
   * @public
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   * @public
   */
  errorEntries: BatchGetAssetPropertyValueHistoryErrorEntry[] | undefined;

  /**
   * <p>A list of entries that were processed successfully by this batch request. Each success entry
   *       contains the <code>entryId</code> of the entry that succeeded and the latest query result.</p>
   * @public
   */
  successEntries: BatchGetAssetPropertyValueHistorySuccessEntry[] | undefined;

  /**
   * <p>A list of entries that were not processed by this batch request.
   *       because these entries had been completely processed by previous paginated requests.
   *       Each skipped entry contains the <code>entryId</code> of the entry that skipped.</p>
   * @public
   */
  skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntry[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains a list of value updates for an asset property in the list of asset entries
 *       consumed by the <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API
 *       operation.</p>
 * @public
 */
export interface PutAssetPropertyValueEntry {
  /**
   * <p>The user specified ID for the entry. You can use this ID to identify which entries
   *       failed.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The ID of the asset to update.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property for this entry.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The list of property values to upload. You can specify up to 10
   *         <code>propertyValues</code> array elements. </p>
   * @public
   */
  propertyValues: AssetPropertyValue[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAssetPropertyValueRequest {
  /**
   * <p>This setting enables partial ingestion at entry-level. If set to <code>true</code>, we
   *       ingest all TQVs not resulting in an error. If set to <code>false</code>, an invalid TQV fails
   *       ingestion of the entire entry that contains it.</p>
   * @public
   */
  enablePartialEntryProcessing?: boolean | undefined;

  /**
   * <p>The list of asset property value entries for the batch put request. You can specify up to
   *       10 entries per request.</p>
   * @public
   */
  entries: PutAssetPropertyValueEntry[] | undefined;
}

/**
 * <p>Contains error information from updating a batch of asset property values.</p>
 * @public
 */
export interface BatchPutAssetPropertyError {
  /**
   * <p>The error code.</p>
   * @public
   */
  errorCode: BatchPutAssetPropertyValueErrorCode | undefined;

  /**
   * <p>The associated error message.</p>
   * @public
   */
  errorMessage: string | undefined;

  /**
   * <p>A list of timestamps for each  error, if any.</p>
   * @public
   */
  timestamps: TimeInNanos[] | undefined;
}

/**
 * <p>Contains error information for asset property value entries that are associated with the
 *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html">BatchPutAssetPropertyValue</a> API.</p>
 * @public
 */
export interface BatchPutAssetPropertyErrorEntry {
  /**
   * <p>The ID of the failed entry.</p>
   * @public
   */
  entryId: string | undefined;

  /**
   * <p>The list of update property value errors.</p>
   * @public
   */
  errors: BatchPutAssetPropertyError[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAssetPropertyValueResponse {
  /**
   * <p>A list of the errors (if any) associated with the batch put request. Each error entry
   *       contains the <code>entryId</code> of the entry that failed.</p>
   * @public
   */
  errorEntries: BatchPutAssetPropertyErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelEnrichmentJobRequest {
  /**
   * <p>The name of the IoT SiteWise workspace containing the enrichment job to cancel.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier of the enrichment job to cancel. This is the jobId returned by CreateEnrichmentJob.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelEnrichmentJobResponse {
  /**
   * <p>The unique identifier of the cancelled enrichment job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The status of the enrichment job after cancellation. This will be CANCELLED, indicating the job
   * was successfully cancelled or was already in CANCELLED state (idempotent behavior).</p>
   * @public
   */
  status: EnrichmentJobStatus | undefined;
}

/**
 * <p>Request structure for CancelPipelineExecution operation.</p>
 * @public
 */
export interface CancelPipelineExecutionRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The unique identifier of the pipeline execution.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>A message describing why the pipeline execution is being cancelled.</p>
   * @public
   */
  reason?: string | undefined;
}

/**
 * <p>Response structure for CancelPipelineExecution operation.</p>
 * @public
 */
export interface CancelPipelineExecutionResponse {
  /**
   * <p>The current execution state of the pipeline. Can only be CANCELLING or CANCELLED.</p>
   * @public
   */
  state: PipelineExecutionState | undefined;
}

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * <p>The name of the workspace associated with the query.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier for the query execution to cancel.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * <p>Contains the response for the CancelQuery operation.</p>
 * @public
 */
export interface CancelQueryResponse {
  /**
   * <p>The unique identifier for the cancelled query.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The current query status.</p>
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyRequest {
  /**
   * <p>The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.</p>
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.</p>
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The permission level for this access policy. Note that a project <code>ADMINISTRATOR</code> is also known as a project owner.</p>
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the access policy. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your
   *         IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyResponse {
  /**
   * <p>The ID of the access policy.</p>
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:access-policy/$\{AccessPolicyId\}</code>
   *          </p>
   * @public
   */
  accessPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>Unique client token for idempotent request handling</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>Identity Center Instance ARN to create the application in</p>
   * @public
   */
  idcInstanceArn: string | undefined;

  /**
   * <p>Name of the workspace to associate with the underlying Application</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>Name of the application</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Description of the application</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the application.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>ARN of the application</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Unique identifier of the application</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>DNS subdomain for the application</p>
   * @public
   */
  dnsSubdomain: string | undefined;

  /**
   * <p>Name of the application</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Current status of the application</p>
   * @public
   */
  status: ApplicationStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetRequest {
  /**
   * <p>A friendly name for the asset.</p>
   * @public
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset model from which to create the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID to assign to the asset, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>An external ID to assign to the asset. The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A description for the asset.</p>
   * @public
   */
  assetDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetResponse {
  /**
   * <p>The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other
   *       IoT SiteWise API operations.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   * @public
   */
  assetArn: string | undefined;

  /**
   * <p>The status of the asset, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelRequest {
  /**
   * <p>A unique name for the asset model.</p>
   * @public
   */
  assetModelName: string | undefined;

  /**
   * <p>The type of asset model.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ASSET_MODEL</b> – (default) An asset model that you can use to create assets.
   *    Can't be included as a component in another asset model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPONENT_MODEL</b> – A reusable component that you can include in the composite
   *    models of other asset models. You can't create assets directly from this type of asset model. </p>
   *             </li>
   *          </ul>
   * @public
   */
  assetModelType?: AssetModelType | undefined;

  /**
   * <p>The ID to assign to the asset model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required.
   *     However, if you prefer to supply your own ID instead, you can specify it here in UUID format.
   *     If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * <p>An external ID to assign to the asset model. The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * <p>A description for the asset model.</p>
   * @public
   */
  assetModelDescription?: string | undefined;

  /**
   * <p>The property definitions of the asset model. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html">Asset properties</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelProperties?: AssetModelPropertyDefinition[] | undefined;

  /**
   * <p>The hierarchy definitions of the asset model. Each hierarchy specifies an asset model
   *       whose assets can be children of any other assets created from this asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 10 hierarchies per asset model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined;

  /**
   * <p>The composite models that are part of this asset model. It groups properties
   *   (such as attributes, measurements, transforms, and metrics) and child composite models that
   *       model parts of your industrial equipment. Each composite model has a type that defines the
   *       properties that the composite model supports. Use composite models to define alarms on this asset model.</p>
   *          <note>
   *             <p>When creating custom composite models, you need to use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html">CreateAssetModelCompositeModel</a>. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-custom-composite-models.html">Creating custom composite models (Components)</a> in the
   *       <i>IoT SiteWise User Guide</i>.</p>
   *          </note>
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the asset model. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelResponse {
  /**
   * <p>The ID of the asset model, in UUID format. You can use this ID when you call other IoT SiteWise API operations.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * <p>The status of the asset model, which contains a state (<code>CREATING</code> after
   *       successfully calling this operation) and any error message.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelCompositeModelRequest {
  /**
   * <p>The ID of the asset model this composite model is a part of.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>An external ID to assign to the composite model.</p>
   *          <p>If the composite model is a derived composite model, or one nested inside a component
   *       model, you can only set the external ID using <code>UpdateAssetModelCompositeModel</code> and
   *       specifying the derived ID of the model or property from the created model it's a part
   *       of.</p>
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * <p>The ID of the parent composite model in this asset model relationship.</p>
   * @public
   */
  parentAssetModelCompositeModelId?: string | undefined;

  /**
   * <p>The ID of the composite model. IoT SiteWise automatically generates a unique ID for you, so this
   *       parameter is never required. However, if you prefer to supply your own ID instead, you can
   *       specify it here in UUID format. If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  assetModelCompositeModelId?: string | undefined;

  /**
   * <p>A description for the composite model.</p>
   * @public
   */
  assetModelCompositeModelDescription?: string | undefined;

  /**
   * <p>A unique name for the composite model.</p>
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * <p>The composite model type. Valid values are <code>AWS/ALARM</code>, <code>CUSTOM</code>, or <code> AWS/L4E_ANOMALY</code>.</p>
   * @public
   */
  assetModelCompositeModelType: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The ID of a component model which is reused to create this composite model.</p>
   * @public
   */
  composedAssetModelId?: string | undefined;

  /**
   * <p>The property definitions of the composite model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html#inline-composite-models">
   *         Inline custom composite models</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          <p>You can specify up to 200 properties per composite model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelCompositeModelProperties?: AssetModelPropertyDefinition[] | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The create request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the create request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the create operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelCompositeModelResponse {
  /**
   * <p>The ID of the composed asset model. You can use this ID when you call other IoT SiteWise
   *       APIs.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>The path to the composite model listing the parent composite models.</p>
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId?: string | undefined;
}

/**
 * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
 * @public
 */
export interface ErrorReportLocation {
  /**
   * <p>The name of the Amazon S3 bucket to which errors associated with the bulk import job are
   *       sent.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has
   *       a key that is its unique identifier in the bucket. Each object in a bucket has exactly one
   *       key. The prefix must end with a forward slash (/). For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html">Organizing objects
   *         using prefixes</a> in the <i>Amazon Simple Storage Service User Guide</i>.</p>
   * @public
   */
  prefix: string | undefined;
}

/**
 * <p>A .CSV file.</p>
 * @public
 */
export interface Csv {
  /**
   * <p>The column names specified in the .csv file.</p>
   * @public
   */
  columnNames: ColumnName[] | undefined;
}

/**
 * <p>The MP4 video format configuration for bulk import files.</p>
 * @public
 */
export interface Mp4 {}

/**
 * <p>A parquet file.</p>
 * @public
 */
export interface Parquet {}

/**
 * <p>The file format of the data in S3.</p>
 * @public
 */
export interface FileFormat {
  /**
   * <p>The file is in .CSV format.</p>
   * @public
   */
  csv?: Csv | undefined;

  /**
   * <p>The file is in parquet format.</p>
   * @public
   */
  parquet?: Parquet | undefined;

  /**
   * <p>The MP4 format configuration.</p>
   * @public
   */
  mp4?: Mp4 | undefined;

  /**
   * <p>The annotation format configuration.</p>
   * @public
   */
  annotation?: Annotation | undefined;
}

/**
 * <p>The file in Amazon S3 where your data is saved. </p>
 * @public
 */
export interface File {
  /**
   * <p>The name of the Amazon S3 bucket from which data is imported.</p>
   * @public
   */
  bucket: string | undefined;

  /**
   * <p>The key of the Amazon S3 object that contains your data. Each object has a key that is a unique
   *       identifier. Each object has exactly one key.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The version ID to identify a specific version of the Amazon S3 object that contains your
   *       data.</p>
   * @public
   */
  versionId?: string | undefined;

  /**
   * <p>The alias associated with the file's time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The nanosecond-precision start time for the file data.</p>
   * @public
   */
  startTime?: TimeInNanos | undefined;

  /**
   * <p>The file format of the data in S3.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;
}

/**
 * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
 * @public
 */
export interface JobConfiguration {
  /**
   * <p>The file format of the data in S3.</p>
   * @public
   */
  fileFormat?: FileFormat | undefined;
}

/**
 * @public
 */
export interface CreateBulkImportJobRequest {
  /**
   * <p>The unique name that helps identify the job request.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.</p>
   * @public
   */
  jobRoleArn: string | undefined;

  /**
   * <p>The files in the specified Amazon S3 bucket that contain your data. You can specify up to 100 files for each bulk import job. Each file supports the following size limits:</p>
   *          <ul>
   *             <li>
   *                <p>Parquet files – Up to 256 MiB.</p>
   *             </li>
   *             <li>
   *                <p>Other file formats – Up to 5 GiB.</p>
   *             </li>
   *          </ul>
   * @public
   */
  files: File[] | undefined;

  /**
   * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
   * @public
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
   * @public
   */
  jobConfiguration?: JobConfiguration | undefined;

  /**
   * <p>If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are
   *    computed. If set to false, historical data is ingested into IoT SiteWise as is.</p>
   * @public
   */
  adaptiveIngestion?: boolean | undefined;

  /**
   * <p>If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.</p>
   * @public
   */
  deleteFilesAfterImport?: boolean | undefined;

  /**
   * <p>The ID of the session dataset to ingest data into. Specify this field, together with
   *       <code>workspaceName</code>, to ingest data into a session dataset in a workspace.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>The name of the workspace that contains the session dataset. Specify this field together
   *       with <code>datasetId</code>.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface CreateBulkImportJobResponse {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values:</p>
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
   * @public
   */
  jobStatus: JobStatus | undefined;
}

/**
 * <p>Contains the configuration of the type of anomaly detection computation model.</p>
 * @public
 */
export interface ComputationModelAnomalyDetectionConfiguration {
  /**
   * <p>Define the variable name associated with input properties, with the following format
   *         <code>$\{VariableName\}</code>.</p>
   * @public
   */
  inputProperties: string | undefined;

  /**
   * <p>Define the variable name associated with the result property, and the following format
   *         <code>$\{VariableName\}</code>.</p>
   * @public
   */
  resultProperty: string | undefined;
}

/**
 * <p>The configuration for the computation model.</p>
 * @public
 */
export interface ComputationModelConfiguration {
  /**
   * <p>The configuration for the anomaly detection type of computation model.</p>
   * @public
   */
  anomalyDetection?: ComputationModelAnomalyDetectionConfiguration | undefined;
}

/**
 * <p>Contains current status information for a computation model.</p>
 * @public
 */
export interface ComputationModelStatus {
  /**
   * <p>The current state of the computation model.</p>
   * @public
   */
  state: ComputationModelState | undefined;

  /**
   * <p>Contains the details of an IoT SiteWise error.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateComputationModelResponse {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the computation model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}</code>
   *          </p>
   * @public
   */
  computationModelArn: string | undefined;

  /**
   * <p>The status of the computation model, containing a state (CREATING after successfully
   *       calling this operation) and any error messages.</p>
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * <p>The ID of the project in which to create the dashboard.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>A friendly name for the dashboard.</p>
   * @public
   */
  dashboardName: string | undefined;

  /**
   * <p>A description for the dashboard.</p>
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * <p>The dashboard definition specified in a JSON literal.</p>
   *          <ul>
   *             <li>
   *                <p>IoT SiteWise Monitor (Classic) see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Create dashboards (CLI)</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>IoT SiteWise Monitor (AI-aware) see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-ai-dashboard-cli.html">Create dashboards (CLI)</a>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>in the <i>IoT SiteWise User Guide</i>
   *          </p>
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the dashboard. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  dashboardId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dashboard/$\{DashboardId\}</code>
   *          </p>
   * @public
   */
  dashboardArn: string | undefined;
}

/**
 * <p>Contains the session configuration for a session-type dataset.</p>
 * @public
 */
export interface SessionConfig {
  /**
   * <p>The nanosecond-precision start time of the session.</p>
   * @public
   */
  sessionStartTimestamp: TimeInNanos | undefined;

  /**
   * <p>The nanosecond-precision end time of the session.</p>
   * @public
   */
  sessionEndTimestamp: TimeInNanos | undefined;
}

/**
 * <p>Contains the configuration for a dataset.</p>
 * @public
 */
export interface DatasetConfig {
  /**
   * <p>The session configuration for a session-type dataset.</p>
   * @public
   */
  session?: SessionConfig | undefined;
}

/**
 * <p>The source details for the Kendra dataset source.</p>
 * @public
 */
export interface KendraSourceDetail {
  /**
   * <p>The <code>knowledgeBaseArn</code> details for the Kendra dataset source.</p>
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The <code>roleARN</code> details for the Kendra dataset source.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>The details of the dataset source associated with the dataset.</p>
 * @public
 */
export interface SourceDetail {
  /**
   * <p>Contains details about the Kendra dataset source.</p>
   * @public
   */
  kendra?: KendraSourceDetail | undefined;
}

/**
 * <p>The data source for the dataset.</p>
 * @public
 */
export interface DatasetSource {
  /**
   * <p>The type of data source for the dataset.</p>
   * @public
   */
  sourceType: DatasetSourceType | undefined;

  /**
   * <p>The format of the dataset source associated with the dataset.</p>
   * @public
   */
  sourceFormat: DatasetSourceFormat | undefined;

  /**
   * <p>The details of the dataset source associated with the dataset.</p>
   * @public
   */
  sourceDetail?: SourceDetail | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>A description about the dataset, and its functionality.</p>
   * @public
   */
  datasetDescription?: string | undefined;

  /**
   * <p>The type of dataset: a session dataset, a curated dataset, or a connection to an external
   *       datasource.</p>
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * <p>The configuration for the dataset.</p>
   * @public
   */
  datasetConfig?: DatasetConfig | undefined;

  /**
   * <p>The name of the workspace that contains the dataset. Required for session and curated
   *       datasets. Omit this field for datasets that connect to an external datasource.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>The metadata for the dataset, provided as key-value pairs.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The data source for the dataset.</p>
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the access policy. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your
   *         IoT SiteWise resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>The status of the dataset. This contains the state and any error messages. The state is
 *   <code>ACTIVE</code> when ready to use.</p>
 * @public
 */
export interface DatasetStatus {
  /**
   * <p>The current status of the dataset.</p>
   * @public
   */
  state: DatasetState | undefined;

  /**
   * <p>Contains the details of an IoT SiteWise error.</p>
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  datasetArn: string | undefined;

  /**
   * <p>The status of the dataset. This contains the state and any error messages.
   *   State is <code>CREATING</code> after a successfull call to this API, and any associated error message. The state is
   *   <code>ACTIVE</code> when ready to use.</p>
   * @public
   */
  datasetStatus: DatasetStatus | undefined;
}

/**
 * <p>Contains the location where error reports will be written on failure.</p>
 * @public
 */
export interface ExportErrorReportLocation {
  /**
   * <p>The S3 URI prefix for the error report.</p>
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * <p>Contains settings for trimming content to a specific time range.</p>
 * @public
 */
export interface TrimSettings {
  /**
   * <p>The start time for the trim range.</p>
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * <p>The end time for the trim range. Must be greater than startTime.</p>
   * @public
   */
  endTime: TimeInNanos | undefined;
}

/**
 * <p>A dataset to process.</p>
 * @public
 */
export interface DatasetItem {
  /**
   * <p>The unique identifier for the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The trim settings applied to all items in the dataset. When omitted, the full dataset time range is used.</p>
   * @public
   */
  trimSettings?: TrimSettings | undefined;

  /**
   * <p>The optional subset of data types to export. If omitted, all data types are exported.</p>
   * @public
   */
  exportDataTypes?: ExportDataType[] | undefined;
}

/**
 * <p>Contains the output format configuration for video processing.</p>
 * @public
 */
export interface FormatSettings {
  /**
   * <p>The target frame rate for the output.</p>
   * @public
   */
  framesPerSecond?: number | undefined;

  /**
   * <p>The target width of the output, in pixels.</p>
   * @public
   */
  widthInPixels?: number | undefined;

  /**
   * <p>The target height of the output, in pixels.</p>
   * @public
   */
  heightInPixels?: number | undefined;
}

/**
 * <p>A single timeseries item to process. Exactly one of timeSeriesId or propertyAlias must be provided.</p>
 * @public
 */
export interface TimeseriesItem {
  /**
   * <p>The unique identifier for the timeseries. Mutually exclusive with propertyAlias.</p>
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * <p>The customer-friendly alias for the timeseries. Mutually exclusive with timeSeriesId.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>The trim settings for the time range to export. Required for VIDEO and TELEMETRY data types; optional for ANNOTATION data types.</p>
   * @public
   */
  trimSettings?: TrimSettings | undefined;

  /**
   * <p>The optional format settings for the output.</p>
   * @public
   */
  formatSettings?: FormatSettings | undefined;
}

/**
 * <p>Input source for processing. Specify exactly one option.</p>
 * @public
 */
export type ProcessingInput =
  | ProcessingInput.DatasetMember
  | ProcessingInput.TimeseriesMember
  | ProcessingInput.$UnknownMember;

/**
 * @public
 */
export namespace ProcessingInput {
  /**
   * <p>List of individual timeseries items to process.</p>
   * @public
   */
  export interface TimeseriesMember {
    timeseries: TimeseriesItem[];
    dataset?: never;
    $unknown?: never;
  }

  /**
   * <p>A dataset containing multiple items to process.</p>
   * @public
   */
  export interface DatasetMember {
    timeseries?: never;
    dataset: DatasetItem;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    timeseries?: never;
    dataset?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    timeseries: (value: TimeseriesItem[]) => T;
    dataset: (value: DatasetItem) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Request to create a dataset export job.</p>
 * @public
 */
export interface CreateDatasetExportJobRequest {
  /**
   * <p>The name of the workspace in which to create the dataset export job.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * The AWS SDKs and CLI populate this automatically.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The S3 URI where output clips will be written.</p>
   * @public
   */
  destinationS3Uri: string | undefined;

  /**
   * <p>The processing input source.</p>
   * @public
   */
  input: ProcessingInput | undefined;

  /**
   * <p>The location where the error report will be written on failure.</p>
   * @public
   */
  errorReportLocation: ExportErrorReportLocation | undefined;
}

/**
 * <p>Response for create dataset export job request.</p>
 * @public
 */
export interface CreateDatasetExportJobResponse {
  /**
   * <p>The unique identifier for the dataset export job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the workspace in which the dataset export job was created.</p>
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * <p>Time range settings for extracting a specific window of video time-series data to process.</p>
 * <p>Trim settings define the time bounds for enrichment and must satisfy:</p>
 * <ul>
 * <li>Start and end times must be within the dataset's time bounds</li>
 * <li>Trim settings retrieve fully contained data segments within the specified time range</li>
 * <li>endTime must be greater than startTime</li>
 * <li>Both times should represent valid data ranges in the dataset</li>
 * </ul>
 * <p>Trim settings are required to:</p>
 * <ul>
 * <li>Prevent accidentally analyzing unbounded datasets</li>
 * <li>Ensure predictable processing time and costs</li>
 * <li>Allow focused analysis on specific time periods of interest</li>
 * </ul>
 * @public
 */
export interface EnrichmentTrimSettings {
  /**
   * <p>Start time for the video analysis time range in nanoseconds since Unix epoch (TimeInNanos format).
   * Data segments at or after this time are included in the enrichment.
   * Must be within the dataset's time bounds.</p>
   * <p>Example (JavaScript): Date.parse('2024-01-01T00:00:00Z') * 1000000
   * Example (Python): int(datetime.timestamp() * 1e9)</p>
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * <p>End time for the video analysis time range in nanoseconds since Unix epoch (TimeInNanos format).
   * Data segments at or before this time are included in the enrichment.
   * Must be greater than startTime and within the dataset's time bounds.</p>
   * @public
   */
  endTime: TimeInNanos | undefined;
}

/**
 * <p>Configuration for event detection enrichment on video time-series data.</p>
 * <p>Event detection generates embeddings from video data enabling natural language similarity search
 * on events. This allows customers to:</p>
 * <ul>
 * <li>Query video events using semantic search after enrichment completes</li>
 * <li>Find relevant video segments through natural language queries</li>
 * <li>Search across video time-series data stored in IoT SiteWise</li>
 * </ul>
 * <p>You must specify the dataset, exactly one time-series identifier (timeSeriesId OR propertyAlias),
 * and trim settings defining the video time window to process.</p>
 * @public
 */
export interface EventDetection {
  /**
   * <p>The IoT SiteWise dataset ID containing the video time-series data to analyze.
   * Query IoT SiteWise to discover available datasets in your workspace.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>Unique system identifier for the video time series to analyze.
   * Specify either timeSeriesId or propertyAlias, but not both.
   * Use this when you have the system-generated time series identifier from IoT SiteWise.</p>
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * <p>Human-readable alias for the video time series to analyze (e.g., /camera/warehouse/zone-a).
   * Specify either propertyAlias or timeSeriesId, but not both.
   * Use this when you have configured friendly aliases in IoT SiteWise for better readability.</p>
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * <p>Time range settings defining which portion of the video time-series data to process.
   * Required to ensure predictable processing time and prevent analyzing unbounded datasets.
   * Start and end times must be within the dataset's time bounds.</p>
   * @public
   */
  trimSettings: EnrichmentTrimSettings | undefined;
}

/**
 * <p>Configuration for the enrichment job defining which analysis type to perform on video time-series data.
 * Currently supports event detection enrichment. Exactly one member must be specified.</p>
 * @public
 */
export type EnrichmentJobConfiguration =
  | EnrichmentJobConfiguration.EventDetectionMember
  | EnrichmentJobConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace EnrichmentJobConfiguration {
  /**
   * <p>Event detection configuration that generates embeddings from video time-series data enabling
   * natural language similarity search on events. The service processes video data and creates
   * embeddings stored in IoT SiteWise for semantic querying.</p>
   * @public
   */
  export interface EventDetectionMember {
    eventDetection: EventDetection;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    eventDetection?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    eventDetection: (value: EventDetection) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEnrichmentJobRequest {
  /**
   * <p>The name of the IoT SiteWise workspace containing the video data to analyze.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>Configuration defining the type of enrichment analysis to perform and which video data to analyze.
   * Currently supports eventDetection for generating embeddings from video data for semantic search.</p>
   * @public
   */
  jobConfiguration: EnrichmentJobConfiguration | undefined;

  /**
   * <p>Optional unique token that makes the operation idempotent. If you submit the same request with the
   * same token within the idempotency window, the service returns the original job without creating a
   * duplicate. Use a UUID or timestamp-based token for each unique request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnrichmentJobResponse {
  /**
   * <p>Unique identifier for the enrichment job. Use this ID with DescribeEnrichmentJob to monitor
   * progress or with CancelEnrichmentJob to cancel the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>Initial status of the enrichment job, typically PENDING. The job will transition to RUNNING when
   * processing begins, then to a terminal state (COMPLETED, FAILED, TIMED_OUT, or CANCELLED).
   * Use DescribeEnrichmentJob to track status changes.</p>
   * @public
   */
  status: EnrichmentJobStatus | undefined;

  /**
   * <p>Timestamp when the enrichment job was created in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * <p>Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass,
 *       you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass
 *       group must also have permissions to upload data to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a
 *         gateway</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface Greengrass {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Greengrass group. For more information about how to find a group's
   *       ARN, see <a href="https://docs.aws.amazon.com/greengrass/v1/apireference/listgroups-get.html">ListGroups</a> and <a href="https://docs.aws.amazon.com/greengrass/v1/apireference/getgroup-get.html">GetGroup</a> in the <i>IoT Greengrass V1
   *         API Reference</i>.</p>
   * @public
   */
  groupArn: string | undefined;
}

/**
 * <p>Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2,
 *       you must deploy the IoT SiteWise Edge component to your gateway device. Your <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html">Greengrass
 *         device role</a> must use the <code>AWSIoTSiteWiseEdgeAccess</code> policy. For more
 *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html">Using IoT SiteWise at the edge</a> in the
 *         <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export interface GreengrassV2 {
  /**
   * <p>The name of the IoT thing for your IoT Greengrass V2 core device.</p>
   * @public
   */
  coreDeviceThingName: string | undefined;

  /**
   * <p>The operating system of the core device in IoT Greengrass V2. Specifying the operating system is
   *       required for MQTT-enabled, V3 gateways (<code>gatewayVersion</code>
   *             <code>3</code>) and not applicable for Classic stream, V2 gateways
   *         (<code>gatewayVersion</code>
   *             <code>2</code>).</p>
   * @public
   */
  coreDeviceOperatingSystem?: CoreDeviceOperatingSystem | undefined;
}

/**
 * <p>Contains details for a SiteWise Edge gateway that runs on a Siemens Industrial Edge
 *       Device.</p>
 * @public
 */
export interface SiemensIE {
  /**
   * <p>The name of the IoT Thing for your SiteWise Edge gateway.</p>
   * @public
   */
  iotCoreThingName: string | undefined;
}

/**
 * <p>The gateway's platform configuration. You can only specify one platform type in a
 *       gateway.</p>
 *          <p>(Legacy only) For Greengrass V1 gateways, specify the <code>greengrass</code> parameter
 *       with a valid Greengrass group ARN.</p>
 *          <p>For Greengrass V2 gateways, specify the <code>greengrassV2</code> parameter with a valid
 *       core device thing name. If creating a V3 gateway (<code>gatewayVersion=3</code>), you must
 *       also specify the <code>coreDeviceOperatingSystem</code>.</p>
 *          <p>For Siemens Industrial Edge gateways, specify the <code>siemensIE</code> parameter with a
 *       valid IoT Core thing name.</p>
 * @public
 */
export interface GatewayPlatform {
  /**
   * <p>A gateway that runs on IoT Greengrass.</p>
   * @public
   */
  greengrass?: Greengrass | undefined;

  /**
   * <p>A gateway that runs on IoT Greengrass V2.</p>
   * @public
   */
  greengrassV2?: GreengrassV2 | undefined;

  /**
   * <p>A SiteWise Edge gateway that runs on a Siemens Industrial Edge Device.</p>
   * @public
   */
  siemensIE?: SiemensIE | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * <p>A unique name for the gateway.</p>
   * @public
   */
  gatewayName: string | undefined;

  /**
   * <p>The gateway's platform. You can only specify one platform in a gateway.</p>
   * @public
   */
  gatewayPlatform: GatewayPlatform | undefined;

  /**
   * <p>The version of the gateway to create. Specify <code>3</code> to create an MQTT-enabled, V3
   *       gateway and <code>2</code> to create a Classic streams, V2 gateway. If not specified, the
   *       default is <code>2</code> (Classic streams, V2 gateway).</p>
   *          <note>
   *             <p>When creating a V3 gateway (<code>gatewayVersion=3</code>) with the
   *           <code>GreengrassV2</code> platform, you must also specify the
   *           <code>coreDeviceOperatingSystem</code> parameter.</p>
   *          </note>
   *          <p> We recommend creating an MQTT-enabled gateway for self-hosted gateways and Siemens
   *       Industrial Edge gateways. For more information on gateway versions, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateways.html">Use Amazon Web Services IoT SiteWise Edge Edge
   *         gateways</a>.</p>
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the gateway. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * <p>The ID of the gateway device. You can use this ID when you call other IoT SiteWise API operations.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:gateway/$\{GatewayId\}</code>
   *          </p>
   * @public
   */
  gatewayArn: string | undefined;
}

/**
 * <p>A single compute node in a pipeline DAG. Each compute node references a task and can declare dependencies on other nodes.</p>
 * @public
 */
export interface ComputeNode {
  /**
   * <p>The unique name for this compute node within the pipeline.</p>
   * @public
   */
  computeNodeName: string | undefined;

  /**
   * <p>The name of the task to execute for this compute node.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>Environment variables specific to this compute node. These override pipeline-level environment variables with the same key.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>A list of compute node names that must complete successfully before this node can start.</p>
   * @public
   */
  dependsOn?: string[] | undefined;
}

/**
 * <p>Request structure for CreatePipeline operation.</p>
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline to create. Must be unique within the workspace.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>A description of the pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Environment variables shared across all compute nodes in the pipeline. Individual compute nodes can override these values with their own environment variables.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The list of compute nodes that form the pipeline DAG. Each compute node references a task and can declare dependencies on other nodes.</p>
   * @public
   */
  computations: ComputeNode[] | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the pipeline. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the AWS IoT SiteWise User Guide.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * If you retry a request that completed successfully using the same client token, the server returns the
   * cached result from the original successful request without performing the operation again.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains the details of a resource error.</p>
 * @public
 */
export interface ResourceError {
  /**
   * <p>The error code.</p>
   * @public
   */
  code?: ResourceErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Contains information about the current status of a resource.</p>
 * @public
 */
export interface ResourceStatus {
  /**
   * <p>Contains associated error information, if any.</p>
   * @public
   */
  error?: ResourceError | undefined;

  /**
   * <p>The current status of the resource.</p>
   * @public
   */
  state?: ResourceState | undefined;
}

/**
 * <p>Response structure for CreatePipeline operation.</p>
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * <p>The name of the created pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The ARN of the created pipeline.</p>
   * @public
   */
  pipelineArn: string | undefined;

  /**
   * <p>The version of the newly created pipeline.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The current lifecycle status of the pipeline.</p>
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * <p>Contains an image file.</p>
 * @public
 */
export interface ImageFile {
  /**
   * <p>The image file contents, represented as a base64-encoded string. The file size must be
   *       less than 1 MB.</p>
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * <p>The file type of the image.</p>
   * @public
   */
  type: ImageFileType | undefined;
}

/**
 * <p>The configuration entry associated with the specific portal type. The <code>portalTypeConfiguration</code> is a map of the <code>portalTypeKey</code> to the
 *       <code>PortalTypeEntry</code>.</p>
 * @public
 */
export interface PortalTypeEntry {
  /**
   * <p>The array of tools associated with the specified portal type. The possible values are <code>ASSISTANT</code> and <code>DASHBOARD</code>.</p>
   * @public
   */
  portalTools?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * <p>A friendly name for the portal.</p>
   * @public
   */
  portalName: string | undefined;

  /**
   * <p>A description for the portal.</p>
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A logo image to display in the portal. Upload a square, high-resolution image. The
   *       image is displayed on a dark background.</p>
   * @public
   */
  portalLogoImageFile?: ImageFile | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of a service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the portal. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The service to use to authenticate users to the portal. Choose from the following
   *       options:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSO</code> – The portal uses IAM Identity Center to authenticate users and manage
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
   * @public
   */
  portalAuthMode?: AuthMode | undefined;

  /**
   * <p>The email address that sends alarm notifications.</p>
   *          <important>
   *             <p>If you use the <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html">IoT Events managed Lambda
   *           function</a> to manage your emails, you must <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html">verify the sender email
   *           address in Amazon SES</a>.</p>
   *          </important>
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *   You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range.
   *   For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html">Monitoring with alarms</a> in the <i>IoT SiteWise Application Guide</i>.</p>
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * <p>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * <p>The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * <p>Contains IoT SiteWise Monitor error details.</p>
 * @public
 */
export interface MonitorErrorDetails {
  /**
   * <p>The error code.</p>
   * @public
   */
  code?: MonitorErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Contains information about the current status of a portal.</p>
 * @public
 */
export interface PortalStatus {
  /**
   * <p>The current state of the portal.</p>
   * @public
   */
  state: PortalState | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   * @public
   */
  error?: MonitorErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * <p>The ID of the created portal.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:portal/$\{PortalId\}</code>
   *          </p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   * @public
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The status of the portal, which contains a state (<code>CREATING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The associated IAM Identity Center application ID, if the portal uses IAM Identity Center.</p>
   * @public
   */
  ssoApplicationId: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The ID of the portal in which to create the project.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>A friendly name for the project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A description for the project.</p>
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the project. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}</code>
   *          </p>
   * @public
   */
  projectArn: string | undefined;
}

/**
 * <p>Configuration for a container task, including the container image, IAM role, and compute settings.</p>
 * @public
 */
export interface ContainerTaskConfiguration {
  /**
   * <p>The Amazon ECR image URI for the task container.</p>
   * @public
   */
  ecrUri: string | undefined;

  /**
   * <p>The ARN of the IAM role that grants the containerized workload permissions to access AWS resources.</p>
   * @public
   */
  taskExecutionRole: string | undefined;

  /**
   * <p>The processing type for compute resources.</p>
   * @public
   */
  processingType: ProcessingType | undefined;

  /**
   * <p>The processing unit allocation that determines the vCPU, memory, and GPU resources.</p>
   * @public
   */
  processingUnit: ProcessingUnit | undefined;

  /**
   * <p>The command to execute in the container.</p>
   * @public
   */
  command?: string[] | undefined;

  /**
   * <p>The timeout in seconds for task execution. Default: 3600 (1 hour).</p>
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * <p>Environment variables passed to the container at runtime.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;
}

/**
 * <p>The task execution configuration. Specify a <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html">containerTaskConfiguration</a> for a custom container workload.</p>
 * @public
 */
export type TaskConfiguration =
  | TaskConfiguration.ContainerTaskConfigurationMember
  | TaskConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace TaskConfiguration {
  /**
   * <p>Configuration for running a custom container image on managed compute.</p>
   * @public
   */
  export interface ContainerTaskConfigurationMember {
    containerTaskConfiguration: ContainerTaskConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    containerTaskConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    containerTaskConfiguration: (value: ContainerTaskConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Request structure for CreateTask operation.</p>
 * @public
 */
export interface CreateTaskRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the task to create. Must be unique within the workspace.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>A description of the task.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The task execution configuration. Specify a <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html">containerTaskConfiguration</a> for custom container workloads.</p>
   * @public
   */
  taskConfiguration: TaskConfiguration | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the task. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your AWS IoT SiteWise resources</a> in the AWS IoT SiteWise User Guide.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   * If you retry a request that completed successfully using the same client token, the server returns the
   * cached result from the original successful request without performing the operation again.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Response structure for CreateTask operation.</p>
 * @public
 */
export interface CreateTaskResponse {
  /**
   * <p>The name of the created task.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>The ARN of the created task.</p>
   * @public
   */
  taskArn: string | undefined;

  /**
   * <p>The version of the newly created task.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The current lifecycle status of the task.</p>
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * <p>Contains the encryption configuration for a workspace.</p>
 * @public
 */
export interface WorkspaceEncryptionConfiguration {
  /**
   * <p>The encryption scheme for the workspace. <code>SITEWISE_DEFAULT_ENCRYPTION</code>
   *       encrypts data with the IoT SiteWise default key. <code>KMS_BASED_ENCRYPTION</code> encrypts data
   *       with the customer managed KMS key identified by <code>kmsKeyId</code>.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The customer managed KMS key used when <code>encryptionType</code> is
   *       <code>KMS_BASED_ENCRYPTION</code>. Accepts a key ID, key ARN, or key alias. Required for
   *       <code>KMS_BASED_ENCRYPTION</code>; must be omitted for
   *       <code>SITEWISE_DEFAULT_ENCRYPTION</code>. After a workspace's customer managed key
   *       configuration becomes active, the key can't be changed.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * <p>The name of the workspace to create.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>A description for the workspace.</p>
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * <p>The encryption configuration for the workspace.</p>
   * @public
   */
  encryptionConfiguration: WorkspaceEncryptionConfiguration | undefined;

  /**
   * <p>A list of key-value pairs that contain metadata for the workspace. For more information,
   *       see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html">Tagging your IoT SiteWise
   *         resources</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is
   *       idempotent. If you retry a request that completed successfully using the same client token,
   *       the retry succeeds without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>Contains the details of an error associated with a workspace.</p>
 * @public
 */
export interface WorkspaceErrorDetails {
  /**
   * <p>The error code.</p>
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Contains information about the current status of a workspace.</p>
 * @public
 */
export interface WorkspaceStatus {
  /**
   * <p>The current state of the workspace.</p>
   * @public
   */
  state: WorkspaceState | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   * @public
   */
  error?: WorkspaceErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The ARN of the workspace.</p>
   * @public
   */
  workspaceArn: string | undefined;

  /**
   * <p>The status of the workspace, which is <code>CREATING</code> when the operation
   *       returns.</p>
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyRequest {
  /**
   * <p>The ID of the access policy to be deleted.</p>
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyResponse {}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>Name of the workspace to associate with the underlying Application</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>ID of the Application to delete</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteAssetRequest {
  /**
   * <p>The ID of the asset to delete. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetResponse {
  /**
   * <p>The ID of the asset.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The status of the asset, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelRequest {
  /**
   * <p>The ID of the asset model to delete. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The delete request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the delete request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the delete operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelResponse {
  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * <p>The status of the asset model, which contains a state (<code>DELETING</code> after
   *       successfully calling this operation) and any error message.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelCompositeModelRequest {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The expected current entity tag (ETag) for the asset model’s latest or active version (specified using <code>matchForVersionType</code>).
   *     The delete request is rejected if the tag does not match the latest or active version's current entity tag.
   *     See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * <p>Accepts <b>*</b> to reject the delete request if an active version
   *     (specified using <code>matchForVersionType</code> as <code>ACTIVE</code>) already exists for the asset model.</p>
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * <p>Specifies the asset model version type (<code>LATEST</code> or <code>ACTIVE</code>) used in
   *   conjunction with <code>If-Match</code> or <code>If-None-Match</code> headers to determine the target ETag for the delete operation.</p>
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelCompositeModelResponse {
  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelInterfaceRelationshipRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else
   *       externalId: followed by the external ID.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model. This can be either the actual ID in UUID format, or
   *       else externalId: followed by the external ID.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the
   *       request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelInterfaceRelationshipResponse {
  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>The ARN of the asset model, which has the following format.
   *       <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteComputationModelRequest {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputationModelResponse {
  /**
   * <p>The status of the computation model. It contains a state (DELETING after successfully
   *       calling this operation) and any error messages.</p>
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * <p>The ID of the dashboard to delete.</p>
   * @public
   */
  dashboardId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardResponse {}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * <p>The status of the dataset. This contains the state and any error messages.
   *   State is <code>DELETING</code> after a successfull call to this API, and any associated error message.</p>
   * @public
   */
  datasetStatus: DatasetStatus | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * <p>The ID of the gateway to delete.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * <p>Request structure for DeletePipeline operation.</p>
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline to delete.</p>
   * @public
   */
  pipelineName: string | undefined;
}

/**
 * <p>Response structure for DeletePipeline operation.</p>
 * @public
 */
export interface DeletePipelineResponse {
  /**
   * <p>The current lifecycle status of the pipeline.</p>
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * <p>The ID of the portal to delete.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalResponse {
  /**
   * <p>The status of the portal, which contains a state (<code>DELETING</code> after successfully
   *       calling this operation) and any error message.</p>
   * @public
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {}

/**
 * <p>Request structure for DeleteTask operation.</p>
 * @public
 */
export interface DeleteTaskRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the task to delete.</p>
   * @public
   */
  taskName: string | undefined;
}

/**
 * <p>Response structure for DeleteTask operation.</p>
 * @public
 */
export interface DeleteTaskResponse {
  /**
   * <p>The current lifecycle status of the task.</p>
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteTimeSeriesRequest {
  /**
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId?: string | undefined;

  /**
   * <p>The ID of the asset property. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId?: string | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * <p>The name of the workspace to delete.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure that the request is
   *       idempotent. If you retry a request that completed successfully using the same client token,
   *       the retry succeeds without performing any further actions.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * <p>The status of the workspace after the deletion request, which is <code>DELETING</code> when the operation returns.</p>
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPolicyRequest {
  /**
   * <p>The ID of the access policy.</p>
   * @public
   */
  accessPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPolicyResponse {
  /**
   * <p>The ID of the access policy.</p>
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the access policy, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:access-policy/$\{AccessPolicyId\}</code>
   *          </p>
   * @public
   */
  accessPolicyArn: string | undefined;

  /**
   * <p>The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy
   *       applies.</p>
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * <p>The IoT SiteWise Monitor resource (portal or project) to which this access policy provides
   *       access.</p>
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * <p>The access policy permission. Note that a project <code>ADMINISTRATOR</code> is also known
   *       as a project owner.</p>
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * <p>The date the access policy was created, in Unix epoch time.</p>
   * @public
   */
  accessPolicyCreationDate: Date | undefined;

  /**
   * <p>The date the access policy was last updated, in Unix epoch time.</p>
   * @public
   */
  accessPolicyLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeActionRequest {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionResponse {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId: string | undefined;

  /**
   * <p>The resource the action will be taken on.</p>
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * <p>The ID of the action definition.</p>
   * @public
   */
  actionDefinitionId: string | undefined;

  /**
   * <p>The JSON payload of the action.</p>
   * @public
   */
  actionPayload: ActionPayload | undefined;

  /**
   * <p>The time the action was executed.</p>
   * @public
   */
  executionTime: Date | undefined;

  /**
   * <p>The detailed resource this action resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * <p>Name of the workspace to associate with the underlying Application</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>ID of the Application</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * <p>ARN of the application</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>Timestamp when the application was created</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>DNS subdomain for the application</p>
   * @public
   */
  dnsSubdomain: string | undefined;

  /**
   * <p>Description of the application</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Unique identifier of the application</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Identity Center Application ARN associated with this application</p>
   * @public
   */
  idcApplicationArn: string | undefined;

  /**
   * <p>Name of the application</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Current status of the application</p>
   * @public
   */
  status: ApplicationStatus | undefined;

  /**
   * <p>Timestamp when the application was last updated</p>
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * <p>Name of the workspace this application belongs to</p>
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p> Whether or not to exclude asset properties from the response. </p>
   * @public
   */
  excludeProperties?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAssetResponse {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The external ID of the asset, if any.</p>
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}</code>
   *          </p>
   * @public
   */
  assetArn: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset model that was used to create the asset.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The list of asset properties for the asset.</p>
   *          <p>This object doesn't include properties that you define in composite models. You can find
   *       composite model properties in the <code>assetCompositeModels</code> object.</p>
   * @public
   */
  assetProperties: AssetProperty[] | undefined;

  /**
   * <p>A list of asset hierarchies that each contain a <code>hierarchyId</code>. A hierarchy specifies allowed parent/child asset relationships.</p>
   * @public
   */
  assetHierarchies: AssetHierarchy[] | undefined;

  /**
   * <p>The composite models for the asset.</p>
   * @public
   */
  assetCompositeModels?: AssetCompositeModel[] | undefined;

  /**
   * <p>The date the asset was created, in Unix epoch time.</p>
   * @public
   */
  assetCreationDate: Date | undefined;

  /**
   * <p>The date the asset was last updated, in Unix epoch time.</p>
   * @public
   */
  assetLastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset, which contains a state and any error message.</p>
   * @public
   */
  assetStatus: AssetStatus | undefined;

  /**
   * <p>A description for the asset.</p>
   * @public
   */
  assetDescription?: string | undefined;

  /**
   * <p>The list of the immediate child custom composite model summaries for the asset.</p>
   * @public
   */
  assetCompositeModelSummaries?: AssetCompositeModelSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetCompositeModelRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetCompositeModelId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetCompositeModelResponse {
  /**
   * <p>The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other
   *       IoT SiteWise APIs.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset.</p>
   * @public
   */
  assetCompositeModelId: string | undefined;

  /**
   * <p>An external ID to assign to the asset model.</p>
   *          <p>If the composite model is a component-based composite model, or one nested inside a
   *       component model, you can only set the external ID using
   *         <code>UpdateAssetModelCompositeModel</code> and specifying the derived ID of the model or
   *       property from the created model it's a part of.</p>
   * @public
   */
  assetCompositeModelExternalId?: string | undefined;

  /**
   * <p>The path to the composite model listing the parent composite models.</p>
   * @public
   */
  assetCompositeModelPath: AssetCompositeModelPathSegment[] | undefined;

  /**
   * <p>The unique, friendly name for the composite model.</p>
   * @public
   */
  assetCompositeModelName: string | undefined;

  /**
   * <p>A description for the composite model.</p>
   * @public
   */
  assetCompositeModelDescription: string | undefined;

  /**
   * <p>The composite model type. Valid values are <code>AWS/ALARM</code>, <code>CUSTOM</code>, or
   *         <code> AWS/L4E_ANOMALY</code>.</p>
   * @public
   */
  assetCompositeModelType: string | undefined;

  /**
   * <p>The property definitions of the composite model that was used to create the asset.</p>
   * @public
   */
  assetCompositeModelProperties: AssetProperty[] | undefined;

  /**
   * <p>The list of composite model summaries.</p>
   * @public
   */
  assetCompositeModelSummaries: AssetCompositeModelSummary[] | undefined;

  /**
   * <p>The available actions for a composite model on this asset.</p>
   * @public
   */
  actionDefinitions?: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p> Whether or not to exclude asset model properties from the response. </p>
   * @public
   */
  excludeProperties?: boolean | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * <p>Contains information about the relationship between an asset model and an interface asset
 *       model that is applied to it.</p>
 * @public
 */
export interface InterfaceRelationship {
  /**
   * <p>The ID of the asset model that has the interface applied to it.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelResponse {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The external ID of the asset model, if any.</p>
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the asset model, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}</code>
   *          </p>
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * <p>The name of the asset model.</p>
   * @public
   */
  assetModelName: string | undefined;

  /**
   * <p>The type of asset model.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>ASSET_MODEL</b> – (default) An asset model that you can use to create assets.
   *    Can't be included as a component in another asset model.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>COMPONENT_MODEL</b> – A reusable component that you can include in the composite
   *    models of other asset models. You can't create assets directly from this type of asset model. </p>
   *             </li>
   *          </ul>
   * @public
   */
  assetModelType?: AssetModelType | undefined;

  /**
   * <p>The asset model's description.</p>
   * @public
   */
  assetModelDescription: string | undefined;

  /**
   * <p>The list of asset properties for the asset model.</p>
   *          <p>This object doesn't include properties that you define in composite models. You can find
   *       composite model properties in the <code>assetModelCompositeModels</code> object.</p>
   * @public
   */
  assetModelProperties: AssetModelProperty[] | undefined;

  /**
   * <p>A list of asset model hierarchies that each contain a <code>childAssetModelId</code> and a
   *         <code>hierarchyId</code> (named <code>id</code>). A hierarchy specifies allowed parent/child
   *       asset relationships for an asset model.</p>
   * @public
   */
  assetModelHierarchies: AssetModelHierarchy[] | undefined;

  /**
   * <p>The list of built-in composite models for the asset model, such as those with those of
   *       type <code>AWS/ALARMS</code>.</p>
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModel[] | undefined;

  /**
   * <p>The list of the immediate child custom composite model summaries for the asset
   *       model.</p>
   * @public
   */
  assetModelCompositeModelSummaries?: AssetModelCompositeModelSummary[] | undefined;

  /**
   * <p>The date the asset model was created, in Unix epoch time.</p>
   * @public
   */
  assetModelCreationDate: Date | undefined;

  /**
   * <p>The date the asset model was last updated, in Unix epoch time.</p>
   * @public
   */
  assetModelLastUpdateDate: Date | undefined;

  /**
   * <p>The current status of the asset model, which contains a state and any error
   *       message.</p>
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * <p>The version of the asset model. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;

  /**
   * <p>A list of interface details that describe the interfaces implemented by this asset model,
   *       including interface asset model IDs and property mappings.</p>
   * @public
   */
  interfaceDetails?: InterfaceRelationship[] | undefined;

  /**
   * <p>The entity tag (ETag) is a hash of the retrieved version of the asset model. It's used to make
   *     concurrent updates safely to the resource. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html">Optimistic locking for asset model writes</a>
   *     in the <i>IoT SiteWise User Guide</i>.
   *     </p>
   *          <p>See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html"> Optimistic locking for asset
   *         model writes</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  eTag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelCompositeModelRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>The version alias that specifies the latest or active version of the asset model.
   *           The details are returned in the response. The default value is <code>LATEST</code>. See <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html">
   *           Asset model versions</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * <p>Represents a composite model that composed an asset model of type
 *         <code>COMPONENT_MODEL</code>.</p>
 * @public
 */
export interface CompositionRelationshipItem {
  /**
   * <p>The ID of the component.</p>
   * @public
   */
  id?: string | undefined;
}

/**
 * <p>Metadata for the composition relationship established by using
 *         <code>composedAssetModelId</code> in <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html">
 *                <code>CreateAssetModelCompositeModel</code>
 *             </a>.</p>
 * @public
 */
export interface CompositionDetails {
  /**
   * <p>An array detailing the composition relationship for this composite model.</p>
   * @public
   */
  compositionRelationship?: CompositionRelationshipItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelCompositeModelResponse {
  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * <p>The external ID of a composite model on this asset model.</p>
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * <p>The path to the composite model listing the parent composite models.</p>
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * <p>The unique, friendly name for the composite model.</p>
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * <p>The description for the composite model.</p>
   * @public
   */
  assetModelCompositeModelDescription: string | undefined;

  /**
   * <p>The composite model type. Valid values are <code>AWS/ALARM</code>, <code>CUSTOM</code>, or
   *         <code> AWS/L4E_ANOMALY</code>.</p>
   * @public
   */
  assetModelCompositeModelType: string | undefined;

  /**
   * <p>The property definitions of the composite model.</p>
   * @public
   */
  assetModelCompositeModelProperties: AssetModelProperty[] | undefined;

  /**
   * <p>Metadata for the composition relationship established by using
   *         <code>composedAssetModelId</code> in <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html">
   *                <code>CreateAssetModelCompositeModel</code>
   *             </a>. For instance, an array detailing the
   *       path of the composition relationship for this composite model.</p>
   * @public
   */
  compositionDetails?: CompositionDetails | undefined;

  /**
   * <p>The list of composite model summaries for the composite model.</p>
   * @public
   */
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[] | undefined;

  /**
   * <p>The available actions for a composite model on this asset model.</p>
   * @public
   */
  actionDefinitions?: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelInterfaceRelationshipRequest {
  /**
   * <p>The ID of the asset model. This can be either the actual ID in UUID format, or else
   *       externalId: followed by the external ID.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model. This can be either the actual ID in UUID format, or
   *       else externalId: followed by the external ID.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;
}

/**
 * <p>Maps a hierarchy from an interface asset model to a hierarchy in the asset model where the
 *       interface is applied.</p>
 * @public
 */
export interface HierarchyMapping {
  /**
   * <p>The ID of the hierarchy in the asset model where the interface is applied.</p>
   * @public
   */
  assetModelHierarchyId: string | undefined;

  /**
   * <p>The ID of the hierarchy in the interface asset model.</p>
   * @public
   */
  interfaceAssetModelHierarchyId: string | undefined;
}

/**
 * <p>Maps a property from an interface asset model to a property in the asset model where the
 *       interface is applied.</p>
 * @public
 */
export interface PropertyMapping {
  /**
   * <p>The ID of the property in the asset model where the interface is applied.</p>
   * @public
   */
  assetModelPropertyId: string | undefined;

  /**
   * <p>The ID of the property in the interface asset model.</p>
   * @public
   */
  interfaceAssetModelPropertyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelInterfaceRelationshipResponse {
  /**
   * <p>The ID of the asset model.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The ID of the interface asset model.</p>
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * <p>A list of property mappings between the interface asset model and the asset model where
   *       the interface is applied.</p>
   * @public
   */
  propertyMappings: PropertyMapping[] | undefined;

  /**
   * <p>A list of hierarchy mappings between the interface asset model and the asset model where
   *       the interface is applied.</p>
   * @public
   */
  hierarchyMappings: HierarchyMapping[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetPropertyRequest {
  /**
   * <p>The ID of the asset. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of the asset property. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  propertyId: string | undefined;
}

/**
 * <p>Contains asset property information.</p>
 * @public
 */
export interface Property {
  /**
   * <p>The ID of the asset property.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The external ID of the asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;

  /**
   * <p>The name of the property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The alias that identifies the property, such as an OPC-UA server data stream path
   *         (for example, <code>/company/windfarm/3/turbine/7/temperature</code>). For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html">Mapping industrial data streams to asset properties</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The asset property's notification topic and state. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html">UpdateAssetProperty</a>.</p>
   * @public
   */
  notification?: PropertyNotification | undefined;

  /**
   * <p>The property data type.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The unit (such as <code>Newtons</code> or <code>RPM</code>) of the asset property.</p>
   * @public
   */
  unit?: string | undefined;

  /**
   * <p>The property type (see <code>PropertyType</code>). A property contains one type.</p>
   * @public
   */
  type?: PropertyType | undefined;

  /**
   * <p>The structured path to the property from the root of the asset.</p>
   * @public
   */
  path?: AssetPropertyPathSegment[] | undefined;
}

/**
 * <p>Contains information about a composite model property on an asset.</p>
 * @public
 */
export interface CompositeModelProperty {
  /**
   * <p>The name of the property.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The type of the composite model that defines this property.</p>
   * @public
   */
  type: string | undefined;

  /**
   * <p>Contains asset property information.</p>
   * @public
   */
  assetProperty: Property | undefined;

  /**
   * <p> The ID of the composite model that contains the property. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The external ID of the composite model that contains the property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  externalId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetPropertyResponse {
  /**
   * <p>The ID of the asset, in UUID format.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The external ID of the asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * <p>The name of the asset.</p>
   * @public
   */
  assetName: string | undefined;

  /**
   * <p>The ID of the asset model, in UUID format.</p>
   * @public
   */
  assetModelId: string | undefined;

  /**
   * <p>The asset property's definition, alias, and notification state.</p>
   *          <p>This response includes this object for normal asset properties. If you describe an asset
   *       property in a composite model, this response includes the asset property information in
   *         <code>compositeModel</code>.</p>
   * @public
   */
  assetProperty?: Property | undefined;

  /**
   * <p>The composite model that declares this asset property, if this asset property exists in a
   *       composite model.</p>
   * @public
   */
  compositeModel?: CompositeModelProperty | undefined;
}

/**
 * @public
 */
export interface DescribeBulkImportJobRequest {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBulkImportJobResponse {
  /**
   * <p>The ID of the job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The unique name that helps identify the job request.</p>
   * @public
   */
  jobName: string | undefined;

  /**
   * <p>The status of the bulk import job can be one of following values:</p>
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
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the IAM role that allows IoT SiteWise to read Amazon S3 data.</p>
   * @public
   */
  jobRoleArn: string | undefined;

  /**
   * <p>The files in the specified Amazon S3 bucket that contain your data. You can specify up to 100 files for each bulk import job. Each file supports the following size limits:</p>
   *          <ul>
   *             <li>
   *                <p>Parquet files – Up to 256 MiB.</p>
   *             </li>
   *             <li>
   *                <p>Other file formats – Up to 5 GiB.</p>
   *             </li>
   *          </ul>
   * @public
   */
  files: File[] | undefined;

  /**
   * <p>The Amazon S3 destination where errors associated with the job creation request are saved.</p>
   * @public
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * <p>Contains the configuration information of a job, such as the file format used to save data in Amazon S3.</p>
   * @public
   */
  jobConfiguration?: JobConfiguration | undefined;

  /**
   * <p>The date the job was created, in Unix epoch TIME.</p>
   * @public
   */
  jobCreationDate: Date | undefined;

  /**
   * <p>The date the job was last updated, in Unix epoch time.</p>
   * @public
   */
  jobLastUpdateDate: Date | undefined;

  /**
   * <p>If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are
   *    computed. If set to false, historical data is ingested into IoT SiteWise as is.</p>
   * @public
   */
  adaptiveIngestion?: boolean | undefined;

  /**
   * <p>If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.</p>
   * @public
   */
  deleteFilesAfterImport?: boolean | undefined;

  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId?: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelRequest {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The version of the computation model.</p>
   * @public
   */
  computationModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelExecutionSummaryRequest {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The type of the resolved resource.</p>
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * <p>The ID of the resolved resource.</p>
   * @public
   */
  resolveToResourceId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelExecutionSummaryResponse {
  /**
   * <p>The ID of the computation model.</p>
   * @public
   */
  computationModelId: string | undefined;

  /**
   * <p>The detailed resource this execution summary resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * <p>Contains the execution summary of the computation model.</p>
   * @public
   */
  computationModelExecutionSummary: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  dashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * <p>The ID of the dashboard.</p>
   * @public
   */
  dashboardId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the dashboard, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dashboard/$\{DashboardId\}</code>
   *          </p>
   * @public
   */
  dashboardArn: string | undefined;

  /**
   * <p>The name of the dashboard.</p>
   * @public
   */
  dashboardName: string | undefined;

  /**
   * <p>The ID of the project that the dashboard is in.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The dashboard's description.</p>
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * <p>The dashboard's definition JSON literal. For detailed information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html">Creating
   *         dashboards (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * <p>The date the dashboard was created, in Unix epoch time.</p>
   * @public
   */
  dashboardCreationDate: Date | undefined;

  /**
   * <p>The date the dashboard was last updated, in Unix epoch time.</p>
   * @public
   */
  dashboardLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>The version of the dataset.</p>
   * @public
   */
  datasetVersion?: string | undefined;
}

/**
 * <p>Contains enrichment status information for a specific data type in a dataset.</p>
 * @public
 */
export interface DatasetEnrichmentEntry {
  /**
   * <p>The enrichment status of the data type in the dataset.</p>
   * @public
   */
  status: DatasetEnrichmentStatus | undefined;

  /**
   * <p>The date the data was last enriched, in Unix epoch time.</p>
   * @public
   */
  lastEnrichedAt?: Date | undefined;
}

/**
 * <p>Contains the enrichment status information for a dataset across data types.</p>
 * @public
 */
export interface DatasetEnrichment {
  /**
   * <p>The enrichment status for video data in the dataset.</p>
   * @public
   */
  video?: DatasetEnrichmentEntry | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>The ID of the dataset.</p>
   * @public
   */
  datasetId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html">ARN</a> of the dataset.
   *   The format is <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}</code>.</p>
   * @public
   */
  datasetArn: string | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  datasetName: string | undefined;

  /**
   * <p>A description about the dataset, and its functionality.</p>
   * @public
   */
  datasetDescription: string | undefined;

  /**
   * <p>The type of dataset: a session dataset, a curated dataset, or a connection to an external
   *       datasource.</p>
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * <p>The configuration for the dataset.</p>
   * @public
   */
  datasetConfig?: DatasetConfig | undefined;

  /**
   * <p>The name of the workspace that contains the dataset.</p>
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * <p>The metadata for the dataset.</p>
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * <p>The data source for the dataset.</p>
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * <p>The status of the dataset. This contains the state and any error messages.
   *   State is <code>CREATING</code> after a successfull call to this API, and any associated error message. The state is
   *   <code>ACTIVE</code> when ready to use.</p>
   * @public
   */
  datasetStatus: DatasetStatus | undefined;

  /**
   * <p>The dataset creation date, in Unix epoch time.</p>
   * @public
   */
  datasetCreationDate: Date | undefined;

  /**
   * <p>The date the dataset was last updated, in Unix epoch time.</p>
   * @public
   */
  datasetLastUpdateDate: Date | undefined;

  /**
   * <p>The version of the dataset.</p>
   * @public
   */
  datasetVersion?: string | undefined;

  /**
   * <p>The enrichment status of the dataset.</p>
   * @public
   */
  enrichmentStatus?: DatasetEnrichment | undefined;
}

/**
 * <p>Request to describe a dataset export job.</p>
 * @public
 */
export interface DescribeDatasetExportJobRequest {
  /**
   * <p>The name of the workspace that contains the dataset export job.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier for the dataset export job.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * <p>Response for describe dataset export job request.</p>
 * @public
 */
export interface DescribeDatasetExportJobResponse {
  /**
   * <p>The unique identifier for the dataset export job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the workspace that contains the dataset export job.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The current status of the dataset export job.</p>
   * @public
   */
  status: DatasetExportJobStatus | undefined;

  /**
   * <p>The timestamp when the job started processing.</p>
   * @public
   */
  startedAt: Date | undefined;

  /**
   * <p>The timestamp when the job completed, or null if the job is still running.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The S3 URI where output clips are written.</p>
   * @public
   */
  destinationS3Uri: string | undefined;

  /**
   * <p>The location where the error report will be written on failure.</p>
   * @public
   */
  errorReportLocation: ExportErrorReportLocation | undefined;

  /**
   * <p>The processing input that was provided in the CreateDatasetExportJob request.</p>
   * @public
   */
  input: ProcessingInput | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultEncryptionConfigurationRequest {}

/**
 * <p>Contains the details of an IoT SiteWise configuration error.</p>
 * @public
 */
export interface ConfigurationErrorDetails {
  /**
   * <p>The error code.</p>
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * <p>The error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Contains current status information for the configuration.</p>
 * @public
 */
export interface ConfigurationStatus {
  /**
   * <p>The current state of the configuration.</p>
   * @public
   */
  state: ConfigurationState | undefined;

  /**
   * <p>Contains associated error information, if any.</p>
   * @public
   */
  error?: ConfigurationErrorDetails | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultEncryptionConfigurationResponse {
  /**
   * <p>The type of encryption used for the encryption configuration.</p>
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * <p>The key ARN of the customer managed key used for KMS encryption if you use
   *         <code>KMS_BASED_ENCRYPTION</code>.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The status of the account configuration. This contains the
   *       <code>ConfigurationState</code>. If there's an error, it also contains the
   *         <code>ErrorDetails</code>.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEnrichmentJobRequest {
  /**
   * <p>The name of the IoT SiteWise workspace containing the enrichment job.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier of the enrichment job to retrieve. This is the jobId returned by CreateEnrichmentJob.</p>
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEnrichmentJobResponse {
  /**
   * <p>The unique identifier of the enrichment job.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>Current status of the enrichment job. Possible values:</p>
   * <ul>
   * <li>PENDING: Job is waiting to start processing</li>
   * <li>RUNNING: Job is actively processing video data</li>
   * <li>COMPLETED: Job finished successfully; embeddings available in IoT SiteWise</li>
   * <li>FAILED: Job encountered an error; see failureMessage for details</li>
   * <li>TIMED_OUT: Job exceeded maximum processing time limit</li>
   * <li>CANCELLED: Job was cancelled by user request</li>
   * </ul>
   * @public
   */
  status: EnrichmentJobStatus | undefined;

  /**
   * <p>The name of the IoT SiteWise workspace containing the job.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The type of enrichment job, derived from the job configuration. Currently EVENT_DETECTION is the only supported type.</p>
   * @public
   */
  jobType: JobType | undefined;

  /**
   * <p>The complete job configuration as originally submitted, including the analysis type and parameters.
   * For event detection jobs, this includes the dataset ID, time series identifier, and trim settings
   * defining the analysis time range.</p>
   * @public
   */
  jobConfiguration: EnrichmentJobConfiguration | undefined;

  /**
   * <p>Timestamp when the enrichment job was created in ISO 8601 format.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>Timestamp when the job status was last updated in ISO 8601 format. Useful for tracking recent activity.</p>
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * <p>Timestamp when the job completed successfully in ISO 8601 format. Only present if status is COMPLETED.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>Timestamp when the job was cancelled in ISO 8601 format. Only present if status is CANCELLED.</p>
   * @public
   */
  cancelledAt?: Date | undefined;

  /**
   * <p>Human-readable error message explaining why the job failed. Only present if status is FAILED.
   * Use this information to diagnose configuration issues, permission problems, or data processing errors.</p>
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionRequest {
  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * <p>The status of the execution.</p>
 * @public
 */
export interface ExecutionStatus {
  /**
   * <p>The current state of the computation model.</p>
   * @public
   */
  state: ExecutionState | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionResponse {
  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId: string | undefined;

  /**
   * <p>The type of action exectued.</p>
   * @public
   */
  actionType?: string | undefined;

  /**
   * <p>The resource the action will be taken on. This can include asset-based resources and
   *       computation model resources.</p>
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * <p>The version of the target resource.</p>
   * @public
   */
  targetResourceVersion: string | undefined;

  /**
   * <p>The detailed resource this execution resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * <p>The time the process started.</p>
   * @public
   */
  executionStartTime: Date | undefined;

  /**
   * <p>The time the process ended.</p>
   * @public
   */
  executionEndTime?: Date | undefined;

  /**
   * <p>The status of the execution process.</p>
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * <p>The result of the execution.</p>
   * @public
   */
  executionResult?: Record<string, string> | undefined;

  /**
   * <p>Provides detailed information about the execution of your anomaly detection models. This
   *       includes model metrics and training timestamps for both training and inference actions.</p>
   *          <ul>
   *             <li>
   *                <p> The training action (Amazon Web Services/ANOMALY_DETECTION_TRAINING), includes performance metrics
   *           that help you compare different versions of your anomaly detection models. These metrics
   *           provide insights into the model's performance during the training process. </p>
   *             </li>
   *             <li>
   *                <p> The inference action (Amazon Web Services/ANOMALY_DETECTION_INFERENCE), includes information about
   *           the results of executing your anomaly detection models. This helps you understand the
   *           output of your models and assess their performance. </p>
   *             </li>
   *          </ul>
   * @public
   */
  executionDetails?: Record<string, string> | undefined;

  /**
   * <p>Entity version used for the execution.</p>
   * @public
   */
  executionEntityVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * <p>The ID of the gateway device.</p>
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * <p>Contains a summary of a gateway capability configuration.</p>
 * @public
 */
export interface GatewayCapabilitySummary {
  /**
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC UA
   *       sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:3</code>.</p>
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The synchronization status of the gateway capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> - The gateway is running with the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> - The gateway hasn't received the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> - The gateway rejected the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> - The gateway hasn't reported its sync status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_APPLICABLE</code> - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.</p>
   *             </li>
   *          </ul>
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * <p>The ID of the gateway device.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The name of the gateway.</p>
   * @public
   */
  gatewayName: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the gateway, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:gateway/$\{GatewayId\}</code>
   *          </p>
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * <p>The gateway's platform.</p>
   * @public
   */
  gatewayPlatform?: GatewayPlatform | undefined;

  /**
   * <p>The version of the gateway. A value of <code>3</code> indicates an MQTT-enabled, V3
   *       gateway, while <code>2</code> indicates a Classic streams, V2 gateway.</p>
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * <p>A list of gateway capability summaries that each contain a namespace and status. Each
   *       gateway capability defines data sources for the gateway. To retrieve a capability
   *       configuration's definition, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html">DescribeGatewayCapabilityConfiguration</a>.</p>
   * @public
   */
  gatewayCapabilitySummaries: GatewayCapabilitySummary[] | undefined;

  /**
   * <p>The date the gateway was created, in Unix epoch time.</p>
   * @public
   */
  creationDate: Date | undefined;

  /**
   * <p>The date the gateway was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayCapabilityConfigurationRequest {
  /**
   * <p>The ID of the gateway that defines the capability configuration.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the capability configuration.
   *       For example, if you configure OPC UA
   *       sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace
   *         <code>iotsitewise:opcuacollector:3</code>.</p>
   * @public
   */
  capabilityNamespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayCapabilityConfigurationResponse {
  /**
   * <p>The ID of the gateway that defines the capability configuration.</p>
   * @public
   */
  gatewayId: string | undefined;

  /**
   * <p>The namespace of the gateway capability.</p>
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * <p>The JSON document that defines the gateway capability's configuration. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli">Configuring data sources (CLI)</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  capabilityConfiguration: string | undefined;

  /**
   * <p>The synchronization status of the gateway capability configuration. The sync status can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_SYNC</code> - The gateway is running with the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>OUT_OF_SYNC</code> - The gateway hasn't received the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SYNC_FAILED</code> - The gateway rejected the latest configuration.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code> - The gateway hasn't reported its sync status.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NOT_APPLICABLE</code> - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.</p>
   *             </li>
   *          </ul>
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * <p>Contains logging options.</p>
 * @public
 */
export interface LoggingOptions {
  /**
   * <p>The IoT SiteWise logging verbosity level.</p>
   * @public
   */
  level: LoggingLevel | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * <p>The current logging options.</p>
   * @public
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * <p>Request structure for DescribePipeline operation.</p>
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The version number of the pipeline to retrieve. If not specified, returns the latest version.</p>
   * @public
   */
  pipelineVersion?: string | undefined;
}

/**
 * <p>Response structure for DescribePipeline operation.</p>
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * <p>A unique name of the pipeline within the workspace.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The description of the pipeline.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The ARN of the pipeline.</p>
   * @public
   */
  pipelineArn: string | undefined;

  /**
   * <p>The version of the pipeline.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The environment variables shared across all compute nodes in the pipeline.</p>
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * <p>The list of compute nodes that form the pipeline DAG.</p>
   * @public
   */
  computations: ComputeNode[] | undefined;

  /**
   * <p>The current lifecycle status of the pipeline.</p>
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * <p>The time the pipeline was created, in Unix epoch time.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time the pipeline was last updated, in Unix epoch time.</p>
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * <p>Request structure for DescribePipelineExecution operation.</p>
 * @public
 */
export interface DescribePipelineExecutionRequest {
  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The unique identifier of the pipeline execution.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of compute nodes to return per request. This is an upper bound; the actual number of results may be less. Default: 50.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Contains a detailed error entry for granular troubleshooting of pipeline failures.</p>
 * @public
 */
export interface DetailedPipelineError {
  /**
   * <p>The error code.</p>
   * @public
   */
  code: DetailedPipelineErrorCode | undefined;

  /**
   * <p>The associated error message.</p>
   * @public
   */
  message: string | undefined;
}

/**
 * <p>Additional information about a compute node that has failed.</p>
 * @public
 */
export interface ComputeNodeExecutionStateDetails {
  /**
   * <p>Classification of the failure.</p>
   * @public
   */
  code: ComputeNodeErrorCode | undefined;

  /**
   * <p>Human-readable description of why the compute node failed.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Detailed error entries to help diagnose the failure.</p>
   * @public
   */
  details?: DetailedPipelineError[] | undefined;
}

/**
 * <p>Current execution status of a compute node within a pipeline execution.</p>
 * @public
 */
export interface ComputeNodeExecutionStatus {
  /**
   * <p>Current state of the compute node execution.</p>
   * @public
   */
  state: ComputeNodeExecutionState | undefined;

  /**
   * <p>Additional information about the compute node's failure. Populated when the compute node has failed.</p>
   * @public
   */
  stateDetails?: ComputeNodeExecutionStateDetails | undefined;
}

/**
 * <p>Contains detailed execution information for a compute node within a pipeline execution.</p>
 * @public
 */
export interface ComputeNodeExecutionDetails {
  /**
   * <p>The name of the compute node.</p>
   * @public
   */
  computeNodeName: string | undefined;

  /**
   * <p>The name of the task executed for this compute node.</p>
   * @public
   */
  taskName: string | undefined;

  /**
   * <p>The ARN of the task.</p>
   * @public
   */
  taskArn: string | undefined;

  /**
   * <p>The task version that executed for this compute node.</p>
   * @public
   */
  taskVersion: string | undefined;

  /**
   * <p>A list of compute node names that this node depends on.</p>
   * @public
   */
  dependsOn: string[] | undefined;

  /**
   * <p>The current execution status of the compute node.</p>
   * @public
   */
  status: ComputeNodeExecutionStatus | undefined;

  /**
   * <p>The time the compute node execution started, in Unix epoch time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time the compute node execution completed, in Unix epoch time.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The fully resolved environment variables used for this compute node execution.</p>
   * @public
   */
  executionEnvironmentVariables?: Record<string, string> | undefined;
}

/**
 * <p>Environment variables provided as input for a pipeline execution.</p>
 * @public
 */
export interface ExecutionEnvironmentVariables {
  /**
   * <p>Global environment variables that apply to all compute nodes in the pipeline execution.</p>
   * @public
   */
  global?: Record<string, string> | undefined;

  /**
   * <p>Per-compute-node environment variable overrides. Each entry maps a compute node name to its environment variable overrides.</p>
   * @public
   */
  computeNodes?: Record<string, Record<string, string>> | undefined;
}

/**
 * <p>Additional information about the current execution status. Populated when the execution has terminated.</p>
 * @public
 */
export interface PipelineExecutionStateDetails {
  /**
   * <p>Classification of the failure. Present when the execution failed.</p>
   * @public
   */
  code?: PipelineErrorCode | undefined;

  /**
   * <p>Human-readable description of the outcome. For a failed execution, this describes why it failed; for a cancelled execution, this is the reason you supplied when calling CancelPipelineExecution.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Per-step error entries to help diagnose a failed execution. Present when the execution failed.</p>
   * @public
   */
  details?: DetailedPipelineError[] | undefined;
}

/**
 * <p>Current execution status of a pipeline.</p>
 * @public
 */
export interface PipelineExecutionStatus {
  /**
   * <p>Current state of the pipeline execution.</p>
   * @public
   */
  state: PipelineExecutionState | undefined;

  /**
   * <p>Additional information about the execution outcome. Populated when the execution has terminated (failed or cancelled).</p>
   * @public
   */
  stateDetails?: PipelineExecutionStateDetails | undefined;
}

/**
 * <p>Response structure for DescribePipelineExecution operation.</p>
 * @public
 */
export interface DescribePipelineExecutionResponse {
  /**
   * <p>The unique identifier of the pipeline execution.</p>
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * <p>The name of the pipeline.</p>
   * @public
   */
  pipelineName: string | undefined;

  /**
   * <p>The name of the workspace.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The pipeline version this execution ran against.</p>
   * @public
   */
  pipelineVersion: string | undefined;

  /**
   * <p>The current execution status of the pipeline.</p>
   * @public
   */
  status: PipelineExecutionStatus | undefined;

  /**
   * <p>The time the pipeline execution started, in Unix epoch time.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The time the pipeline execution completed, in Unix epoch time.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The environment variables provided as input for the pipeline execution.</p>
   * @public
   */
  requestEnvironmentVariables: ExecutionEnvironmentVariables | undefined;

  /**
   * <p>Scheduling priority for the execution. When not specified, defaults to lowest priority.</p>
   * @public
   */
  executionPriority?: number | undefined;

  /**
   * <p>A list of compute node execution details within this pipeline execution.</p>
   * @public
   */
  computeNodeExecutionDetails: ComputeNodeExecutionDetails[] | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePortalRequest {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  portalId: string | undefined;
}

/**
 * <p>Contains an image that is uploaded to IoT SiteWise and available at a URL.</p>
 * @public
 */
export interface ImageLocation {
  /**
   * <p>The ID of the image.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The URL where the image is available. The URL is valid for 15 minutes so that you can view
   *       and download the image</p>
   * @public
   */
  url: string | undefined;
}

/**
 * @public
 */
export interface DescribePortalResponse {
  /**
   * <p>The ID of the portal.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the portal, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:portal/$\{PortalId\}</code>
   *          </p>
   * @public
   */
  portalArn: string | undefined;

  /**
   * <p>The name of the portal.</p>
   * @public
   */
  portalName: string | undefined;

  /**
   * <p>The portal's description.</p>
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * <p>The IAM Identity Center application generated client ID (used with IAM Identity Center API operations). IoT SiteWise includes
   *         <code>portalClientId</code> for only portals that use IAM Identity Center to authenticate users.</p>
   * @public
   */
  portalClientId: string | undefined;

  /**
   * <p>The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that
   *       use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the
   *       IoT SiteWise console to get a URL that you can use to access the portal.</p>
   * @public
   */
  portalStartUrl: string | undefined;

  /**
   * <p>The Amazon Web Services administrator's contact email address.</p>
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * <p>The current status of the portal, which contains a state and any error message.</p>
   * @public
   */
  portalStatus: PortalStatus | undefined;

  /**
   * <p>The date the portal was created, in Unix epoch time.</p>
   * @public
   */
  portalCreationDate: Date | undefined;

  /**
   * <p>The date the portal was last updated, in Unix epoch time.</p>
   * @public
   */
  portalLastUpdateDate: Date | undefined;

  /**
   * <p>The portal's logo image, which is available at a URL.</p>
   * @public
   */
  portalLogoImageLocation?: ImageLocation | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the service role that allows the portal's users to access your IoT SiteWise
   *       resources on your behalf. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html">Using service roles for IoT SiteWise Monitor</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>The service to use to authenticate users to the portal.</p>
   * @public
   */
  portalAuthMode?: AuthMode | undefined;

  /**
   * <p>The email address that sends alarm notifications.</p>
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * <p>Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.</p>
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * <p>Define the type of portal. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * <p>The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is <code>SITEWISE_PORTAL_V1</code>. The value for IoT SiteWise Monitor (AI-aware) is <code>SITEWISE_PORTAL_V2</code>.</p>
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * <p>The ID of the project.</p>
   * @public
   */
  projectId: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the project, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}</code>
   *          </p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the portal that the project is in.</p>
   * @public
   */
  portalId: string | undefined;

  /**
   * <p>The project's description.</p>
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * <p>The date the project was created, in Unix epoch time.</p>
   * @public
   */
  projectCreationDate: Date | undefined;

  /**
   * <p>The date the project was last updated, in Unix epoch time.</p>
   * @public
   */
  projectLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeQueryRequest {
  /**
   * <p>The name of the workspace associated with the query.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;
}

/**
 * <p>Contains statistics about a completed query execution.</p>
 * @public
 */
export interface QueryStatistics {
  /**
   * <p>The total number of rows returned by the query.</p>
   * @public
   */
  rowCount: number | undefined;

  /**
   * <p>The total number of bytes scanned during query execution.</p>
   * @public
   */
  bytesScanned: number | undefined;

  /**
   * <p>The total query execution time, in milliseconds.</p>
   * @public
   */
  executionTimeInMillis: number | undefined;
}

/**
 * <p>Contains the response for the DescribeQuery operation.</p>
 * @public
 */
export interface DescribeQueryResponse {
  /**
   * <p>The unique identifier for the query execution.</p>
   * @public
   */
  queryId: string | undefined;

  /**
   * <p>The current query status.</p>
   * @public
   */
  status: QueryStatus | undefined;

  /**
   * <p>The date and time when the query was submitted, in Unix epoch time.</p>
   * @public
   */
  submittedAt: Date | undefined;

  /**
   * <p>The date and time when the query reached a terminal state, in Unix epoch time. This field is present when the query status is COMPLETED, FAILED, or CANCELED.</p>
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * <p>The query execution statistics. This field is present when the query status is COMPLETED.</p>
   * @public
   */
  statistics?: QueryStatistics | undefined;

  /**
   * <p>A human-readable error description. This field is present when the query status is FAILED.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * <p>Input for the DescribeSearch operation.</p>
 * @public
 */
export interface DescribeSearchRequest {
  /**
   * <p>The name of the workspace the search belongs to.</p>
   * @public
   */
  workspaceName: string | undefined;

  /**
   * <p>The identifier of the search to describe.</p>
   * @public
   */
  searchId: string | undefined;
}
