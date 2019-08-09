import { ApiGatewayV2Client } from "./ApiGatewayV2Client";
import { BadRequestException } from "./types/BadRequestException";
import { ConflictException } from "./types/ConflictException";
import { CreateApiInput } from "./types/CreateApiInput";
import { CreateApiMappingInput } from "./types/CreateApiMappingInput";
import { CreateApiMappingOutput } from "./types/CreateApiMappingOutput";
import { CreateApiOutput } from "./types/CreateApiOutput";
import { CreateAuthorizerInput } from "./types/CreateAuthorizerInput";
import { CreateAuthorizerOutput } from "./types/CreateAuthorizerOutput";
import { CreateDeploymentInput } from "./types/CreateDeploymentInput";
import { CreateDeploymentOutput } from "./types/CreateDeploymentOutput";
import { CreateDomainNameInput } from "./types/CreateDomainNameInput";
import { CreateDomainNameOutput } from "./types/CreateDomainNameOutput";
import { CreateIntegrationInput } from "./types/CreateIntegrationInput";
import { CreateIntegrationOutput } from "./types/CreateIntegrationOutput";
import { CreateIntegrationResponseInput } from "./types/CreateIntegrationResponseInput";
import { CreateIntegrationResponseOutput } from "./types/CreateIntegrationResponseOutput";
import { CreateModelInput } from "./types/CreateModelInput";
import { CreateModelOutput } from "./types/CreateModelOutput";
import { CreateRouteInput } from "./types/CreateRouteInput";
import { CreateRouteOutput } from "./types/CreateRouteOutput";
import { CreateRouteResponseInput } from "./types/CreateRouteResponseInput";
import { CreateRouteResponseOutput } from "./types/CreateRouteResponseOutput";
import { CreateStageInput } from "./types/CreateStageInput";
import { CreateStageOutput } from "./types/CreateStageOutput";
import { DeleteApiInput } from "./types/DeleteApiInput";
import { DeleteApiMappingInput } from "./types/DeleteApiMappingInput";
import { DeleteApiMappingOutput } from "./types/DeleteApiMappingOutput";
import { DeleteApiOutput } from "./types/DeleteApiOutput";
import { DeleteAuthorizerInput } from "./types/DeleteAuthorizerInput";
import { DeleteAuthorizerOutput } from "./types/DeleteAuthorizerOutput";
import { DeleteDeploymentInput } from "./types/DeleteDeploymentInput";
import { DeleteDeploymentOutput } from "./types/DeleteDeploymentOutput";
import { DeleteDomainNameInput } from "./types/DeleteDomainNameInput";
import { DeleteDomainNameOutput } from "./types/DeleteDomainNameOutput";
import { DeleteIntegrationInput } from "./types/DeleteIntegrationInput";
import { DeleteIntegrationOutput } from "./types/DeleteIntegrationOutput";
import { DeleteIntegrationResponseInput } from "./types/DeleteIntegrationResponseInput";
import { DeleteIntegrationResponseOutput } from "./types/DeleteIntegrationResponseOutput";
import { DeleteModelInput } from "./types/DeleteModelInput";
import { DeleteModelOutput } from "./types/DeleteModelOutput";
import { DeleteRouteInput } from "./types/DeleteRouteInput";
import { DeleteRouteOutput } from "./types/DeleteRouteOutput";
import { DeleteRouteResponseInput } from "./types/DeleteRouteResponseInput";
import { DeleteRouteResponseOutput } from "./types/DeleteRouteResponseOutput";
import { DeleteStageInput } from "./types/DeleteStageInput";
import { DeleteStageOutput } from "./types/DeleteStageOutput";
import { GetApiInput } from "./types/GetApiInput";
import { GetApiMappingInput } from "./types/GetApiMappingInput";
import { GetApiMappingOutput } from "./types/GetApiMappingOutput";
import { GetApiMappingsInput } from "./types/GetApiMappingsInput";
import { GetApiMappingsOutput } from "./types/GetApiMappingsOutput";
import { GetApiOutput } from "./types/GetApiOutput";
import { GetApisInput } from "./types/GetApisInput";
import { GetApisOutput } from "./types/GetApisOutput";
import { GetAuthorizerInput } from "./types/GetAuthorizerInput";
import { GetAuthorizerOutput } from "./types/GetAuthorizerOutput";
import { GetAuthorizersInput } from "./types/GetAuthorizersInput";
import { GetAuthorizersOutput } from "./types/GetAuthorizersOutput";
import { GetDeploymentInput } from "./types/GetDeploymentInput";
import { GetDeploymentOutput } from "./types/GetDeploymentOutput";
import { GetDeploymentsInput } from "./types/GetDeploymentsInput";
import { GetDeploymentsOutput } from "./types/GetDeploymentsOutput";
import { GetDomainNameInput } from "./types/GetDomainNameInput";
import { GetDomainNameOutput } from "./types/GetDomainNameOutput";
import { GetDomainNamesInput } from "./types/GetDomainNamesInput";
import { GetDomainNamesOutput } from "./types/GetDomainNamesOutput";
import { GetIntegrationInput } from "./types/GetIntegrationInput";
import { GetIntegrationOutput } from "./types/GetIntegrationOutput";
import { GetIntegrationResponseInput } from "./types/GetIntegrationResponseInput";
import { GetIntegrationResponseOutput } from "./types/GetIntegrationResponseOutput";
import { GetIntegrationResponsesInput } from "./types/GetIntegrationResponsesInput";
import { GetIntegrationResponsesOutput } from "./types/GetIntegrationResponsesOutput";
import { GetIntegrationsInput } from "./types/GetIntegrationsInput";
import { GetIntegrationsOutput } from "./types/GetIntegrationsOutput";
import { GetModelInput } from "./types/GetModelInput";
import { GetModelOutput } from "./types/GetModelOutput";
import { GetModelTemplateInput } from "./types/GetModelTemplateInput";
import { GetModelTemplateOutput } from "./types/GetModelTemplateOutput";
import { GetModelsInput } from "./types/GetModelsInput";
import { GetModelsOutput } from "./types/GetModelsOutput";
import { GetRouteInput } from "./types/GetRouteInput";
import { GetRouteOutput } from "./types/GetRouteOutput";
import { GetRouteResponseInput } from "./types/GetRouteResponseInput";
import { GetRouteResponseOutput } from "./types/GetRouteResponseOutput";
import { GetRouteResponsesInput } from "./types/GetRouteResponsesInput";
import { GetRouteResponsesOutput } from "./types/GetRouteResponsesOutput";
import { GetRoutesInput } from "./types/GetRoutesInput";
import { GetRoutesOutput } from "./types/GetRoutesOutput";
import { GetStageInput } from "./types/GetStageInput";
import { GetStageOutput } from "./types/GetStageOutput";
import { GetStagesInput } from "./types/GetStagesInput";
import { GetStagesOutput } from "./types/GetStagesOutput";
import { GetTagsInput } from "./types/GetTagsInput";
import { GetTagsOutput } from "./types/GetTagsOutput";
import { NotFoundException } from "./types/NotFoundException";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyRequestsException } from "./types/TooManyRequestsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateApiInput } from "./types/UpdateApiInput";
import { UpdateApiMappingInput } from "./types/UpdateApiMappingInput";
import { UpdateApiMappingOutput } from "./types/UpdateApiMappingOutput";
import { UpdateApiOutput } from "./types/UpdateApiOutput";
import { UpdateAuthorizerInput } from "./types/UpdateAuthorizerInput";
import { UpdateAuthorizerOutput } from "./types/UpdateAuthorizerOutput";
import { UpdateDeploymentInput } from "./types/UpdateDeploymentInput";
import { UpdateDeploymentOutput } from "./types/UpdateDeploymentOutput";
import { UpdateDomainNameInput } from "./types/UpdateDomainNameInput";
import { UpdateDomainNameOutput } from "./types/UpdateDomainNameOutput";
import { UpdateIntegrationInput } from "./types/UpdateIntegrationInput";
import { UpdateIntegrationOutput } from "./types/UpdateIntegrationOutput";
import { UpdateIntegrationResponseInput } from "./types/UpdateIntegrationResponseInput";
import { UpdateIntegrationResponseOutput } from "./types/UpdateIntegrationResponseOutput";
import { UpdateModelInput } from "./types/UpdateModelInput";
import { UpdateModelOutput } from "./types/UpdateModelOutput";
import { UpdateRouteInput } from "./types/UpdateRouteInput";
import { UpdateRouteOutput } from "./types/UpdateRouteOutput";
import { UpdateRouteResponseInput } from "./types/UpdateRouteResponseInput";
import { UpdateRouteResponseOutput } from "./types/UpdateRouteResponseOutput";
import { UpdateStageInput } from "./types/UpdateStageInput";
import { UpdateStageOutput } from "./types/UpdateStageOutput";
import { CreateApiCommand } from "./commands/CreateApiCommand";
import { CreateApiMappingCommand } from "./commands/CreateApiMappingCommand";
import { CreateAuthorizerCommand } from "./commands/CreateAuthorizerCommand";
import { CreateDeploymentCommand } from "./commands/CreateDeploymentCommand";
import { CreateDomainNameCommand } from "./commands/CreateDomainNameCommand";
import { CreateIntegrationCommand } from "./commands/CreateIntegrationCommand";
import { CreateIntegrationResponseCommand } from "./commands/CreateIntegrationResponseCommand";
import { CreateModelCommand } from "./commands/CreateModelCommand";
import { CreateRouteCommand } from "./commands/CreateRouteCommand";
import { CreateRouteResponseCommand } from "./commands/CreateRouteResponseCommand";
import { CreateStageCommand } from "./commands/CreateStageCommand";
import { DeleteApiCommand } from "./commands/DeleteApiCommand";
import { DeleteApiMappingCommand } from "./commands/DeleteApiMappingCommand";
import { DeleteAuthorizerCommand } from "./commands/DeleteAuthorizerCommand";
import { DeleteDeploymentCommand } from "./commands/DeleteDeploymentCommand";
import { DeleteDomainNameCommand } from "./commands/DeleteDomainNameCommand";
import { DeleteIntegrationCommand } from "./commands/DeleteIntegrationCommand";
import { DeleteIntegrationResponseCommand } from "./commands/DeleteIntegrationResponseCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteRouteCommand } from "./commands/DeleteRouteCommand";
import { DeleteRouteResponseCommand } from "./commands/DeleteRouteResponseCommand";
import { DeleteStageCommand } from "./commands/DeleteStageCommand";
import { GetApiCommand } from "./commands/GetApiCommand";
import { GetApiMappingCommand } from "./commands/GetApiMappingCommand";
import { GetApiMappingsCommand } from "./commands/GetApiMappingsCommand";
import { GetApisCommand } from "./commands/GetApisCommand";
import { GetAuthorizerCommand } from "./commands/GetAuthorizerCommand";
import { GetAuthorizersCommand } from "./commands/GetAuthorizersCommand";
import { GetDeploymentCommand } from "./commands/GetDeploymentCommand";
import { GetDeploymentsCommand } from "./commands/GetDeploymentsCommand";
import { GetDomainNameCommand } from "./commands/GetDomainNameCommand";
import { GetDomainNamesCommand } from "./commands/GetDomainNamesCommand";
import { GetIntegrationCommand } from "./commands/GetIntegrationCommand";
import { GetIntegrationResponseCommand } from "./commands/GetIntegrationResponseCommand";
import { GetIntegrationResponsesCommand } from "./commands/GetIntegrationResponsesCommand";
import { GetIntegrationsCommand } from "./commands/GetIntegrationsCommand";
import { GetModelCommand } from "./commands/GetModelCommand";
import { GetModelTemplateCommand } from "./commands/GetModelTemplateCommand";
import { GetModelsCommand } from "./commands/GetModelsCommand";
import { GetRouteCommand } from "./commands/GetRouteCommand";
import { GetRouteResponseCommand } from "./commands/GetRouteResponseCommand";
import { GetRouteResponsesCommand } from "./commands/GetRouteResponsesCommand";
import { GetRoutesCommand } from "./commands/GetRoutesCommand";
import { GetStageCommand } from "./commands/GetStageCommand";
import { GetStagesCommand } from "./commands/GetStagesCommand";
import { GetTagsCommand } from "./commands/GetTagsCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateApiCommand } from "./commands/UpdateApiCommand";
import { UpdateApiMappingCommand } from "./commands/UpdateApiMappingCommand";
import { UpdateAuthorizerCommand } from "./commands/UpdateAuthorizerCommand";
import { UpdateDeploymentCommand } from "./commands/UpdateDeploymentCommand";
import { UpdateDomainNameCommand } from "./commands/UpdateDomainNameCommand";
import { UpdateIntegrationCommand } from "./commands/UpdateIntegrationCommand";
import { UpdateIntegrationResponseCommand } from "./commands/UpdateIntegrationResponseCommand";
import { UpdateModelCommand } from "./commands/UpdateModelCommand";
import { UpdateRouteCommand } from "./commands/UpdateRouteCommand";
import { UpdateRouteResponseCommand } from "./commands/UpdateRouteResponseCommand";
import { UpdateStageCommand } from "./commands/UpdateStageCommand";

export class ApiGatewayV2 extends ApiGatewayV2Client {
  /**
   * <p>Creates an Api resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApi(args: CreateApiInput): Promise<CreateApiOutput>;
  public createApi(
    args: CreateApiInput,
    cb: (err: any, data?: CreateApiOutput) => void
  ): void;
  public createApi(
    args: CreateApiInput,
    cb?: (err: any, data?: CreateApiOutput) => void
  ): Promise<CreateApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an API mapping.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createApiMapping(
    args: CreateApiMappingInput
  ): Promise<CreateApiMappingOutput>;
  public createApiMapping(
    args: CreateApiMappingInput,
    cb: (err: any, data?: CreateApiMappingOutput) => void
  ): void;
  public createApiMapping(
    args: CreateApiMappingInput,
    cb?: (err: any, data?: CreateApiMappingOutput) => void
  ): Promise<CreateApiMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateApiMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an Authorizer for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Creates a Deployment for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Creates a domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Creates an Integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIntegration(
    args: CreateIntegrationInput
  ): Promise<CreateIntegrationOutput>;
  public createIntegration(
    args: CreateIntegrationInput,
    cb: (err: any, data?: CreateIntegrationOutput) => void
  ): void;
  public createIntegration(
    args: CreateIntegrationInput,
    cb?: (err: any, data?: CreateIntegrationOutput) => void
  ): Promise<CreateIntegrationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIntegrationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates an IntegrationResponses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createIntegrationResponse(
    args: CreateIntegrationResponseInput
  ): Promise<CreateIntegrationResponseOutput>;
  public createIntegrationResponse(
    args: CreateIntegrationResponseInput,
    cb: (err: any, data?: CreateIntegrationResponseOutput) => void
  ): void;
  public createIntegrationResponse(
    args: CreateIntegrationResponseInput,
    cb?: (err: any, data?: CreateIntegrationResponseOutput) => void
  ): Promise<CreateIntegrationResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateIntegrationResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Model for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Creates a Route for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRoute(args: CreateRouteInput): Promise<CreateRouteOutput>;
  public createRoute(
    args: CreateRouteInput,
    cb: (err: any, data?: CreateRouteOutput) => void
  ): void;
  public createRoute(
    args: CreateRouteInput,
    cb?: (err: any, data?: CreateRouteOutput) => void
  ): Promise<CreateRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a RouteResponse for a Route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createRouteResponse(
    args: CreateRouteResponseInput
  ): Promise<CreateRouteResponseOutput>;
  public createRouteResponse(
    args: CreateRouteResponseInput,
    cb: (err: any, data?: CreateRouteResponseOutput) => void
  ): void;
  public createRouteResponse(
    args: CreateRouteResponseInput,
    cb?: (err: any, data?: CreateRouteResponseOutput) => void
  ): Promise<CreateRouteResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateRouteResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a Stage for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Deletes an Api resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApi(args: DeleteApiInput): Promise<DeleteApiOutput>;
  public deleteApi(
    args: DeleteApiInput,
    cb: (err: any, data?: DeleteApiOutput) => void
  ): void;
  public deleteApi(
    args: DeleteApiInput,
    cb?: (err: any, data?: DeleteApiOutput) => void
  ): Promise<DeleteApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an API mapping.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteApiMapping(
    args: DeleteApiMappingInput
  ): Promise<DeleteApiMappingOutput>;
  public deleteApiMapping(
    args: DeleteApiMappingInput,
    cb: (err: any, data?: DeleteApiMappingOutput) => void
  ): void;
  public deleteApiMapping(
    args: DeleteApiMappingInput,
    cb?: (err: any, data?: DeleteApiMappingOutput) => void
  ): Promise<DeleteApiMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteApiMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an Authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Deletes a Deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Deletes a domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Deletes an Integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Deletes an IntegrationResponses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Deletes a Model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Deletes a Route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRoute(args: DeleteRouteInput): Promise<DeleteRouteOutput>;
  public deleteRoute(
    args: DeleteRouteInput,
    cb: (err: any, data?: DeleteRouteOutput) => void
  ): void;
  public deleteRoute(
    args: DeleteRouteInput,
    cb?: (err: any, data?: DeleteRouteOutput) => void
  ): Promise<DeleteRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a RouteResponse.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteRouteResponse(
    args: DeleteRouteResponseInput
  ): Promise<DeleteRouteResponseOutput>;
  public deleteRouteResponse(
    args: DeleteRouteResponseInput,
    cb: (err: any, data?: DeleteRouteResponseOutput) => void
  ): void;
  public deleteRouteResponse(
    args: DeleteRouteResponseInput,
    cb?: (err: any, data?: DeleteRouteResponseOutput) => void
  ): Promise<DeleteRouteResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteRouteResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a Stage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets an Api resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApi(args: GetApiInput): Promise<GetApiOutput>;
  public getApi(
    args: GetApiInput,
    cb: (err: any, data?: GetApiOutput) => void
  ): void;
  public getApi(
    args: GetApiInput,
    cb?: (err: any, data?: GetApiOutput) => void
  ): Promise<GetApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The API mapping.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApiMapping(args: GetApiMappingInput): Promise<GetApiMappingOutput>;
  public getApiMapping(
    args: GetApiMappingInput,
    cb: (err: any, data?: GetApiMappingOutput) => void
  ): void;
  public getApiMapping(
    args: GetApiMappingInput,
    cb?: (err: any, data?: GetApiMappingOutput) => void
  ): Promise<GetApiMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApiMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The API mappings.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApiMappings(
    args: GetApiMappingsInput
  ): Promise<GetApiMappingsOutput>;
  public getApiMappings(
    args: GetApiMappingsInput,
    cb: (err: any, data?: GetApiMappingsOutput) => void
  ): void;
  public getApiMappings(
    args: GetApiMappingsInput,
    cb?: (err: any, data?: GetApiMappingsOutput) => void
  ): Promise<GetApiMappingsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApiMappingsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a collection of Api resources.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getApis(args: GetApisInput): Promise<GetApisOutput>;
  public getApis(
    args: GetApisInput,
    cb: (err: any, data?: GetApisOutput) => void
  ): void;
  public getApis(
    args: GetApisInput,
    cb?: (err: any, data?: GetApisOutput) => void
  ): Promise<GetApisOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetApisCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets an Authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets the Authorizers for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
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
   * <p>Gets a Deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets the Deployments for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
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
   * <p>Gets a domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets the domain names for an AWS account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
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
   * <p>Gets an Integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets an IntegrationResponses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets the IntegrationResponses for an Integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntegrationResponses(
    args: GetIntegrationResponsesInput
  ): Promise<GetIntegrationResponsesOutput>;
  public getIntegrationResponses(
    args: GetIntegrationResponsesInput,
    cb: (err: any, data?: GetIntegrationResponsesOutput) => void
  ): void;
  public getIntegrationResponses(
    args: GetIntegrationResponsesInput,
    cb?: (err: any, data?: GetIntegrationResponsesOutput) => void
  ): Promise<GetIntegrationResponsesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntegrationResponsesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the Integrations for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntegrations(
    args: GetIntegrationsInput
  ): Promise<GetIntegrationsOutput>;
  public getIntegrations(
    args: GetIntegrationsInput,
    cb: (err: any, data?: GetIntegrationsOutput) => void
  ): void;
  public getIntegrations(
    args: GetIntegrationsInput,
    cb?: (err: any, data?: GetIntegrationsOutput) => void
  ): Promise<GetIntegrationsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntegrationsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a Model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets a model template.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets the Models for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
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
   * <p>Gets a Route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRoute(args: GetRouteInput): Promise<GetRouteOutput>;
  public getRoute(
    args: GetRouteInput,
    cb: (err: any, data?: GetRouteOutput) => void
  ): void;
  public getRoute(
    args: GetRouteInput,
    cb?: (err: any, data?: GetRouteOutput) => void
  ): Promise<GetRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a RouteResponse.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRouteResponse(
    args: GetRouteResponseInput
  ): Promise<GetRouteResponseOutput>;
  public getRouteResponse(
    args: GetRouteResponseInput,
    cb: (err: any, data?: GetRouteResponseOutput) => void
  ): void;
  public getRouteResponse(
    args: GetRouteResponseInput,
    cb?: (err: any, data?: GetRouteResponseOutput) => void
  ): Promise<GetRouteResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRouteResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the RouteResponses for a Route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRouteResponses(
    args: GetRouteResponsesInput
  ): Promise<GetRouteResponsesOutput>;
  public getRouteResponses(
    args: GetRouteResponsesInput,
    cb: (err: any, data?: GetRouteResponsesOutput) => void
  ): void;
  public getRouteResponses(
    args: GetRouteResponsesInput,
    cb?: (err: any, data?: GetRouteResponsesOutput) => void
  ): Promise<GetRouteResponsesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRouteResponsesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the Routes for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getRoutes(args: GetRoutesInput): Promise<GetRoutesOutput>;
  public getRoutes(
    args: GetRoutesInput,
    cb: (err: any, data?: GetRoutesOutput) => void
  ): void;
  public getRoutes(
    args: GetRoutesInput,
    cb?: (err: any, data?: GetRoutesOutput) => void
  ): Promise<GetRoutesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetRoutesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a Stage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
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
   * <p>Gets the Stages for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
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
   * <p>Gets the Tags for an API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Tag an APIGW resource</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Untag an APIGW resource</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates an Api resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApi(args: UpdateApiInput): Promise<UpdateApiOutput>;
  public updateApi(
    args: UpdateApiInput,
    cb: (err: any, data?: UpdateApiOutput) => void
  ): void;
  public updateApi(
    args: UpdateApiInput,
    cb?: (err: any, data?: UpdateApiOutput) => void
  ): Promise<UpdateApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>The API mapping.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateApiMapping(
    args: UpdateApiMappingInput
  ): Promise<UpdateApiMappingOutput>;
  public updateApiMapping(
    args: UpdateApiMappingInput,
    cb: (err: any, data?: UpdateApiMappingOutput) => void
  ): void;
  public updateApiMapping(
    args: UpdateApiMappingInput,
    cb?: (err: any, data?: UpdateApiMappingOutput) => void
  ): Promise<UpdateApiMappingOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateApiMappingCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates an Authorizer.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates a Deployment.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates a domain name.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates an Integration.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates an IntegrationResponses.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates a Model.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
   * <p>Updates a Route.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRoute(args: UpdateRouteInput): Promise<UpdateRouteOutput>;
  public updateRoute(
    args: UpdateRouteInput,
    cb: (err: any, data?: UpdateRouteOutput) => void
  ): void;
  public updateRoute(
    args: UpdateRouteInput,
    cb?: (err: any, data?: UpdateRouteOutput) => void
  ): Promise<UpdateRouteOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRouteCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a RouteResponse.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateRouteResponse(
    args: UpdateRouteResponseInput
  ): Promise<UpdateRouteResponseOutput>;
  public updateRouteResponse(
    args: UpdateRouteResponseInput,
    cb: (err: any, data?: UpdateRouteResponseOutput) => void
  ): void;
  public updateRouteResponse(
    args: UpdateRouteResponseInput,
    cb?: (err: any, data?: UpdateRouteResponseOutput) => void
  ): Promise<UpdateRouteResponseOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateRouteResponseCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a Stage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {NotFoundException} <p>The resource specified in the request was not found. See the message
   field for more information.</p>
   *   - {TooManyRequestsException} <p>A limit has been exceeded. See the accompanying error message for details.</p>
   *   - {BadRequestException} <p>The request is not valid, for example, the input is incomplete or incorrect. See
   the accompanying error message for details.</p>
   *   - {ConflictException} <p>The requested operation would cause a conflict with the current state of a service
   resource associated with the request. Resolve the conflict before retrying this
   request. See the accompanying error message for details.</p>
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
}
