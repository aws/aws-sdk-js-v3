// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppSyncClient } from "./AppSyncClient";
import {
  AssociateApiCommand,
  AssociateApiCommandInput,
  AssociateApiCommandOutput,
} from "./commands/AssociateApiCommand";
import {
  CreateApiCacheCommand,
  CreateApiCacheCommandInput,
  CreateApiCacheCommandOutput,
} from "./commands/CreateApiCacheCommand";
import {
  CreateApiKeyCommand,
  CreateApiKeyCommandInput,
  CreateApiKeyCommandOutput,
} from "./commands/CreateApiKeyCommand";
import {
  CreateDataSourceCommand,
  CreateDataSourceCommandInput,
  CreateDataSourceCommandOutput,
} from "./commands/CreateDataSourceCommand";
import {
  CreateDomainNameCommand,
  CreateDomainNameCommandInput,
  CreateDomainNameCommandOutput,
} from "./commands/CreateDomainNameCommand";
import {
  CreateFunctionCommand,
  CreateFunctionCommandInput,
  CreateFunctionCommandOutput,
} from "./commands/CreateFunctionCommand";
import {
  CreateGraphqlApiCommand,
  CreateGraphqlApiCommandInput,
  CreateGraphqlApiCommandOutput,
} from "./commands/CreateGraphqlApiCommand";
import {
  CreateResolverCommand,
  CreateResolverCommandInput,
  CreateResolverCommandOutput,
} from "./commands/CreateResolverCommand";
import { CreateTypeCommand, CreateTypeCommandInput, CreateTypeCommandOutput } from "./commands/CreateTypeCommand";
import {
  DeleteApiCacheCommand,
  DeleteApiCacheCommandInput,
  DeleteApiCacheCommandOutput,
} from "./commands/DeleteApiCacheCommand";
import {
  DeleteApiKeyCommand,
  DeleteApiKeyCommandInput,
  DeleteApiKeyCommandOutput,
} from "./commands/DeleteApiKeyCommand";
import {
  DeleteDataSourceCommand,
  DeleteDataSourceCommandInput,
  DeleteDataSourceCommandOutput,
} from "./commands/DeleteDataSourceCommand";
import {
  DeleteDomainNameCommand,
  DeleteDomainNameCommandInput,
  DeleteDomainNameCommandOutput,
} from "./commands/DeleteDomainNameCommand";
import {
  DeleteFunctionCommand,
  DeleteFunctionCommandInput,
  DeleteFunctionCommandOutput,
} from "./commands/DeleteFunctionCommand";
import {
  DeleteGraphqlApiCommand,
  DeleteGraphqlApiCommandInput,
  DeleteGraphqlApiCommandOutput,
} from "./commands/DeleteGraphqlApiCommand";
import {
  DeleteResolverCommand,
  DeleteResolverCommandInput,
  DeleteResolverCommandOutput,
} from "./commands/DeleteResolverCommand";
import { DeleteTypeCommand, DeleteTypeCommandInput, DeleteTypeCommandOutput } from "./commands/DeleteTypeCommand";
import {
  DisassociateApiCommand,
  DisassociateApiCommandInput,
  DisassociateApiCommandOutput,
} from "./commands/DisassociateApiCommand";
import {
  EvaluateCodeCommand,
  EvaluateCodeCommandInput,
  EvaluateCodeCommandOutput,
} from "./commands/EvaluateCodeCommand";
import {
  EvaluateMappingTemplateCommand,
  EvaluateMappingTemplateCommandInput,
  EvaluateMappingTemplateCommandOutput,
} from "./commands/EvaluateMappingTemplateCommand";
import {
  FlushApiCacheCommand,
  FlushApiCacheCommandInput,
  FlushApiCacheCommandOutput,
} from "./commands/FlushApiCacheCommand";
import {
  GetApiAssociationCommand,
  GetApiAssociationCommandInput,
  GetApiAssociationCommandOutput,
} from "./commands/GetApiAssociationCommand";
import { GetApiCacheCommand, GetApiCacheCommandInput, GetApiCacheCommandOutput } from "./commands/GetApiCacheCommand";
import {
  GetDataSourceCommand,
  GetDataSourceCommandInput,
  GetDataSourceCommandOutput,
} from "./commands/GetDataSourceCommand";
import {
  GetDomainNameCommand,
  GetDomainNameCommandInput,
  GetDomainNameCommandOutput,
} from "./commands/GetDomainNameCommand";
import { GetFunctionCommand, GetFunctionCommandInput, GetFunctionCommandOutput } from "./commands/GetFunctionCommand";
import {
  GetGraphqlApiCommand,
  GetGraphqlApiCommandInput,
  GetGraphqlApiCommandOutput,
} from "./commands/GetGraphqlApiCommand";
import {
  GetIntrospectionSchemaCommand,
  GetIntrospectionSchemaCommandInput,
  GetIntrospectionSchemaCommandOutput,
} from "./commands/GetIntrospectionSchemaCommand";
import { GetResolverCommand, GetResolverCommandInput, GetResolverCommandOutput } from "./commands/GetResolverCommand";
import {
  GetSchemaCreationStatusCommand,
  GetSchemaCreationStatusCommandInput,
  GetSchemaCreationStatusCommandOutput,
} from "./commands/GetSchemaCreationStatusCommand";
import { GetTypeCommand, GetTypeCommandInput, GetTypeCommandOutput } from "./commands/GetTypeCommand";
import { ListApiKeysCommand, ListApiKeysCommandInput, ListApiKeysCommandOutput } from "./commands/ListApiKeysCommand";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "./commands/ListDataSourcesCommand";
import {
  ListDomainNamesCommand,
  ListDomainNamesCommandInput,
  ListDomainNamesCommandOutput,
} from "./commands/ListDomainNamesCommand";
import {
  ListFunctionsCommand,
  ListFunctionsCommandInput,
  ListFunctionsCommandOutput,
} from "./commands/ListFunctionsCommand";
import {
  ListGraphqlApisCommand,
  ListGraphqlApisCommandInput,
  ListGraphqlApisCommandOutput,
} from "./commands/ListGraphqlApisCommand";
import {
  ListResolversByFunctionCommand,
  ListResolversByFunctionCommandInput,
  ListResolversByFunctionCommandOutput,
} from "./commands/ListResolversByFunctionCommand";
import {
  ListResolversCommand,
  ListResolversCommandInput,
  ListResolversCommandOutput,
} from "./commands/ListResolversCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTypesCommand, ListTypesCommandInput, ListTypesCommandOutput } from "./commands/ListTypesCommand";
import {
  StartSchemaCreationCommand,
  StartSchemaCreationCommandInput,
  StartSchemaCreationCommandOutput,
} from "./commands/StartSchemaCreationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateApiCacheCommand,
  UpdateApiCacheCommandInput,
  UpdateApiCacheCommandOutput,
} from "./commands/UpdateApiCacheCommand";
import {
  UpdateApiKeyCommand,
  UpdateApiKeyCommandInput,
  UpdateApiKeyCommandOutput,
} from "./commands/UpdateApiKeyCommand";
import {
  UpdateDataSourceCommand,
  UpdateDataSourceCommandInput,
  UpdateDataSourceCommandOutput,
} from "./commands/UpdateDataSourceCommand";
import {
  UpdateDomainNameCommand,
  UpdateDomainNameCommandInput,
  UpdateDomainNameCommandOutput,
} from "./commands/UpdateDomainNameCommand";
import {
  UpdateFunctionCommand,
  UpdateFunctionCommandInput,
  UpdateFunctionCommandOutput,
} from "./commands/UpdateFunctionCommand";
import {
  UpdateGraphqlApiCommand,
  UpdateGraphqlApiCommandInput,
  UpdateGraphqlApiCommandOutput,
} from "./commands/UpdateGraphqlApiCommand";
import {
  UpdateResolverCommand,
  UpdateResolverCommandInput,
  UpdateResolverCommandOutput,
} from "./commands/UpdateResolverCommand";
import { UpdateTypeCommand, UpdateTypeCommandInput, UpdateTypeCommandOutput } from "./commands/UpdateTypeCommand";

/**
 * <p>AppSync provides API actions for creating and interacting with data sources using GraphQL
 *          from your application.</p>
 */
export class AppSync extends AppSyncClient {
  /**
   * <p>Maps an endpoint to your custom domain.</p>
   */
  public associateApi(
    args: AssociateApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateApiCommandOutput>;
  public associateApi(args: AssociateApiCommandInput, cb: (err: any, data?: AssociateApiCommandOutput) => void): void;
  public associateApi(
    args: AssociateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateApiCommandOutput) => void
  ): void;
  public associateApi(
    args: AssociateApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateApiCommandOutput) => void),
    cb?: (err: any, data?: AssociateApiCommandOutput) => void
  ): Promise<AssociateApiCommandOutput> | void {
    const command = new AssociateApiCommand(args);
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
   * <p>Creates a cache for the GraphQL API.</p>
   */
  public createApiCache(
    args: CreateApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateApiCacheCommandOutput>;
  public createApiCache(
    args: CreateApiCacheCommandInput,
    cb: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): void;
  public createApiCache(
    args: CreateApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): void;
  public createApiCache(
    args: CreateApiCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateApiCacheCommandOutput) => void),
    cb?: (err: any, data?: CreateApiCacheCommandOutput) => void
  ): Promise<CreateApiCacheCommandOutput> | void {
    const command = new CreateApiCacheCommand(args);
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
   * <p>Creates a unique key that you can distribute to clients who invoke your API.</p>
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
   * <p>Creates a <code>DataSource</code> object.</p>
   */
  public createDataSource(
    args: CreateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataSourceCommandOutput>;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): void;
  public createDataSource(
    args: CreateDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: CreateDataSourceCommandOutput) => void
  ): Promise<CreateDataSourceCommandOutput> | void {
    const command = new CreateDataSourceCommand(args);
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
   * <p>Creates a custom <code>DomainName</code> object.</p>
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
   * <p>Creates a <code>Function</code> object.</p>
   *          <p>A function is a reusable entity. You can use multiple functions to compose the resolver logic.</p>
   */
  public createFunction(
    args: CreateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFunctionCommandOutput>;
  public createFunction(
    args: CreateFunctionCommandInput,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFunctionCommandOutput) => void
  ): void;
  public createFunction(
    args: CreateFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFunctionCommandOutput) => void),
    cb?: (err: any, data?: CreateFunctionCommandOutput) => void
  ): Promise<CreateFunctionCommandOutput> | void {
    const command = new CreateFunctionCommand(args);
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
   * <p>Creates a <code>GraphqlApi</code> object.</p>
   */
  public createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGraphqlApiCommandOutput>;
  public createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;
  public createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): void;
  public createGraphqlApi(
    args: CreateGraphqlApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGraphqlApiCommandOutput) => void),
    cb?: (err: any, data?: CreateGraphqlApiCommandOutput) => void
  ): Promise<CreateGraphqlApiCommandOutput> | void {
    const command = new CreateGraphqlApiCommand(args);
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
   * <p>Creates a <code>Resolver</code> object.</p>
   *          <p>A resolver converts incoming requests into a format that a data source can understand, and converts the data
   *          source's responses into GraphQL.</p>
   */
  public createResolver(
    args: CreateResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResolverCommandOutput>;
  public createResolver(
    args: CreateResolverCommandInput,
    cb: (err: any, data?: CreateResolverCommandOutput) => void
  ): void;
  public createResolver(
    args: CreateResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResolverCommandOutput) => void
  ): void;
  public createResolver(
    args: CreateResolverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResolverCommandOutput) => void),
    cb?: (err: any, data?: CreateResolverCommandOutput) => void
  ): Promise<CreateResolverCommandOutput> | void {
    const command = new CreateResolverCommand(args);
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
   * <p>Creates a <code>Type</code> object.</p>
   */
  public createType(args: CreateTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateTypeCommandOutput>;
  public createType(args: CreateTypeCommandInput, cb: (err: any, data?: CreateTypeCommandOutput) => void): void;
  public createType(
    args: CreateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypeCommandOutput) => void
  ): void;
  public createType(
    args: CreateTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateTypeCommandOutput) => void
  ): Promise<CreateTypeCommandOutput> | void {
    const command = new CreateTypeCommand(args);
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
   * <p>Deletes an <code>ApiCache</code> object.</p>
   */
  public deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteApiCacheCommandOutput>;
  public deleteApiCache(
    args: DeleteApiCacheCommandInput,
    cb: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): void;
  public deleteApiCache(
    args: DeleteApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): void;
  public deleteApiCache(
    args: DeleteApiCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteApiCacheCommandOutput) => void),
    cb?: (err: any, data?: DeleteApiCacheCommandOutput) => void
  ): Promise<DeleteApiCacheCommandOutput> | void {
    const command = new DeleteApiCacheCommand(args);
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
   * <p>Deletes an API key.</p>
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
   * <p>Deletes a <code>DataSource</code> object.</p>
   */
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataSourceCommandOutput>;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): void;
  public deleteDataSource(
    args: DeleteDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDataSourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteDataSourceCommandOutput) => void
  ): Promise<DeleteDataSourceCommandOutput> | void {
    const command = new DeleteDataSourceCommand(args);
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
   * <p>Deletes a custom <code>DomainName</code> object.</p>
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
   * <p>Deletes a <code>Function</code>.</p>
   */
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFunctionCommandOutput>;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  public deleteFunction(
    args: DeleteFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFunctionCommandOutput) => void),
    cb?: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): Promise<DeleteFunctionCommandOutput> | void {
    const command = new DeleteFunctionCommand(args);
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
   * <p>Deletes a <code>GraphqlApi</code> object.</p>
   */
  public deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGraphqlApiCommandOutput>;
  public deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;
  public deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): void;
  public deleteGraphqlApi(
    args: DeleteGraphqlApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGraphqlApiCommandOutput) => void),
    cb?: (err: any, data?: DeleteGraphqlApiCommandOutput) => void
  ): Promise<DeleteGraphqlApiCommandOutput> | void {
    const command = new DeleteGraphqlApiCommand(args);
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
   * <p>Deletes a <code>Resolver</code> object.</p>
   */
  public deleteResolver(
    args: DeleteResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResolverCommandOutput>;
  public deleteResolver(
    args: DeleteResolverCommandInput,
    cb: (err: any, data?: DeleteResolverCommandOutput) => void
  ): void;
  public deleteResolver(
    args: DeleteResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResolverCommandOutput) => void
  ): void;
  public deleteResolver(
    args: DeleteResolverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResolverCommandOutput) => void),
    cb?: (err: any, data?: DeleteResolverCommandOutput) => void
  ): Promise<DeleteResolverCommandOutput> | void {
    const command = new DeleteResolverCommand(args);
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
   * <p>Deletes a <code>Type</code> object.</p>
   */
  public deleteType(args: DeleteTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTypeCommandOutput>;
  public deleteType(args: DeleteTypeCommandInput, cb: (err: any, data?: DeleteTypeCommandOutput) => void): void;
  public deleteType(
    args: DeleteTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypeCommandOutput) => void
  ): void;
  public deleteType(
    args: DeleteTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteTypeCommandOutput) => void
  ): Promise<DeleteTypeCommandOutput> | void {
    const command = new DeleteTypeCommand(args);
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
   * <p>Removes an <code>ApiAssociation</code> object from a custom domain.</p>
   */
  public disassociateApi(
    args: DisassociateApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateApiCommandOutput>;
  public disassociateApi(
    args: DisassociateApiCommandInput,
    cb: (err: any, data?: DisassociateApiCommandOutput) => void
  ): void;
  public disassociateApi(
    args: DisassociateApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateApiCommandOutput) => void
  ): void;
  public disassociateApi(
    args: DisassociateApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateApiCommandOutput) => void),
    cb?: (err: any, data?: DisassociateApiCommandOutput) => void
  ): Promise<DisassociateApiCommandOutput> | void {
    const command = new DisassociateApiCommand(args);
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
   * <p>Evaluates the given code and returns the response. The code definition requirements depend on the specified
   *          runtime. For <code>APPSYNC_JS</code> runtimes, the code defines the request and response functions. The request
   *          function takes the incoming request after a GraphQL operation is parsed and converts it into a request
   *          configuration for the selected data source operation. The response function interprets responses from the data
   *          source and maps it to the shape of the GraphQL field output type. </p>
   */
  public evaluateCode(
    args: EvaluateCodeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateCodeCommandOutput>;
  public evaluateCode(args: EvaluateCodeCommandInput, cb: (err: any, data?: EvaluateCodeCommandOutput) => void): void;
  public evaluateCode(
    args: EvaluateCodeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateCodeCommandOutput) => void
  ): void;
  public evaluateCode(
    args: EvaluateCodeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EvaluateCodeCommandOutput) => void),
    cb?: (err: any, data?: EvaluateCodeCommandOutput) => void
  ): Promise<EvaluateCodeCommandOutput> | void {
    const command = new EvaluateCodeCommand(args);
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
   * <p>Evaluates a given template and returns the response. The mapping template can be a request or response
   *          template.</p>
   *          <p>Request templates take the incoming request after a GraphQL operation is parsed and convert it into a
   *          request configuration for the selected data source operation. Response templates interpret responses from the
   *          data source and map it to the shape of the GraphQL field output type.</p>
   *          <p>Mapping templates are written in the Apache Velocity Template Language (VTL).</p>
   */
  public evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EvaluateMappingTemplateCommandOutput>;
  public evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    cb: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): void;
  public evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): void;
  public evaluateMappingTemplate(
    args: EvaluateMappingTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EvaluateMappingTemplateCommandOutput) => void),
    cb?: (err: any, data?: EvaluateMappingTemplateCommandOutput) => void
  ): Promise<EvaluateMappingTemplateCommandOutput> | void {
    const command = new EvaluateMappingTemplateCommand(args);
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
   * <p>Flushes an <code>ApiCache</code> object.</p>
   */
  public flushApiCache(
    args: FlushApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<FlushApiCacheCommandOutput>;
  public flushApiCache(
    args: FlushApiCacheCommandInput,
    cb: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): void;
  public flushApiCache(
    args: FlushApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): void;
  public flushApiCache(
    args: FlushApiCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: FlushApiCacheCommandOutput) => void),
    cb?: (err: any, data?: FlushApiCacheCommandOutput) => void
  ): Promise<FlushApiCacheCommandOutput> | void {
    const command = new FlushApiCacheCommand(args);
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
   * <p>Retrieves an <code>ApiAssociation</code> object.</p>
   */
  public getApiAssociation(
    args: GetApiAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetApiAssociationCommandOutput>;
  public getApiAssociation(
    args: GetApiAssociationCommandInput,
    cb: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): void;
  public getApiAssociation(
    args: GetApiAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): void;
  public getApiAssociation(
    args: GetApiAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetApiAssociationCommandOutput) => void
  ): Promise<GetApiAssociationCommandOutput> | void {
    const command = new GetApiAssociationCommand(args);
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
   * <p>Retrieves an <code>ApiCache</code> object.</p>
   */
  public getApiCache(args: GetApiCacheCommandInput, options?: __HttpHandlerOptions): Promise<GetApiCacheCommandOutput>;
  public getApiCache(args: GetApiCacheCommandInput, cb: (err: any, data?: GetApiCacheCommandOutput) => void): void;
  public getApiCache(
    args: GetApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetApiCacheCommandOutput) => void
  ): void;
  public getApiCache(
    args: GetApiCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetApiCacheCommandOutput) => void),
    cb?: (err: any, data?: GetApiCacheCommandOutput) => void
  ): Promise<GetApiCacheCommandOutput> | void {
    const command = new GetApiCacheCommand(args);
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
   * <p>Retrieves a <code>DataSource</code> object.</p>
   */
  public getDataSource(
    args: GetDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataSourceCommandOutput>;
  public getDataSource(
    args: GetDataSourceCommandInput,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  public getDataSource(
    args: GetDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataSourceCommandOutput) => void
  ): void;
  public getDataSource(
    args: GetDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDataSourceCommandOutput) => void),
    cb?: (err: any, data?: GetDataSourceCommandOutput) => void
  ): Promise<GetDataSourceCommandOutput> | void {
    const command = new GetDataSourceCommand(args);
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
   * <p>Retrieves a custom <code>DomainName</code> object.</p>
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
   * <p>Get a <code>Function</code>.</p>
   */
  public getFunction(args: GetFunctionCommandInput, options?: __HttpHandlerOptions): Promise<GetFunctionCommandOutput>;
  public getFunction(args: GetFunctionCommandInput, cb: (err: any, data?: GetFunctionCommandOutput) => void): void;
  public getFunction(
    args: GetFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  public getFunction(
    args: GetFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFunctionCommandOutput) => void),
    cb?: (err: any, data?: GetFunctionCommandOutput) => void
  ): Promise<GetFunctionCommandOutput> | void {
    const command = new GetFunctionCommand(args);
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
   * <p>Retrieves a <code>GraphqlApi</code> object.</p>
   */
  public getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetGraphqlApiCommandOutput>;
  public getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    cb: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): void;
  public getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): void;
  public getGraphqlApi(
    args: GetGraphqlApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetGraphqlApiCommandOutput) => void),
    cb?: (err: any, data?: GetGraphqlApiCommandOutput) => void
  ): Promise<GetGraphqlApiCommandOutput> | void {
    const command = new GetGraphqlApiCommand(args);
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
   * <p>Retrieves the introspection schema for a GraphQL API.</p>
   */
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetIntrospectionSchemaCommandOutput>;
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): void;
  public getIntrospectionSchema(
    args: GetIntrospectionSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetIntrospectionSchemaCommandOutput) => void),
    cb?: (err: any, data?: GetIntrospectionSchemaCommandOutput) => void
  ): Promise<GetIntrospectionSchemaCommandOutput> | void {
    const command = new GetIntrospectionSchemaCommand(args);
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
   * <p>Retrieves a <code>Resolver</code> object.</p>
   */
  public getResolver(args: GetResolverCommandInput, options?: __HttpHandlerOptions): Promise<GetResolverCommandOutput>;
  public getResolver(args: GetResolverCommandInput, cb: (err: any, data?: GetResolverCommandOutput) => void): void;
  public getResolver(
    args: GetResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResolverCommandOutput) => void
  ): void;
  public getResolver(
    args: GetResolverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResolverCommandOutput) => void),
    cb?: (err: any, data?: GetResolverCommandOutput) => void
  ): Promise<GetResolverCommandOutput> | void {
    const command = new GetResolverCommand(args);
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
   * <p>Retrieves the current status of a schema creation operation.</p>
   */
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaCreationStatusCommandOutput>;
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): void;
  public getSchemaCreationStatus(
    args: GetSchemaCreationStatusCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaCreationStatusCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaCreationStatusCommandOutput) => void
  ): Promise<GetSchemaCreationStatusCommandOutput> | void {
    const command = new GetSchemaCreationStatusCommand(args);
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
   * <p>Retrieves a <code>Type</code> object.</p>
   */
  public getType(args: GetTypeCommandInput, options?: __HttpHandlerOptions): Promise<GetTypeCommandOutput>;
  public getType(args: GetTypeCommandInput, cb: (err: any, data?: GetTypeCommandOutput) => void): void;
  public getType(
    args: GetTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypeCommandOutput) => void
  ): void;
  public getType(
    args: GetTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTypeCommandOutput) => void),
    cb?: (err: any, data?: GetTypeCommandOutput) => void
  ): Promise<GetTypeCommandOutput> | void {
    const command = new GetTypeCommand(args);
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
   * <p>Lists the API keys for a given API.</p>
   *          <note>
   *             <p>API keys are deleted automatically 60 days after they expire. However, they may still be included in the
   *             response until they have actually been deleted. You can safely call <code>DeleteApiKey</code> to manually
   *             delete a key before it's automatically deleted.</p>
   *          </note>
   */
  public listApiKeys(args: ListApiKeysCommandInput, options?: __HttpHandlerOptions): Promise<ListApiKeysCommandOutput>;
  public listApiKeys(args: ListApiKeysCommandInput, cb: (err: any, data?: ListApiKeysCommandOutput) => void): void;
  public listApiKeys(
    args: ListApiKeysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListApiKeysCommandOutput) => void
  ): void;
  public listApiKeys(
    args: ListApiKeysCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListApiKeysCommandOutput) => void),
    cb?: (err: any, data?: ListApiKeysCommandOutput) => void
  ): Promise<ListApiKeysCommandOutput> | void {
    const command = new ListApiKeysCommand(args);
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
   * <p>Lists the data sources for a given API.</p>
   */
  public listDataSources(
    args: ListDataSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataSourcesCommandOutput>;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): void;
  public listDataSources(
    args: ListDataSourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDataSourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDataSourcesCommandOutput) => void
  ): Promise<ListDataSourcesCommandOutput> | void {
    const command = new ListDataSourcesCommand(args);
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
   * <p>Lists multiple custom domain names.</p>
   */
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDomainNamesCommandOutput>;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): void;
  public listDomainNames(
    args: ListDomainNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDomainNamesCommandOutput) => void),
    cb?: (err: any, data?: ListDomainNamesCommandOutput) => void
  ): Promise<ListDomainNamesCommandOutput> | void {
    const command = new ListDomainNamesCommand(args);
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
   * <p>List multiple functions.</p>
   */
  public listFunctions(
    args: ListFunctionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFunctionsCommandOutput>;
  public listFunctions(
    args: ListFunctionsCommandInput,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  public listFunctions(
    args: ListFunctionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFunctionsCommandOutput) => void),
    cb?: (err: any, data?: ListFunctionsCommandOutput) => void
  ): Promise<ListFunctionsCommandOutput> | void {
    const command = new ListFunctionsCommand(args);
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
   * <p>Lists your GraphQL APIs.</p>
   */
  public listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGraphqlApisCommandOutput>;
  public listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    cb: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): void;
  public listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): void;
  public listGraphqlApis(
    args: ListGraphqlApisCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGraphqlApisCommandOutput) => void),
    cb?: (err: any, data?: ListGraphqlApisCommandOutput) => void
  ): Promise<ListGraphqlApisCommandOutput> | void {
    const command = new ListGraphqlApisCommand(args);
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
   * <p>Lists the resolvers for a given API and type.</p>
   */
  public listResolvers(
    args: ListResolversCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolversCommandOutput>;
  public listResolvers(
    args: ListResolversCommandInput,
    cb: (err: any, data?: ListResolversCommandOutput) => void
  ): void;
  public listResolvers(
    args: ListResolversCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolversCommandOutput) => void
  ): void;
  public listResolvers(
    args: ListResolversCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolversCommandOutput) => void),
    cb?: (err: any, data?: ListResolversCommandOutput) => void
  ): Promise<ListResolversCommandOutput> | void {
    const command = new ListResolversCommand(args);
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
   * <p>List the resolvers that are associated with a specific function.</p>
   */
  public listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResolversByFunctionCommandOutput>;
  public listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;
  public listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): void;
  public listResolversByFunction(
    args: ListResolversByFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResolversByFunctionCommandOutput) => void),
    cb?: (err: any, data?: ListResolversByFunctionCommandOutput) => void
  ): Promise<ListResolversByFunctionCommandOutput> | void {
    const command = new ListResolversByFunctionCommand(args);
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
   * <p>Lists the tags for a resource.</p>
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
   * <p>Lists the types for a given API.</p>
   */
  public listTypes(args: ListTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListTypesCommandOutput>;
  public listTypes(args: ListTypesCommandInput, cb: (err: any, data?: ListTypesCommandOutput) => void): void;
  public listTypes(
    args: ListTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypesCommandOutput) => void
  ): void;
  public listTypes(
    args: ListTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTypesCommandOutput) => void),
    cb?: (err: any, data?: ListTypesCommandOutput) => void
  ): Promise<ListTypesCommandOutput> | void {
    const command = new ListTypesCommand(args);
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
   * <p>Adds a new schema to your GraphQL API.</p>
   *          <p>This operation is asynchronous. Use  to determine when it has
   *          completed.</p>
   */
  public startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartSchemaCreationCommandOutput>;
  public startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;
  public startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): void;
  public startSchemaCreation(
    args: StartSchemaCreationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartSchemaCreationCommandOutput) => void),
    cb?: (err: any, data?: StartSchemaCreationCommandOutput) => void
  ): Promise<StartSchemaCreationCommandOutput> | void {
    const command = new StartSchemaCreationCommand(args);
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
   * <p>Tags a resource with user-supplied tags.</p>
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
   * <p>Untags a resource.</p>
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
   * <p>Updates the cache for the GraphQL API.</p>
   */
  public updateApiCache(
    args: UpdateApiCacheCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateApiCacheCommandOutput>;
  public updateApiCache(
    args: UpdateApiCacheCommandInput,
    cb: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): void;
  public updateApiCache(
    args: UpdateApiCacheCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): void;
  public updateApiCache(
    args: UpdateApiCacheCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateApiCacheCommandOutput) => void),
    cb?: (err: any, data?: UpdateApiCacheCommandOutput) => void
  ): Promise<UpdateApiCacheCommandOutput> | void {
    const command = new UpdateApiCacheCommand(args);
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
   * <p>Updates an API key. You can update the key as long as it's not deleted.</p>
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
   * <p>Updates a <code>DataSource</code> object.</p>
   */
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataSourceCommandOutput>;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): void;
  public updateDataSource(
    args: UpdateDataSourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateDataSourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateDataSourceCommandOutput) => void
  ): Promise<UpdateDataSourceCommandOutput> | void {
    const command = new UpdateDataSourceCommand(args);
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
   * <p>Updates a custom <code>DomainName</code> object.</p>
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
   * <p>Updates a <code>Function</code> object.</p>
   */
  public updateFunction(
    args: UpdateFunctionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFunctionCommandOutput>;
  public updateFunction(
    args: UpdateFunctionCommandInput,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  public updateFunction(
    args: UpdateFunctionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): void;
  public updateFunction(
    args: UpdateFunctionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFunctionCommandOutput) => void),
    cb?: (err: any, data?: UpdateFunctionCommandOutput) => void
  ): Promise<UpdateFunctionCommandOutput> | void {
    const command = new UpdateFunctionCommand(args);
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
   * <p>Updates a <code>GraphqlApi</code> object.</p>
   */
  public updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGraphqlApiCommandOutput>;
  public updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;
  public updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): void;
  public updateGraphqlApi(
    args: UpdateGraphqlApiCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateGraphqlApiCommandOutput) => void),
    cb?: (err: any, data?: UpdateGraphqlApiCommandOutput) => void
  ): Promise<UpdateGraphqlApiCommandOutput> | void {
    const command = new UpdateGraphqlApiCommand(args);
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
   * <p>Updates a <code>Resolver</code> object.</p>
   */
  public updateResolver(
    args: UpdateResolverCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResolverCommandOutput>;
  public updateResolver(
    args: UpdateResolverCommandInput,
    cb: (err: any, data?: UpdateResolverCommandOutput) => void
  ): void;
  public updateResolver(
    args: UpdateResolverCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResolverCommandOutput) => void
  ): void;
  public updateResolver(
    args: UpdateResolverCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResolverCommandOutput) => void),
    cb?: (err: any, data?: UpdateResolverCommandOutput) => void
  ): Promise<UpdateResolverCommandOutput> | void {
    const command = new UpdateResolverCommand(args);
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
   * <p>Updates a <code>Type</code> object.</p>
   */
  public updateType(args: UpdateTypeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTypeCommandOutput>;
  public updateType(args: UpdateTypeCommandInput, cb: (err: any, data?: UpdateTypeCommandOutput) => void): void;
  public updateType(
    args: UpdateTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTypeCommandOutput) => void
  ): void;
  public updateType(
    args: UpdateTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateTypeCommandOutput) => void
  ): Promise<UpdateTypeCommandOutput> | void {
    const command = new UpdateTypeCommand(args);
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
