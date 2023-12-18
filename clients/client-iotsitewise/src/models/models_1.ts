// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTSiteWiseServiceException as __BaseException } from "./IoTSiteWiseServiceException";

import {
  Alarms,
  AssetModelCompositeModel,
  AssetModelCompositeModelPathSegment,
  AssetModelHierarchy,
  AssetModelProperty,
  AssetModelStatus,
  AssetStatus,
  CapabilitySyncStatus,
  ColumnInfo,
  ConfigurationStatus,
  DisassociatedDataStorageState,
  EncryptionType,
  Identity,
  ImageFile,
  LoggingOptions,
  MultiLayerStorage,
  Permission,
  PortalStatus,
  PropertyNotificationState,
  Resource,
  RetentionPeriod,
  StorageType,
  WarmTierRetentionPeriod,
  WarmTierState,
} from "./models_0";

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
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * @public
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   */
  warmTier?: WarmTierState;

  /**
   * @public
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
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
   * <p>The number of days your data is kept in the hot tier. By default, your data is kept indefinitely in the hot tier.</p>
   */
  retentionPeriod?: RetentionPeriod;

  /**
   * @public
   * <p>Contains current status information for the configuration.</p>
   */
  configurationStatus: ConfigurationStatus | undefined;

  /**
   * @public
   * <p>A service managed storage tier optimized for analytical queries. It stores periodically uploaded, buffered and historical data ingested with the CreaeBulkImportJob API.</p>
   */
  warmTier?: WarmTierState;

  /**
   * @public
   * <p>Set this period to specify how long your data is stored in the warm tier before it is deleted. You can set this only if cold tier is enabled.</p>
   */
  warmTierRetentionPeriod?: WarmTierRetentionPeriod;
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
   * <p>The ID of the asset to update. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
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

  /**
   * @public
   * <p>An external ID to assign to the asset. The asset must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetExternalId?: string;
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
   * <p>The ID of the asset model to update. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
   * <p>The composite models that are part of this asset model. It groups properties
   *   (such as attributes, measurements, transforms, and metrics) and child composite models that
   *       model parts of your industrial equipment. Each composite model has a type that defines the
   *       properties that the composite model supports. Use composite models to define alarms on this asset model.</p>
   *          <note>
   *             <p>When creating custom composite models, you need to use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_CreateAssetModelCompositeModel.html">CreateAssetModelCompositeModel</a>. For more information,
   *       see <LINK>.</p>
   *          </note>
   */
  assetModelCompositeModels?: AssetModelCompositeModel[];

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>An external ID to assign to the asset model. The asset model must not already have an external ID. The external ID must be unique within your Amazon Web Services account. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-ids">Using external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelExternalId?: string;
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
export interface UpdateAssetModelCompositeModelRequest {
  /**
   * @public
   * <p>The ID of the asset model, in UUID format.</p>
   */
  assetModelId: string | undefined;

  /**
   * @public
   * <p>The ID of a composite model on this asset model.</p>
   */
  assetModelCompositeModelId: string | undefined;

  /**
   * @public
   * <p>An external ID to assign to the asset model. You can only set the external ID of the asset model if it wasn't set when it was created, or you're setting it to
   *     the exact same thing as when it was created.</p>
   */
  assetModelCompositeModelExternalId?: string;

  /**
   * @public
   * <p>A description for the composite model.</p>
   */
  assetModelCompositeModelDescription?: string;

  /**
   * @public
   * <p>A unique, friendly name for the composite model.</p>
   */
  assetModelCompositeModelName: string | undefined;

  /**
   * @public
   * <p>A unique case-sensitive identifier that you can provide to ensure the idempotency of the request. Don't reuse this client token if a new idempotent request is required.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The property definitions of the composite model. For more information, see <LINK>.</p>
   *          <p>You can specify up to 200 properties per composite model. For more
   *       information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelCompositeModelProperties?: AssetModelProperty[];
}

/**
 * @public
 */
export interface UpdateAssetModelCompositeModelResponse {
  /**
   * @public
   * <p>The path to the composite model listing the parent composite models.</p>
   */
  assetModelCompositeModelPath: AssetModelCompositeModelPathSegment[] | undefined;

  /**
   * @public
   * <p>Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model
   *         states</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetModelStatus: AssetModelStatus | undefined;
}

/**
 * @public
 */
export interface UpdateAssetPropertyRequest {
  /**
   * @public
   * <p>The ID of the asset to be updated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
   */
  assetId: string | undefined;

  /**
   * @public
   * <p>The ID of the asset property to be updated. This can be either the actual ID in UUID format, or else <code>externalId:</code> followed by the external ID, if it has one.
   *     For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/object-ids.html#external-id-references">Referencing objects with external IDs</a> in the <i>IoT SiteWise User Guide</i>.</p>
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

/**
 * @public
 * <p>Represents a single data point in a query result. </p>
 */
export interface Datum {
  /**
   * @public
   * <p>Indicates if the data point is a scalar value such as integer, string, double, or Boolean. </p>
   */
  scalarValue?: string;

  /**
   * @public
   * <p>Indicates if the data point is an array. </p>
   */
  arrayValue?: Datum[];

  /**
   * @public
   * <p>Indicates if the data point is a row.</p>
   */
  rowValue?: Row;

  /**
   * @public
   * <p>Indicates if the data point is null.</p>
   */
  nullValue?: boolean;
}

/**
 * @public
 * <p>Represents a single row in the query results.</p>
 */
export interface Row {
  /**
   * @public
   * <p>List of data points in a single row of the result set.</p>
   */
  data: Datum[] | undefined;
}

/**
 * @public
 */
export interface ExecuteQueryResponse {
  /**
   * @public
   * <p>Represents a single column in the query results.</p>
   */
  columns?: ColumnInfo[];

  /**
   * @public
   * <p>Represents a single row in the query results.</p>
   */
  rows?: Row[];

  /**
   * @public
   * <p>The string that specifies the next page of results.</p>
   */
  nextToken?: string;
}
