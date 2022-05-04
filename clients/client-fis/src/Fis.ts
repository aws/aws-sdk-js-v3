// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateExperimentTemplateCommand,
  CreateExperimentTemplateCommandInput,
  CreateExperimentTemplateCommandOutput,
} from "./commands/CreateExperimentTemplateCommand";
import {
  DeleteExperimentTemplateCommand,
  DeleteExperimentTemplateCommandInput,
  DeleteExperimentTemplateCommandOutput,
} from "./commands/DeleteExperimentTemplateCommand";
import { GetActionCommand, GetActionCommandInput, GetActionCommandOutput } from "./commands/GetActionCommand";
import {
  GetExperimentCommand,
  GetExperimentCommandInput,
  GetExperimentCommandOutput,
} from "./commands/GetExperimentCommand";
import {
  GetExperimentTemplateCommand,
  GetExperimentTemplateCommandInput,
  GetExperimentTemplateCommandOutput,
} from "./commands/GetExperimentTemplateCommand";
import {
  GetTargetResourceTypeCommand,
  GetTargetResourceTypeCommandInput,
  GetTargetResourceTypeCommandOutput,
} from "./commands/GetTargetResourceTypeCommand";
import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "./commands/ListExperimentsCommand";
import {
  ListExperimentTemplatesCommand,
  ListExperimentTemplatesCommandInput,
  ListExperimentTemplatesCommandOutput,
} from "./commands/ListExperimentTemplatesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetResourceTypesCommand,
  ListTargetResourceTypesCommandInput,
  ListTargetResourceTypesCommandOutput,
} from "./commands/ListTargetResourceTypesCommand";
import {
  StartExperimentCommand,
  StartExperimentCommandInput,
  StartExperimentCommandOutput,
} from "./commands/StartExperimentCommand";
import {
  StopExperimentCommand,
  StopExperimentCommandInput,
  StopExperimentCommandOutput,
} from "./commands/StopExperimentCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateExperimentTemplateCommand,
  UpdateExperimentTemplateCommandInput,
  UpdateExperimentTemplateCommandOutput,
} from "./commands/UpdateExperimentTemplateCommand";
import { FisClient } from "./FisClient";

/**
 * <p>Fault Injection Simulator is a managed service that enables you to perform fault injection
 *            experiments on your Amazon Web Services workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">Fault Injection Simulator User Guide</a>.</p>
 */
export class Fis extends FisClient {
  /**
   * <p>Creates an experiment template. </p>
   *          <p>An experiment template includes the following components:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Targets</b>: A target can be a specific resource in
   *                your Amazon Web Services environment, or one or more resources that match criteria that you
   *                specify, for example, resources that have specific tags.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Actions</b>: The actions to carry out on the
   *                target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Stop conditions</b>: If a stop condition is
   *                triggered while an experiment is running, the experiment is automatically
   *                stopped. You can define a stop condition as a CloudWatch alarm.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/fis/latest/userguide/experiment-templates.html">Experiment templates</a>
   *          in the <i>Fault Injection Simulator User Guide</i>.</p>
   */
  public createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateExperimentTemplateCommandOutput>;
  public createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    cb: (err: any, data?: CreateExperimentTemplateCommandOutput) => void
  ): void;
  public createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateExperimentTemplateCommandOutput) => void
  ): void;
  public createExperimentTemplate(
    args: CreateExperimentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateExperimentTemplateCommandOutput) => void),
    cb?: (err: any, data?: CreateExperimentTemplateCommandOutput) => void
  ): Promise<CreateExperimentTemplateCommandOutput> | void {
    const command = new CreateExperimentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified experiment template.</p>
   */
  public deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteExperimentTemplateCommandOutput>;
  public deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    cb: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void
  ): void;
  public deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void
  ): void;
  public deleteExperimentTemplate(
    args: DeleteExperimentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteExperimentTemplateCommandOutput) => void),
    cb?: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void
  ): Promise<DeleteExperimentTemplateCommandOutput> | void {
    const command = new DeleteExperimentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified FIS action.</p>
   */
  public getAction(args: GetActionCommandInput, options?: __HttpHandlerOptions): Promise<GetActionCommandOutput>;
  public getAction(args: GetActionCommandInput, cb: (err: any, data?: GetActionCommandOutput) => void): void;
  public getAction(
    args: GetActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActionCommandOutput) => void
  ): void;
  public getAction(
    args: GetActionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetActionCommandOutput) => void),
    cb?: (err: any, data?: GetActionCommandOutput) => void
  ): Promise<GetActionCommandOutput> | void {
    const command = new GetActionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified experiment.</p>
   */
  public getExperiment(
    args: GetExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentCommandOutput>;
  public getExperiment(
    args: GetExperimentCommandInput,
    cb: (err: any, data?: GetExperimentCommandOutput) => void
  ): void;
  public getExperiment(
    args: GetExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentCommandOutput) => void
  ): void;
  public getExperiment(
    args: GetExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExperimentCommandOutput) => void),
    cb?: (err: any, data?: GetExperimentCommandOutput) => void
  ): Promise<GetExperimentCommandOutput> | void {
    const command = new GetExperimentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified experiment template.</p>
   */
  public getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetExperimentTemplateCommandOutput>;
  public getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    cb: (err: any, data?: GetExperimentTemplateCommandOutput) => void
  ): void;
  public getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetExperimentTemplateCommandOutput) => void
  ): void;
  public getExperimentTemplate(
    args: GetExperimentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetExperimentTemplateCommandOutput) => void),
    cb?: (err: any, data?: GetExperimentTemplateCommandOutput) => void
  ): Promise<GetExperimentTemplateCommandOutput> | void {
    const command = new GetExperimentTemplateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about the specified resource type.</p>
   */
  public getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTargetResourceTypeCommandOutput>;
  public getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    cb: (err: any, data?: GetTargetResourceTypeCommandOutput) => void
  ): void;
  public getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTargetResourceTypeCommandOutput) => void
  ): void;
  public getTargetResourceType(
    args: GetTargetResourceTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTargetResourceTypeCommandOutput) => void),
    cb?: (err: any, data?: GetTargetResourceTypeCommandOutput) => void
  ): Promise<GetTargetResourceTypeCommandOutput> | void {
    const command = new GetTargetResourceTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the available FIS actions.</p>
   */
  public listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
  public listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
  public listActions(
    args: ListActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;
  public listActions(
    args: ListActionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActionsCommandOutput) => void),
    cb?: (err: any, data?: ListActionsCommandOutput) => void
  ): Promise<ListActionsCommandOutput> | void {
    const command = new ListActionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists your experiments.</p>
   */
  public listExperiments(
    args: ListExperimentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentsCommandOutput>;
  public listExperiments(
    args: ListExperimentsCommandInput,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;
  public listExperiments(
    args: ListExperimentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentsCommandOutput) => void
  ): void;
  public listExperiments(
    args: ListExperimentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExperimentsCommandOutput) => void),
    cb?: (err: any, data?: ListExperimentsCommandOutput) => void
  ): Promise<ListExperimentsCommandOutput> | void {
    const command = new ListExperimentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists your experiment templates.</p>
   */
  public listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExperimentTemplatesCommandOutput>;
  public listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    cb: (err: any, data?: ListExperimentTemplatesCommandOutput) => void
  ): void;
  public listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExperimentTemplatesCommandOutput) => void
  ): void;
  public listExperimentTemplates(
    args: ListExperimentTemplatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListExperimentTemplatesCommandOutput) => void),
    cb?: (err: any, data?: ListExperimentTemplatesCommandOutput) => void
  ): Promise<ListExperimentTemplatesCommandOutput> | void {
    const command = new ListExperimentTemplatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Lists the target resource types.</p>
   */
  public listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetResourceTypesCommandOutput>;
  public listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    cb: (err: any, data?: ListTargetResourceTypesCommandOutput) => void
  ): void;
  public listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetResourceTypesCommandOutput) => void
  ): void;
  public listTargetResourceTypes(
    args: ListTargetResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: ListTargetResourceTypesCommandOutput) => void
  ): Promise<ListTargetResourceTypesCommandOutput> | void {
    const command = new ListTargetResourceTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts running an experiment from the specified experiment template.</p>
   */
  public startExperiment(
    args: StartExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartExperimentCommandOutput>;
  public startExperiment(
    args: StartExperimentCommandInput,
    cb: (err: any, data?: StartExperimentCommandOutput) => void
  ): void;
  public startExperiment(
    args: StartExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartExperimentCommandOutput) => void
  ): void;
  public startExperiment(
    args: StartExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartExperimentCommandOutput) => void),
    cb?: (err: any, data?: StartExperimentCommandOutput) => void
  ): Promise<StartExperimentCommandOutput> | void {
    const command = new StartExperimentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the specified experiment.</p>
   */
  public stopExperiment(
    args: StopExperimentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopExperimentCommandOutput>;
  public stopExperiment(
    args: StopExperimentCommandInput,
    cb: (err: any, data?: StopExperimentCommandOutput) => void
  ): void;
  public stopExperiment(
    args: StopExperimentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopExperimentCommandOutput) => void
  ): void;
  public stopExperiment(
    args: StopExperimentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopExperimentCommandOutput) => void),
    cb?: (err: any, data?: StopExperimentCommandOutput) => void
  ): Promise<StopExperimentCommandOutput> | void {
    const command = new StopExperimentCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies the specified tags to the specified resource.</p>
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
   * <p>Removes the specified tags from the specified resource.</p>
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
   * <p>Updates the specified experiment template.</p>
   */
  public updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateExperimentTemplateCommandOutput>;
  public updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    cb: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void
  ): void;
  public updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void
  ): void;
  public updateExperimentTemplate(
    args: UpdateExperimentTemplateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateExperimentTemplateCommandOutput) => void),
    cb?: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void
  ): Promise<UpdateExperimentTemplateCommandOutput> | void {
    const command = new UpdateExperimentTemplateCommand(args);
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
