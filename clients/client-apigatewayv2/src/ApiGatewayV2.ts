// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ApiGatewayV2Client } from "./ApiGatewayV2Client";
import { CreateApiCommand, CreateApiCommandInput, CreateApiCommandOutput } from "./commands/CreateApiCommand";
import {
  CreateApiMappingCommand,
  CreateApiMappingCommandInput,
  CreateApiMappingCommandOutput,
} from "./commands/CreateApiMappingCommand";
import {
  CreateAuthorizerCommand,
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
} from "./commands/CreateAuthorizerCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDomainNameCommand,
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import {
  CreateIntegrationCommand,
  CreateIntegrationCommandInput,
  CreateIntegrationCommandOutput,
} from "./commands/CreateIntegrationCommand";
import {
  CreateIntegrationResponseCommand,
  CreateIntegrationResponseCommandInput,
  CreateIntegrationResponseCommandOutput,
} from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateRouteCommand, CreateRouteCommandInput, CreateRouteCommandOutput } from "./commands/CreateRouteCommand";
import {
  CreateRouteResponseCommand,
  CreateRouteResponseCommandInput,
  CreateRouteResponseCommandOutput,
} from "./commands/CreateRouteResponseCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateVpcLinkCommand,
  CreateVpcLinkCommandInput,
  CreateVpcLinkCommandOutput,
} from "./commands/CreateVpcLinkCommand";
import {
  DeleteAccessLogSettingsCommand,
  DeleteAccessLogSettingsCommandInput,
  DeleteAccessLogSettingsCommandOutput,
} from "./commands/DeleteAccessLogSettingsCommand";
import { DeleteApiCommand, DeleteApiCommandInput, DeleteApiCommandOutput } from "./commands/DeleteApiCommand";
import {
  DeleteApiMappingCommand,
  DeleteApiMappingCommandInput,
  DeleteApiMappingCommandOutput,
} from "./commands/DeleteApiMappingCommand";
import {
  DeleteAuthorizerCommand,
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput,
} from "./commands/DeleteAuthorizerCommand";
import {
  DeleteCorsConfigurationCommand,
  DeleteCorsConfigurationCommandInput,
  DeleteCorsConfigurationCommandOutput,
} from "./commands/DeleteCorsConfigurationCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DeleteDomainNameCommand,
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
import {
  DeleteIntegrationCommand,
  DeleteIntegrationCommandInput,
  DeleteIntegrationCommandOutput,
} from "./commands/DeleteIntegrationCommand";
import {
  DeleteIntegrationResponseCommand,
  DeleteIntegrationResponseCommandInput,
  DeleteIntegrationResponseCommandOutput,
} from "./commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteRouteCommand, DeleteRouteCommandInput, DeleteRouteCommandOutput } from "./commands/DeleteRouteCommand";
import {
  DeleteRouteRequestParameterCommand,
  DeleteRouteRequestParameterCommandInput,
  DeleteRouteRequestParameterCommandOutput,
} from "./commands/DeleteRouteRequestParameterCommand";
import {
  DeleteRouteResponseCommand,
  DeleteRouteResponseCommandInput,
  DeleteRouteResponseCommandOutput,
} from "./commands/DeleteRouteResponseCommand";
import {
  DeleteRouteSettingsCommand,
  DeleteRouteSettingsCommandInput,
  DeleteRouteSettingsCommandOutput,
} from "./commands/DeleteRouteSettingsCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteVpcLinkCommand,
  DeleteVpcLinkCommandInput,
  DeleteVpcLinkCommandOutput,
} from "./commands/DeleteVpcLinkCommand";
import { ExportApiCommand, ExportApiCommandInput, ExportApiCommandOutput } from "./commands/ExportApiCommand";
import { GetApiCommand, GetApiCommandInput, GetApiCommandOutput } from "./commands/GetApiCommand";
import {
  GetApiMappingCommand,
  GetApiMappingCommandInput,
  GetApiMappingCommandOutput,
} from "./commands/GetApiMappingCommand";
import {
  GetApiMappingsCommand,
  GetApiMappingsCommandInput,
  GetApiMappingsCommandOutput,
} from "./commands/GetApiMappingsCommand";
import { GetApisCommand, GetApisCommandInput, GetApisCommandOutput } from "./commands/GetApisCommand";
import {
  GetAuthorizerCommand,
  GetAuthorizerCommandInput,
  GetAuthorizerCommandOutput,
} from "./commands/GetAuthorizerCommand";
import {
  GetAuthorizersCommand,
  GetAuthorizersCommandInput,
  GetAuthorizersCommandOutput,
} from "./commands/GetAuthorizersCommand";
import {
  GetDeploymentCommand,
  GetDeploymentCommandInput,
  GetDeploymentCommandOutput,
} from "./commands/GetDeploymentCommand";
import {
  GetDeploymentsCommand,
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
} from "./commands/GetDeploymentsCommand";
import {
  GetDomainNameCommand,
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
} from "./commands/GetDomainNameCommand";
import {
  GetDomainNamesCommand,
  GetDomainNamesCommandInput,
  GetDomainNamesCommandOutput,
} from "./commands/GetDomainNamesCommand";
import {
  GetIntegrationCommand,
  GetIntegrationCommandInput,
  GetIntegrationCommandOutput,
} from "./commands/GetIntegrationCommand";
import {
  GetIntegrationResponseCommand,
  GetIntegrationResponseCommandInput,
  GetIntegrationResponseCommandOutput,
} from "./commands/GetIntegrationResponseCommand";
import {
  GetIntegrationResponsesCommand,
  GetIntegrationResponsesCommandInput,
  GetIntegrationResponsesCommandOutput,
} from "./commands/GetIntegrationResponsesCommand";
import {
  GetIntegrationsCommand,
  GetIntegrationsCommandInput,
  GetIntegrationsCommandOutput,
} from "./commands/GetIntegrationsCommand";
import { GetModelCommand, GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetModelTemplateCommand,
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput,
} from "./commands/GetModelTemplateCommand";
import { GetRouteCommand, GetRouteCommandInput, GetRouteCommandOutput } from "./commands/GetRouteCommand";
import {
  GetRouteResponseCommand,
  GetRouteResponseCommandInput,
  GetRouteResponseCommandOutput,
} from "./commands/GetRouteResponseCommand";
import {
  GetRouteResponsesCommand,
  GetRouteResponsesCommandInput,
  GetRouteResponsesCommandOutput,
} from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommand, GetRoutesCommandInput, GetRoutesCommandOutput } from "./commands/GetRoutesCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommand, GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetVpcLinkCommand, GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand, GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import { ImportApiCommand, ImportApiCommandInput, ImportApiCommandOutput } from "./commands/ImportApiCommand";
import { ReimportApiCommand, ReimportApiCommandInput, ReimportApiCommandOutput } from "./commands/ReimportApiCommand";
import {
  ResetAuthorizersCacheCommand,
  ResetAuthorizersCacheCommandInput,
  ResetAuthorizersCacheCommandOutput,
} from "./commands/ResetAuthorizersCacheCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateApiCommand, UpdateApiCommandInput, UpdateApiCommandOutput } from "./commands/UpdateApiCommand";
import {
  UpdateApiMappingCommand,
  UpdateApiMappingCommandInput,
  UpdateApiMappingCommandOutput,
} from "./commands/UpdateApiMappingCommand";
import {
  UpdateAuthorizerCommand,
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
} from "./commands/UpdateAuthorizerCommand";
import {
  UpdateDeploymentCommand,
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput,
} from "./commands/UpdateDeploymentCommand";
import {
  UpdateDomainNameCommand,
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
import {
  UpdateIntegrationCommand,
  UpdateIntegrationCommandInput,
  UpdateIntegrationCommandOutput,
} from "./commands/UpdateIntegrationCommand";
import {
  UpdateIntegrationResponseCommand,
  UpdateIntegrationResponseCommandInput,
  UpdateIntegrationResponseCommandOutput,
} from "./commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import { UpdateRouteCommand, UpdateRouteCommandInput, UpdateRouteCommandOutput } from "./commands/UpdateRouteCommand";
import {
  UpdateRouteResponseCommand,
  UpdateRouteResponseCommandInput,
  UpdateRouteResponseCommandOutput,
} from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import {
  UpdateVpcLinkCommand,
  UpdateVpcLinkCommandInput,
  UpdateVpcLinkCommandOutput,
} from "./commands/UpdateVpcLinkCommand";

/**
 * <p>Amazon API Gateway V2</p>
 */
export class ApiGatewayV2 extends ApiGatewayV2Client {
  /**
   * <p>Creates an Api resource.</p>
   */
  public createApi(args: CreateApiCommandInput, options?: __HttpHandlerOptions): Promise<CreateApiCommandOutput>;
  public createApi(args: CreateApiCommandInput, cb: (err: any, data?: CreateApiCommandOutput) => void): void;
  public createApi(
    args: CreateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiCommandOutput) => void
  ): void;
  public createApi(
    args: CreateApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApiCommandOutput) => void),
    cb?: (err: any, data?: CreateApiCommandOutput) => void
  ): Promise<CreateApiCommandOutput> | void {
    const command = new CreateApiCommand(args);
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
   * <p>Creates an API mapping.</p>
   */
  public createApiMapping(
    args: CreateApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiMappingCommandOutput>;
  public createApiMapping(
    args: CreateApiMappingCommandInput,
    cb: (err: any, data?: CreateApiMappingCommandOutput) => void
  ): void;
  public createApiMapping(
    args: CreateApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiMappingCommandOutput) => void
  ): void;
  public createApiMapping(
    args: CreateApiMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApiMappingCommandOutput) => void),
    cb?: (err: any, data?: CreateApiMappingCommandOutput) => void
  ): Promise<CreateApiMappingCommandOutput> | void {
    const command = new CreateApiMappingCommand(args);
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
   * <p>Creates an Authorizer for an API.</p>
   */
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAuthorizerCommandOutput>;
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): void;
  public createAuthorizer(
    args: CreateAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: CreateAuthorizerCommandOutput) => void
  ): Promise<CreateAuthorizerCommandOutput> | void {
    const command = new CreateAuthorizerCommand(args);
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
   * <p>Creates a Deployment for an API.</p>
   */
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDeploymentCommandOutput>;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: CreateDeploymentCommandOutput) => void
  ): Promise<CreateDeploymentCommandOutput> | void {
    const command = new CreateDeploymentCommand(args);
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
   * <p>Creates a domain name.</p>
   */
  public createDomainName(
    args: CreateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDomainNameCommandOutput>;
  public createDomainName(
    args: CreateDomainNameCommandInput,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  public createDomainName(
    args: CreateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): void;
  public createDomainName(
    args: CreateDomainNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDomainNameCommandOutput) => void),
    cb?: (err: any, data?: CreateDomainNameCommandOutput) => void
  ): Promise<CreateDomainNameCommandOutput> | void {
    const command = new CreateDomainNameCommand(args);
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
   * <p>Creates an Integration.</p>
   */
  public createIntegration(
    args: CreateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationCommandOutput>;
  public createIntegration(
    args: CreateIntegrationCommandInput,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  public createIntegration(
    args: CreateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): void;
  public createIntegration(
    args: CreateIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIntegrationCommandOutput) => void),
    cb?: (err: any, data?: CreateIntegrationCommandOutput) => void
  ): Promise<CreateIntegrationCommandOutput> | void {
    const command = new CreateIntegrationCommand(args);
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
   * <p>Creates an IntegrationResponses.</p>
   */
  public createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIntegrationResponseCommandOutput>;
  public createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    cb: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
  ): void;
  public createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
  ): void;
  public createIntegrationResponse(
    args: CreateIntegrationResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIntegrationResponseCommandOutput) => void),
    cb?: (err: any, data?: CreateIntegrationResponseCommandOutput) => void
  ): Promise<CreateIntegrationResponseCommandOutput> | void {
    const command = new CreateIntegrationResponseCommand(args);
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
   * <p>Creates a Model for an API.</p>
   */
  public createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
  public createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
  public createModel(
    args: CreateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateModelCommandOutput) => void
  ): void;
  public createModel(
    args: CreateModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateModelCommandOutput) => void),
    cb?: (err: any, data?: CreateModelCommandOutput) => void
  ): Promise<CreateModelCommandOutput> | void {
    const command = new CreateModelCommand(args);
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
   * <p>Creates a Route for an API.</p>
   */
  public createRoute(args: CreateRouteCommandInput, options?: __HttpHandlerOptions): Promise<CreateRouteCommandOutput>;
  public createRoute(args: CreateRouteCommandInput, cb: (err: any, data?: CreateRouteCommandOutput) => void): void;
  public createRoute(
    args: CreateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteCommandOutput) => void
  ): void;
  public createRoute(
    args: CreateRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRouteCommandOutput) => void),
    cb?: (err: any, data?: CreateRouteCommandOutput) => void
  ): Promise<CreateRouteCommandOutput> | void {
    const command = new CreateRouteCommand(args);
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
   * <p>Creates a RouteResponse for a Route.</p>
   */
  public createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRouteResponseCommandOutput>;
  public createRouteResponse(
    args: CreateRouteResponseCommandInput,
    cb: (err: any, data?: CreateRouteResponseCommandOutput) => void
  ): void;
  public createRouteResponse(
    args: CreateRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRouteResponseCommandOutput) => void
  ): void;
  public createRouteResponse(
    args: CreateRouteResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRouteResponseCommandOutput) => void),
    cb?: (err: any, data?: CreateRouteResponseCommandOutput) => void
  ): Promise<CreateRouteResponseCommandOutput> | void {
    const command = new CreateRouteResponseCommand(args);
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
   * <p>Creates a Stage for an API.</p>
   */
  public createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  public createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  public createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  public createStage(
    args: CreateStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStageCommandOutput) => void),
    cb?: (err: any, data?: CreateStageCommandOutput) => void
  ): Promise<CreateStageCommandOutput> | void {
    const command = new CreateStageCommand(args);
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
   * <p>Creates a VPC link.</p>
   */
  public createVpcLink(
    args: CreateVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVpcLinkCommandOutput>;
  public createVpcLink(
    args: CreateVpcLinkCommandInput,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
  public createVpcLink(
    args: CreateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): void;
  public createVpcLink(
    args: CreateVpcLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVpcLinkCommandOutput) => void),
    cb?: (err: any, data?: CreateVpcLinkCommandOutput) => void
  ): Promise<CreateVpcLinkCommandOutput> | void {
    const command = new CreateVpcLinkCommand(args);
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
   * <p>Deletes the AccessLogSettings for a Stage. To disable access logging for a Stage, delete its AccessLogSettings.</p>
   */
  public deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessLogSettingsCommandOutput>;
  public deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    cb: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): void;
  public deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): void;
  public deleteAccessLogSettings(
    args: DeleteAccessLogSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessLogSettingsCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessLogSettingsCommandOutput) => void
  ): Promise<DeleteAccessLogSettingsCommandOutput> | void {
    const command = new DeleteAccessLogSettingsCommand(args);
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
   * <p>Deletes an Api resource.</p>
   */
  public deleteApi(args: DeleteApiCommandInput, options?: __HttpHandlerOptions): Promise<DeleteApiCommandOutput>;
  public deleteApi(args: DeleteApiCommandInput, cb: (err: any, data?: DeleteApiCommandOutput) => void): void;
  public deleteApi(
    args: DeleteApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiCommandOutput) => void
  ): void;
  public deleteApi(
    args: DeleteApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApiCommandOutput) => void),
    cb?: (err: any, data?: DeleteApiCommandOutput) => void
  ): Promise<DeleteApiCommandOutput> | void {
    const command = new DeleteApiCommand(args);
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
   * <p>Deletes an API mapping.</p>
   */
  public deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiMappingCommandOutput>;
  public deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    cb: (err: any, data?: DeleteApiMappingCommandOutput) => void
  ): void;
  public deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiMappingCommandOutput) => void
  ): void;
  public deleteApiMapping(
    args: DeleteApiMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApiMappingCommandOutput) => void),
    cb?: (err: any, data?: DeleteApiMappingCommandOutput) => void
  ): Promise<DeleteApiMappingCommandOutput> | void {
    const command = new DeleteApiMappingCommand(args);
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
   * <p>Deletes an Authorizer.</p>
   */
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthorizerCommandOutput>;
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): void;
  public deleteAuthorizer(
    args: DeleteAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: DeleteAuthorizerCommandOutput) => void
  ): Promise<DeleteAuthorizerCommandOutput> | void {
    const command = new DeleteAuthorizerCommand(args);
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
   * <p>Deletes a CORS configuration.</p>
   */
  public deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCorsConfigurationCommandOutput>;
  public deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    cb: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
  ): void;
  public deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
  ): void;
  public deleteCorsConfiguration(
    args: DeleteCorsConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCorsConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DeleteCorsConfigurationCommandOutput) => void
  ): Promise<DeleteCorsConfigurationCommandOutput> | void {
    const command = new DeleteCorsConfigurationCommand(args);
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
   * <p>Deletes a Deployment.</p>
   */
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDeploymentCommandOutput>;
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): void;
  public deleteDeployment(
    args: DeleteDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDeploymentCommandOutput) => void),
    cb?: (err: any, data?: DeleteDeploymentCommandOutput) => void
  ): Promise<DeleteDeploymentCommandOutput> | void {
    const command = new DeleteDeploymentCommand(args);
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
   * <p>Deletes a domain name.</p>
   */
  public deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDomainNameCommandOutput>;
  public deleteDomainName(
    args: DeleteDomainNameCommandInput,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  public deleteDomainName(
    args: DeleteDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): void;
  public deleteDomainName(
    args: DeleteDomainNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDomainNameCommandOutput) => void),
    cb?: (err: any, data?: DeleteDomainNameCommandOutput) => void
  ): Promise<DeleteDomainNameCommandOutput> | void {
    const command = new DeleteDomainNameCommand(args);
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
   * <p>Deletes an Integration.</p>
   */
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationCommandOutput>;
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): void;
  public deleteIntegration(
    args: DeleteIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIntegrationCommandOutput) => void),
    cb?: (err: any, data?: DeleteIntegrationCommandOutput) => void
  ): Promise<DeleteIntegrationCommandOutput> | void {
    const command = new DeleteIntegrationCommand(args);
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
   * <p>Deletes an IntegrationResponses.</p>
   */
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIntegrationResponseCommandOutput>;
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): void;
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteIntegrationResponseCommandOutput) => void),
    cb?: (err: any, data?: DeleteIntegrationResponseCommandOutput) => void
  ): Promise<DeleteIntegrationResponseCommandOutput> | void {
    const command = new DeleteIntegrationResponseCommand(args);
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
   * <p>Deletes a Model.</p>
   */
  public deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
  public deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteModelCommandOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteModelCommandOutput) => void),
    cb?: (err: any, data?: DeleteModelCommandOutput) => void
  ): Promise<DeleteModelCommandOutput> | void {
    const command = new DeleteModelCommand(args);
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
   * <p>Deletes a Route.</p>
   */
  public deleteRoute(args: DeleteRouteCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRouteCommandOutput>;
  public deleteRoute(args: DeleteRouteCommandInput, cb: (err: any, data?: DeleteRouteCommandOutput) => void): void;
  public deleteRoute(
    args: DeleteRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteCommandOutput) => void
  ): void;
  public deleteRoute(
    args: DeleteRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteCommandOutput) => void
  ): Promise<DeleteRouteCommandOutput> | void {
    const command = new DeleteRouteCommand(args);
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
   * <p>Deletes a route request parameter.</p>
   */
  public deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteRequestParameterCommandOutput>;
  public deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    cb: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): void;
  public deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): void;
  public deleteRouteRequestParameter(
    args: DeleteRouteRequestParameterCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteRequestParameterCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteRequestParameterCommandOutput) => void
  ): Promise<DeleteRouteRequestParameterCommandOutput> | void {
    const command = new DeleteRouteRequestParameterCommand(args);
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
   * <p>Deletes a RouteResponse.</p>
   */
  public deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteResponseCommandOutput>;
  public deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    cb: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): void;
  public deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): void;
  public deleteRouteResponse(
    args: DeleteRouteResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteResponseCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteResponseCommandOutput) => void
  ): Promise<DeleteRouteResponseCommandOutput> | void {
    const command = new DeleteRouteResponseCommand(args);
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
   * <p>Deletes the RouteSettings for a stage.</p>
   */
  public deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRouteSettingsCommandOutput>;
  public deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    cb: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
  ): void;
  public deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
  ): void;
  public deleteRouteSettings(
    args: DeleteRouteSettingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRouteSettingsCommandOutput) => void),
    cb?: (err: any, data?: DeleteRouteSettingsCommandOutput) => void
  ): Promise<DeleteRouteSettingsCommandOutput> | void {
    const command = new DeleteRouteSettingsCommand(args);
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
   * <p>Deletes a Stage.</p>
   */
  public deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  public deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  public deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  public deleteStage(
    args: DeleteStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStageCommandOutput) => void),
    cb?: (err: any, data?: DeleteStageCommandOutput) => void
  ): Promise<DeleteStageCommandOutput> | void {
    const command = new DeleteStageCommand(args);
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
   * <p>Deletes a VPC link.</p>
   */
  public deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVpcLinkCommandOutput>;
  public deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  public deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): void;
  public deleteVpcLink(
    args: DeleteVpcLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVpcLinkCommandOutput) => void),
    cb?: (err: any, data?: DeleteVpcLinkCommandOutput) => void
  ): Promise<DeleteVpcLinkCommandOutput> | void {
    const command = new DeleteVpcLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public exportApi(args: ExportApiCommandInput, options?: __HttpHandlerOptions): Promise<ExportApiCommandOutput>;
  public exportApi(args: ExportApiCommandInput, cb: (err: any, data?: ExportApiCommandOutput) => void): void;
  public exportApi(
    args: ExportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportApiCommandOutput) => void
  ): void;
  public exportApi(
    args: ExportApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ExportApiCommandOutput) => void),
    cb?: (err: any, data?: ExportApiCommandOutput) => void
  ): Promise<ExportApiCommandOutput> | void {
    const command = new ExportApiCommand(args);
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
   * <p>Gets an Api resource.</p>
   */
  public getApi(args: GetApiCommandInput, options?: __HttpHandlerOptions): Promise<GetApiCommandOutput>;
  public getApi(args: GetApiCommandInput, cb: (err: any, data?: GetApiCommandOutput) => void): void;
  public getApi(
    args: GetApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCommandOutput) => void
  ): void;
  public getApi(
    args: GetApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiCommandOutput) => void),
    cb?: (err: any, data?: GetApiCommandOutput) => void
  ): Promise<GetApiCommandOutput> | void {
    const command = new GetApiCommand(args);
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
   * <p>Gets an API mapping.</p>
   */
  public getApiMapping(
    args: GetApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiMappingCommandOutput>;
  public getApiMapping(
    args: GetApiMappingCommandInput,
    cb: (err: any, data?: GetApiMappingCommandOutput) => void
  ): void;
  public getApiMapping(
    args: GetApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingCommandOutput) => void
  ): void;
  public getApiMapping(
    args: GetApiMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiMappingCommandOutput) => void),
    cb?: (err: any, data?: GetApiMappingCommandOutput) => void
  ): Promise<GetApiMappingCommandOutput> | void {
    const command = new GetApiMappingCommand(args);
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
   * <p>Gets API mappings.</p>
   */
  public getApiMappings(
    args: GetApiMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiMappingsCommandOutput>;
  public getApiMappings(
    args: GetApiMappingsCommandInput,
    cb: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): void;
  public getApiMappings(
    args: GetApiMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): void;
  public getApiMappings(
    args: GetApiMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiMappingsCommandOutput) => void),
    cb?: (err: any, data?: GetApiMappingsCommandOutput) => void
  ): Promise<GetApiMappingsCommandOutput> | void {
    const command = new GetApiMappingsCommand(args);
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
   * <p>Gets a collection of Api resources.</p>
   */
  public getApis(args: GetApisCommandInput, options?: __HttpHandlerOptions): Promise<GetApisCommandOutput>;
  public getApis(args: GetApisCommandInput, cb: (err: any, data?: GetApisCommandOutput) => void): void;
  public getApis(
    args: GetApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApisCommandOutput) => void
  ): void;
  public getApis(
    args: GetApisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApisCommandOutput) => void),
    cb?: (err: any, data?: GetApisCommandOutput) => void
  ): Promise<GetApisCommandOutput> | void {
    const command = new GetApisCommand(args);
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
   * <p>Gets an Authorizer.</p>
   */
  public getAuthorizer(
    args: GetAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizerCommandOutput>;
  public getAuthorizer(
    args: GetAuthorizerCommandInput,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
  public getAuthorizer(
    args: GetAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): void;
  public getAuthorizer(
    args: GetAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: GetAuthorizerCommandOutput) => void
  ): Promise<GetAuthorizerCommandOutput> | void {
    const command = new GetAuthorizerCommand(args);
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
   * <p>Gets the Authorizers for an API.</p>
   */
  public getAuthorizers(
    args: GetAuthorizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthorizersCommandOutput>;
  public getAuthorizers(
    args: GetAuthorizersCommandInput,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;
  public getAuthorizers(
    args: GetAuthorizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): void;
  public getAuthorizers(
    args: GetAuthorizersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAuthorizersCommandOutput) => void),
    cb?: (err: any, data?: GetAuthorizersCommandOutput) => void
  ): Promise<GetAuthorizersCommandOutput> | void {
    const command = new GetAuthorizersCommand(args);
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
   * <p>Gets a Deployment.</p>
   */
  public getDeployment(
    args: GetDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentCommandOutput>;
  public getDeployment(
    args: GetDeploymentCommandInput,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentCommandOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentCommandOutput) => void
  ): Promise<GetDeploymentCommandOutput> | void {
    const command = new GetDeploymentCommand(args);
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
   * <p>Gets the Deployments for an API.</p>
   */
  public getDeployments(
    args: GetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentsCommandOutput>;
  public getDeployments(
    args: GetDeploymentsCommandInput,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  public getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  public getDeployments(
    args: GetDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): Promise<GetDeploymentsCommandOutput> | void {
    const command = new GetDeploymentsCommand(args);
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
   * <p>Gets a domain name.</p>
   */
  public getDomainName(
    args: GetDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNameCommandOutput>;
  public getDomainName(
    args: GetDomainNameCommandInput,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  public getDomainName(
    args: GetDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNameCommandOutput) => void
  ): void;
  public getDomainName(
    args: GetDomainNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainNameCommandOutput) => void),
    cb?: (err: any, data?: GetDomainNameCommandOutput) => void
  ): Promise<GetDomainNameCommandOutput> | void {
    const command = new GetDomainNameCommand(args);
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
   * <p>Gets the domain names for an AWS account.</p>
   */
  public getDomainNames(
    args: GetDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDomainNamesCommandOutput>;
  public getDomainNames(
    args: GetDomainNamesCommandInput,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;
  public getDomainNames(
    args: GetDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): void;
  public getDomainNames(
    args: GetDomainNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDomainNamesCommandOutput) => void),
    cb?: (err: any, data?: GetDomainNamesCommandOutput) => void
  ): Promise<GetDomainNamesCommandOutput> | void {
    const command = new GetDomainNamesCommand(args);
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
   * <p>Gets an Integration.</p>
   */
  public getIntegration(
    args: GetIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationCommandOutput>;
  public getIntegration(
    args: GetIntegrationCommandInput,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  public getIntegration(
    args: GetIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationCommandOutput) => void
  ): void;
  public getIntegration(
    args: GetIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntegrationCommandOutput) => void),
    cb?: (err: any, data?: GetIntegrationCommandOutput) => void
  ): Promise<GetIntegrationCommandOutput> | void {
    const command = new GetIntegrationCommand(args);
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
   * <p>Gets an IntegrationResponses.</p>
   */
  public getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponseCommandOutput>;
  public getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  public getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): void;
  public getIntegrationResponse(
    args: GetIntegrationResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntegrationResponseCommandOutput) => void),
    cb?: (err: any, data?: GetIntegrationResponseCommandOutput) => void
  ): Promise<GetIntegrationResponseCommandOutput> | void {
    const command = new GetIntegrationResponseCommand(args);
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
   * <p>Gets the IntegrationResponses for an Integration.</p>
   */
  public getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationResponsesCommandOutput>;
  public getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    cb: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): void;
  public getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): void;
  public getIntegrationResponses(
    args: GetIntegrationResponsesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntegrationResponsesCommandOutput) => void),
    cb?: (err: any, data?: GetIntegrationResponsesCommandOutput) => void
  ): Promise<GetIntegrationResponsesCommandOutput> | void {
    const command = new GetIntegrationResponsesCommand(args);
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
   * <p>Gets the Integrations for an API.</p>
   */
  public getIntegrations(
    args: GetIntegrationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntegrationsCommandOutput>;
  public getIntegrations(
    args: GetIntegrationsCommandInput,
    cb: (err: any, data?: GetIntegrationsCommandOutput) => void
  ): void;
  public getIntegrations(
    args: GetIntegrationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntegrationsCommandOutput) => void
  ): void;
  public getIntegrations(
    args: GetIntegrationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntegrationsCommandOutput) => void),
    cb?: (err: any, data?: GetIntegrationsCommandOutput) => void
  ): Promise<GetIntegrationsCommandOutput> | void {
    const command = new GetIntegrationsCommand(args);
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
   * <p>Gets a Model.</p>
   */
  public getModel(args: GetModelCommandInput, options?: __HttpHandlerOptions): Promise<GetModelCommandOutput>;
  public getModel(args: GetModelCommandInput, cb: (err: any, data?: GetModelCommandOutput) => void): void;
  public getModel(
    args: GetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelCommandOutput) => void
  ): void;
  public getModel(
    args: GetModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetModelCommandOutput) => void),
    cb?: (err: any, data?: GetModelCommandOutput) => void
  ): Promise<GetModelCommandOutput> | void {
    const command = new GetModelCommand(args);
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
   * <p>Gets the Models for an API.</p>
   */
  public getModels(args: GetModelsCommandInput, options?: __HttpHandlerOptions): Promise<GetModelsCommandOutput>;
  public getModels(args: GetModelsCommandInput, cb: (err: any, data?: GetModelsCommandOutput) => void): void;
  public getModels(
    args: GetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelsCommandOutput) => void
  ): void;
  public getModels(
    args: GetModelsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetModelsCommandOutput) => void),
    cb?: (err: any, data?: GetModelsCommandOutput) => void
  ): Promise<GetModelsCommandOutput> | void {
    const command = new GetModelsCommand(args);
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
   * <p>Gets a model template.</p>
   */
  public getModelTemplate(
    args: GetModelTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetModelTemplateCommandOutput>;
  public getModelTemplate(
    args: GetModelTemplateCommandInput,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  public getModelTemplate(
    args: GetModelTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): void;
  public getModelTemplate(
    args: GetModelTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetModelTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetModelTemplateCommandOutput) => void
  ): Promise<GetModelTemplateCommandOutput> | void {
    const command = new GetModelTemplateCommand(args);
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
   * <p>Gets a Route.</p>
   */
  public getRoute(args: GetRouteCommandInput, options?: __HttpHandlerOptions): Promise<GetRouteCommandOutput>;
  public getRoute(args: GetRouteCommandInput, cb: (err: any, data?: GetRouteCommandOutput) => void): void;
  public getRoute(
    args: GetRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteCommandOutput) => void
  ): void;
  public getRoute(
    args: GetRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRouteCommandOutput) => void),
    cb?: (err: any, data?: GetRouteCommandOutput) => void
  ): Promise<GetRouteCommandOutput> | void {
    const command = new GetRouteCommand(args);
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
   * <p>Gets a RouteResponse.</p>
   */
  public getRouteResponse(
    args: GetRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteResponseCommandOutput>;
  public getRouteResponse(
    args: GetRouteResponseCommandInput,
    cb: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): void;
  public getRouteResponse(
    args: GetRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): void;
  public getRouteResponse(
    args: GetRouteResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRouteResponseCommandOutput) => void),
    cb?: (err: any, data?: GetRouteResponseCommandOutput) => void
  ): Promise<GetRouteResponseCommandOutput> | void {
    const command = new GetRouteResponseCommand(args);
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
   * <p>Gets the RouteResponses for a Route.</p>
   */
  public getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRouteResponsesCommandOutput>;
  public getRouteResponses(
    args: GetRouteResponsesCommandInput,
    cb: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): void;
  public getRouteResponses(
    args: GetRouteResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): void;
  public getRouteResponses(
    args: GetRouteResponsesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRouteResponsesCommandOutput) => void),
    cb?: (err: any, data?: GetRouteResponsesCommandOutput) => void
  ): Promise<GetRouteResponsesCommandOutput> | void {
    const command = new GetRouteResponsesCommand(args);
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
   * <p>Gets the Routes for an API.</p>
   */
  public getRoutes(args: GetRoutesCommandInput, options?: __HttpHandlerOptions): Promise<GetRoutesCommandOutput>;
  public getRoutes(args: GetRoutesCommandInput, cb: (err: any, data?: GetRoutesCommandOutput) => void): void;
  public getRoutes(
    args: GetRoutesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoutesCommandOutput) => void
  ): void;
  public getRoutes(
    args: GetRoutesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoutesCommandOutput) => void),
    cb?: (err: any, data?: GetRoutesCommandOutput) => void
  ): Promise<GetRoutesCommandOutput> | void {
    const command = new GetRoutesCommand(args);
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
   * <p>Gets a Stage.</p>
   */
  public getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  public getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  public getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  public getStage(
    args: GetStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStageCommandOutput) => void),
    cb?: (err: any, data?: GetStageCommandOutput) => void
  ): Promise<GetStageCommandOutput> | void {
    const command = new GetStageCommand(args);
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
   * <p>Gets the Stages for an API.</p>
   */
  public getStages(args: GetStagesCommandInput, options?: __HttpHandlerOptions): Promise<GetStagesCommandOutput>;
  public getStages(args: GetStagesCommandInput, cb: (err: any, data?: GetStagesCommandOutput) => void): void;
  public getStages(
    args: GetStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStagesCommandOutput) => void
  ): void;
  public getStages(
    args: GetStagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStagesCommandOutput) => void),
    cb?: (err: any, data?: GetStagesCommandOutput) => void
  ): Promise<GetStagesCommandOutput> | void {
    const command = new GetStagesCommand(args);
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
   * <p>Gets a collection of Tag resources.</p>
   */
  public getTags(args: GetTagsCommandInput, options?: __HttpHandlerOptions): Promise<GetTagsCommandOutput>;
  public getTags(args: GetTagsCommandInput, cb: (err: any, data?: GetTagsCommandOutput) => void): void;
  public getTags(
    args: GetTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTagsCommandOutput) => void
  ): void;
  public getTags(
    args: GetTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTagsCommandOutput) => void),
    cb?: (err: any, data?: GetTagsCommandOutput) => void
  ): Promise<GetTagsCommandOutput> | void {
    const command = new GetTagsCommand(args);
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
   * <p>Gets a VPC link.</p>
   */
  public getVpcLink(args: GetVpcLinkCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinkCommandOutput>;
  public getVpcLink(args: GetVpcLinkCommandInput, cb: (err: any, data?: GetVpcLinkCommandOutput) => void): void;
  public getVpcLink(
    args: GetVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): void;
  public getVpcLink(
    args: GetVpcLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVpcLinkCommandOutput) => void),
    cb?: (err: any, data?: GetVpcLinkCommandOutput) => void
  ): Promise<GetVpcLinkCommandOutput> | void {
    const command = new GetVpcLinkCommand(args);
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
   * <p>Gets a collection of VPC links.</p>
   */
  public getVpcLinks(args: GetVpcLinksCommandInput, options?: __HttpHandlerOptions): Promise<GetVpcLinksCommandOutput>;
  public getVpcLinks(args: GetVpcLinksCommandInput, cb: (err: any, data?: GetVpcLinksCommandOutput) => void): void;
  public getVpcLinks(
    args: GetVpcLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): void;
  public getVpcLinks(
    args: GetVpcLinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVpcLinksCommandOutput) => void),
    cb?: (err: any, data?: GetVpcLinksCommandOutput) => void
  ): Promise<GetVpcLinksCommandOutput> | void {
    const command = new GetVpcLinksCommand(args);
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
   * <p>Imports an API.</p>
   */
  public importApi(args: ImportApiCommandInput, options?: __HttpHandlerOptions): Promise<ImportApiCommandOutput>;
  public importApi(args: ImportApiCommandInput, cb: (err: any, data?: ImportApiCommandOutput) => void): void;
  public importApi(
    args: ImportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiCommandOutput) => void
  ): void;
  public importApi(
    args: ImportApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportApiCommandOutput) => void),
    cb?: (err: any, data?: ImportApiCommandOutput) => void
  ): Promise<ImportApiCommandOutput> | void {
    const command = new ImportApiCommand(args);
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
   * <p>Puts an Api resource.</p>
   */
  public reimportApi(args: ReimportApiCommandInput, options?: __HttpHandlerOptions): Promise<ReimportApiCommandOutput>;
  public reimportApi(args: ReimportApiCommandInput, cb: (err: any, data?: ReimportApiCommandOutput) => void): void;
  public reimportApi(
    args: ReimportApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReimportApiCommandOutput) => void
  ): void;
  public reimportApi(
    args: ReimportApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ReimportApiCommandOutput) => void),
    cb?: (err: any, data?: ReimportApiCommandOutput) => void
  ): Promise<ReimportApiCommandOutput> | void {
    const command = new ReimportApiCommand(args);
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
   * <p>Resets all authorizer cache entries on a stage. Supported only for HTTP APIs.</p>
   */
  public resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetAuthorizersCacheCommandOutput>;
  public resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    cb: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
  ): void;
  public resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
  ): void;
  public resetAuthorizersCache(
    args: ResetAuthorizersCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetAuthorizersCacheCommandOutput) => void),
    cb?: (err: any, data?: ResetAuthorizersCacheCommandOutput) => void
  ): Promise<ResetAuthorizersCacheCommandOutput> | void {
    const command = new ResetAuthorizersCacheCommand(args);
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
   * <p>Creates a new Tag resource to represent a tag.</p>
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
   * <p>Deletes a Tag.</p>
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
   * <p>Updates an Api resource.</p>
   */
  public updateApi(args: UpdateApiCommandInput, options?: __HttpHandlerOptions): Promise<UpdateApiCommandOutput>;
  public updateApi(args: UpdateApiCommandInput, cb: (err: any, data?: UpdateApiCommandOutput) => void): void;
  public updateApi(
    args: UpdateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiCommandOutput) => void
  ): void;
  public updateApi(
    args: UpdateApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApiCommandOutput) => void),
    cb?: (err: any, data?: UpdateApiCommandOutput) => void
  ): Promise<UpdateApiCommandOutput> | void {
    const command = new UpdateApiCommand(args);
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
   * <p>The API mapping.</p>
   */
  public updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiMappingCommandOutput>;
  public updateApiMapping(
    args: UpdateApiMappingCommandInput,
    cb: (err: any, data?: UpdateApiMappingCommandOutput) => void
  ): void;
  public updateApiMapping(
    args: UpdateApiMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiMappingCommandOutput) => void
  ): void;
  public updateApiMapping(
    args: UpdateApiMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApiMappingCommandOutput) => void),
    cb?: (err: any, data?: UpdateApiMappingCommandOutput) => void
  ): Promise<UpdateApiMappingCommandOutput> | void {
    const command = new UpdateApiMappingCommand(args);
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
   * <p>Updates an Authorizer.</p>
   */
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAuthorizerCommandOutput>;
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): void;
  public updateAuthorizer(
    args: UpdateAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: UpdateAuthorizerCommandOutput) => void
  ): Promise<UpdateAuthorizerCommandOutput> | void {
    const command = new UpdateAuthorizerCommand(args);
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
   * <p>Updates a Deployment.</p>
   */
  public updateDeployment(
    args: UpdateDeploymentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDeploymentCommandOutput>;
  public updateDeployment(
    args: UpdateDeploymentCommandInput,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  public updateDeployment(
    args: UpdateDeploymentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): void;
  public updateDeployment(
    args: UpdateDeploymentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDeploymentCommandOutput) => void),
    cb?: (err: any, data?: UpdateDeploymentCommandOutput) => void
  ): Promise<UpdateDeploymentCommandOutput> | void {
    const command = new UpdateDeploymentCommand(args);
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
   * <p>Updates a domain name.</p>
   */
  public updateDomainName(
    args: UpdateDomainNameCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDomainNameCommandOutput>;
  public updateDomainName(
    args: UpdateDomainNameCommandInput,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  public updateDomainName(
    args: UpdateDomainNameCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): void;
  public updateDomainName(
    args: UpdateDomainNameCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDomainNameCommandOutput) => void),
    cb?: (err: any, data?: UpdateDomainNameCommandOutput) => void
  ): Promise<UpdateDomainNameCommandOutput> | void {
    const command = new UpdateDomainNameCommand(args);
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
   * <p>Updates an Integration.</p>
   */
  public updateIntegration(
    args: UpdateIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationCommandOutput>;
  public updateIntegration(
    args: UpdateIntegrationCommandInput,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  public updateIntegration(
    args: UpdateIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): void;
  public updateIntegration(
    args: UpdateIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIntegrationCommandOutput) => void),
    cb?: (err: any, data?: UpdateIntegrationCommandOutput) => void
  ): Promise<UpdateIntegrationCommandOutput> | void {
    const command = new UpdateIntegrationCommand(args);
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
   * <p>Updates an IntegrationResponses.</p>
   */
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateIntegrationResponseCommandOutput>;
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): void;
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateIntegrationResponseCommandOutput) => void),
    cb?: (err: any, data?: UpdateIntegrationResponseCommandOutput) => void
  ): Promise<UpdateIntegrationResponseCommandOutput> | void {
    const command = new UpdateIntegrationResponseCommand(args);
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
   * <p>Updates a Model.</p>
   */
  public updateModel(args: UpdateModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelCommandOutput>;
  public updateModel(args: UpdateModelCommandInput, cb: (err: any, data?: UpdateModelCommandOutput) => void): void;
  public updateModel(
    args: UpdateModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateModelCommandOutput) => void
  ): void;
  public updateModel(
    args: UpdateModelCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateModelCommandOutput) => void),
    cb?: (err: any, data?: UpdateModelCommandOutput) => void
  ): Promise<UpdateModelCommandOutput> | void {
    const command = new UpdateModelCommand(args);
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
   * <p>Updates a Route.</p>
   */
  public updateRoute(args: UpdateRouteCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRouteCommandOutput>;
  public updateRoute(args: UpdateRouteCommandInput, cb: (err: any, data?: UpdateRouteCommandOutput) => void): void;
  public updateRoute(
    args: UpdateRouteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteCommandOutput) => void
  ): void;
  public updateRoute(
    args: UpdateRouteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRouteCommandOutput) => void),
    cb?: (err: any, data?: UpdateRouteCommandOutput) => void
  ): Promise<UpdateRouteCommandOutput> | void {
    const command = new UpdateRouteCommand(args);
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
   * <p>Updates a RouteResponse.</p>
   */
  public updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRouteResponseCommandOutput>;
  public updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    cb: (err: any, data?: UpdateRouteResponseCommandOutput) => void
  ): void;
  public updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRouteResponseCommandOutput) => void
  ): void;
  public updateRouteResponse(
    args: UpdateRouteResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRouteResponseCommandOutput) => void),
    cb?: (err: any, data?: UpdateRouteResponseCommandOutput) => void
  ): Promise<UpdateRouteResponseCommandOutput> | void {
    const command = new UpdateRouteResponseCommand(args);
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
   * <p>Updates a Stage.</p>
   */
  public updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  public updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  public updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  public updateStage(
    args: UpdateStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStageCommandOutput) => void),
    cb?: (err: any, data?: UpdateStageCommandOutput) => void
  ): Promise<UpdateStageCommandOutput> | void {
    const command = new UpdateStageCommand(args);
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
   * <p>Updates a VPC link.</p>
   */
  public updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVpcLinkCommandOutput>;
  public updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
  public updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): void;
  public updateVpcLink(
    args: UpdateVpcLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVpcLinkCommandOutput) => void),
    cb?: (err: any, data?: UpdateVpcLinkCommandOutput) => void
  ): Promise<UpdateVpcLinkCommandOutput> | void {
    const command = new UpdateVpcLinkCommand(args);
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
