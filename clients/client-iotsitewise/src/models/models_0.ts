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
  MountStorageType,
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
  StorageClass,
  TimeOrdering,
  WorkspaceState,
} from "./enums";

/**
 * Contains information for a group identity in an access policy.
 *
 * @public
 */
export interface GroupIdentity {
  /**
   * The IAM Identity Center ID of the group.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Contains information about an Identity and Access Management role. For more information, see [IAM roles](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) in the *IAM User Guide*.
 *
 * @public
 */
export interface IAMRoleIdentity {
  /**
   * The ARN of the IAM role. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Contains information about an Identity and Access Management user.
 *
 * @public
 */
export interface IAMUserIdentity {
  /**
   * The ARN of the IAM user. For more information, see [IAM ARNs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_identifiers.html) in the *IAM User Guide*.
   *
   * > **Note:** If you delete the IAM user, access policies that contain this identity include an empty `arn`. You can delete the access policy for the IAM user that no longer exists.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * Contains information for a user identity in an access policy.
 *
 * @public
 */
export interface UserIdentity {
  /**
   * The IAM Identity Center ID of the user.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Contains an identity that can access an IoT SiteWise Monitor resource.
 *
 * > **Note:** Currently, you can't use Amazon Web Services API operations to retrieve IAM Identity Center identity IDs. You can find the IAM Identity Center identity IDs in the URL of user and group pages in the [IAM Identity Center console](https://console.aws.amazon.com/singlesignon).
 *
 * @public
 */
export interface Identity {
  /**
   * An IAM Identity Center user identity.
   *
   * @public
   */
  user?: UserIdentity | undefined;

  /**
   * An IAM Identity Center group identity.
   *
   * @public
   */
  group?: GroupIdentity | undefined;

  /**
   * An IAM user identity.
   *
   * @public
   */
  iamUser?: IAMUserIdentity | undefined;

  /**
   * An IAM role identity.
   *
   * @public
   */
  iamRole?: IAMRoleIdentity | undefined;
}

/**
 * Identifies an IoT SiteWise Monitor portal.
 *
 * @public
 */
export interface PortalResource {
  /**
   * The ID of the portal.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Identifies a specific IoT SiteWise Monitor project.
 *
 * @public
 */
export interface ProjectResource {
  /**
   * The ID of the project.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Contains an IoT SiteWise Monitor resource ID for a portal or project.
 *
 * @public
 */
export interface Resource {
  /**
   * A portal resource.
   *
   * @public
   */
  portal?: PortalResource | undefined;

  /**
   * A project resource.
   *
   * @public
   */
  project?: ProjectResource | undefined;
}

/**
 * Contains an access policy that defines an identity's access to an IoT SiteWise Monitor resource.
 *
 * @public
 */
export interface AccessPolicySummary {
  /**
   * The ID of the access policy.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The identity (an IAM Identity Center user, an IAM Identity Center group, or an IAM user).
   *
   * @public
   */
  identity: Identity | undefined;

  /**
   * The IoT SiteWise Monitor resource (a portal or project).
   *
   * @public
   */
  resource: Resource | undefined;

  /**
   * The permissions for the access policy. Note that a project `ADMINISTRATOR` is also known as a project owner.
   *
   * @public
   */
  permission: Permission | undefined;

  /**
   * The date the access policy was created, in Unix epoch time.
   *
   * @public
   */
  creationDate?: Date | undefined;

  /**
   * The date the access policy was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate?: Date | undefined;
}

/**
 * Contains a definition for an action.
 *
 * @public
 */
export interface ActionDefinition {
  /**
   * The ID of the action definition.
   *
   * @public
   */
  actionDefinitionId: string | undefined;

  /**
   * The name of the action definition.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * The type of the action definition.
   *
   * @public
   */
  actionType: string | undefined;
}

/**
 * The JSON payload of the action.
 *
 * @public
 */
export interface ActionPayload {
  /**
   * The payload of the action in a JSON string.
   *
   * @public
   */
  stringValue: string | undefined;
}

/**
 * The detailed resource this execution summary resolves to.
 *
 * @public
 */
export interface ResolveTo {
  /**
   * The ID of the asset that the resource resolves to.
   *
   * @public
   */
  assetId: string | undefined;
}

/**
 * The resource the action will be taken on. This can include asset-based resources and computation model resources.
 *
 * @public
 */
export interface TargetResource {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId?: string | undefined;
}

/**
 * Contains the summary of the actions, including information about where the action resolves to.
 *
 * @public
 */
export interface ActionSummary {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId?: string | undefined;

  /**
   * The ID of the action definition.
   *
   * @public
   */
  actionDefinitionId?: string | undefined;

  /**
   * The resource the action will be taken on.
   *
   * @public
   */
  targetResource?: TargetResource | undefined;

  /**
   * The detailed resource this action resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * Contains the (pre-calculated) aggregate values for an asset property.
 *
 * @public
 */
export interface Aggregates {
  /**
   * The average (mean) value of the time series over a time interval window.
   *
   * @public
   */
  average?: number | undefined;

  /**
   * The count of data points in the time series over a time interval window.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The maximum value of the time series over a time interval window.
   *
   * @public
   */
  maximum?: number | undefined;

  /**
   * The minimum value of the time series over a time interval window.
   *
   * @public
   */
  minimum?: number | undefined;

  /**
   * The sum of the time series over a time interval window.
   *
   * @public
   */
  sum?: number | undefined;

  /**
   * The standard deviation of the time series over a time interval window.
   *
   * @public
   */
  standardDeviation?: number | undefined;
}

/**
 * Contains aggregated asset property values (for example, average, minimum, and maximum).
 *
 * @public
 */
export interface AggregatedValue {
  /**
   * The date the aggregating computations occurred, in Unix epoch time.
   *
   * @public
   */
  timestamp: Date | undefined;

  /**
   * The quality of the aggregated data.
   *
   * @public
   */
  quality?: Quality | undefined;

  /**
   * The value of the aggregates.
   *
   * @public
   */
  value: Aggregates | undefined;
}

/**
 * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see [Monitoring with alarms](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html) in the *IoT SiteWise Application Guide*.
 *
 * @public
 */
export interface Alarms {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IAM role that allows the alarm to perform actions and access Amazon Web Services resources and services, such as IoT Events.
   *
   * @public
   */
  alarmRoleArn: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Lambda function that manages alarm notifications. For more information, see [Managing alarm notifications](https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html) in the *IoT Events Developer Guide*.
   *
   * @public
   */
  notificationLambdaArn?: string | undefined;
}

/**
 * The annotation format configuration for bulk import files.
 *
 * @public
 */
export interface Annotation {}

/**
 * Summary of an application for list operations
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * ARN of the application
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Unique identifier of the application
   *
   * @public
   */
  id: string | undefined;

  /**
   * Name of the application
   *
   * @public
   */
  name: string | undefined;

  /**
   * Current status of the application
   *
   * @public
   */
  status: ApplicationStatus | undefined;

  /**
   * Timestamp when the application was created
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Name of the workspace this application belongs to
   *
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * A filter used to match data bindings based on a specific asset. This filter identifies all computation models referencing a particular asset in their data bindings.
 *
 * @public
 */
export interface AssetBindingValueFilter {
  /**
   * The ID of the asset to filter data bindings by. Only data bindings referencing this specific asset are matched.
   *
   * @public
   */
  assetId: string | undefined;
}

/**
 * Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see [Interacting with other services](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface PropertyNotification {
  /**
   * The MQTT topic to which IoT SiteWise publishes property value update notifications.
   *
   * @public
   */
  topic: string | undefined;

  /**
   * The current notification state.
   *
   * @public
   */
  state: PropertyNotificationState | undefined;
}

/**
 * Represents one level between a property and the root of the asset.
 *
 * @public
 */
export interface AssetPropertyPathSegment {
  /**
   * The ID of the path segment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the path segment.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains asset property information.
 *
 * @public
 */
export interface AssetProperty {
  /**
   * The ID of the asset property.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of the asset property. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The asset property's notification topic and state. For more information, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
   *
   * @public
   */
  notification?: PropertyNotification | undefined;

  /**
   * The data type of the asset property.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The data type of the structure for this property. This parameter exists on properties that have the `STRUCT` data type.
   *
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * The unit (such as `Newtons` or `RPM`) of the asset property.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The structured path to the property from the root of the asset.
   *
   * @public
   */
  path?: AssetPropertyPathSegment[] | undefined;
}

/**
 * Contains information about a composite model in an asset. This object contains the asset's properties that you define in the composite model.
 *
 * @public
 */
export interface AssetCompositeModel {
  /**
   * The name of the composite model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the composite model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the composite model. For alarm composite models, this type is `AWS/ALARM`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The asset properties that this composite model defines.
   *
   * @public
   */
  properties: AssetProperty[] | undefined;

  /**
   * The ID of the asset composite model.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID of the asset composite model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Represents one level between a composite model and the root of the asset.
 *
 * @public
 */
export interface AssetCompositeModelPathSegment {
  /**
   * The ID of the path segment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the path segment.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains a summary of the composite model for a specific asset.
 *
 * @public
 */
export interface AssetCompositeModelSummary {
  /**
   * The ID of the composite model that this summary describes.
   *
   * @public
   */
  id: string | undefined;

  /**
   * An external ID to assign to the asset model.
   *
   * If the composite model is a derived composite model, or one nested inside a component model, you can only set the external ID using `UpdateAssetModelCompositeModel` and specifying the derived ID of the model or property from the created model it's a part of.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the composite model that this summary describes.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of asset model.
   *
   * - **ASSET_MODEL** – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
   * - **COMPONENT_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
   *
   * @public
   */
  type: string | undefined;

  /**
   * A description of the composite model that this summary describes.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The path that includes all the components of the asset model for the asset.
   *
   * @public
   */
  path: AssetCompositeModelPathSegment[] | undefined;
}

/**
 * Contains error details for the requested associate project asset action.
 *
 * @public
 */
export interface AssetErrorDetails {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  code: AssetErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Describes an asset hierarchy that contains a hierarchy's name and ID.
 *
 * @public
 */
export interface AssetHierarchy {
  /**
   * The ID of the hierarchy. This ID is a `hierarchyId`.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID of the hierarchy, if it has one. When you update an asset hierarchy, you may assign an external ID if it doesn't already have one. You can't change the external ID of an asset hierarchy that already has one. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The hierarchy name provided in the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) API operation.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Contains information about a parent asset and a child asset that are related through an asset hierarchy.
 *
 * @public
 */
export interface AssetHierarchyInfo {
  /**
   * The ID of the parent asset in this asset relationship.
   *
   * @public
   */
  parentAssetId?: string | undefined;

  /**
   * The ID of the child asset in this asset relationship.
   *
   * @public
   */
  childAssetId?: string | undefined;
}

/**
 * A filter used to match data bindings based on a specific asset model. This filter identifies all computation models referencing a particular asset model in their data bindings.
 *
 * @public
 */
export interface AssetModelBindingValueFilter {
  /**
   * The ID of the asset model to filter data bindings by. Only data bindings referemncing this specific asset model are matched.
   *
   * @public
   */
  assetModelId: string | undefined;
}

/**
 * Represents one level between a property and the root of the asset model.
 *
 * @public
 */
export interface AssetModelPropertyPathSegment {
  /**
   * The ID of the path segment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the path segment.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains an asset attribute property. For more information, see [Attributes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#attributes) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface Attribute {
  /**
   * The default value of the asset model property attribute. All assets that you create from the asset model contain this attribute value. You can update an attribute's value after you create an asset. For more information, see [Updating attribute values](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-attribute-values.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  defaultValue?: string | undefined;
}

/**
 * The forwarding configuration for a given property.
 *
 * @public
 */
export interface ForwardingConfig {
  /**
   * The forwarding state for the given property.
   *
   * @public
   */
  state: ForwardingConfigState | undefined;
}

/**
 * The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.
 *
 * @public
 */
export interface MeasurementProcessingConfig {
  /**
   * The forwarding configuration for the given measurement property.
   *
   * @public
   */
  forwardingConfig: ForwardingConfig | undefined;
}

/**
 * Contains an asset measurement property. For more information, see [Measurements](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#measurements) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface Measurement {
  /**
   * The processing configuration for the given measurement property. You can configure measurements to be kept at the edge or forwarded to the Amazon Web Services Cloud. By default, measurements are forwarded to the cloud.
   *
   * @public
   */
  processingConfig?: MeasurementProcessingConfig | undefined;
}

/**
 * The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.
 *
 * @public
 */
export interface MetricProcessingConfig {
  /**
   * The compute location for the given metric property.
   *
   * @public
   */
  computeLocation: ComputeLocation | undefined;
}

/**
 * Identifies a property value used in an expression.
 *
 * @public
 */
export interface VariableValue {
  /**
   * The ID of the property to use as the variable. You can use the property `name` if it's from the same asset model. If the property has an external ID, you can specify `externalId:` followed by the external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The ID of the hierarchy to query for the property ID. You can use the hierarchy's name instead of the hierarchy's ID. If the hierarchy has an external ID, you can specify `externalId:` followed by the external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * You use a hierarchy ID instead of a model ID because you can have several hierarchies using the same model and therefore the same `propertyId`. For example, you might have separately grouped assets that come from the same asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  hierarchyId?: string | undefined;

  /**
   * The path of the property.
   *
   * @public
   */
  propertyPath?: AssetModelPropertyPathSegment[] | undefined;
}

/**
 * Contains expression variable information.
 *
 * @public
 */
export interface ExpressionVariable {
  /**
   * The friendly name of the variable to be used in the expression.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The variable that identifies an asset property from which to use values.
   *
   * @public
   */
  value: VariableValue | undefined;
}

/**
 * Contains a tumbling window, which is a repeating fixed-sized, non-overlapping, and contiguous time window. You can use this window in metrics to aggregate data from properties and other assets.
 *
 * You can use `m`, `h`, `d`, and `w` when you specify an interval or offset. Note that `m` represents minutes, `h` represents hours, `d` represents days, and `w` represents weeks. You can also use `s` to represent seconds in `offset`.
 *
 * The `interval` and `offset` parameters support the [ISO 8601 format](https://en.wikipedia.org/wiki/ISO_8601). For example, `PT5S` represents 5 seconds, `PT5M` represents 5 minutes, and `PT5H` represents 5 hours.
 *
 * @public
 */
export interface TumblingWindow {
  /**
   * The time interval for the tumbling window. The interval time must be between 1 minute and 1 week.
   *
   * IoT SiteWise computes the `1w` interval the end of Sunday at midnight each week (UTC), the `1d` interval at the end of each day at midnight (UTC), the `1h` interval at the end of each hour, and so on.
   *
   * When IoT SiteWise aggregates data points for metric computations, the start of each interval is exclusive and the end of each interval is inclusive. IoT SiteWise places the computed data point at the end of the interval.
   *
   * @public
   */
  interval: string | undefined;

  /**
   * The offset for the tumbling window. The `offset` parameter accepts the following:
   *
   * - The offset time.
   *
   *   For example, if you specify `18h` for `offset` and `1d` for `interval`, IoT SiteWise aggregates data in one of the following ways:
   *
   *   - If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.
   *   - If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.
   * - The ISO 8601 format.
   *
   *   For example, if you specify `PT18H` for `offset` and `1d` for `interval`, IoT SiteWise aggregates data in one of the following ways:
   *
   *   - If you create the metric before or at 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) on the day when you create the metric.
   *   - If you create the metric after 6 PM (UTC), you get the first aggregation result at 6 PM (UTC) the next day.
   * - The 24-hour clock.
   *
   *   For example, if you specify `00:03:00` for `offset`, `5m` for `interval`, and you create the metric at 2 PM (UTC), you get the first aggregation result at 2:03 PM (UTC). You get the second aggregation result at 2:08 PM (UTC).
   * - The offset time zone.
   *
   *   For example, if you specify `2021-07-23T18:00-08` for `offset` and `1d` for `interval`, IoT SiteWise aggregates data in one of the following ways:
   *
   *   - If you create the metric before or at 6 PM (PST), you get the first aggregation result at 6 PM (PST) on the day when you create the metric.
   *   - If you create the metric after 6 PM (PST), you get the first aggregation result at 6 PM (PST) the next day.
   *
   * @public
   */
  offset?: string | undefined;
}

/**
 * Contains a time interval window used for data aggregate computations (for example, average, sum, count, and so on).
 *
 * @public
 */
export interface MetricWindow {
  /**
   * The tumbling time interval window.
   *
   * @public
   */
  tumbling?: TumblingWindow | undefined;
}

/**
 * Contains an asset metric property. With metrics, you can calculate aggregate functions, such as an average, maximum, or minimum, as specified through an expression. A metric maps several values to a single value (such as a sum).
 *
 * The maximum number of dependent/cascading variables used in any one metric calculation is 10. Therefore, a *root* metric can have up to 10 cascading metrics in its computational dependency tree. Additionally, a metric can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE`.
 *
 * For more information, see [Metrics](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#metrics) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface Metric {
  /**
   * The mathematical expression that defines the metric aggregation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
   *
   * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  expression?: string | undefined;

  /**
   * The list of variables used in the expression.
   *
   * @public
   */
  variables?: ExpressionVariable[] | undefined;

  /**
   * The window (time interval) over which IoT SiteWise computes the metric's aggregation expression. IoT SiteWise computes one data point per `window`.
   *
   * @public
   */
  window: MetricWindow | undefined;

  /**
   * The processing configuration for the given metric property. You can configure metrics to be computed at the edge or in the Amazon Web Services Cloud. By default, metrics are forwarded to the cloud.
   *
   * @public
   */
  processingConfig?: MetricProcessingConfig | undefined;
}

/**
 * The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
 *
 * @public
 */
export interface TransformProcessingConfig {
  /**
   * The compute location for the given transform property.
   *
   * @public
   */
  computeLocation: ComputeLocation | undefined;

  /**
   * The forwarding configuration for a given property.
   *
   * @public
   */
  forwardingConfig?: ForwardingConfig | undefined;
}

/**
 * Contains an asset transform property. A transform is a one-to-one mapping of a property's data points from one form to another. For example, you can use a transform to convert a Celsius data stream to Fahrenheit by applying the transformation expression to each data point of the Celsius stream. A transform can only have a data type of `DOUBLE` and consume properties with data types of `INTEGER` or `DOUBLE`.
 *
 * For more information, see [Transforms](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html#transforms) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface Transform {
  /**
   * The mathematical expression that defines the transformation function. You can specify up to 10 variables per expression. You can specify up to 10 functions per expression.
   *
   * For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  expression: string | undefined;

  /**
   * The list of variables used in the expression.
   *
   * @public
   */
  variables: ExpressionVariable[] | undefined;

  /**
   * The processing configuration for the given transform property. You can configure transforms to be kept at the edge or forwarded to the Amazon Web Services Cloud. You can also configure transforms to be computed at the edge or in the cloud.
   *
   * @public
   */
  processingConfig?: TransformProcessingConfig | undefined;
}

/**
 * Contains a property type, which can be one of `attribute`, `measurement`, `metric`, or `transform`.
 *
 * @public
 */
export interface PropertyType {
  /**
   * Specifies an asset attribute property. An attribute generally contains static information, such as the serial number of an [IIoT](https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications) wind turbine.
   *
   * @public
   */
  attribute?: Attribute | undefined;

  /**
   * Specifies an asset measurement property. A measurement represents a device's raw sensor data stream, such as timestamped temperature values or timestamped power values.
   *
   * @public
   */
  measurement?: Measurement | undefined;

  /**
   * Specifies an asset transform property. A transform contains a mathematical expression that maps a property's data points from one form to another, such as a unit conversion from Celsius to Fahrenheit.
   *
   * @public
   */
  transform?: Transform | undefined;

  /**
   * Specifies an asset metric property. A metric contains a mathematical expression that uses aggregate functions to process all input data points over a time interval and output a single data point, such as to calculate the average hourly temperature.
   *
   * @public
   */
  metric?: Metric | undefined;
}

/**
 * Contains information about an asset model property.
 *
 * @public
 */
export interface AssetModelProperty {
  /**
   * The ID of the asset model property.
   *
   * - If you are callling [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) to create a *new* property: You can specify its ID here, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   * - If you are calling UpdateAssetModel to modify an *existing* property: This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID (if any) provided in the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) operation. You can assign an external ID by specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html). However, you can't change the external ID if one is already assigned. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the asset model property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the asset model property.
   *
   * The `VIDEO`, `ANNOTATION`, and `JSON` data types aren't supported for asset model properties. These types are used only by time series that store data for datasets in a workspace.
   *
   * If you specify `STRUCT`, you must also specify `dataTypeSpec` to identify the type of the structure for this property.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The data type of the structure for this property. This parameter exists on properties that have the `STRUCT` data type.
   *
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * The unit of the asset model property, such as `Newtons` or `RPM`.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The property type (see `PropertyType`).
   *
   * @public
   */
  type: PropertyType | undefined;

  /**
   * The structured path to the property from the root of the asset model.
   *
   * @public
   */
  path?: AssetModelPropertyPathSegment[] | undefined;
}

/**
 * Contains information about a composite model in an asset model. This object contains the asset property definitions that you define in the composite model.
 *
 * @public
 */
export interface AssetModelCompositeModel {
  /**
   * The name of the composite model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the composite model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the composite model. For alarm composite models, this type is `AWS/ALARM`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The asset property definitions for this composite model.
   *
   * @public
   */
  properties?: AssetModelProperty[] | undefined;

  /**
   * The ID of the asset model composite model.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID of the asset model composite model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;
}

/**
 * Contains an asset model property definition. This property definition is applied to all assets created from the asset model.
 *
 * @public
 */
export interface AssetModelPropertyDefinition {
  /**
   * The ID to assign to the asset model property, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An external ID to assign to the property definition. The external ID must be unique among property definitions within this asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the property definition.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the property definition.
   *
   * The `VIDEO`, `ANNOTATION`, and `JSON` data types aren't supported for asset model properties. These types are used only by time series that store data for datasets in a workspace.
   *
   * If you specify `STRUCT`, you must also specify `dataTypeSpec` to identify the type of the structure for this property.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The data type of the structure for this property. This parameter is required on properties that have the `STRUCT` data type.
   *
   * The options for this parameter depend on the type of the composite model in which you define this property. Use `AWS/ALARM_STATE` for alarm state in alarm composite models.
   *
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * The unit of the property definition, such as `Newtons` or `RPM`.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The property definition type (see `PropertyType`). You can only specify one type in a property definition.
   *
   * @public
   */
  type: PropertyType | undefined;
}

/**
 * Contains a composite model definition in an asset model. This composite model definition is applied to all assets created from the asset model.
 *
 * @public
 */
export interface AssetModelCompositeModelDefinition {
  /**
   * The ID to assign to the composite model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An external ID to assign to the composite model. The external ID must be unique among composite models within this asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the composite model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the composite model.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The type of the composite model. For alarm composite models, this type is `AWS/ALARM`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The asset property definitions for this composite model.
   *
   * @public
   */
  properties?: AssetModelPropertyDefinition[] | undefined;
}

/**
 * Represents one level between a composite model and the root of the asset model.
 *
 * @public
 */
export interface AssetModelCompositeModelPathSegment {
  /**
   * The ID of the path segment.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the path segment.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Contains a summary of the composite model.
 *
 * @public
 */
export interface AssetModelCompositeModelSummary {
  /**
   * The ID of the composite model that this summary describes..
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of a composite model on this asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the composite model that this summary describes..
   *
   * @public
   */
  name: string | undefined;

  /**
   * The composite model type. Valid values are `AWS/ALARM`, `CUSTOM`, or `AWS/L4E_ANOMALY`.
   *
   * @public
   */
  type: string | undefined;

  /**
   * The description of the composite model that this summary describes..
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The path that includes all the pieces that make up the composite model.
   *
   * @public
   */
  path?: AssetModelCompositeModelPathSegment[] | undefined;
}

/**
 * Describes an asset hierarchy that contains a hierarchy's name, ID, and child asset model ID that specifies the type of asset that can be in this hierarchy.
 *
 * @public
 */
export interface AssetModelHierarchy {
  /**
   * The ID of the asset model hierarchy. This ID is a `hierarchyId`.
   *
   * - If you are callling [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) to create a *new* hierarchy: You can specify its ID here, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   * - If you are calling UpdateAssetModel to modify an *existing* hierarchy: This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID (if any) provided in the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) operation. You can assign an external ID by specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html). However, you can't change the external ID if one is already assigned. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the asset model hierarchy that you specify by using the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) API operation.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the asset model, in UUID format. All assets in this hierarchy must be instances of the `childAssetModelId` asset model. IoT SiteWise will always return the actual asset model ID for this value. However, when you are specifying this value as part of a call to [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html), you may provide either the asset model ID or else `externalId:` followed by the asset model's external ID. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  childAssetModelId: string | undefined;
}

/**
 * Contains an asset model hierarchy used in asset model creation. An asset model hierarchy determines the kind (or type) of asset that can belong to a hierarchy.
 *
 * @public
 */
export interface AssetModelHierarchyDefinition {
  /**
   * The ID to assign to the asset model hierarchy, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * An external ID to assign to the asset model hierarchy. The external ID must be unique among asset model hierarchies within this asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the asset model hierarchy definition (as specified in the [CreateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModel.html) or [UpdateAssetModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetModel.html) API operation).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of an asset model for this hierarchy. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  childAssetModelId: string | undefined;
}

/**
 * Contains information about an `assetModelProperty` binding value.
 *
 * @public
 */
export interface AssetModelPropertyBindingValue {
  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the asset model property used in data binding value.
   *
   * @public
   */
  propertyId: string | undefined;
}

/**
 * A filter used to match data bindings based on a specific asset model property. This filter identifies all computation models that reference a particular property of an asset model in their data bindings.
 *
 * @public
 */
export interface AssetModelPropertyBindingValueFilter {
  /**
   * The ID of the asset model containing the filter property. This identifies the specific asset model that contains the property of interest.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the property within the asset model to filter by. Only data bindings referencing this specific property of the specified asset model are matched.
   *
   * @public
   */
  propertyId: string | undefined;
}

/**
 * Contains summary information about an interface that a property belongs to.
 *
 * @public
 */
export interface InterfaceSummary {
  /**
   * The ID of the interface asset model that contains this property.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * The ID of the property in the interface asset model that corresponds to this property.
   *
   * @public
   */
  interfaceAssetModelPropertyId: string | undefined;
}

/**
 * Contains a summary of a property associated with a model. This includes information about which interfaces the property belongs to, if any.
 *
 * @public
 */
export interface AssetModelPropertySummary {
  /**
   * The ID of the property.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID of the property. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The data type of the property.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The data type of the structure for this property. This parameter exists on properties that have the `STRUCT` data type.
   *
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * The unit (such as `Newtons` or `RPM`) of the property.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * Contains a property type, which can be one of `attribute`, `measurement`, `metric`, or `transform`.
   *
   * @public
   */
  type: PropertyType | undefined;

  /**
   * The ID of the composite model that contains the asset model property.
   *
   * @public
   */
  assetModelCompositeModelId?: string | undefined;

  /**
   * The structured path to the property from the root of the asset model.
   *
   * @public
   */
  path?: AssetModelPropertyPathSegment[] | undefined;

  /**
   * A list of interface summaries that describe which interfaces this property belongs to, including the interface asset model ID and the corresponding property ID in the interface.
   *
   * @public
   */
  interfaceSummaries?: InterfaceSummary[] | undefined;
}

/**
 * Contains detailed error information.
 *
 * @public
 */
export interface DetailedError {
  /**
   * The error code.
   *
   * @public
   */
  code: DetailedErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains the details of an IoT SiteWise error.
 *
 * @public
 */
export interface ErrorDetails {
  /**
   * The error code.
   *
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;

  /**
   * A list of detailed errors.
   *
   * @public
   */
  details?: DetailedError[] | undefined;
}

/**
 * Contains current status information for an asset model. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface AssetModelStatus {
  /**
   * The current state of the asset model.
   *
   * @public
   */
  state: AssetModelState | undefined;

  /**
   * Contains associated error information, if any.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * Contains a summary of an asset model.
 *
 * @public
 */
export interface AssetModelSummary {
  /**
   * The ID of the asset model (used with IoT SiteWise API operations).
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of the asset model. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset model, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}`
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the asset model.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of asset model.
   *
   * - **ASSET_MODEL** – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
   * - **COMPONENT_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
   *
   * @public
   */
  assetModelType?: AssetModelType | undefined;

  /**
   * The asset model description.
   *
   * @public
   */
  description: string | undefined;

  /**
   * The date the asset model was created, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The date the asset model was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * The current status of the asset model.
   *
   * @public
   */
  status: AssetModelStatus | undefined;

  /**
   * The version number of the asset model.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Represents a data binding value referencing a specific asset property. It's used to bind computation model variables to actual asset property values for processing.
 *
 * @public
 */
export interface AssetPropertyBindingValue {
  /**
   * The ID of the asset containing the property. This identifies the specific asset instance's property value used in the computation model.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of the property within the asset. This identifies the specific property's value used in the computation model.
   *
   * @public
   */
  propertyId: string | undefined;
}

/**
 * A filter used to match data bindings based on a specific asset property. This filter helps identify all computation models referencing a particular property of an asset in their data bindings.
 *
 * @public
 */
export interface AssetPropertyBindingValueFilter {
  /**
   * The ID of the asset containing the property to filter by. This identifies the specific asset instance containing the property of interest.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of the property within the asset to filter by. Only data bindings referencing this specific property of the specified asset are matched.
   *
   * @public
   */
  propertyId: string | undefined;
}

/**
 * Contains a summary of a property associated with an asset.
 *
 * @public
 */
export interface AssetPropertySummary {
  /**
   * The ID of the property.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of the property. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The unit of measure (such as Newtons or RPM) of the asset property.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * Contains asset property value notification information. When the notification state is enabled, IoT SiteWise publishes property value updates to a unique MQTT topic. For more information, see [Interacting with other services](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/interact-with-other-services.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  notification?: PropertyNotification | undefined;

  /**
   * The ID of the composite model that contains the asset property.
   *
   * @public
   */
  assetCompositeModelId?: string | undefined;

  /**
   * The structured path to the property from the root of the asset.
   *
   * @public
   */
  path?: AssetPropertyPathSegment[] | undefined;
}

/**
 * Contains a timestamp with optional nanosecond granularity.
 *
 * @public
 */
export interface TimeInNanos {
  /**
   * The timestamp date, in seconds, in the Unix epoch format. Fractional nanosecond data is provided by `offsetInNanos`.
   *
   * @public
   */
  timeInSeconds: number | undefined;

  /**
   * The nanosecond offset from `timeInSeconds`.
   *
   * @public
   */
  offsetInNanos?: number | undefined;
}

/**
 * The value type of null asset property data with BAD and UNCERTAIN qualities.
 *
 * @public
 */
export interface PropertyValueNullValue {
  /**
   * The type of null asset property data.
   *
   * @public
   */
  valueType: RawValueType | undefined;
}

/**
 * Contains an asset property value (of a single type only).
 *
 * @public
 */
export interface Variant {
  /**
   * Asset property data of type string (sequence of characters). The allowed pattern: "^$|[^\u0000-\u001F\u007F]+". The max length is 1024.
   *
   * @public
   */
  stringValue?: string | undefined;

  /**
   * Asset property data of type integer (whole number).
   *
   * @public
   */
  integerValue?: number | undefined;

  /**
   * Asset property data of type double (floating point number). The min value is -10^10. The max value is 10^10. Double.NaN is allowed.
   *
   * @public
   */
  doubleValue?: number | undefined;

  /**
   * Asset property data of type Boolean (true or false).
   *
   * @public
   */
  booleanValue?: boolean | undefined;

  /**
   * The type of null asset property data with BAD and UNCERTAIN qualities.
   *
   * @public
   */
  nullValue?: PropertyValueNullValue | undefined;
}

/**
 * Contains asset property value information.
 *
 * @public
 */
export interface AssetPropertyValue {
  /**
   * The value of the asset property (see `Variant`).
   *
   * @public
   */
  value: Variant | undefined;

  /**
   * The timestamp of the asset property value.
   *
   * @public
   */
  timestamp: TimeInNanos | undefined;

  /**
   * The quality of the asset property value.
   *
   * @public
   */
  quality?: Quality | undefined;
}

/**
 * Contains information about assets that are related to one another.
 *
 * @public
 */
export interface AssetRelationshipSummary {
  /**
   * The assets that are related through an asset hierarchy.
   *
   * This object is present if the `relationshipType` is `HIERARCHY`.
   *
   * @public
   */
  hierarchyInfo?: AssetHierarchyInfo | undefined;

  /**
   * The relationship type of the assets in this relationship. This value is one of the following:
   *
   * - `HIERARCHY` – The assets are related through an asset hierarchy. If you specify this relationship type, this asset relationship includes the `hierarchyInfo` object.
   *
   * @public
   */
  relationshipType: AssetRelationshipType | undefined;
}

/**
 * Contains information about the current status of an asset. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface AssetStatus {
  /**
   * The current status of the asset.
   *
   * @public
   */
  state: AssetState | undefined;

  /**
   * Contains associated error information, if any.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * Contains a summary of an asset.
 *
 * @public
 */
export interface AssetSummary {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of the asset. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}`
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the asset model used to create this asset.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The date the asset was created, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The date the asset was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * The current status of the asset.
   *
   * @public
   */
  status: AssetStatus | undefined;

  /**
   * A list of asset hierarchies that each contain a `hierarchyId`. A hierarchy specifies allowed parent/child asset relationships.
   *
   * @public
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * A description for the asset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateAssetsRequest {
  /**
   * The ID of the parent asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.) Hierarchies allow different groupings of assets to be formed that all come from the same asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  hierarchyId: string | undefined;

  /**
   * The ID of the child asset to be associated. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  childAssetId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains a summary of an associated asset.
 *
 * @public
 */
export interface AssociatedAssetsSummary {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of the asset. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}`
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the asset model used to create the asset.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The date the asset was created, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The date the asset was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;

  /**
   * The current status of the asset.
   *
   * @public
   */
  status: AssetStatus | undefined;

  /**
   * A list of asset hierarchies that each contain a `hierarchyId`. A hierarchy specifies allowed parent/child asset relationships.
   *
   * @public
   */
  hierarchies: AssetHierarchy[] | undefined;

  /**
   * A description for the asset.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Contains information about a data segment entry to associate with a dataset.
 *
 * @public
 */
export interface AssociateDataSegmentEntry {
  /**
   * The ID of the source dataset that contains the data segment.
   *
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment to associate.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment to associate.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface AssociateTimeSeriesToAssetPropertyRequest {
  /**
   * The alias that identifies the time series.
   *
   * @public
   */
  alias: string | undefined;

  /**
   * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of the asset property. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateDataSegmentsToDatasetRequest {
  /**
   * The ID of the curated dataset to associate data segments with.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The list of data segment entries to associate with the dataset.
   *
   * @public
   */
  associateDataSegmentEntries: AssociateDataSegmentEntry[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains error information for a data segment association that failed.
 *
 * @public
 */
export interface FailedDataSegmentAssociation {
  /**
   * The ID of the source dataset.
   *
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * The error code for the failed association.
   *
   * @public
   */
  errorCode: DataSegmentErrorCode | undefined;

  /**
   * The error message for the failed association.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateDataSegmentsToDatasetResponse {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The version of the dataset after association.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * A list of data segment associations that failed.
   *
   * @public
   */
  failedAssociations: FailedDataSegmentAssociation[] | undefined;
}

/**
 * @public
 */
export interface BatchAssociateProjectAssetsRequest {
  /**
   * The ID of the project to which to associate the assets.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The IDs of the assets to be associated to the project.
   *
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchAssociateProjectAssetsResponse {
  /**
   * A list of associated error information, if any.
   *
   * @public
   */
  errors?: AssetErrorDetails[] | undefined;
}

/**
 * Contains information about a data segment entry to delete.
 *
 * @public
 */
export interface DeleteDataSegmentEntry {
  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment to delete.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment to delete.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDatasetDataSegmentsRequest {
  /**
   * The ID of the session dataset from which to delete data segments.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The list of data segment entries to delete.
   *
   * @public
   */
  deleteDataSegmentEntries: DeleteDataSegmentEntry[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains error information for a data segment deletion that failed.
 *
 * @public
 */
export interface FailedDataSegmentDeletion {
  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * The error code for the failed deletion.
   *
   * @public
   */
  errorCode: DataSegmentErrorCode | undefined;

  /**
   * The error message for the failed deletion.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteDatasetDataSegmentsResponse {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The version of the dataset after deletion.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * A list of data segment deletions that failed.
   *
   * @public
   */
  errors: FailedDataSegmentDeletion[] | undefined;
}

/**
 * Contains information about a data segment entry to disassociate from a dataset.
 *
 * @public
 */
export interface DisassociateDataSegmentEntry {
  /**
   * The ID of the source dataset that contains the data segment.
   *
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment to disassociate.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment to disassociate.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateDataSegmentsFromDatasetRequest {
  /**
   * The ID of the curated dataset to disassociate data segments from.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The list of data segment entries to disassociate from the dataset.
   *
   * @public
   */
  disassociateDataSegmentEntries: DisassociateDataSegmentEntry[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains error information for a data segment disassociation that failed.
 *
 * @public
 */
export interface FailedDataSegmentDisassociation {
  /**
   * The ID of the source dataset.
   *
   * @public
   */
  sourceDatasetId: string | undefined;

  /**
   * The ID of the time series.
   *
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * The nanosecond-precision start time of the data segment.
   *
   * @public
   */
  startTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the data segment.
   *
   * @public
   */
  endTimestamp: TimeInNanos | undefined;

  /**
   * The error code for the failed disassociation.
   *
   * @public
   */
  errorCode: DataSegmentErrorCode | undefined;

  /**
   * The error message for the failed disassociation.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateDataSegmentsFromDatasetResponse {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The version of the dataset after disassociation.
   *
   * @public
   */
  datasetVersion: string | undefined;

  /**
   * A list of data segment disassociations that failed.
   *
   * @public
   */
  failedDisassociations: FailedDataSegmentDisassociation[] | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateProjectAssetsRequest {
  /**
   * The ID of the project from which to disassociate the assets.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The IDs of the assets to be disassociated from the project.
   *
   * @public
   */
  assetIds: string[] | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface BatchDisassociateProjectAssetsResponse {
  /**
   * A list of associated error information, if any.
   *
   * @public
   */
  errors?: AssetErrorDetails[] | undefined;
}

/**
 * Contains information for an asset property aggregate entry that is associated with the [BatchGetAssetPropertyAggregates](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html) API.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 * - A `propertyAlias`, which is a data stream alias (for example, `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
 *
 * @public
 */
export interface BatchGetAssetPropertyAggregatesEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The ID of the asset in which the asset property was created.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The data aggregating function.
   *
   * @public
   */
  aggregateTypes: AggregateType[] | undefined;

  /**
   * The time interval over which to aggregate data.
   *
   * @public
   */
  resolution: string | undefined;

  /**
   * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  startDate: Date | undefined;

  /**
   * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  endDate: Date | undefined;

  /**
   * The quality by which to filter asset data.
   *
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * The chronological sorting order of the requested information.
   *
   * Default: `ASCENDING`
   *
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyAggregatesRequest {
  /**
   * The list of asset property aggregate entries for the batch get request. You can specify up to 16 entries per request.
   *
   * @public
   */
  entries: BatchGetAssetPropertyAggregatesEntry[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.
   *
   * - The size of the result set is equal to 1 MB.
   * - The number of data points in the result set is equal to the value of `maxResults`. The maximum value of `maxResults` is 4000.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains error information for an asset property aggregate entry that is associated with the [BatchGetAssetPropertyAggregates](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html) API.
 *
 * @public
 */
export interface BatchGetAssetPropertyAggregatesErrorEntry {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | undefined;

  /**
   * The associated error message.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;
}

/**
 * Contains the error code and the timestamp for an asset property aggregate entry that is associated with the [BatchGetAssetPropertyAggregates](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html) API.
 *
 * @public
 */
export interface BatchGetAssetPropertyAggregatesErrorInfo {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchGetAssetPropertyAggregatesErrorCode | undefined;

  /**
   * The date the error occurred, in Unix epoch time.
   *
   * @public
   */
  errorTimestamp: Date | undefined;
}

/**
 * Contains information for an entry that has been processed by the previous [BatchGetAssetPropertyAggregates](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html) request.
 *
 * @public
 */
export interface BatchGetAssetPropertyAggregatesSkippedEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The completion status of each entry that is associated with the [BatchGetAssetPropertyAggregates](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html) API.
   *
   * @public
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * The error information, such as the error code and the timestamp.
   *
   * @public
   */
  errorInfo?: BatchGetAssetPropertyAggregatesErrorInfo | undefined;
}

/**
 * Contains success information for an entry that is associated with the [BatchGetAssetPropertyAggregates](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyAggregates.html) API.
 *
 * @public
 */
export interface BatchGetAssetPropertyAggregatesSuccessEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The requested aggregated asset property values (for example, average, minimum, and maximum).
   *
   * @public
   */
  aggregatedValues: AggregatedValue[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyAggregatesResponse {
  /**
   * A list of the errors (if any) associated with the batch request. Each error entry contains the `entryId` of the entry that failed.
   *
   * @public
   */
  errorEntries: BatchGetAssetPropertyAggregatesErrorEntry[] | undefined;

  /**
   * A list of entries that were processed successfully by this batch request. Each success entry contains the `entryId` of the entry that succeeded and the latest query result.
   *
   * @public
   */
  successEntries: BatchGetAssetPropertyAggregatesSuccessEntry[] | undefined;

  /**
   * A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the `entryId` of the entry that skipped.
   *
   * @public
   */
  skippedEntries: BatchGetAssetPropertyAggregatesSkippedEntry[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information for an asset property value entry that is associated with the [BatchGetAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) API.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 * - A `propertyAlias`, which is a data stream alias (for example, `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
 *
 * @public
 */
export interface BatchGetAssetPropertyValueEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The ID of the asset in which the asset property was created.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueRequest {
  /**
   * The list of asset property value entries for the batch get request. You can specify up to 128 entries per request.
   *
   * @public
   */
  entries: BatchGetAssetPropertyValueEntry[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains error information for an asset property value entry that is associated with the [BatchGetAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) API.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueErrorEntry {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | undefined;

  /**
   * The associated error message.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;
}

/**
 * The error information, such as the error code and the timestamp.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueErrorInfo {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchGetAssetPropertyValueErrorCode | undefined;

  /**
   * The date the error occurred, in Unix epoch time.
   *
   * @public
   */
  errorTimestamp: Date | undefined;
}

/**
 * Contains information for an entry that has been processed by the previous [BatchGetAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) request.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueSkippedEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The completion status of each entry that is associated with the [BatchGetAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) request.
   *
   * @public
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * The error information, such as the error code and the timestamp.
   *
   * @public
   */
  errorInfo?: BatchGetAssetPropertyValueErrorInfo | undefined;
}

/**
 * Contains success information for an entry that is associated with the [BatchGetAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) API.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueSuccessEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * Contains asset property value information.
   *
   * @public
   */
  assetPropertyValue?: AssetPropertyValue | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueResponse {
  /**
   * A list of the errors (if any) associated with the batch request. Each error entry contains the `entryId` of the entry that failed.
   *
   * @public
   */
  errorEntries: BatchGetAssetPropertyValueErrorEntry[] | undefined;

  /**
   * A list of entries that were processed successfully by this batch request. Each success entry contains the `entryId` of the entry that succeeded and the latest query result.
   *
   * @public
   */
  successEntries: BatchGetAssetPropertyValueSuccessEntry[] | undefined;

  /**
   * A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the `entryId` of the entry that skipped.
   *
   * @public
   */
  skippedEntries: BatchGetAssetPropertyValueSkippedEntry[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information for an asset property historical value entry that is associated with the [BatchGetAssetPropertyValueHistory](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) API.
 *
 * To identify an asset property, you must specify one of the following:
 *
 * - The `assetId` and `propertyId` of an asset property.
 * - A `propertyAlias`, which is a data stream alias (for example, `/company/windfarm/3/turbine/7/temperature`). To define an asset property's alias, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
 *
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The ID of the asset in which the asset property was created.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property, in UUID format.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The exclusive start of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  startDate?: Date | undefined;

  /**
   * The inclusive end of the range from which to query historical data, expressed in seconds in Unix epoch time.
   *
   * @public
   */
  endDate?: Date | undefined;

  /**
   * The quality by which to filter asset data.
   *
   * @public
   */
  qualities?: Quality[] | undefined;

  /**
   * The chronological sorting order of the requested information.
   *
   * Default: `ASCENDING`
   *
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryRequest {
  /**
   * The list of asset property historical value entries for the batch get request. You can specify up to 16 entries per request.
   *
   * @public
   */
  entries: BatchGetAssetPropertyValueHistoryEntry[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return for each paginated request. A result set is returned in the two cases, whichever occurs first.
   *
   * - The size of the result set is equal to 4 MB.
   * - The number of data points in the result set is equal to the value of `maxResults`. The maximum value of `maxResults` is 20000.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * A list of the errors (if any) associated with the batch request. Each error entry contains the `entryId` of the entry that failed.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryErrorEntry {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | undefined;

  /**
   * The associated error message.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;
}

/**
 * The error information, such as the error code and the timestamp.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryErrorInfo {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchGetAssetPropertyValueHistoryErrorCode | undefined;

  /**
   * The date the error occurred, in Unix epoch time.
   *
   * @public
   */
  errorTimestamp: Date | undefined;
}

/**
 * Contains information for an entry that has been processed by the previous [BatchGetAssetPropertyValueHistory](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) request.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueHistorySkippedEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The completion status of each entry that is associated with the [BatchGetAssetPropertyValueHistory](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValueHistory.html) API.
   *
   * @public
   */
  completionStatus: BatchEntryCompletionStatus | undefined;

  /**
   * The error information, such as the error code and the timestamp.
   *
   * @public
   */
  errorInfo?: BatchGetAssetPropertyValueHistoryErrorInfo | undefined;
}

/**
 * Contains success information for an entry that is associated with the [BatchGetAssetPropertyValueHistory](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchGetAssetPropertyValue.html) API.
 *
 * @public
 */
export interface BatchGetAssetPropertyValueHistorySuccessEntry {
  /**
   * The ID of the entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The requested historical values for the specified asset property.
   *
   * @public
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;
}

/**
 * @public
 */
export interface BatchGetAssetPropertyValueHistoryResponse {
  /**
   * A list of the errors (if any) associated with the batch request. Each error entry contains the `entryId` of the entry that failed.
   *
   * @public
   */
  errorEntries: BatchGetAssetPropertyValueHistoryErrorEntry[] | undefined;

  /**
   * A list of entries that were processed successfully by this batch request. Each success entry contains the `entryId` of the entry that succeeded and the latest query result.
   *
   * @public
   */
  successEntries: BatchGetAssetPropertyValueHistorySuccessEntry[] | undefined;

  /**
   * A list of entries that were not processed by this batch request. because these entries had been completely processed by previous paginated requests. Each skipped entry contains the `entryId` of the entry that skipped.
   *
   * @public
   */
  skippedEntries: BatchGetAssetPropertyValueHistorySkippedEntry[] | undefined;

  /**
   * The token for the next set of results, or null if there are no additional results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains a list of value updates for an asset property in the list of asset entries consumed by the [BatchPutAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html) API operation.
 *
 * @public
 */
export interface PutAssetPropertyValueEntry {
  /**
   * The user specified ID for the entry. You can use this ID to identify which entries failed.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The ID of the asset to update.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property for this entry.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The list of property values to upload. You can specify up to 10 `propertyValues` array elements.
   *
   * @public
   */
  propertyValues: AssetPropertyValue[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAssetPropertyValueRequest {
  /**
   * This setting enables partial ingestion at entry-level. If set to `true`, we ingest all TQVs not resulting in an error. If set to `false`, an invalid TQV fails ingestion of the entire entry that contains it.
   *
   * @public
   */
  enablePartialEntryProcessing?: boolean | undefined;

  /**
   * The list of asset property value entries for the batch put request. You can specify up to 10 entries per request.
   *
   * @public
   */
  entries: PutAssetPropertyValueEntry[] | undefined;
}

/**
 * Contains error information from updating a batch of asset property values.
 *
 * @public
 */
export interface BatchPutAssetPropertyError {
  /**
   * The error code.
   *
   * @public
   */
  errorCode: BatchPutAssetPropertyValueErrorCode | undefined;

  /**
   * The associated error message.
   *
   * @public
   */
  errorMessage: string | undefined;

  /**
   * A list of timestamps for each error, if any.
   *
   * @public
   */
  timestamps: TimeInNanos[] | undefined;
}

/**
 * Contains error information for asset property value entries that are associated with the [BatchPutAssetPropertyValue](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_BatchPutAssetPropertyValue.html) API.
 *
 * @public
 */
export interface BatchPutAssetPropertyErrorEntry {
  /**
   * The ID of the failed entry.
   *
   * @public
   */
  entryId: string | undefined;

  /**
   * The list of update property value errors.
   *
   * @public
   */
  errors: BatchPutAssetPropertyError[] | undefined;
}

/**
 * @public
 */
export interface BatchPutAssetPropertyValueResponse {
  /**
   * A list of the errors (if any) associated with the batch put request. Each error entry contains the `entryId` of the entry that failed.
   *
   * @public
   */
  errorEntries: BatchPutAssetPropertyErrorEntry[] | undefined;
}

/**
 * @public
 */
export interface CancelEnrichmentJobRequest {
  /**
   * The name of the IoT SiteWise workspace containing the enrichment job to cancel.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The unique identifier of the enrichment job to cancel. This is the jobId returned by CreateEnrichmentJob.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface CancelEnrichmentJobResponse {
  /**
   * The unique identifier of the cancelled enrichment job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The status of the enrichment job after cancellation. This will be CANCELLED, indicating the job was successfully cancelled or was already in CANCELLED state (idempotent behavior).
   *
   * @public
   */
  status: EnrichmentJobStatus | undefined;
}

/**
 * Request structure for CancelPipelineExecution operation.
 *
 * @public
 */
export interface CancelPipelineExecutionRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The unique identifier of the pipeline execution.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * A message describing why the pipeline execution is being cancelled.
   *
   * @public
   */
  reason?: string | undefined;
}

/**
 * Response structure for CancelPipelineExecution operation.
 *
 * @public
 */
export interface CancelPipelineExecutionResponse {
  /**
   * The current execution state of the pipeline. Can only be CANCELLING or CANCELLED.
   *
   * @public
   */
  state: PipelineExecutionState | undefined;
}

/**
 * @public
 */
export interface CancelQueryRequest {
  /**
   * The name of the workspace associated with the query.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The unique identifier for the query execution to cancel.
   *
   * @public
   */
  queryId: string | undefined;
}

/**
 * Contains the response for the CancelQuery operation.
 *
 * @public
 */
export interface CancelQueryResponse {
  /**
   * The unique identifier for the cancelled query.
   *
   * @public
   */
  queryId: string | undefined;

  /**
   * The current query status.
   *
   * @public
   */
  status: QueryStatus | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyRequest {
  /**
   * The identity for this access policy. Choose an IAM Identity Center user, an IAM Identity Center group, or an IAM user.
   *
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * The IoT SiteWise Monitor resource for this access policy. Choose either a portal or a project.
   *
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * The permission level for this access policy. Note that a project `ADMINISTRATOR` is also known as a project owner.
   *
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the access policy. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAccessPolicyResponse {
  /**
   * The ID of the access policy.
   *
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the access policy, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:access-policy/$\{AccessPolicyId\}`
   *
   * @public
   */
  accessPolicyArn: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * Unique client token for idempotent request handling
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Identity Center Instance ARN to create the application in
   *
   * @public
   */
  idcInstanceArn: string | undefined;

  /**
   * Name of the workspace to associate with the underlying Application
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * Name of the application
   *
   * @public
   */
  name: string | undefined;

  /**
   * Description of the application
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the application.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * ARN of the application
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Unique identifier of the application
   *
   * @public
   */
  id: string | undefined;

  /**
   * DNS subdomain for the application
   *
   * @public
   */
  dnsSubdomain: string | undefined;

  /**
   * Name of the application
   *
   * @public
   */
  name: string | undefined;

  /**
   * Current status of the application
   *
   * @public
   */
  status: ApplicationStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetRequest {
  /**
   * A friendly name for the asset.
   *
   * @public
   */
  assetName: string | undefined;

  /**
   * The ID of the asset model from which to create the asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID to assign to the asset, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * An external ID to assign to the asset. The external ID must be unique within your Amazon Web Services account. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the asset. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A description for the asset.
   *
   * @public
   */
  assetDescription?: string | undefined;
}

/**
 * @public
 */
export interface CreateAssetResponse {
  /**
   * The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other IoT SiteWise API operations.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}`
   *
   * @public
   */
  assetArn: string | undefined;

  /**
   * The status of the asset, which contains a state (`CREATING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelRequest {
  /**
   * A unique name for the asset model.
   *
   * @public
   */
  assetModelName: string | undefined;

  /**
   * The type of asset model.
   *
   * - **ASSET_MODEL** – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
   * - **COMPONENT_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
   *
   * @public
   */
  assetModelType?: AssetModelType | undefined;

  /**
   * The ID to assign to the asset model, if desired. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * An external ID to assign to the asset model. The external ID must be unique within your Amazon Web Services account. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * A description for the asset model.
   *
   * @public
   */
  assetModelDescription?: string | undefined;

  /**
   * The property definitions of the asset model. For more information, see [Asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-properties.html) in the *IoT SiteWise User Guide*.
   *
   * You can specify up to 200 properties per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelProperties?: AssetModelPropertyDefinition[] | undefined;

  /**
   * The hierarchy definitions of the asset model. Each hierarchy specifies an asset model whose assets can be children of any other assets created from this asset model. For more information, see [Asset hierarchies](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html) in the *IoT SiteWise User Guide*.
   *
   * You can specify up to 10 hierarchies per asset model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelHierarchies?: AssetModelHierarchyDefinition[] | undefined;

  /**
   * The composite models that are part of this asset model. It groups properties (such as attributes, measurements, transforms, and metrics) and child composite models that model parts of your industrial equipment. Each composite model has a type that defines the properties that the composite model supports. Use composite models to define alarms on this asset model.
   *
   * > **Note:** When creating custom composite models, you need to use [CreateAssetModelCompositeModel](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html). For more information, see [Creating custom composite models (Components)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-custom-composite-models.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModelDefinition[] | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the asset model. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelResponse {
  /**
   * The ID of the asset model, in UUID format. You can use this ID when you call other IoT SiteWise API operations.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset model, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}`
   *
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * The status of the asset model, which contains a state (`CREATING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelCompositeModelRequest {
  /**
   * The ID of the asset model this composite model is a part of.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * An external ID to assign to the composite model.
   *
   * If the composite model is a derived composite model, or one nested inside a component model, you can only set the external ID using `UpdateAssetModelCompositeModel` and specifying the derived ID of the model or property from the created model it's a part of.
   *
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * The ID of the parent composite model in this asset model relationship.
   *
   * @public
   */
  parentAssetModelCompositeModelId?: string | undefined;

  /**
   * The ID of the composite model. IoT SiteWise automatically generates a unique ID for you, so this parameter is never required. However, if you prefer to supply your own ID instead, you can specify it here in UUID format. If you specify your own ID, it must be globally unique.
   *
   * @public
   */
  assetModelCompositeModelId?: string | undefined;

  /**
   * A description for the composite model.
   *
   * @public
   */
  assetModelCompositeModelDescription?: string | undefined;

  /**
   * A unique name for the composite model.
   *
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * The composite model type. Valid values are `AWS/ALARM`, `CUSTOM`, or `AWS/L4E_ANOMALY`.
   *
   * @public
   */
  assetModelCompositeModelType: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The ID of a component model which is reused to create this composite model.
   *
   * @public
   */
  composedAssetModelId?: string | undefined;

  /**
   * The property definitions of the composite model. For more information, see [Inline custom composite models](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/custom-composite-models.html#inline-composite-models) in the *IoT SiteWise User Guide*.
   *
   * You can specify up to 200 properties per composite model. For more information, see [Quotas](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelCompositeModelProperties?: AssetModelPropertyDefinition[] | undefined;

  /**
   * The expected current entity tag (ETag) for the asset model’s latest or active version (specified using `matchForVersionType`). The create request is rejected if the tag does not match the latest or active version's current entity tag. See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * Accepts ***** to reject the create request if an active version (specified using `matchForVersionType` as `ACTIVE`) already exists for the asset model.
   *
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * Specifies the asset model version type (`LATEST` or `ACTIVE`) used in conjunction with `If-Match` or `If-None-Match` headers to determine the target ETag for the create operation.
   *
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface CreateAssetModelCompositeModelResponse {
  /**
   * The ID of the composed asset model. You can use this ID when you call other IoT SiteWise APIs.
   *
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * The path to the composite model listing the parent composite models.
   *
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * Contains current status information for an asset model. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId?: string | undefined;
}

/**
 * The Amazon S3 destination where errors associated with the job creation request are saved.
 *
 * @public
 */
export interface ErrorReportLocation {
  /**
   * The name of the Amazon S3 bucket to which errors associated with the bulk import job are sent.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * Amazon S3 uses the prefix as a folder name to organize data in the bucket. Each Amazon S3 object has a key that is its unique identifier in the bucket. Each object in a bucket has exactly one key. The prefix must end with a forward slash (/). For more information, see [Organizing objects using prefixes](https://docs.aws.amazon.com/AmazonS3/latest/userguide/using-prefixes.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  prefix: string | undefined;
}

/**
 * A .CSV file.
 *
 * @public
 */
export interface Csv {
  /**
   * The column names specified in the .csv file.
   *
   * @public
   */
  columnNames: ColumnName[] | undefined;
}

/**
 * The MP4 video format configuration for bulk import files.
 *
 * @public
 */
export interface Mp4 {}

/**
 * A parquet file.
 *
 * @public
 */
export interface Parquet {}

/**
 * The file format of the data in S3.
 *
 * @public
 */
export interface FileFormat {
  /**
   * The file is in .CSV format.
   *
   * @public
   */
  csv?: Csv | undefined;

  /**
   * The file is in parquet format.
   *
   * @public
   */
  parquet?: Parquet | undefined;

  /**
   * The MP4 format configuration.
   *
   * @public
   */
  mp4?: Mp4 | undefined;

  /**
   * The annotation format configuration.
   *
   * @public
   */
  annotation?: Annotation | undefined;
}

/**
 * The file in Amazon S3 where your data is saved.
 *
 * @public
 */
export interface File {
  /**
   * The name of the Amazon S3 bucket from which data is imported.
   *
   * @public
   */
  bucket: string | undefined;

  /**
   * The key of the Amazon S3 object that contains your data. Each object has a key that is a unique identifier. Each object has exactly one key.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The version ID to identify a specific version of the Amazon S3 object that contains your data.
   *
   * @public
   */
  versionId?: string | undefined;

  /**
   * The alias associated with the file's time series.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The nanosecond-precision start time for the file data.
   *
   * @public
   */
  startTime?: TimeInNanos | undefined;

  /**
   * The file format of the data in S3.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;
}

/**
 * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
 *
 * @public
 */
export interface JobConfiguration {
  /**
   * The file format of the data in S3.
   *
   * @public
   */
  fileFormat?: FileFormat | undefined;
}

/**
 * @public
 */
export interface CreateBulkImportJobRequest {
  /**
   * The unique name that helps identify the job request.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IAM role that allows IoT SiteWise to read Amazon S3 data.
   *
   * @public
   */
  jobRoleArn: string | undefined;

  /**
   * The files in the specified Amazon S3 bucket that contain your data. You can specify up to 100 files for each bulk import job. Each file supports the following size limits:
   *
   * - Parquet files – Up to 256 MiB.
   * - Other file formats – Up to 5 GiB.
   *
   * @public
   */
  files: File[] | undefined;

  /**
   * The Amazon S3 destination where errors associated with the job creation request are saved.
   *
   * @public
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
   *
   * @public
   */
  jobConfiguration?: JobConfiguration | undefined;

  /**
   * If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is.
   *
   * @public
   */
  adaptiveIngestion?: boolean | undefined;

  /**
   * If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.
   *
   * @public
   */
  deleteFilesAfterImport?: boolean | undefined;

  /**
   * The ID of the session dataset to ingest data into. Specify this field, together with `workspaceName`, to ingest data into a session dataset in a workspace.
   *
   * @public
   */
  datasetId?: string | undefined;

  /**
   * The name of the workspace that contains the session dataset. Specify this field together with `datasetId`.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface CreateBulkImportJobResponse {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The unique name that helps identify the job request.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The status of the bulk import job can be one of following values:
   *
   * - `PENDING` – IoT SiteWise is waiting for the current bulk import job to finish.
   * - `CANCELLED` – The bulk import job has been canceled.
   * - `RUNNING` – IoT SiteWise is processing your request to import your data from Amazon S3.
   * - `COMPLETED` – IoT SiteWise successfully completed your request to import data from Amazon S3.
   * - `FAILED` – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.
   * - `COMPLETED_WITH_FAILURES` – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;
}

/**
 * Contains the configuration of the type of anomaly detection computation model.
 *
 * @public
 */
export interface ComputationModelAnomalyDetectionConfiguration {
  /**
   * Define the variable name associated with input properties, with the following format `$\{VariableName\}`.
   *
   * @public
   */
  inputProperties: string | undefined;

  /**
   * Define the variable name associated with the result property, and the following format `$\{VariableName\}`.
   *
   * @public
   */
  resultProperty: string | undefined;
}

/**
 * The configuration for the computation model.
 *
 * @public
 */
export interface ComputationModelConfiguration {
  /**
   * The configuration for the anomaly detection type of computation model.
   *
   * @public
   */
  anomalyDetection?: ComputationModelAnomalyDetectionConfiguration | undefined;
}

/**
 * Contains current status information for a computation model.
 *
 * @public
 */
export interface ComputationModelStatus {
  /**
   * The current state of the computation model.
   *
   * @public
   */
  state: ComputationModelState | undefined;

  /**
   * Contains the details of an IoT SiteWise error.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateComputationModelResponse {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the computation model, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:computation-model/$\{ComputationModelId\}`
   *
   * @public
   */
  computationModelArn: string | undefined;

  /**
   * The status of the computation model, containing a state (CREATING after successfully calling this operation) and any error messages.
   *
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface CreateDashboardRequest {
  /**
   * The ID of the project in which to create the dashboard.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * A friendly name for the dashboard.
   *
   * @public
   */
  dashboardName: string | undefined;

  /**
   * A description for the dashboard.
   *
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * The dashboard definition specified in a JSON literal.
   *
   * - IoT SiteWise Monitor (Classic) see [Create dashboards (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html)
   * - IoT SiteWise Monitor (AI-aware) see [Create dashboards (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-ai-dashboard-cli.html)
   *
   * in the *IoT SiteWise User Guide*
   *
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the dashboard. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDashboardResponse {
  /**
   * The ID of the dashboard.
   *
   * @public
   */
  dashboardId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the dashboard, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dashboard/$\{DashboardId\}`
   *
   * @public
   */
  dashboardArn: string | undefined;
}

/**
 * Contains the session configuration for a session-type dataset.
 *
 * @public
 */
export interface SessionConfig {
  /**
   * The nanosecond-precision start time of the session.
   *
   * @public
   */
  sessionStartTimestamp: TimeInNanos | undefined;

  /**
   * The nanosecond-precision end time of the session.
   *
   * @public
   */
  sessionEndTimestamp: TimeInNanos | undefined;
}

/**
 * Contains the configuration for a dataset.
 *
 * @public
 */
export interface DatasetConfig {
  /**
   * The session configuration for a session-type dataset.
   *
   * @public
   */
  session?: SessionConfig | undefined;
}

/**
 * The source details for the Kendra dataset source.
 *
 * @public
 */
export interface KendraSourceDetail {
  /**
   * The `knowledgeBaseArn` details for the Kendra dataset source.
   *
   * @public
   */
  knowledgeBaseArn: string | undefined;

  /**
   * The `roleARN` details for the Kendra dataset source.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * The details of the dataset source associated with the dataset.
 *
 * @public
 */
export interface SourceDetail {
  /**
   * Contains details about the Kendra dataset source.
   *
   * @public
   */
  kendra?: KendraSourceDetail | undefined;
}

/**
 * The data source for the dataset.
 *
 * @public
 */
export interface DatasetSource {
  /**
   * The type of data source for the dataset.
   *
   * @public
   */
  sourceType: DatasetSourceType | undefined;

  /**
   * The format of the dataset source associated with the dataset.
   *
   * @public
   */
  sourceFormat: DatasetSourceFormat | undefined;

  /**
   * The details of the dataset source associated with the dataset.
   *
   * @public
   */
  sourceDetail?: SourceDetail | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId?: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  datasetName: string | undefined;

  /**
   * A description about the dataset, and its functionality.
   *
   * @public
   */
  datasetDescription?: string | undefined;

  /**
   * The type of dataset: a session dataset, a curated dataset, or a connection to an external datasource.
   *
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * The configuration for the dataset.
   *
   * @public
   */
  datasetConfig?: DatasetConfig | undefined;

  /**
   * The name of the workspace that contains the dataset. Required for session and curated datasets. Omit this field for datasets that connect to an external datasource.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * The metadata for the dataset, provided as key-value pairs.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The data source for the dataset.
   *
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the access policy. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * The status of the dataset. This contains the state and any error messages. The state is `ACTIVE` when ready to use.
 *
 * @public
 */
export interface DatasetStatus {
  /**
   * The current status of the dataset.
   *
   * @public
   */
  state: DatasetState | undefined;

  /**
   * Contains the details of an IoT SiteWise error.
   *
   * @public
   */
  error?: ErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the dataset. The format is `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}`.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The status of the dataset. This contains the state and any error messages. State is `CREATING` after a successfull call to this API, and any associated error message. The state is `ACTIVE` when ready to use.
   *
   * @public
   */
  datasetStatus: DatasetStatus | undefined;
}

/**
 * Contains the location where error reports will be written on failure.
 *
 * @public
 */
export interface ExportErrorReportLocation {
  /**
   * The S3 URI prefix for the error report.
   *
   * @public
   */
  s3Uri: string | undefined;
}

/**
 * Contains settings for trimming content to a specific time range.
 *
 * @public
 */
export interface TrimSettings {
  /**
   * The start time for the trim range.
   *
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * The end time for the trim range. Must be greater than startTime.
   *
   * @public
   */
  endTime: TimeInNanos | undefined;
}

/**
 * A dataset to process.
 *
 * @public
 */
export interface DatasetItem {
  /**
   * The unique identifier for the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The trim settings applied to all items in the dataset. When omitted, the full dataset time range is used.
   *
   * @public
   */
  trimSettings?: TrimSettings | undefined;

  /**
   * The optional subset of data types to export. If omitted, all data types are exported.
   *
   * @public
   */
  exportDataTypes?: ExportDataType[] | undefined;
}

/**
 * Contains the output format configuration for video processing.
 *
 * @public
 */
export interface FormatSettings {
  /**
   * The target frame rate for the output.
   *
   * @public
   */
  framesPerSecond?: number | undefined;

  /**
   * The target width of the output, in pixels.
   *
   * @public
   */
  widthInPixels?: number | undefined;

  /**
   * The target height of the output, in pixels.
   *
   * @public
   */
  heightInPixels?: number | undefined;
}

/**
 * A single timeseries item to process. Exactly one of timeSeriesId or propertyAlias must be provided.
 *
 * @public
 */
export interface TimeseriesItem {
  /**
   * The unique identifier for the timeseries. Mutually exclusive with propertyAlias.
   *
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * The customer-friendly alias for the timeseries. Mutually exclusive with timeSeriesId.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * The trim settings for the time range to export. Required for VIDEO and TELEMETRY data types; optional for ANNOTATION data types.
   *
   * @public
   */
  trimSettings?: TrimSettings | undefined;

  /**
   * The optional format settings for the output.
   *
   * @public
   */
  formatSettings?: FormatSettings | undefined;
}

/**
 * Input source for processing. Specify exactly one option.
 *
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
   * List of individual timeseries items to process.
   *
   * @public
   */
  export interface TimeseriesMember {
    timeseries: TimeseriesItem[];
    dataset?: never;
    $unknown?: never;
  }

  /**
   * A dataset containing multiple items to process.
   *
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
 * Request to create a dataset export job.
 *
 * @public
 */
export interface CreateDatasetExportJobRequest {
  /**
   * The name of the workspace in which to create the dataset export job.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. The AWS SDKs and CLI populate this automatically.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The S3 URI where output clips will be written.
   *
   * @public
   */
  destinationS3Uri: string | undefined;

  /**
   * The processing input source.
   *
   * @public
   */
  input: ProcessingInput | undefined;

  /**
   * The location where the error report will be written on failure.
   *
   * @public
   */
  errorReportLocation: ExportErrorReportLocation | undefined;
}

/**
 * Response for create dataset export job request.
 *
 * @public
 */
export interface CreateDatasetExportJobResponse {
  /**
   * The unique identifier for the dataset export job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the workspace in which the dataset export job was created.
   *
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * Time range settings for extracting a specific window of video time-series data to process.
 *
 * Trim settings define the time bounds for enrichment and must satisfy:
 *
 * - Start and end times must be within the dataset's time bounds
 * - Trim settings retrieve fully contained data segments within the specified time range
 * - endTime must be greater than startTime
 * - Both times should represent valid data ranges in the dataset
 *
 * Trim settings are required to:
 *
 * - Prevent accidentally analyzing unbounded datasets
 * - Ensure predictable processing time and costs
 * - Allow focused analysis on specific time periods of interest
 *
 * @public
 */
export interface EnrichmentTrimSettings {
  /**
   * Start time for the video analysis time range in nanoseconds since Unix epoch (TimeInNanos format). Data segments at or after this time are included in the enrichment. Must be within the dataset's time bounds.
   *
   * Example (JavaScript): Date.parse('2024-01-01T00:00:00Z') * 1000000 Example (Python): int(datetime.timestamp() * 1e9)
   *
   * @public
   */
  startTime: TimeInNanos | undefined;

  /**
   * End time for the video analysis time range in nanoseconds since Unix epoch (TimeInNanos format). Data segments at or before this time are included in the enrichment. Must be greater than startTime and within the dataset's time bounds.
   *
   * @public
   */
  endTime: TimeInNanos | undefined;
}

/**
 * Configuration for event detection enrichment on video time-series data.
 *
 * Event detection generates embeddings from video data enabling natural language similarity search on events. This allows customers to:
 *
 * - Query video events using semantic search after enrichment completes
 * - Find relevant video segments through natural language queries
 * - Search across video time-series data stored in IoT SiteWise
 *
 * You must specify the dataset, exactly one time-series identifier (timeSeriesId OR propertyAlias), and trim settings defining the video time window to process.
 *
 * @public
 */
export interface EventDetection {
  /**
   * The IoT SiteWise dataset ID containing the video time-series data to analyze. Query IoT SiteWise to discover available datasets in your workspace.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * Unique system identifier for the video time series to analyze. Specify either timeSeriesId or propertyAlias, but not both. Use this when you have the system-generated time series identifier from IoT SiteWise.
   *
   * @public
   */
  timeSeriesId?: string | undefined;

  /**
   * Human-readable alias for the video time series to analyze (e.g., /camera/warehouse/zone-a). Specify either propertyAlias or timeSeriesId, but not both. Use this when you have configured friendly aliases in IoT SiteWise for better readability.
   *
   * @public
   */
  propertyAlias?: string | undefined;

  /**
   * Time range settings defining which portion of the video time-series data to process. Required to ensure predictable processing time and prevent analyzing unbounded datasets. Start and end times must be within the dataset's time bounds.
   *
   * @public
   */
  trimSettings: EnrichmentTrimSettings | undefined;
}

/**
 * Configuration for the enrichment job defining which analysis type to perform on video time-series data. Currently supports event detection enrichment. Exactly one member must be specified.
 *
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
   * Event detection configuration that generates embeddings from video time-series data enabling natural language similarity search on events. The service processes video data and creates embeddings stored in IoT SiteWise for semantic querying.
   *
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
   * The name of the IoT SiteWise workspace containing the video data to analyze.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * Configuration defining the type of enrichment analysis to perform and which video data to analyze. Currently supports eventDetection for generating embeddings from video data for semantic search.
   *
   * @public
   */
  jobConfiguration: EnrichmentJobConfiguration | undefined;

  /**
   * Optional unique token that makes the operation idempotent. If you submit the same request with the same token within the idempotency window, the service returns the original job without creating a duplicate. Use a UUID or timestamp-based token for each unique request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnrichmentJobResponse {
  /**
   * Unique identifier for the enrichment job. Use this ID with DescribeEnrichmentJob to monitor progress or with CancelEnrichmentJob to cancel the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * Initial status of the enrichment job, typically PENDING. The job will transition to RUNNING when processing begins, then to a terminal state (COMPLETED, FAILED, TIMED_OUT, or CANCELLED). Use DescribeEnrichmentJob to track status changes.
   *
   * @public
   */
  status: EnrichmentJobStatus | undefined;

  /**
   * Timestamp when the enrichment job was created in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;
}

/**
 * Contains details for a gateway that runs on IoT Greengrass. To create a gateway that runs on IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to IoT SiteWise. For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface Greengrass {
  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Greengrass group. For more information about how to find a group's ARN, see [ListGroups](https://docs.aws.amazon.com/greengrass/v1/apireference/listgroups-get.html) and [GetGroup](https://docs.aws.amazon.com/greengrass/v1/apireference/getgroup-get.html) in the *IoT Greengrass V1 API Reference*.
   *
   * @public
   */
  groupArn: string | undefined;
}

/**
 * Contains details for a gateway that runs on IoT Greengrass V2. To create a gateway that runs on IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your [Greengrass device role](https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html) must use the `AWSIoTSiteWiseEdgeAccess` policy. For more information, see [Using IoT SiteWise at the edge](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html) in the *IoT SiteWise User Guide*.
 *
 * @public
 */
export interface GreengrassV2 {
  /**
   * The name of the IoT thing for your IoT Greengrass V2 core device.
   *
   * @public
   */
  coreDeviceThingName: string | undefined;

  /**
   * The operating system of the core device in IoT Greengrass V2. Specifying the operating system is required for MQTT-enabled, V3 gateways (`gatewayVersion` `3`) and not applicable for Classic stream, V2 gateways (`gatewayVersion` `2`).
   *
   * @public
   */
  coreDeviceOperatingSystem?: CoreDeviceOperatingSystem | undefined;
}

/**
 * Contains details for a SiteWise Edge gateway that runs on a Siemens Industrial Edge Device.
 *
 * @public
 */
export interface SiemensIE {
  /**
   * The name of the IoT Thing for your SiteWise Edge gateway.
   *
   * @public
   */
  iotCoreThingName: string | undefined;
}

/**
 * The gateway's platform configuration. You can only specify one platform type in a gateway.
 *
 * (Legacy only) For Greengrass V1 gateways, specify the `greengrass` parameter with a valid Greengrass group ARN.
 *
 * For Greengrass V2 gateways, specify the `greengrassV2` parameter with a valid core device thing name. If creating a V3 gateway (`gatewayVersion=3`), you must also specify the `coreDeviceOperatingSystem`.
 *
 * For Siemens Industrial Edge gateways, specify the `siemensIE` parameter with a valid IoT Core thing name.
 *
 * @public
 */
export interface GatewayPlatform {
  /**
   * A gateway that runs on IoT Greengrass.
   *
   * @public
   */
  greengrass?: Greengrass | undefined;

  /**
   * A gateway that runs on IoT Greengrass V2.
   *
   * @public
   */
  greengrassV2?: GreengrassV2 | undefined;

  /**
   * A SiteWise Edge gateway that runs on a Siemens Industrial Edge Device.
   *
   * @public
   */
  siemensIE?: SiemensIE | undefined;
}

/**
 * @public
 */
export interface CreateGatewayRequest {
  /**
   * A unique name for the gateway.
   *
   * @public
   */
  gatewayName: string | undefined;

  /**
   * The gateway's platform. You can only specify one platform in a gateway.
   *
   * @public
   */
  gatewayPlatform: GatewayPlatform | undefined;

  /**
   * The version of the gateway to create. Specify `3` to create an MQTT-enabled, V3 gateway and `2` to create a Classic streams, V2 gateway. If not specified, the default is `2` (Classic streams, V2 gateway).
   *
   * > **Note:** When creating a V3 gateway (`gatewayVersion=3`) with the `GreengrassV2` platform, you must also specify the `coreDeviceOperatingSystem` parameter.
   *
   * We recommend creating an MQTT-enabled gateway for self-hosted gateways and Siemens Industrial Edge gateways. For more information on gateway versions, see [Use Amazon Web Services IoT SiteWise Edge Edge gateways](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateways.html).
   *
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the gateway. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateGatewayResponse {
  /**
   * The ID of the gateway device. You can use this ID when you call other IoT SiteWise API operations.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the gateway, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:gateway/$\{GatewayId\}`
   *
   * @public
   */
  gatewayArn: string | undefined;
}

/**
 * A single compute node in a pipeline DAG. Each compute node references a task and can declare dependencies on other nodes.
 *
 * @public
 */
export interface ComputeNode {
  /**
   * The unique name for this compute node within the pipeline.
   *
   * @public
   */
  computeNodeName: string | undefined;

  /**
   * The name of the task to execute for this compute node.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * Environment variables specific to this compute node. These override pipeline-level environment variables with the same key.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * A list of compute node names that must complete successfully before this node can start.
   *
   * @public
   */
  dependsOn?: string[] | undefined;
}

/**
 * Request structure for CreatePipeline operation.
 *
 * @public
 */
export interface CreatePipelineRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline to create. Must be unique within the workspace.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * A description of the pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Environment variables shared across all compute nodes in the pipeline. Individual compute nodes can override these values with their own environment variables.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The list of compute nodes that form the pipeline DAG. Each compute node references a task and can declare dependencies on other nodes.
   *
   * @public
   */
  computations: ComputeNode[] | undefined;

  /**
   * A list of key-value pairs that contain metadata for the pipeline. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the AWS IoT SiteWise User Guide.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token, the server returns the cached result from the original successful request without performing the operation again.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains the details of a resource error.
 *
 * @public
 */
export interface ResourceError {
  /**
   * The error code.
   *
   * @public
   */
  code?: ResourceErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains information about the current status of a resource.
 *
 * @public
 */
export interface ResourceStatus {
  /**
   * Contains associated error information, if any.
   *
   * @public
   */
  error?: ResourceError | undefined;

  /**
   * The current status of the resource.
   *
   * @public
   */
  state?: ResourceState | undefined;
}

/**
 * Response structure for CreatePipeline operation.
 *
 * @public
 */
export interface CreatePipelineResponse {
  /**
   * The name of the created pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The ARN of the created pipeline.
   *
   * @public
   */
  pipelineArn: string | undefined;

  /**
   * The version of the newly created pipeline.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current lifecycle status of the pipeline.
   *
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * Contains an image file.
 *
 * @public
 */
export interface ImageFile {
  /**
   * The image file contents, represented as a base64-encoded string. The file size must be less than 1 MB.
   *
   * @public
   */
  data: Uint8Array | undefined;

  /**
   * The file type of the image.
   *
   * @public
   */
  type: ImageFileType | undefined;
}

/**
 * The configuration entry associated with the specific portal type. The `portalTypeConfiguration` is a map of the `portalTypeKey` to the `PortalTypeEntry`.
 *
 * @public
 */
export interface PortalTypeEntry {
  /**
   * The array of tools associated with the specified portal type. The possible values are `ASSISTANT` and `DASHBOARD`.
   *
   * @public
   */
  portalTools?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePortalRequest {
  /**
   * A friendly name for the portal.
   *
   * @public
   */
  portalName: string | undefined;

  /**
   * A description for the portal.
   *
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * The Amazon Web Services administrator's contact email address.
   *
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A logo image to display in the portal. Upload a square, high-resolution image. The image is displayed on a dark background.
   *
   * @public
   */
  portalLogoImageFile?: ImageFile | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of a service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see [Using service roles for IoT SiteWise Monitor](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the portal. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The service to use to authenticate users to the portal. Choose from the following options:
   *
   * - `SSO` – The portal uses IAM Identity Center to authenticate users and manage user permissions. Before you can create a portal that uses IAM Identity Center, you must enable IAM Identity Center. For more information, see [Enabling IAM Identity Center](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-get-started.html#mon-gs-sso) in the *IoT SiteWise User Guide*. This option is only available in Amazon Web Services Regions other than the China Regions.
   * - `IAM` – The portal uses Identity and Access Management to authenticate users and manage user permissions.
   *
   * You can't change this value after you create a portal.
   *
   * Default: `SSO`
   *
   * @public
   */
  portalAuthMode?: AuthMode | undefined;

  /**
   * The email address that sends alarm notifications.
   *
   * > **Important:** If you use the [IoT Events managed Lambda function](https://docs.aws.amazon.com/iotevents/latest/developerguide/lambda-support.html) to manage your emails, you must [verify the sender email address in Amazon SES](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/verify-email-addresses.html).
   *
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal. You can use the alarm to monitor an asset property and get notified when the asset property value is outside a specified range. For more information, see [Monitoring with alarms](https://docs.aws.amazon.com/iot-sitewise/latest/appguide/monitor-alarms.html) in the *IoT SiteWise Application Guide*.
   *
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * Define the type of portal. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * Contains IoT SiteWise Monitor error details.
 *
 * @public
 */
export interface MonitorErrorDetails {
  /**
   * The error code.
   *
   * @public
   */
  code?: MonitorErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains information about the current status of a portal.
 *
 * @public
 */
export interface PortalStatus {
  /**
   * The current state of the portal.
   *
   * @public
   */
  state: PortalState | undefined;

  /**
   * Contains associated error information, if any.
   *
   * @public
   */
  error?: MonitorErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * The ID of the created portal.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the portal, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:portal/$\{PortalId\}`
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.
   *
   * @public
   */
  portalStartUrl: string | undefined;

  /**
   * The status of the portal, which contains a state (`CREATING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  portalStatus: PortalStatus | undefined;

  /**
   * The associated IAM Identity Center application ID, if the portal uses IAM Identity Center.
   *
   * @public
   */
  ssoApplicationId: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * The ID of the portal in which to create the project.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * A friendly name for the project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A description for the project.
   *
   * @public
   */
  projectDescription?: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A list of key-value pairs that contain metadata for the project. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * The ID of the project.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the project, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:project/$\{ProjectId\}`
   *
   * @public
   */
  projectArn: string | undefined;
}

/**
 * Configuration for ephemeral storage attached to the container task.
 *
 * @public
 */
export interface EphemeralStorageConfiguration {
  /**
   * Storage type that determines I/O performance family and level.
   *
   * @public
   */
  storageClass: StorageClass | undefined;

  /**
   * Storage volume size in GiB.
   *
   * @public
   */
  storageSizeInGiB: number | undefined;
}

/**
 * Configures a mount that reads from an Amazon S3 access point.
 *
 * @public
 */
export interface S3AccessPointSource {
  /**
   * The Amazon Resource Name (ARN) of the S3 access point.
   *
   * @public
   */
  accessPointArn: string | undefined;

  /**
   * An optional key prefix to scope the mount to a subset of objects at the access point.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * The data source configuration for a mount. Specify exactly one of the following.
 *
 * @public
 */
export type MountSource =
  | MountSource.S3AccessPointMember
  | MountSource.$UnknownMember;

/**
 * @public
 */
export namespace MountSource {
  /**
   * Configuration for a mount that reads from an Amazon S3 access point.
   *
   * @public
   */
  export interface S3AccessPointMember {
    s3AccessPoint: S3AccessPointSource;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3AccessPoint?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3AccessPoint: (value: S3AccessPointSource) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Attaches a data source to the container filesystem for a task at a customer-supplied relative path under the service-owned mount root.
 *
 * @public
 */
export interface Mount {
  /**
   * A unique name for the mount within the task.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The relative path under the service-owned mount root where this mount is attached inside the container.
   *
   * @public
   */
  relativePath: string | undefined;

  /**
   * The data source for the mount.
   *
   * @public
   */
  source: MountSource | undefined;

  /**
   * The type of storage used for the mount.
   *
   * @public
   */
  storageType: MountStorageType | undefined;
}

/**
 * Configuration for a container task, including the container image, IAM role, and compute settings.
 *
 * @public
 */
export interface ContainerTaskConfiguration {
  /**
   * The Amazon ECR image URI for the task container.
   *
   * @public
   */
  ecrUri: string | undefined;

  /**
   * The ARN of the IAM role that grants the containerized workload permissions to access AWS resources.
   *
   * @public
   */
  taskExecutionRole: string | undefined;

  /**
   * The processing type for compute resources.
   *
   * @public
   */
  processingType: ProcessingType | undefined;

  /**
   * The processing unit allocation that determines the vCPU, memory, and GPU resources.
   *
   * @public
   */
  processingUnit: ProcessingUnit | undefined;

  /**
   * Ephemeral storage configuration for the container task.
   *
   * @public
   */
  ephemeralStorageConfiguration?: EphemeralStorageConfiguration | undefined;

  /**
   * The command to execute in the container.
   *
   * @public
   */
  command?: string[] | undefined;

  /**
   * The timeout in seconds for task execution. Default: 3600 (1 hour).
   *
   * @public
   */
  timeoutSeconds?: number | undefined;

  /**
   * Environment variables passed to the container at runtime.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * Mounts attached to the container filesystem. Each mount exposes an external data source as a local directory inside the container. The service assigns each mount a container path based on the mount name. The container reads files through that path as if the data were on the local filesystem.
   *
   * @public
   */
  mounts?: Mount[] | undefined;
}

/**
 * The task execution configuration. Specify a [containerTaskConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html) for a custom container workload.
 *
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
   * Configuration for running a custom container image on managed compute.
   *
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
 * Request structure for CreateTask operation.
 *
 * @public
 */
export interface CreateTaskRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the task to create. Must be unique within the workspace.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * A description of the task.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The task execution configuration. Specify a [containerTaskConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ContainerTaskConfiguration.html) for custom container workloads.
   *
   * @public
   */
  taskConfiguration: TaskConfiguration | undefined;

  /**
   * A list of key-value pairs that contain metadata for the task. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the AWS IoT SiteWise User Guide.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client token, the server returns the cached result from the original successful request without performing the operation again.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Response structure for CreateTask operation.
 *
 * @public
 */
export interface CreateTaskResponse {
  /**
   * The name of the created task.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * The ARN of the created task.
   *
   * @public
   */
  taskArn: string | undefined;

  /**
   * The version of the newly created task.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The current lifecycle status of the task.
   *
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * Contains the encryption configuration for a workspace.
 *
 * @public
 */
export interface WorkspaceEncryptionConfiguration {
  /**
   * The encryption scheme for the workspace. `SITEWISE_DEFAULT_ENCRYPTION` encrypts data with the IoT SiteWise default key. `KMS_BASED_ENCRYPTION` encrypts data with the customer managed KMS key identified by `kmsKeyId`.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The customer managed KMS key used when `encryptionType` is `KMS_BASED_ENCRYPTION`. Accepts a key ID, key ARN, or key alias. Required for `KMS_BASED_ENCRYPTION`; must be omitted for `SITEWISE_DEFAULT_ENCRYPTION`. After a workspace's customer managed key configuration becomes active, the key can't be changed.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceRequest {
  /**
   * The name of the workspace to create.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * A description for the workspace.
   *
   * @public
   */
  workspaceDescription?: string | undefined;

  /**
   * The encryption configuration for the workspace.
   *
   * @public
   */
  encryptionConfiguration: WorkspaceEncryptionConfiguration | undefined;

  /**
   * A list of key-value pairs that contain metadata for the workspace. For more information, see [Tagging your IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * Contains the details of an error associated with a workspace.
 *
 * @public
 */
export interface WorkspaceErrorDetails {
  /**
   * The error code.
   *
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains information about the current status of a workspace.
 *
 * @public
 */
export interface WorkspaceStatus {
  /**
   * The current state of the workspace.
   *
   * @public
   */
  state: WorkspaceState | undefined;

  /**
   * Contains associated error information, if any.
   *
   * @public
   */
  error?: WorkspaceErrorDetails | undefined;
}

/**
 * @public
 */
export interface CreateWorkspaceResponse {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The ARN of the workspace.
   *
   * @public
   */
  workspaceArn: string | undefined;

  /**
   * The status of the workspace, which is `CREATING` when the operation returns.
   *
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAccessPolicyRequest {
  /**
   * The ID of the access policy to be deleted.
   *
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
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
   * Name of the workspace to associate with the underlying Application
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * ID of the Application to delete
   *
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
   * The ID of the asset to delete. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetResponse {
  /**
   * The ID of the asset.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The status of the asset, which contains a state (`DELETING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  assetStatus: AssetStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelRequest {
  /**
   * The ID of the asset model to delete. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The expected current entity tag (ETag) for the asset model’s latest or active version (specified using `matchForVersionType`). The delete request is rejected if the tag does not match the latest or active version's current entity tag. See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * Accepts ***** to reject the delete request if an active version (specified using `matchForVersionType` as `ACTIVE`) already exists for the asset model.
   *
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * Specifies the asset model version type (`LATEST` or `ACTIVE`) used in conjunction with `If-Match` or `If-None-Match` headers to determine the target ETag for the delete operation.
   *
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelResponse {
  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId?: string | undefined;

  /**
   * The status of the asset model, which contains a state (`DELETING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelCompositeModelRequest {
  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of a composite model on this asset model.
   *
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The expected current entity tag (ETag) for the asset model’s latest or active version (specified using `matchForVersionType`). The delete request is rejected if the tag does not match the latest or active version's current entity tag. See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  ifMatch?: string | undefined;

  /**
   * Accepts ***** to reject the delete request if an active version (specified using `matchForVersionType` as `ACTIVE`) already exists for the asset model.
   *
   * @public
   */
  ifNoneMatch?: string | undefined;

  /**
   * Specifies the asset model version type (`LATEST` or `ACTIVE`) used in conjunction with `If-Match` or `If-None-Match` headers to determine the target ETag for the delete operation.
   *
   * @public
   */
  matchForVersionType?: AssetModelVersionType | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelCompositeModelResponse {
  /**
   * Contains current status information for an asset model. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelInterfaceRelationshipRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the interface asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteAssetModelInterfaceRelationshipResponse {
  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the interface asset model.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * The ARN of the asset model, which has the following format. `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}`
   *
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * Contains current status information for an asset model. For more information, see [Asset and model states](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteComputationModelRequest {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteComputationModelResponse {
  /**
   * The status of the computation model. It contains a state (DELETING after successfully calling this operation) and any error messages.
   *
   * @public
   */
  computationModelStatus: ComputationModelStatus | undefined;
}

/**
 * @public
 */
export interface DeleteDashboardRequest {
  /**
   * The ID of the dashboard to delete.
   *
   * @public
   */
  dashboardId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
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
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * The status of the dataset. This contains the state and any error messages. State is `DELETING` after a successfull call to this API, and any associated error message.
   *
   * @public
   */
  datasetStatus: DatasetStatus | undefined;
}

/**
 * @public
 */
export interface DeleteGatewayRequest {
  /**
   * The ID of the gateway to delete.
   *
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * Request structure for DeletePipeline operation.
 *
 * @public
 */
export interface DeletePipelineRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline to delete.
   *
   * @public
   */
  pipelineName: string | undefined;
}

/**
 * Response structure for DeletePipeline operation.
 *
 * @public
 */
export interface DeletePipelineResponse {
  /**
   * The current lifecycle status of the pipeline.
   *
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * The ID of the portal to delete.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalResponse {
  /**
   * The status of the portal, which contains a state (`DELETING` after successfully calling this operation) and any error message.
   *
   * @public
   */
  portalStatus: PortalStatus | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * The ID of the project.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {}

/**
 * Request structure for DeleteTask operation.
 *
 * @public
 */
export interface DeleteTaskRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the task to delete.
   *
   * @public
   */
  taskName: string | undefined;
}

/**
 * Response structure for DeleteTask operation.
 *
 * @public
 */
export interface DeleteTaskResponse {
  /**
   * The current lifecycle status of the task.
   *
   * @public
   */
  status: ResourceStatus | undefined;
}

/**
 * @public
 */
export interface DeleteTimeSeriesRequest {
  /**
   * The alias that identifies the time series.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The ID of the asset in which the asset property was created. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId?: string | undefined;

  /**
   * The ID of the asset property. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId?: string | undefined;

  /**
   * A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceRequest {
  /**
   * The name of the workspace to delete.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure that the request is idempotent. If you retry a request that completed successfully using the same client token, the retry succeeds without performing any further actions.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkspaceResponse {
  /**
   * The status of the workspace after the deletion request, which is `DELETING` when the operation returns.
   *
   * @public
   */
  workspaceStatus: WorkspaceStatus | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPolicyRequest {
  /**
   * The ID of the access policy.
   *
   * @public
   */
  accessPolicyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccessPolicyResponse {
  /**
   * The ID of the access policy.
   *
   * @public
   */
  accessPolicyId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the access policy, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:access-policy/$\{AccessPolicyId\}`
   *
   * @public
   */
  accessPolicyArn: string | undefined;

  /**
   * The identity (IAM Identity Center user, IAM Identity Center group, or IAM user) to which this access policy applies.
   *
   * @public
   */
  accessPolicyIdentity: Identity | undefined;

  /**
   * The IoT SiteWise Monitor resource (portal or project) to which this access policy provides access.
   *
   * @public
   */
  accessPolicyResource: Resource | undefined;

  /**
   * The access policy permission. Note that a project `ADMINISTRATOR` is also known as a project owner.
   *
   * @public
   */
  accessPolicyPermission: Permission | undefined;

  /**
   * The date the access policy was created, in Unix epoch time.
   *
   * @public
   */
  accessPolicyCreationDate: Date | undefined;

  /**
   * The date the access policy was last updated, in Unix epoch time.
   *
   * @public
   */
  accessPolicyLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeActionRequest {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId: string | undefined;
}

/**
 * @public
 */
export interface DescribeActionResponse {
  /**
   * The ID of the action.
   *
   * @public
   */
  actionId: string | undefined;

  /**
   * The resource the action will be taken on.
   *
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * The ID of the action definition.
   *
   * @public
   */
  actionDefinitionId: string | undefined;

  /**
   * The JSON payload of the action.
   *
   * @public
   */
  actionPayload: ActionPayload | undefined;

  /**
   * The time the action was executed.
   *
   * @public
   */
  executionTime: Date | undefined;

  /**
   * The detailed resource this action resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationRequest {
  /**
   * Name of the workspace to associate with the underlying Application
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * ID of the Application
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationResponse {
  /**
   * ARN of the application
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Timestamp when the application was created
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * DNS subdomain for the application
   *
   * @public
   */
  dnsSubdomain: string | undefined;

  /**
   * Description of the application
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Unique identifier of the application
   *
   * @public
   */
  id: string | undefined;

  /**
   * Identity Center Application ARN associated with this application
   *
   * @public
   */
  idcApplicationArn: string | undefined;

  /**
   * Name of the application
   *
   * @public
   */
  name: string | undefined;

  /**
   * Current status of the application
   *
   * @public
   */
  status: ApplicationStatus | undefined;

  /**
   * Timestamp when the application was last updated
   *
   * @public
   */
  updatedAt: Date | undefined;

  /**
   * Name of the workspace this application belongs to
   *
   * @public
   */
  workspaceName: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetRequest {
  /**
   * The ID of the asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * Whether or not to exclude asset properties from the response.
   *
   * @public
   */
  excludeProperties?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAssetResponse {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The external ID of the asset, if any.
   *
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset/$\{AssetId\}`
   *
   * @public
   */
  assetArn: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  assetName: string | undefined;

  /**
   * The ID of the asset model that was used to create the asset.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The list of asset properties for the asset.
   *
   * This object doesn't include properties that you define in composite models. You can find composite model properties in the `assetCompositeModels` object.
   *
   * @public
   */
  assetProperties: AssetProperty[] | undefined;

  /**
   * A list of asset hierarchies that each contain a `hierarchyId`. A hierarchy specifies allowed parent/child asset relationships.
   *
   * @public
   */
  assetHierarchies: AssetHierarchy[] | undefined;

  /**
   * The composite models for the asset.
   *
   * @public
   */
  assetCompositeModels?: AssetCompositeModel[] | undefined;

  /**
   * The date the asset was created, in Unix epoch time.
   *
   * @public
   */
  assetCreationDate: Date | undefined;

  /**
   * The date the asset was last updated, in Unix epoch time.
   *
   * @public
   */
  assetLastUpdateDate: Date | undefined;

  /**
   * The current status of the asset, which contains a state and any error message.
   *
   * @public
   */
  assetStatus: AssetStatus | undefined;

  /**
   * A description for the asset.
   *
   * @public
   */
  assetDescription?: string | undefined;

  /**
   * The list of the immediate child custom composite model summaries for the asset.
   *
   * @public
   */
  assetCompositeModelSummaries?: AssetCompositeModelSummary[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetCompositeModelRequest {
  /**
   * The ID of the asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of a composite model on this asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetCompositeModelId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetCompositeModelResponse {
  /**
   * The ID of the asset, in UUID format. This ID uniquely identifies the asset within IoT SiteWise and can be used with other IoT SiteWise APIs.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of a composite model on this asset.
   *
   * @public
   */
  assetCompositeModelId: string | undefined;

  /**
   * An external ID to assign to the asset model.
   *
   * If the composite model is a component-based composite model, or one nested inside a component model, you can only set the external ID using `UpdateAssetModelCompositeModel` and specifying the derived ID of the model or property from the created model it's a part of.
   *
   * @public
   */
  assetCompositeModelExternalId?: string | undefined;

  /**
   * The path to the composite model listing the parent composite models.
   *
   * @public
   */
  assetCompositeModelPath: AssetCompositeModelPathSegment[] | undefined;

  /**
   * The unique, friendly name for the composite model.
   *
   * @public
   */
  assetCompositeModelName: string | undefined;

  /**
   * A description for the composite model.
   *
   * @public
   */
  assetCompositeModelDescription: string | undefined;

  /**
   * The composite model type. Valid values are `AWS/ALARM`, `CUSTOM`, or `AWS/L4E_ANOMALY`.
   *
   * @public
   */
  assetCompositeModelType: string | undefined;

  /**
   * The property definitions of the composite model that was used to create the asset.
   *
   * @public
   */
  assetCompositeModelProperties: AssetProperty[] | undefined;

  /**
   * The list of composite model summaries.
   *
   * @public
   */
  assetCompositeModelSummaries: AssetCompositeModelSummary[] | undefined;

  /**
   * The available actions for a composite model on this asset.
   *
   * @public
   */
  actionDefinitions?: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * Whether or not to exclude asset model properties from the response.
   *
   * @public
   */
  excludeProperties?: boolean | undefined;

  /**
   * The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is `LATEST`. See [Asset model versions](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * Contains information about the relationship between an asset model and an interface asset model that is applied to it.
 *
 * @public
 */
export interface InterfaceRelationship {
  /**
   * The ID of the asset model that has the interface applied to it.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelResponse {
  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The external ID of the asset model, if any.
   *
   * @public
   */
  assetModelExternalId?: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the asset model, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:asset-model/$\{AssetModelId\}`
   *
   * @public
   */
  assetModelArn: string | undefined;

  /**
   * The name of the asset model.
   *
   * @public
   */
  assetModelName: string | undefined;

  /**
   * The type of asset model.
   *
   * - **ASSET_MODEL** – (default) An asset model that you can use to create assets. Can't be included as a component in another asset model.
   * - **COMPONENT_MODEL** – A reusable component that you can include in the composite models of other asset models. You can't create assets directly from this type of asset model.
   *
   * @public
   */
  assetModelType?: AssetModelType | undefined;

  /**
   * The asset model's description.
   *
   * @public
   */
  assetModelDescription: string | undefined;

  /**
   * The list of asset properties for the asset model.
   *
   * This object doesn't include properties that you define in composite models. You can find composite model properties in the `assetModelCompositeModels` object.
   *
   * @public
   */
  assetModelProperties: AssetModelProperty[] | undefined;

  /**
   * A list of asset model hierarchies that each contain a `childAssetModelId` and a `hierarchyId` (named `id`). A hierarchy specifies allowed parent/child asset relationships for an asset model.
   *
   * @public
   */
  assetModelHierarchies: AssetModelHierarchy[] | undefined;

  /**
   * The list of built-in composite models for the asset model, such as those with those of type `AWS/ALARMS`.
   *
   * @public
   */
  assetModelCompositeModels?: AssetModelCompositeModel[] | undefined;

  /**
   * The list of the immediate child custom composite model summaries for the asset model.
   *
   * @public
   */
  assetModelCompositeModelSummaries?: AssetModelCompositeModelSummary[] | undefined;

  /**
   * The date the asset model was created, in Unix epoch time.
   *
   * @public
   */
  assetModelCreationDate: Date | undefined;

  /**
   * The date the asset model was last updated, in Unix epoch time.
   *
   * @public
   */
  assetModelLastUpdateDate: Date | undefined;

  /**
   * The current status of the asset model, which contains a state and any error message.
   *
   * @public
   */
  assetModelStatus: AssetModelStatus | undefined;

  /**
   * The version of the asset model. See [Asset model versions](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelVersion?: string | undefined;

  /**
   * A list of interface details that describe the interfaces implemented by this asset model, including interface asset model IDs and property mappings.
   *
   * @public
   */
  interfaceDetails?: InterfaceRelationship[] | undefined;

  /**
   * The entity tag (ETag) is a hash of the retrieved version of the asset model. It's used to make concurrent updates safely to the resource. See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * See [Optimistic locking for asset model writes](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/opt-locking-for-model.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  eTag?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelCompositeModelRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of a composite model on this asset model. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * The version alias that specifies the latest or active version of the asset model. The details are returned in the response. The default value is `LATEST`. See [Asset model versions](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/model-active-version.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetModelVersion?: string | undefined;
}

/**
 * Represents a composite model that composed an asset model of type `COMPONENT_MODEL`.
 *
 * @public
 */
export interface CompositionRelationshipItem {
  /**
   * The ID of the component.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Metadata for the composition relationship established by using `composedAssetModelId` in [`CreateAssetModelCompositeModel`](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html).
 *
 * @public
 */
export interface CompositionDetails {
  /**
   * An array detailing the composition relationship for this composite model.
   *
   * @public
   */
  compositionRelationship?: CompositionRelationshipItem[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelCompositeModelResponse {
  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of a composite model on this asset model.
   *
   * @public
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * The external ID of a composite model on this asset model.
   *
   * @public
   */
  assetModelCompositeModelExternalId?: string | undefined;

  /**
   * The path to the composite model listing the parent composite models.
   *
   * @public
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * The unique, friendly name for the composite model.
   *
   * @public
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * The description for the composite model.
   *
   * @public
   */
  assetModelCompositeModelDescription: string | undefined;

  /**
   * The composite model type. Valid values are `AWS/ALARM`, `CUSTOM`, or `AWS/L4E_ANOMALY`.
   *
   * @public
   */
  assetModelCompositeModelType: string | undefined;

  /**
   * The property definitions of the composite model.
   *
   * @public
   */
  assetModelCompositeModelProperties: AssetModelProperty[] | undefined;

  /**
   * Metadata for the composition relationship established by using `composedAssetModelId` in [`CreateAssetModelCompositeModel`](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html). For instance, an array detailing the path of the composition relationship for this composite model.
   *
   * @public
   */
  compositionDetails?: CompositionDetails | undefined;

  /**
   * The list of composite model summaries for the composite model.
   *
   * @public
   */
  assetModelCompositeModelSummaries: AssetModelCompositeModelSummary[] | undefined;

  /**
   * The available actions for a composite model on this asset model.
   *
   * @public
   */
  actionDefinitions?: ActionDefinition[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelInterfaceRelationshipRequest {
  /**
   * The ID of the asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the interface asset model. This can be either the actual ID in UUID format, or else externalId: followed by the external ID.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;
}

/**
 * Maps a hierarchy from an interface asset model to a hierarchy in the asset model where the interface is applied.
 *
 * @public
 */
export interface HierarchyMapping {
  /**
   * The ID of the hierarchy in the asset model where the interface is applied.
   *
   * @public
   */
  assetModelHierarchyId: string | undefined;

  /**
   * The ID of the hierarchy in the interface asset model.
   *
   * @public
   */
  interfaceAssetModelHierarchyId: string | undefined;
}

/**
 * Maps a property from an interface asset model to a property in the asset model where the interface is applied.
 *
 * @public
 */
export interface PropertyMapping {
  /**
   * The ID of the property in the asset model where the interface is applied.
   *
   * @public
   */
  assetModelPropertyId: string | undefined;

  /**
   * The ID of the property in the interface asset model.
   *
   * @public
   */
  interfaceAssetModelPropertyId: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetModelInterfaceRelationshipResponse {
  /**
   * The ID of the asset model.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The ID of the interface asset model.
   *
   * @public
   */
  interfaceAssetModelId: string | undefined;

  /**
   * A list of property mappings between the interface asset model and the asset model where the interface is applied.
   *
   * @public
   */
  propertyMappings: PropertyMapping[] | undefined;

  /**
   * A list of hierarchy mappings between the interface asset model and the asset model where the interface is applied.
   *
   * @public
   */
  hierarchyMappings: HierarchyMapping[] | undefined;
}

/**
 * @public
 */
export interface DescribeAssetPropertyRequest {
  /**
   * The ID of the asset. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The ID of the asset property. This can be either the actual ID in UUID format, or else `externalId:` followed by the external ID, if it has one. For more information, see [Referencing objects with external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  propertyId: string | undefined;
}

/**
 * Contains asset property information.
 *
 * @public
 */
export interface Property {
  /**
   * The ID of the asset property.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The external ID of the asset property. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;

  /**
   * The name of the property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The alias that identifies the property, such as an OPC-UA server data stream path (for example, `/company/windfarm/3/turbine/7/temperature`). For more information, see [Mapping industrial data streams to asset properties](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/connect-data-streams.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * The asset property's notification topic and state. For more information, see [UpdateAssetProperty](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_UpdateAssetProperty.html).
   *
   * @public
   */
  notification?: PropertyNotification | undefined;

  /**
   * The property data type.
   *
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * The unit (such as `Newtons` or `RPM`) of the asset property.
   *
   * @public
   */
  unit?: string | undefined;

  /**
   * The property type (see `PropertyType`). A property contains one type.
   *
   * @public
   */
  type?: PropertyType | undefined;

  /**
   * The structured path to the property from the root of the asset.
   *
   * @public
   */
  path?: AssetPropertyPathSegment[] | undefined;
}

/**
 * Contains information about a composite model property on an asset.
 *
 * @public
 */
export interface CompositeModelProperty {
  /**
   * The name of the property.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of the composite model that defines this property.
   *
   * @public
   */
  type: string | undefined;

  /**
   * Contains asset property information.
   *
   * @public
   */
  assetProperty: Property | undefined;

  /**
   * The ID of the composite model that contains the property.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The external ID of the composite model that contains the property. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  externalId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAssetPropertyResponse {
  /**
   * The ID of the asset, in UUID format.
   *
   * @public
   */
  assetId: string | undefined;

  /**
   * The external ID of the asset. For more information, see [Using external IDs](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  assetExternalId?: string | undefined;

  /**
   * The name of the asset.
   *
   * @public
   */
  assetName: string | undefined;

  /**
   * The ID of the asset model, in UUID format.
   *
   * @public
   */
  assetModelId: string | undefined;

  /**
   * The asset property's definition, alias, and notification state.
   *
   * This response includes this object for normal asset properties. If you describe an asset property in a composite model, this response includes the asset property information in `compositeModel`.
   *
   * @public
   */
  assetProperty?: Property | undefined;

  /**
   * The composite model that declares this asset property, if this asset property exists in a composite model.
   *
   * @public
   */
  compositeModel?: CompositeModelProperty | undefined;
}

/**
 * @public
 */
export interface DescribeBulkImportJobRequest {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeBulkImportJobResponse {
  /**
   * The ID of the job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The unique name that helps identify the job request.
   *
   * @public
   */
  jobName: string | undefined;

  /**
   * The status of the bulk import job can be one of following values:
   *
   * - `PENDING` – IoT SiteWise is waiting for the current bulk import job to finish.
   * - `CANCELLED` – The bulk import job has been canceled.
   * - `RUNNING` – IoT SiteWise is processing your request to import your data from Amazon S3.
   * - `COMPLETED` – IoT SiteWise successfully completed your request to import data from Amazon S3.
   * - `FAILED` – IoT SiteWise couldn't process your request to import data from Amazon S3. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.
   * - `COMPLETED_WITH_FAILURES` – IoT SiteWise completed your request to import data from Amazon S3 with errors. You can use logs saved in the specified error report location in Amazon S3 to troubleshoot issues.
   *
   * @public
   */
  jobStatus: JobStatus | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the IAM role that allows IoT SiteWise to read Amazon S3 data.
   *
   * @public
   */
  jobRoleArn: string | undefined;

  /**
   * The files in the specified Amazon S3 bucket that contain your data. You can specify up to 100 files for each bulk import job. Each file supports the following size limits:
   *
   * - Parquet files – Up to 256 MiB.
   * - Other file formats – Up to 5 GiB.
   *
   * @public
   */
  files: File[] | undefined;

  /**
   * The Amazon S3 destination where errors associated with the job creation request are saved.
   *
   * @public
   */
  errorReportLocation: ErrorReportLocation | undefined;

  /**
   * Contains the configuration information of a job, such as the file format used to save data in Amazon S3.
   *
   * @public
   */
  jobConfiguration?: JobConfiguration | undefined;

  /**
   * The date the job was created, in Unix epoch TIME.
   *
   * @public
   */
  jobCreationDate: Date | undefined;

  /**
   * The date the job was last updated, in Unix epoch time.
   *
   * @public
   */
  jobLastUpdateDate: Date | undefined;

  /**
   * If set to true, ingest new data into IoT SiteWise storage. Measurements with notifications, metrics and transforms are computed. If set to false, historical data is ingested into IoT SiteWise as is.
   *
   * @public
   */
  adaptiveIngestion?: boolean | undefined;

  /**
   * If set to true, your data files is deleted from S3, after ingestion into IoT SiteWise storage.
   *
   * @public
   */
  deleteFilesAfterImport?: boolean | undefined;

  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId?: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelRequest {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The version of the computation model.
   *
   * @public
   */
  computationModelVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelExecutionSummaryRequest {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The type of the resolved resource.
   *
   * @public
   */
  resolveToResourceType?: ResolveToResourceType | undefined;

  /**
   * The ID of the resolved resource.
   *
   * @public
   */
  resolveToResourceId?: string | undefined;
}

/**
 * @public
 */
export interface DescribeComputationModelExecutionSummaryResponse {
  /**
   * The ID of the computation model.
   *
   * @public
   */
  computationModelId: string | undefined;

  /**
   * The detailed resource this execution summary resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * Contains the execution summary of the computation model.
   *
   * @public
   */
  computationModelExecutionSummary: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardRequest {
  /**
   * The ID of the dashboard.
   *
   * @public
   */
  dashboardId: string | undefined;
}

/**
 * @public
 */
export interface DescribeDashboardResponse {
  /**
   * The ID of the dashboard.
   *
   * @public
   */
  dashboardId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the dashboard, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dashboard/$\{DashboardId\}`
   *
   * @public
   */
  dashboardArn: string | undefined;

  /**
   * The name of the dashboard.
   *
   * @public
   */
  dashboardName: string | undefined;

  /**
   * The ID of the project that the dashboard is in.
   *
   * @public
   */
  projectId: string | undefined;

  /**
   * The dashboard's description.
   *
   * @public
   */
  dashboardDescription?: string | undefined;

  /**
   * The dashboard's definition JSON literal. For detailed information, see [Creating dashboards (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-dashboards-using-aws-cli.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  dashboardDefinition: string | undefined;

  /**
   * The date the dashboard was created, in Unix epoch time.
   *
   * @public
   */
  dashboardCreationDate: Date | undefined;

  /**
   * The date the dashboard was last updated, in Unix epoch time.
   *
   * @public
   */
  dashboardLastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * The version of the dataset.
   *
   * @public
   */
  datasetVersion?: string | undefined;
}

/**
 * Contains enrichment status information for a specific data type in a dataset.
 *
 * @public
 */
export interface DatasetEnrichmentEntry {
  /**
   * The enrichment status of the data type in the dataset.
   *
   * @public
   */
  status: DatasetEnrichmentStatus | undefined;

  /**
   * The date the data was last enriched, in Unix epoch time.
   *
   * @public
   */
  lastEnrichedAt?: Date | undefined;
}

/**
 * Contains the enrichment status information for a dataset across data types.
 *
 * @public
 */
export interface DatasetEnrichment {
  /**
   * The enrichment status for video data in the dataset.
   *
   * @public
   */
  video?: DatasetEnrichmentEntry | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * The ID of the dataset.
   *
   * @public
   */
  datasetId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference-arns.html) of the dataset. The format is `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:dataset/$\{DatasetId\}`.
   *
   * @public
   */
  datasetArn: string | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  datasetName: string | undefined;

  /**
   * A description about the dataset, and its functionality.
   *
   * @public
   */
  datasetDescription: string | undefined;

  /**
   * The type of dataset: a session dataset, a curated dataset, or a connection to an external datasource.
   *
   * @public
   */
  datasetType?: DatasetTypeEnum | undefined;

  /**
   * The configuration for the dataset.
   *
   * @public
   */
  datasetConfig?: DatasetConfig | undefined;

  /**
   * The name of the workspace that contains the dataset.
   *
   * @public
   */
  workspaceName?: string | undefined;

  /**
   * The metadata for the dataset.
   *
   * @public
   */
  metadata?: Record<string, string> | undefined;

  /**
   * The data source for the dataset.
   *
   * @public
   */
  datasetSource: DatasetSource | undefined;

  /**
   * The status of the dataset. This contains the state and any error messages. State is `CREATING` after a successfull call to this API, and any associated error message. The state is `ACTIVE` when ready to use.
   *
   * @public
   */
  datasetStatus: DatasetStatus | undefined;

  /**
   * The dataset creation date, in Unix epoch time.
   *
   * @public
   */
  datasetCreationDate: Date | undefined;

  /**
   * The date the dataset was last updated, in Unix epoch time.
   *
   * @public
   */
  datasetLastUpdateDate: Date | undefined;

  /**
   * The version of the dataset.
   *
   * @public
   */
  datasetVersion?: string | undefined;

  /**
   * The enrichment status of the dataset.
   *
   * @public
   */
  enrichmentStatus?: DatasetEnrichment | undefined;
}

/**
 * Request to describe a dataset export job.
 *
 * @public
 */
export interface DescribeDatasetExportJobRequest {
  /**
   * The name of the workspace that contains the dataset export job.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The unique identifier for the dataset export job.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * Response for describe dataset export job request.
 *
 * @public
 */
export interface DescribeDatasetExportJobResponse {
  /**
   * The unique identifier for the dataset export job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the workspace that contains the dataset export job.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The current status of the dataset export job.
   *
   * @public
   */
  status: DatasetExportJobStatus | undefined;

  /**
   * The timestamp when the job started processing.
   *
   * @public
   */
  startedAt: Date | undefined;

  /**
   * The timestamp when the job completed, or null if the job is still running.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * The S3 URI where output clips are written.
   *
   * @public
   */
  destinationS3Uri: string | undefined;

  /**
   * The location where the error report will be written on failure.
   *
   * @public
   */
  errorReportLocation: ExportErrorReportLocation | undefined;

  /**
   * The processing input that was provided in the CreateDatasetExportJob request.
   *
   * @public
   */
  input: ProcessingInput | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultEncryptionConfigurationRequest {}

/**
 * Contains the details of an IoT SiteWise configuration error.
 *
 * @public
 */
export interface ConfigurationErrorDetails {
  /**
   * The error code.
   *
   * @public
   */
  code: ErrorCode | undefined;

  /**
   * The error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Contains current status information for the configuration.
 *
 * @public
 */
export interface ConfigurationStatus {
  /**
   * The current state of the configuration.
   *
   * @public
   */
  state: ConfigurationState | undefined;

  /**
   * Contains associated error information, if any.
   *
   * @public
   */
  error?: ConfigurationErrorDetails | undefined;
}

/**
 * @public
 */
export interface DescribeDefaultEncryptionConfigurationResponse {
  /**
   * The type of encryption used for the encryption configuration.
   *
   * @public
   */
  encryptionType: EncryptionType | undefined;

  /**
   * The key ARN of the customer managed key used for KMS encryption if you use `KMS_BASED_ENCRYPTION`.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The status of the account configuration. This contains the `ConfigurationState`. If there's an error, it also contains the `ErrorDetails`.
   *
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;
}

/**
 * @public
 */
export interface DescribeEnrichmentJobRequest {
  /**
   * The name of the IoT SiteWise workspace containing the enrichment job.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The unique identifier of the enrichment job to retrieve. This is the jobId returned by CreateEnrichmentJob.
   *
   * @public
   */
  jobId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEnrichmentJobResponse {
  /**
   * The unique identifier of the enrichment job.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * Current status of the enrichment job. Possible values:
   *
   * - PENDING: Job is waiting to start processing
   * - RUNNING: Job is actively processing video data
   * - COMPLETED: Job finished successfully; embeddings available in IoT SiteWise
   * - FAILED: Job encountered an error; see failureMessage for details
   * - TIMED_OUT: Job exceeded maximum processing time limit
   * - CANCELLED: Job was cancelled by user request
   *
   * @public
   */
  status: EnrichmentJobStatus | undefined;

  /**
   * The name of the IoT SiteWise workspace containing the job.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The type of enrichment job, derived from the job configuration. Currently EVENT_DETECTION is the only supported type.
   *
   * @public
   */
  jobType: JobType | undefined;

  /**
   * The complete job configuration as originally submitted, including the analysis type and parameters. For event detection jobs, this includes the dataset ID, time series identifier, and trim settings defining the analysis time range.
   *
   * @public
   */
  jobConfiguration: EnrichmentJobConfiguration | undefined;

  /**
   * Timestamp when the enrichment job was created in ISO 8601 format.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * Timestamp when the job status was last updated in ISO 8601 format. Useful for tracking recent activity.
   *
   * @public
   */
  updatedAt?: Date | undefined;

  /**
   * Timestamp when the job completed successfully in ISO 8601 format. Only present if status is COMPLETED.
   *
   * @public
   */
  completedAt?: Date | undefined;

  /**
   * Timestamp when the job was cancelled in ISO 8601 format. Only present if status is CANCELLED.
   *
   * @public
   */
  cancelledAt?: Date | undefined;

  /**
   * Human-readable error message explaining why the job failed. Only present if status is FAILED. Use this information to diagnose configuration issues, permission problems, or data processing errors.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionRequest {
  /**
   * The ID of the execution.
   *
   * @public
   */
  executionId: string | undefined;
}

/**
 * The status of the execution.
 *
 * @public
 */
export interface ExecutionStatus {
  /**
   * The current state of the computation model.
   *
   * @public
   */
  state: ExecutionState | undefined;
}

/**
 * @public
 */
export interface DescribeExecutionResponse {
  /**
   * The ID of the execution.
   *
   * @public
   */
  executionId: string | undefined;

  /**
   * The type of action exectued.
   *
   * @public
   */
  actionType?: string | undefined;

  /**
   * The resource the action will be taken on. This can include asset-based resources and computation model resources.
   *
   * @public
   */
  targetResource: TargetResource | undefined;

  /**
   * The version of the target resource.
   *
   * @public
   */
  targetResourceVersion: string | undefined;

  /**
   * The detailed resource this execution resolves to.
   *
   * @public
   */
  resolveTo?: ResolveTo | undefined;

  /**
   * The time the process started.
   *
   * @public
   */
  executionStartTime: Date | undefined;

  /**
   * The time the process ended.
   *
   * @public
   */
  executionEndTime?: Date | undefined;

  /**
   * The status of the execution process.
   *
   * @public
   */
  executionStatus: ExecutionStatus | undefined;

  /**
   * The result of the execution.
   *
   * @public
   */
  executionResult?: Record<string, string> | undefined;

  /**
   * Provides detailed information about the execution of your anomaly detection models. This includes model metrics and training timestamps for both training and inference actions.
   *
   * - The training action (Amazon Web Services/ANOMALY_DETECTION_TRAINING), includes performance metrics that help you compare different versions of your anomaly detection models. These metrics provide insights into the model's performance during the training process.
   * - The inference action (Amazon Web Services/ANOMALY_DETECTION_INFERENCE), includes information about the results of executing your anomaly detection models. This helps you understand the output of your models and assess their performance.
   *
   * @public
   */
  executionDetails?: Record<string, string> | undefined;

  /**
   * Entity version used for the execution.
   *
   * @public
   */
  executionEntityVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayRequest {
  /**
   * The ID of the gateway device.
   *
   * @public
   */
  gatewayId: string | undefined;
}

/**
 * Contains a summary of a gateway capability configuration.
 *
 * @public
 */
export interface GatewayCapabilitySummary {
  /**
   * The namespace of the capability configuration. For example, if you configure OPC UA sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace `iotsitewise:opcuacollector:3`.
   *
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * The synchronization status of the gateway capability configuration. The sync status can be one of the following:
   *
   * - `IN_SYNC` - The gateway is running with the latest configuration.
   * - `OUT_OF_SYNC` - The gateway hasn't received the latest configuration.
   * - `SYNC_FAILED` - The gateway rejected the latest configuration.
   * - `UNKNOWN` - The gateway hasn't reported its sync status.
   * - `NOT_APPLICABLE` - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.
   *
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayResponse {
  /**
   * The ID of the gateway device.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The name of the gateway.
   *
   * @public
   */
  gatewayName: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the gateway, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:gateway/$\{GatewayId\}`
   *
   * @public
   */
  gatewayArn: string | undefined;

  /**
   * The gateway's platform.
   *
   * @public
   */
  gatewayPlatform?: GatewayPlatform | undefined;

  /**
   * The version of the gateway. A value of `3` indicates an MQTT-enabled, V3 gateway, while `2` indicates a Classic streams, V2 gateway.
   *
   * @public
   */
  gatewayVersion?: string | undefined;

  /**
   * A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use [DescribeGatewayCapabilityConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html).
   *
   * @public
   */
  gatewayCapabilitySummaries: GatewayCapabilitySummary[] | undefined;

  /**
   * The date the gateway was created, in Unix epoch time.
   *
   * @public
   */
  creationDate: Date | undefined;

  /**
   * The date the gateway was last updated, in Unix epoch time.
   *
   * @public
   */
  lastUpdateDate: Date | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayCapabilityConfigurationRequest {
  /**
   * The ID of the gateway that defines the capability configuration.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The namespace of the capability configuration. For example, if you configure OPC UA sources for an MQTT-enabled gateway, your OPC-UA capability configuration has the namespace `iotsitewise:opcuacollector:3`.
   *
   * @public
   */
  capabilityNamespace: string | undefined;
}

/**
 * @public
 */
export interface DescribeGatewayCapabilityConfigurationResponse {
  /**
   * The ID of the gateway that defines the capability configuration.
   *
   * @public
   */
  gatewayId: string | undefined;

  /**
   * The namespace of the gateway capability.
   *
   * @public
   */
  capabilityNamespace: string | undefined;

  /**
   * The JSON document that defines the gateway capability's configuration. For more information, see [Configuring data sources (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  capabilityConfiguration: string | undefined;

  /**
   * The synchronization status of the gateway capability configuration. The sync status can be one of the following:
   *
   * - `IN_SYNC` - The gateway is running with the latest configuration.
   * - `OUT_OF_SYNC` - The gateway hasn't received the latest configuration.
   * - `SYNC_FAILED` - The gateway rejected the latest configuration.
   * - `UNKNOWN` - The gateway hasn't reported its sync status.
   * - `NOT_APPLICABLE` - The gateway doesn't support this capability. This is most common when integrating partner data sources, because the data integration is handled externally by the partner.
   *
   * @public
   */
  capabilitySyncStatus: CapabilitySyncStatus | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName?: string | undefined;
}

/**
 * Contains logging options.
 *
 * @public
 */
export interface LoggingOptions {
  /**
   * The IoT SiteWise logging verbosity level.
   *
   * @public
   */
  level: LoggingLevel | undefined;
}

/**
 * @public
 */
export interface DescribeLoggingOptionsResponse {
  /**
   * The current logging options.
   *
   * @public
   */
  loggingOptions: LoggingOptions | undefined;
}

/**
 * Request structure for DescribePipeline operation.
 *
 * @public
 */
export interface DescribePipelineRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The version number of the pipeline to retrieve. If not specified, returns the latest version.
   *
   * @public
   */
  pipelineVersion?: string | undefined;
}

/**
 * Response structure for DescribePipeline operation.
 *
 * @public
 */
export interface DescribePipelineResponse {
  /**
   * A unique name of the pipeline within the workspace.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The description of the pipeline.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The ARN of the pipeline.
   *
   * @public
   */
  pipelineArn: string | undefined;

  /**
   * The version of the pipeline.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The environment variables shared across all compute nodes in the pipeline.
   *
   * @public
   */
  environmentVariables?: Record<string, string> | undefined;

  /**
   * The list of compute nodes that form the pipeline DAG.
   *
   * @public
   */
  computations: ComputeNode[] | undefined;

  /**
   * The current lifecycle status of the pipeline.
   *
   * @public
   */
  status: ResourceStatus | undefined;

  /**
   * The time the pipeline was created, in Unix epoch time.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time the pipeline was last updated, in Unix epoch time.
   *
   * @public
   */
  updatedAt: Date | undefined;
}

/**
 * Request structure for DescribePipelineExecution operation.
 *
 * @public
 */
export interface DescribePipelineExecutionRequest {
  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The unique identifier of the pipeline execution.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of compute nodes to return per request. This is an upper bound; the actual number of results may be less. Default: 50.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Contains a detailed error entry for granular troubleshooting of pipeline failures.
 *
 * @public
 */
export interface DetailedPipelineError {
  /**
   * The error code.
   *
   * @public
   */
  code: DetailedPipelineErrorCode | undefined;

  /**
   * The associated error message.
   *
   * @public
   */
  message: string | undefined;
}

/**
 * Additional information about a compute node that has failed.
 *
 * @public
 */
export interface ComputeNodeExecutionStateDetails {
  /**
   * Classification of the failure.
   *
   * @public
   */
  code: ComputeNodeErrorCode | undefined;

  /**
   * Human-readable description of why the compute node failed.
   *
   * @public
   */
  message: string | undefined;

  /**
   * Detailed error entries to help diagnose the failure.
   *
   * @public
   */
  details?: DetailedPipelineError[] | undefined;
}

/**
 * Current execution status of a compute node within a pipeline execution.
 *
 * @public
 */
export interface ComputeNodeExecutionStatus {
  /**
   * Current state of the compute node execution.
   *
   * @public
   */
  state: ComputeNodeExecutionState | undefined;

  /**
   * Additional information about the compute node's failure. Populated when the compute node has failed.
   *
   * @public
   */
  stateDetails?: ComputeNodeExecutionStateDetails | undefined;
}

/**
 * Contains detailed execution information for a compute node within a pipeline execution.
 *
 * @public
 */
export interface ComputeNodeExecutionDetails {
  /**
   * The name of the compute node.
   *
   * @public
   */
  computeNodeName: string | undefined;

  /**
   * The name of the task executed for this compute node.
   *
   * @public
   */
  taskName: string | undefined;

  /**
   * The ARN of the task.
   *
   * @public
   */
  taskArn: string | undefined;

  /**
   * The task version that executed for this compute node.
   *
   * @public
   */
  taskVersion: string | undefined;

  /**
   * A list of compute node names that this node depends on.
   *
   * @public
   */
  dependsOn: string[] | undefined;

  /**
   * The current execution status of the compute node.
   *
   * @public
   */
  status: ComputeNodeExecutionStatus | undefined;

  /**
   * The time the compute node execution started, in Unix epoch time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time the compute node execution completed, in Unix epoch time.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The fully resolved environment variables used for this compute node execution.
   *
   * @public
   */
  executionEnvironmentVariables?: Record<string, string> | undefined;

  /**
   * The fully resolved mounts used for this compute node execution, after merging task-defined mounts with any execution-level mount overrides. Each mount attaches an external data source to the container filesystem at a relative path under the service-owned mount root.
   *
   * @public
   */
  executionMounts?: Mount[] | undefined;
}

/**
 * Environment variables provided as input for a pipeline execution.
 *
 * @public
 */
export interface ExecutionEnvironmentVariables {
  /**
   * Global environment variables that apply to all compute nodes in the pipeline execution.
   *
   * @public
   */
  global?: Record<string, string> | undefined;

  /**
   * Per-compute-node environment variable overrides. Each entry maps a compute node name to its environment variable overrides.
   *
   * @public
   */
  computeNodes?: Record<string, Record<string, string>> | undefined;
}

/**
 * Runtime mount overrides applied to a single pipeline execution. Overrides are transient — they do not modify the stored task configuration.
 *
 * @public
 */
export interface MountOverrides {
  /**
   * The mount overrides for each compute node, keyed by compute node name.
   *
   * @public
   */
  computeNodes: Record<string, Mount[]> | undefined;
}

/**
 * Additional information about the current execution status. Populated when the execution has terminated.
 *
 * @public
 */
export interface PipelineExecutionStateDetails {
  /**
   * Classification of the failure. Present when the execution failed.
   *
   * @public
   */
  code?: PipelineErrorCode | undefined;

  /**
   * Human-readable description of the outcome. For a failed execution, this describes why it failed; for a cancelled execution, this is the reason you supplied when calling CancelPipelineExecution.
   *
   * @public
   */
  message: string | undefined;

  /**
   * Per-step error entries to help diagnose a failed execution. Present when the execution failed.
   *
   * @public
   */
  details?: DetailedPipelineError[] | undefined;
}

/**
 * Current execution status of a pipeline.
 *
 * @public
 */
export interface PipelineExecutionStatus {
  /**
   * Current state of the pipeline execution.
   *
   * @public
   */
  state: PipelineExecutionState | undefined;

  /**
   * Additional information about the execution outcome. Populated when the execution has terminated (failed or cancelled).
   *
   * @public
   */
  stateDetails?: PipelineExecutionStateDetails | undefined;
}

/**
 * Response structure for DescribePipelineExecution operation.
 *
 * @public
 */
export interface DescribePipelineExecutionResponse {
  /**
   * The unique identifier of the pipeline execution.
   *
   * @public
   */
  pipelineExecutionId: string | undefined;

  /**
   * The name of the pipeline.
   *
   * @public
   */
  pipelineName: string | undefined;

  /**
   * The name of the workspace.
   *
   * @public
   */
  workspaceName: string | undefined;

  /**
   * The pipeline version this execution ran against.
   *
   * @public
   */
  pipelineVersion: string | undefined;

  /**
   * The current execution status of the pipeline.
   *
   * @public
   */
  status: PipelineExecutionStatus | undefined;

  /**
   * The time the pipeline execution started, in Unix epoch time.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The time the pipeline execution completed, in Unix epoch time.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The environment variables provided as input for the pipeline execution.
   *
   * @public
   */
  requestEnvironmentVariables: ExecutionEnvironmentVariables | undefined;

  /**
   * The mount overrides provided as input for the pipeline execution. Present when mount overrides were supplied at execution time.
   *
   * @public
   */
  requestMountOverrides?: MountOverrides | undefined;

  /**
   * Scheduling priority for the execution. When not specified, defaults to lowest priority.
   *
   * @public
   */
  executionPriority?: number | undefined;

  /**
   * A list of compute node execution details within this pipeline execution.
   *
   * @public
   */
  computeNodeExecutionDetails: ComputeNodeExecutionDetails[] | undefined;

  /**
   * The token to be used for the next set of paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePortalRequest {
  /**
   * The ID of the portal.
   *
   * @public
   */
  portalId: string | undefined;
}

/**
 * Contains an image that is uploaded to IoT SiteWise and available at a URL.
 *
 * @public
 */
export interface ImageLocation {
  /**
   * The ID of the image.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The URL where the image is available. The URL is valid for 15 minutes so that you can view and download the image
   *
   * @public
   */
  url: string | undefined;
}

/**
 * @public
 */
export interface DescribePortalResponse {
  /**
   * The ID of the portal.
   *
   * @public
   */
  portalId: string | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the portal, which has the following format.
   *
   * `arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:portal/$\{PortalId\}`
   *
   * @public
   */
  portalArn: string | undefined;

  /**
   * The name of the portal.
   *
   * @public
   */
  portalName: string | undefined;

  /**
   * The portal's description.
   *
   * @public
   */
  portalDescription?: string | undefined;

  /**
   * The IAM Identity Center application generated client ID (used with IAM Identity Center API operations). IoT SiteWise includes `portalClientId` for only portals that use IAM Identity Center to authenticate users.
   *
   * @public
   */
  portalClientId: string | undefined;

  /**
   * The URL for the IoT SiteWise Monitor portal. You can use this URL to access portals that use IAM Identity Center for authentication. For portals that use IAM for authentication, you must use the IoT SiteWise console to get a URL that you can use to access the portal.
   *
   * @public
   */
  portalStartUrl: string | undefined;

  /**
   * The Amazon Web Services administrator's contact email address.
   *
   * @public
   */
  portalContactEmail: string | undefined;

  /**
   * The current status of the portal, which contains a state and any error message.
   *
   * @public
   */
  portalStatus: PortalStatus | undefined;

  /**
   * The date the portal was created, in Unix epoch time.
   *
   * @public
   */
  portalCreationDate: Date | undefined;

  /**
   * The date the portal was last updated, in Unix epoch time.
   *
   * @public
   */
  portalLastUpdateDate: Date | undefined;

  /**
   * The portal's logo image, which is available at a URL.
   *
   * @public
   */
  portalLogoImageLocation?: ImageLocation | undefined;

  /**
   * The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the service role that allows the portal's users to access your IoT SiteWise resources on your behalf. For more information, see [Using service roles for IoT SiteWise Monitor](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/monitor-service-role.html) in the *IoT SiteWise User Guide*.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * The service to use to authenticate users to the portal.
   *
   * @public
   */
  portalAuthMode?: AuthMode | undefined;

  /**
   * The email address that sends alarm notifications.
   *
   * @public
   */
  notificationSenderEmail?: string | undefined;

  /**
   * Contains the configuration information of an alarm created in an IoT SiteWise Monitor portal.
   *
   * @public
   */
  alarms?: Alarms | undefined;

  /**
   * Define the type of portal. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalType?: PortalType | undefined;

  /**
   * The configuration entry associated with the specific portal type. The value for IoT SiteWise Monitor (Classic) is `SITEWISE_PORTAL_V1`. The value for IoT SiteWise Monitor (AI-aware) is `SITEWISE_PORTAL_V2`.
   *
   * @public
   */
  portalTypeConfiguration?: Record<string, PortalTypeEntry> | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * The ID of the project.
   *
   * @public
   */
  projectId: string | undefined;
}
