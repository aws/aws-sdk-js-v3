// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { APIGatewayClient } from "./APIGatewayClient";
import {
  CreateApiKeyCommand,
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
} from "./commands/CreateApiKeyCommand";
import {
  CreateAuthorizerCommand,
  CreateAuthorizerCommandInput,
  CreateAuthorizerCommandOutput,
} from "./commands/CreateAuthorizerCommand";
import {
  CreateBasePathMappingCommand,
  CreateBasePathMappingCommandInput,
  CreateBasePathMappingCommandOutput,
} from "./commands/CreateBasePathMappingCommand";
import {
  CreateDeploymentCommand,
  CreateDeploymentCommandInput,
  CreateDeploymentCommandOutput,
} from "./commands/CreateDeploymentCommand";
import {
  CreateDocumentationPartCommand,
  CreateDocumentationPartCommandInput,
  CreateDocumentationPartCommandOutput,
} from "./commands/CreateDocumentationPartCommand";
import {
  CreateDocumentationVersionCommand,
  CreateDocumentationVersionCommandInput,
  CreateDocumentationVersionCommandOutput,
} from "./commands/CreateDocumentationVersionCommand";
import {
  CreateDomainNameCommand,
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import { CreateModelCommand, CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import {
  CreateRequestValidatorCommand,
  CreateRequestValidatorCommandInput,
  CreateRequestValidatorCommandOutput,
} from "./commands/CreateRequestValidatorCommand";
import {
  CreateResourceCommand,
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import {
  CreateRestApiCommand,
  CreateRestApiCommandInput,
  CreateRestApiCommandOutput,
} from "./commands/CreateRestApiCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateUsagePlanCommand,
  CreateUsagePlanCommandInput,
  CreateUsagePlanCommandOutput,
} from "./commands/CreateUsagePlanCommand";
import {
  CreateUsagePlanKeyCommand,
  CreateUsagePlanKeyCommandInput,
  CreateUsagePlanKeyCommandOutput,
} from "./commands/CreateUsagePlanKeyCommand";
import {
  CreateVpcLinkCommand,
  CreateVpcLinkCommandInput,
  CreateVpcLinkCommandOutput,
} from "./commands/CreateVpcLinkCommand";
import {
  DeleteApiKeyCommand,
  DeleteApiKeyCommandInput,
  DeleteApiKeyCommandOutput,
} from "./commands/DeleteApiKeyCommand";
import {
  DeleteAuthorizerCommand,
  DeleteAuthorizerCommandInput,
  DeleteAuthorizerCommandOutput,
} from "./commands/DeleteAuthorizerCommand";
import {
  DeleteBasePathMappingCommand,
  DeleteBasePathMappingCommandInput,
  DeleteBasePathMappingCommandOutput,
} from "./commands/DeleteBasePathMappingCommand";
import {
  DeleteClientCertificateCommand,
  DeleteClientCertificateCommandInput,
  DeleteClientCertificateCommandOutput,
} from "./commands/DeleteClientCertificateCommand";
import {
  DeleteDeploymentCommand,
  DeleteDeploymentCommandInput,
  DeleteDeploymentCommandOutput,
} from "./commands/DeleteDeploymentCommand";
import {
  DeleteDocumentationPartCommand,
  DeleteDocumentationPartCommandInput,
  DeleteDocumentationPartCommandOutput,
} from "./commands/DeleteDocumentationPartCommand";
import {
  DeleteDocumentationVersionCommand,
  DeleteDocumentationVersionCommandInput,
  DeleteDocumentationVersionCommandOutput,
} from "./commands/DeleteDocumentationVersionCommand";
import {
  DeleteDomainNameCommand,
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
import {
  DeleteGatewayResponseCommand,
  DeleteGatewayResponseCommandInput,
  DeleteGatewayResponseCommandOutput,
} from "./commands/DeleteGatewayResponseCommand";
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
import {
  DeleteMethodCommand,
  DeleteMethodCommandInput,
  DeleteMethodCommandOutput,
} from "./commands/DeleteMethodCommand";
import {
  DeleteMethodResponseCommand,
  DeleteMethodResponseCommandInput,
  DeleteMethodResponseCommandOutput,
} from "./commands/DeleteMethodResponseCommand";
import { DeleteModelCommand, DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import {
  DeleteRequestValidatorCommand,
  DeleteRequestValidatorCommandInput,
  DeleteRequestValidatorCommandOutput,
} from "./commands/DeleteRequestValidatorCommand";
import {
  DeleteResourceCommand,
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import {
  DeleteRestApiCommand,
  DeleteRestApiCommandInput,
  DeleteRestApiCommandOutput,
} from "./commands/DeleteRestApiCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteUsagePlanCommand,
  DeleteUsagePlanCommandInput,
  DeleteUsagePlanCommandOutput,
} from "./commands/DeleteUsagePlanCommand";
import {
  DeleteUsagePlanKeyCommand,
  DeleteUsagePlanKeyCommandInput,
  DeleteUsagePlanKeyCommandOutput,
} from "./commands/DeleteUsagePlanKeyCommand";
import {
  DeleteVpcLinkCommand,
  DeleteVpcLinkCommandInput,
  DeleteVpcLinkCommandOutput,
} from "./commands/DeleteVpcLinkCommand";
import {
  FlushStageAuthorizersCacheCommand,
  FlushStageAuthorizersCacheCommandInput,
  FlushStageAuthorizersCacheCommandOutput,
} from "./commands/FlushStageAuthorizersCacheCommand";
import {
  FlushStageCacheCommand,
  FlushStageCacheCommandInput,
  FlushStageCacheCommandOutput,
} from "./commands/FlushStageCacheCommand";
import {
  GenerateClientCertificateCommand,
  GenerateClientCertificateCommandInput,
  GenerateClientCertificateCommandOutput,
} from "./commands/GenerateClientCertificateCommand";
import { GetAccountCommand, GetAccountCommandInput, GetAccountCommandOutput } from "./commands/GetAccountCommand";
import { GetApiKeyCommand, GetApiKeyCommandInput, GetApiKeyCommandOutput } from "./commands/GetApiKeyCommand";
import { GetApiKeysCommand, GetApiKeysCommandInput, GetApiKeysCommandOutput } from "./commands/GetApiKeysCommand";
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
  GetBasePathMappingCommand,
  GetBasePathMappingCommandInput,
  GetBasePathMappingCommandOutput,
} from "./commands/GetBasePathMappingCommand";
import {
  GetBasePathMappingsCommand,
  GetBasePathMappingsCommandInput,
  GetBasePathMappingsCommandOutput,
} from "./commands/GetBasePathMappingsCommand";
import {
  GetClientCertificateCommand,
  GetClientCertificateCommandInput,
  GetClientCertificateCommandOutput,
} from "./commands/GetClientCertificateCommand";
import {
  GetClientCertificatesCommand,
  GetClientCertificatesCommandInput,
  GetClientCertificatesCommandOutput,
} from "./commands/GetClientCertificatesCommand";
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
  GetDocumentationPartCommand,
  GetDocumentationPartCommandInput,
  GetDocumentationPartCommandOutput,
} from "./commands/GetDocumentationPartCommand";
import {
  GetDocumentationPartsCommand,
  GetDocumentationPartsCommandInput,
  GetDocumentationPartsCommandOutput,
} from "./commands/GetDocumentationPartsCommand";
import {
  GetDocumentationVersionCommand,
  GetDocumentationVersionCommandInput,
  GetDocumentationVersionCommandOutput,
} from "./commands/GetDocumentationVersionCommand";
import {
  GetDocumentationVersionsCommand,
  GetDocumentationVersionsCommandInput,
  GetDocumentationVersionsCommandOutput,
} from "./commands/GetDocumentationVersionsCommand";
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
import { GetExportCommand, GetExportCommandInput, GetExportCommandOutput } from "./commands/GetExportCommand";
import {
  GetGatewayResponseCommand,
  GetGatewayResponseCommandInput,
  GetGatewayResponseCommandOutput,
} from "./commands/GetGatewayResponseCommand";
import {
  GetGatewayResponsesCommand,
  GetGatewayResponsesCommandInput,
  GetGatewayResponsesCommandOutput,
} from "./commands/GetGatewayResponsesCommand";
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
import { GetMethodCommand, GetMethodCommandInput, GetMethodCommandOutput } from "./commands/GetMethodCommand";
import {
  GetMethodResponseCommand,
  GetMethodResponseCommandInput,
  GetMethodResponseCommandOutput,
} from "./commands/GetMethodResponseCommand";
import { GetModelCommand, GetModelCommandInput, GetModelCommandOutput } from "./commands/GetModelCommand";
import { GetModelsCommand, GetModelsCommandInput, GetModelsCommandOutput } from "./commands/GetModelsCommand";
import {
  GetModelTemplateCommand,
  GetModelTemplateCommandInput,
  GetModelTemplateCommandOutput,
} from "./commands/GetModelTemplateCommand";
import {
  GetRequestValidatorCommand,
  GetRequestValidatorCommandInput,
  GetRequestValidatorCommandOutput,
} from "./commands/GetRequestValidatorCommand";
import {
  GetRequestValidatorsCommand,
  GetRequestValidatorsCommandInput,
  GetRequestValidatorsCommandOutput,
} from "./commands/GetRequestValidatorsCommand";
import { GetResourceCommand, GetResourceCommandInput, GetResourceCommandOutput } from "./commands/GetResourceCommand";
import {
  GetResourcesCommand,
  GetResourcesCommandInput,
  GetResourcesCommandOutput,
} from "./commands/GetResourcesCommand";
import { GetRestApiCommand, GetRestApiCommandInput, GetRestApiCommandOutput } from "./commands/GetRestApiCommand";
import { GetRestApisCommand, GetRestApisCommandInput, GetRestApisCommandOutput } from "./commands/GetRestApisCommand";
import { GetSdkCommand, GetSdkCommandInput, GetSdkCommandOutput } from "./commands/GetSdkCommand";
import { GetSdkTypeCommand, GetSdkTypeCommandInput, GetSdkTypeCommandOutput } from "./commands/GetSdkTypeCommand";
import { GetSdkTypesCommand, GetSdkTypesCommandInput, GetSdkTypesCommandOutput } from "./commands/GetSdkTypesCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStagesCommand, GetStagesCommandInput, GetStagesCommandOutput } from "./commands/GetStagesCommand";
import { GetTagsCommand, GetTagsCommandInput, GetTagsCommandOutput } from "./commands/GetTagsCommand";
import { GetUsageCommand, GetUsageCommandInput, GetUsageCommandOutput } from "./commands/GetUsageCommand";
import {
  GetUsagePlanCommand,
  GetUsagePlanCommandInput,
  GetUsagePlanCommandOutput,
} from "./commands/GetUsagePlanCommand";
import {
  GetUsagePlanKeyCommand,
  GetUsagePlanKeyCommandInput,
  GetUsagePlanKeyCommandOutput,
} from "./commands/GetUsagePlanKeyCommand";
import {
  GetUsagePlanKeysCommand,
  GetUsagePlanKeysCommandInput,
  GetUsagePlanKeysCommandOutput,
} from "./commands/GetUsagePlanKeysCommand";
import {
  GetUsagePlansCommand,
  GetUsagePlansCommandInput,
  GetUsagePlansCommandOutput,
} from "./commands/GetUsagePlansCommand";
import { GetVpcLinkCommand, GetVpcLinkCommandInput, GetVpcLinkCommandOutput } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand, GetVpcLinksCommandInput, GetVpcLinksCommandOutput } from "./commands/GetVpcLinksCommand";
import {
  ImportApiKeysCommand,
  ImportApiKeysCommandInput,
  ImportApiKeysCommandOutput,
} from "./commands/ImportApiKeysCommand";
import {
  ImportDocumentationPartsCommand,
  ImportDocumentationPartsCommandInput,
  ImportDocumentationPartsCommandOutput,
} from "./commands/ImportDocumentationPartsCommand";
import {
  ImportRestApiCommand,
  ImportRestApiCommandInput,
  ImportRestApiCommandOutput,
} from "./commands/ImportRestApiCommand";
import {
  PutGatewayResponseCommand,
  PutGatewayResponseCommandInput,
  PutGatewayResponseCommandOutput,
} from "./commands/PutGatewayResponseCommand";
import {
  PutIntegrationCommand,
  PutIntegrationCommandInput,
  PutIntegrationCommandOutput,
} from "./commands/PutIntegrationCommand";
import {
  PutIntegrationResponseCommand,
  PutIntegrationResponseCommandInput,
  PutIntegrationResponseCommandOutput,
} from "./commands/PutIntegrationResponseCommand";
import { PutMethodCommand, PutMethodCommandInput, PutMethodCommandOutput } from "./commands/PutMethodCommand";
import {
  PutMethodResponseCommand,
  PutMethodResponseCommandInput,
  PutMethodResponseCommandOutput,
} from "./commands/PutMethodResponseCommand";
import { PutRestApiCommand, PutRestApiCommandInput, PutRestApiCommandOutput } from "./commands/PutRestApiCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TestInvokeAuthorizerCommand,
  TestInvokeAuthorizerCommandInput,
  TestInvokeAuthorizerCommandOutput,
} from "./commands/TestInvokeAuthorizerCommand";
import {
  TestInvokeMethodCommand,
  TestInvokeMethodCommandInput,
  TestInvokeMethodCommandOutput,
} from "./commands/TestInvokeMethodCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccountCommand,
  UpdateAccountCommandInput,
  UpdateAccountCommandOutput,
} from "./commands/UpdateAccountCommand";
import {
  UpdateApiKeyCommand,
  UpdateApiKeyCommandInput,
  UpdateApiKeyCommandOutput,
} from "./commands/UpdateApiKeyCommand";
import {
  UpdateAuthorizerCommand,
  UpdateAuthorizerCommandInput,
  UpdateAuthorizerCommandOutput,
} from "./commands/UpdateAuthorizerCommand";
import {
  UpdateBasePathMappingCommand,
  UpdateBasePathMappingCommandInput,
  UpdateBasePathMappingCommandOutput,
} from "./commands/UpdateBasePathMappingCommand";
import {
  UpdateClientCertificateCommand,
  UpdateClientCertificateCommandInput,
  UpdateClientCertificateCommandOutput,
} from "./commands/UpdateClientCertificateCommand";
import {
  UpdateDeploymentCommand,
  UpdateDeploymentCommandInput,
  UpdateDeploymentCommandOutput,
} from "./commands/UpdateDeploymentCommand";
import {
  UpdateDocumentationPartCommand,
  UpdateDocumentationPartCommandInput,
  UpdateDocumentationPartCommandOutput,
} from "./commands/UpdateDocumentationPartCommand";
import {
  UpdateDocumentationVersionCommand,
  UpdateDocumentationVersionCommandInput,
  UpdateDocumentationVersionCommandOutput,
} from "./commands/UpdateDocumentationVersionCommand";
import {
  UpdateDomainNameCommand,
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
import {
  UpdateGatewayResponseCommand,
  UpdateGatewayResponseCommandInput,
  UpdateGatewayResponseCommandOutput,
} from "./commands/UpdateGatewayResponseCommand";
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
import {
  UpdateMethodCommand,
  UpdateMethodCommandInput,
  UpdateMethodCommandOutput,
} from "./commands/UpdateMethodCommand";
import {
  UpdateMethodResponseCommand,
  UpdateMethodResponseCommandInput,
  UpdateMethodResponseCommandOutput,
} from "./commands/UpdateMethodResponseCommand";
import { UpdateModelCommand, UpdateModelCommandInput, UpdateModelCommandOutput } from "./commands/UpdateModelCommand";
import {
  UpdateRequestValidatorCommand,
  UpdateRequestValidatorCommandInput,
  UpdateRequestValidatorCommandOutput,
} from "./commands/UpdateRequestValidatorCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import {
  UpdateRestApiCommand,
  UpdateRestApiCommandInput,
  UpdateRestApiCommandOutput,
} from "./commands/UpdateRestApiCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { UpdateUsageCommand, UpdateUsageCommandInput, UpdateUsageCommandOutput } from "./commands/UpdateUsageCommand";
import {
  UpdateUsagePlanCommand,
  UpdateUsagePlanCommandInput,
  UpdateUsagePlanCommandOutput,
} from "./commands/UpdateUsagePlanCommand";
import {
  UpdateVpcLinkCommand,
  UpdateVpcLinkCommandInput,
  UpdateVpcLinkCommandOutput,
} from "./commands/UpdateVpcLinkCommand";

/**
 * <fullname>Amazon API Gateway</fullname>
 *          <p>Amazon API Gateway helps developers deliver robust, secure, and scalable mobile and web application back ends. API Gateway allows developers to securely connect mobile and web applications to APIs that run on AWS Lambda, Amazon EC2, or other publicly addressable web services that are hosted outside of AWS.</p>
 */
export class APIGateway extends APIGatewayClient {
  /**
   * <p>Create an ApiKey resource. </p>
   */
  public createApiKey(
    args: CreateApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiKeyCommandOutput>;
  public createApiKey(args: CreateApiKeyCommandInput, cb: (err: any, data?: CreateApiKeyCommandOutput) => void): void;
  public createApiKey(
    args: CreateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): void;
  public createApiKey(
    args: CreateApiKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApiKeyCommandOutput) => void),
    cb?: (err: any, data?: CreateApiKeyCommandOutput) => void
  ): Promise<CreateApiKeyCommandOutput> | void {
    const command = new CreateApiKeyCommand(args);
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
   * <p>Adds a new Authorizer resource to an existing RestApi resource.</p>
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
   * <p>Creates a new BasePathMapping resource.</p>
   */
  public createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBasePathMappingCommandOutput>;
  public createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  public createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): void;
  public createBasePathMapping(
    args: CreateBasePathMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateBasePathMappingCommandOutput) => void),
    cb?: (err: any, data?: CreateBasePathMappingCommandOutput) => void
  ): Promise<CreateBasePathMappingCommandOutput> | void {
    const command = new CreateBasePathMappingCommand(args);
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
   * <p>Creates a Deployment resource, which makes a specified RestApi callable over the internet.</p>
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
   * <p>Creates a documentation part.</p>
   */
  public createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationPartCommandOutput>;
  public createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  public createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): void;
  public createDocumentationPart(
    args: CreateDocumentationPartCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDocumentationPartCommandOutput) => void),
    cb?: (err: any, data?: CreateDocumentationPartCommandOutput) => void
  ): Promise<CreateDocumentationPartCommandOutput> | void {
    const command = new CreateDocumentationPartCommand(args);
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
   * <p>Creates a documentation version</p>
   */
  public createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDocumentationVersionCommandOutput>;
  public createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  public createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): void;
  public createDocumentationVersion(
    args: CreateDocumentationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDocumentationVersionCommandOutput) => void),
    cb?: (err: any, data?: CreateDocumentationVersionCommandOutput) => void
  ): Promise<CreateDocumentationVersionCommandOutput> | void {
    const command = new CreateDocumentationVersionCommand(args);
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
   * <p>Creates a new domain name.</p>
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
   * <p>Adds a new Model resource to an existing RestApi resource.</p>
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
   * <p>Creates a RequestValidator of a given RestApi.</p>
   */
  public createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRequestValidatorCommandOutput>;
  public createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  public createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): void;
  public createRequestValidator(
    args: CreateRequestValidatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRequestValidatorCommandOutput) => void),
    cb?: (err: any, data?: CreateRequestValidatorCommandOutput) => void
  ): Promise<CreateRequestValidatorCommandOutput> | void {
    const command = new CreateRequestValidatorCommand(args);
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
   * <p>Creates a Resource resource.</p>
   */
  public createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  public createResource(
    args: CreateResourceCommandInput,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  public createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  public createResource(
    args: CreateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceCommandOutput) => void
  ): Promise<CreateResourceCommandOutput> | void {
    const command = new CreateResourceCommand(args);
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
   * <p>Creates a new RestApi resource.</p>
   */
  public createRestApi(
    args: CreateRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRestApiCommandOutput>;
  public createRestApi(
    args: CreateRestApiCommandInput,
    cb: (err: any, data?: CreateRestApiCommandOutput) => void
  ): void;
  public createRestApi(
    args: CreateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestApiCommandOutput) => void
  ): void;
  public createRestApi(
    args: CreateRestApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRestApiCommandOutput) => void),
    cb?: (err: any, data?: CreateRestApiCommandOutput) => void
  ): Promise<CreateRestApiCommandOutput> | void {
    const command = new CreateRestApiCommand(args);
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
   * <p>Creates a new Stage resource that references a pre-existing Deployment for the API. </p>
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
   * <p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>
   */
  public createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanCommandOutput>;
  public createUsagePlan(
    args: CreateUsagePlanCommandInput,
    cb: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): void;
  public createUsagePlan(
    args: CreateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): void;
  public createUsagePlan(
    args: CreateUsagePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUsagePlanCommandOutput) => void),
    cb?: (err: any, data?: CreateUsagePlanCommandOutput) => void
  ): Promise<CreateUsagePlanCommandOutput> | void {
    const command = new CreateUsagePlanCommand(args);
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
   * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
   */
  public createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUsagePlanKeyCommandOutput>;
  public createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  public createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): void;
  public createUsagePlanKey(
    args: CreateUsagePlanKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUsagePlanKeyCommandOutput) => void),
    cb?: (err: any, data?: CreateUsagePlanKeyCommandOutput) => void
  ): Promise<CreateUsagePlanKeyCommandOutput> | void {
    const command = new CreateUsagePlanKeyCommand(args);
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
   * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
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
   * <p>Deletes the ApiKey resource.</p>
   */
  public deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiKeyCommandOutput>;
  public deleteApiKey(args: DeleteApiKeyCommandInput, cb: (err: any, data?: DeleteApiKeyCommandOutput) => void): void;
  public deleteApiKey(
    args: DeleteApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): void;
  public deleteApiKey(
    args: DeleteApiKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApiKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteApiKeyCommandOutput) => void
  ): Promise<DeleteApiKeyCommandOutput> | void {
    const command = new DeleteApiKeyCommand(args);
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
   * <p>Deletes an existing Authorizer resource.</p>
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
   * <p>Deletes the BasePathMapping resource.</p>
   */
  public deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBasePathMappingCommandOutput>;
  public deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  public deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): void;
  public deleteBasePathMapping(
    args: DeleteBasePathMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteBasePathMappingCommandOutput) => void),
    cb?: (err: any, data?: DeleteBasePathMappingCommandOutput) => void
  ): Promise<DeleteBasePathMappingCommandOutput> | void {
    const command = new DeleteBasePathMappingCommand(args);
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
   * <p>Deletes the ClientCertificate resource.</p>
   */
  public deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientCertificateCommandOutput>;
  public deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  public deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): void;
  public deleteClientCertificate(
    args: DeleteClientCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteClientCertificateCommandOutput) => void),
    cb?: (err: any, data?: DeleteClientCertificateCommandOutput) => void
  ): Promise<DeleteClientCertificateCommandOutput> | void {
    const command = new DeleteClientCertificateCommand(args);
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
   * <p>Deletes a Deployment resource. Deleting a deployment will only succeed if there are no Stage resources associated with it.</p>
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
   * <p>Deletes a documentation part</p>
   */
  public deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationPartCommandOutput>;
  public deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  public deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): void;
  public deleteDocumentationPart(
    args: DeleteDocumentationPartCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDocumentationPartCommandOutput) => void),
    cb?: (err: any, data?: DeleteDocumentationPartCommandOutput) => void
  ): Promise<DeleteDocumentationPartCommandOutput> | void {
    const command = new DeleteDocumentationPartCommand(args);
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
   * <p>Deletes a documentation version.</p>
   */
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDocumentationVersionCommandOutput>;
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): void;
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDocumentationVersionCommandOutput) => void),
    cb?: (err: any, data?: DeleteDocumentationVersionCommandOutput) => void
  ): Promise<DeleteDocumentationVersionCommandOutput> | void {
    const command = new DeleteDocumentationVersionCommand(args);
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
   * <p>Deletes the DomainName resource.</p>
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
   * <p>Clears any customization of a GatewayResponse of a specified response type on the given RestApi and resets it with the default settings.</p>
   */
  public deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayResponseCommandOutput>;
  public deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  public deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): void;
  public deleteGatewayResponse(
    args: DeleteGatewayResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGatewayResponseCommandOutput) => void),
    cb?: (err: any, data?: DeleteGatewayResponseCommandOutput) => void
  ): Promise<DeleteGatewayResponseCommandOutput> | void {
    const command = new DeleteGatewayResponseCommand(args);
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
   * <p>Represents a delete integration.</p>
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
   * <p>Represents a delete integration response.</p>
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
   * <p>Deletes an existing Method resource.</p>
   */
  public deleteMethod(
    args: DeleteMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMethodCommandOutput>;
  public deleteMethod(args: DeleteMethodCommandInput, cb: (err: any, data?: DeleteMethodCommandOutput) => void): void;
  public deleteMethod(
    args: DeleteMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodCommandOutput) => void
  ): void;
  public deleteMethod(
    args: DeleteMethodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMethodCommandOutput) => void),
    cb?: (err: any, data?: DeleteMethodCommandOutput) => void
  ): Promise<DeleteMethodCommandOutput> | void {
    const command = new DeleteMethodCommand(args);
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
   * <p>Deletes an existing MethodResponse resource.</p>
   */
  public deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMethodResponseCommandOutput>;
  public deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  public deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): void;
  public deleteMethodResponse(
    args: DeleteMethodResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMethodResponseCommandOutput) => void),
    cb?: (err: any, data?: DeleteMethodResponseCommandOutput) => void
  ): Promise<DeleteMethodResponseCommandOutput> | void {
    const command = new DeleteMethodResponseCommand(args);
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
   * <p>Deletes a model.</p>
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
   * <p>Deletes a RequestValidator of a given RestApi.</p>
   */
  public deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRequestValidatorCommandOutput>;
  public deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  public deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): void;
  public deleteRequestValidator(
    args: DeleteRequestValidatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRequestValidatorCommandOutput) => void),
    cb?: (err: any, data?: DeleteRequestValidatorCommandOutput) => void
  ): Promise<DeleteRequestValidatorCommandOutput> | void {
    const command = new DeleteRequestValidatorCommand(args);
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
   * <p>Deletes a Resource resource.</p>
   */
  public deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  public deleteResource(
    args: DeleteResourceCommandInput,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceCommandOutput) => void
  ): Promise<DeleteResourceCommandOutput> | void {
    const command = new DeleteResourceCommand(args);
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
   * <p>Deletes the specified API.</p>
   */
  public deleteRestApi(
    args: DeleteRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRestApiCommandOutput>;
  public deleteRestApi(
    args: DeleteRestApiCommandInput,
    cb: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): void;
  public deleteRestApi(
    args: DeleteRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): void;
  public deleteRestApi(
    args: DeleteRestApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRestApiCommandOutput) => void),
    cb?: (err: any, data?: DeleteRestApiCommandOutput) => void
  ): Promise<DeleteRestApiCommandOutput> | void {
    const command = new DeleteRestApiCommand(args);
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
   * <p>Deletes a Stage resource.</p>
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
   * <p>Deletes a usage plan of a given plan Id.</p>
   */
  public deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanCommandOutput>;
  public deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): void;
  public deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): void;
  public deleteUsagePlan(
    args: DeleteUsagePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUsagePlanCommandOutput) => void),
    cb?: (err: any, data?: DeleteUsagePlanCommandOutput) => void
  ): Promise<DeleteUsagePlanCommandOutput> | void {
    const command = new DeleteUsagePlanCommand(args);
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
   * <p>Deletes a usage plan key  and remove the underlying API key from the associated usage plan.</p>
   */
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteUsagePlanKeyCommandOutput>;
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): void;
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUsagePlanKeyCommandOutput) => void),
    cb?: (err: any, data?: DeleteUsagePlanKeyCommandOutput) => void
  ): Promise<DeleteUsagePlanKeyCommandOutput> | void {
    const command = new DeleteUsagePlanKeyCommand(args);
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
   * <p>Deletes an existing VpcLink of a specified identifier.</p>
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

  /**
   * <p>Flushes all authorizer cache entries on a stage.</p>
   */
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageAuthorizersCacheCommandOutput>;
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): void;
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void),
    cb?: (err: any, data?: FlushStageAuthorizersCacheCommandOutput) => void
  ): Promise<FlushStageAuthorizersCacheCommandOutput> | void {
    const command = new FlushStageAuthorizersCacheCommand(args);
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
   * <p>Flushes a stage's cache.</p>
   */
  public flushStageCache(
    args: FlushStageCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushStageCacheCommandOutput>;
  public flushStageCache(
    args: FlushStageCacheCommandInput,
    cb: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): void;
  public flushStageCache(
    args: FlushStageCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): void;
  public flushStageCache(
    args: FlushStageCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FlushStageCacheCommandOutput) => void),
    cb?: (err: any, data?: FlushStageCacheCommandOutput) => void
  ): Promise<FlushStageCacheCommandOutput> | void {
    const command = new FlushStageCacheCommand(args);
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
   * <p>Generates a ClientCertificate resource.</p>
   */
  public generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GenerateClientCertificateCommandOutput>;
  public generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  public generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): void;
  public generateClientCertificate(
    args: GenerateClientCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GenerateClientCertificateCommandOutput) => void),
    cb?: (err: any, data?: GenerateClientCertificateCommandOutput) => void
  ): Promise<GenerateClientCertificateCommandOutput> | void {
    const command = new GenerateClientCertificateCommand(args);
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
   * <p>Gets information about the current Account resource.</p>
   */
  public getAccount(args: GetAccountCommandInput, options?: __HttpHandlerOptions): Promise<GetAccountCommandOutput>;
  public getAccount(args: GetAccountCommandInput, cb: (err: any, data?: GetAccountCommandOutput) => void): void;
  public getAccount(
    args: GetAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountCommandOutput) => void
  ): void;
  public getAccount(
    args: GetAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAccountCommandOutput) => void
  ): Promise<GetAccountCommandOutput> | void {
    const command = new GetAccountCommand(args);
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
   * <p>Gets information about the current ApiKey resource.</p>
   */
  public getApiKey(args: GetApiKeyCommandInput, options?: __HttpHandlerOptions): Promise<GetApiKeyCommandOutput>;
  public getApiKey(args: GetApiKeyCommandInput, cb: (err: any, data?: GetApiKeyCommandOutput) => void): void;
  public getApiKey(
    args: GetApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeyCommandOutput) => void
  ): void;
  public getApiKey(
    args: GetApiKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiKeyCommandOutput) => void),
    cb?: (err: any, data?: GetApiKeyCommandOutput) => void
  ): Promise<GetApiKeyCommandOutput> | void {
    const command = new GetApiKeyCommand(args);
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
   * <p>Gets information about the current ApiKeys resource.</p>
   */
  public getApiKeys(args: GetApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<GetApiKeysCommandOutput>;
  public getApiKeys(args: GetApiKeysCommandInput, cb: (err: any, data?: GetApiKeysCommandOutput) => void): void;
  public getApiKeys(
    args: GetApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiKeysCommandOutput) => void
  ): void;
  public getApiKeys(
    args: GetApiKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiKeysCommandOutput) => void),
    cb?: (err: any, data?: GetApiKeysCommandOutput) => void
  ): Promise<GetApiKeysCommandOutput> | void {
    const command = new GetApiKeysCommand(args);
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
   * <p>Describe an existing Authorizer resource.</p>
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
   * <p>Describe an existing Authorizers resource.</p>
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
   * <p>Describe a BasePathMapping resource.</p>
   */
  public getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingCommandOutput>;
  public getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  public getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): void;
  public getBasePathMapping(
    args: GetBasePathMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBasePathMappingCommandOutput) => void),
    cb?: (err: any, data?: GetBasePathMappingCommandOutput) => void
  ): Promise<GetBasePathMappingCommandOutput> | void {
    const command = new GetBasePathMappingCommand(args);
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
   * <p>Represents a collection of BasePathMapping resources.</p>
   */
  public getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBasePathMappingsCommandOutput>;
  public getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  public getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): void;
  public getBasePathMappings(
    args: GetBasePathMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetBasePathMappingsCommandOutput) => void),
    cb?: (err: any, data?: GetBasePathMappingsCommandOutput) => void
  ): Promise<GetBasePathMappingsCommandOutput> | void {
    const command = new GetBasePathMappingsCommand(args);
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
   * <p>Gets information about the current ClientCertificate resource.</p>
   */
  public getClientCertificate(
    args: GetClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificateCommandOutput>;
  public getClientCertificate(
    args: GetClientCertificateCommandInput,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  public getClientCertificate(
    args: GetClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): void;
  public getClientCertificate(
    args: GetClientCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClientCertificateCommandOutput) => void),
    cb?: (err: any, data?: GetClientCertificateCommandOutput) => void
  ): Promise<GetClientCertificateCommandOutput> | void {
    const command = new GetClientCertificateCommand(args);
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
   * <p>Gets a collection of ClientCertificate resources.</p>
   */
  public getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetClientCertificatesCommandOutput>;
  public getClientCertificates(
    args: GetClientCertificatesCommandInput,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  public getClientCertificates(
    args: GetClientCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): void;
  public getClientCertificates(
    args: GetClientCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetClientCertificatesCommandOutput) => void),
    cb?: (err: any, data?: GetClientCertificatesCommandOutput) => void
  ): Promise<GetClientCertificatesCommandOutput> | void {
    const command = new GetClientCertificatesCommand(args);
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
   * <p>Gets information about a Deployment resource.</p>
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
   * <p>Gets information about a Deployments collection.</p>
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
   * <p>Gets a documentation part.</p>
   */
  public getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartCommandOutput>;
  public getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  public getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): void;
  public getDocumentationPart(
    args: GetDocumentationPartCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentationPartCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentationPartCommandOutput) => void
  ): Promise<GetDocumentationPartCommandOutput> | void {
    const command = new GetDocumentationPartCommand(args);
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
   * <p>Gets documentation parts.</p>
   */
  public getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationPartsCommandOutput>;
  public getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  public getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): void;
  public getDocumentationParts(
    args: GetDocumentationPartsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentationPartsCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentationPartsCommandOutput) => void
  ): Promise<GetDocumentationPartsCommandOutput> | void {
    const command = new GetDocumentationPartsCommand(args);
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
   * <p>Gets a documentation version.</p>
   */
  public getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionCommandOutput>;
  public getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  public getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): void;
  public getDocumentationVersion(
    args: GetDocumentationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentationVersionCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentationVersionCommandOutput) => void
  ): Promise<GetDocumentationVersionCommandOutput> | void {
    const command = new GetDocumentationVersionCommand(args);
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
   * <p>Gets documentation versions.</p>
   */
  public getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDocumentationVersionsCommandOutput>;
  public getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  public getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): void;
  public getDocumentationVersions(
    args: GetDocumentationVersionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDocumentationVersionsCommandOutput) => void),
    cb?: (err: any, data?: GetDocumentationVersionsCommandOutput) => void
  ): Promise<GetDocumentationVersionsCommandOutput> | void {
    const command = new GetDocumentationVersionsCommand(args);
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
   * <p>Represents a domain name that is contained in a simpler, more intuitive URL that can be called.</p>
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
   * <p>Represents a collection of DomainName resources.</p>
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
   * <p>Exports a deployed version of a RestApi in a specified format.</p>
   */
  public getExport(args: GetExportCommandInput, options?: __HttpHandlerOptions): Promise<GetExportCommandOutput>;
  public getExport(args: GetExportCommandInput, cb: (err: any, data?: GetExportCommandOutput) => void): void;
  public getExport(
    args: GetExportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExportCommandOutput) => void
  ): void;
  public getExport(
    args: GetExportCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExportCommandOutput) => void),
    cb?: (err: any, data?: GetExportCommandOutput) => void
  ): Promise<GetExportCommandOutput> | void {
    const command = new GetExportCommand(args);
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
   * <p>Gets a GatewayResponse of a specified response type on the given RestApi.</p>
   */
  public getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponseCommandOutput>;
  public getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  public getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): void;
  public getGatewayResponse(
    args: GetGatewayResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGatewayResponseCommandOutput) => void),
    cb?: (err: any, data?: GetGatewayResponseCommandOutput) => void
  ): Promise<GetGatewayResponseCommandOutput> | void {
    const command = new GetGatewayResponseCommand(args);
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
   * <p>Gets the GatewayResponses collection on the given RestApi. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default GatewayResponses collection for the supported response types.</p>
   */
  public getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGatewayResponsesCommandOutput>;
  public getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  public getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): void;
  public getGatewayResponses(
    args: GetGatewayResponsesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGatewayResponsesCommandOutput) => void),
    cb?: (err: any, data?: GetGatewayResponsesCommandOutput) => void
  ): Promise<GetGatewayResponsesCommandOutput> | void {
    const command = new GetGatewayResponsesCommand(args);
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
   * <p>Get the integration settings.</p>
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
   * <p>Represents a get integration response.</p>
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
   * <p>Describe an existing Method resource.</p>
   */
  public getMethod(args: GetMethodCommandInput, options?: __HttpHandlerOptions): Promise<GetMethodCommandOutput>;
  public getMethod(args: GetMethodCommandInput, cb: (err: any, data?: GetMethodCommandOutput) => void): void;
  public getMethod(
    args: GetMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodCommandOutput) => void
  ): void;
  public getMethod(
    args: GetMethodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMethodCommandOutput) => void),
    cb?: (err: any, data?: GetMethodCommandOutput) => void
  ): Promise<GetMethodCommandOutput> | void {
    const command = new GetMethodCommand(args);
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
   * <p>Describes a MethodResponse resource.</p>
   */
  public getMethodResponse(
    args: GetMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMethodResponseCommandOutput>;
  public getMethodResponse(
    args: GetMethodResponseCommandInput,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  public getMethodResponse(
    args: GetMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): void;
  public getMethodResponse(
    args: GetMethodResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMethodResponseCommandOutput) => void),
    cb?: (err: any, data?: GetMethodResponseCommandOutput) => void
  ): Promise<GetMethodResponseCommandOutput> | void {
    const command = new GetMethodResponseCommand(args);
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
   * <p>Describes an existing model defined for a RestApi resource.</p>
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
   * <p>Describes existing Models defined for a RestApi resource.</p>
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
   * <p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>
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
   * <p>Gets a RequestValidator of a given RestApi.</p>
   */
  public getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorCommandOutput>;
  public getRequestValidator(
    args: GetRequestValidatorCommandInput,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  public getRequestValidator(
    args: GetRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): void;
  public getRequestValidator(
    args: GetRequestValidatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRequestValidatorCommandOutput) => void),
    cb?: (err: any, data?: GetRequestValidatorCommandOutput) => void
  ): Promise<GetRequestValidatorCommandOutput> | void {
    const command = new GetRequestValidatorCommand(args);
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
   * <p>Gets the RequestValidators collection of a given RestApi.</p>
   */
  public getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRequestValidatorsCommandOutput>;
  public getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  public getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): void;
  public getRequestValidators(
    args: GetRequestValidatorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRequestValidatorsCommandOutput) => void),
    cb?: (err: any, data?: GetRequestValidatorsCommandOutput) => void
  ): Promise<GetRequestValidatorsCommandOutput> | void {
    const command = new GetRequestValidatorsCommand(args);
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
   * <p>Lists information about a resource.</p>
   */
  public getResource(args: GetResourceCommandInput, options?: __HttpHandlerOptions): Promise<GetResourceCommandOutput>;
  public getResource(args: GetResourceCommandInput, cb: (err: any, data?: GetResourceCommandOutput) => void): void;
  public getResource(
    args: GetResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceCommandOutput) => void
  ): void;
  public getResource(
    args: GetResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceCommandOutput) => void),
    cb?: (err: any, data?: GetResourceCommandOutput) => void
  ): Promise<GetResourceCommandOutput> | void {
    const command = new GetResourceCommand(args);
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
   * <p>Lists information about a collection of Resource resources.</p>
   */
  public getResources(
    args: GetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcesCommandOutput>;
  public getResources(args: GetResourcesCommandInput, cb: (err: any, data?: GetResourcesCommandOutput) => void): void;
  public getResources(
    args: GetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcesCommandOutput) => void
  ): void;
  public getResources(
    args: GetResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcesCommandOutput) => void
  ): Promise<GetResourcesCommandOutput> | void {
    const command = new GetResourcesCommand(args);
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
   * <p>Lists the RestApi resource in the collection.</p>
   */
  public getRestApi(args: GetRestApiCommandInput, options?: __HttpHandlerOptions): Promise<GetRestApiCommandOutput>;
  public getRestApi(args: GetRestApiCommandInput, cb: (err: any, data?: GetRestApiCommandOutput) => void): void;
  public getRestApi(
    args: GetRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApiCommandOutput) => void
  ): void;
  public getRestApi(
    args: GetRestApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRestApiCommandOutput) => void),
    cb?: (err: any, data?: GetRestApiCommandOutput) => void
  ): Promise<GetRestApiCommandOutput> | void {
    const command = new GetRestApiCommand(args);
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
   * <p>Lists the RestApis resources for your collection.</p>
   */
  public getRestApis(args: GetRestApisCommandInput, options?: __HttpHandlerOptions): Promise<GetRestApisCommandOutput>;
  public getRestApis(args: GetRestApisCommandInput, cb: (err: any, data?: GetRestApisCommandOutput) => void): void;
  public getRestApis(
    args: GetRestApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestApisCommandOutput) => void
  ): void;
  public getRestApis(
    args: GetRestApisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRestApisCommandOutput) => void),
    cb?: (err: any, data?: GetRestApisCommandOutput) => void
  ): Promise<GetRestApisCommandOutput> | void {
    const command = new GetRestApisCommand(args);
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
   * <p>Generates a client SDK for a RestApi and Stage.</p>
   */
  public getSdk(args: GetSdkCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkCommandOutput>;
  public getSdk(args: GetSdkCommandInput, cb: (err: any, data?: GetSdkCommandOutput) => void): void;
  public getSdk(
    args: GetSdkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkCommandOutput) => void
  ): void;
  public getSdk(
    args: GetSdkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSdkCommandOutput) => void),
    cb?: (err: any, data?: GetSdkCommandOutput) => void
  ): Promise<GetSdkCommandOutput> | void {
    const command = new GetSdkCommand(args);
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
   * <p>Gets an SDK type.</p>
   */
  public getSdkType(args: GetSdkTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkTypeCommandOutput>;
  public getSdkType(args: GetSdkTypeCommandInput, cb: (err: any, data?: GetSdkTypeCommandOutput) => void): void;
  public getSdkType(
    args: GetSdkTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypeCommandOutput) => void
  ): void;
  public getSdkType(
    args: GetSdkTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSdkTypeCommandOutput) => void),
    cb?: (err: any, data?: GetSdkTypeCommandOutput) => void
  ): Promise<GetSdkTypeCommandOutput> | void {
    const command = new GetSdkTypeCommand(args);
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
   * <p>Gets SDK types</p>
   */
  public getSdkTypes(args: GetSdkTypesCommandInput, options?: __HttpHandlerOptions): Promise<GetSdkTypesCommandOutput>;
  public getSdkTypes(args: GetSdkTypesCommandInput, cb: (err: any, data?: GetSdkTypesCommandOutput) => void): void;
  public getSdkTypes(
    args: GetSdkTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSdkTypesCommandOutput) => void
  ): void;
  public getSdkTypes(
    args: GetSdkTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSdkTypesCommandOutput) => void),
    cb?: (err: any, data?: GetSdkTypesCommandOutput) => void
  ): Promise<GetSdkTypesCommandOutput> | void {
    const command = new GetSdkTypesCommand(args);
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
   * <p>Gets information about a Stage resource.</p>
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
   * <p>Gets information about one or more Stage resources.</p>
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
   * <p>Gets the Tags collection for a given resource.</p>
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
   * <p>Gets the usage data of a usage plan in a specified time interval.</p>
   */
  public getUsage(args: GetUsageCommandInput, options?: __HttpHandlerOptions): Promise<GetUsageCommandOutput>;
  public getUsage(args: GetUsageCommandInput, cb: (err: any, data?: GetUsageCommandOutput) => void): void;
  public getUsage(
    args: GetUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsageCommandOutput) => void
  ): void;
  public getUsage(
    args: GetUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsageCommandOutput) => void),
    cb?: (err: any, data?: GetUsageCommandOutput) => void
  ): Promise<GetUsageCommandOutput> | void {
    const command = new GetUsageCommand(args);
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
   * <p>Gets a usage plan of a given plan identifier.</p>
   */
  public getUsagePlan(
    args: GetUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanCommandOutput>;
  public getUsagePlan(args: GetUsagePlanCommandInput, cb: (err: any, data?: GetUsagePlanCommandOutput) => void): void;
  public getUsagePlan(
    args: GetUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanCommandOutput) => void
  ): void;
  public getUsagePlan(
    args: GetUsagePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsagePlanCommandOutput) => void),
    cb?: (err: any, data?: GetUsagePlanCommandOutput) => void
  ): Promise<GetUsagePlanCommandOutput> | void {
    const command = new GetUsagePlanCommand(args);
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
   * <p>Gets a usage plan key of a given key identifier.</p>
   */
  public getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeyCommandOutput>;
  public getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): void;
  public getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): void;
  public getUsagePlanKey(
    args: GetUsagePlanKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsagePlanKeyCommandOutput) => void),
    cb?: (err: any, data?: GetUsagePlanKeyCommandOutput) => void
  ): Promise<GetUsagePlanKeyCommandOutput> | void {
    const command = new GetUsagePlanKeyCommand(args);
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
   * <p>Gets all the usage plan keys representing the API keys added to a specified usage plan.</p>
   */
  public getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlanKeysCommandOutput>;
  public getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  public getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): void;
  public getUsagePlanKeys(
    args: GetUsagePlanKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsagePlanKeysCommandOutput) => void),
    cb?: (err: any, data?: GetUsagePlanKeysCommandOutput) => void
  ): Promise<GetUsagePlanKeysCommandOutput> | void {
    const command = new GetUsagePlanKeysCommand(args);
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
   * <p>Gets all the usage plans of the caller's account.</p>
   */
  public getUsagePlans(
    args: GetUsagePlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetUsagePlansCommandOutput>;
  public getUsagePlans(
    args: GetUsagePlansCommandInput,
    cb: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): void;
  public getUsagePlans(
    args: GetUsagePlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): void;
  public getUsagePlans(
    args: GetUsagePlansCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetUsagePlansCommandOutput) => void),
    cb?: (err: any, data?: GetUsagePlansCommandOutput) => void
  ): Promise<GetUsagePlansCommandOutput> | void {
    const command = new GetUsagePlansCommand(args);
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
   * <p>Gets a specified VPC link under the caller's account in a region.</p>
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
   * <p>Gets the VpcLinks collection under the caller's account in a selected region.</p>
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
   * <p>Import API keys from an external source, such as a CSV-formatted file.</p>
   */
  public importApiKeys(
    args: ImportApiKeysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportApiKeysCommandOutput>;
  public importApiKeys(
    args: ImportApiKeysCommandInput,
    cb: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): void;
  public importApiKeys(
    args: ImportApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): void;
  public importApiKeys(
    args: ImportApiKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportApiKeysCommandOutput) => void),
    cb?: (err: any, data?: ImportApiKeysCommandOutput) => void
  ): Promise<ImportApiKeysCommandOutput> | void {
    const command = new ImportApiKeysCommand(args);
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
   * <p>Imports documentation parts</p>
   */
  public importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportDocumentationPartsCommandOutput>;
  public importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  public importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): void;
  public importDocumentationParts(
    args: ImportDocumentationPartsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportDocumentationPartsCommandOutput) => void),
    cb?: (err: any, data?: ImportDocumentationPartsCommandOutput) => void
  ): Promise<ImportDocumentationPartsCommandOutput> | void {
    const command = new ImportDocumentationPartsCommand(args);
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
   * <p>A feature of the API Gateway control service for creating a new API from an external API definition file.</p>
   */
  public importRestApi(
    args: ImportRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportRestApiCommandOutput>;
  public importRestApi(
    args: ImportRestApiCommandInput,
    cb: (err: any, data?: ImportRestApiCommandOutput) => void
  ): void;
  public importRestApi(
    args: ImportRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportRestApiCommandOutput) => void
  ): void;
  public importRestApi(
    args: ImportRestApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ImportRestApiCommandOutput) => void),
    cb?: (err: any, data?: ImportRestApiCommandOutput) => void
  ): Promise<ImportRestApiCommandOutput> | void {
    const command = new ImportRestApiCommand(args);
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
   * <p>Creates a customization of a GatewayResponse of a specified response type and status code on the given RestApi.</p>
   */
  public putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutGatewayResponseCommandOutput>;
  public putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  public putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): void;
  public putGatewayResponse(
    args: PutGatewayResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutGatewayResponseCommandOutput) => void),
    cb?: (err: any, data?: PutGatewayResponseCommandOutput) => void
  ): Promise<PutGatewayResponseCommandOutput> | void {
    const command = new PutGatewayResponseCommand(args);
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
   * <p>Sets up a method's integration.</p>
   */
  public putIntegration(
    args: PutIntegrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationCommandOutput>;
  public putIntegration(
    args: PutIntegrationCommandInput,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  public putIntegration(
    args: PutIntegrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationCommandOutput) => void
  ): void;
  public putIntegration(
    args: PutIntegrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutIntegrationCommandOutput) => void),
    cb?: (err: any, data?: PutIntegrationCommandOutput) => void
  ): Promise<PutIntegrationCommandOutput> | void {
    const command = new PutIntegrationCommand(args);
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
   * <p>Represents a put integration.</p>
   */
  public putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutIntegrationResponseCommandOutput>;
  public putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  public putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): void;
  public putIntegrationResponse(
    args: PutIntegrationResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutIntegrationResponseCommandOutput) => void),
    cb?: (err: any, data?: PutIntegrationResponseCommandOutput) => void
  ): Promise<PutIntegrationResponseCommandOutput> | void {
    const command = new PutIntegrationResponseCommand(args);
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
   * <p>Add a method to an existing Resource resource.</p>
   */
  public putMethod(args: PutMethodCommandInput, options?: __HttpHandlerOptions): Promise<PutMethodCommandOutput>;
  public putMethod(args: PutMethodCommandInput, cb: (err: any, data?: PutMethodCommandOutput) => void): void;
  public putMethod(
    args: PutMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodCommandOutput) => void
  ): void;
  public putMethod(
    args: PutMethodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMethodCommandOutput) => void),
    cb?: (err: any, data?: PutMethodCommandOutput) => void
  ): Promise<PutMethodCommandOutput> | void {
    const command = new PutMethodCommand(args);
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
   * <p>Adds a MethodResponse to an existing Method resource.</p>
   */
  public putMethodResponse(
    args: PutMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMethodResponseCommandOutput>;
  public putMethodResponse(
    args: PutMethodResponseCommandInput,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  public putMethodResponse(
    args: PutMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): void;
  public putMethodResponse(
    args: PutMethodResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMethodResponseCommandOutput) => void),
    cb?: (err: any, data?: PutMethodResponseCommandOutput) => void
  ): Promise<PutMethodResponseCommandOutput> | void {
    const command = new PutMethodResponseCommand(args);
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
   * <p>A feature of the API Gateway control service for updating an existing API with an input of external API definitions.
   *             The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</p>
   */
  public putRestApi(args: PutRestApiCommandInput, options?: __HttpHandlerOptions): Promise<PutRestApiCommandOutput>;
  public putRestApi(args: PutRestApiCommandInput, cb: (err: any, data?: PutRestApiCommandOutput) => void): void;
  public putRestApi(
    args: PutRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRestApiCommandOutput) => void
  ): void;
  public putRestApi(
    args: PutRestApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRestApiCommandOutput) => void),
    cb?: (err: any, data?: PutRestApiCommandOutput) => void
  ): Promise<PutRestApiCommandOutput> | void {
    const command = new PutRestApiCommand(args);
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
   * <p>Adds or updates a tag on a given resource.</p>
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
   * <p>Simulate the execution of an Authorizer in your RestApi with headers, parameters, and an incoming request body.</p>
   */
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeAuthorizerCommandOutput>;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): void;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestInvokeAuthorizerCommandOutput) => void),
    cb?: (err: any, data?: TestInvokeAuthorizerCommandOutput) => void
  ): Promise<TestInvokeAuthorizerCommandOutput> | void {
    const command = new TestInvokeAuthorizerCommand(args);
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
   * <p>Simulate the invocation of a Method in your RestApi with headers, parameters, and an incoming request body.</p>
   */
  public testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TestInvokeMethodCommandOutput>;
  public testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  public testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): void;
  public testInvokeMethod(
    args: TestInvokeMethodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TestInvokeMethodCommandOutput) => void),
    cb?: (err: any, data?: TestInvokeMethodCommandOutput) => void
  ): Promise<TestInvokeMethodCommandOutput> | void {
    const command = new TestInvokeMethodCommand(args);
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
   * <p>Removes a tag from a given resource.</p>
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
   * <p>Changes information about the current Account resource.</p>
   */
  public updateAccount(
    args: UpdateAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccountCommandOutput>;
  public updateAccount(
    args: UpdateAccountCommandInput,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  public updateAccount(
    args: UpdateAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccountCommandOutput) => void
  ): void;
  public updateAccount(
    args: UpdateAccountCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccountCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccountCommandOutput) => void
  ): Promise<UpdateAccountCommandOutput> | void {
    const command = new UpdateAccountCommand(args);
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
   * <p>Changes information about an ApiKey resource.</p>
   */
  public updateApiKey(
    args: UpdateApiKeyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiKeyCommandOutput>;
  public updateApiKey(args: UpdateApiKeyCommandInput, cb: (err: any, data?: UpdateApiKeyCommandOutput) => void): void;
  public updateApiKey(
    args: UpdateApiKeyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): void;
  public updateApiKey(
    args: UpdateApiKeyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApiKeyCommandOutput) => void),
    cb?: (err: any, data?: UpdateApiKeyCommandOutput) => void
  ): Promise<UpdateApiKeyCommandOutput> | void {
    const command = new UpdateApiKeyCommand(args);
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
   * <p>Updates an existing Authorizer resource.</p>
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
   * <p>Changes information about the BasePathMapping resource.</p>
   */
  public updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBasePathMappingCommandOutput>;
  public updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  public updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): void;
  public updateBasePathMapping(
    args: UpdateBasePathMappingCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateBasePathMappingCommandOutput) => void),
    cb?: (err: any, data?: UpdateBasePathMappingCommandOutput) => void
  ): Promise<UpdateBasePathMappingCommandOutput> | void {
    const command = new UpdateBasePathMappingCommand(args);
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
   * <p>Changes information about an ClientCertificate resource.</p>
   */
  public updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateClientCertificateCommandOutput>;
  public updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  public updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): void;
  public updateClientCertificate(
    args: UpdateClientCertificateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateClientCertificateCommandOutput) => void),
    cb?: (err: any, data?: UpdateClientCertificateCommandOutput) => void
  ): Promise<UpdateClientCertificateCommandOutput> | void {
    const command = new UpdateClientCertificateCommand(args);
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
   * <p>Changes information about a Deployment resource.</p>
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
   * <p>Updates a documentation part.</p>
   */
  public updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationPartCommandOutput>;
  public updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  public updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): void;
  public updateDocumentationPart(
    args: UpdateDocumentationPartCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDocumentationPartCommandOutput) => void),
    cb?: (err: any, data?: UpdateDocumentationPartCommandOutput) => void
  ): Promise<UpdateDocumentationPartCommandOutput> | void {
    const command = new UpdateDocumentationPartCommand(args);
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
   * <p>Updates a documentation version.</p>
   */
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDocumentationVersionCommandOutput>;
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): void;
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDocumentationVersionCommandOutput) => void),
    cb?: (err: any, data?: UpdateDocumentationVersionCommandOutput) => void
  ): Promise<UpdateDocumentationVersionCommandOutput> | void {
    const command = new UpdateDocumentationVersionCommand(args);
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
   * <p>Changes information about the DomainName resource.</p>
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
   * <p>Updates a GatewayResponse of a specified response type on the given RestApi.</p>
   */
  public updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayResponseCommandOutput>;
  public updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  public updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): void;
  public updateGatewayResponse(
    args: UpdateGatewayResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGatewayResponseCommandOutput) => void),
    cb?: (err: any, data?: UpdateGatewayResponseCommandOutput) => void
  ): Promise<UpdateGatewayResponseCommandOutput> | void {
    const command = new UpdateGatewayResponseCommand(args);
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
   * <p>Represents an update integration.</p>
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
   * <p>Represents an update integration response.</p>
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
   * <p>Updates an existing Method resource.</p>
   */
  public updateMethod(
    args: UpdateMethodCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMethodCommandOutput>;
  public updateMethod(args: UpdateMethodCommandInput, cb: (err: any, data?: UpdateMethodCommandOutput) => void): void;
  public updateMethod(
    args: UpdateMethodCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodCommandOutput) => void
  ): void;
  public updateMethod(
    args: UpdateMethodCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMethodCommandOutput) => void),
    cb?: (err: any, data?: UpdateMethodCommandOutput) => void
  ): Promise<UpdateMethodCommandOutput> | void {
    const command = new UpdateMethodCommand(args);
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
   * <p>Updates an existing MethodResponse resource.</p>
   */
  public updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMethodResponseCommandOutput>;
  public updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  public updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): void;
  public updateMethodResponse(
    args: UpdateMethodResponseCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMethodResponseCommandOutput) => void),
    cb?: (err: any, data?: UpdateMethodResponseCommandOutput) => void
  ): Promise<UpdateMethodResponseCommandOutput> | void {
    const command = new UpdateMethodResponseCommand(args);
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
   * <p>Changes information about a model.</p>
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
   * <p>Updates a RequestValidator of a given RestApi.</p>
   */
  public updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRequestValidatorCommandOutput>;
  public updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  public updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): void;
  public updateRequestValidator(
    args: UpdateRequestValidatorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRequestValidatorCommandOutput) => void),
    cb?: (err: any, data?: UpdateRequestValidatorCommandOutput) => void
  ): Promise<UpdateRequestValidatorCommandOutput> | void {
    const command = new UpdateRequestValidatorCommand(args);
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
   * <p>Changes information about a Resource resource.</p>
   */
  public updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  public updateResource(
    args: UpdateResourceCommandInput,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceCommandOutput) => void
  ): Promise<UpdateResourceCommandOutput> | void {
    const command = new UpdateResourceCommand(args);
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
   * <p>Changes information about the specified API.</p>
   */
  public updateRestApi(
    args: UpdateRestApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRestApiCommandOutput>;
  public updateRestApi(
    args: UpdateRestApiCommandInput,
    cb: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): void;
  public updateRestApi(
    args: UpdateRestApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): void;
  public updateRestApi(
    args: UpdateRestApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRestApiCommandOutput) => void),
    cb?: (err: any, data?: UpdateRestApiCommandOutput) => void
  ): Promise<UpdateRestApiCommandOutput> | void {
    const command = new UpdateRestApiCommand(args);
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
   * <p>Changes information about a Stage resource.</p>
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
   * <p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
   */
  public updateUsage(args: UpdateUsageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUsageCommandOutput>;
  public updateUsage(args: UpdateUsageCommandInput, cb: (err: any, data?: UpdateUsageCommandOutput) => void): void;
  public updateUsage(
    args: UpdateUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsageCommandOutput) => void
  ): void;
  public updateUsage(
    args: UpdateUsageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUsageCommandOutput) => void),
    cb?: (err: any, data?: UpdateUsageCommandOutput) => void
  ): Promise<UpdateUsageCommandOutput> | void {
    const command = new UpdateUsageCommand(args);
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
   * <p>Updates a usage plan of a given plan Id.</p>
   */
  public updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateUsagePlanCommandOutput>;
  public updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): void;
  public updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): void;
  public updateUsagePlan(
    args: UpdateUsagePlanCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateUsagePlanCommandOutput) => void),
    cb?: (err: any, data?: UpdateUsagePlanCommandOutput) => void
  ): Promise<UpdateUsagePlanCommandOutput> | void {
    const command = new UpdateUsagePlanCommand(args);
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
   * <p>Updates an existing VpcLink of a specified identifier.</p>
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
