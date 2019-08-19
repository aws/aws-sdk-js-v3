import { APIGatewayClient } from "./APIGatewayClient";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateApiKeyInput } from "./types/CreateApiKeyInput";
import { CreateApiKeyOutput } from "./types/CreateApiKeyOutput";
import { CreateAuthorizerInput } from "./types/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "./types/CreateAuthorizerOutput";
import { CreateBasePathMappingInput } from "./types/CreateBasePathMappingInput";
import { CreateBasePathMappingOutput } from "./types/CreateBasePathMappingOutput";
import { CreateDeploymentInput } from "./types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "./types/CreateDeploymentOutput";
import { CreateDocumentationPartInput } from "./types/CreateDocumentationPartInput";
import { CreateDocumentationPartOutput } from "./types/CreateDocumentationPartOutput";
import { CreateDocumentationVersionInput } from "./types/CreateDocumentationVersionInput";
import { CreateDocumentationVersionOutput } from "./types/CreateDocumentationVersionOutput";
import { CreateDomainNameInput } from "./types/CreateDomainNameInput";
import { CreateDomainNameOutput } from "./types/CreateDomainNameOutput";
import { CreateModelInput } from "./types/CreateModelInput";
import { CreateModelOutput } from "./types/CreateModelOutput";
import { CreateRequestValidatorInput } from "./types/CreateRequestValidatorInput";
import { CreateRequestValidatorOutput } from "./types/CreateRequestValidatorOutput";
import { CreateResourceInput } from "./types/CreateResourceInput";
import { CreateResourceOutput } from "./types/CreateResourceOutput";
import { CreateRestApiInput } from "./types/CreateRestApiInput";
import { CreateRestApiOutput } from "./types/CreateRestApiOutput";
import { CreateStageInput } from "./types/CreateStageInput";
import { CreateStageOutput } from "./types/CreateStageOutput";
import { CreateUsagePlanInput } from "./types/CreateUsagePlanInput";
import { CreateUsagePlanKeyInput } from "./types/CreateUsagePlanKeyInput";
import { CreateUsagePlanKeyOutput } from "./types/CreateUsagePlanKeyOutput";
import { CreateUsagePlanOutput } from "./types/CreateUsagePlanOutput";
import { CreateVpcLinkInput } from "./types/CreateVpcLinkInput";
import { CreateVpcLinkOutput } from "./types/CreateVpcLinkOutput";
import { DeleteApiKeyInput } from "./types/DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "./types/DeleteApiKeyOutput";
import { DeleteAuthorizerInput } from "./types/DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "./types/DeleteAuthorizerOutput";
import { DeleteBasePathMappingInput } from "./types/DeleteBasePathMappingInput";
import { DeleteBasePathMappingOutput } from "./types/DeleteBasePathMappingOutput";
import { DeleteClientCertificateInput } from "./types/DeleteClientCertificateInput";
import { DeleteClientCertificateOutput } from "./types/DeleteClientCertificateOutput";
import { DeleteDeploymentInput } from "./types/DeleteDeploymentInput";
import { DeleteDeploymentOutput } from "./types/DeleteDeploymentOutput";
import { DeleteDocumentationPartInput } from "./types/DeleteDocumentationPartInput";
import { DeleteDocumentationPartOutput } from "./types/DeleteDocumentationPartOutput";
import { DeleteDocumentationVersionInput } from "./types/DeleteDocumentationVersionInput";
import { DeleteDocumentationVersionOutput } from "./types/DeleteDocumentationVersionOutput";
import { DeleteDomainNameInput } from "./types/DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "./types/DeleteDomainNameOutput";
import { DeleteGatewayResponseInput } from "./types/DeleteGatewayResponseInput";
import { DeleteGatewayResponseOutput } from "./types/DeleteGatewayResponseOutput";
import { DeleteIntegrationInput } from "./types/DeleteIntegrationInput";
import { DeleteIntegrationOutput } from "./types/DeleteIntegrationOutput";
import { DeleteIntegrationResponseInput } from "./types/DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "./types/DeleteIntegrationResponseOutput";
import { DeleteMethodInput } from "./types/DeleteMethodInput";
import { DeleteMethodOutput } from "./types/DeleteMethodOutput";
import { DeleteMethodResponseInput } from "./types/DeleteMethodResponseInput";
import { DeleteMethodResponseOutput } from "./types/DeleteMethodResponseOutput";
import { DeleteModelInput } from "./types/DeleteModelInput";
import { DeleteModelOutput } from "./types/DeleteModelOutput";
import { DeleteRequestValidatorInput } from "./types/DeleteRequestValidatorInput";
import { DeleteRequestValidatorOutput } from "./types/DeleteRequestValidatorOutput";
import { DeleteResourceInput } from "./types/DeleteResourceInput";
import { DeleteResourceOutput } from "./types/DeleteResourceOutput";
import { DeleteRestApiInput } from "./types/DeleteRestApiInput";
import { DeleteRestApiOutput } from "./types/DeleteRestApiOutput";
import { DeleteStageInput } from "./types/DeleteStageInput";
import { DeleteStageOutput } from "./types/DeleteStageOutput";
import { DeleteUsagePlanInput } from "./types/DeleteUsagePlanInput";
import { DeleteUsagePlanKeyInput } from "./types/DeleteUsagePlanKeyInput";
import { DeleteUsagePlanKeyOutput } from "./types/DeleteUsagePlanKeyOutput";
import { DeleteUsagePlanOutput } from "./types/DeleteUsagePlanOutput";
import { DeleteVpcLinkInput } from "./types/DeleteVpcLinkInput";
import { DeleteVpcLinkOutput } from "./types/DeleteVpcLinkOutput";
import { FlushStageAuthorizersCacheInput } from "./types/FlushStageAuthorizersCacheInput";
import { FlushStageAuthorizersCacheOutput } from "./types/FlushStageAuthorizersCacheOutput";
import { FlushStageCacheInput } from "./types/FlushStageCacheInput";
import { FlushStageCacheOutput } from "./types/FlushStageCacheOutput";
import { GenerateClientCertificateInput } from "./types/GenerateClientCertificateInput";
import { GenerateClientCertificateOutput } from "./types/GenerateClientCertificateOutput";
import { GetAccountInput } from "./types/GetAccountInput";
import { GetAccountOutput } from "./types/GetAccountOutput";
import { GetApiKeyInput } from "./types/GetApiKeyInput";
import { GetApiKeyOutput } from "./types/GetApiKeyOutput";
import { GetApiKeysInput } from "./types/GetApiKeysInput";
import { GetApiKeysOutput } from "./types/GetApiKeysOutput";
import { GetAuthorizerInput } from "./types/GetAuthorizerInput";
import { GetAuthorizerOutput } from "./types/GetAuthorizerOutput";
import { GetAuthorizersInput } from "./types/GetAuthorizersInput";
import { GetAuthorizersOutput } from "./types/GetAuthorizersOutput";
import { GetBasePathMappingInput } from "./types/GetBasePathMappingInput";
import { GetBasePathMappingOutput } from "./types/GetBasePathMappingOutput";
import { GetBasePathMappingsInput } from "./types/GetBasePathMappingsInput";
import { GetBasePathMappingsOutput } from "./types/GetBasePathMappingsOutput";
import { GetClientCertificateInput } from "./types/GetClientCertificateInput";
import { GetClientCertificateOutput } from "./types/GetClientCertificateOutput";
import { GetClientCertificatesInput } from "./types/GetClientCertificatesInput";
import { GetClientCertificatesOutput } from "./types/GetClientCertificatesOutput";
import { GetDeploymentInput } from "./types/GetDeploymentInput";
import { GetDeploymentOutput } from "./types/GetDeploymentOutput";
import { GetDeploymentsInput } from "./types/GetDeploymentsInput";
import { GetDeploymentsOutput } from "./types/GetDeploymentsOutput";
import { GetDocumentationPartInput } from "./types/GetDocumentationPartInput";
import { GetDocumentationPartOutput } from "./types/GetDocumentationPartOutput";
import { GetDocumentationPartsInput } from "./types/GetDocumentationPartsInput";
import { GetDocumentationPartsOutput } from "./types/GetDocumentationPartsOutput";
import { GetDocumentationVersionInput } from "./types/GetDocumentationVersionInput";
import { GetDocumentationVersionOutput } from "./types/GetDocumentationVersionOutput";
import { GetDocumentationVersionsInput } from "./types/GetDocumentationVersionsInput";
import { GetDocumentationVersionsOutput } from "./types/GetDocumentationVersionsOutput";
import { GetDomainNameInput } from "./types/GetDomainNameInput";
import { GetDomainNameOutput } from "./types/GetDomainNameOutput";
import { GetDomainNamesInput } from "./types/GetDomainNamesInput";
import { GetDomainNamesOutput } from "./types/GetDomainNamesOutput";
import { GetExportInput } from "./types/GetExportInput";
import { GetExportOutput } from "./types/GetExportOutput";
import { GetGatewayResponseInput } from "./types/GetGatewayResponseInput";
import { GetGatewayResponseOutput } from "./types/GetGatewayResponseOutput";
import { GetGatewayResponsesInput } from "./types/GetGatewayResponsesInput";
import { GetGatewayResponsesOutput } from "./types/GetGatewayResponsesOutput";
import { GetIntegrationInput } from "./types/GetIntegrationInput";
import { GetIntegrationOutput } from "./types/GetIntegrationOutput";
import { GetIntegrationResponseInput } from "./types/GetIntegrationResponseInput";
import { GetIntegrationResponseOutput } from "./types/GetIntegrationResponseOutput";
import { GetMethodInput } from "./types/GetMethodInput";
import { GetMethodOutput } from "./types/GetMethodOutput";
import { GetMethodResponseInput } from "./types/GetMethodResponseInput";
import { GetMethodResponseOutput } from "./types/GetMethodResponseOutput";
import { GetModelInput } from "./types/GetModelInput";
import { GetModelOutput } from "./types/GetModelOutput";
import { GetModelTemplateInput } from "./types/GetModelTemplateInput";
import { GetModelTemplateOutput } from "./types/GetModelTemplateOutput";
import { GetModelsInput } from "./types/GetModelsInput";
import { GetModelsOutput } from "./types/GetModelsOutput";
import { GetRequestValidatorInput } from "./types/GetRequestValidatorInput";
import { GetRequestValidatorOutput } from "./types/GetRequestValidatorOutput";
import { GetRequestValidatorsInput } from "./types/GetRequestValidatorsInput";
import { GetRequestValidatorsOutput } from "./types/GetRequestValidatorsOutput";
import { GetResourceInput } from "./types/GetResourceInput";
import { GetResourceOutput } from "./types/GetResourceOutput";
import { GetResourcesInput } from "./types/GetResourcesInput";
import { GetResourcesOutput } from "./types/GetResourcesOutput";
import { GetRestApiInput } from "./types/GetRestApiInput";
import { GetRestApiOutput } from "./types/GetRestApiOutput";
import { GetRestApisInput } from "./types/GetRestApisInput";
import { GetRestApisOutput } from "./types/GetRestApisOutput";
import { GetSdkInput } from "./types/GetSdkInput";
import { GetSdkOutput } from "./types/GetSdkOutput";
import { GetSdkTypeInput } from "./types/GetSdkTypeInput";
import { GetSdkTypeOutput } from "./types/GetSdkTypeOutput";
import { GetSdkTypesInput } from "./types/GetSdkTypesInput";
import { GetSdkTypesOutput } from "./types/GetSdkTypesOutput";
import { GetStageInput } from "./types/GetStageInput";
import { GetStageOutput } from "./types/GetStageOutput";
import { GetStagesInput } from "./types/GetStagesInput";
import { GetStagesOutput } from "./types/GetStagesOutput";
import { GetTagsInput } from "./types/GetTagsInput";
import { GetTagsOutput } from "./types/GetTagsOutput";
import { GetUsageInput } from "./types/GetUsageInput";
import { GetUsageOutput } from "./types/GetUsageOutput";
import { GetUsagePlanInput } from "./types/GetUsagePlanInput";
import { GetUsagePlanKeyInput } from "./types/GetUsagePlanKeyInput";
import { GetUsagePlanKeyOutput } from "./types/GetUsagePlanKeyOutput";
import { GetUsagePlanKeysInput } from "./types/GetUsagePlanKeysInput";
import { GetUsagePlanKeysOutput } from "./types/GetUsagePlanKeysOutput";
import { GetUsagePlanOutput } from "./types/GetUsagePlanOutput";
import { GetUsagePlansInput } from "./types/GetUsagePlansInput";
import { GetUsagePlansOutput } from "./types/GetUsagePlansOutput";
import { GetVpcLinkInput } from "./types/GetVpcLinkInput";
import { GetVpcLinkOutput } from "./types/GetVpcLinkOutput";
import { GetVpcLinksInput } from "./types/GetVpcLinksInput";
import { GetVpcLinksOutput } from "./types/GetVpcLinksOutput";
import { ImportApiKeysInput } from "./types/ImportApiKeysInput";
import { ImportApiKeysOutput } from "./types/ImportApiKeysOutput";
import { ImportDocumentationPartsInput } from "./types/ImportDocumentationPartsInput";
import { ImportDocumentationPartsOutput } from "./types/ImportDocumentationPartsOutput";
import { ImportRestApiInput } from "./types/ImportRestApiInput";
import { ImportRestApiOutput } from "./types/ImportRestApiOutput";
import { LimitExceededException } from "./types/LimitExceededException";
import { NotFoundException } from "./types/NotFoundException";
import { PutGatewayResponseInput } from "./types/PutGatewayResponseInput";
import { PutGatewayResponseOutput } from "./types/PutGatewayResponseOutput";
import { PutIntegrationInput } from "./types/PutIntegrationInput";
import { PutIntegrationOutput } from "./types/PutIntegrationOutput";
import { PutIntegrationResponseInput } from "./types/PutIntegrationResponseInput";
import { PutIntegrationResponseOutput } from "./types/PutIntegrationResponseOutput";
import { PutMethodInput } from "./types/PutMethodInput";
import { PutMethodOutput } from "./types/PutMethodOutput";
import { PutMethodResponseInput } from "./types/PutMethodResponseInput";
import { PutMethodResponseOutput } from "./types/PutMethodResponseOutput";
import { PutRestApiInput } from "./types/PutRestApiInput";
import { PutRestApiOutput } from "./types/PutRestApiOutput";
import { ServiceUnavailableException } from "./types/ServiceUnavailableException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TestInvokeAuthorizerInput } from "./types/TestInvokeAuthorizerInput";
import { TestInvokeAuthorizerOutput } from "./types/TestInvokeAuthorizerOutput";
import { TestInvokeMethodInput } from "./types/TestInvokeMethodInput";
import { TestInvokeMethodOutput } from "./types/TestInvokeMethodOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateAccountInput } from "./types/UpdateAccountInput";
import { UpdateAccountOutput } from "./types/UpdateAccountOutput";
import { UpdateApiKeyInput } from "./types/UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "./types/UpdateApiKeyOutput";
import { UpdateAuthorizerInput } from "./types/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "./types/UpdateAuthorizerOutput";
import { UpdateBasePathMappingInput } from "./types/UpdateBasePathMappingInput";
import { UpdateBasePathMappingOutput } from "./types/UpdateBasePathMappingOutput";
import { UpdateClientCertificateInput } from "./types/UpdateClientCertificateInput";
import { UpdateClientCertificateOutput } from "./types/UpdateClientCertificateOutput";
import { UpdateDeploymentInput } from "./types/UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "./types/UpdateDeploymentOutput";
import { UpdateDocumentationPartInput } from "./types/UpdateDocumentationPartInput";
import { UpdateDocumentationPartOutput } from "./types/UpdateDocumentationPartOutput";
import { UpdateDocumentationVersionInput } from "./types/UpdateDocumentationVersionInput";
import { UpdateDocumentationVersionOutput } from "./types/UpdateDocumentationVersionOutput";
import { UpdateDomainNameInput } from "./types/UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "./types/UpdateDomainNameOutput";
import { UpdateGatewayResponseInput } from "./types/UpdateGatewayResponseInput";
import { UpdateGatewayResponseOutput } from "./types/UpdateGatewayResponseOutput";
import { UpdateIntegrationInput } from "./types/UpdateIntegrationInput";
import { UpdateIntegrationOutput } from "./types/UpdateIntegrationOutput";
import { UpdateIntegrationResponseInput } from "./types/UpdateIntegrationResponseInput";
import { UpdateIntegrationResponseOutput } from "./types/UpdateIntegrationResponseOutput";
import { UpdateMethodInput } from "./types/UpdateMethodInput";
import { UpdateMethodOutput } from "./types/UpdateMethodOutput";
import { UpdateMethodResponseInput } from "./types/UpdateMethodResponseInput";
import { UpdateMethodResponseOutput } from "./types/UpdateMethodResponseOutput";
import { UpdateModelInput } from "./types/UpdateModelInput";
import { UpdateModelOutput } from "./types/UpdateModelOutput";
import { UpdateRequestValidatorInput } from "./types/UpdateRequestValidatorInput";
import { UpdateRequestValidatorOutput } from "./types/UpdateRequestValidatorOutput";
import { UpdateResourceInput } from "./types/UpdateResourceInput";
import { UpdateResourceOutput } from "./types/UpdateResourceOutput";
import { UpdateRestApiInput } from "./types/UpdateRestApiInput";
import { UpdateRestApiOutput } from "./types/UpdateRestApiOutput";
import { UpdateStageInput } from "./types/UpdateStageInput";
import { UpdateStageOutput } from "./types/UpdateStageOutput";
import { UpdateUsageInput } from "./types/UpdateUsageInput";
import { UpdateUsageOutput } from "./types/UpdateUsageOutput";
import { UpdateUsagePlanInput } from "./types/UpdateUsagePlanInput";
import { UpdateUsagePlanOutput } from "./types/UpdateUsagePlanOutput";
import { UpdateVpcLinkInput } from "./types/UpdateVpcLinkInput";
import { UpdateVpcLinkOutput } from "./types/UpdateVpcLinkOutput";
import { CreateApiKeyCommand } from "./commands/CreateApiKeyCommand";
import { CreateAuthorizerCommand } from "./commands/CreateAuthorizerCommand";
import { CreateBasePathMappingCommand } from "./commands/CreateBasePathMappingCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateDocumentationPartCommand } from "./commands/CreateDocumentationPartCommand";
import { CreateDocumentationVersionCommand } from "./commands/CreateDocumentationVersionCommand";
import { CreateDomainNameCommand } from "./commands/CreateDomainNameCommand";
import { CreateModelCommand } from "./commands/CreateModelCommand";
import { CreateRequestValidatorCommand } from "./commands/CreateRequestValidatorCommand";
import { CreateResourceCommand } from "./commands/CreateResourceCommand";
import { CreateRestApiCommand } from "./commands/CreateRestApiCommand";
import { CreateStageCommand } from "./commands/CreateStageCommand";
import { CreateUsagePlanCommand } from "./commands/CreateUsagePlanCommand";
import { CreateUsagePlanKeyCommand } from "./commands/CreateUsagePlanKeyCommand";
import { CreateVpcLinkCommand } from "./commands/CreateVpcLinkCommand";
import { DeleteApiKeyCommand } from "./commands/DeleteApiKeyCommand";
import { DeleteAuthorizerCommand } from "./commands/DeleteAuthorizerCommand";
import { DeleteBasePathMappingCommand } from "./commands/DeleteBasePathMappingCommand";
import { DeleteClientCertificateCommand } from "./commands/DeleteClientCertificateCommand";
import { DeleteDeploymentCommand } from "./commands/DeleteDeploymentCommand";
import { DeleteDocumentationPartCommand } from "./commands/DeleteDocumentationPartCommand";
import { DeleteDocumentationVersionCommand } from "./commands/DeleteDocumentationVersionCommand";
import { DeleteDomainNameCommand } from "./commands/DeleteDomainNameCommand";
import { DeleteGatewayResponseCommand } from "./commands/DeleteGatewayResponseCommand";
import { DeleteIntegrationCommand } from "./commands/DeleteIntegrationCommand";
import { DeleteIntegrationResponseCommand } from "./commands/DeleteIntegrationResponseCommand";
import { DeleteMethodCommand } from "./commands/DeleteMethodCommand";
import { DeleteMethodResponseCommand } from "./commands/DeleteMethodResponseCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteRequestValidatorCommand } from "./commands/DeleteRequestValidatorCommand";
import { DeleteResourceCommand } from "./commands/DeleteResourceCommand";
import { DeleteRestApiCommand } from "./commands/DeleteRestApiCommand";
import { DeleteStageCommand } from "./commands/DeleteStageCommand";
import { DeleteUsagePlanCommand } from "./commands/DeleteUsagePlanCommand";
import { DeleteUsagePlanKeyCommand } from "./commands/DeleteUsagePlanKeyCommand";
import { DeleteVpcLinkCommand } from "./commands/DeleteVpcLinkCommand";
import { FlushStageAuthorizersCacheCommand } from "./commands/FlushStageAuthorizersCacheCommand";
import { FlushStageCacheCommand } from "./commands/FlushStageCacheCommand";
import { GenerateClientCertificateCommand } from "./commands/GenerateClientCertificateCommand";
import { GetAccountCommand } from "./commands/GetAccountCommand";
import { GetApiKeyCommand } from "./commands/GetApiKeyCommand";
import { GetApiKeysCommand } from "./commands/GetApiKeysCommand";
import { GetAuthorizerCommand } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommand } from "./commands/GetAuthorizersCommand";
import { GetBasePathMappingCommand } from "./commands/GetBasePathMappingCommand";
import { GetBasePathMappingsCommand } from "./commands/GetBasePathMappingsCommand";
import { GetClientCertificateCommand } from "./commands/GetClientCertificateCommand";
import { GetClientCertificatesCommand } from "./commands/GetClientCertificatesCommand";
import { GetDeploymentCommand } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommand } from "./commands/GetDeploymentsCommand";
import { GetDocumentationPartCommand } from "./commands/GetDocumentationPartCommand";
import { GetDocumentationPartsCommand } from "./commands/GetDocumentationPartsCommand";
import { GetDocumentationVersionCommand } from "./commands/GetDocumentationVersionCommand";
import { GetDocumentationVersionsCommand } from "./commands/GetDocumentationVersionsCommand";
import { GetDomainNameCommand } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommand } from "./commands/GetDomainNamesCommand";
import { GetExportCommand } from "./commands/GetExportCommand";
import { GetGatewayResponseCommand } from "./commands/GetGatewayResponseCommand";
import { GetGatewayResponsesCommand } from "./commands/GetGatewayResponsesCommand";
import { GetIntegrationCommand } from "./commands/GetIntegrationCommand";
import { GetIntegrationResponseCommand } from "./commands/GetIntegrationResponseCommand";
import { GetMethodCommand } from "./commands/GetMethodCommand";
import { GetMethodResponseCommand } from "./commands/GetMethodResponseCommand";
import { GetModelCommand } from "./commands/GetModelCommand";
import { GetModelTemplateCommand } from "./commands/GetModelTemplateCommand";
import { GetModelsCommand } from "./commands/GetModelsCommand";
import { GetRequestValidatorCommand } from "./commands/GetRequestValidatorCommand";
import { GetRequestValidatorsCommand } from "./commands/GetRequestValidatorsCommand";
import { GetResourceCommand } from "./commands/GetResourceCommand";
import { GetResourcesCommand } from "./commands/GetResourcesCommand";
import { GetRestApiCommand } from "./commands/GetRestApiCommand";
import { GetRestApisCommand } from "./commands/GetRestApisCommand";
import { GetSdkCommand } from "./commands/GetSdkCommand";
import { GetSdkTypeCommand } from "./commands/GetSdkTypeCommand";
import { GetSdkTypesCommand } from "./commands/GetSdkTypesCommand";
import { GetStageCommand } from "./commands/GetStageCommand";
import { GetStagesCommand } from "./commands/GetStagesCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { GetUsageCommand } from "./commands/GetUsageCommand";
import { GetUsagePlanCommand } from "./commands/GetUsagePlanCommand";
import { GetUsagePlanKeyCommand } from "./commands/GetUsagePlanKeyCommand";
import { GetUsagePlanKeysCommand } from "./commands/GetUsagePlanKeysCommand";
import { GetUsagePlansCommand } from "./commands/GetUsagePlansCommand";
import { GetVpcLinkCommand } from "./commands/GetVpcLinkCommand";
import { GetVpcLinksCommand } from "./commands/GetVpcLinksCommand";
import { ImportApiKeysCommand } from "./commands/ImportApiKeysCommand";
import { ImportDocumentationPartsCommand } from "./commands/ImportDocumentationPartsCommand";
import { ImportRestApiCommand } from "./commands/ImportRestApiCommand";
import { PutGatewayResponseCommand } from "./commands/PutGatewayResponseCommand";
import { PutIntegrationCommand } from "./commands/PutIntegrationCommand";
import { PutIntegrationResponseCommand } from "./commands/PutIntegrationResponseCommand";
import { PutMethodCommand } from "./commands/PutMethodCommand";
import { PutMethodResponseCommand } from "./commands/PutMethodResponseCommand";
import { PutRestApiCommand } from "./commands/PutRestApiCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { TestInvokeAuthorizerCommand } from "./commands/TestInvokeAuthorizerCommand";
import { TestInvokeMethodCommand } from "./commands/TestInvokeMethodCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateAccountCommand } from "./commands/UpdateAccountCommand";
import { UpdateApiKeyCommand } from "./commands/UpdateApiKeyCommand";
import { UpdateAuthorizerCommand } from "./commands/UpdateAuthorizerCommand";
import { UpdateBasePathMappingCommand } from "./commands/UpdateBasePathMappingCommand";
import { UpdateClientCertificateCommand } from "./commands/UpdateClientCertificateCommand";
import { UpdateDeploymentCommand } from "./commands/UpdateDeploymentCommand";
import { UpdateDocumentationPartCommand } from "./commands/UpdateDocumentationPartCommand";
import { UpdateDocumentationVersionCommand } from "./commands/UpdateDocumentationVersionCommand";
import { UpdateDomainNameCommand } from "./commands/UpdateDomainNameCommand";
import { UpdateGatewayResponseCommand } from "./commands/UpdateGatewayResponseCommand";
import { UpdateIntegrationCommand } from "./commands/UpdateIntegrationCommand";
import { UpdateIntegrationResponseCommand } from "./commands/UpdateIntegrationResponseCommand";
import { UpdateMethodCommand } from "./commands/UpdateMethodCommand";
import { UpdateMethodResponseCommand } from "./commands/UpdateMethodResponseCommand";
import { UpdateModelCommand } from "./commands/UpdateModelCommand";
import { UpdateRequestValidatorCommand } from "./commands/UpdateRequestValidatorCommand";
import { UpdateResourceCommand } from "./commands/UpdateResourceCommand";
import { UpdateRestApiCommand } from "./commands/UpdateRestApiCommand";
import { UpdateStageCommand } from "./commands/UpdateStageCommand";
import { UpdateUsageCommand } from "./commands/UpdateUsageCommand";
import { UpdateUsagePlanCommand } from "./commands/UpdateUsagePlanCommand";
import { UpdateVpcLinkCommand } from "./commands/UpdateVpcLinkCommand";

export class APIGateway extends APIGatewayClient {
  /**
   * <p>Create an <a>ApiKey</a> resource. </p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-api-key.html">AWS CLI</a></div>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApiKey(args: CreateApiKeyInput): Promise<CreateApiKeyOutput>;
  public createApiKey(
    args: CreateApiKeyInput,
    cb: (err: any, data?: CreateApiKeyOutput) => void
  ): void;
  public createApiKey(
    args: CreateApiKeyInput,
    cb?: (err: any, data?: CreateApiKeyOutput) => void
  ): Promise<CreateApiKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApiKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new <a>Authorizer</a> resource to an existing <a>RestApi</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/create-authorizer.html">AWS CLI</a></div>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createAuthorizer(
    args: CreateAuthorizerInput
  ): Promise<CreateAuthorizerOutput>;
  public createAuthorizer(
    args: CreateAuthorizerInput,
    cb: (err: any, data?: CreateAuthorizerOutput) => void
  ): void;
  public createAuthorizer(
    args: CreateAuthorizerInput,
    cb?: (err: any, data?: CreateAuthorizerOutput) => void
  ): Promise<CreateAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new <a>BasePathMapping</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createBasePathMapping(
    args: CreateBasePathMappingInput
  ): Promise<CreateBasePathMappingOutput>;
  public createBasePathMapping(
    args: CreateBasePathMappingInput,
    cb: (err: any, data?: CreateBasePathMappingOutput) => void
  ): void;
  public createBasePathMapping(
    args: CreateBasePathMappingInput,
    cb?: (err: any, data?: CreateBasePathMappingOutput) => void
  ): Promise<CreateBasePathMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateBasePathMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>Deployment</a> resource, which makes a specified <a>RestApi</a> callable over the internet.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ServiceUnavailableException} <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDeployment(
    args: CreateDeploymentInput
  ): Promise<CreateDeploymentOutput>;
  public createDeployment(
    args: CreateDeploymentInput,
    cb: (err: any, data?: CreateDeploymentOutput) => void
  ): void;
  public createDeployment(
    args: CreateDeploymentInput,
    cb?: (err: any, data?: CreateDeploymentOutput) => void
  ): Promise<CreateDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * CreateDocumentationPart operation
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDocumentationPart(
    args: CreateDocumentationPartInput
  ): Promise<CreateDocumentationPartOutput>;
  public createDocumentationPart(
    args: CreateDocumentationPartInput,
    cb: (err: any, data?: CreateDocumentationPartOutput) => void
  ): void;
  public createDocumentationPart(
    args: CreateDocumentationPartInput,
    cb?: (err: any, data?: CreateDocumentationPartOutput) => void
  ): Promise<CreateDocumentationPartOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDocumentationPartCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * CreateDocumentationVersion operation
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDocumentationVersion(
    args: CreateDocumentationVersionInput
  ): Promise<CreateDocumentationVersionOutput>;
  public createDocumentationVersion(
    args: CreateDocumentationVersionInput,
    cb: (err: any, data?: CreateDocumentationVersionOutput) => void
  ): void;
  public createDocumentationVersion(
    args: CreateDocumentationVersionInput,
    cb?: (err: any, data?: CreateDocumentationVersionOutput) => void
  ): Promise<CreateDocumentationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDocumentationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDomainName(
    args: CreateDomainNameInput
  ): Promise<CreateDomainNameOutput>;
  public createDomainName(
    args: CreateDomainNameInput,
    cb: (err: any, data?: CreateDomainNameOutput) => void
  ): void;
  public createDomainName(
    args: CreateDomainNameInput,
    cb?: (err: any, data?: CreateDomainNameOutput) => void
  ): Promise<CreateDomainNameOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDomainNameCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new <a>Model</a> resource to an existing <a>RestApi</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createModel(args: CreateModelInput): Promise<CreateModelOutput>;
  public createModel(
    args: CreateModelInput,
    cb: (err: any, data?: CreateModelOutput) => void
  ): void;
  public createModel(
    args: CreateModelInput,
    cb?: (err: any, data?: CreateModelOutput) => void
  ): Promise<CreateModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>ReqeustValidator</a> of a given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRequestValidator(
    args: CreateRequestValidatorInput
  ): Promise<CreateRequestValidatorOutput>;
  public createRequestValidator(
    args: CreateRequestValidatorInput,
    cb: (err: any, data?: CreateRequestValidatorOutput) => void
  ): void;
  public createRequestValidator(
    args: CreateRequestValidatorInput,
    cb?: (err: any, data?: CreateRequestValidatorOutput) => void
  ): Promise<CreateRequestValidatorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRequestValidatorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <a>Resource</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResource(
    args: CreateResourceInput
  ): Promise<CreateResourceOutput>;
  public createResource(
    args: CreateResourceInput,
    cb: (err: any, data?: CreateResourceOutput) => void
  ): void;
  public createResource(
    args: CreateResourceInput,
    cb?: (err: any, data?: CreateResourceOutput) => void
  ): Promise<CreateResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new <a>RestApi</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRestApi(args: CreateRestApiInput): Promise<CreateRestApiOutput>;
  public createRestApi(
    args: CreateRestApiInput,
    cb: (err: any, data?: CreateRestApiOutput) => void
  ): void;
  public createRestApi(
    args: CreateRestApiInput,
    cb?: (err: any, data?: CreateRestApiOutput) => void
  ): Promise<CreateRestApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRestApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new <a>Stage</a> resource that references a pre-existing <a>Deployment</a> for the API. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createStage(args: CreateStageInput): Promise<CreateStageOutput>;
  public createStage(
    args: CreateStageInput,
    cb: (err: any, data?: CreateStageOutput) => void
  ): void;
  public createStage(
    args: CreateStageInput,
    cb?: (err: any, data?: CreateStageOutput) => void
  ): Promise<CreateStageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateStageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a usage plan with the throttle and quota limits, as well as the associated API stages, specified in the payload. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUsagePlan(
    args: CreateUsagePlanInput
  ): Promise<CreateUsagePlanOutput>;
  public createUsagePlan(
    args: CreateUsagePlanInput,
    cb: (err: any, data?: CreateUsagePlanOutput) => void
  ): void;
  public createUsagePlan(
    args: CreateUsagePlanInput,
    cb?: (err: any, data?: CreateUsagePlanOutput) => void
  ): Promise<CreateUsagePlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUsagePlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a usage plan key for adding an existing API key to a usage plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createUsagePlanKey(
    args: CreateUsagePlanKeyInput
  ): Promise<CreateUsagePlanKeyOutput>;
  public createUsagePlanKey(
    args: CreateUsagePlanKeyInput,
    cb: (err: any, data?: CreateUsagePlanKeyOutput) => void
  ): void;
  public createUsagePlanKey(
    args: CreateUsagePlanKeyInput,
    cb?: (err: any, data?: CreateUsagePlanKeyOutput) => void
  ): Promise<CreateUsagePlanKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateUsagePlanKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a VPC link, under the caller's account in a selected region, in an asynchronous operation that typically takes 2-4 minutes to complete and become operational. The caller must have permissions to create and update VPC Endpoint services.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createVpcLink(args: CreateVpcLinkInput): Promise<CreateVpcLinkOutput>;
  public createVpcLink(
    args: CreateVpcLinkInput,
    cb: (err: any, data?: CreateVpcLinkOutput) => void
  ): void;
  public createVpcLink(
    args: CreateVpcLinkInput,
    cb?: (err: any, data?: CreateVpcLinkOutput) => void
  ): Promise<CreateVpcLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateVpcLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the <a>ApiKey</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApiKey(args: DeleteApiKeyInput): Promise<DeleteApiKeyOutput>;
  public deleteApiKey(
    args: DeleteApiKeyInput,
    cb: (err: any, data?: DeleteApiKeyOutput) => void
  ): void;
  public deleteApiKey(
    args: DeleteApiKeyInput,
    cb?: (err: any, data?: DeleteApiKeyOutput) => void
  ): Promise<DeleteApiKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApiKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/delete-authorizer.html">AWS CLI</a></div>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteAuthorizer(
    args: DeleteAuthorizerInput
  ): Promise<DeleteAuthorizerOutput>;
  public deleteAuthorizer(
    args: DeleteAuthorizerInput,
    cb: (err: any, data?: DeleteAuthorizerOutput) => void
  ): void;
  public deleteAuthorizer(
    args: DeleteAuthorizerInput,
    cb?: (err: any, data?: DeleteAuthorizerOutput) => void
  ): Promise<DeleteAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the <a>BasePathMapping</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteBasePathMapping(
    args: DeleteBasePathMappingInput
  ): Promise<DeleteBasePathMappingOutput>;
  public deleteBasePathMapping(
    args: DeleteBasePathMappingInput,
    cb: (err: any, data?: DeleteBasePathMappingOutput) => void
  ): void;
  public deleteBasePathMapping(
    args: DeleteBasePathMappingInput,
    cb?: (err: any, data?: DeleteBasePathMappingOutput) => void
  ): Promise<DeleteBasePathMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteBasePathMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the <a>ClientCertificate</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteClientCertificate(
    args: DeleteClientCertificateInput
  ): Promise<DeleteClientCertificateOutput>;
  public deleteClientCertificate(
    args: DeleteClientCertificateInput,
    cb: (err: any, data?: DeleteClientCertificateOutput) => void
  ): void;
  public deleteClientCertificate(
    args: DeleteClientCertificateInput,
    cb?: (err: any, data?: DeleteClientCertificateOutput) => void
  ): Promise<DeleteClientCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteClientCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <a>Deployment</a> resource. Deleting a deployment will only succeed if there are no <a>Stage</a> resources associated with it.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDeployment(
    args: DeleteDeploymentInput
  ): Promise<DeleteDeploymentOutput>;
  public deleteDeployment(
    args: DeleteDeploymentInput,
    cb: (err: any, data?: DeleteDeploymentOutput) => void
  ): void;
  public deleteDeployment(
    args: DeleteDeploymentInput,
    cb?: (err: any, data?: DeleteDeploymentOutput) => void
  ): Promise<DeleteDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * DeleteDocumentationPart operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDocumentationPart(
    args: DeleteDocumentationPartInput
  ): Promise<DeleteDocumentationPartOutput>;
  public deleteDocumentationPart(
    args: DeleteDocumentationPartInput,
    cb: (err: any, data?: DeleteDocumentationPartOutput) => void
  ): void;
  public deleteDocumentationPart(
    args: DeleteDocumentationPartInput,
    cb?: (err: any, data?: DeleteDocumentationPartOutput) => void
  ): Promise<DeleteDocumentationPartOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDocumentationPartCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * DeleteDocumentationVersion operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionInput
  ): Promise<DeleteDocumentationVersionOutput>;
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionInput,
    cb: (err: any, data?: DeleteDocumentationVersionOutput) => void
  ): void;
  public deleteDocumentationVersion(
    args: DeleteDocumentationVersionInput,
    cb?: (err: any, data?: DeleteDocumentationVersionOutput) => void
  ): Promise<DeleteDocumentationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDocumentationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the <a>DomainName</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDomainName(
    args: DeleteDomainNameInput
  ): Promise<DeleteDomainNameOutput>;
  public deleteDomainName(
    args: DeleteDomainNameInput,
    cb: (err: any, data?: DeleteDomainNameOutput) => void
  ): void;
  public deleteDomainName(
    args: DeleteDomainNameInput,
    cb?: (err: any, data?: DeleteDomainNameOutput) => void
  ): Promise<DeleteDomainNameOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDomainNameCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Clears any customization of a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a> and resets it with the default settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGatewayResponse(
    args: DeleteGatewayResponseInput
  ): Promise<DeleteGatewayResponseOutput>;
  public deleteGatewayResponse(
    args: DeleteGatewayResponseInput,
    cb: (err: any, data?: DeleteGatewayResponseOutput) => void
  ): void;
  public deleteGatewayResponse(
    args: DeleteGatewayResponseInput,
    cb?: (err: any, data?: DeleteGatewayResponseOutput) => void
  ): Promise<DeleteGatewayResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGatewayResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a delete integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIntegration(
    args: DeleteIntegrationInput
  ): Promise<DeleteIntegrationOutput>;
  public deleteIntegration(
    args: DeleteIntegrationInput,
    cb: (err: any, data?: DeleteIntegrationOutput) => void
  ): void;
  public deleteIntegration(
    args: DeleteIntegrationInput,
    cb?: (err: any, data?: DeleteIntegrationOutput) => void
  ): Promise<DeleteIntegrationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIntegrationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a delete integration response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseInput
  ): Promise<DeleteIntegrationResponseOutput>;
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseInput,
    cb: (err: any, data?: DeleteIntegrationResponseOutput) => void
  ): void;
  public deleteIntegrationResponse(
    args: DeleteIntegrationResponseInput,
    cb?: (err: any, data?: DeleteIntegrationResponseOutput) => void
  ): Promise<DeleteIntegrationResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteIntegrationResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing <a>Method</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMethod(args: DeleteMethodInput): Promise<DeleteMethodOutput>;
  public deleteMethod(
    args: DeleteMethodInput,
    cb: (err: any, data?: DeleteMethodOutput) => void
  ): void;
  public deleteMethod(
    args: DeleteMethodInput,
    cb?: (err: any, data?: DeleteMethodOutput) => void
  ): Promise<DeleteMethodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMethodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing <a>MethodResponse</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteMethodResponse(
    args: DeleteMethodResponseInput
  ): Promise<DeleteMethodResponseOutput>;
  public deleteMethodResponse(
    args: DeleteMethodResponseInput,
    cb: (err: any, data?: DeleteMethodResponseOutput) => void
  ): void;
  public deleteMethodResponse(
    args: DeleteMethodResponseInput,
    cb?: (err: any, data?: DeleteMethodResponseOutput) => void
  ): Promise<DeleteMethodResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteMethodResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteModel(args: DeleteModelInput): Promise<DeleteModelOutput>;
  public deleteModel(
    args: DeleteModelInput,
    cb: (err: any, data?: DeleteModelOutput) => void
  ): void;
  public deleteModel(
    args: DeleteModelInput,
    cb?: (err: any, data?: DeleteModelOutput) => void
  ): Promise<DeleteModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRequestValidator(
    args: DeleteRequestValidatorInput
  ): Promise<DeleteRequestValidatorOutput>;
  public deleteRequestValidator(
    args: DeleteRequestValidatorInput,
    cb: (err: any, data?: DeleteRequestValidatorOutput) => void
  ): void;
  public deleteRequestValidator(
    args: DeleteRequestValidatorInput,
    cb?: (err: any, data?: DeleteRequestValidatorOutput) => void
  ): Promise<DeleteRequestValidatorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRequestValidatorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <a>Resource</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResource(
    args: DeleteResourceInput
  ): Promise<DeleteResourceOutput>;
  public deleteResource(
    args: DeleteResourceInput,
    cb: (err: any, data?: DeleteResourceOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceInput,
    cb?: (err: any, data?: DeleteResourceOutput) => void
  ): Promise<DeleteResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRestApi(args: DeleteRestApiInput): Promise<DeleteRestApiOutput>;
  public deleteRestApi(
    args: DeleteRestApiInput,
    cb: (err: any, data?: DeleteRestApiOutput) => void
  ): void;
  public deleteRestApi(
    args: DeleteRestApiInput,
    cb?: (err: any, data?: DeleteRestApiOutput) => void
  ): Promise<DeleteRestApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRestApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <a>Stage</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteStage(args: DeleteStageInput): Promise<DeleteStageOutput>;
  public deleteStage(
    args: DeleteStageInput,
    cb: (err: any, data?: DeleteStageOutput) => void
  ): void;
  public deleteStage(
    args: DeleteStageInput,
    cb?: (err: any, data?: DeleteStageOutput) => void
  ): Promise<DeleteStageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteStageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a usage plan of a given plan Id.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUsagePlan(
    args: DeleteUsagePlanInput
  ): Promise<DeleteUsagePlanOutput>;
  public deleteUsagePlan(
    args: DeleteUsagePlanInput,
    cb: (err: any, data?: DeleteUsagePlanOutput) => void
  ): void;
  public deleteUsagePlan(
    args: DeleteUsagePlanInput,
    cb?: (err: any, data?: DeleteUsagePlanOutput) => void
  ): Promise<DeleteUsagePlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUsagePlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a usage plan key and remove the underlying API key from the associated usage plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyInput
  ): Promise<DeleteUsagePlanKeyOutput>;
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyInput,
    cb: (err: any, data?: DeleteUsagePlanKeyOutput) => void
  ): void;
  public deleteUsagePlanKey(
    args: DeleteUsagePlanKeyInput,
    cb?: (err: any, data?: DeleteUsagePlanKeyOutput) => void
  ): Promise<DeleteUsagePlanKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteUsagePlanKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an existing <a>VpcLink</a> of a specified identifier.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteVpcLink(args: DeleteVpcLinkInput): Promise<DeleteVpcLinkOutput>;
  public deleteVpcLink(
    args: DeleteVpcLinkInput,
    cb: (err: any, data?: DeleteVpcLinkOutput) => void
  ): void;
  public deleteVpcLink(
    args: DeleteVpcLinkInput,
    cb?: (err: any, data?: DeleteVpcLinkOutput) => void
  ): Promise<DeleteVpcLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteVpcLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Flushes all authorizer cache entries on a stage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheInput
  ): Promise<FlushStageAuthorizersCacheOutput>;
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheInput,
    cb: (err: any, data?: FlushStageAuthorizersCacheOutput) => void
  ): void;
  public flushStageAuthorizersCache(
    args: FlushStageAuthorizersCacheInput,
    cb?: (err: any, data?: FlushStageAuthorizersCacheOutput) => void
  ): Promise<FlushStageAuthorizersCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new FlushStageAuthorizersCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Flushes a stage's cache.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public flushStageCache(
    args: FlushStageCacheInput
  ): Promise<FlushStageCacheOutput>;
  public flushStageCache(
    args: FlushStageCacheInput,
    cb: (err: any, data?: FlushStageCacheOutput) => void
  ): void;
  public flushStageCache(
    args: FlushStageCacheInput,
    cb?: (err: any, data?: FlushStageCacheOutput) => void
  ): Promise<FlushStageCacheOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new FlushStageCacheCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a <a>ClientCertificate</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public generateClientCertificate(
    args: GenerateClientCertificateInput
  ): Promise<GenerateClientCertificateOutput>;
  public generateClientCertificate(
    args: GenerateClientCertificateInput,
    cb: (err: any, data?: GenerateClientCertificateOutput) => void
  ): void;
  public generateClientCertificate(
    args: GenerateClientCertificateInput,
    cb?: (err: any, data?: GenerateClientCertificateOutput) => void
  ): Promise<GenerateClientCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GenerateClientCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the current <a>Account</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAccount(args: GetAccountInput): Promise<GetAccountOutput>;
  public getAccount(
    args: GetAccountInput,
    cb: (err: any, data?: GetAccountOutput) => void
  ): void;
  public getAccount(
    args: GetAccountInput,
    cb?: (err: any, data?: GetAccountOutput) => void
  ): Promise<GetAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the current <a>ApiKey</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApiKey(args: GetApiKeyInput): Promise<GetApiKeyOutput>;
  public getApiKey(
    args: GetApiKeyInput,
    cb: (err: any, data?: GetApiKeyOutput) => void
  ): void;
  public getApiKey(
    args: GetApiKeyInput,
    cb?: (err: any, data?: GetApiKeyOutput) => void
  ): Promise<GetApiKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApiKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the current <a>ApiKeys</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApiKeys(args: GetApiKeysInput): Promise<GetApiKeysOutput>;
  public getApiKeys(
    args: GetApiKeysInput,
    cb: (err: any, data?: GetApiKeysOutput) => void
  ): void;
  public getApiKeys(
    args: GetApiKeysInput,
    cb?: (err: any, data?: GetApiKeysOutput) => void
  ): Promise<GetApiKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApiKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizer.html">AWS CLI</a></div>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAuthorizer(args: GetAuthorizerInput): Promise<GetAuthorizerOutput>;
  public getAuthorizer(
    args: GetAuthorizerInput,
    cb: (err: any, data?: GetAuthorizerOutput) => void
  ): void;
  public getAuthorizer(
    args: GetAuthorizerInput,
    cb?: (err: any, data?: GetAuthorizerOutput) => void
  ): Promise<GetAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe an existing <a>Authorizers</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/get-authorizers.html">AWS CLI</a></div>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getAuthorizers(
    args: GetAuthorizersInput
  ): Promise<GetAuthorizersOutput>;
  public getAuthorizers(
    args: GetAuthorizersInput,
    cb: (err: any, data?: GetAuthorizersOutput) => void
  ): void;
  public getAuthorizers(
    args: GetAuthorizersInput,
    cb?: (err: any, data?: GetAuthorizersOutput) => void
  ): Promise<GetAuthorizersOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetAuthorizersCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe a <a>BasePathMapping</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBasePathMapping(
    args: GetBasePathMappingInput
  ): Promise<GetBasePathMappingOutput>;
  public getBasePathMapping(
    args: GetBasePathMappingInput,
    cb: (err: any, data?: GetBasePathMappingOutput) => void
  ): void;
  public getBasePathMapping(
    args: GetBasePathMappingInput,
    cb?: (err: any, data?: GetBasePathMappingOutput) => void
  ): Promise<GetBasePathMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBasePathMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a collection of <a>BasePathMapping</a> resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getBasePathMappings(
    args: GetBasePathMappingsInput
  ): Promise<GetBasePathMappingsOutput>;
  public getBasePathMappings(
    args: GetBasePathMappingsInput,
    cb: (err: any, data?: GetBasePathMappingsOutput) => void
  ): void;
  public getBasePathMappings(
    args: GetBasePathMappingsInput,
    cb?: (err: any, data?: GetBasePathMappingsOutput) => void
  ): Promise<GetBasePathMappingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetBasePathMappingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about the current <a>ClientCertificate</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getClientCertificate(
    args: GetClientCertificateInput
  ): Promise<GetClientCertificateOutput>;
  public getClientCertificate(
    args: GetClientCertificateInput,
    cb: (err: any, data?: GetClientCertificateOutput) => void
  ): void;
  public getClientCertificate(
    args: GetClientCertificateInput,
    cb?: (err: any, data?: GetClientCertificateOutput) => void
  ): Promise<GetClientCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetClientCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a collection of <a>ClientCertificate</a> resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getClientCertificates(
    args: GetClientCertificatesInput
  ): Promise<GetClientCertificatesOutput>;
  public getClientCertificates(
    args: GetClientCertificatesInput,
    cb: (err: any, data?: GetClientCertificatesOutput) => void
  ): void;
  public getClientCertificates(
    args: GetClientCertificatesInput,
    cb?: (err: any, data?: GetClientCertificatesOutput) => void
  ): Promise<GetClientCertificatesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetClientCertificatesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a <a>Deployment</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ServiceUnavailableException} <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeployment(args: GetDeploymentInput): Promise<GetDeploymentOutput>;
  public getDeployment(
    args: GetDeploymentInput,
    cb: (err: any, data?: GetDeploymentOutput) => void
  ): void;
  public getDeployment(
    args: GetDeploymentInput,
    cb?: (err: any, data?: GetDeploymentOutput) => void
  ): Promise<GetDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a <a>Deployments</a> collection.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ServiceUnavailableException} <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDeployments(
    args: GetDeploymentsInput
  ): Promise<GetDeploymentsOutput>;
  public getDeployments(
    args: GetDeploymentsInput,
    cb: (err: any, data?: GetDeploymentsOutput) => void
  ): void;
  public getDeployments(
    args: GetDeploymentsInput,
    cb?: (err: any, data?: GetDeploymentsOutput) => void
  ): Promise<GetDeploymentsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDeploymentsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetDocumentationPart operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentationPart(
    args: GetDocumentationPartInput
  ): Promise<GetDocumentationPartOutput>;
  public getDocumentationPart(
    args: GetDocumentationPartInput,
    cb: (err: any, data?: GetDocumentationPartOutput) => void
  ): void;
  public getDocumentationPart(
    args: GetDocumentationPartInput,
    cb?: (err: any, data?: GetDocumentationPartOutput) => void
  ): Promise<GetDocumentationPartOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentationPartCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetDocumentationParts operation
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentationParts(
    args: GetDocumentationPartsInput
  ): Promise<GetDocumentationPartsOutput>;
  public getDocumentationParts(
    args: GetDocumentationPartsInput,
    cb: (err: any, data?: GetDocumentationPartsOutput) => void
  ): void;
  public getDocumentationParts(
    args: GetDocumentationPartsInput,
    cb?: (err: any, data?: GetDocumentationPartsOutput) => void
  ): Promise<GetDocumentationPartsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentationPartsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetDocumentationVersion operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentationVersion(
    args: GetDocumentationVersionInput
  ): Promise<GetDocumentationVersionOutput>;
  public getDocumentationVersion(
    args: GetDocumentationVersionInput,
    cb: (err: any, data?: GetDocumentationVersionOutput) => void
  ): void;
  public getDocumentationVersion(
    args: GetDocumentationVersionInput,
    cb?: (err: any, data?: GetDocumentationVersionOutput) => void
  ): Promise<GetDocumentationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetDocumentationVersions operation
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDocumentationVersions(
    args: GetDocumentationVersionsInput
  ): Promise<GetDocumentationVersionsOutput>;
  public getDocumentationVersions(
    args: GetDocumentationVersionsInput,
    cb: (err: any, data?: GetDocumentationVersionsOutput) => void
  ): void;
  public getDocumentationVersions(
    args: GetDocumentationVersionsInput,
    cb?: (err: any, data?: GetDocumentationVersionsOutput) => void
  ): Promise<GetDocumentationVersionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDocumentationVersionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a domain name that is contained in a simpler, more intuitive URL that can be called.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ServiceUnavailableException} <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainName(args: GetDomainNameInput): Promise<GetDomainNameOutput>;
  public getDomainName(
    args: GetDomainNameInput,
    cb: (err: any, data?: GetDomainNameOutput) => void
  ): void;
  public getDomainName(
    args: GetDomainNameInput,
    cb?: (err: any, data?: GetDomainNameOutput) => void
  ): Promise<GetDomainNameOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainNameCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a collection of <a>DomainName</a> resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDomainNames(
    args: GetDomainNamesInput
  ): Promise<GetDomainNamesOutput>;
  public getDomainNames(
    args: GetDomainNamesInput,
    cb: (err: any, data?: GetDomainNamesOutput) => void
  ): void;
  public getDomainNames(
    args: GetDomainNamesInput,
    cb?: (err: any, data?: GetDomainNamesOutput) => void
  ): Promise<GetDomainNamesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDomainNamesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Exports a deployed version of a <a>RestApi</a> in a specified format.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getExport(args: GetExportInput): Promise<GetExportOutput>;
  public getExport(
    args: GetExportInput,
    cb: (err: any, data?: GetExportOutput) => void
  ): void;
  public getExport(
    args: GetExportInput,
    cb?: (err: any, data?: GetExportOutput) => void
  ): Promise<GetExportOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetExportCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGatewayResponse(
    args: GetGatewayResponseInput
  ): Promise<GetGatewayResponseOutput>;
  public getGatewayResponse(
    args: GetGatewayResponseInput,
    cb: (err: any, data?: GetGatewayResponseOutput) => void
  ): void;
  public getGatewayResponse(
    args: GetGatewayResponseInput,
    cb?: (err: any, data?: GetGatewayResponseOutput) => void
  ): Promise<GetGatewayResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGatewayResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the <a>GatewayResponses</a> collection on the given <a>RestApi</a>. If an API developer has not added any definitions for gateway responses, the result will be the API Gateway-generated default <a>GatewayResponses</a> collection for the supported response types.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGatewayResponses(
    args: GetGatewayResponsesInput
  ): Promise<GetGatewayResponsesOutput>;
  public getGatewayResponses(
    args: GetGatewayResponsesInput,
    cb: (err: any, data?: GetGatewayResponsesOutput) => void
  ): void;
  public getGatewayResponses(
    args: GetGatewayResponsesInput,
    cb?: (err: any, data?: GetGatewayResponsesOutput) => void
  ): Promise<GetGatewayResponsesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGatewayResponsesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get the integration settings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntegration(
    args: GetIntegrationInput
  ): Promise<GetIntegrationOutput>;
  public getIntegration(
    args: GetIntegrationInput,
    cb: (err: any, data?: GetIntegrationOutput) => void
  ): void;
  public getIntegration(
    args: GetIntegrationInput,
    cb?: (err: any, data?: GetIntegrationOutput) => void
  ): Promise<GetIntegrationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntegrationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a get integration response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntegrationResponse(
    args: GetIntegrationResponseInput
  ): Promise<GetIntegrationResponseOutput>;
  public getIntegrationResponse(
    args: GetIntegrationResponseInput,
    cb: (err: any, data?: GetIntegrationResponseOutput) => void
  ): void;
  public getIntegrationResponse(
    args: GetIntegrationResponseInput,
    cb?: (err: any, data?: GetIntegrationResponseOutput) => void
  ): Promise<GetIntegrationResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntegrationResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describe an existing <a>Method</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMethod(args: GetMethodInput): Promise<GetMethodOutput>;
  public getMethod(
    args: GetMethodInput,
    cb: (err: any, data?: GetMethodOutput) => void
  ): void;
  public getMethod(
    args: GetMethodInput,
    cb?: (err: any, data?: GetMethodOutput) => void
  ): Promise<GetMethodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMethodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes a <a>MethodResponse</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getMethodResponse(
    args: GetMethodResponseInput
  ): Promise<GetMethodResponseOutput>;
  public getMethodResponse(
    args: GetMethodResponseInput,
    cb: (err: any, data?: GetMethodResponseOutput) => void
  ): void;
  public getMethodResponse(
    args: GetMethodResponseInput,
    cb?: (err: any, data?: GetMethodResponseOutput) => void
  ): Promise<GetMethodResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetMethodResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes an existing model defined for a <a>RestApi</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getModel(args: GetModelInput): Promise<GetModelOutput>;
  public getModel(
    args: GetModelInput,
    cb: (err: any, data?: GetModelOutput) => void
  ): void;
  public getModel(
    args: GetModelInput,
    cb?: (err: any, data?: GetModelOutput) => void
  ): Promise<GetModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a sample mapping template that can be used to transform a payload into the structure of a model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getModelTemplate(
    args: GetModelTemplateInput
  ): Promise<GetModelTemplateOutput>;
  public getModelTemplate(
    args: GetModelTemplateInput,
    cb: (err: any, data?: GetModelTemplateOutput) => void
  ): void;
  public getModelTemplate(
    args: GetModelTemplateInput,
    cb?: (err: any, data?: GetModelTemplateOutput) => void
  ): Promise<GetModelTemplateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetModelTemplateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Describes existing <a>Models</a> defined for a <a>RestApi</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getModels(args: GetModelsInput): Promise<GetModelsOutput>;
  public getModels(
    args: GetModelsInput,
    cb: (err: any, data?: GetModelsOutput) => void
  ): void;
  public getModels(
    args: GetModelsInput,
    cb?: (err: any, data?: GetModelsOutput) => void
  ): Promise<GetModelsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetModelsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRequestValidator(
    args: GetRequestValidatorInput
  ): Promise<GetRequestValidatorOutput>;
  public getRequestValidator(
    args: GetRequestValidatorInput,
    cb: (err: any, data?: GetRequestValidatorOutput) => void
  ): void;
  public getRequestValidator(
    args: GetRequestValidatorInput,
    cb?: (err: any, data?: GetRequestValidatorOutput) => void
  ): Promise<GetRequestValidatorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRequestValidatorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the <a>RequestValidators</a> collection of a given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRequestValidators(
    args: GetRequestValidatorsInput
  ): Promise<GetRequestValidatorsOutput>;
  public getRequestValidators(
    args: GetRequestValidatorsInput,
    cb: (err: any, data?: GetRequestValidatorsOutput) => void
  ): void;
  public getRequestValidators(
    args: GetRequestValidatorsInput,
    cb?: (err: any, data?: GetRequestValidatorsOutput) => void
  ): Promise<GetRequestValidatorsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRequestValidatorsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResource(args: GetResourceInput): Promise<GetResourceOutput>;
  public getResource(
    args: GetResourceInput,
    cb: (err: any, data?: GetResourceOutput) => void
  ): void;
  public getResource(
    args: GetResourceInput,
    cb?: (err: any, data?: GetResourceOutput) => void
  ): Promise<GetResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists information about a collection of <a>Resource</a> resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResources(args: GetResourcesInput): Promise<GetResourcesOutput>;
  public getResources(
    args: GetResourcesInput,
    cb: (err: any, data?: GetResourcesOutput) => void
  ): void;
  public getResources(
    args: GetResourcesInput,
    cb?: (err: any, data?: GetResourcesOutput) => void
  ): Promise<GetResourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the <a>RestApi</a> resource in the collection.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRestApi(args: GetRestApiInput): Promise<GetRestApiOutput>;
  public getRestApi(
    args: GetRestApiInput,
    cb: (err: any, data?: GetRestApiOutput) => void
  ): void;
  public getRestApi(
    args: GetRestApiInput,
    cb?: (err: any, data?: GetRestApiOutput) => void
  ): Promise<GetRestApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRestApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the <a>RestApis</a> resources for your collection.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRestApis(args: GetRestApisInput): Promise<GetRestApisOutput>;
  public getRestApis(
    args: GetRestApisInput,
    cb: (err: any, data?: GetRestApisOutput) => void
  ): void;
  public getRestApis(
    args: GetRestApisInput,
    cb?: (err: any, data?: GetRestApisOutput) => void
  ): Promise<GetRestApisOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRestApisCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Generates a client SDK for a <a>RestApi</a> and <a>Stage</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSdk(args: GetSdkInput): Promise<GetSdkOutput>;
  public getSdk(
    args: GetSdkInput,
    cb: (err: any, data?: GetSdkOutput) => void
  ): void;
  public getSdk(
    args: GetSdkInput,
    cb?: (err: any, data?: GetSdkOutput) => void
  ): Promise<GetSdkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSdkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetSdkType operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSdkType(args: GetSdkTypeInput): Promise<GetSdkTypeOutput>;
  public getSdkType(
    args: GetSdkTypeInput,
    cb: (err: any, data?: GetSdkTypeOutput) => void
  ): void;
  public getSdkType(
    args: GetSdkTypeInput,
    cb?: (err: any, data?: GetSdkTypeOutput) => void
  ): Promise<GetSdkTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSdkTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * GetSdkTypes operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSdkTypes(args: GetSdkTypesInput): Promise<GetSdkTypesOutput>;
  public getSdkTypes(
    args: GetSdkTypesInput,
    cb: (err: any, data?: GetSdkTypesOutput) => void
  ): void;
  public getSdkTypes(
    args: GetSdkTypesInput,
    cb?: (err: any, data?: GetSdkTypesOutput) => void
  ): Promise<GetSdkTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSdkTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about a <a>Stage</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStage(args: GetStageInput): Promise<GetStageOutput>;
  public getStage(
    args: GetStageInput,
    cb: (err: any, data?: GetStageOutput) => void
  ): void;
  public getStage(
    args: GetStageInput,
    cb?: (err: any, data?: GetStageOutput) => void
  ): Promise<GetStageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets information about one or more <a>Stage</a> resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getStages(args: GetStagesInput): Promise<GetStagesOutput>;
  public getStages(
    args: GetStagesInput,
    cb: (err: any, data?: GetStagesOutput) => void
  ): void;
  public getStages(
    args: GetStagesInput,
    cb?: (err: any, data?: GetStagesOutput) => void
  ): Promise<GetStagesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetStagesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the <a>Tags</a> collection for a given resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getTags(args: GetTagsInput): Promise<GetTagsOutput>;
  public getTags(
    args: GetTagsInput,
    cb: (err: any, data?: GetTagsOutput) => void
  ): void;
  public getTags(
    args: GetTagsInput,
    cb?: (err: any, data?: GetTagsOutput) => void
  ): Promise<GetTagsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTagsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the usage data of a usage plan in a specified time interval.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUsage(args: GetUsageInput): Promise<GetUsageOutput>;
  public getUsage(
    args: GetUsageInput,
    cb: (err: any, data?: GetUsageOutput) => void
  ): void;
  public getUsage(
    args: GetUsageInput,
    cb?: (err: any, data?: GetUsageOutput) => void
  ): Promise<GetUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a usage plan of a given plan identifier.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUsagePlan(args: GetUsagePlanInput): Promise<GetUsagePlanOutput>;
  public getUsagePlan(
    args: GetUsagePlanInput,
    cb: (err: any, data?: GetUsagePlanOutput) => void
  ): void;
  public getUsagePlan(
    args: GetUsagePlanInput,
    cb?: (err: any, data?: GetUsagePlanOutput) => void
  ): Promise<GetUsagePlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUsagePlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a usage plan key of a given key identifier.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUsagePlanKey(
    args: GetUsagePlanKeyInput
  ): Promise<GetUsagePlanKeyOutput>;
  public getUsagePlanKey(
    args: GetUsagePlanKeyInput,
    cb: (err: any, data?: GetUsagePlanKeyOutput) => void
  ): void;
  public getUsagePlanKey(
    args: GetUsagePlanKeyInput,
    cb?: (err: any, data?: GetUsagePlanKeyOutput) => void
  ): Promise<GetUsagePlanKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUsagePlanKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets all the usage plan keys representing the API keys added to a specified usage plan.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUsagePlanKeys(
    args: GetUsagePlanKeysInput
  ): Promise<GetUsagePlanKeysOutput>;
  public getUsagePlanKeys(
    args: GetUsagePlanKeysInput,
    cb: (err: any, data?: GetUsagePlanKeysOutput) => void
  ): void;
  public getUsagePlanKeys(
    args: GetUsagePlanKeysInput,
    cb?: (err: any, data?: GetUsagePlanKeysOutput) => void
  ): Promise<GetUsagePlanKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUsagePlanKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets all the usage plans of the caller's account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getUsagePlans(args: GetUsagePlansInput): Promise<GetUsagePlansOutput>;
  public getUsagePlans(
    args: GetUsagePlansInput,
    cb: (err: any, data?: GetUsagePlansOutput) => void
  ): void;
  public getUsagePlans(
    args: GetUsagePlansInput,
    cb?: (err: any, data?: GetUsagePlansOutput) => void
  ): Promise<GetUsagePlansOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetUsagePlansCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a specified VPC link under the caller's account in a region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVpcLink(args: GetVpcLinkInput): Promise<GetVpcLinkOutput>;
  public getVpcLink(
    args: GetVpcLinkInput,
    cb: (err: any, data?: GetVpcLinkOutput) => void
  ): void;
  public getVpcLink(
    args: GetVpcLinkInput,
    cb?: (err: any, data?: GetVpcLinkOutput) => void
  ): Promise<GetVpcLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVpcLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the <a>VpcLinks</a> collection under the caller's account in a selected region.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getVpcLinks(args: GetVpcLinksInput): Promise<GetVpcLinksOutput>;
  public getVpcLinks(
    args: GetVpcLinksInput,
    cb: (err: any, data?: GetVpcLinksOutput) => void
  ): void;
  public getVpcLinks(
    args: GetVpcLinksInput,
    cb?: (err: any, data?: GetVpcLinksOutput) => void
  ): Promise<GetVpcLinksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetVpcLinksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Import API keys from an external source, such as a CSV-formatted file.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importApiKeys(args: ImportApiKeysInput): Promise<ImportApiKeysOutput>;
  public importApiKeys(
    args: ImportApiKeysInput,
    cb: (err: any, data?: ImportApiKeysOutput) => void
  ): void;
  public importApiKeys(
    args: ImportApiKeysInput,
    cb?: (err: any, data?: ImportApiKeysOutput) => void
  ): Promise<ImportApiKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportApiKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * ImportDocumentationParts operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importDocumentationParts(
    args: ImportDocumentationPartsInput
  ): Promise<ImportDocumentationPartsOutput>;
  public importDocumentationParts(
    args: ImportDocumentationPartsInput,
    cb: (err: any, data?: ImportDocumentationPartsOutput) => void
  ): void;
  public importDocumentationParts(
    args: ImportDocumentationPartsInput,
    cb?: (err: any, data?: ImportDocumentationPartsOutput) => void
  ): Promise<ImportDocumentationPartsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportDocumentationPartsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>A feature of the API Gateway control service for creating a new API from an external API definition file.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public importRestApi(args: ImportRestApiInput): Promise<ImportRestApiOutput>;
  public importRestApi(
    args: ImportRestApiInput,
    cb: (err: any, data?: ImportRestApiOutput) => void
  ): void;
  public importRestApi(
    args: ImportRestApiInput,
    cb?: (err: any, data?: ImportRestApiOutput) => void
  ): Promise<ImportRestApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ImportRestApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a customization of a <a>GatewayResponse</a> of a specified response type and status code on the given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putGatewayResponse(
    args: PutGatewayResponseInput
  ): Promise<PutGatewayResponseOutput>;
  public putGatewayResponse(
    args: PutGatewayResponseInput,
    cb: (err: any, data?: PutGatewayResponseOutput) => void
  ): void;
  public putGatewayResponse(
    args: PutGatewayResponseInput,
    cb?: (err: any, data?: PutGatewayResponseOutput) => void
  ): Promise<PutGatewayResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutGatewayResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Sets up a method's integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putIntegration(
    args: PutIntegrationInput
  ): Promise<PutIntegrationOutput>;
  public putIntegration(
    args: PutIntegrationInput,
    cb: (err: any, data?: PutIntegrationOutput) => void
  ): void;
  public putIntegration(
    args: PutIntegrationInput,
    cb?: (err: any, data?: PutIntegrationOutput) => void
  ): Promise<PutIntegrationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutIntegrationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents a put integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putIntegrationResponse(
    args: PutIntegrationResponseInput
  ): Promise<PutIntegrationResponseOutput>;
  public putIntegrationResponse(
    args: PutIntegrationResponseInput,
    cb: (err: any, data?: PutIntegrationResponseOutput) => void
  ): void;
  public putIntegrationResponse(
    args: PutIntegrationResponseInput,
    cb?: (err: any, data?: PutIntegrationResponseOutput) => void
  ): Promise<PutIntegrationResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutIntegrationResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Add a method to an existing <a>Resource</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putMethod(args: PutMethodInput): Promise<PutMethodOutput>;
  public putMethod(
    args: PutMethodInput,
    cb: (err: any, data?: PutMethodOutput) => void
  ): void;
  public putMethod(
    args: PutMethodInput,
    cb?: (err: any, data?: PutMethodOutput) => void
  ): Promise<PutMethodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutMethodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a <a>MethodResponse</a> to an existing <a>Method</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putMethodResponse(
    args: PutMethodResponseInput
  ): Promise<PutMethodResponseOutput>;
  public putMethodResponse(
    args: PutMethodResponseInput,
    cb: (err: any, data?: PutMethodResponseOutput) => void
  ): void;
  public putMethodResponse(
    args: PutMethodResponseInput,
    cb?: (err: any, data?: PutMethodResponseOutput) => void
  ): Promise<PutMethodResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutMethodResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>A feature of the API Gateway control service for updating an existing API with an input of external API definitions. The update can take the form of merging the supplied definition into the existing API or overwriting the existing API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putRestApi(args: PutRestApiInput): Promise<PutRestApiOutput>;
  public putRestApi(
    args: PutRestApiInput,
    cb: (err: any, data?: PutRestApiOutput) => void
  ): void;
  public putRestApi(
    args: PutRestApiInput,
    cb?: (err: any, data?: PutRestApiOutput) => void
  ): Promise<PutRestApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutRestApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds or updates a tag on a given resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public tagResource(args: TagResourceInput): Promise<TagResourceOutput>;
  public tagResource(
    args: TagResourceInput,
    cb: (err: any, data?: TagResourceOutput) => void
  ): void;
  public tagResource(
    args: TagResourceInput,
    cb?: (err: any, data?: TagResourceOutput) => void
  ): Promise<TagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Simulate the execution of an <a>Authorizer</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p> <div class="seeAlso"> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-use-lambda-authorizer.html">Use Lambda Function as Authorizer</a> <a href="https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-integrate-with-cognito.html">Use Cognito User Pool as Authorizer</a> </div>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerInput
  ): Promise<TestInvokeAuthorizerOutput>;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerInput,
    cb: (err: any, data?: TestInvokeAuthorizerOutput) => void
  ): void;
  public testInvokeAuthorizer(
    args: TestInvokeAuthorizerInput,
    cb?: (err: any, data?: TestInvokeAuthorizerOutput) => void
  ): Promise<TestInvokeAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestInvokeAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Simulate the execution of a <a>Method</a> in your <a>RestApi</a> with headers, parameters, and an incoming request body.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public testInvokeMethod(
    args: TestInvokeMethodInput
  ): Promise<TestInvokeMethodOutput>;
  public testInvokeMethod(
    args: TestInvokeMethodInput,
    cb: (err: any, data?: TestInvokeMethodOutput) => void
  ): void;
  public testInvokeMethod(
    args: TestInvokeMethodInput,
    cb?: (err: any, data?: TestInvokeMethodOutput) => void
  ): Promise<TestInvokeMethodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new TestInvokeMethodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes a tag from a given resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public untagResource(args: UntagResourceInput): Promise<UntagResourceOutput>;
  public untagResource(
    args: UntagResourceInput,
    cb: (err: any, data?: UntagResourceOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceInput,
    cb?: (err: any, data?: UntagResourceOutput) => void
  ): Promise<UntagResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UntagResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about the current <a>Account</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAccount(args: UpdateAccountInput): Promise<UpdateAccountOutput>;
  public updateAccount(
    args: UpdateAccountInput,
    cb: (err: any, data?: UpdateAccountOutput) => void
  ): void;
  public updateAccount(
    args: UpdateAccountInput,
    cb?: (err: any, data?: UpdateAccountOutput) => void
  ): Promise<UpdateAccountOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAccountCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about an <a>ApiKey</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApiKey(args: UpdateApiKeyInput): Promise<UpdateApiKeyOutput>;
  public updateApiKey(
    args: UpdateApiKeyInput,
    cb: (err: any, data?: UpdateApiKeyOutput) => void
  ): void;
  public updateApiKey(
    args: UpdateApiKeyInput,
    cb?: (err: any, data?: UpdateApiKeyOutput) => void
  ): Promise<UpdateApiKeyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApiKeyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing <a>Authorizer</a> resource.</p> <div class="seeAlso"><a href="https://docs.aws.amazon.com/cli/latest/reference/apigateway/update-authorizer.html">AWS CLI</a></div>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateAuthorizer(
    args: UpdateAuthorizerInput
  ): Promise<UpdateAuthorizerOutput>;
  public updateAuthorizer(
    args: UpdateAuthorizerInput,
    cb: (err: any, data?: UpdateAuthorizerOutput) => void
  ): void;
  public updateAuthorizer(
    args: UpdateAuthorizerInput,
    cb?: (err: any, data?: UpdateAuthorizerOutput) => void
  ): Promise<UpdateAuthorizerOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateAuthorizerCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about the <a>BasePathMapping</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateBasePathMapping(
    args: UpdateBasePathMappingInput
  ): Promise<UpdateBasePathMappingOutput>;
  public updateBasePathMapping(
    args: UpdateBasePathMappingInput,
    cb: (err: any, data?: UpdateBasePathMappingOutput) => void
  ): void;
  public updateBasePathMapping(
    args: UpdateBasePathMappingInput,
    cb?: (err: any, data?: UpdateBasePathMappingOutput) => void
  ): Promise<UpdateBasePathMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateBasePathMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about an <a>ClientCertificate</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateClientCertificate(
    args: UpdateClientCertificateInput
  ): Promise<UpdateClientCertificateOutput>;
  public updateClientCertificate(
    args: UpdateClientCertificateInput,
    cb: (err: any, data?: UpdateClientCertificateOutput) => void
  ): void;
  public updateClientCertificate(
    args: UpdateClientCertificateInput,
    cb?: (err: any, data?: UpdateClientCertificateOutput) => void
  ): Promise<UpdateClientCertificateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateClientCertificateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about a <a>Deployment</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ServiceUnavailableException} <p>The requested service is not available. For details see the accompanying error message. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDeployment(
    args: UpdateDeploymentInput
  ): Promise<UpdateDeploymentOutput>;
  public updateDeployment(
    args: UpdateDeploymentInput,
    cb: (err: any, data?: UpdateDeploymentOutput) => void
  ): void;
  public updateDeployment(
    args: UpdateDeploymentInput,
    cb?: (err: any, data?: UpdateDeploymentOutput) => void
  ): Promise<UpdateDeploymentOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDeploymentCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * UpdateDocumentationPart operation
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDocumentationPart(
    args: UpdateDocumentationPartInput
  ): Promise<UpdateDocumentationPartOutput>;
  public updateDocumentationPart(
    args: UpdateDocumentationPartInput,
    cb: (err: any, data?: UpdateDocumentationPartOutput) => void
  ): void;
  public updateDocumentationPart(
    args: UpdateDocumentationPartInput,
    cb?: (err: any, data?: UpdateDocumentationPartOutput) => void
  ): Promise<UpdateDocumentationPartOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDocumentationPartCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * UpdateDocumentationVersion operation
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionInput
  ): Promise<UpdateDocumentationVersionOutput>;
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionInput,
    cb: (err: any, data?: UpdateDocumentationVersionOutput) => void
  ): void;
  public updateDocumentationVersion(
    args: UpdateDocumentationVersionInput,
    cb?: (err: any, data?: UpdateDocumentationVersionOutput) => void
  ): Promise<UpdateDocumentationVersionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDocumentationVersionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about the <a>DomainName</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDomainName(
    args: UpdateDomainNameInput
  ): Promise<UpdateDomainNameOutput>;
  public updateDomainName(
    args: UpdateDomainNameInput,
    cb: (err: any, data?: UpdateDomainNameOutput) => void
  ): void;
  public updateDomainName(
    args: UpdateDomainNameInput,
    cb?: (err: any, data?: UpdateDomainNameOutput) => void
  ): Promise<UpdateDomainNameOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDomainNameCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <a>GatewayResponse</a> of a specified response type on the given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGatewayResponse(
    args: UpdateGatewayResponseInput
  ): Promise<UpdateGatewayResponseOutput>;
  public updateGatewayResponse(
    args: UpdateGatewayResponseInput,
    cb: (err: any, data?: UpdateGatewayResponseOutput) => void
  ): void;
  public updateGatewayResponse(
    args: UpdateGatewayResponseInput,
    cb?: (err: any, data?: UpdateGatewayResponseOutput) => void
  ): Promise<UpdateGatewayResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGatewayResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents an update integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIntegration(
    args: UpdateIntegrationInput
  ): Promise<UpdateIntegrationOutput>;
  public updateIntegration(
    args: UpdateIntegrationInput,
    cb: (err: any, data?: UpdateIntegrationOutput) => void
  ): void;
  public updateIntegration(
    args: UpdateIntegrationInput,
    cb?: (err: any, data?: UpdateIntegrationOutput) => void
  ): Promise<UpdateIntegrationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIntegrationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents an update integration response.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseInput
  ): Promise<UpdateIntegrationResponseOutput>;
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseInput,
    cb: (err: any, data?: UpdateIntegrationResponseOutput) => void
  ): void;
  public updateIntegrationResponse(
    args: UpdateIntegrationResponseInput,
    cb?: (err: any, data?: UpdateIntegrationResponseOutput) => void
  ): Promise<UpdateIntegrationResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateIntegrationResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing <a>Method</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMethod(args: UpdateMethodInput): Promise<UpdateMethodOutput>;
  public updateMethod(
    args: UpdateMethodInput,
    cb: (err: any, data?: UpdateMethodOutput) => void
  ): void;
  public updateMethod(
    args: UpdateMethodInput,
    cb?: (err: any, data?: UpdateMethodOutput) => void
  ): Promise<UpdateMethodOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMethodCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing <a>MethodResponse</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {LimitExceededException} <p>The request exceeded the rate limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateMethodResponse(
    args: UpdateMethodResponseInput
  ): Promise<UpdateMethodResponseOutput>;
  public updateMethodResponse(
    args: UpdateMethodResponseInput,
    cb: (err: any, data?: UpdateMethodResponseOutput) => void
  ): void;
  public updateMethodResponse(
    args: UpdateMethodResponseInput,
    cb?: (err: any, data?: UpdateMethodResponseOutput) => void
  ): Promise<UpdateMethodResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateMethodResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about a model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateModel(args: UpdateModelInput): Promise<UpdateModelOutput>;
  public updateModel(
    args: UpdateModelInput,
    cb: (err: any, data?: UpdateModelOutput) => void
  ): void;
  public updateModel(
    args: UpdateModelInput,
    cb?: (err: any, data?: UpdateModelOutput) => void
  ): Promise<UpdateModelOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateModelCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <a>RequestValidator</a> of a given <a>RestApi</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRequestValidator(
    args: UpdateRequestValidatorInput
  ): Promise<UpdateRequestValidatorOutput>;
  public updateRequestValidator(
    args: UpdateRequestValidatorInput,
    cb: (err: any, data?: UpdateRequestValidatorOutput) => void
  ): void;
  public updateRequestValidator(
    args: UpdateRequestValidatorInput,
    cb?: (err: any, data?: UpdateRequestValidatorOutput) => void
  ): Promise<UpdateRequestValidatorOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRequestValidatorCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about a <a>Resource</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResource(
    args: UpdateResourceInput
  ): Promise<UpdateResourceOutput>;
  public updateResource(
    args: UpdateResourceInput,
    cb: (err: any, data?: UpdateResourceOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceInput,
    cb?: (err: any, data?: UpdateResourceOutput) => void
  ): Promise<UpdateResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about the specified API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRestApi(args: UpdateRestApiInput): Promise<UpdateRestApiOutput>;
  public updateRestApi(
    args: UpdateRestApiInput,
    cb: (err: any, data?: UpdateRestApiOutput) => void
  ): void;
  public updateRestApi(
    args: UpdateRestApiInput,
    cb?: (err: any, data?: UpdateRestApiOutput) => void
  ): Promise<UpdateRestApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRestApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Changes information about a <a>Stage</a> resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateStage(args: UpdateStageInput): Promise<UpdateStageOutput>;
  public updateStage(
    args: UpdateStageInput,
    cb: (err: any, data?: UpdateStageOutput) => void
  ): void;
  public updateStage(
    args: UpdateStageInput,
    cb?: (err: any, data?: UpdateStageOutput) => void
  ): Promise<UpdateStageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateStageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Grants a temporary extension to the remaining quota of a usage plan associated with a specified API key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUsage(args: UpdateUsageInput): Promise<UpdateUsageOutput>;
  public updateUsage(
    args: UpdateUsageInput,
    cb: (err: any, data?: UpdateUsageOutput) => void
  ): void;
  public updateUsage(
    args: UpdateUsageInput,
    cb?: (err: any, data?: UpdateUsageOutput) => void
  ): Promise<UpdateUsageOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUsageCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a usage plan of a given plan Id.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateUsagePlan(
    args: UpdateUsagePlanInput
  ): Promise<UpdateUsagePlanOutput>;
  public updateUsagePlan(
    args: UpdateUsagePlanInput,
    cb: (err: any, data?: UpdateUsagePlanOutput) => void
  ): void;
  public updateUsagePlan(
    args: UpdateUsagePlanInput,
    cb?: (err: any, data?: UpdateUsagePlanOutput) => void
  ): Promise<UpdateUsagePlanOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateUsagePlanCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an existing <a>VpcLink</a> of a specified identifier.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {UnauthorizedException} <p>The request is denied because the caller has insufficient permissions.</p>
   *   - {NotFoundException} <p>The requested resource is not found. Make sure that the request URI is correct.</p>
   *   - {BadRequestException} <p>The submitted request is not valid, for example, the input is incomplete or incorrect. See the accompanying error message for details.</p>
   *   - {ConflictException} <p>The request configuration has conflicts. For details, see the accompanying error message.</p>
   *   - {TooManyRequestsException} <p>The request has reached its throttling limit. Retry after the specified time period.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateVpcLink(args: UpdateVpcLinkInput): Promise<UpdateVpcLinkOutput>;
  public updateVpcLink(
    args: UpdateVpcLinkInput,
    cb: (err: any, data?: UpdateVpcLinkOutput) => void
  ): void;
  public updateVpcLink(
    args: UpdateVpcLinkInput,
    cb?: (err: any, data?: UpdateVpcLinkOutput) => void
  ): Promise<UpdateVpcLinkOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateVpcLinkCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
