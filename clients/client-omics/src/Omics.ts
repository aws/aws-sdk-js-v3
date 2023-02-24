// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchDeleteReadSetCommand,
  BatchDeleteReadSetCommandInput,
  BatchDeleteReadSetCommandOutput,
} from "./commands/BatchDeleteReadSetCommand";
import {
  CancelAnnotationImportJobCommand,
  CancelAnnotationImportJobCommandInput,
  CancelAnnotationImportJobCommandOutput,
} from "./commands/CancelAnnotationImportJobCommand";
import { CancelRunCommand, CancelRunCommandInput, CancelRunCommandOutput } from "./commands/CancelRunCommand";
import {
  CancelVariantImportJobCommand,
  CancelVariantImportJobCommandInput,
  CancelVariantImportJobCommandOutput,
} from "./commands/CancelVariantImportJobCommand";
import {
  CreateAnnotationStoreCommand,
  CreateAnnotationStoreCommandInput,
  CreateAnnotationStoreCommandOutput,
} from "./commands/CreateAnnotationStoreCommand";
import {
  CreateReferenceStoreCommand,
  CreateReferenceStoreCommandInput,
  CreateReferenceStoreCommandOutput,
} from "./commands/CreateReferenceStoreCommand";
import {
  CreateRunGroupCommand,
  CreateRunGroupCommandInput,
  CreateRunGroupCommandOutput,
} from "./commands/CreateRunGroupCommand";
import {
  CreateSequenceStoreCommand,
  CreateSequenceStoreCommandInput,
  CreateSequenceStoreCommandOutput,
} from "./commands/CreateSequenceStoreCommand";
import {
  CreateVariantStoreCommand,
  CreateVariantStoreCommandInput,
  CreateVariantStoreCommandOutput,
} from "./commands/CreateVariantStoreCommand";
import {
  CreateWorkflowCommand,
  CreateWorkflowCommandInput,
  CreateWorkflowCommandOutput,
} from "./commands/CreateWorkflowCommand";
import {
  DeleteAnnotationStoreCommand,
  DeleteAnnotationStoreCommandInput,
  DeleteAnnotationStoreCommandOutput,
} from "./commands/DeleteAnnotationStoreCommand";
import {
  DeleteReferenceCommand,
  DeleteReferenceCommandInput,
  DeleteReferenceCommandOutput,
} from "./commands/DeleteReferenceCommand";
import {
  DeleteReferenceStoreCommand,
  DeleteReferenceStoreCommandInput,
  DeleteReferenceStoreCommandOutput,
} from "./commands/DeleteReferenceStoreCommand";
import { DeleteRunCommand, DeleteRunCommandInput, DeleteRunCommandOutput } from "./commands/DeleteRunCommand";
import {
  DeleteRunGroupCommand,
  DeleteRunGroupCommandInput,
  DeleteRunGroupCommandOutput,
} from "./commands/DeleteRunGroupCommand";
import {
  DeleteSequenceStoreCommand,
  DeleteSequenceStoreCommandInput,
  DeleteSequenceStoreCommandOutput,
} from "./commands/DeleteSequenceStoreCommand";
import {
  DeleteVariantStoreCommand,
  DeleteVariantStoreCommandInput,
  DeleteVariantStoreCommandOutput,
} from "./commands/DeleteVariantStoreCommand";
import {
  DeleteWorkflowCommand,
  DeleteWorkflowCommandInput,
  DeleteWorkflowCommandOutput,
} from "./commands/DeleteWorkflowCommand";
import {
  GetAnnotationImportJobCommand,
  GetAnnotationImportJobCommandInput,
  GetAnnotationImportJobCommandOutput,
} from "./commands/GetAnnotationImportJobCommand";
import {
  GetAnnotationStoreCommand,
  GetAnnotationStoreCommandInput,
  GetAnnotationStoreCommandOutput,
} from "./commands/GetAnnotationStoreCommand";
import {
  GetReadSetActivationJobCommand,
  GetReadSetActivationJobCommandInput,
  GetReadSetActivationJobCommandOutput,
} from "./commands/GetReadSetActivationJobCommand";
import { GetReadSetCommand, GetReadSetCommandInput, GetReadSetCommandOutput } from "./commands/GetReadSetCommand";
import {
  GetReadSetExportJobCommand,
  GetReadSetExportJobCommandInput,
  GetReadSetExportJobCommandOutput,
} from "./commands/GetReadSetExportJobCommand";
import {
  GetReadSetImportJobCommand,
  GetReadSetImportJobCommandInput,
  GetReadSetImportJobCommandOutput,
} from "./commands/GetReadSetImportJobCommand";
import {
  GetReadSetMetadataCommand,
  GetReadSetMetadataCommandInput,
  GetReadSetMetadataCommandOutput,
} from "./commands/GetReadSetMetadataCommand";
import {
  GetReferenceCommand,
  GetReferenceCommandInput,
  GetReferenceCommandOutput,
} from "./commands/GetReferenceCommand";
import {
  GetReferenceImportJobCommand,
  GetReferenceImportJobCommandInput,
  GetReferenceImportJobCommandOutput,
} from "./commands/GetReferenceImportJobCommand";
import {
  GetReferenceMetadataCommand,
  GetReferenceMetadataCommandInput,
  GetReferenceMetadataCommandOutput,
} from "./commands/GetReferenceMetadataCommand";
import {
  GetReferenceStoreCommand,
  GetReferenceStoreCommandInput,
  GetReferenceStoreCommandOutput,
} from "./commands/GetReferenceStoreCommand";
import { GetRunCommand, GetRunCommandInput, GetRunCommandOutput } from "./commands/GetRunCommand";
import { GetRunGroupCommand, GetRunGroupCommandInput, GetRunGroupCommandOutput } from "./commands/GetRunGroupCommand";
import { GetRunTaskCommand, GetRunTaskCommandInput, GetRunTaskCommandOutput } from "./commands/GetRunTaskCommand";
import {
  GetSequenceStoreCommand,
  GetSequenceStoreCommandInput,
  GetSequenceStoreCommandOutput,
} from "./commands/GetSequenceStoreCommand";
import {
  GetVariantImportJobCommand,
  GetVariantImportJobCommandInput,
  GetVariantImportJobCommandOutput,
} from "./commands/GetVariantImportJobCommand";
import {
  GetVariantStoreCommand,
  GetVariantStoreCommandInput,
  GetVariantStoreCommandOutput,
} from "./commands/GetVariantStoreCommand";
import { GetWorkflowCommand, GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import {
  ListAnnotationImportJobsCommand,
  ListAnnotationImportJobsCommandInput,
  ListAnnotationImportJobsCommandOutput,
} from "./commands/ListAnnotationImportJobsCommand";
import {
  ListAnnotationStoresCommand,
  ListAnnotationStoresCommandInput,
  ListAnnotationStoresCommandOutput,
} from "./commands/ListAnnotationStoresCommand";
import {
  ListReadSetActivationJobsCommand,
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "./commands/ListReadSetActivationJobsCommand";
import {
  ListReadSetExportJobsCommand,
  ListReadSetExportJobsCommandInput,
  ListReadSetExportJobsCommandOutput,
} from "./commands/ListReadSetExportJobsCommand";
import {
  ListReadSetImportJobsCommand,
  ListReadSetImportJobsCommandInput,
  ListReadSetImportJobsCommandOutput,
} from "./commands/ListReadSetImportJobsCommand";
import {
  ListReadSetsCommand,
  ListReadSetsCommandInput,
  ListReadSetsCommandOutput,
} from "./commands/ListReadSetsCommand";
import {
  ListReferenceImportJobsCommand,
  ListReferenceImportJobsCommandInput,
  ListReferenceImportJobsCommandOutput,
} from "./commands/ListReferenceImportJobsCommand";
import {
  ListReferencesCommand,
  ListReferencesCommandInput,
  ListReferencesCommandOutput,
} from "./commands/ListReferencesCommand";
import {
  ListReferenceStoresCommand,
  ListReferenceStoresCommandInput,
  ListReferenceStoresCommandOutput,
} from "./commands/ListReferenceStoresCommand";
import {
  ListRunGroupsCommand,
  ListRunGroupsCommandInput,
  ListRunGroupsCommandOutput,
} from "./commands/ListRunGroupsCommand";
import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "./commands/ListRunsCommand";
import {
  ListRunTasksCommand,
  ListRunTasksCommandInput,
  ListRunTasksCommandOutput,
} from "./commands/ListRunTasksCommand";
import {
  ListSequenceStoresCommand,
  ListSequenceStoresCommandInput,
  ListSequenceStoresCommandOutput,
} from "./commands/ListSequenceStoresCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVariantImportJobsCommand,
  ListVariantImportJobsCommandInput,
  ListVariantImportJobsCommandOutput,
} from "./commands/ListVariantImportJobsCommand";
import {
  ListVariantStoresCommand,
  ListVariantStoresCommandInput,
  ListVariantStoresCommandOutput,
} from "./commands/ListVariantStoresCommand";
import {
  ListWorkflowsCommand,
  ListWorkflowsCommandInput,
  ListWorkflowsCommandOutput,
} from "./commands/ListWorkflowsCommand";
import {
  StartAnnotationImportJobCommand,
  StartAnnotationImportJobCommandInput,
  StartAnnotationImportJobCommandOutput,
} from "./commands/StartAnnotationImportJobCommand";
import {
  StartReadSetActivationJobCommand,
  StartReadSetActivationJobCommandInput,
  StartReadSetActivationJobCommandOutput,
} from "./commands/StartReadSetActivationJobCommand";
import {
  StartReadSetExportJobCommand,
  StartReadSetExportJobCommandInput,
  StartReadSetExportJobCommandOutput,
} from "./commands/StartReadSetExportJobCommand";
import {
  StartReadSetImportJobCommand,
  StartReadSetImportJobCommandInput,
  StartReadSetImportJobCommandOutput,
} from "./commands/StartReadSetImportJobCommand";
import {
  StartReferenceImportJobCommand,
  StartReferenceImportJobCommandInput,
  StartReferenceImportJobCommandOutput,
} from "./commands/StartReferenceImportJobCommand";
import { StartRunCommand, StartRunCommandInput, StartRunCommandOutput } from "./commands/StartRunCommand";
import {
  StartVariantImportJobCommand,
  StartVariantImportJobCommandInput,
  StartVariantImportJobCommandOutput,
} from "./commands/StartVariantImportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAnnotationStoreCommand,
  UpdateAnnotationStoreCommandInput,
  UpdateAnnotationStoreCommandOutput,
} from "./commands/UpdateAnnotationStoreCommand";
import {
  UpdateRunGroupCommand,
  UpdateRunGroupCommandInput,
  UpdateRunGroupCommandOutput,
} from "./commands/UpdateRunGroupCommand";
import {
  UpdateVariantStoreCommand,
  UpdateVariantStoreCommandInput,
  UpdateVariantStoreCommandOutput,
} from "./commands/UpdateVariantStoreCommand";
import {
  UpdateWorkflowCommand,
  UpdateWorkflowCommandInput,
  UpdateWorkflowCommandOutput,
} from "./commands/UpdateWorkflowCommand";
import { OmicsClient } from "./OmicsClient";

/**
 * <p>This is the <i>Amazon Omics API Reference</i>. For an introduction to the service, see <a href="https://docs.aws.amazon.com/omics/latest/dev/">What is Amazon Omics?</a> in the
 *       <i>Amazon Omics Developer Guide</i>.</p>
 */
export class Omics extends OmicsClient {
  /**
   * <p>Deletes one or more read sets.</p>
   */
  public batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDeleteReadSetCommandOutput>;
  public batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;
  public batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): void;
  public batchDeleteReadSet(
    args: BatchDeleteReadSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDeleteReadSetCommandOutput) => void),
    cb?: (err: any, data?: BatchDeleteReadSetCommandOutput) => void
  ): Promise<BatchDeleteReadSetCommandOutput> | void {
    const command = new BatchDeleteReadSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels an annotation import job.</p>
   */
  public cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelAnnotationImportJobCommandOutput>;
  public cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;
  public cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): void;
  public cancelAnnotationImportJob(
    args: CancelAnnotationImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelAnnotationImportJobCommandOutput) => void),
    cb?: (err: any, data?: CancelAnnotationImportJobCommandOutput) => void
  ): Promise<CancelAnnotationImportJobCommandOutput> | void {
    const command = new CancelAnnotationImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a run.</p>
   */
  public cancelRun(args: CancelRunCommandInput, options?: __HttpHandlerOptions): Promise<CancelRunCommandOutput>;
  public cancelRun(args: CancelRunCommandInput, cb: (err: any, data?: CancelRunCommandOutput) => void): void;
  public cancelRun(
    args: CancelRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelRunCommandOutput) => void
  ): void;
  public cancelRun(
    args: CancelRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelRunCommandOutput) => void),
    cb?: (err: any, data?: CancelRunCommandOutput) => void
  ): Promise<CancelRunCommandOutput> | void {
    const command = new CancelRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a variant import job.</p>
   */
  public cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelVariantImportJobCommandOutput>;
  public cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;
  public cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): void;
  public cancelVariantImportJob(
    args: CancelVariantImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelVariantImportJobCommandOutput) => void),
    cb?: (err: any, data?: CancelVariantImportJobCommandOutput) => void
  ): Promise<CancelVariantImportJobCommandOutput> | void {
    const command = new CancelVariantImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an annotation store.</p>
   */
  public createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAnnotationStoreCommandOutput>;
  public createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;
  public createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): void;
  public createAnnotationStore(
    args: CreateAnnotationStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAnnotationStoreCommandOutput) => void),
    cb?: (err: any, data?: CreateAnnotationStoreCommandOutput) => void
  ): Promise<CreateAnnotationStoreCommandOutput> | void {
    const command = new CreateAnnotationStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a reference store.</p>
   */
  public createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReferenceStoreCommandOutput>;
  public createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;
  public createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): void;
  public createReferenceStore(
    args: CreateReferenceStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateReferenceStoreCommandOutput) => void),
    cb?: (err: any, data?: CreateReferenceStoreCommandOutput) => void
  ): Promise<CreateReferenceStoreCommandOutput> | void {
    const command = new CreateReferenceStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a run group.</p>
   */
  public createRunGroup(
    args: CreateRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRunGroupCommandOutput>;
  public createRunGroup(
    args: CreateRunGroupCommandInput,
    cb: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): void;
  public createRunGroup(
    args: CreateRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): void;
  public createRunGroup(
    args: CreateRunGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRunGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateRunGroupCommandOutput) => void
  ): Promise<CreateRunGroupCommandOutput> | void {
    const command = new CreateRunGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a sequence store.</p>
   */
  public createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSequenceStoreCommandOutput>;
  public createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;
  public createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): void;
  public createSequenceStore(
    args: CreateSequenceStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateSequenceStoreCommandOutput) => void),
    cb?: (err: any, data?: CreateSequenceStoreCommandOutput) => void
  ): Promise<CreateSequenceStoreCommandOutput> | void {
    const command = new CreateSequenceStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a variant store.</p>
   */
  public createVariantStore(
    args: CreateVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVariantStoreCommandOutput>;
  public createVariantStore(
    args: CreateVariantStoreCommandInput,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;
  public createVariantStore(
    args: CreateVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): void;
  public createVariantStore(
    args: CreateVariantStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateVariantStoreCommandOutput) => void),
    cb?: (err: any, data?: CreateVariantStoreCommandOutput) => void
  ): Promise<CreateVariantStoreCommandOutput> | void {
    const command = new CreateVariantStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a workflow.</p>
   */
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkflowCommandOutput>;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): void;
  public createWorkflow(
    args: CreateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkflowCommandOutput) => void
  ): Promise<CreateWorkflowCommandOutput> | void {
    const command = new CreateWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an annotation store.</p>
   */
  public deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAnnotationStoreCommandOutput>;
  public deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;
  public deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): void;
  public deleteAnnotationStore(
    args: DeleteAnnotationStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAnnotationStoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteAnnotationStoreCommandOutput) => void
  ): Promise<DeleteAnnotationStoreCommandOutput> | void {
    const command = new DeleteAnnotationStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a genome reference.</p>
   */
  public deleteReference(
    args: DeleteReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReferenceCommandOutput>;
  public deleteReference(
    args: DeleteReferenceCommandInput,
    cb: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): void;
  public deleteReference(
    args: DeleteReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): void;
  public deleteReference(
    args: DeleteReferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReferenceCommandOutput) => void),
    cb?: (err: any, data?: DeleteReferenceCommandOutput) => void
  ): Promise<DeleteReferenceCommandOutput> | void {
    const command = new DeleteReferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a genome reference store.</p>
   */
  public deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReferenceStoreCommandOutput>;
  public deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;
  public deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): void;
  public deleteReferenceStore(
    args: DeleteReferenceStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteReferenceStoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteReferenceStoreCommandOutput) => void
  ): Promise<DeleteReferenceStoreCommandOutput> | void {
    const command = new DeleteReferenceStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a workflow run.</p>
   */
  public deleteRun(args: DeleteRunCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRunCommandOutput>;
  public deleteRun(args: DeleteRunCommandInput, cb: (err: any, data?: DeleteRunCommandOutput) => void): void;
  public deleteRun(
    args: DeleteRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunCommandOutput) => void
  ): void;
  public deleteRun(
    args: DeleteRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRunCommandOutput) => void),
    cb?: (err: any, data?: DeleteRunCommandOutput) => void
  ): Promise<DeleteRunCommandOutput> | void {
    const command = new DeleteRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a workflow run group.</p>
   */
  public deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRunGroupCommandOutput>;
  public deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    cb: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): void;
  public deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): void;
  public deleteRunGroup(
    args: DeleteRunGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRunGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteRunGroupCommandOutput) => void
  ): Promise<DeleteRunGroupCommandOutput> | void {
    const command = new DeleteRunGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a sequence store.</p>
   */
  public deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSequenceStoreCommandOutput>;
  public deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;
  public deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): void;
  public deleteSequenceStore(
    args: DeleteSequenceStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSequenceStoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteSequenceStoreCommandOutput) => void
  ): Promise<DeleteSequenceStoreCommandOutput> | void {
    const command = new DeleteSequenceStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a variant store.</p>
   */
  public deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVariantStoreCommandOutput>;
  public deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;
  public deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): void;
  public deleteVariantStore(
    args: DeleteVariantStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteVariantStoreCommandOutput) => void),
    cb?: (err: any, data?: DeleteVariantStoreCommandOutput) => void
  ): Promise<DeleteVariantStoreCommandOutput> | void {
    const command = new DeleteVariantStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a workflow.</p>
   */
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkflowCommandOutput>;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): void;
  public deleteWorkflow(
    args: DeleteWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWorkflowCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkflowCommandOutput) => void
  ): Promise<DeleteWorkflowCommandOutput> | void {
    const command = new DeleteWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an annotation import job.</p>
   */
  public getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationImportJobCommandOutput>;
  public getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;
  public getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): void;
  public getAnnotationImportJob(
    args: GetAnnotationImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnnotationImportJobCommandOutput) => void),
    cb?: (err: any, data?: GetAnnotationImportJobCommandOutput) => void
  ): Promise<GetAnnotationImportJobCommandOutput> | void {
    const command = new GetAnnotationImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about an annotation store.</p>
   */
  public getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAnnotationStoreCommandOutput>;
  public getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;
  public getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): void;
  public getAnnotationStore(
    args: GetAnnotationStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAnnotationStoreCommandOutput) => void),
    cb?: (err: any, data?: GetAnnotationStoreCommandOutput) => void
  ): Promise<GetAnnotationStoreCommandOutput> | void {
    const command = new GetAnnotationStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a file from a read set.</p>
   */
  public getReadSet(args: GetReadSetCommandInput, options?: __HttpHandlerOptions): Promise<GetReadSetCommandOutput>;
  public getReadSet(args: GetReadSetCommandInput, cb: (err: any, data?: GetReadSetCommandOutput) => void): void;
  public getReadSet(
    args: GetReadSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetCommandOutput) => void
  ): void;
  public getReadSet(
    args: GetReadSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadSetCommandOutput) => void),
    cb?: (err: any, data?: GetReadSetCommandOutput) => void
  ): Promise<GetReadSetCommandOutput> | void {
    const command = new GetReadSetCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a read set activation job.</p>
   */
  public getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetActivationJobCommandOutput>;
  public getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;
  public getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): void;
  public getReadSetActivationJob(
    args: GetReadSetActivationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadSetActivationJobCommandOutput) => void),
    cb?: (err: any, data?: GetReadSetActivationJobCommandOutput) => void
  ): Promise<GetReadSetActivationJobCommandOutput> | void {
    const command = new GetReadSetActivationJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a read set export job.</p>
   */
  public getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetExportJobCommandOutput>;
  public getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;
  public getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): void;
  public getReadSetExportJob(
    args: GetReadSetExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadSetExportJobCommandOutput) => void),
    cb?: (err: any, data?: GetReadSetExportJobCommandOutput) => void
  ): Promise<GetReadSetExportJobCommandOutput> | void {
    const command = new GetReadSetExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a read set import job.</p>
   */
  public getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetImportJobCommandOutput>;
  public getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;
  public getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): void;
  public getReadSetImportJob(
    args: GetReadSetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadSetImportJobCommandOutput) => void),
    cb?: (err: any, data?: GetReadSetImportJobCommandOutput) => void
  ): Promise<GetReadSetImportJobCommandOutput> | void {
    const command = new GetReadSetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets details about a read set.</p>
   */
  public getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReadSetMetadataCommandOutput>;
  public getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;
  public getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): void;
  public getReadSetMetadata(
    args: GetReadSetMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReadSetMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetReadSetMetadataCommandOutput) => void
  ): Promise<GetReadSetMetadataCommandOutput> | void {
    const command = new GetReadSetMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a reference file.</p>
   */
  public getReference(
    args: GetReferenceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceCommandOutput>;
  public getReference(args: GetReferenceCommandInput, cb: (err: any, data?: GetReferenceCommandOutput) => void): void;
  public getReference(
    args: GetReferenceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceCommandOutput) => void
  ): void;
  public getReference(
    args: GetReferenceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReferenceCommandOutput) => void),
    cb?: (err: any, data?: GetReferenceCommandOutput) => void
  ): Promise<GetReferenceCommandOutput> | void {
    const command = new GetReferenceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a reference import job.</p>
   */
  public getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceImportJobCommandOutput>;
  public getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;
  public getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): void;
  public getReferenceImportJob(
    args: GetReferenceImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReferenceImportJobCommandOutput) => void),
    cb?: (err: any, data?: GetReferenceImportJobCommandOutput) => void
  ): Promise<GetReferenceImportJobCommandOutput> | void {
    const command = new GetReferenceImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a genome reference's metadata.</p>
   */
  public getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceMetadataCommandOutput>;
  public getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;
  public getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): void;
  public getReferenceMetadata(
    args: GetReferenceMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReferenceMetadataCommandOutput) => void),
    cb?: (err: any, data?: GetReferenceMetadataCommandOutput) => void
  ): Promise<GetReferenceMetadataCommandOutput> | void {
    const command = new GetReferenceMetadataCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a reference store.</p>
   */
  public getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetReferenceStoreCommandOutput>;
  public getReferenceStore(
    args: GetReferenceStoreCommandInput,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;
  public getReferenceStore(
    args: GetReferenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): void;
  public getReferenceStore(
    args: GetReferenceStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetReferenceStoreCommandOutput) => void),
    cb?: (err: any, data?: GetReferenceStoreCommandOutput) => void
  ): Promise<GetReferenceStoreCommandOutput> | void {
    const command = new GetReferenceStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a workflow run.</p>
   */
  public getRun(args: GetRunCommandInput, options?: __HttpHandlerOptions): Promise<GetRunCommandOutput>;
  public getRun(args: GetRunCommandInput, cb: (err: any, data?: GetRunCommandOutput) => void): void;
  public getRun(
    args: GetRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunCommandOutput) => void
  ): void;
  public getRun(
    args: GetRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRunCommandOutput) => void),
    cb?: (err: any, data?: GetRunCommandOutput) => void
  ): Promise<GetRunCommandOutput> | void {
    const command = new GetRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a workflow run group.</p>
   */
  public getRunGroup(args: GetRunGroupCommandInput, options?: __HttpHandlerOptions): Promise<GetRunGroupCommandOutput>;
  public getRunGroup(args: GetRunGroupCommandInput, cb: (err: any, data?: GetRunGroupCommandOutput) => void): void;
  public getRunGroup(
    args: GetRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunGroupCommandOutput) => void
  ): void;
  public getRunGroup(
    args: GetRunGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRunGroupCommandOutput) => void),
    cb?: (err: any, data?: GetRunGroupCommandOutput) => void
  ): Promise<GetRunGroupCommandOutput> | void {
    const command = new GetRunGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a workflow run task.</p>
   */
  public getRunTask(args: GetRunTaskCommandInput, options?: __HttpHandlerOptions): Promise<GetRunTaskCommandOutput>;
  public getRunTask(args: GetRunTaskCommandInput, cb: (err: any, data?: GetRunTaskCommandOutput) => void): void;
  public getRunTask(
    args: GetRunTaskCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRunTaskCommandOutput) => void
  ): void;
  public getRunTask(
    args: GetRunTaskCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRunTaskCommandOutput) => void),
    cb?: (err: any, data?: GetRunTaskCommandOutput) => void
  ): Promise<GetRunTaskCommandOutput> | void {
    const command = new GetRunTaskCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a sequence store.</p>
   */
  public getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSequenceStoreCommandOutput>;
  public getSequenceStore(
    args: GetSequenceStoreCommandInput,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;
  public getSequenceStore(
    args: GetSequenceStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): void;
  public getSequenceStore(
    args: GetSequenceStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSequenceStoreCommandOutput) => void),
    cb?: (err: any, data?: GetSequenceStoreCommandOutput) => void
  ): Promise<GetSequenceStoreCommandOutput> | void {
    const command = new GetSequenceStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a variant import job.</p>
   */
  public getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariantImportJobCommandOutput>;
  public getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;
  public getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): void;
  public getVariantImportJob(
    args: GetVariantImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVariantImportJobCommandOutput) => void),
    cb?: (err: any, data?: GetVariantImportJobCommandOutput) => void
  ): Promise<GetVariantImportJobCommandOutput> | void {
    const command = new GetVariantImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a variant store.</p>
   */
  public getVariantStore(
    args: GetVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetVariantStoreCommandOutput>;
  public getVariantStore(
    args: GetVariantStoreCommandInput,
    cb: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): void;
  public getVariantStore(
    args: GetVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): void;
  public getVariantStore(
    args: GetVariantStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetVariantStoreCommandOutput) => void),
    cb?: (err: any, data?: GetVariantStoreCommandOutput) => void
  ): Promise<GetVariantStoreCommandOutput> | void {
    const command = new GetVariantStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a workflow.</p>
   */
  public getWorkflow(args: GetWorkflowCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkflowCommandOutput>;
  public getWorkflow(args: GetWorkflowCommandInput, cb: (err: any, data?: GetWorkflowCommandOutput) => void): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkflowCommandOutput) => void
  ): void;
  public getWorkflow(
    args: GetWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetWorkflowCommandOutput) => void),
    cb?: (err: any, data?: GetWorkflowCommandOutput) => void
  ): Promise<GetWorkflowCommandOutput> | void {
    const command = new GetWorkflowCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of annotation import jobs.</p>
   */
  public listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationImportJobsCommandOutput>;
  public listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;
  public listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): void;
  public listAnnotationImportJobs(
    args: ListAnnotationImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnnotationImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListAnnotationImportJobsCommandOutput) => void
  ): Promise<ListAnnotationImportJobsCommandOutput> | void {
    const command = new ListAnnotationImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of annotation stores.</p>
   */
  public listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAnnotationStoresCommandOutput>;
  public listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;
  public listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): void;
  public listAnnotationStores(
    args: ListAnnotationStoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAnnotationStoresCommandOutput) => void),
    cb?: (err: any, data?: ListAnnotationStoresCommandOutput) => void
  ): Promise<ListAnnotationStoresCommandOutput> | void {
    const command = new ListAnnotationStoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of read set activation jobs.</p>
   */
  public listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetActivationJobsCommandOutput>;
  public listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;
  public listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): void;
  public listReadSetActivationJobs(
    args: ListReadSetActivationJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReadSetActivationJobsCommandOutput) => void),
    cb?: (err: any, data?: ListReadSetActivationJobsCommandOutput) => void
  ): Promise<ListReadSetActivationJobsCommandOutput> | void {
    const command = new ListReadSetActivationJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of read set export jobs.</p>
   */
  public listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetExportJobsCommandOutput>;
  public listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;
  public listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): void;
  public listReadSetExportJobs(
    args: ListReadSetExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReadSetExportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListReadSetExportJobsCommandOutput) => void
  ): Promise<ListReadSetExportJobsCommandOutput> | void {
    const command = new ListReadSetExportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of read set import jobs.</p>
   */
  public listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetImportJobsCommandOutput>;
  public listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;
  public listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): void;
  public listReadSetImportJobs(
    args: ListReadSetImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReadSetImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListReadSetImportJobsCommandOutput) => void
  ): Promise<ListReadSetImportJobsCommandOutput> | void {
    const command = new ListReadSetImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of read sets.</p>
   */
  public listReadSets(
    args: ListReadSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReadSetsCommandOutput>;
  public listReadSets(args: ListReadSetsCommandInput, cb: (err: any, data?: ListReadSetsCommandOutput) => void): void;
  public listReadSets(
    args: ListReadSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReadSetsCommandOutput) => void
  ): void;
  public listReadSets(
    args: ListReadSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReadSetsCommandOutput) => void),
    cb?: (err: any, data?: ListReadSetsCommandOutput) => void
  ): Promise<ListReadSetsCommandOutput> | void {
    const command = new ListReadSetsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of reference import jobs.</p>
   */
  public listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferenceImportJobsCommandOutput>;
  public listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;
  public listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): void;
  public listReferenceImportJobs(
    args: ListReferenceImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReferenceImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListReferenceImportJobsCommandOutput) => void
  ): Promise<ListReferenceImportJobsCommandOutput> | void {
    const command = new ListReferenceImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of references.</p>
   */
  public listReferences(
    args: ListReferencesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferencesCommandOutput>;
  public listReferences(
    args: ListReferencesCommandInput,
    cb: (err: any, data?: ListReferencesCommandOutput) => void
  ): void;
  public listReferences(
    args: ListReferencesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferencesCommandOutput) => void
  ): void;
  public listReferences(
    args: ListReferencesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReferencesCommandOutput) => void),
    cb?: (err: any, data?: ListReferencesCommandOutput) => void
  ): Promise<ListReferencesCommandOutput> | void {
    const command = new ListReferencesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of reference stores.</p>
   */
  public listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReferenceStoresCommandOutput>;
  public listReferenceStores(
    args: ListReferenceStoresCommandInput,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;
  public listReferenceStores(
    args: ListReferenceStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): void;
  public listReferenceStores(
    args: ListReferenceStoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListReferenceStoresCommandOutput) => void),
    cb?: (err: any, data?: ListReferenceStoresCommandOutput) => void
  ): Promise<ListReferenceStoresCommandOutput> | void {
    const command = new ListReferenceStoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of run groups.</p>
   */
  public listRunGroups(
    args: ListRunGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRunGroupsCommandOutput>;
  public listRunGroups(
    args: ListRunGroupsCommandInput,
    cb: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): void;
  public listRunGroups(
    args: ListRunGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): void;
  public listRunGroups(
    args: ListRunGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRunGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListRunGroupsCommandOutput) => void
  ): Promise<ListRunGroupsCommandOutput> | void {
    const command = new ListRunGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of runs.</p>
   */
  public listRuns(args: ListRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListRunsCommandOutput>;
  public listRuns(args: ListRunsCommandInput, cb: (err: any, data?: ListRunsCommandOutput) => void): void;
  public listRuns(
    args: ListRunsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunsCommandOutput) => void
  ): void;
  public listRuns(
    args: ListRunsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRunsCommandOutput) => void),
    cb?: (err: any, data?: ListRunsCommandOutput) => void
  ): Promise<ListRunsCommandOutput> | void {
    const command = new ListRunsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of tasks for a run.</p>
   */
  public listRunTasks(
    args: ListRunTasksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRunTasksCommandOutput>;
  public listRunTasks(args: ListRunTasksCommandInput, cb: (err: any, data?: ListRunTasksCommandOutput) => void): void;
  public listRunTasks(
    args: ListRunTasksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRunTasksCommandOutput) => void
  ): void;
  public listRunTasks(
    args: ListRunTasksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRunTasksCommandOutput) => void),
    cb?: (err: any, data?: ListRunTasksCommandOutput) => void
  ): Promise<ListRunTasksCommandOutput> | void {
    const command = new ListRunTasksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of sequence stores.</p>
   */
  public listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSequenceStoresCommandOutput>;
  public listSequenceStores(
    args: ListSequenceStoresCommandInput,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;
  public listSequenceStores(
    args: ListSequenceStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): void;
  public listSequenceStores(
    args: ListSequenceStoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListSequenceStoresCommandOutput) => void),
    cb?: (err: any, data?: ListSequenceStoresCommandOutput) => void
  ): Promise<ListSequenceStoresCommandOutput> | void {
    const command = new ListSequenceStoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of tags for a resource.</p>
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
   * <p>Retrieves a list of variant import jobs.</p>
   */
  public listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVariantImportJobsCommandOutput>;
  public listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;
  public listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): void;
  public listVariantImportJobs(
    args: ListVariantImportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVariantImportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListVariantImportJobsCommandOutput) => void
  ): Promise<ListVariantImportJobsCommandOutput> | void {
    const command = new ListVariantImportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of variant stores.</p>
   */
  public listVariantStores(
    args: ListVariantStoresCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVariantStoresCommandOutput>;
  public listVariantStores(
    args: ListVariantStoresCommandInput,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;
  public listVariantStores(
    args: ListVariantStoresCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): void;
  public listVariantStores(
    args: ListVariantStoresCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListVariantStoresCommandOutput) => void),
    cb?: (err: any, data?: ListVariantStoresCommandOutput) => void
  ): Promise<ListVariantStoresCommandOutput> | void {
    const command = new ListVariantStoresCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of workflows.</p>
   */
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWorkflowsCommandOutput>;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): void;
  public listWorkflows(
    args: ListWorkflowsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWorkflowsCommandOutput) => void),
    cb?: (err: any, data?: ListWorkflowsCommandOutput) => void
  ): Promise<ListWorkflowsCommandOutput> | void {
    const command = new ListWorkflowsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts an annotation import job.</p>
   */
  public startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAnnotationImportJobCommandOutput>;
  public startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;
  public startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): void;
  public startAnnotationImportJob(
    args: StartAnnotationImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAnnotationImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartAnnotationImportJobCommandOutput) => void
  ): Promise<StartAnnotationImportJobCommandOutput> | void {
    const command = new StartAnnotationImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a read set activation job.</p>
   */
  public startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetActivationJobCommandOutput>;
  public startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;
  public startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): void;
  public startReadSetActivationJob(
    args: StartReadSetActivationJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReadSetActivationJobCommandOutput) => void),
    cb?: (err: any, data?: StartReadSetActivationJobCommandOutput) => void
  ): Promise<StartReadSetActivationJobCommandOutput> | void {
    const command = new StartReadSetActivationJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a read set export job.</p>
   */
  public startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetExportJobCommandOutput>;
  public startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;
  public startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): void;
  public startReadSetExportJob(
    args: StartReadSetExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReadSetExportJobCommandOutput) => void),
    cb?: (err: any, data?: StartReadSetExportJobCommandOutput) => void
  ): Promise<StartReadSetExportJobCommandOutput> | void {
    const command = new StartReadSetExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a read set import job.</p>
   */
  public startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReadSetImportJobCommandOutput>;
  public startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;
  public startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): void;
  public startReadSetImportJob(
    args: StartReadSetImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReadSetImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartReadSetImportJobCommandOutput) => void
  ): Promise<StartReadSetImportJobCommandOutput> | void {
    const command = new StartReadSetImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a reference import job.</p>
   */
  public startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReferenceImportJobCommandOutput>;
  public startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;
  public startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): void;
  public startReferenceImportJob(
    args: StartReferenceImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartReferenceImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartReferenceImportJobCommandOutput) => void
  ): Promise<StartReferenceImportJobCommandOutput> | void {
    const command = new StartReferenceImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a run.</p>
   */
  public startRun(args: StartRunCommandInput, options?: __HttpHandlerOptions): Promise<StartRunCommandOutput>;
  public startRun(args: StartRunCommandInput, cb: (err: any, data?: StartRunCommandOutput) => void): void;
  public startRun(
    args: StartRunCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRunCommandOutput) => void
  ): void;
  public startRun(
    args: StartRunCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartRunCommandOutput) => void),
    cb?: (err: any, data?: StartRunCommandOutput) => void
  ): Promise<StartRunCommandOutput> | void {
    const command = new StartRunCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a variant import job.</p>
   */
  public startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartVariantImportJobCommandOutput>;
  public startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): void;
  public startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): void;
  public startVariantImportJob(
    args: StartVariantImportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartVariantImportJobCommandOutput) => void),
    cb?: (err: any, data?: StartVariantImportJobCommandOutput) => void
  ): Promise<StartVariantImportJobCommandOutput> | void {
    const command = new StartVariantImportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Tags a resource.</p>
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
   * <p>Removes tags from a resource.</p>
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
   * <p>Updates an annotation store.</p>
   */
  public updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAnnotationStoreCommandOutput>;
  public updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;
  public updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): void;
  public updateAnnotationStore(
    args: UpdateAnnotationStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAnnotationStoreCommandOutput) => void),
    cb?: (err: any, data?: UpdateAnnotationStoreCommandOutput) => void
  ): Promise<UpdateAnnotationStoreCommandOutput> | void {
    const command = new UpdateAnnotationStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a run group.</p>
   */
  public updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRunGroupCommandOutput>;
  public updateRunGroup(
    args: UpdateRunGroupCommandInput,
    cb: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): void;
  public updateRunGroup(
    args: UpdateRunGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): void;
  public updateRunGroup(
    args: UpdateRunGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRunGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateRunGroupCommandOutput) => void
  ): Promise<UpdateRunGroupCommandOutput> | void {
    const command = new UpdateRunGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a variant store.</p>
   */
  public updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVariantStoreCommandOutput>;
  public updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;
  public updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): void;
  public updateVariantStore(
    args: UpdateVariantStoreCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateVariantStoreCommandOutput) => void),
    cb?: (err: any, data?: UpdateVariantStoreCommandOutput) => void
  ): Promise<UpdateVariantStoreCommandOutput> | void {
    const command = new UpdateVariantStoreCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a workflow.</p>
   */
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkflowCommandOutput>;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): void;
  public updateWorkflow(
    args: UpdateWorkflowCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateWorkflowCommandOutput) => void),
    cb?: (err: any, data?: UpdateWorkflowCommandOutput) => void
  ): Promise<UpdateWorkflowCommandOutput> | void {
    const command = new UpdateWorkflowCommand(args);
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
