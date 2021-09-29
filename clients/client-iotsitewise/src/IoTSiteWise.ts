import { IoTSiteWiseClient } from "./IoTSiteWiseClient";
import {
  AssociateAssetsCommand,
  AssociateAssetsCommandInput,
  AssociateAssetsCommandOutput,
} from "./commands/AssociateAssetsCommand";
import {
  BatchAssociateProjectAssetsCommand,
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "./commands/BatchAssociateProjectAssetsCommand";
import {
  BatchDisassociateProjectAssetsCommand,
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "./commands/BatchDisassociateProjectAssetsCommand";
import {
  BatchPutAssetPropertyValueCommand,
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "./commands/BatchPutAssetPropertyValueCommand";
import {
  CreateAccessPolicyCommand,
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand";
import { CreateAssetCommand, CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import {
  CreateAssetModelCommand,
  CreateAssetModelCommandInput,
  CreateAssetModelCommandOutput,
} from "./commands/CreateAssetModelCommand";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
} from "./commands/CreateDashboardCommand";
import {
  CreateGatewayCommand,
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
} from "./commands/CreateGatewayCommand";
import {
  CreatePortalCommand,
  CreatePortalCommandInput,
  CreatePortalCommandOutput,
} from "./commands/CreatePortalCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  DeleteAccessPolicyCommand,
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommand, DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import {
  DeleteAssetModelCommand,
  DeleteAssetModelCommandInput,
  DeleteAssetModelCommandOutput,
} from "./commands/DeleteAssetModelCommand";
import {
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
} from "./commands/DeleteDashboardCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeletePortalCommand,
  DeletePortalCommandInput,
  DeletePortalCommandOutput,
} from "./commands/DeletePortalCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DescribeAccessPolicyCommand,
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand";
import {
  DescribeAssetCommand,
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput,
} from "./commands/DescribeAssetCommand";
import {
  DescribeAssetModelCommand,
  DescribeAssetModelCommandInput,
  DescribeAssetModelCommandOutput,
} from "./commands/DescribeAssetModelCommand";
import {
  DescribeAssetPropertyCommand,
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand";
import {
  DescribeDashboardCommand,
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import {
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import {
  DescribeGatewayCapabilityConfigurationCommand,
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
} from "./commands/DescribeGatewayCapabilityConfigurationCommand";
import {
  DescribeGatewayCommand,
  DescribeGatewayCommandInput,
  DescribeGatewayCommandOutput,
} from "./commands/DescribeGatewayCommand";
import {
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import {
  DescribePortalCommand,
  DescribePortalCommandInput,
  DescribePortalCommandOutput,
} from "./commands/DescribePortalCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DescribeStorageConfigurationCommand,
  DescribeStorageConfigurationCommandInput,
  DescribeStorageConfigurationCommandOutput,
} from "./commands/DescribeStorageConfigurationCommand";
import {
  DisassociateAssetsCommand,
  DisassociateAssetsCommandInput,
  DisassociateAssetsCommandOutput,
} from "./commands/DisassociateAssetsCommand";
import {
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "./commands/GetAssetPropertyAggregatesCommand";
import {
  GetAssetPropertyValueCommand,
  GetAssetPropertyValueCommandInput,
  GetAssetPropertyValueCommandOutput,
} from "./commands/GetAssetPropertyValueCommand";
import {
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "./commands/GetAssetPropertyValueHistoryCommand";
import {
  GetInterpolatedAssetPropertyValuesCommand,
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import {
  ListAssetModelsCommand,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput,
} from "./commands/ListAssetModelsCommand";
import {
  ListAssetRelationshipsCommand,
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "./commands/ListAssetRelationshipsCommand";
import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListAssociatedAssetsCommand,
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "./commands/ListAssociatedAssetsCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import {
  ListProjectAssetsCommand,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "./commands/ListProjectAssetsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutDefaultEncryptionConfigurationCommand,
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import {
  PutLoggingOptionsCommand,
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import {
  PutStorageConfigurationCommand,
  PutStorageConfigurationCommandInput,
  PutStorageConfigurationCommandOutput,
} from "./commands/PutStorageConfigurationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessPolicyCommand,
  UpdateAccessPolicyCommandInput,
  UpdateAccessPolicyCommandOutput,
} from "./commands/UpdateAccessPolicyCommand";
import { UpdateAssetCommand, UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import {
  UpdateAssetModelCommand,
  UpdateAssetModelCommandInput,
  UpdateAssetModelCommandOutput,
} from "./commands/UpdateAssetModelCommand";
import {
  UpdateAssetPropertyCommand,
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
} from "./commands/UpdateDashboardCommand";
import {
  UpdateGatewayCapabilityConfigurationCommand,
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "./commands/UpdateGatewayCapabilityConfigurationCommand";
import {
  UpdateGatewayCommand,
  UpdateGatewayCommandInput,
  UpdateGatewayCommandOutput,
} from "./commands/UpdateGatewayCommand";
import {
  UpdatePortalCommand,
  UpdatePortalCommandInput,
  UpdatePortalCommandOutput,
} from "./commands/UpdatePortalCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export class IoTSiteWise extends IoTSiteWiseClient {
  /**
   * <p>Associates a child asset with the given parent asset through a hierarchy defined in the
   *       parent asset's model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/add-associated-assets.html">Associating assets</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public associateAssets(
    args: AssociateAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAssetsCommandOutput>;
  public associateAssets(
    args: AssociateAssetsCommandInput,
    cb: (err: any, data?: AssociateAssetsCommandOutput) => void
  ): void;
  public associateAssets(
    args: AssociateAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAssetsCommandOutput) => void
  ): void;
  public associateAssets(
    args: AssociateAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateAssetsCommandOutput) => void),
    cb?: (err: any, data?: AssociateAssetsCommandOutput) => void
  ): Promise<AssociateAssetsCommandOutput> | void {
    const command = new AssociateAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Associates a group (batch) of assets with an IoT SiteWise Monitor project.</p>
   */
  public batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateProjectAssetsCommandOutput>;
  public batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    cb: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void
  ): void;
  public batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void
  ): void;
  public batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void
  ): Promise<BatchAssociateProjectAssetsCommandOutput> | void {
    const command = new BatchAssociateProjectAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a group (batch) of assets from an IoT SiteWise Monitor project.</p>
   */
  public batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateProjectAssetsCommandOutput>;
  public batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    cb: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void
  ): void;
  public batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void
  ): void;
  public batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void
  ): Promise<BatchDisassociateProjectAssetsCommandOutput> | void {
    const command = new BatchDisassociateProjectAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sends a list of asset property values to IoT SiteWise. Each value is a timestamp-quality-value
   *       (TQV) data point. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/ingest-api.html">Ingesting data using the API</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
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
   *          <important>
   *             <p>With respect to Unix epoch time, IoT SiteWise accepts only TQVs that have a timestamp of no more
   *         than 7 days in the past and no more than 10 minutes in the future. IoT SiteWise rejects timestamps
   *         outside of the inclusive range of [-7 days, +10 minutes] and returns a
   *           <code>TimestampOutOfRangeException</code> error.</p>
   *             <p>For each asset property, IoT SiteWise overwrites TQVs with duplicate timestamps unless the newer
   *         TQV has a different quality. For example, if you store a TQV <code>{T1, GOOD, V1}</code>,
   *         then storing <code>{T1, GOOD, V2}</code> replaces the existing TQV.</p>
   *          </important>
   *          <p>IoT SiteWise authorizes access to each <code>BatchPutAssetPropertyValue</code> entry individually.
   *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/security_iam_service-with-iam.html#security_iam_service-with-iam-id-based-policies-batchputassetpropertyvalue-action">BatchPutAssetPropertyValue authorization</a> in the
   *       <i>IoT SiteWise User Guide</i>.</p>
   */
  public batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutAssetPropertyValueCommandOutput>;
  public batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    cb: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void
  ): void;
  public batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void
  ): void;
  public batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void),
    cb?: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void
  ): Promise<BatchPutAssetPropertyValueCommandOutput> | void {
    const command = new BatchPutAssetPropertyValueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an access policy that grants the specified identity (Amazon Web Services SSO user, Amazon Web Services SSO group, or
   *       IAM user) access to the specified IoT SiteWise Monitor portal or project resource.</p>
   */
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPolicyCommandOutput>;
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  public createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): Promise<CreateAccessPolicyCommandOutput> | void {
    const command = new CreateAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an asset from an existing asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/create-assets.html">Creating assets</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public createAsset(args: CreateAssetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetCommandOutput>;
  public createAsset(args: CreateAssetCommandInput, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
  public createAsset(
    args: CreateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
  public createAsset(
    args: CreateAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssetCommandOutput) => void),
    cb?: (err: any, data?: CreateAssetCommandOutput) => void
  ): Promise<CreateAssetCommandOutput> | void {
    const command = new CreateAssetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an asset model from specified property and hierarchy definitions. You create
   *       assets from asset models. With asset models, you can easily create assets of the same type
   *       that have standardized definitions. Each asset created from a model inherits the asset model's
   *       property and hierarchy definitions. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/define-models.html">Defining asset models</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public createAssetModel(
    args: CreateAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetModelCommandOutput>;
  public createAssetModel(
    args: CreateAssetModelCommandInput,
    cb: (err: any, data?: CreateAssetModelCommandOutput) => void
  ): void;
  public createAssetModel(
    args: CreateAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetModelCommandOutput) => void
  ): void;
  public createAssetModel(
    args: CreateAssetModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAssetModelCommandOutput) => void),
    cb?: (err: any, data?: CreateAssetModelCommandOutput) => void
  ): Promise<CreateAssetModelCommandOutput> | void {
    const command = new CreateAssetModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a dashboard in an IoT SiteWise Monitor project.</p>
   */
  public createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  public createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  public createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  public createDashboard(
    args: CreateDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDashboardCommandOutput) => void),
    cb?: (err: any, data?: CreateDashboardCommandOutput) => void
  ): Promise<CreateDashboardCommandOutput> | void {
    const command = new CreateDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a gateway, which is a virtual or edge device that delivers industrial data streams
   *       from local servers to IoT SiteWise. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html">Ingesting data using a gateway</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public createGateway(
    args: CreateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayCommandOutput>;
  public createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  public createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  public createGateway(
    args: CreateGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGatewayCommandOutput) => void),
    cb?: (err: any, data?: CreateGatewayCommandOutput) => void
  ): Promise<CreateGatewayCommandOutput> | void {
    const command = new CreateGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a portal, which can contain projects and dashboards. IoT SiteWise Monitor uses Amazon Web Services SSO or IAM
   *       to authenticate portal users and manage user permissions.</p>
   *          <note>
   *             <p>Before you can sign in to a new portal, you must add at least one identity to that
   *         portal. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/administer-portals.html#portal-change-admins">Adding or removing portal
   *           administrators</a> in the <i>IoT SiteWise User Guide</i>.</p>
   *          </note>
   */
  public createPortal(
    args: CreatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortalCommandOutput>;
  public createPortal(args: CreatePortalCommandInput, cb: (err: any, data?: CreatePortalCommandOutput) => void): void;
  public createPortal(
    args: CreatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;
  public createPortal(
    args: CreatePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePortalCommandOutput) => void),
    cb?: (err: any, data?: CreatePortalCommandOutput) => void
  ): Promise<CreatePortalCommandOutput> | void {
    const command = new CreatePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a project in the specified portal.</p>
   */
  public createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  public createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
  public createProject(
    args: CreateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateProjectCommandOutput) => void),
    cb?: (err: any, data?: CreateProjectCommandOutput) => void
  ): Promise<CreateProjectCommandOutput> | void {
    const command = new CreateProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an access policy that grants the specified identity access to the specified
   *       IoT SiteWise Monitor resource. You can use this operation to revoke access to an IoT SiteWise Monitor
   *       resource.</p>
   */
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPolicyCommandOutput>;
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  public deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): Promise<DeleteAccessPolicyCommandOutput> | void {
    const command = new DeleteAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an asset. This action can't be undone. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and
   *         models</a> in the <i>IoT SiteWise User Guide</i>. </p>
   *          <note>
   *             <p>You can't delete an asset that's associated to another asset. For more information, see
   *           <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DisassociateAssets.html">DisassociateAssets</a>.</p>
   *          </note>
   */
  public deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
  public deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
  public deleteAsset(
    args: DeleteAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssetCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssetCommandOutput) => void
  ): Promise<DeleteAssetCommandOutput> | void {
    const command = new DeleteAssetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an asset model. This action can't be undone. You must delete all assets created
   *       from an asset model before you can delete the model. Also, you can't delete an asset model if
   *       a parent asset model exists that contains a property formula expression that depends on the
   *       asset model that you want to delete. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/delete-assets-and-models.html">Deleting assets and models</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetModelCommandOutput>;
  public deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    cb: (err: any, data?: DeleteAssetModelCommandOutput) => void
  ): void;
  public deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetModelCommandOutput) => void
  ): void;
  public deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAssetModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteAssetModelCommandOutput) => void
  ): Promise<DeleteAssetModelCommandOutput> | void {
    const command = new DeleteAssetModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a dashboard from IoT SiteWise Monitor.</p>
   */
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  public deleteDashboard(
    args: DeleteDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDashboardCommandOutput) => void),
    cb?: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): Promise<DeleteDashboardCommandOutput> | void {
    const command = new DeleteDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a gateway from IoT SiteWise. When you delete a gateway, some of the gateway's files remain
   *       in your gateway's file system.</p>
   */
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayCommandOutput>;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  public deleteGateway(
    args: DeleteGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): Promise<DeleteGatewayCommandOutput> | void {
    const command = new DeleteGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a portal from IoT SiteWise Monitor.</p>
   */
  public deletePortal(
    args: DeletePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalCommandOutput>;
  public deletePortal(args: DeletePortalCommandInput, cb: (err: any, data?: DeletePortalCommandOutput) => void): void;
  public deletePortal(
    args: DeletePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;
  public deletePortal(
    args: DeletePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePortalCommandOutput) => void),
    cb?: (err: any, data?: DeletePortalCommandOutput) => void
  ): Promise<DeletePortalCommandOutput> | void {
    const command = new DeletePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a project from IoT SiteWise Monitor.</p>
   */
  public deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  public deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
  public deleteProject(
    args: DeleteProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteProjectCommandOutput) => void
  ): Promise<DeleteProjectCommandOutput> | void {
    const command = new DeleteProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes an access policy, which specifies an identity's access to an IoT SiteWise Monitor portal or
   *       project.</p>
   */
  public describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessPolicyCommandOutput>;
  public describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    cb: (err: any, data?: DescribeAccessPolicyCommandOutput) => void
  ): void;
  public describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessPolicyCommandOutput) => void
  ): void;
  public describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccessPolicyCommandOutput) => void
  ): Promise<DescribeAccessPolicyCommandOutput> | void {
    const command = new DescribeAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about an asset.</p>
   */
  public describeAsset(
    args: DescribeAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetCommandOutput>;
  public describeAsset(
    args: DescribeAssetCommandInput,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;
  public describeAsset(
    args: DescribeAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;
  public describeAsset(
    args: DescribeAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssetCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssetCommandOutput) => void
  ): Promise<DescribeAssetCommandOutput> | void {
    const command = new DescribeAssetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about an asset model.</p>
   */
  public describeAssetModel(
    args: DescribeAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetModelCommandOutput>;
  public describeAssetModel(
    args: DescribeAssetModelCommandInput,
    cb: (err: any, data?: DescribeAssetModelCommandOutput) => void
  ): void;
  public describeAssetModel(
    args: DescribeAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetModelCommandOutput) => void
  ): void;
  public describeAssetModel(
    args: DescribeAssetModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssetModelCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssetModelCommandOutput) => void
  ): Promise<DescribeAssetModelCommandOutput> | void {
    const command = new DescribeAssetModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about an asset property.</p>
   *          <note>
   *             <p>When you call this operation for an attribute property, this response includes the
   *         default attribute value that you define in the asset model. If you update the default value
   *         in the model, this operation's response includes the new default value.</p>
   *          </note>
   *          <p>This operation doesn't return the value of the asset property. To get the value of an
   *       asset property, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_GetAssetPropertyValue.html">GetAssetPropertyValue</a>.</p>
   */
  public describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetPropertyCommandOutput>;
  public describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    cb: (err: any, data?: DescribeAssetPropertyCommandOutput) => void
  ): void;
  public describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetPropertyCommandOutput) => void
  ): void;
  public describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAssetPropertyCommandOutput) => void),
    cb?: (err: any, data?: DescribeAssetPropertyCommandOutput) => void
  ): Promise<DescribeAssetPropertyCommandOutput> | void {
    const command = new DescribeAssetPropertyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a dashboard.</p>
   */
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardCommandOutput>;
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  public describeDashboard(
    args: DescribeDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeDashboardCommandOutput) => void),
    cb?: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): Promise<DescribeDashboardCommandOutput> | void {
    const command = new DescribeDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the default encryption configuration for the Amazon Web Services account in
   *       the default or specified Region. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultEncryptionConfigurationCommandOutput>;
  public describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    cb: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  public describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  public describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void
  ): Promise<DescribeDefaultEncryptionConfigurationCommandOutput> | void {
    const command = new DescribeDefaultEncryptionConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a gateway.</p>
   */
  public describeGateway(
    args: DescribeGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayCommandOutput>;
  public describeGateway(
    args: DescribeGatewayCommandInput,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;
  public describeGateway(
    args: DescribeGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;
  public describeGateway(
    args: DescribeGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGatewayCommandOutput) => void),
    cb?: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): Promise<DescribeGatewayCommandOutput> | void {
    const command = new DescribeGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a gateway capability configuration.
   *       Each gateway capability defines data sources for a gateway. A capability configuration
   *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
   *       the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
   *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
   */
  public describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayCapabilityConfigurationCommandOutput>;
  public describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    cb: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void
  ): void;
  public describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void
  ): void;
  public describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void
  ): Promise<DescribeGatewayCapabilityConfigurationCommandOutput> | void {
    const command = new DescribeGatewayCapabilityConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the current IoT SiteWise logging options.</p>
   */
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingOptionsCommandOutput>;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  public describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): Promise<DescribeLoggingOptionsCommandOutput> | void {
    const command = new DescribeLoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a portal.</p>
   */
  public describePortal(
    args: DescribePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortalCommandOutput>;
  public describePortal(
    args: DescribePortalCommandInput,
    cb: (err: any, data?: DescribePortalCommandOutput) => void
  ): void;
  public describePortal(
    args: DescribePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortalCommandOutput) => void
  ): void;
  public describePortal(
    args: DescribePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePortalCommandOutput) => void),
    cb?: (err: any, data?: DescribePortalCommandOutput) => void
  ): Promise<DescribePortalCommandOutput> | void {
    const command = new DescribePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about a project.</p>
   */
  public describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  public describeProject(
    args: DescribeProjectCommandInput,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
  public describeProject(
    args: DescribeProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeProjectCommandOutput) => void),
    cb?: (err: any, data?: DescribeProjectCommandOutput) => void
  ): Promise<DescribeProjectCommandOutput> | void {
    const command = new DescribeProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves information about the storage configuration for IoT SiteWise.</p>
   */
  public describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageConfigurationCommandOutput>;
  public describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    cb: (err: any, data?: DescribeStorageConfigurationCommandOutput) => void
  ): void;
  public describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageConfigurationCommandOutput) => void
  ): void;
  public describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeStorageConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeStorageConfigurationCommandOutput) => void
  ): Promise<DescribeStorageConfigurationCommandOutput> | void {
    const command = new DescribeStorageConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates a child asset from the given parent asset through a hierarchy defined in the
   *       parent asset's model.</p>
   */
  public disassociateAssets(
    args: DisassociateAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAssetsCommandOutput>;
  public disassociateAssets(
    args: DisassociateAssetsCommandInput,
    cb: (err: any, data?: DisassociateAssetsCommandOutput) => void
  ): void;
  public disassociateAssets(
    args: DisassociateAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAssetsCommandOutput) => void
  ): void;
  public disassociateAssets(
    args: DisassociateAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateAssetsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAssetsCommandOutput) => void
  ): Promise<DisassociateAssetsCommandOutput> | void {
    const command = new DisassociateAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets aggregated values for an asset property. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#aggregates">Querying
   *         aggregates</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
  public getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetPropertyAggregatesCommandOutput>;
  public getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    cb: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void
  ): void;
  public getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void
  ): void;
  public getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void),
    cb?: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void
  ): Promise<GetAssetPropertyAggregatesCommandOutput> | void {
    const command = new GetAssetPropertyAggregatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets an asset property's current value. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#current-values">Querying
   *         current values</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
  public getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetPropertyValueCommandOutput>;
  public getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    cb: (err: any, data?: GetAssetPropertyValueCommandOutput) => void
  ): void;
  public getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetPropertyValueCommandOutput) => void
  ): void;
  public getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssetPropertyValueCommandOutput) => void),
    cb?: (err: any, data?: GetAssetPropertyValueCommandOutput) => void
  ): Promise<GetAssetPropertyValueCommandOutput> | void {
    const command = new GetAssetPropertyValueCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the history of an asset property's values. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/query-industrial-data.html#historical-values">Querying
   *         historical values</a> in the <i>IoT SiteWise User Guide</i>.</p>
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
  public getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetPropertyValueHistoryCommandOutput>;
  public getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    cb: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void
  ): void;
  public getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void
  ): void;
  public getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void),
    cb?: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void
  ): Promise<GetAssetPropertyValueHistoryCommandOutput> | void {
    const command = new GetAssetPropertyValueHistoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Get interpolated values for an asset property for a specified time interval, during a
   *       period of time. If your time series is missing data points during the specified time interval,
   *       you can use interpolation to estimate the missing data.</p>
   *          <p>For example, you can use this operation to return the interpolated
   *       temperature values for a wind turbine every 24 hours over a duration of 7 days.</p>
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
  public getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInterpolatedAssetPropertyValuesCommandOutput>;
  public getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    cb: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void
  ): void;
  public getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void
  ): void;
  public getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void),
    cb?: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void
  ): Promise<GetInterpolatedAssetPropertyValuesCommandOutput> | void {
    const command = new GetInterpolatedAssetPropertyValuesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of access policies for an identity (an Amazon Web Services SSO user, an Amazon Web Services SSO
   *       group, or an IAM user) or an IoT SiteWise Monitor resource (a portal or project).</p>
   */
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPoliciesCommandOutput>;
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  public listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): Promise<ListAccessPoliciesCommandOutput> | void {
    const command = new ListAccessPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of summaries of all asset models.</p>
   */
  public listAssetModels(
    args: ListAssetModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetModelsCommandOutput>;
  public listAssetModels(
    args: ListAssetModelsCommandInput,
    cb: (err: any, data?: ListAssetModelsCommandOutput) => void
  ): void;
  public listAssetModels(
    args: ListAssetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetModelsCommandOutput) => void
  ): void;
  public listAssetModels(
    args: ListAssetModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssetModelsCommandOutput) => void),
    cb?: (err: any, data?: ListAssetModelsCommandOutput) => void
  ): Promise<ListAssetModelsCommandOutput> | void {
    const command = new ListAssetModelsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of asset relationships for an asset. You can use this operation
   *       to identify an asset's root asset and all associated assets between that asset and its
   *       root.</p>
   */
  public listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetRelationshipsCommandOutput>;
  public listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    cb: (err: any, data?: ListAssetRelationshipsCommandOutput) => void
  ): void;
  public listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetRelationshipsCommandOutput) => void
  ): void;
  public listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssetRelationshipsCommandOutput) => void),
    cb?: (err: any, data?: ListAssetRelationshipsCommandOutput) => void
  ): Promise<ListAssetRelationshipsCommandOutput> | void {
    const command = new ListAssetRelationshipsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of asset summaries.</p>
   *          <p>You can use this operation to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>List assets based on a specific asset model.</p>
   *             </li>
   *             <li>
   *                <p>List top-level assets.</p>
   *             </li>
   *          </ul>
   *          <p>You can't use this operation to list all assets. To retrieve summaries for all of your
   *       assets, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_ListAssetModels.html">ListAssetModels</a> to get all of your asset model IDs. Then, use ListAssets to get all
   *       assets for each asset model.</p>
   */
  public listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
  public listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
  public listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
  public listAssets(
    args: ListAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListAssetsCommandOutput) => void
  ): Promise<ListAssetsCommandOutput> | void {
    const command = new ListAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of associated assets.</p>
   *          <p>You can use this operation to do the following:</p>
   *          <ul>
   *             <li>
   *                <p>List child assets associated to a parent asset by a hierarchy that you specify.</p>
   *             </li>
   *             <li>
   *                <p>List an asset's parent asset.</p>
   *             </li>
   *          </ul>
   */
  public listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedAssetsCommandOutput>;
  public listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    cb: (err: any, data?: ListAssociatedAssetsCommandOutput) => void
  ): void;
  public listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedAssetsCommandOutput) => void
  ): void;
  public listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAssociatedAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListAssociatedAssetsCommandOutput) => void
  ): Promise<ListAssociatedAssetsCommandOutput> | void {
    const command = new ListAssociatedAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of dashboards for an IoT SiteWise Monitor project.</p>
   */
  public listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  public listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  public listDashboards(
    args: ListDashboardsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDashboardsCommandOutput) => void),
    cb?: (err: any, data?: ListDashboardsCommandOutput) => void
  ): Promise<ListDashboardsCommandOutput> | void {
    const command = new ListDashboardsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of gateways.</p>
   */
  public listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  public listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  public listGateways(
    args: ListGatewaysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGatewaysCommandOutput) => void),
    cb?: (err: any, data?: ListGatewaysCommandOutput) => void
  ): Promise<ListGatewaysCommandOutput> | void {
    const command = new ListGatewaysCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of IoT SiteWise Monitor portals.</p>
   */
  public listPortals(args: ListPortalsCommandInput, options?: __HttpHandlerOptions): Promise<ListPortalsCommandOutput>;
  public listPortals(args: ListPortalsCommandInput, cb: (err: any, data?: ListPortalsCommandOutput) => void): void;
  public listPortals(
    args: ListPortalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;
  public listPortals(
    args: ListPortalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPortalsCommandOutput) => void),
    cb?: (err: any, data?: ListPortalsCommandOutput) => void
  ): Promise<ListPortalsCommandOutput> | void {
    const command = new ListPortalsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of assets associated with an IoT SiteWise Monitor project.</p>
   */
  public listProjectAssets(
    args: ListProjectAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectAssetsCommandOutput>;
  public listProjectAssets(
    args: ListProjectAssetsCommandInput,
    cb: (err: any, data?: ListProjectAssetsCommandOutput) => void
  ): void;
  public listProjectAssets(
    args: ListProjectAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectAssetsCommandOutput) => void
  ): void;
  public listProjectAssets(
    args: ListProjectAssetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectAssetsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectAssetsCommandOutput) => void
  ): Promise<ListProjectAssetsCommandOutput> | void {
    const command = new ListProjectAssetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a paginated list of projects for an IoT SiteWise Monitor portal.</p>
   */
  public listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  public listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  public listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
  public listProjects(
    args: ListProjectsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProjectsCommandOutput) => void),
    cb?: (err: any, data?: ListProjectsCommandOutput) => void
  ): Promise<ListProjectsCommandOutput> | void {
    const command = new ListProjectsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the list of tags for an IoT SiteWise resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the default encryption configuration for the Amazon Web Services account. For more information, see
   *         <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/key-management.html">Key management</a> in
   *       the <i>IoT SiteWise User Guide</i>.</p>
   */
  public putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDefaultEncryptionConfigurationCommandOutput>;
  public putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  public putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  public putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): Promise<PutDefaultEncryptionConfigurationCommandOutput> | void {
    const command = new PutDefaultEncryptionConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets logging options for IoT SiteWise.</p>
   */
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  public putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutLoggingOptionsCommandOutput) => void),
    cb?: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): Promise<PutLoggingOptionsCommandOutput> | void {
    const command = new PutLoggingOptionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures storage settings for IoT SiteWise.</p>
   */
  public putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStorageConfigurationCommandOutput>;
  public putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    cb: (err: any, data?: PutStorageConfigurationCommandOutput) => void
  ): void;
  public putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStorageConfigurationCommandOutput) => void
  ): void;
  public putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutStorageConfigurationCommandOutput) => void),
    cb?: (err: any, data?: PutStorageConfigurationCommandOutput) => void
  ): Promise<PutStorageConfigurationCommandOutput> | void {
    const command = new PutStorageConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds tags to an IoT SiteWise resource. If a tag already exists for the resource, this operation
   *       updates the tag's value.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a tag from an IoT SiteWise resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing access policy that specifies an identity's access to an IoT SiteWise Monitor
   *       portal or project resource.</p>
   */
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessPolicyCommandOutput>;
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  public updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccessPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): Promise<UpdateAccessPolicyCommandOutput> | void {
    const command = new UpdateAccessPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an asset's name. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   */
  public updateAsset(args: UpdateAssetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetCommandOutput>;
  public updateAsset(args: UpdateAssetCommandInput, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
  public updateAsset(
    args: UpdateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;
  public updateAsset(
    args: UpdateAssetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssetCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssetCommandOutput) => void
  ): Promise<UpdateAssetCommandOutput> | void {
    const command = new UpdateAssetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an asset model and all of the assets that were created from the model. Each asset
   *       created from the model inherits the updated asset model's property and hierarchy definitions.
   *       For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/update-assets-and-models.html">Updating assets and models</a> in the
   *         <i>IoT SiteWise User Guide</i>.</p>
   *          <important>
   *             <p>This operation overwrites the existing model with the provided model. To avoid deleting
   *         your asset model's properties or hierarchies, you must include their IDs and definitions in
   *         the updated asset model payload. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetModel.html">DescribeAssetModel</a>.</p>
   *             <p>If you remove a property from an asset model, IoT SiteWise deletes all previous data for that
   *         property. If you remove a hierarchy definition from an asset model, IoT SiteWise disassociates every
   *         asset associated with that hierarchy. You can't change the type or data type of an existing
   *         property.</p>
   *          </important>
   */
  public updateAssetModel(
    args: UpdateAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetModelCommandOutput>;
  public updateAssetModel(
    args: UpdateAssetModelCommandInput,
    cb: (err: any, data?: UpdateAssetModelCommandOutput) => void
  ): void;
  public updateAssetModel(
    args: UpdateAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetModelCommandOutput) => void
  ): void;
  public updateAssetModel(
    args: UpdateAssetModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssetModelCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssetModelCommandOutput) => void
  ): Promise<UpdateAssetModelCommandOutput> | void {
    const command = new UpdateAssetModelCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an asset property's alias and notification state.</p>
   *          <important>
   *             <p>This operation overwrites the property's existing alias and notification state. To keep
   *         your existing property's alias or notification state, you must include the existing values
   *         in the UpdateAssetProperty request. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeAssetProperty.html">DescribeAssetProperty</a>.</p>
   *          </important>
   */
  public updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetPropertyCommandOutput>;
  public updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    cb: (err: any, data?: UpdateAssetPropertyCommandOutput) => void
  ): void;
  public updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetPropertyCommandOutput) => void
  ): void;
  public updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAssetPropertyCommandOutput) => void),
    cb?: (err: any, data?: UpdateAssetPropertyCommandOutput) => void
  ): Promise<UpdateAssetPropertyCommandOutput> | void {
    const command = new UpdateAssetPropertyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an IoT SiteWise Monitor dashboard.</p>
   */
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  public updateDashboard(
    args: UpdateDashboardCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDashboardCommandOutput) => void),
    cb?: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): Promise<UpdateDashboardCommandOutput> | void {
    const command = new UpdateDashboardCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a gateway's name.</p>
   */
  public updateGateway(
    args: UpdateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayCommandOutput>;
  public updateGateway(
    args: UpdateGatewayCommandInput,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;
  public updateGateway(
    args: UpdateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;
  public updateGateway(
    args: UpdateGatewayCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): Promise<UpdateGatewayCommandOutput> | void {
    const command = new UpdateGatewayCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a gateway capability configuration or defines a new capability configuration.
   *       Each gateway capability defines data sources for a gateway. A capability configuration
   *       can contain multiple data source configurations. If you define OPC-UA sources for a gateway in
   *       the IoT SiteWise console, all of your OPC-UA sources are stored in one capability configuration. To
   *       list all capability configurations for a gateway, use <a href="https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGateway.html">DescribeGateway</a>.</p>
   */
  public updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayCapabilityConfigurationCommandOutput>;
  public updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    cb: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void
  ): void;
  public updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void
  ): void;
  public updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void
  ): Promise<UpdateGatewayCapabilityConfigurationCommandOutput> | void {
    const command = new UpdateGatewayCapabilityConfigurationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an IoT SiteWise Monitor portal.</p>
   */
  public updatePortal(
    args: UpdatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortalCommandOutput>;
  public updatePortal(args: UpdatePortalCommandInput, cb: (err: any, data?: UpdatePortalCommandOutput) => void): void;
  public updatePortal(
    args: UpdatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;
  public updatePortal(
    args: UpdatePortalCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePortalCommandOutput) => void),
    cb?: (err: any, data?: UpdatePortalCommandOutput) => void
  ): Promise<UpdatePortalCommandOutput> | void {
    const command = new UpdatePortalCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an IoT SiteWise Monitor project.</p>
   */
  public updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  public updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  public updateProject(
    args: UpdateProjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateProjectCommandOutput) => void),
    cb?: (err: any, data?: UpdateProjectCommandOutput) => void
  ): Promise<UpdateProjectCommandOutput> | void {
    const command = new UpdateProjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
