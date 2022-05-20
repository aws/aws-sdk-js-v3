// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CodePipelineClient } from "./CodePipelineClient";
import {
  AcknowledgeJobCommand,
  AcknowledgeJobCommandInput,
  AcknowledgeJobCommandOutput,
} from "./commands/AcknowledgeJobCommand";
import {
  AcknowledgeThirdPartyJobCommand,
  AcknowledgeThirdPartyJobCommandInput,
  AcknowledgeThirdPartyJobCommandOutput,
} from "./commands/AcknowledgeThirdPartyJobCommand";
import {
  CreateCustomActionTypeCommand,
  CreateCustomActionTypeCommandInput,
  CreateCustomActionTypeCommandOutput,
} from "./commands/CreateCustomActionTypeCommand";
import {
  CreatePipelineCommand,
  CreatePipelineCommandInput,
  CreatePipelineCommandOutput,
} from "./commands/CreatePipelineCommand";
import {
  DeleteCustomActionTypeCommand,
  DeleteCustomActionTypeCommandInput,
  DeleteCustomActionTypeCommandOutput,
} from "./commands/DeleteCustomActionTypeCommand";
import {
  DeletePipelineCommand,
  DeletePipelineCommandInput,
  DeletePipelineCommandOutput,
} from "./commands/DeletePipelineCommand";
import {
  DeleteWebhookCommand,
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput,
} from "./commands/DeleteWebhookCommand";
import {
  DeregisterWebhookWithThirdPartyCommand,
  DeregisterWebhookWithThirdPartyCommandInput,
  DeregisterWebhookWithThirdPartyCommandOutput,
} from "./commands/DeregisterWebhookWithThirdPartyCommand";
import {
  DisableStageTransitionCommand,
  DisableStageTransitionCommandInput,
  DisableStageTransitionCommandOutput,
} from "./commands/DisableStageTransitionCommand";
import {
  EnableStageTransitionCommand,
  EnableStageTransitionCommandInput,
  EnableStageTransitionCommandOutput,
} from "./commands/EnableStageTransitionCommand";
import {
  GetActionTypeCommand,
  GetActionTypeCommandInput,
  GetActionTypeCommandOutput,
} from "./commands/GetActionTypeCommand";
import {
  GetJobDetailsCommand,
  GetJobDetailsCommandInput,
  GetJobDetailsCommandOutput,
} from "./commands/GetJobDetailsCommand";
import { GetPipelineCommand, GetPipelineCommandInput, GetPipelineCommandOutput } from "./commands/GetPipelineCommand";
import {
  GetPipelineExecutionCommand,
  GetPipelineExecutionCommandInput,
  GetPipelineExecutionCommandOutput,
} from "./commands/GetPipelineExecutionCommand";
import {
  GetPipelineStateCommand,
  GetPipelineStateCommandInput,
  GetPipelineStateCommandOutput,
} from "./commands/GetPipelineStateCommand";
import {
  GetThirdPartyJobDetailsCommand,
  GetThirdPartyJobDetailsCommandInput,
  GetThirdPartyJobDetailsCommandOutput,
} from "./commands/GetThirdPartyJobDetailsCommand";
import {
  ListActionExecutionsCommand,
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "./commands/ListActionExecutionsCommand";
import {
  ListActionTypesCommand,
  ListActionTypesCommandInput,
  ListActionTypesCommandOutput,
} from "./commands/ListActionTypesCommand";
import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "./commands/ListPipelinesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListWebhooksCommand,
  ListWebhooksCommandInput,
  ListWebhooksCommandOutput,
} from "./commands/ListWebhooksCommand";
import { PollForJobsCommand, PollForJobsCommandInput, PollForJobsCommandOutput } from "./commands/PollForJobsCommand";
import {
  PollForThirdPartyJobsCommand,
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput,
} from "./commands/PollForThirdPartyJobsCommand";
import {
  PutActionRevisionCommand,
  PutActionRevisionCommandInput,
  PutActionRevisionCommandOutput,
} from "./commands/PutActionRevisionCommand";
import {
  PutApprovalResultCommand,
  PutApprovalResultCommandInput,
  PutApprovalResultCommandOutput,
} from "./commands/PutApprovalResultCommand";
import {
  PutJobFailureResultCommand,
  PutJobFailureResultCommandInput,
  PutJobFailureResultCommandOutput,
} from "./commands/PutJobFailureResultCommand";
import {
  PutJobSuccessResultCommand,
  PutJobSuccessResultCommandInput,
  PutJobSuccessResultCommandOutput,
} from "./commands/PutJobSuccessResultCommand";
import {
  PutThirdPartyJobFailureResultCommand,
  PutThirdPartyJobFailureResultCommandInput,
  PutThirdPartyJobFailureResultCommandOutput,
} from "./commands/PutThirdPartyJobFailureResultCommand";
import {
  PutThirdPartyJobSuccessResultCommand,
  PutThirdPartyJobSuccessResultCommandInput,
  PutThirdPartyJobSuccessResultCommandOutput,
} from "./commands/PutThirdPartyJobSuccessResultCommand";
import { PutWebhookCommand, PutWebhookCommandInput, PutWebhookCommandOutput } from "./commands/PutWebhookCommand";
import {
  RegisterWebhookWithThirdPartyCommand,
  RegisterWebhookWithThirdPartyCommandInput,
  RegisterWebhookWithThirdPartyCommandOutput,
} from "./commands/RegisterWebhookWithThirdPartyCommand";
import {
  RetryStageExecutionCommand,
  RetryStageExecutionCommandInput,
  RetryStageExecutionCommandOutput,
} from "./commands/RetryStageExecutionCommand";
import {
  StartPipelineExecutionCommand,
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import {
  StopPipelineExecutionCommand,
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
} from "./commands/StopPipelineExecutionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateActionTypeCommand,
  UpdateActionTypeCommandInput,
  UpdateActionTypeCommandOutput,
} from "./commands/UpdateActionTypeCommand";
import {
  UpdatePipelineCommand,
  UpdatePipelineCommandInput,
  UpdatePipelineCommandOutput,
} from "./commands/UpdatePipelineCommand";

/**
 * <fullname>AWS CodePipeline</fullname>
 *         <p>
 *             <b>Overview</b>
 *         </p>
 *         <p>This is the AWS CodePipeline API Reference. This guide provides descriptions of the
 *             actions and data types for AWS CodePipeline. Some functionality for your pipeline can
 *             only be configured through the API. For more information, see the <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html">AWS
 *                 CodePipeline User Guide</a>.</p>
 *         <p>You can use the AWS CodePipeline API to work with pipelines, stages, actions, and
 *             transitions.</p>
 *         <p>
 *             <i>Pipelines</i> are models of automated release processes. Each pipeline
 *             is uniquely named, and consists of stages, actions, and transitions. </p>
 *         <p>You can work with pipelines by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>CreatePipeline</a>, which creates a uniquely named
 *                     pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>DeletePipeline</a>, which deletes the specified
 *                     pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetPipeline</a>, which returns information about the pipeline
 *                     structure and pipeline metadata, including the pipeline Amazon Resource Name
 *                     (ARN).</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetPipelineExecution</a>, which returns information about a
 *                     specific execution of a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetPipelineState</a>, which returns information about the current
 *                     state of the stages and actions of a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a>ListActionExecutions</a>, which returns action-level details
 *                     for past executions. The details include full stage and action-level details,
 *                     including individual action duration, status, any errors that occurred during
 *                     the execution, and input and output artifact location details.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>ListPipelines</a>, which gets a summary of all of the pipelines
 *                     associated with your account.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>ListPipelineExecutions</a>, which gets a summary of the most
 *                     recent executions for a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>StartPipelineExecution</a>, which runs the most recent revision of
 *                     an artifact through the pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>StopPipelineExecution</a>, which stops the specified pipeline
 *                     execution from continuing through the pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>UpdatePipeline</a>, which updates a pipeline with edits or changes
 *                     to the structure of the pipeline.</p>
 *             </li>
 *          </ul>
 *         <p>Pipelines include <i>stages</i>. Each stage contains one or more
 *             actions that must complete before the next stage begins. A stage results in success or
 *             failure. If a stage fails, the pipeline stops at that stage and remains stopped until
 *             either a new version of an artifact appears in the source location, or a user takes
 *             action to rerun the most recent artifact through the pipeline. You can call <a>GetPipelineState</a>, which displays the status of a pipeline, including the
 *             status of stages in the pipeline, or <a>GetPipeline</a>, which returns the
 *             entire structure of the pipeline, including the stages of that pipeline. For more
 *             information about the structure of stages and actions, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-structure.html">AWS CodePipeline
 *                 Pipeline Structure Reference</a>.</p>
 *         <p>Pipeline stages include <i>actions</i> that are categorized into
 *             categories such as source or build actions performed in a stage of a pipeline. For
 *             example, you can use a source action to import artifacts into a pipeline from a source
 *             such as Amazon S3. Like stages, you do not work with actions directly in most cases, but
 *             you do define and interact with actions when working with pipeline operations such as
 *                 <a>CreatePipeline</a> and <a>GetPipelineState</a>. Valid
 *             action categories are:</p>
 *         <ul>
 *             <li>
 *                 <p>Source</p>
 *             </li>
 *             <li>
 *                 <p>Build</p>
 *             </li>
 *             <li>
 *                 <p>Test</p>
 *             </li>
 *             <li>
 *                 <p>Deploy</p>
 *             </li>
 *             <li>
 *                 <p>Approval</p>
 *             </li>
 *             <li>
 *                 <p>Invoke</p>
 *             </li>
 *          </ul>
 *         <p>Pipelines also include <i>transitions</i>, which allow the transition
 *             of artifacts from one stage to the next in a pipeline after the actions in one stage
 *             complete.</p>
 *         <p>You can work with transitions by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>DisableStageTransition</a>, which prevents artifacts from
 *                     transitioning to the next stage in a pipeline.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>EnableStageTransition</a>, which enables transition of artifacts
 *                     between stages in a pipeline. </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Using the API to integrate with AWS CodePipeline</b>
 *         </p>
 *         <p>For third-party integrators or developers who want to create their own integrations
 *             with AWS CodePipeline, the expected sequence varies from the standard API user. To
 *             integrate with AWS CodePipeline, developers need to work with the following
 *             items:</p>
 *         <p>
 *             <b>Jobs</b>, which are instances of an action. For
 *             example, a job for a source action might import a revision of an artifact from a source. </p>
 *         <p>You can work with jobs by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>AcknowledgeJob</a>, which confirms whether a job worker has
 *                     received the specified job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetJobDetails</a>, which returns the details of a job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PollForJobs</a>, which determines whether there are any jobs to
 *                     act on.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutJobFailureResult</a>, which provides details of a job failure.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutJobSuccessResult</a>, which provides details of a job
 *                     success.</p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Third party jobs</b>, which are instances of an action
 *             created by a partner action and integrated into AWS CodePipeline. Partner actions are
 *             created by members of the AWS Partner Network.</p>
 *         <p>You can work with third party jobs by calling:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a>AcknowledgeThirdPartyJob</a>, which confirms whether a job worker
 *                     has received the specified job.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>GetThirdPartyJobDetails</a>, which requests the details of a job
 *                     for a partner action.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PollForThirdPartyJobs</a>, which determines whether there are any
 *                     jobs to act on. </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutThirdPartyJobFailureResult</a>, which provides details of a job
 *                     failure.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                     <a>PutThirdPartyJobSuccessResult</a>, which provides details of a job
 *                     success.</p>
 *             </li>
 *          </ul>
 */
export class CodePipeline extends CodePipelineClient {
  /**
   * <p>Returns information about a specified job and whether that job has been received by
   *             the job worker. Used for custom actions only.</p>
   */
  public acknowledgeJob(
    args: AcknowledgeJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcknowledgeJobCommandOutput>;
  public acknowledgeJob(
    args: AcknowledgeJobCommandInput,
    cb: (err: any, data?: AcknowledgeJobCommandOutput) => void
  ): void;
  public acknowledgeJob(
    args: AcknowledgeJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcknowledgeJobCommandOutput) => void
  ): void;
  public acknowledgeJob(
    args: AcknowledgeJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcknowledgeJobCommandOutput) => void),
    cb?: (err: any, data?: AcknowledgeJobCommandOutput) => void
  ): Promise<AcknowledgeJobCommandOutput> | void {
    const command = new AcknowledgeJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Confirms a job worker has received the specified job. Used for partner actions
   *             only.</p>
   */
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcknowledgeThirdPartyJobCommandOutput>;
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    cb: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void
  ): void;
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void
  ): void;
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void),
    cb?: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void
  ): Promise<AcknowledgeThirdPartyJobCommandOutput> | void {
    const command = new AcknowledgeThirdPartyJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new custom action that can be used in all pipelines associated with the
   *             AWS account. Only used for custom actions.</p>
   */
  public createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomActionTypeCommandOutput>;
  public createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    cb: (err: any, data?: CreateCustomActionTypeCommandOutput) => void
  ): void;
  public createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomActionTypeCommandOutput) => void
  ): void;
  public createCustomActionType(
    args: CreateCustomActionTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomActionTypeCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomActionTypeCommandOutput) => void
  ): Promise<CreateCustomActionTypeCommandOutput> | void {
    const command = new CreateCustomActionTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a pipeline.</p>
   *         <note>
   *             <p>In the pipeline structure, you must include either <code>artifactStore</code>
   *                 or <code>artifactStores</code> in your pipeline, but you cannot use both. If you
   *                 create a cross-region action in your pipeline, you must use
   *                     <code>artifactStores</code>.</p>
   *         </note>
   */
  public createPipeline(
    args: CreatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePipelineCommandOutput>;
  public createPipeline(
    args: CreatePipelineCommandInput,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipelineCommandOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreatePipelineCommandOutput) => void
  ): Promise<CreatePipelineCommandOutput> | void {
    const command = new CreatePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action
   *             fails after the action is marked for deletion. Used for custom actions only.</p>
   *         <important>
   *             <p>To re-create a custom action after it has been deleted you must use a string in
   *                 the version field that has never been used before. This string can be an incremented
   *                 version number, for example. To restore a deleted custom action, use a JSON file
   *                 that is identical to the deleted action, including the original string in the
   *                 version field.</p>
   *         </important>
   */
  public deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomActionTypeCommandOutput>;
  public deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    cb: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void
  ): void;
  public deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void
  ): void;
  public deleteCustomActionType(
    args: DeleteCustomActionTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomActionTypeCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void
  ): Promise<DeleteCustomActionTypeCommandOutput> | void {
    const command = new DeleteCustomActionTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified pipeline.</p>
   */
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePipelineCommandOutput>;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipelineCommandOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeletePipelineCommandOutput) => void
  ): Promise<DeletePipelineCommandOutput> | void {
    const command = new DeletePipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a previously created webhook by name. Deleting the webhook stops AWS
   *             CodePipeline from starting a pipeline every time an external event occurs. The API
   *             returns successfully when trying to delete a webhook that is already deleted. If a
   *             deleted webhook is re-created by calling PutWebhook with the same name, it will have a
   *             different URL.</p>
   */
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWebhookCommandOutput>;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteWebhookCommandOutput) => void),
    cb?: (err: any, data?: DeleteWebhookCommandOutput) => void
  ): Promise<DeleteWebhookCommandOutput> | void {
    const command = new DeleteWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes the connection between the webhook that was created by CodePipeline and the
   *             external tool with events to be detected. Currently supported only for webhooks that
   *             target an action type of GitHub.</p>
   */
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterWebhookWithThirdPartyCommandOutput>;
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    cb: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void
  ): void;
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void
  ): void;
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void),
    cb?: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void
  ): Promise<DeregisterWebhookWithThirdPartyCommandOutput> | void {
    const command = new DeregisterWebhookWithThirdPartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the
   *             pipeline.</p>
   */
  public disableStageTransition(
    args: DisableStageTransitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisableStageTransitionCommandOutput>;
  public disableStageTransition(
    args: DisableStageTransitionCommandInput,
    cb: (err: any, data?: DisableStageTransitionCommandOutput) => void
  ): void;
  public disableStageTransition(
    args: DisableStageTransitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisableStageTransitionCommandOutput) => void
  ): void;
  public disableStageTransition(
    args: DisableStageTransitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisableStageTransitionCommandOutput) => void),
    cb?: (err: any, data?: DisableStageTransitionCommandOutput) => void
  ): Promise<DisableStageTransitionCommandOutput> | void {
    const command = new DisableStageTransitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Enables artifacts in a pipeline to transition to a stage in a pipeline.</p>
   */
  public enableStageTransition(
    args: EnableStageTransitionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableStageTransitionCommandOutput>;
  public enableStageTransition(
    args: EnableStageTransitionCommandInput,
    cb: (err: any, data?: EnableStageTransitionCommandOutput) => void
  ): void;
  public enableStageTransition(
    args: EnableStageTransitionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableStageTransitionCommandOutput) => void
  ): void;
  public enableStageTransition(
    args: EnableStageTransitionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableStageTransitionCommandOutput) => void),
    cb?: (err: any, data?: EnableStageTransitionCommandOutput) => void
  ): Promise<EnableStageTransitionCommandOutput> | void {
    const command = new EnableStageTransitionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about an action type created for an external provider, where the
   *             action is to be used by customers of the external provider. The action can be created
   *             with any supported integration model.</p>
   */
  public getActionType(
    args: GetActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetActionTypeCommandOutput>;
  public getActionType(
    args: GetActionTypeCommandInput,
    cb: (err: any, data?: GetActionTypeCommandOutput) => void
  ): void;
  public getActionType(
    args: GetActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetActionTypeCommandOutput) => void
  ): void;
  public getActionType(
    args: GetActionTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetActionTypeCommandOutput) => void),
    cb?: (err: any, data?: GetActionTypeCommandOutput) => void
  ): Promise<GetActionTypeCommandOutput> | void {
    const command = new GetActionTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about a job. Used for custom actions only.</p>
   *         <important>
   *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
   *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
   *                 that S3 bucket for input or output artifacts. This API also returns any secret
   *                 values defined for the action.</p>
   *         </important>
   */
  public getJobDetails(
    args: GetJobDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetJobDetailsCommandOutput>;
  public getJobDetails(
    args: GetJobDetailsCommandInput,
    cb: (err: any, data?: GetJobDetailsCommandOutput) => void
  ): void;
  public getJobDetails(
    args: GetJobDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetJobDetailsCommandOutput) => void
  ): void;
  public getJobDetails(
    args: GetJobDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetJobDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetJobDetailsCommandOutput) => void
  ): Promise<GetJobDetailsCommandOutput> | void {
    const command = new GetJobDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
   *             return the entire structure of a pipeline in JSON format, which can then be modified and
   *             used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
   */
  public getPipeline(args: GetPipelineCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineCommandOutput>;
  public getPipeline(args: GetPipelineCommandInput, cb: (err: any, data?: GetPipelineCommandOutput) => void): void;
  public getPipeline(
    args: GetPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineCommandOutput) => void
  ): void;
  public getPipeline(
    args: GetPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPipelineCommandOutput) => void),
    cb?: (err: any, data?: GetPipelineCommandOutput) => void
  ): Promise<GetPipelineCommandOutput> | void {
    const command = new GetPipelineCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about an execution of a pipeline, including details about
   *             artifacts, the pipeline execution ID, and the name, version, and status of the
   *             pipeline.</p>
   */
  public getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineExecutionCommandOutput>;
  public getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    cb: (err: any, data?: GetPipelineExecutionCommandOutput) => void
  ): void;
  public getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineExecutionCommandOutput) => void
  ): void;
  public getPipelineExecution(
    args: GetPipelineExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPipelineExecutionCommandOutput) => void),
    cb?: (err: any, data?: GetPipelineExecutionCommandOutput) => void
  ): Promise<GetPipelineExecutionCommandOutput> | void {
    const command = new GetPipelineExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the state of a pipeline, including the stages and
   *             actions.</p>
   *         <note>
   *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
   *                 fields indicate the source revision information, such as the commit ID, for the
   *                 current state.</p>
   *         </note>
   */
  public getPipelineState(
    args: GetPipelineStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPipelineStateCommandOutput>;
  public getPipelineState(
    args: GetPipelineStateCommandInput,
    cb: (err: any, data?: GetPipelineStateCommandOutput) => void
  ): void;
  public getPipelineState(
    args: GetPipelineStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPipelineStateCommandOutput) => void
  ): void;
  public getPipelineState(
    args: GetPipelineStateCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPipelineStateCommandOutput) => void),
    cb?: (err: any, data?: GetPipelineStateCommandOutput) => void
  ): Promise<GetPipelineStateCommandOutput> | void {
    const command = new GetPipelineStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests the details of a job for a third party action. Used for partner actions
   *             only.</p>
   *         <important>
   *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
   *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
   *                 that S3 bucket for input or output artifacts. This API also returns any secret
   *                 values defined for the action.</p>
   *         </important>
   */
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThirdPartyJobDetailsCommandOutput>;
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    cb: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void
  ): void;
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void
  ): void;
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void
  ): Promise<GetThirdPartyJobDetailsCommandOutput> | void {
    const command = new GetThirdPartyJobDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the action executions that have occurred in a pipeline.</p>
   */
  public listActionExecutions(
    args: ListActionExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionExecutionsCommandOutput>;
  public listActionExecutions(
    args: ListActionExecutionsCommandInput,
    cb: (err: any, data?: ListActionExecutionsCommandOutput) => void
  ): void;
  public listActionExecutions(
    args: ListActionExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionExecutionsCommandOutput) => void
  ): void;
  public listActionExecutions(
    args: ListActionExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActionExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListActionExecutionsCommandOutput) => void
  ): Promise<ListActionExecutionsCommandOutput> | void {
    const command = new ListActionExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a summary of all AWS CodePipeline action types associated with your
   *             account.</p>
   */
  public listActionTypes(
    args: ListActionTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionTypesCommandOutput>;
  public listActionTypes(
    args: ListActionTypesCommandInput,
    cb: (err: any, data?: ListActionTypesCommandOutput) => void
  ): void;
  public listActionTypes(
    args: ListActionTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionTypesCommandOutput) => void
  ): void;
  public listActionTypes(
    args: ListActionTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListActionTypesCommandOutput) => void),
    cb?: (err: any, data?: ListActionTypesCommandOutput) => void
  ): Promise<ListActionTypesCommandOutput> | void {
    const command = new ListActionTypesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a summary of the most recent executions for a pipeline.</p>
   */
  public listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelineExecutionsCommandOutput>;
  public listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): void;
  public listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): void;
  public listPipelineExecutions(
    args: ListPipelineExecutionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPipelineExecutionsCommandOutput) => void),
    cb?: (err: any, data?: ListPipelineExecutionsCommandOutput) => void
  ): Promise<ListPipelineExecutionsCommandOutput> | void {
    const command = new ListPipelineExecutionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets a summary of all of the pipelines associated with your account.</p>
   */
  public listPipelines(
    args: ListPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPipelinesCommandOutput>;
  public listPipelines(
    args: ListPipelinesCommandInput,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipelinesCommandOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListPipelinesCommandOutput) => void
  ): Promise<ListPipelinesCommandOutput> | void {
    const command = new ListPipelinesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the set of key-value pairs (metadata) that are used to manage the
   *             resource.</p>
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
   * <p>Gets a listing of all the webhooks in this AWS Region for this account. The output
   *             lists all webhooks and includes the webhook URL and ARN and the configuration for each
   *             webhook.</p>
   */
  public listWebhooks(
    args: ListWebhooksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListWebhooksCommandOutput>;
  public listWebhooks(args: ListWebhooksCommandInput, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
  public listWebhooks(
    args: ListWebhooksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListWebhooksCommandOutput) => void
  ): void;
  public listWebhooks(
    args: ListWebhooksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListWebhooksCommandOutput) => void),
    cb?: (err: any, data?: ListWebhooksCommandOutput) => void
  ): Promise<ListWebhooksCommandOutput> | void {
    const command = new ListWebhooksCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about any jobs for AWS CodePipeline to act on.
   *                 <code>PollForJobs</code> is valid only for action types with "Custom" in the owner
   *             field. If the action type contains "AWS" or "ThirdParty" in the owner field, the
   *                 <code>PollForJobs</code> action returns an error.</p>
   *         <important>
   *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
   *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
   *                 that S3 bucket for input or output artifacts. This API also returns any secret
   *                 values defined for the action.</p>
   *         </important>
   */
  public pollForJobs(args: PollForJobsCommandInput, options?: __HttpHandlerOptions): Promise<PollForJobsCommandOutput>;
  public pollForJobs(args: PollForJobsCommandInput, cb: (err: any, data?: PollForJobsCommandOutput) => void): void;
  public pollForJobs(
    args: PollForJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForJobsCommandOutput) => void
  ): void;
  public pollForJobs(
    args: PollForJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PollForJobsCommandOutput) => void),
    cb?: (err: any, data?: PollForJobsCommandOutput) => void
  ): Promise<PollForJobsCommandOutput> | void {
    const command = new PollForJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Determines whether there are any third party jobs for a job worker to act on. Used
   *             for partner actions only.</p>
   *         <important>
   *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
   *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
   *                 that S3 bucket for input or output artifacts.</p>
   *         </important>
   */
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PollForThirdPartyJobsCommandOutput>;
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    cb: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void
  ): void;
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void
  ): void;
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PollForThirdPartyJobsCommandOutput) => void),
    cb?: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void
  ): Promise<PollForThirdPartyJobsCommandOutput> | void {
    const command = new PollForThirdPartyJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides information to AWS CodePipeline about new revisions to a source.</p>
   */
  public putActionRevision(
    args: PutActionRevisionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutActionRevisionCommandOutput>;
  public putActionRevision(
    args: PutActionRevisionCommandInput,
    cb: (err: any, data?: PutActionRevisionCommandOutput) => void
  ): void;
  public putActionRevision(
    args: PutActionRevisionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutActionRevisionCommandOutput) => void
  ): void;
  public putActionRevision(
    args: PutActionRevisionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutActionRevisionCommandOutput) => void),
    cb?: (err: any, data?: PutActionRevisionCommandOutput) => void
  ): Promise<PutActionRevisionCommandOutput> | void {
    const command = new PutActionRevisionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides the response to a manual approval request to AWS CodePipeline. Valid
   *             responses include Approved and Rejected.</p>
   */
  public putApprovalResult(
    args: PutApprovalResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutApprovalResultCommandOutput>;
  public putApprovalResult(
    args: PutApprovalResultCommandInput,
    cb: (err: any, data?: PutApprovalResultCommandOutput) => void
  ): void;
  public putApprovalResult(
    args: PutApprovalResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutApprovalResultCommandOutput) => void
  ): void;
  public putApprovalResult(
    args: PutApprovalResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutApprovalResultCommandOutput) => void),
    cb?: (err: any, data?: PutApprovalResultCommandOutput) => void
  ): Promise<PutApprovalResultCommandOutput> | void {
    const command = new PutApprovalResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
   *             for custom actions only.</p>
   */
  public putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutJobFailureResultCommandOutput>;
  public putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    cb: (err: any, data?: PutJobFailureResultCommandOutput) => void
  ): void;
  public putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutJobFailureResultCommandOutput) => void
  ): void;
  public putJobFailureResult(
    args: PutJobFailureResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutJobFailureResultCommandOutput) => void),
    cb?: (err: any, data?: PutJobFailureResultCommandOutput) => void
  ): Promise<PutJobFailureResultCommandOutput> | void {
    const command = new PutJobFailureResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Represents the success of a job as returned to the pipeline by a job worker. Used
   *             for custom actions only.</p>
   */
  public putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutJobSuccessResultCommandOutput>;
  public putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    cb: (err: any, data?: PutJobSuccessResultCommandOutput) => void
  ): void;
  public putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutJobSuccessResultCommandOutput) => void
  ): void;
  public putJobSuccessResult(
    args: PutJobSuccessResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutJobSuccessResultCommandOutput) => void),
    cb?: (err: any, data?: PutJobSuccessResultCommandOutput) => void
  ): Promise<PutJobSuccessResultCommandOutput> | void {
    const command = new PutJobSuccessResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Represents the failure of a third party job as returned to the pipeline by a job
   *             worker. Used for partner actions only.</p>
   */
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutThirdPartyJobFailureResultCommandOutput>;
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    cb: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void
  ): void;
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void
  ): void;
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void),
    cb?: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void
  ): Promise<PutThirdPartyJobFailureResultCommandOutput> | void {
    const command = new PutThirdPartyJobFailureResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Represents the success of a third party job as returned to the pipeline by a job
   *             worker. Used for partner actions only.</p>
   */
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutThirdPartyJobSuccessResultCommandOutput>;
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    cb: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void
  ): void;
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void
  ): void;
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void),
    cb?: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void
  ): Promise<PutThirdPartyJobSuccessResultCommandOutput> | void {
    const command = new PutThirdPartyJobSuccessResultCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This
   *             URL can be supplied to third party source hosting providers to call every time there's a
   *             code change. When CodePipeline receives a POST request on this URL, the pipeline defined
   *             in the webhook is started as long as the POST request satisfied the authentication and
   *             filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty
   *             and DeregisterWebhookWithThirdParty APIs can be used to automatically configure
   *             supported third parties to call the generated webhook URL.</p>
   */
  public putWebhook(args: PutWebhookCommandInput, options?: __HttpHandlerOptions): Promise<PutWebhookCommandOutput>;
  public putWebhook(args: PutWebhookCommandInput, cb: (err: any, data?: PutWebhookCommandOutput) => void): void;
  public putWebhook(
    args: PutWebhookCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutWebhookCommandOutput) => void
  ): void;
  public putWebhook(
    args: PutWebhookCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutWebhookCommandOutput) => void),
    cb?: (err: any, data?: PutWebhookCommandOutput) => void
  ): Promise<PutWebhookCommandOutput> | void {
    const command = new PutWebhookCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Configures a connection between the webhook that was created and the external tool
   *             with events to be detected.</p>
   */
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterWebhookWithThirdPartyCommandOutput>;
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    cb: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void
  ): void;
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void
  ): void;
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void),
    cb?: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void
  ): Promise<RegisterWebhookWithThirdPartyCommandOutput> | void {
    const command = new RegisterWebhookWithThirdPartyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Resumes the pipeline execution by retrying the last failed actions in a stage. You
   *             can retry a stage immediately if any of the actions in the stage fail. When you retry,
   *             all actions that are still in progress continue working, and failed actions are
   *             triggered again.</p>
   */
  public retryStageExecution(
    args: RetryStageExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RetryStageExecutionCommandOutput>;
  public retryStageExecution(
    args: RetryStageExecutionCommandInput,
    cb: (err: any, data?: RetryStageExecutionCommandOutput) => void
  ): void;
  public retryStageExecution(
    args: RetryStageExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RetryStageExecutionCommandOutput) => void
  ): void;
  public retryStageExecution(
    args: RetryStageExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RetryStageExecutionCommandOutput) => void),
    cb?: (err: any, data?: RetryStageExecutionCommandOutput) => void
  ): Promise<RetryStageExecutionCommandOutput> | void {
    const command = new RetryStageExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit
   *             to the source location specified as part of the pipeline.</p>
   */
  public startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartPipelineExecutionCommandOutput>;
  public startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): void;
  public startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): void;
  public startPipelineExecution(
    args: StartPipelineExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartPipelineExecutionCommandOutput) => void),
    cb?: (err: any, data?: StartPipelineExecutionCommandOutput) => void
  ): Promise<StartPipelineExecutionCommandOutput> | void {
    const command = new StartPipelineExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the specified pipeline execution. You choose to either stop the pipeline
   *             execution by completing in-progress actions without starting subsequent actions, or by
   *             abandoning in-progress actions. While completing or abandoning in-progress actions, the
   *             pipeline execution is in a <code>Stopping</code> state. After all in-progress actions
   *             are completed or abandoned, the pipeline execution is in a <code>Stopped</code>
   *             state.</p>
   */
  public stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopPipelineExecutionCommandOutput>;
  public stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void
  ): void;
  public stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void
  ): void;
  public stopPipelineExecution(
    args: StopPipelineExecutionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopPipelineExecutionCommandOutput) => void),
    cb?: (err: any, data?: StopPipelineExecutionCommandOutput) => void
  ): Promise<StopPipelineExecutionCommandOutput> | void {
    const command = new StopPipelineExecutionCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used
   *             to manage a resource. </p>
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
   * <p>Removes tags from an AWS resource.</p>
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
   * <p>Updates an action type that was created with any supported integration model, where
   *             the action type is to be used by customers of the action type provider. Use a JSON file
   *             with the action definition and <code>UpdateActionType</code> to provide the full
   *             structure.</p>
   */
  public updateActionType(
    args: UpdateActionTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateActionTypeCommandOutput>;
  public updateActionType(
    args: UpdateActionTypeCommandInput,
    cb: (err: any, data?: UpdateActionTypeCommandOutput) => void
  ): void;
  public updateActionType(
    args: UpdateActionTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateActionTypeCommandOutput) => void
  ): void;
  public updateActionType(
    args: UpdateActionTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateActionTypeCommandOutput) => void),
    cb?: (err: any, data?: UpdateActionTypeCommandOutput) => void
  ): Promise<UpdateActionTypeCommandOutput> | void {
    const command = new UpdateActionTypeCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON
   *             file with the pipeline structure and <code>UpdatePipeline</code> to provide the full
   *             structure of the pipeline. Updating the pipeline increases the version number of the
   *             pipeline by 1.</p>
   */
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePipelineCommandOutput>;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePipelineCommandOutput) => void),
    cb?: (err: any, data?: UpdatePipelineCommandOutput) => void
  ): Promise<UpdatePipelineCommandOutput> | void {
    const command = new UpdatePipelineCommand(args);
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
