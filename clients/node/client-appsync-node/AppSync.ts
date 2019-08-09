import { AppSyncClient } from "./AppSyncClient";
import { AccessDeniedException } from "./types/AccessDeniedException";
import { ApiKeyLimitExceededException } from "./types/ApiKeyLimitExceededException";
import { ApiKeyValidityOutOfBoundsException } from "./types/ApiKeyValidityOutOfBoundsException";
import { ApiLimitExceededException } from "./types/ApiLimitExceededException";
import { BadRequestException } from "./types/BadRequestException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateApiKeyInput } from "./types/CreateApiKeyInput";
import { CreateApiKeyOutput } from "./types/CreateApiKeyOutput";
import { CreateDataSourceInput } from "./types/CreateDataSourceInput";
import { CreateDataSourceOutput } from "./types/CreateDataSourceOutput";
import { CreateFunctionInput } from "./types/CreateFunctionInput";
import { CreateFunctionOutput } from "./types/CreateFunctionOutput";
import { CreateGraphqlApiInput } from "./types/CreateGraphqlApiInput";
import { CreateGraphqlApiOutput } from "./types/CreateGraphqlApiOutput";
import { CreateResolverInput } from "./types/CreateResolverInput";
import { CreateResolverOutput } from "./types/CreateResolverOutput";
import { CreateTypeInput } from "./types/CreateTypeInput";
import { CreateTypeOutput } from "./types/CreateTypeOutput";
import { DeleteApiKeyInput } from "./types/DeleteApiKeyInput";
import { DeleteApiKeyOutput } from "./types/DeleteApiKeyOutput";
import { DeleteDataSourceInput } from "./types/DeleteDataSourceInput";
import { DeleteDataSourceOutput } from "./types/DeleteDataSourceOutput";
import { DeleteFunctionInput } from "./types/DeleteFunctionInput";
import { DeleteFunctionOutput } from "./types/DeleteFunctionOutput";
import { DeleteGraphqlApiInput } from "./types/DeleteGraphqlApiInput";
import { DeleteGraphqlApiOutput } from "./types/DeleteGraphqlApiOutput";
import { DeleteResolverInput } from "./types/DeleteResolverInput";
import { DeleteResolverOutput } from "./types/DeleteResolverOutput";
import { DeleteTypeInput } from "./types/DeleteTypeInput";
import { DeleteTypeOutput } from "./types/DeleteTypeOutput";
import { GetDataSourceInput } from "./types/GetDataSourceInput";
import { GetDataSourceOutput } from "./types/GetDataSourceOutput";
import { GetFunctionInput } from "./types/GetFunctionInput";
import { GetFunctionOutput } from "./types/GetFunctionOutput";
import { GetGraphqlApiInput } from "./types/GetGraphqlApiInput";
import { GetGraphqlApiOutput } from "./types/GetGraphqlApiOutput";
import { GetIntrospectionSchemaInput } from "./types/GetIntrospectionSchemaInput";
import { GetIntrospectionSchemaOutput } from "./types/GetIntrospectionSchemaOutput";
import { GetResolverInput } from "./types/GetResolverInput";
import { GetResolverOutput } from "./types/GetResolverOutput";
import { GetSchemaCreationStatusInput } from "./types/GetSchemaCreationStatusInput";
import { GetSchemaCreationStatusOutput } from "./types/GetSchemaCreationStatusOutput";
import { GetTypeInput } from "./types/GetTypeInput";
import { GetTypeOutput } from "./types/GetTypeOutput";
import { GraphQLSchemaException } from "./types/GraphQLSchemaException";
import { InternalFailureException } from "./types/InternalFailureException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListApiKeysInput } from "./types/ListApiKeysInput";
import { ListApiKeysOutput } from "./types/ListApiKeysOutput";
import { ListDataSourcesInput } from "./types/ListDataSourcesInput";
import { ListDataSourcesOutput } from "./types/ListDataSourcesOutput";
import { ListFunctionsInput } from "./types/ListFunctionsInput";
import { ListFunctionsOutput } from "./types/ListFunctionsOutput";
import { ListGraphqlApisInput } from "./types/ListGraphqlApisInput";
import { ListGraphqlApisOutput } from "./types/ListGraphqlApisOutput";
import { ListResolversByFunctionInput } from "./types/ListResolversByFunctionInput";
import { ListResolversByFunctionOutput } from "./types/ListResolversByFunctionOutput";
import { ListResolversInput } from "./types/ListResolversInput";
import { ListResolversOutput } from "./types/ListResolversOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListTypesInput } from "./types/ListTypesInput";
import { ListTypesOutput } from "./types/ListTypesOutput";
import { NotFoundException } from "./types/NotFoundException";
import { StartSchemaCreationInput } from "./types/StartSchemaCreationInput";
import { StartSchemaCreationOutput } from "./types/StartSchemaCreationOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { UnauthorizedException } from "./types/UnauthorizedException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdateApiKeyInput } from "./types/UpdateApiKeyInput";
import { UpdateApiKeyOutput } from "./types/UpdateApiKeyOutput";
import { UpdateDataSourceInput } from "./types/UpdateDataSourceInput";
import { UpdateDataSourceOutput } from "./types/UpdateDataSourceOutput";
import { UpdateFunctionInput } from "./types/UpdateFunctionInput";
import { UpdateFunctionOutput } from "./types/UpdateFunctionOutput";
import { UpdateGraphqlApiInput } from "./types/UpdateGraphqlApiInput";
import { UpdateGraphqlApiOutput } from "./types/UpdateGraphqlApiOutput";
import { UpdateResolverInput } from "./types/UpdateResolverInput";
import { UpdateResolverOutput } from "./types/UpdateResolverOutput";
import { UpdateTypeInput } from "./types/UpdateTypeInput";
import { UpdateTypeOutput } from "./types/UpdateTypeOutput";
import { CreateApiKeyCommand } from "./commands/CreateApiKeyCommand";
import { CreateDataSourceCommand } from "./commands/CreateDataSourceCommand";
import { CreateFunctionCommand } from "./commands/CreateFunctionCommand";
import { CreateGraphqlApiCommand } from "./commands/CreateGraphqlApiCommand";
import { CreateResolverCommand } from "./commands/CreateResolverCommand";
import { CreateTypeCommand } from "./commands/CreateTypeCommand";
import { DeleteApiKeyCommand } from "./commands/DeleteApiKeyCommand";
import { DeleteDataSourceCommand } from "./commands/DeleteDataSourceCommand";
import { DeleteFunctionCommand } from "./commands/DeleteFunctionCommand";
import { DeleteGraphqlApiCommand } from "./commands/DeleteGraphqlApiCommand";
import { DeleteResolverCommand } from "./commands/DeleteResolverCommand";
import { DeleteTypeCommand } from "./commands/DeleteTypeCommand";
import { GetDataSourceCommand } from "./commands/GetDataSourceCommand";
import { GetFunctionCommand } from "./commands/GetFunctionCommand";
import { GetGraphqlApiCommand } from "./commands/GetGraphqlApiCommand";
import { GetIntrospectionSchemaCommand } from "./commands/GetIntrospectionSchemaCommand";
import { GetResolverCommand } from "./commands/GetResolverCommand";
import { GetSchemaCreationStatusCommand } from "./commands/GetSchemaCreationStatusCommand";
import { GetTypeCommand } from "./commands/GetTypeCommand";
import { ListApiKeysCommand } from "./commands/ListApiKeysCommand";
import { ListDataSourcesCommand } from "./commands/ListDataSourcesCommand";
import { ListFunctionsCommand } from "./commands/ListFunctionsCommand";
import { ListGraphqlApisCommand } from "./commands/ListGraphqlApisCommand";
import { ListResolversByFunctionCommand } from "./commands/ListResolversByFunctionCommand";
import { ListResolversCommand } from "./commands/ListResolversCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListTypesCommand } from "./commands/ListTypesCommand";
import { StartSchemaCreationCommand } from "./commands/StartSchemaCreationCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdateApiKeyCommand } from "./commands/UpdateApiKeyCommand";
import { UpdateDataSourceCommand } from "./commands/UpdateDataSourceCommand";
import { UpdateFunctionCommand } from "./commands/UpdateFunctionCommand";
import { UpdateGraphqlApiCommand } from "./commands/UpdateGraphqlApiCommand";
import { UpdateResolverCommand } from "./commands/UpdateResolverCommand";
import { UpdateTypeCommand } from "./commands/UpdateTypeCommand";

export class AppSync extends AppSyncClient {
  /**
   * <p>Creates a unique key that you can distribute to clients who are executing your API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {ApiKeyLimitExceededException} <p>The API key exceeded a limit. Try your request again.</p>
   *   - {ApiKeyValidityOutOfBoundsException} <p>The API key expiration must be set to a value between 1 and 365 days from creation (for <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
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
   * <p>Creates a <code>DataSource</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createDataSource(
    args: CreateDataSourceInput
  ): Promise<CreateDataSourceOutput>;
  public createDataSource(
    args: CreateDataSourceInput,
    cb: (err: any, data?: CreateDataSourceOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceInput,
    cb?: (err: any, data?: CreateDataSourceOutput) => void
  ): Promise<CreateDataSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateDataSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>Function</code> object.</p> <p>A function is a reusable entity. Multiple functions can be used to compose the resolver logic.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createFunction(
    args: CreateFunctionInput
  ): Promise<CreateFunctionOutput>;
  public createFunction(
    args: CreateFunctionInput,
    cb: (err: any, data?: CreateFunctionOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionInput,
    cb?: (err: any, data?: CreateFunctionOutput) => void
  ): Promise<CreateFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>GraphqlApi</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {ApiLimitExceededException} <p>The GraphQL API exceeded a limit. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createGraphqlApi(
    args: CreateGraphqlApiInput
  ): Promise<CreateGraphqlApiOutput>;
  public createGraphqlApi(
    args: CreateGraphqlApiInput,
    cb: (err: any, data?: CreateGraphqlApiOutput) => void
  ): void;
  public createGraphqlApi(
    args: CreateGraphqlApiInput,
    cb?: (err: any, data?: CreateGraphqlApiOutput) => void
  ): Promise<CreateGraphqlApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateGraphqlApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>Resolver</code> object.</p> <p>A resolver converts incoming requests into a format that a data source can understand and converts the data source's responses into GraphQL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createResolver(
    args: CreateResolverInput
  ): Promise<CreateResolverOutput>;
  public createResolver(
    args: CreateResolverInput,
    cb: (err: any, data?: CreateResolverOutput) => void
  ): void;
  public createResolver(
    args: CreateResolverInput,
    cb?: (err: any, data?: CreateResolverOutput) => void
  ): Promise<CreateResolverOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateResolverCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a <code>Type</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createType(args: CreateTypeInput): Promise<CreateTypeOutput>;
  public createType(
    args: CreateTypeInput,
    cb: (err: any, data?: CreateTypeOutput) => void
  ): void;
  public createType(
    args: CreateTypeInput,
    cb?: (err: any, data?: CreateTypeOutput) => void
  ): Promise<CreateTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes an API key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
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
   * <p>Deletes a <code>DataSource</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteDataSource(
    args: DeleteDataSourceInput
  ): Promise<DeleteDataSourceOutput>;
  public deleteDataSource(
    args: DeleteDataSourceInput,
    cb: (err: any, data?: DeleteDataSourceOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceInput,
    cb?: (err: any, data?: DeleteDataSourceOutput) => void
  ): Promise<DeleteDataSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteDataSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <code>Function</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteFunction(
    args: DeleteFunctionInput
  ): Promise<DeleteFunctionOutput>;
  public deleteFunction(
    args: DeleteFunctionInput,
    cb: (err: any, data?: DeleteFunctionOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionInput,
    cb?: (err: any, data?: DeleteFunctionOutput) => void
  ): Promise<DeleteFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <code>GraphqlApi</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {AccessDeniedException} <p>You do not have access to perform this operation on this resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteGraphqlApi(
    args: DeleteGraphqlApiInput
  ): Promise<DeleteGraphqlApiOutput>;
  public deleteGraphqlApi(
    args: DeleteGraphqlApiInput,
    cb: (err: any, data?: DeleteGraphqlApiOutput) => void
  ): void;
  public deleteGraphqlApi(
    args: DeleteGraphqlApiInput,
    cb?: (err: any, data?: DeleteGraphqlApiOutput) => void
  ): Promise<DeleteGraphqlApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteGraphqlApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <code>Resolver</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteResolver(
    args: DeleteResolverInput
  ): Promise<DeleteResolverOutput>;
  public deleteResolver(
    args: DeleteResolverInput,
    cb: (err: any, data?: DeleteResolverOutput) => void
  ): void;
  public deleteResolver(
    args: DeleteResolverInput,
    cb?: (err: any, data?: DeleteResolverOutput) => void
  ): Promise<DeleteResolverOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteResolverCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a <code>Type</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteType(args: DeleteTypeInput): Promise<DeleteTypeOutput>;
  public deleteType(
    args: DeleteTypeInput,
    cb: (err: any, data?: DeleteTypeOutput) => void
  ): void;
  public deleteType(
    args: DeleteTypeInput,
    cb?: (err: any, data?: DeleteTypeOutput) => void
  ): Promise<DeleteTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a <code>DataSource</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getDataSource(args: GetDataSourceInput): Promise<GetDataSourceOutput>;
  public getDataSource(
    args: GetDataSourceInput,
    cb: (err: any, data?: GetDataSourceOutput) => void
  ): void;
  public getDataSource(
    args: GetDataSourceInput,
    cb?: (err: any, data?: GetDataSourceOutput) => void
  ): Promise<GetDataSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetDataSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Get a <code>Function</code>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getFunction(args: GetFunctionInput): Promise<GetFunctionOutput>;
  public getFunction(
    args: GetFunctionInput,
    cb: (err: any, data?: GetFunctionOutput) => void
  ): void;
  public getFunction(
    args: GetFunctionInput,
    cb?: (err: any, data?: GetFunctionOutput) => void
  ): Promise<GetFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a <code>GraphqlApi</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {AccessDeniedException} <p>You do not have access to perform this operation on this resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getGraphqlApi(args: GetGraphqlApiInput): Promise<GetGraphqlApiOutput>;
  public getGraphqlApi(
    args: GetGraphqlApiInput,
    cb: (err: any, data?: GetGraphqlApiOutput) => void
  ): void;
  public getGraphqlApi(
    args: GetGraphqlApiInput,
    cb?: (err: any, data?: GetGraphqlApiOutput) => void
  ): Promise<GetGraphqlApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetGraphqlApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the introspection schema for a GraphQL API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {GraphQLSchemaException} <p>The GraphQL schema is not valid.</p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaInput
  ): Promise<GetIntrospectionSchemaOutput>;
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaInput,
    cb: (err: any, data?: GetIntrospectionSchemaOutput) => void
  ): void;
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaInput,
    cb?: (err: any, data?: GetIntrospectionSchemaOutput) => void
  ): Promise<GetIntrospectionSchemaOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetIntrospectionSchemaCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a <code>Resolver</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getResolver(args: GetResolverInput): Promise<GetResolverOutput>;
  public getResolver(
    args: GetResolverInput,
    cb: (err: any, data?: GetResolverOutput) => void
  ): void;
  public getResolver(
    args: GetResolverInput,
    cb?: (err: any, data?: GetResolverOutput) => void
  ): Promise<GetResolverOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetResolverCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves the current status of a schema creation operation.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusInput
  ): Promise<GetSchemaCreationStatusOutput>;
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusInput,
    cb: (err: any, data?: GetSchemaCreationStatusOutput) => void
  ): void;
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusInput,
    cb?: (err: any, data?: GetSchemaCreationStatusOutput) => void
  ): Promise<GetSchemaCreationStatusOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetSchemaCreationStatusCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Retrieves a <code>Type</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getType(args: GetTypeInput): Promise<GetTypeOutput>;
  public getType(
    args: GetTypeInput,
    cb: (err: any, data?: GetTypeOutput) => void
  ): void;
  public getType(
    args: GetTypeInput,
    cb?: (err: any, data?: GetTypeOutput) => void
  ): Promise<GetTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the API keys for a given API.</p> <note> <p>API keys are deleted automatically sometime after they expire. However, they may still be included in the response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually delete a key before it's automatically deleted.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listApiKeys(args: ListApiKeysInput): Promise<ListApiKeysOutput>;
  public listApiKeys(
    args: ListApiKeysInput,
    cb: (err: any, data?: ListApiKeysOutput) => void
  ): void;
  public listApiKeys(
    args: ListApiKeysInput,
    cb?: (err: any, data?: ListApiKeysOutput) => void
  ): Promise<ListApiKeysOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListApiKeysCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the data sources for a given API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listDataSources(
    args: ListDataSourcesInput
  ): Promise<ListDataSourcesOutput>;
  public listDataSources(
    args: ListDataSourcesInput,
    cb: (err: any, data?: ListDataSourcesOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesInput,
    cb?: (err: any, data?: ListDataSourcesOutput) => void
  ): Promise<ListDataSourcesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListDataSourcesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List multiple functions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listFunctions(args: ListFunctionsInput): Promise<ListFunctionsOutput>;
  public listFunctions(
    args: ListFunctionsInput,
    cb: (err: any, data?: ListFunctionsOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsInput,
    cb?: (err: any, data?: ListFunctionsOutput) => void
  ): Promise<ListFunctionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListFunctionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists your GraphQL APIs.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listGraphqlApis(
    args: ListGraphqlApisInput
  ): Promise<ListGraphqlApisOutput>;
  public listGraphqlApis(
    args: ListGraphqlApisInput,
    cb: (err: any, data?: ListGraphqlApisOutput) => void
  ): void;
  public listGraphqlApis(
    args: ListGraphqlApisInput,
    cb?: (err: any, data?: ListGraphqlApisOutput) => void
  ): Promise<ListGraphqlApisOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListGraphqlApisCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the resolvers for a given API and type.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResolvers(args: ListResolversInput): Promise<ListResolversOutput>;
  public listResolvers(
    args: ListResolversInput,
    cb: (err: any, data?: ListResolversOutput) => void
  ): void;
  public listResolvers(
    args: ListResolversInput,
    cb?: (err: any, data?: ListResolversOutput) => void
  ): Promise<ListResolversOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResolversCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>List the resolvers that are associated with a specific function.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listResolversByFunction(
    args: ListResolversByFunctionInput
  ): Promise<ListResolversByFunctionOutput>;
  public listResolversByFunction(
    args: ListResolversByFunctionInput,
    cb: (err: any, data?: ListResolversByFunctionOutput) => void
  ): void;
  public listResolversByFunction(
    args: ListResolversByFunctionInput,
    cb?: (err: any, data?: ListResolversByFunctionOutput) => void
  ): Promise<ListResolversByFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListResolversByFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the tags for a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {AccessDeniedException} <p>You do not have access to perform this operation on this resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTagsForResource(
    args: ListTagsForResourceInput
  ): Promise<ListTagsForResourceOutput>;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb: (err: any, data?: ListTagsForResourceOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceInput,
    cb?: (err: any, data?: ListTagsForResourceOutput) => void
  ): Promise<ListTagsForResourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTagsForResourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the types for a given API.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listTypes(args: ListTypesInput): Promise<ListTypesOutput>;
  public listTypes(
    args: ListTypesInput,
    cb: (err: any, data?: ListTypesOutput) => void
  ): void;
  public listTypes(
    args: ListTypesInput,
    cb?: (err: any, data?: ListTypesOutput) => void
  ): Promise<ListTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds a new schema to your GraphQL API.</p> <p>This operation is asynchronous. Use to determine when it has completed.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startSchemaCreation(
    args: StartSchemaCreationInput
  ): Promise<StartSchemaCreationOutput>;
  public startSchemaCreation(
    args: StartSchemaCreationInput,
    cb: (err: any, data?: StartSchemaCreationOutput) => void
  ): void;
  public startSchemaCreation(
    args: StartSchemaCreationInput,
    cb?: (err: any, data?: StartSchemaCreationOutput) => void
  ): Promise<StartSchemaCreationOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartSchemaCreationCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Tags a resource with user-supplied tags.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {AccessDeniedException} <p>You do not have access to perform this operation on this resource.</p>
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
   * <p>Untags a resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {AccessDeniedException} <p>You do not have access to perform this operation on this resource.</p>
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
   * <p>Updates an API key.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {LimitExceededException} <p>The request exceeded a limit. Try your request again.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {ApiKeyValidityOutOfBoundsException} <p>The API key expiration must be set to a value between 1 and 365 days from creation (for <code>CreateApiKey</code>) or from update (for <code>UpdateApiKey</code>).</p>
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
   * <p>Updates a <code>DataSource</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateDataSource(
    args: UpdateDataSourceInput
  ): Promise<UpdateDataSourceOutput>;
  public updateDataSource(
    args: UpdateDataSourceInput,
    cb: (err: any, data?: UpdateDataSourceOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceInput,
    cb?: (err: any, data?: UpdateDataSourceOutput) => void
  ): Promise<UpdateDataSourceOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateDataSourceCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <code>Function</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateFunction(
    args: UpdateFunctionInput
  ): Promise<UpdateFunctionOutput>;
  public updateFunction(
    args: UpdateFunctionInput,
    cb: (err: any, data?: UpdateFunctionOutput) => void
  ): void;
  public updateFunction(
    args: UpdateFunctionInput,
    cb?: (err: any, data?: UpdateFunctionOutput) => void
  ): Promise<UpdateFunctionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateFunctionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <code>GraphqlApi</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {AccessDeniedException} <p>You do not have access to perform this operation on this resource.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateGraphqlApi(
    args: UpdateGraphqlApiInput
  ): Promise<UpdateGraphqlApiOutput>;
  public updateGraphqlApi(
    args: UpdateGraphqlApiInput,
    cb: (err: any, data?: UpdateGraphqlApiOutput) => void
  ): void;
  public updateGraphqlApi(
    args: UpdateGraphqlApiInput,
    cb?: (err: any, data?: UpdateGraphqlApiOutput) => void
  ): Promise<UpdateGraphqlApiOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateGraphqlApiCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <code>Resolver</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateResolver(
    args: UpdateResolverInput
  ): Promise<UpdateResolverOutput>;
  public updateResolver(
    args: UpdateResolverInput,
    cb: (err: any, data?: UpdateResolverOutput) => void
  ): void;
  public updateResolver(
    args: UpdateResolverInput,
    cb?: (err: any, data?: UpdateResolverOutput) => void
  ): Promise<UpdateResolverOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateResolverCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Updates a <code>Type</code> object.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {BadRequestException} <p>The request is not well formed. For example, a value is invalid or a required field is missing. Check the field values, and then try again. </p>
   *   - {ConcurrentModificationException} <p>Another modification is in progress at this time and it must complete before you can make your change. </p>
   *   - {NotFoundException} <p>The resource specified in the request was not found. Check the resource, and then try again.</p>
   *   - {UnauthorizedException} <p>You are not authorized to perform this operation.</p>
   *   - {InternalFailureException} <p>An internal AWS AppSync error occurred. Try your request again.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updateType(args: UpdateTypeInput): Promise<UpdateTypeOutput>;
  public updateType(
    args: UpdateTypeInput,
    cb: (err: any, data?: UpdateTypeOutput) => void
  ): void;
  public updateType(
    args: UpdateTypeInput,
    cb?: (err: any, data?: UpdateTypeOutput) => void
  ): Promise<UpdateTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdateTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
