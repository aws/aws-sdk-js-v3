// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

/**
 * <p>Access is denied.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

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
 * @public
 * @enum
 */
export const AssetModelType = {
  ASSET_MODEL: "ASSET_MODEL",
  COMPONENT_MODEL: "COMPONENT_MODEL",
  INTERFACE: "INTERFACE",
} as const;

/**
 * @public
 */
export type AssetModelType = (typeof AssetModelType)[keyof typeof AssetModelType];

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
 * @public
 * @enum
 */
export const AssetModelVersionType = {
  ACTIVE: "ACTIVE",
  LATEST: "LATEST",
} as const;

/**
 * @public
 */
export type AssetModelVersionType = (typeof AssetModelVersionType)[keyof typeof AssetModelVersionType];

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
 * @public
 * @enum
 */
export const RawValueType = {
  BOOLEAN: "B",
  DOUBLE: "D",
  INTEGER: "I",
  STRING: "S",
  UNKNOWN: "U",
} as const;

/**
 * @public
 */
export type RawValueType = (typeof RawValueType)[keyof typeof RawValueType];

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
 * <p>Your request has conflicting operations. This can occur if you're trying to perform more
 *       than one operation on the same resource at the same time.</p>
 * @public
 */
export class ConflictingOperationException extends __BaseException {
  readonly name: "ConflictingOperationException" = "ConflictingOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that conflicts with this operation.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that conflicts with this operation.</p>
   * @public
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
 * @public
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
 * @public
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
 * <p>You've reached the quota for a resource. For example, this can occur if you're trying to
 *       associate more than the allowed number of child assets or attempting to create more than the
 *       allowed number of properties for an asset model.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
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
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource that already exists.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource that already exists.</p>
   * @public
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
 * @public
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
 * @public
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
 * <p>The requested service is unavailable.</p>
 * @public
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
}

/**
 * <p>The precondition in one or more of the request-header fields evaluated to
 *         <code>FALSE</code>.</p>
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * <p>The ID of the resource on which precondition failed with this operation.</p>
   * @public
   */
  resourceId: string | undefined;

  /**
   * <p>The ARN of the resource on which precondition failed with this operation.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceArn = opts.resourceArn;
  }
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
  fileFormat: FileFormat | undefined;
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
   * <p>The files in the specified Amazon S3 bucket that contain your data.</p>
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
  jobConfiguration: JobConfiguration | undefined;

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
 * @public
 * @enum
 */
export const ComputationModelState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ComputationModelState = (typeof ComputationModelState)[keyof typeof ComputationModelState];

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
 * @public
 * @enum
 */
export const DatasetSourceFormat = {
  KNOWLEDGE_BASE: "KNOWLEDGE_BASE",
} as const;

/**
 * @public
 */
export type DatasetSourceFormat = (typeof DatasetSourceFormat)[keyof typeof DatasetSourceFormat];

/**
 * @public
 * @enum
 */
export const DatasetSourceType = {
  KENDRA: "KENDRA",
} as const;

/**
 * @public
 */
export type DatasetSourceType = (typeof DatasetSourceType)[keyof typeof DatasetSourceType];

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
 * @public
 * @enum
 */
export const DatasetState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type DatasetState = (typeof DatasetState)[keyof typeof DatasetState];

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
 * @public
 * @enum
 */
export const CoreDeviceOperatingSystem = {
  LINUX_AARCH64: "LINUX_AARCH64",
  LINUX_AMD64: "LINUX_AMD64",
  WINDOWS_AMD64: "WINDOWS_AMD64",
} as const;

/**
 * @public
 */
export type CoreDeviceOperatingSystem = (typeof CoreDeviceOperatingSystem)[keyof typeof CoreDeviceOperatingSystem];

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
 * @public
 * @enum
 */
export const PortalType = {
  SITEWISE_PORTAL_V1: "SITEWISE_PORTAL_V1",
  SITEWISE_PORTAL_V2: "SITEWISE_PORTAL_V2",
} as const;

/**
 * @public
 */
export type PortalType = (typeof PortalType)[keyof typeof PortalType];

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
 * @public
 * @enum
 */
export const PortalState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type PortalState = (typeof PortalState)[keyof typeof PortalState];

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
   * <p>The files in the specified Amazon S3 bucket that contain your data.</p>
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
  jobConfiguration: JobConfiguration | undefined;

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
 * @enum
 */
export const ResolveToResourceType = {
  ASSET: "ASSET",
} as const;

/**
 * @public
 */
export type ResolveToResourceType = (typeof ResolveToResourceType)[keyof typeof ResolveToResourceType];

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
export interface DescribeExecutionRequest {
  /**
   * <p>The ID of the execution.</p>
   * @public
   */
  executionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type ExecutionState = (typeof ExecutionState)[keyof typeof ExecutionState];

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
 * @public
 * @enum
 */
export const CapabilitySyncStatus = {
  IN_SYNC: "IN_SYNC",
  NOT_APPLICABLE: "NOT_APPLICABLE",
  OUT_OF_SYNC: "OUT_OF_SYNC",
  SYNC_FAILED: "SYNC_FAILED",
  UNKNOWN: "UNKNOWN",
} as const;

/**
 * @public
 */
export type CapabilitySyncStatus = (typeof CapabilitySyncStatus)[keyof typeof CapabilitySyncStatus];

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
 * <p>Contains information about a customer managed Amazon S3 bucket.</p>
 * @public
 */
export interface CustomerManagedS3Storage {
  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Amazon S3 object. For more information about how to find the ARN for an
   *       Amazon S3 object, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/s3-arn-format.html">Amazon S3 resources</a> in the
   *         <i>Amazon Simple Storage Service User Guide</i>.</p>
   * @public
   */
  s3ResourceArn: string | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the Identity and Access Management role that allows IoT SiteWise to send data to Amazon S3.</p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Contains information about the storage destination.</p>
 * @public
 */
export interface MultiLayerStorage {
  /**
   * <p>Contains information about a customer managed Amazon S3 bucket.</p>
   * @public
   */
  customerManagedS3Storage: CustomerManagedS3Storage | undefined;
}

/**
 * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
 * @public
 */
export interface RetentionPeriod {
  /**
   * <p>The number of days that your data is kept.</p>
   *          <note>
   *             <p>If you specified a value for this parameter, the <code>unlimited</code> parameter must
   *         be <code>false</code>.</p>
   *          </note>
   * @public
   */
  numberOfDays?: number | undefined;

  /**
   * <p>If true, your data is kept indefinitely.</p>
   *          <note>
   *             <p>If configured to <code>true</code>, you must not specify a value for the
   *           <code>numberOfDays</code> parameter.</p>
   *          </note>
   * @public
   */
  unlimited?: boolean | undefined;
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
 * @enum
 */
export const WarmTierState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type WarmTierState = (typeof WarmTierState)[keyof typeof WarmTierState];

/**
 * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
 * @public
 */
export interface WarmTierRetentionPeriod {
  /**
   * <p>The number of days the data is stored in the warm tier.</p>
   * @public
   */
  numberOfDays?: number | undefined;

  /**
   * <p>If set to true, the data is stored indefinitely in the warm tier.</p>
   * @public
   */
  unlimited?: boolean | undefined;
}

/**
 * @public
 */
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
   * @public
   */
  storageType: StorageType | undefined;

  /**
   * <p>Contains information about the storage destination.</p>
   * @public
   */
  multiLayerStorage?: MultiLayerStorage | undefined;

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
   * @public
   */
  disassociatedDataStorage?: DisassociatedDataStorageState | undefined;

  /**
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   * @public
   */
  retentionPeriod?: RetentionPeriod | undefined;

  /**
   * <p>Contains current status information for the configuration.</p>
   * @public
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * <p>The date the storage configuration was last updated, in Unix epoch time.</p>
   * @public
   */
  lastUpdateDate?: Date | undefined;

  /**
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   * @public
   */
  warmTier?: WarmTierState | undefined;

  /**
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   * @public
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod | undefined;

  /**
   * <p>Describes the configuration for ingesting NULL and NaN data. By default the feature is
   *       allowed. The feature is disallowed if the value is <code>true</code>.</p>
   * @public
   */
  disallowIngestNullNaN?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeTimeSeriesRequest {
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
}

/**
 * @public
 */
export interface DescribeTimeSeriesResponse {
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
   * <p>The alias that identifies the time series.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>The ID of the time series.</p>
   * @public
   */
  timeSeriesId: string | undefined;

  /**
   * <p>The data type of the time series.</p>
   *          <p>If you specify <code>STRUCT</code>, you must also specify <code>dataTypeSpec</code> to identify the type of the structure for this time series.</p>
   * @public
   */
  dataType: PropertyDataType | undefined;

  /**
   * <p>The data type of the structure for this time series. This parameter is required for time series
   *       that have the <code>STRUCT</code> data type.</p>
   *          <p>The options for this parameter depend on the type of the composite model
   *       in which you created the asset property that is associated with your time series.
   *       Use <code>AWS/ALARM_STATE</code> for alarm state in alarm composite models.</p>
   * @public
   */
  dataTypeSpec?: string | undefined;

  /**
   * <p>The date that the time series was created, in Unix epoch time.</p>
   * @public
   */
  timeSeriesCreationDate: Date | undefined;

  /**
   * <p>The date that the time series was last updated, in Unix epoch time.</p>
   * @public
   */
  timeSeriesLastUpdateDate: Date | undefined;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">ARN</a> of the time series, which has the following format.</p>
   *          <p>
   *             <code>arn:$\{Partition\}:iotsitewise:$\{Region\}:$\{Account\}:time-series/$\{TimeSeriesId\}</code>
   *          </p>
   * @public
   */
  timeSeriesArn: string | undefined;
}

/**
 * @public
 */
export interface DisassociateAssetsRequest {
  /**
   * <p>The ID of the parent asset from which to disassociate the child asset.
   *       This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  assetId: string | undefined;

  /**
   * <p>The ID of a hierarchy in the parent asset's model. (This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.) Hierarchies allow
   *       different groupings of assets to be formed that all come from the same asset model. You can
   *       use the hierarchy ID to identify the correct asset to disassociate. For more information, see
   *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-hierarchies.html">Asset hierarchies</a> in the <i>IoT SiteWise User Guide</i>.</p>
   * @public
   */
  hierarchyId: string | undefined;

  /**
   * <p>The ID of the child asset to disassociate. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
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
 * @public
 */
export interface DisassociateTimeSeriesFromAssetPropertyRequest {
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
export interface ExecuteActionRequest {
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
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The detailed resource this action resolves to.</p>
   * @public
   */
  resolveTo?: ResolveTo | undefined;
}

/**
 * @public
 */
export interface ExecuteActionResponse {
  /**
   * <p>The ID of the action.</p>
   * @public
   */
  actionId: string | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryRequest {
  /**
   * <p>The IoT SiteWise query statement.</p>
   * @public
   */
  queryStatement: string | undefined;

  /**
   * <p>The string that specifies the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return at one time.</p>
   *          <ul>
   *             <li>
   *                <p>Minimum is 1</p>
   *             </li>
   *             <li>
   *                <p>Maximum is 20000</p>
   *             </li>
   *             <li>
   *                <p>Default is 20000</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ScalarType = {
  BOOLEAN: "BOOLEAN",
  DOUBLE: "DOUBLE",
  INT: "INT",
  STRING: "STRING",
  TIMESTAMP: "TIMESTAMP",
} as const;

/**
 * @public
 */
export type ScalarType = (typeof ScalarType)[keyof typeof ScalarType];

/**
 * <p>The data type of the column.</p>
 * @public
 */
export interface ColumnType {
  /**
   * <p>The allowed data types that the column has as it's value.</p>
   * @public
   */
  scalarType?: ScalarType | undefined;
}

/**
 * <p>A description of the column in the query results.</p>
 * @public
 */
export interface ColumnInfo {
  /**
   * <p>The name of the column description.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the column description.</p>
   * @public
   */
  type?: ColumnType | undefined;
}

/**
 * <p>The query timed out.</p>
 * @public
 */
export class QueryTimeoutException extends __BaseException {
  readonly name: "QueryTimeoutException" = "QueryTimeoutException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<QueryTimeoutException, __BaseException>) {
    super({
      name: "QueryTimeoutException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, QueryTimeoutException.prototype);
  }
}

/**
 * <p>The validation failed for this query.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
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
   * <p>The quality by which to filter asset data.</p>
   * @public
   */
  qualities?: Quality[] | undefined;

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
   * <p>The chronological sorting order of the requested information.</p>
   *          <p>Default: <code>ASCENDING</code>
   *          </p>
   * @public
   */
  timeOrdering?: TimeOrdering | undefined;

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
   *             <code>maxResults</code>. The maximum value of <code>maxResults</code> is 2500.</p>
   *             </li>
   *          </ul>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyAggregatesResponse {
  /**
   * <p>The requested aggregated values.</p>
   * @public
   */
  aggregatedValues: AggregatedValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
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
export interface GetAssetPropertyValueResponse {
  /**
   * <p>The current asset property value.</p>
   * @public
   */
  propertyValue?: AssetPropertyValue | undefined;
}

/**
 * @public
 */
export interface GetAssetPropertyValueHistoryRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
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
 * @public
 */
export interface GetAssetPropertyValueHistoryResponse {
  /**
   * <p>The asset property's value history.</p>
   * @public
   */
  assetPropertyValueHistory: AssetPropertyValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesRequest {
  /**
   * <p>The ID of the asset, in UUID format.</p>
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
   * <p>The exclusive start of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   * @public
   */
  startTimeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset converted from <code>startTimeInSeconds</code>.</p>
   * @public
   */
  startTimeOffsetInNanos?: number | undefined;

  /**
   * <p>The inclusive end of the range from which to interpolate data, expressed in seconds in
   *       Unix epoch time.</p>
   * @public
   */
  endTimeInSeconds: number | undefined;

  /**
   * <p>The nanosecond offset converted from <code>endTimeInSeconds</code>.</p>
   * @public
   */
  endTimeOffsetInNanos?: number | undefined;

  /**
   * <p>The quality of the asset property value. You can use this parameter as a filter to choose
   *       only the asset property values that have a specific quality.</p>
   * @public
   */
  quality: Quality | undefined;

  /**
   * <p>The time interval in seconds over which to interpolate data. Each interval starts when the
   *       previous one ends.</p>
   * @public
   */
  intervalInSeconds: number | undefined;

  /**
   * <p>The token to be used for the next set of paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return for each paginated request. If not specified, the default value is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

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
   * @public
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
   * @public
   */
  intervalWindowInSeconds?: number | undefined;
}

/**
 * <p>Contains information about an interpolated asset property value.</p>
 * @public
 */
export interface InterpolatedAssetPropertyValue {
  /**
   * <p>Contains a timestamp with optional nanosecond granularity.</p>
   * @public
   */
  timestamp: TimeInNanos | undefined;

  /**
   * <p>Contains an asset property value (of a single type only).</p>
   * @public
   */
  value: Variant | undefined;
}

/**
 * @public
 */
export interface GetInterpolatedAssetPropertyValuesResponse {
  /**
   * <p>The requested interpolated values.</p>
   * @public
   */
  interpolatedAssetPropertyValues: InterpolatedAssetPropertyValue[] | undefined;

  /**
   * <p>The token for the next set of results, or null if there are no additional results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface InvokeAssistantRequest {
  /**
   * <p>The ID assigned to a conversation. IoT SiteWise automatically generates a unique ID for you, and this parameter is never required.
   *   However, if you prefer to have your own ID, you must specify it here in UUID format. If you specify your own ID, it must be globally unique.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>A text message sent to the SiteWise Assistant by the user.</p>
   * @public
   */
  message: string | undefined;

  /**
   * <p>Specifies if to turn trace on or not. It is used to track the SiteWise Assistant's
   *   reasoning, and data access process.</p>
   * @public
   */
  enableTrace?: boolean | undefined;
}

/**
 * <p>Contains the cited text from the data source.</p>
 * @public
 */
export interface Content {
  /**
   * <p>The cited text from the data source.</p>
   * @public
   */
  text?: string | undefined;
}

/**
 * <p>Contains location information about the cited text and where it's stored.</p>
 * @public
 */
export interface Location {
  /**
   * <p>The URI of the location.</p>
   * @public
   */
  uri?: string | undefined;
}

/**
 * @internal
 */
export const CreatePortalRequestFilterSensitiveLog = (obj: CreatePortalRequest): any => ({
  ...obj,
  ...(obj.portalContactEmail && { portalContactEmail: SENSITIVE_STRING }),
  ...(obj.notificationSenderEmail && { notificationSenderEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DescribePortalResponseFilterSensitiveLog = (obj: DescribePortalResponse): any => ({
  ...obj,
  ...(obj.portalContactEmail && { portalContactEmail: SENSITIVE_STRING }),
  ...(obj.notificationSenderEmail && { notificationSenderEmail: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const InvokeAssistantRequestFilterSensitiveLog = (obj: InvokeAssistantRequest): any => ({
  ...obj,
  ...(obj.message && { message: SENSITIVE_STRING }),
});
