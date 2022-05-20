// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CloudDirectoryClient } from "./CloudDirectoryClient";
import {
  AddFacetToObjectCommand,
  AddFacetToObjectCommandInput,
  AddFacetToObjectCommandOutput,
} from "./commands/AddFacetToObjectCommand";
import { ApplySchemaCommand, ApplySchemaCommandInput, ApplySchemaCommandOutput } from "./commands/ApplySchemaCommand";
import {
  AttachObjectCommand,
  AttachObjectCommandInput,
  AttachObjectCommandOutput,
} from "./commands/AttachObjectCommand";
import {
  AttachPolicyCommand,
  AttachPolicyCommandInput,
  AttachPolicyCommandOutput,
} from "./commands/AttachPolicyCommand";
import {
  AttachToIndexCommand,
  AttachToIndexCommandInput,
  AttachToIndexCommandOutput,
} from "./commands/AttachToIndexCommand";
import {
  AttachTypedLinkCommand,
  AttachTypedLinkCommandInput,
  AttachTypedLinkCommandOutput,
} from "./commands/AttachTypedLinkCommand";
import { BatchReadCommand, BatchReadCommandInput, BatchReadCommandOutput } from "./commands/BatchReadCommand";
import { BatchWriteCommand, BatchWriteCommandInput, BatchWriteCommandOutput } from "./commands/BatchWriteCommand";
import {
  CreateDirectoryCommand,
  CreateDirectoryCommandInput,
  CreateDirectoryCommandOutput,
} from "./commands/CreateDirectoryCommand";
import { CreateFacetCommand, CreateFacetCommandInput, CreateFacetCommandOutput } from "./commands/CreateFacetCommand";
import { CreateIndexCommand, CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import {
  CreateObjectCommand,
  CreateObjectCommandInput,
  CreateObjectCommandOutput,
} from "./commands/CreateObjectCommand";
import {
  CreateSchemaCommand,
  CreateSchemaCommandInput,
  CreateSchemaCommandOutput,
} from "./commands/CreateSchemaCommand";
import {
  CreateTypedLinkFacetCommand,
  CreateTypedLinkFacetCommandInput,
  CreateTypedLinkFacetCommandOutput,
} from "./commands/CreateTypedLinkFacetCommand";
import {
  DeleteDirectoryCommand,
  DeleteDirectoryCommandInput,
  DeleteDirectoryCommandOutput,
} from "./commands/DeleteDirectoryCommand";
import { DeleteFacetCommand, DeleteFacetCommandInput, DeleteFacetCommandOutput } from "./commands/DeleteFacetCommand";
import {
  DeleteObjectCommand,
  DeleteObjectCommandInput,
  DeleteObjectCommandOutput,
} from "./commands/DeleteObjectCommand";
import {
  DeleteSchemaCommand,
  DeleteSchemaCommandInput,
  DeleteSchemaCommandOutput,
} from "./commands/DeleteSchemaCommand";
import {
  DeleteTypedLinkFacetCommand,
  DeleteTypedLinkFacetCommandInput,
  DeleteTypedLinkFacetCommandOutput,
} from "./commands/DeleteTypedLinkFacetCommand";
import {
  DetachFromIndexCommand,
  DetachFromIndexCommandInput,
  DetachFromIndexCommandOutput,
} from "./commands/DetachFromIndexCommand";
import {
  DetachObjectCommand,
  DetachObjectCommandInput,
  DetachObjectCommandOutput,
} from "./commands/DetachObjectCommand";
import {
  DetachPolicyCommand,
  DetachPolicyCommandInput,
  DetachPolicyCommandOutput,
} from "./commands/DetachPolicyCommand";
import {
  DetachTypedLinkCommand,
  DetachTypedLinkCommandInput,
  DetachTypedLinkCommandOutput,
} from "./commands/DetachTypedLinkCommand";
import {
  DisableDirectoryCommand,
  DisableDirectoryCommandInput,
  DisableDirectoryCommandOutput,
} from "./commands/DisableDirectoryCommand";
import {
  EnableDirectoryCommand,
  EnableDirectoryCommandInput,
  EnableDirectoryCommandOutput,
} from "./commands/EnableDirectoryCommand";
import {
  GetAppliedSchemaVersionCommand,
  GetAppliedSchemaVersionCommandInput,
  GetAppliedSchemaVersionCommandOutput,
} from "./commands/GetAppliedSchemaVersionCommand";
import {
  GetDirectoryCommand,
  GetDirectoryCommandInput,
  GetDirectoryCommandOutput,
} from "./commands/GetDirectoryCommand";
import { GetFacetCommand, GetFacetCommandInput, GetFacetCommandOutput } from "./commands/GetFacetCommand";
import {
  GetLinkAttributesCommand,
  GetLinkAttributesCommandInput,
  GetLinkAttributesCommandOutput,
} from "./commands/GetLinkAttributesCommand";
import {
  GetObjectAttributesCommand,
  GetObjectAttributesCommandInput,
  GetObjectAttributesCommandOutput,
} from "./commands/GetObjectAttributesCommand";
import {
  GetObjectInformationCommand,
  GetObjectInformationCommandInput,
  GetObjectInformationCommandOutput,
} from "./commands/GetObjectInformationCommand";
import {
  GetSchemaAsJsonCommand,
  GetSchemaAsJsonCommandInput,
  GetSchemaAsJsonCommandOutput,
} from "./commands/GetSchemaAsJsonCommand";
import {
  GetTypedLinkFacetInformationCommand,
  GetTypedLinkFacetInformationCommandInput,
  GetTypedLinkFacetInformationCommandOutput,
} from "./commands/GetTypedLinkFacetInformationCommand";
import {
  ListAppliedSchemaArnsCommand,
  ListAppliedSchemaArnsCommandInput,
  ListAppliedSchemaArnsCommandOutput,
} from "./commands/ListAppliedSchemaArnsCommand";
import {
  ListAttachedIndicesCommand,
  ListAttachedIndicesCommandInput,
  ListAttachedIndicesCommandOutput,
} from "./commands/ListAttachedIndicesCommand";
import {
  ListDevelopmentSchemaArnsCommand,
  ListDevelopmentSchemaArnsCommandInput,
  ListDevelopmentSchemaArnsCommandOutput,
} from "./commands/ListDevelopmentSchemaArnsCommand";
import {
  ListDirectoriesCommand,
  ListDirectoriesCommandInput,
  ListDirectoriesCommandOutput,
} from "./commands/ListDirectoriesCommand";
import {
  ListFacetAttributesCommand,
  ListFacetAttributesCommandInput,
  ListFacetAttributesCommandOutput,
} from "./commands/ListFacetAttributesCommand";
import {
  ListFacetNamesCommand,
  ListFacetNamesCommandInput,
  ListFacetNamesCommandOutput,
} from "./commands/ListFacetNamesCommand";
import {
  ListIncomingTypedLinksCommand,
  ListIncomingTypedLinksCommandInput,
  ListIncomingTypedLinksCommandOutput,
} from "./commands/ListIncomingTypedLinksCommand";
import { ListIndexCommand, ListIndexCommandInput, ListIndexCommandOutput } from "./commands/ListIndexCommand";
import {
  ListManagedSchemaArnsCommand,
  ListManagedSchemaArnsCommandInput,
  ListManagedSchemaArnsCommandOutput,
} from "./commands/ListManagedSchemaArnsCommand";
import {
  ListObjectAttributesCommand,
  ListObjectAttributesCommandInput,
  ListObjectAttributesCommandOutput,
} from "./commands/ListObjectAttributesCommand";
import {
  ListObjectChildrenCommand,
  ListObjectChildrenCommandInput,
  ListObjectChildrenCommandOutput,
} from "./commands/ListObjectChildrenCommand";
import {
  ListObjectParentPathsCommand,
  ListObjectParentPathsCommandInput,
  ListObjectParentPathsCommandOutput,
} from "./commands/ListObjectParentPathsCommand";
import {
  ListObjectParentsCommand,
  ListObjectParentsCommandInput,
  ListObjectParentsCommandOutput,
} from "./commands/ListObjectParentsCommand";
import {
  ListObjectPoliciesCommand,
  ListObjectPoliciesCommandInput,
  ListObjectPoliciesCommandOutput,
} from "./commands/ListObjectPoliciesCommand";
import {
  ListOutgoingTypedLinksCommand,
  ListOutgoingTypedLinksCommandInput,
  ListOutgoingTypedLinksCommandOutput,
} from "./commands/ListOutgoingTypedLinksCommand";
import {
  ListPolicyAttachmentsCommand,
  ListPolicyAttachmentsCommandInput,
  ListPolicyAttachmentsCommandOutput,
} from "./commands/ListPolicyAttachmentsCommand";
import {
  ListPublishedSchemaArnsCommand,
  ListPublishedSchemaArnsCommandInput,
  ListPublishedSchemaArnsCommandOutput,
} from "./commands/ListPublishedSchemaArnsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTypedLinkFacetAttributesCommand,
  ListTypedLinkFacetAttributesCommandInput,
  ListTypedLinkFacetAttributesCommandOutput,
} from "./commands/ListTypedLinkFacetAttributesCommand";
import {
  ListTypedLinkFacetNamesCommand,
  ListTypedLinkFacetNamesCommandInput,
  ListTypedLinkFacetNamesCommandOutput,
} from "./commands/ListTypedLinkFacetNamesCommand";
import {
  LookupPolicyCommand,
  LookupPolicyCommandInput,
  LookupPolicyCommandOutput,
} from "./commands/LookupPolicyCommand";
import {
  PublishSchemaCommand,
  PublishSchemaCommandInput,
  PublishSchemaCommandOutput,
} from "./commands/PublishSchemaCommand";
import {
  PutSchemaFromJsonCommand,
  PutSchemaFromJsonCommandInput,
  PutSchemaFromJsonCommandOutput,
} from "./commands/PutSchemaFromJsonCommand";
import {
  RemoveFacetFromObjectCommand,
  RemoveFacetFromObjectCommandInput,
  RemoveFacetFromObjectCommandOutput,
} from "./commands/RemoveFacetFromObjectCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateFacetCommand, UpdateFacetCommandInput, UpdateFacetCommandOutput } from "./commands/UpdateFacetCommand";
import {
  UpdateLinkAttributesCommand,
  UpdateLinkAttributesCommandInput,
  UpdateLinkAttributesCommandOutput,
} from "./commands/UpdateLinkAttributesCommand";
import {
  UpdateObjectAttributesCommand,
  UpdateObjectAttributesCommandInput,
  UpdateObjectAttributesCommandOutput,
} from "./commands/UpdateObjectAttributesCommand";
import {
  UpdateSchemaCommand,
  UpdateSchemaCommandInput,
  UpdateSchemaCommandOutput,
} from "./commands/UpdateSchemaCommand";
import {
  UpdateTypedLinkFacetCommand,
  UpdateTypedLinkFacetCommandInput,
  UpdateTypedLinkFacetCommandOutput,
} from "./commands/UpdateTypedLinkFacetCommand";
import {
  UpgradeAppliedSchemaCommand,
  UpgradeAppliedSchemaCommandInput,
  UpgradeAppliedSchemaCommandOutput,
} from "./commands/UpgradeAppliedSchemaCommand";
import {
  UpgradePublishedSchemaCommand,
  UpgradePublishedSchemaCommandInput,
  UpgradePublishedSchemaCommandOutput,
} from "./commands/UpgradePublishedSchemaCommand";

/**
 * <fullname>Amazon Cloud Directory</fullname>
 *          <p>Amazon Cloud Directory is a component of the AWS Directory Service that simplifies the
 *       development and management of cloud-scale web, mobile, and IoT applications. This guide
 *       describes the Cloud Directory operations that you can call programmatically and includes
 *       detailed information on data types and errors. For information about Cloud Directory features, see <a href="https://aws.amazon.com/directoryservice/">AWS Directory
 *         Service</a> and the <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/what_is_cloud_directory.html">Amazon Cloud Directory Developer Guide</a>.</p>
 */
export class CloudDirectory extends CloudDirectoryClient {
  /**
   * <p>Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.</p>
   */
  public addFacetToObject(
    args: AddFacetToObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddFacetToObjectCommandOutput>;
  public addFacetToObject(
    args: AddFacetToObjectCommandInput,
    cb: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): void;
  public addFacetToObject(
    args: AddFacetToObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): void;
  public addFacetToObject(
    args: AddFacetToObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddFacetToObjectCommandOutput) => void),
    cb?: (err: any, data?: AddFacetToObjectCommandOutput) => void
  ): Promise<AddFacetToObjectCommandOutput> | void {
    const command = new AddFacetToObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the input published schema, at the specified version, into the <a>Directory</a> with the same
   *       name and version as that of the published schema.</p>
   */
  public applySchema(args: ApplySchemaCommandInput, options?: __HttpHandlerOptions): Promise<ApplySchemaCommandOutput>;
  public applySchema(args: ApplySchemaCommandInput, cb: (err: any, data?: ApplySchemaCommandOutput) => void): void;
  public applySchema(
    args: ApplySchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ApplySchemaCommandOutput) => void
  ): void;
  public applySchema(
    args: ApplySchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ApplySchemaCommandOutput) => void),
    cb?: (err: any, data?: ApplySchemaCommandOutput) => void
  ): Promise<ApplySchemaCommandOutput> | void {
    const command = new ApplySchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches an existing object to another object. An object can be accessed in two
   *       ways:</p>
   *          <ol>
   *             <li>
   *                <p>Using the path</p>
   *             </li>
   *             <li>
   *                <p>Using <code>ObjectIdentifier</code>
   *                </p>
   *             </li>
   *          </ol>
   */
  public attachObject(
    args: AttachObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachObjectCommandOutput>;
  public attachObject(args: AttachObjectCommandInput, cb: (err: any, data?: AttachObjectCommandOutput) => void): void;
  public attachObject(
    args: AttachObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachObjectCommandOutput) => void
  ): void;
  public attachObject(
    args: AttachObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachObjectCommandOutput) => void),
    cb?: (err: any, data?: AttachObjectCommandOutput) => void
  ): Promise<AttachObjectCommandOutput> | void {
    const command = new AttachObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a policy object to a regular object. An object can have a limited number of attached
   *       policies.</p>
   */
  public attachPolicy(
    args: AttachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachPolicyCommandOutput>;
  public attachPolicy(args: AttachPolicyCommandInput, cb: (err: any, data?: AttachPolicyCommandOutput) => void): void;
  public attachPolicy(
    args: AttachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachPolicyCommandOutput) => void
  ): void;
  public attachPolicy(
    args: AttachPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachPolicyCommandOutput) => void),
    cb?: (err: any, data?: AttachPolicyCommandOutput) => void
  ): Promise<AttachPolicyCommandOutput> | void {
    const command = new AttachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches the specified object to the specified index.</p>
   */
  public attachToIndex(
    args: AttachToIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachToIndexCommandOutput>;
  public attachToIndex(
    args: AttachToIndexCommandInput,
    cb: (err: any, data?: AttachToIndexCommandOutput) => void
  ): void;
  public attachToIndex(
    args: AttachToIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachToIndexCommandOutput) => void
  ): void;
  public attachToIndex(
    args: AttachToIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachToIndexCommandOutput) => void),
    cb?: (err: any, data?: AttachToIndexCommandOutput) => void
  ): Promise<AttachToIndexCommandOutput> | void {
    const command = new AttachToIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public attachTypedLink(
    args: AttachTypedLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AttachTypedLinkCommandOutput>;
  public attachTypedLink(
    args: AttachTypedLinkCommandInput,
    cb: (err: any, data?: AttachTypedLinkCommandOutput) => void
  ): void;
  public attachTypedLink(
    args: AttachTypedLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AttachTypedLinkCommandOutput) => void
  ): void;
  public attachTypedLink(
    args: AttachTypedLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AttachTypedLinkCommandOutput) => void),
    cb?: (err: any, data?: AttachTypedLinkCommandOutput) => void
  ): Promise<AttachTypedLinkCommandOutput> | void {
    const command = new AttachTypedLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Performs all the read operations in a batch. </p>
   */
  public batchRead(args: BatchReadCommandInput, options?: __HttpHandlerOptions): Promise<BatchReadCommandOutput>;
  public batchRead(args: BatchReadCommandInput, cb: (err: any, data?: BatchReadCommandOutput) => void): void;
  public batchRead(
    args: BatchReadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchReadCommandOutput) => void
  ): void;
  public batchRead(
    args: BatchReadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchReadCommandOutput) => void),
    cb?: (err: any, data?: BatchReadCommandOutput) => void
  ): Promise<BatchReadCommandOutput> | void {
    const command = new BatchReadCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Performs all the write operations in a batch. Either all the operations succeed or
   *       none.</p>
   */
  public batchWrite(args: BatchWriteCommandInput, options?: __HttpHandlerOptions): Promise<BatchWriteCommandOutput>;
  public batchWrite(args: BatchWriteCommandInput, cb: (err: any, data?: BatchWriteCommandOutput) => void): void;
  public batchWrite(
    args: BatchWriteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchWriteCommandOutput) => void
  ): void;
  public batchWrite(
    args: BatchWriteCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchWriteCommandOutput) => void),
    cb?: (err: any, data?: BatchWriteCommandOutput) => void
  ): Promise<BatchWriteCommandOutput> | void {
    const command = new BatchWriteCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a <a>Directory</a> by copying the published schema into the
   *       directory. A directory cannot be created without a schema.</p>
   *          <p>You can also quickly create a directory using a managed schema, called the
   *         <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
   */
  public createDirectory(
    args: CreateDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDirectoryCommandOutput>;
  public createDirectory(
    args: CreateDirectoryCommandInput,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;
  public createDirectory(
    args: CreateDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): void;
  public createDirectory(
    args: CreateDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateDirectoryCommandOutput) => void),
    cb?: (err: any, data?: CreateDirectoryCommandOutput) => void
  ): Promise<CreateDirectoryCommandOutput> | void {
    const command = new CreateDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new <a>Facet</a> in a schema. Facet creation is allowed only
   *       in development or applied schemas.</p>
   */
  public createFacet(args: CreateFacetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFacetCommandOutput>;
  public createFacet(args: CreateFacetCommandInput, cb: (err: any, data?: CreateFacetCommandOutput) => void): void;
  public createFacet(
    args: CreateFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFacetCommandOutput) => void
  ): void;
  public createFacet(
    args: CreateFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFacetCommandOutput) => void),
    cb?: (err: any, data?: CreateFacetCommandOutput) => void
  ): Promise<CreateFacetCommandOutput> | void {
    const command = new CreateFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.</p>
   */
  public createIndex(args: CreateIndexCommandInput, options?: __HttpHandlerOptions): Promise<CreateIndexCommandOutput>;
  public createIndex(args: CreateIndexCommandInput, cb: (err: any, data?: CreateIndexCommandOutput) => void): void;
  public createIndex(
    args: CreateIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIndexCommandOutput) => void
  ): void;
  public createIndex(
    args: CreateIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateIndexCommandOutput) => void),
    cb?: (err: any, data?: CreateIndexCommandOutput) => void
  ): Promise<CreateIndexCommandOutput> | void {
    const command = new CreateIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an object in a <a>Directory</a>. Additionally attaches the object to
   *       a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a
   *       collection of <a>Facet</a> attributes. You can also use this API call to create a
   *       policy object, if the facet from which you create the object is a policy facet. </p>
   */
  public createObject(
    args: CreateObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateObjectCommandOutput>;
  public createObject(args: CreateObjectCommandInput, cb: (err: any, data?: CreateObjectCommandOutput) => void): void;
  public createObject(
    args: CreateObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateObjectCommandOutput) => void
  ): void;
  public createObject(
    args: CreateObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateObjectCommandOutput) => void),
    cb?: (err: any, data?: CreateObjectCommandOutput) => void
  ): Promise<CreateObjectCommandOutput> | void {
    const command = new CreateObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new schema in a development state. A schema can exist in three
   *       phases:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>Development:</i> This is a mutable phase of the schema. All new
   *           schemas are in the development phase. Once the schema is finalized, it can be
   *           published.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Published:</i> Published schemas are immutable and have a version
   *           associated with them.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>Applied:</i> Applied schemas are mutable in a way that allows you
   *           to add new schema facets. You can also add new, nonrequired attributes to existing schema
   *           facets. You can apply only published schemas to directories. </p>
   *             </li>
   *          </ul>
   */
  public createSchema(
    args: CreateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSchemaCommandOutput>;
  public createSchema(args: CreateSchemaCommandInput, cb: (err: any, data?: CreateSchemaCommandOutput) => void): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSchemaCommandOutput) => void
  ): void;
  public createSchema(
    args: CreateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSchemaCommandOutput) => void),
    cb?: (err: any, data?: CreateSchemaCommandOutput) => void
  ): Promise<CreateSchemaCommandOutput> | void {
    const command = new CreateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTypedLinkFacetCommandOutput>;
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    cb: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): void;
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): void;
  public createTypedLinkFacet(
    args: CreateTypedLinkFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTypedLinkFacetCommandOutput) => void),
    cb?: (err: any, data?: CreateTypedLinkFacetCommandOutput) => void
  ): Promise<CreateTypedLinkFacetCommandOutput> | void {
    const command = new CreateTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme
   *         caution
   *         when deleting directories.</p>
   */
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDirectoryCommandOutput>;
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): void;
  public deleteDirectory(
    args: DeleteDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteDirectoryCommandOutput) => void),
    cb?: (err: any, data?: DeleteDirectoryCommandOutput) => void
  ): Promise<DeleteDirectoryCommandOutput> | void {
    const command = new DeleteDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s
   *       that are associated with the facet will be deleted. Only development schema facets are allowed
   *       deletion.</p>
   */
  public deleteFacet(args: DeleteFacetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFacetCommandOutput>;
  public deleteFacet(args: DeleteFacetCommandInput, cb: (err: any, data?: DeleteFacetCommandOutput) => void): void;
  public deleteFacet(
    args: DeleteFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFacetCommandOutput) => void
  ): void;
  public deleteFacet(
    args: DeleteFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFacetCommandOutput) => void),
    cb?: (err: any, data?: DeleteFacetCommandOutput) => void
  ): Promise<DeleteFacetCommandOutput> | void {
    const command = new DeleteFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an object and its associated attributes. Only objects with no children and no
   *       parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.</p>
   */
  public deleteObject(
    args: DeleteObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectCommandOutput>;
  public deleteObject(args: DeleteObjectCommandInput, cb: (err: any, data?: DeleteObjectCommandOutput) => void): void;
  public deleteObject(
    args: DeleteObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectCommandOutput) => void
  ): void;
  public deleteObject(
    args: DeleteObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteObjectCommandOutput) => void),
    cb?: (err: any, data?: DeleteObjectCommandOutput) => void
  ): Promise<DeleteObjectCommandOutput> | void {
    const command = new DeleteObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a given schema. Schemas in a development and published state can only be deleted. </p>
   */
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSchemaCommandOutput>;
  public deleteSchema(args: DeleteSchemaCommandInput, cb: (err: any, data?: DeleteSchemaCommandOutput) => void): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): void;
  public deleteSchema(
    args: DeleteSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSchemaCommandOutput) => void),
    cb?: (err: any, data?: DeleteSchemaCommandOutput) => void
  ): Promise<DeleteSchemaCommandOutput> | void {
    const command = new DeleteSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTypedLinkFacetCommandOutput>;
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    cb: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): void;
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): void;
  public deleteTypedLinkFacet(
    args: DeleteTypedLinkFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTypedLinkFacetCommandOutput) => void),
    cb?: (err: any, data?: DeleteTypedLinkFacetCommandOutput) => void
  ): Promise<DeleteTypedLinkFacetCommandOutput> | void {
    const command = new DeleteTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches the specified object from the specified index.</p>
   */
  public detachFromIndex(
    args: DetachFromIndexCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachFromIndexCommandOutput>;
  public detachFromIndex(
    args: DetachFromIndexCommandInput,
    cb: (err: any, data?: DetachFromIndexCommandOutput) => void
  ): void;
  public detachFromIndex(
    args: DetachFromIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachFromIndexCommandOutput) => void
  ): void;
  public detachFromIndex(
    args: DetachFromIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachFromIndexCommandOutput) => void),
    cb?: (err: any, data?: DetachFromIndexCommandOutput) => void
  ): Promise<DetachFromIndexCommandOutput> | void {
    const command = new DetachFromIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a given object from the parent object. The object that is to be detached from the
   *       parent is specified by the link name.</p>
   */
  public detachObject(
    args: DetachObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachObjectCommandOutput>;
  public detachObject(args: DetachObjectCommandInput, cb: (err: any, data?: DetachObjectCommandOutput) => void): void;
  public detachObject(
    args: DetachObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachObjectCommandOutput) => void
  ): void;
  public detachObject(
    args: DetachObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachObjectCommandOutput) => void),
    cb?: (err: any, data?: DetachObjectCommandOutput) => void
  ): Promise<DetachObjectCommandOutput> | void {
    const command = new DetachObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a policy from an object.</p>
   */
  public detachPolicy(
    args: DetachPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachPolicyCommandOutput>;
  public detachPolicy(args: DetachPolicyCommandInput, cb: (err: any, data?: DetachPolicyCommandOutput) => void): void;
  public detachPolicy(
    args: DetachPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachPolicyCommandOutput) => void
  ): void;
  public detachPolicy(
    args: DetachPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachPolicyCommandOutput) => void),
    cb?: (err: any, data?: DetachPolicyCommandOutput) => void
  ): Promise<DetachPolicyCommandOutput> | void {
    const command = new DetachPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public detachTypedLink(
    args: DetachTypedLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DetachTypedLinkCommandOutput>;
  public detachTypedLink(
    args: DetachTypedLinkCommandInput,
    cb: (err: any, data?: DetachTypedLinkCommandOutput) => void
  ): void;
  public detachTypedLink(
    args: DetachTypedLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DetachTypedLinkCommandOutput) => void
  ): void;
  public detachTypedLink(
    args: DetachTypedLinkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DetachTypedLinkCommandOutput) => void),
    cb?: (err: any, data?: DetachTypedLinkCommandOutput) => void
  ): Promise<DetachTypedLinkCommandOutput> | void {
    const command = new DetachTypedLinkCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disables the specified directory. Disabled directories cannot be read or written to.
   *       Only enabled directories can be disabled. Disabled directories may be reenabled.</p>
   */
  public disableDirectory(
    args: DisableDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableDirectoryCommandOutput>;
  public disableDirectory(
    args: DisableDirectoryCommandInput,
    cb: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): void;
  public disableDirectory(
    args: DisableDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): void;
  public disableDirectory(
    args: DisableDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableDirectoryCommandOutput) => void),
    cb?: (err: any, data?: DisableDirectoryCommandOutput) => void
  ): Promise<DisableDirectoryCommandOutput> | void {
    const command = new DisableDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables the specified directory. Only disabled directories can be enabled. Once
   *       enabled, the directory can then be read and written to.</p>
   */
  public enableDirectory(
    args: EnableDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableDirectoryCommandOutput>;
  public enableDirectory(
    args: EnableDirectoryCommandInput,
    cb: (err: any, data?: EnableDirectoryCommandOutput) => void
  ): void;
  public enableDirectory(
    args: EnableDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableDirectoryCommandOutput) => void
  ): void;
  public enableDirectory(
    args: EnableDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableDirectoryCommandOutput) => void),
    cb?: (err: any, data?: EnableDirectoryCommandOutput) => void
  ): Promise<EnableDirectoryCommandOutput> | void {
    const command = new EnableDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns current applied schema version ARN, including the minor version in use.</p>
   */
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAppliedSchemaVersionCommandOutput>;
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    cb: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): void;
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): void;
  public getAppliedSchemaVersion(
    args: GetAppliedSchemaVersionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppliedSchemaVersionCommandOutput) => void),
    cb?: (err: any, data?: GetAppliedSchemaVersionCommandOutput) => void
  ): Promise<GetAppliedSchemaVersionCommandOutput> | void {
    const command = new GetAppliedSchemaVersionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metadata about a directory.</p>
   */
  public getDirectory(
    args: GetDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDirectoryCommandOutput>;
  public getDirectory(args: GetDirectoryCommandInput, cb: (err: any, data?: GetDirectoryCommandOutput) => void): void;
  public getDirectory(
    args: GetDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDirectoryCommandOutput) => void
  ): void;
  public getDirectory(
    args: GetDirectoryCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDirectoryCommandOutput) => void),
    cb?: (err: any, data?: GetDirectoryCommandOutput) => void
  ): Promise<GetDirectoryCommandOutput> | void {
    const command = new GetDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema
   *       facets -- published, development, or applied.</p>
   */
  public getFacet(args: GetFacetCommandInput, options?: __HttpHandlerOptions): Promise<GetFacetCommandOutput>;
  public getFacet(args: GetFacetCommandInput, cb: (err: any, data?: GetFacetCommandOutput) => void): void;
  public getFacet(
    args: GetFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetFacetCommandOutput) => void
  ): void;
  public getFacet(
    args: GetFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetFacetCommandOutput) => void),
    cb?: (err: any, data?: GetFacetCommandOutput) => void
  ): Promise<GetFacetCommandOutput> | void {
    const command = new GetFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves attributes that are associated with a typed link.</p>
   */
  public getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLinkAttributesCommandOutput>;
  public getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    cb: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): void;
  public getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): void;
  public getLinkAttributes(
    args: GetLinkAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLinkAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetLinkAttributesCommandOutput) => void
  ): Promise<GetLinkAttributesCommandOutput> | void {
    const command = new GetLinkAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves attributes within a facet that are associated with an object.</p>
   */
  public getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectAttributesCommandOutput>;
  public getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;
  public getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): void;
  public getObjectAttributes(
    args: GetObjectAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetObjectAttributesCommandOutput) => void),
    cb?: (err: any, data?: GetObjectAttributesCommandOutput) => void
  ): Promise<GetObjectAttributesCommandOutput> | void {
    const command = new GetObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves metadata about an object.</p>
   */
  public getObjectInformation(
    args: GetObjectInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetObjectInformationCommandOutput>;
  public getObjectInformation(
    args: GetObjectInformationCommandInput,
    cb: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): void;
  public getObjectInformation(
    args: GetObjectInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): void;
  public getObjectInformation(
    args: GetObjectInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetObjectInformationCommandOutput) => void),
    cb?: (err: any, data?: GetObjectInformationCommandOutput) => void
  ): Promise<GetObjectInformationCommandOutput> | void {
    const command = new GetObjectInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
   */
  public getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSchemaAsJsonCommandOutput>;
  public getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    cb: (err: any, data?: GetSchemaAsJsonCommandOutput) => void
  ): void;
  public getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSchemaAsJsonCommandOutput) => void
  ): void;
  public getSchemaAsJson(
    args: GetSchemaAsJsonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSchemaAsJsonCommandOutput) => void),
    cb?: (err: any, data?: GetSchemaAsJsonCommandOutput) => void
  ): Promise<GetSchemaAsJsonCommandOutput> | void {
    const command = new GetSchemaAsJsonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTypedLinkFacetInformationCommandOutput>;
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    cb: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): void;
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): void;
  public getTypedLinkFacetInformation(
    args: GetTypedLinkFacetInformationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void),
    cb?: (err: any, data?: GetTypedLinkFacetInformationCommandOutput) => void
  ): Promise<GetTypedLinkFacetInformationCommandOutput> | void {
    const command = new GetTypedLinkFacetInformationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.</p>
   */
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppliedSchemaArnsCommandOutput>;
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    cb: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): void;
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): void;
  public listAppliedSchemaArns(
    args: ListAppliedSchemaArnsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppliedSchemaArnsCommandOutput) => void),
    cb?: (err: any, data?: ListAppliedSchemaArnsCommandOutput) => void
  ): Promise<ListAppliedSchemaArnsCommandOutput> | void {
    const command = new ListAppliedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists indices attached to the specified object.</p>
   */
  public listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAttachedIndicesCommandOutput>;
  public listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    cb: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): void;
  public listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): void;
  public listAttachedIndices(
    args: ListAttachedIndicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAttachedIndicesCommandOutput) => void),
    cb?: (err: any, data?: ListAttachedIndicesCommandOutput) => void
  ): Promise<ListAttachedIndicesCommandOutput> | void {
    const command = new ListAttachedIndicesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves each Amazon Resource Name (ARN) of schemas in the development
   *       state.</p>
   */
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDevelopmentSchemaArnsCommandOutput>;
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    cb: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): void;
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): void;
  public listDevelopmentSchemaArns(
    args: ListDevelopmentSchemaArnsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void),
    cb?: (err: any, data?: ListDevelopmentSchemaArnsCommandOutput) => void
  ): Promise<ListDevelopmentSchemaArnsCommandOutput> | void {
    const command = new ListDevelopmentSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists directories created within an account.</p>
   */
  public listDirectories(
    args: ListDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDirectoriesCommandOutput>;
  public listDirectories(
    args: ListDirectoriesCommandInput,
    cb: (err: any, data?: ListDirectoriesCommandOutput) => void
  ): void;
  public listDirectories(
    args: ListDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDirectoriesCommandOutput) => void
  ): void;
  public listDirectories(
    args: ListDirectoriesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDirectoriesCommandOutput) => void),
    cb?: (err: any, data?: ListDirectoriesCommandOutput) => void
  ): Promise<ListDirectoriesCommandOutput> | void {
    const command = new ListDirectoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves attributes attached to the facet.</p>
   */
  public listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFacetAttributesCommandOutput>;
  public listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    cb: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): void;
  public listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): void;
  public listFacetAttributes(
    args: ListFacetAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFacetAttributesCommandOutput) => void),
    cb?: (err: any, data?: ListFacetAttributesCommandOutput) => void
  ): Promise<ListFacetAttributesCommandOutput> | void {
    const command = new ListFacetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves the names of facets that exist in a schema.</p>
   */
  public listFacetNames(
    args: ListFacetNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFacetNamesCommandOutput>;
  public listFacetNames(
    args: ListFacetNamesCommandInput,
    cb: (err: any, data?: ListFacetNamesCommandOutput) => void
  ): void;
  public listFacetNames(
    args: ListFacetNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFacetNamesCommandOutput) => void
  ): void;
  public listFacetNames(
    args: ListFacetNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFacetNamesCommandOutput) => void),
    cb?: (err: any, data?: ListFacetNamesCommandOutput) => void
  ): Promise<ListFacetNamesCommandOutput> | void {
    const command = new ListFacetNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a>
   *       information for an object. It also supports filtering by typed link facet and identity
   *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIncomingTypedLinksCommandOutput>;
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    cb: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): void;
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): void;
  public listIncomingTypedLinks(
    args: ListIncomingTypedLinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIncomingTypedLinksCommandOutput) => void),
    cb?: (err: any, data?: ListIncomingTypedLinksCommandOutput) => void
  ): Promise<ListIncomingTypedLinksCommandOutput> | void {
    const command = new ListIncomingTypedLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists objects attached to the specified index.</p>
   */
  public listIndex(args: ListIndexCommandInput, options?: __HttpHandlerOptions): Promise<ListIndexCommandOutput>;
  public listIndex(args: ListIndexCommandInput, cb: (err: any, data?: ListIndexCommandOutput) => void): void;
  public listIndex(
    args: ListIndexCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexCommandOutput) => void
  ): void;
  public listIndex(
    args: ListIndexCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListIndexCommandOutput) => void),
    cb?: (err: any, data?: ListIndexCommandOutput) => void
  ): Promise<ListIndexCommandOutput> | void {
    const command = new ListIndexCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.</p>
   */
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListManagedSchemaArnsCommandOutput>;
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    cb: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): void;
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): void;
  public listManagedSchemaArns(
    args: ListManagedSchemaArnsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListManagedSchemaArnsCommandOutput) => void),
    cb?: (err: any, data?: ListManagedSchemaArnsCommandOutput) => void
  ): Promise<ListManagedSchemaArnsCommandOutput> | void {
    const command = new ListManagedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all attributes that are associated with an object.
   *       </p>
   */
  public listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectAttributesCommandOutput>;
  public listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    cb: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): void;
  public listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): void;
  public listObjectAttributes(
    args: ListObjectAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObjectAttributesCommandOutput) => void),
    cb?: (err: any, data?: ListObjectAttributesCommandOutput) => void
  ): Promise<ListObjectAttributesCommandOutput> | void {
    const command = new ListObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of child objects that are associated with a given
   *       object.</p>
   */
  public listObjectChildren(
    args: ListObjectChildrenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectChildrenCommandOutput>;
  public listObjectChildren(
    args: ListObjectChildrenCommandInput,
    cb: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): void;
  public listObjectChildren(
    args: ListObjectChildrenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): void;
  public listObjectChildren(
    args: ListObjectChildrenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObjectChildrenCommandOutput) => void),
    cb?: (err: any, data?: ListObjectChildrenCommandOutput) => void
  ): Promise<ListObjectChildrenCommandOutput> | void {
    const command = new ListObjectChildrenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves all available parent paths for any object type such as node, leaf node,
   *       policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p>
   *          <p>Use this API to evaluate all parents for an object. The call returns all objects from
   *       the root of the directory up to the requested object. The API returns the number of paths
   *       based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent.
   *       The order of the paths and nodes returned is consistent among multiple API calls unless the
   *       objects are deleted or moved. Paths not leading to the directory root are ignored from the
   *       target object.</p>
   */
  public listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectParentPathsCommandOutput>;
  public listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    cb: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): void;
  public listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): void;
  public listObjectParentPaths(
    args: ListObjectParentPathsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObjectParentPathsCommandOutput) => void),
    cb?: (err: any, data?: ListObjectParentPathsCommandOutput) => void
  ): Promise<ListObjectParentPathsCommandOutput> | void {
    const command = new ListObjectParentPathsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists parent objects that are associated with a given object in pagination
   *       fashion.</p>
   */
  public listObjectParents(
    args: ListObjectParentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectParentsCommandOutput>;
  public listObjectParents(
    args: ListObjectParentsCommandInput,
    cb: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): void;
  public listObjectParents(
    args: ListObjectParentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): void;
  public listObjectParents(
    args: ListObjectParentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObjectParentsCommandOutput) => void),
    cb?: (err: any, data?: ListObjectParentsCommandOutput) => void
  ): Promise<ListObjectParentsCommandOutput> | void {
    const command = new ListObjectParentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns policies attached to an object in pagination fashion.</p>
   */
  public listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListObjectPoliciesCommandOutput>;
  public listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    cb: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): void;
  public listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): void;
  public listObjectPolicies(
    args: ListObjectPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListObjectPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListObjectPoliciesCommandOutput) => void
  ): Promise<ListObjectPoliciesCommandOutput> | void {
    const command = new ListObjectPoliciesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a>
   *       information for an object. It also supports filtering by typed link facet and identity
   *       attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOutgoingTypedLinksCommandOutput>;
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    cb: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): void;
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): void;
  public listOutgoingTypedLinks(
    args: ListOutgoingTypedLinksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOutgoingTypedLinksCommandOutput) => void),
    cb?: (err: any, data?: ListOutgoingTypedLinksCommandOutput) => void
  ): Promise<ListOutgoingTypedLinksCommandOutput> | void {
    const command = new ListOutgoingTypedLinksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.</p>
   */
  public listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPolicyAttachmentsCommandOutput>;
  public listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    cb: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): void;
  public listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): void;
  public listPolicyAttachments(
    args: ListPolicyAttachmentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPolicyAttachmentsCommandOutput) => void),
    cb?: (err: any, data?: ListPolicyAttachmentsCommandOutput) => void
  ): Promise<ListPolicyAttachmentsCommandOutput> | void {
    const command = new ListPolicyAttachmentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.</p>
   */
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPublishedSchemaArnsCommandOutput>;
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    cb: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
  ): void;
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
  ): void;
  public listPublishedSchemaArns(
    args: ListPublishedSchemaArnsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPublishedSchemaArnsCommandOutput) => void),
    cb?: (err: any, data?: ListPublishedSchemaArnsCommandOutput) => void
  ): Promise<ListPublishedSchemaArnsCommandOutput> | void {
    const command = new ListPublishedSchemaArnsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns tags for a resource. Tagging is currently supported only for directories with a
   *       limit of 50 tags per directory. All 50 tags are returned for a given directory with this API
   *       call.</p>
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
   * <p>Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypedLinkFacetAttributesCommandOutput>;
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    cb: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): void;
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): void;
  public listTypedLinkFacetAttributes(
    args: ListTypedLinkFacetAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void),
    cb?: (err: any, data?: ListTypedLinkFacetAttributesCommandOutput) => void
  ): Promise<ListTypedLinkFacetAttributesCommandOutput> | void {
    const command = new ListTypedLinkFacetAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns a paginated list of <code>TypedLink</code> facet names for a particular schema.
   *       For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTypedLinkFacetNamesCommandOutput>;
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    cb: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): void;
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): void;
  public listTypedLinkFacetNames(
    args: ListTypedLinkFacetNamesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void),
    cb?: (err: any, data?: ListTypedLinkFacetNamesCommandOutput) => void
  ): Promise<ListTypedLinkFacetNamesCommandOutput> | void {
    const command = new ListTypedLinkFacetNamesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists all policies from the root of the <a>Directory</a> to the object
   *       specified. If there are no policies present, an empty list is returned. If policies are
   *       present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code>
   *       for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and
   *       <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more
   *       information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.</p>
   */
  public lookupPolicy(
    args: LookupPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LookupPolicyCommandOutput>;
  public lookupPolicy(args: LookupPolicyCommandInput, cb: (err: any, data?: LookupPolicyCommandOutput) => void): void;
  public lookupPolicy(
    args: LookupPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LookupPolicyCommandOutput) => void
  ): void;
  public lookupPolicy(
    args: LookupPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LookupPolicyCommandOutput) => void),
    cb?: (err: any, data?: LookupPolicyCommandOutput) => void
  ): Promise<LookupPolicyCommandOutput> | void {
    const command = new LookupPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Publishes a development schema with a major version and a recommended minor version.</p>
   */
  public publishSchema(
    args: PublishSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PublishSchemaCommandOutput>;
  public publishSchema(
    args: PublishSchemaCommandInput,
    cb: (err: any, data?: PublishSchemaCommandOutput) => void
  ): void;
  public publishSchema(
    args: PublishSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PublishSchemaCommandOutput) => void
  ): void;
  public publishSchema(
    args: PublishSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PublishSchemaCommandOutput) => void),
    cb?: (err: any, data?: PublishSchemaCommandOutput) => void
  ): Promise<PublishSchemaCommandOutput> | void {
    const command = new PublishSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.</p>
   */
  public putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutSchemaFromJsonCommandOutput>;
  public putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    cb: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): void;
  public putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): void;
  public putSchemaFromJson(
    args: PutSchemaFromJsonCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSchemaFromJsonCommandOutput) => void),
    cb?: (err: any, data?: PutSchemaFromJsonCommandOutput) => void
  ): Promise<PutSchemaFromJsonCommandOutput> | void {
    const command = new PutSchemaFromJsonCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the specified facet from the specified object.</p>
   */
  public removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveFacetFromObjectCommandOutput>;
  public removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    cb: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
  ): void;
  public removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
  ): void;
  public removeFacetFromObject(
    args: RemoveFacetFromObjectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveFacetFromObjectCommandOutput) => void),
    cb?: (err: any, data?: RemoveFacetFromObjectCommandOutput) => void
  ): Promise<RemoveFacetFromObjectCommandOutput> | void {
    const command = new RemoveFacetFromObjectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>An API operation for adding tags to a resource.</p>
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
   * <p>An API operation for removing tags from a resource.</p>
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
   * <p>Does the following:</p>
   *          <ol>
   *             <li>
   *                <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
   *             </li>
   *             <li>
   *                <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
   *             </li>
   *             <li>
   *                <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p>
   *             </li>
   *          </ol>
   */
  public updateFacet(args: UpdateFacetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateFacetCommandOutput>;
  public updateFacet(args: UpdateFacetCommandInput, cb: (err: any, data?: UpdateFacetCommandOutput) => void): void;
  public updateFacet(
    args: UpdateFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFacetCommandOutput) => void
  ): void;
  public updateFacet(
    args: UpdateFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFacetCommandOutput) => void),
    cb?: (err: any, data?: UpdateFacetCommandOutput) => void
  ): Promise<UpdateFacetCommandOutput> | void {
    const command = new UpdateFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.</p>
   */
  public updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLinkAttributesCommandOutput>;
  public updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    cb: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): void;
  public updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): void;
  public updateLinkAttributes(
    args: UpdateLinkAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLinkAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateLinkAttributesCommandOutput) => void
  ): Promise<UpdateLinkAttributesCommandOutput> | void {
    const command = new UpdateLinkAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a given object's attributes.</p>
   */
  public updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateObjectAttributesCommandOutput>;
  public updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    cb: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): void;
  public updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): void;
  public updateObjectAttributes(
    args: UpdateObjectAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateObjectAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateObjectAttributesCommandOutput) => void
  ): Promise<UpdateObjectAttributesCommandOutput> | void {
    const command = new UpdateObjectAttributesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the schema name with a new name. Only development schema names can be
   *       updated.</p>
   */
  public updateSchema(
    args: UpdateSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSchemaCommandOutput>;
  public updateSchema(args: UpdateSchemaCommandInput, cb: (err: any, data?: UpdateSchemaCommandOutput) => void): void;
  public updateSchema(
    args: UpdateSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): void;
  public updateSchema(
    args: UpdateSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSchemaCommandOutput) => void),
    cb?: (err: any, data?: UpdateSchemaCommandOutput) => void
  ): Promise<UpdateSchemaCommandOutput> | void {
    const command = new UpdateSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.</p>
   */
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTypedLinkFacetCommandOutput>;
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    cb: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): void;
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): void;
  public updateTypedLinkFacet(
    args: UpdateTypedLinkFacetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTypedLinkFacetCommandOutput) => void),
    cb?: (err: any, data?: UpdateTypedLinkFacetCommandOutput) => void
  ): Promise<UpdateTypedLinkFacetCommandOutput> | void {
    const command = new UpdateTypedLinkFacetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.</p>
   */
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradeAppliedSchemaCommandOutput>;
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    cb: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): void;
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): void;
  public upgradeAppliedSchema(
    args: UpgradeAppliedSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpgradeAppliedSchemaCommandOutput) => void),
    cb?: (err: any, data?: UpgradeAppliedSchemaCommandOutput) => void
  ): Promise<UpgradeAppliedSchemaCommandOutput> | void {
    const command = new UpgradeAppliedSchemaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.</p>
   */
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpgradePublishedSchemaCommandOutput>;
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    cb: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): void;
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): void;
  public upgradePublishedSchema(
    args: UpgradePublishedSchemaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpgradePublishedSchemaCommandOutput) => void),
    cb?: (err: any, data?: UpgradePublishedSchemaCommandOutput) => void
  ): Promise<UpgradePublishedSchemaCommandOutput> | void {
    const command = new UpgradePublishedSchemaCommand(args);
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
