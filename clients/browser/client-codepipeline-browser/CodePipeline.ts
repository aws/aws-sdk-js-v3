import { CodePipelineClient } from "./CodePipelineClient";
import { AcknowledgeJobInput } from "./types/AcknowledgeJobInput";
import { AcknowledgeJobOutput } from "./types/AcknowledgeJobOutput";
import { AcknowledgeThirdPartyJobInput } from "./types/AcknowledgeThirdPartyJobInput";
import { AcknowledgeThirdPartyJobOutput } from "./types/AcknowledgeThirdPartyJobOutput";
import { ActionNotFoundException } from "./types/ActionNotFoundException";
import { ActionTypeNotFoundException } from "./types/ActionTypeNotFoundException";
import { ApprovalAlreadyCompletedException } from "./types/ApprovalAlreadyCompletedException";
import { ConcurrentModificationException } from "./types/ConcurrentModificationException";
import { CreateCustomActionTypeInput } from "./types/CreateCustomActionTypeInput";
import { CreateCustomActionTypeOutput } from "./types/CreateCustomActionTypeOutput";
import { CreatePipelineInput } from "./types/CreatePipelineInput";
import { CreatePipelineOutput } from "./types/CreatePipelineOutput";
import { DeleteCustomActionTypeInput } from "./types/DeleteCustomActionTypeInput";
import { DeleteCustomActionTypeOutput } from "./types/DeleteCustomActionTypeOutput";
import { DeletePipelineInput } from "./types/DeletePipelineInput";
import { DeletePipelineOutput } from "./types/DeletePipelineOutput";
import { DeleteWebhookInput } from "./types/DeleteWebhookInput";
import { DeleteWebhookOutput } from "./types/DeleteWebhookOutput";
import { DeregisterWebhookWithThirdPartyInput } from "./types/DeregisterWebhookWithThirdPartyInput";
import { DeregisterWebhookWithThirdPartyOutput } from "./types/DeregisterWebhookWithThirdPartyOutput";
import { DisableStageTransitionInput } from "./types/DisableStageTransitionInput";
import { DisableStageTransitionOutput } from "./types/DisableStageTransitionOutput";
import { EnableStageTransitionInput } from "./types/EnableStageTransitionInput";
import { EnableStageTransitionOutput } from "./types/EnableStageTransitionOutput";
import { GetJobDetailsInput } from "./types/GetJobDetailsInput";
import { GetJobDetailsOutput } from "./types/GetJobDetailsOutput";
import { GetPipelineExecutionInput } from "./types/GetPipelineExecutionInput";
import { GetPipelineExecutionOutput } from "./types/GetPipelineExecutionOutput";
import { GetPipelineInput } from "./types/GetPipelineInput";
import { GetPipelineOutput } from "./types/GetPipelineOutput";
import { GetPipelineStateInput } from "./types/GetPipelineStateInput";
import { GetPipelineStateOutput } from "./types/GetPipelineStateOutput";
import { GetThirdPartyJobDetailsInput } from "./types/GetThirdPartyJobDetailsInput";
import { GetThirdPartyJobDetailsOutput } from "./types/GetThirdPartyJobDetailsOutput";
import { InvalidActionDeclarationException } from "./types/InvalidActionDeclarationException";
import { InvalidApprovalTokenException } from "./types/InvalidApprovalTokenException";
import { InvalidArnException } from "./types/InvalidArnException";
import { InvalidBlockerDeclarationException } from "./types/InvalidBlockerDeclarationException";
import { InvalidClientTokenException } from "./types/InvalidClientTokenException";
import { InvalidJobException } from "./types/InvalidJobException";
import { InvalidJobStateException } from "./types/InvalidJobStateException";
import { InvalidNextTokenException } from "./types/InvalidNextTokenException";
import { InvalidNonceException } from "./types/InvalidNonceException";
import { InvalidStageDeclarationException } from "./types/InvalidStageDeclarationException";
import { InvalidStructureException } from "./types/InvalidStructureException";
import { InvalidTagsException } from "./types/InvalidTagsException";
import { InvalidWebhookAuthenticationParametersException } from "./types/InvalidWebhookAuthenticationParametersException";
import { InvalidWebhookFilterPatternException } from "./types/InvalidWebhookFilterPatternException";
import { JobNotFoundException } from "./types/JobNotFoundException";
import { LimitExceededException } from "./types/LimitExceededException";
import { ListActionExecutionsInput } from "./types/ListActionExecutionsInput";
import { ListActionExecutionsOutput } from "./types/ListActionExecutionsOutput";
import { ListActionTypesInput } from "./types/ListActionTypesInput";
import { ListActionTypesOutput } from "./types/ListActionTypesOutput";
import { ListPipelineExecutionsInput } from "./types/ListPipelineExecutionsInput";
import { ListPipelineExecutionsOutput } from "./types/ListPipelineExecutionsOutput";
import { ListPipelinesInput } from "./types/ListPipelinesInput";
import { ListPipelinesOutput } from "./types/ListPipelinesOutput";
import { ListTagsForResourceInput } from "./types/ListTagsForResourceInput";
import { ListTagsForResourceOutput } from "./types/ListTagsForResourceOutput";
import { ListWebhooksInput } from "./types/ListWebhooksInput";
import { ListWebhooksOutput } from "./types/ListWebhooksOutput";
import { NotLatestPipelineExecutionException } from "./types/NotLatestPipelineExecutionException";
import { PipelineExecutionNotFoundException } from "./types/PipelineExecutionNotFoundException";
import { PipelineNameInUseException } from "./types/PipelineNameInUseException";
import { PipelineNotFoundException } from "./types/PipelineNotFoundException";
import { PipelineVersionNotFoundException } from "./types/PipelineVersionNotFoundException";
import { PollForJobsInput } from "./types/PollForJobsInput";
import { PollForJobsOutput } from "./types/PollForJobsOutput";
import { PollForThirdPartyJobsInput } from "./types/PollForThirdPartyJobsInput";
import { PollForThirdPartyJobsOutput } from "./types/PollForThirdPartyJobsOutput";
import { PutActionRevisionInput } from "./types/PutActionRevisionInput";
import { PutActionRevisionOutput } from "./types/PutActionRevisionOutput";
import { PutApprovalResultInput } from "./types/PutApprovalResultInput";
import { PutApprovalResultOutput } from "./types/PutApprovalResultOutput";
import { PutJobFailureResultInput } from "./types/PutJobFailureResultInput";
import { PutJobFailureResultOutput } from "./types/PutJobFailureResultOutput";
import { PutJobSuccessResultInput } from "./types/PutJobSuccessResultInput";
import { PutJobSuccessResultOutput } from "./types/PutJobSuccessResultOutput";
import { PutThirdPartyJobFailureResultInput } from "./types/PutThirdPartyJobFailureResultInput";
import { PutThirdPartyJobFailureResultOutput } from "./types/PutThirdPartyJobFailureResultOutput";
import { PutThirdPartyJobSuccessResultInput } from "./types/PutThirdPartyJobSuccessResultInput";
import { PutThirdPartyJobSuccessResultOutput } from "./types/PutThirdPartyJobSuccessResultOutput";
import { PutWebhookInput } from "./types/PutWebhookInput";
import { PutWebhookOutput } from "./types/PutWebhookOutput";
import { RegisterWebhookWithThirdPartyInput } from "./types/RegisterWebhookWithThirdPartyInput";
import { RegisterWebhookWithThirdPartyOutput } from "./types/RegisterWebhookWithThirdPartyOutput";
import { ResourceNotFoundException } from "./types/ResourceNotFoundException";
import { RetryStageExecutionInput } from "./types/RetryStageExecutionInput";
import { RetryStageExecutionOutput } from "./types/RetryStageExecutionOutput";
import { StageNotFoundException } from "./types/StageNotFoundException";
import { StageNotRetryableException } from "./types/StageNotRetryableException";
import { StartPipelineExecutionInput } from "./types/StartPipelineExecutionInput";
import { StartPipelineExecutionOutput } from "./types/StartPipelineExecutionOutput";
import { TagResourceInput } from "./types/TagResourceInput";
import { TagResourceOutput } from "./types/TagResourceOutput";
import { TooManyTagsException } from "./types/TooManyTagsException";
import { UntagResourceInput } from "./types/UntagResourceInput";
import { UntagResourceOutput } from "./types/UntagResourceOutput";
import { UpdatePipelineInput } from "./types/UpdatePipelineInput";
import { UpdatePipelineOutput } from "./types/UpdatePipelineOutput";
import { ValidationException } from "./types/ValidationException";
import { WebhookNotFoundException } from "./types/WebhookNotFoundException";
import { AcknowledgeJobCommand } from "./commands/AcknowledgeJobCommand";
import { AcknowledgeThirdPartyJobCommand } from "./commands/AcknowledgeThirdPartyJobCommand";
import { CreateCustomActionTypeCommand } from "./commands/CreateCustomActionTypeCommand";
import { CreatePipelineCommand } from "./commands/CreatePipelineCommand";
import { DeleteCustomActionTypeCommand } from "./commands/DeleteCustomActionTypeCommand";
import { DeletePipelineCommand } from "./commands/DeletePipelineCommand";
import { DeleteWebhookCommand } from "./commands/DeleteWebhookCommand";
import { DeregisterWebhookWithThirdPartyCommand } from "./commands/DeregisterWebhookWithThirdPartyCommand";
import { DisableStageTransitionCommand } from "./commands/DisableStageTransitionCommand";
import { EnableStageTransitionCommand } from "./commands/EnableStageTransitionCommand";
import { GetJobDetailsCommand } from "./commands/GetJobDetailsCommand";
import { GetPipelineCommand } from "./commands/GetPipelineCommand";
import { GetPipelineExecutionCommand } from "./commands/GetPipelineExecutionCommand";
import { GetPipelineStateCommand } from "./commands/GetPipelineStateCommand";
import { GetThirdPartyJobDetailsCommand } from "./commands/GetThirdPartyJobDetailsCommand";
import { ListActionExecutionsCommand } from "./commands/ListActionExecutionsCommand";
import { ListActionTypesCommand } from "./commands/ListActionTypesCommand";
import { ListPipelineExecutionsCommand } from "./commands/ListPipelineExecutionsCommand";
import { ListPipelinesCommand } from "./commands/ListPipelinesCommand";
import { ListTagsForResourceCommand } from "./commands/ListTagsForResourceCommand";
import { ListWebhooksCommand } from "./commands/ListWebhooksCommand";
import { PollForJobsCommand } from "./commands/PollForJobsCommand";
import { PollForThirdPartyJobsCommand } from "./commands/PollForThirdPartyJobsCommand";
import { PutActionRevisionCommand } from "./commands/PutActionRevisionCommand";
import { PutApprovalResultCommand } from "./commands/PutApprovalResultCommand";
import { PutJobFailureResultCommand } from "./commands/PutJobFailureResultCommand";
import { PutJobSuccessResultCommand } from "./commands/PutJobSuccessResultCommand";
import { PutThirdPartyJobFailureResultCommand } from "./commands/PutThirdPartyJobFailureResultCommand";
import { PutThirdPartyJobSuccessResultCommand } from "./commands/PutThirdPartyJobSuccessResultCommand";
import { PutWebhookCommand } from "./commands/PutWebhookCommand";
import { RegisterWebhookWithThirdPartyCommand } from "./commands/RegisterWebhookWithThirdPartyCommand";
import { RetryStageExecutionCommand } from "./commands/RetryStageExecutionCommand";
import { StartPipelineExecutionCommand } from "./commands/StartPipelineExecutionCommand";
import { TagResourceCommand } from "./commands/TagResourceCommand";
import { UntagResourceCommand } from "./commands/UntagResourceCommand";
import { UpdatePipelineCommand } from "./commands/UpdatePipelineCommand";

export class CodePipeline extends CodePipelineClient {
  /**
   * <p>Returns information about a specified job and whether that job has been received by the job worker. Only used for custom actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidNonceException} <p>The specified nonce was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acknowledgeJob(
    args: AcknowledgeJobInput
  ): Promise<AcknowledgeJobOutput>;
  public acknowledgeJob(
    args: AcknowledgeJobInput,
    cb: (err: any, data?: AcknowledgeJobOutput) => void
  ): void;
  public acknowledgeJob(
    args: AcknowledgeJobInput,
    cb?: (err: any, data?: AcknowledgeJobOutput) => void
  ): Promise<AcknowledgeJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcknowledgeJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Confirms a job worker has received the specified job. Only used for partner actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidNonceException} <p>The specified nonce was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {InvalidClientTokenException} <p>The client token was specified in an invalid format</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobInput
  ): Promise<AcknowledgeThirdPartyJobOutput>;
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobInput,
    cb: (err: any, data?: AcknowledgeThirdPartyJobOutput) => void
  ): void;
  public acknowledgeThirdPartyJob(
    args: AcknowledgeThirdPartyJobInput,
    cb?: (err: any, data?: AcknowledgeThirdPartyJobOutput) => void
  ): Promise<AcknowledgeThirdPartyJobOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new AcknowledgeThirdPartyJobCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a new custom action that can be used in all pipelines associated with the AWS account. Only used for custom actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {LimitExceededException} <p>The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.</p>
   *   - {TooManyTagsException} <p>The tags limit for a resource has been exceeded.</p>
   *   - {InvalidTagsException} <p>The specified resource tags are invalid.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createCustomActionType(
    args: CreateCustomActionTypeInput
  ): Promise<CreateCustomActionTypeOutput>;
  public createCustomActionType(
    args: CreateCustomActionTypeInput,
    cb: (err: any, data?: CreateCustomActionTypeOutput) => void
  ): void;
  public createCustomActionType(
    args: CreateCustomActionTypeInput,
    cb?: (err: any, data?: CreateCustomActionTypeOutput) => void
  ): Promise<CreateCustomActionTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreateCustomActionTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Creates a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNameInUseException} <p>The specified pipeline name is already in use.</p>
   *   - {InvalidStageDeclarationException} <p>The specified stage declaration was specified in an invalid format.</p>
   *   - {InvalidActionDeclarationException} <p>The specified action declaration was specified in an invalid format.</p>
   *   - {InvalidBlockerDeclarationException} <p>Reserved for future use.</p>
   *   - {InvalidStructureException} <p>The specified structure was specified in an invalid format.</p>
   *   - {LimitExceededException} <p>The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.</p>
   *   - {TooManyTagsException} <p>The tags limit for a resource has been exceeded.</p>
   *   - {InvalidTagsException} <p>The specified resource tags are invalid.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public createPipeline(
    args: CreatePipelineInput
  ): Promise<CreatePipelineOutput>;
  public createPipeline(
    args: CreatePipelineInput,
    cb: (err: any, data?: CreatePipelineOutput) => void
  ): void;
  public createPipeline(
    args: CreatePipelineInput,
    cb?: (err: any, data?: CreatePipelineOutput) => void
  ): Promise<CreatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new CreatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Marks a custom action as deleted. <code>PollForJobs</code> for the custom action will fail after the action is marked for deletion. Only used for custom actions.</p> <important> <p>To re-create a custom action after it has been deleted you must use a string in the version field that has never been used before. This string can be an incremented version number, for example. To restore a deleted custom action, use a JSON file that is identical to the deleted action, including the original string in the version field.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteCustomActionType(
    args: DeleteCustomActionTypeInput
  ): Promise<DeleteCustomActionTypeOutput>;
  public deleteCustomActionType(
    args: DeleteCustomActionTypeInput,
    cb: (err: any, data?: DeleteCustomActionTypeOutput) => void
  ): void;
  public deleteCustomActionType(
    args: DeleteCustomActionTypeInput,
    cb?: (err: any, data?: DeleteCustomActionTypeOutput) => void
  ): Promise<DeleteCustomActionTypeOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteCustomActionTypeCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes the specified pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deletePipeline(
    args: DeletePipelineInput
  ): Promise<DeletePipelineOutput>;
  public deletePipeline(
    args: DeletePipelineInput,
    cb: (err: any, data?: DeletePipelineOutput) => void
  ): void;
  public deletePipeline(
    args: DeletePipelineInput,
    cb?: (err: any, data?: DeletePipelineOutput) => void
  ): Promise<DeletePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeletePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Deletes a previously created webhook by name. Deleting the webhook stops AWS CodePipeline from starting a pipeline every time an external event occurs. The API will return successfully when trying to delete a webhook that is already deleted. If a deleted webhook is re-created by calling PutWebhook with the same name, it will have a different URL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deleteWebhook(args: DeleteWebhookInput): Promise<DeleteWebhookOutput>;
  public deleteWebhook(
    args: DeleteWebhookInput,
    cb: (err: any, data?: DeleteWebhookOutput) => void
  ): void;
  public deleteWebhook(
    args: DeleteWebhookInput,
    cb?: (err: any, data?: DeleteWebhookOutput) => void
  ): Promise<DeleteWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeleteWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Removes the connection between the webhook that was created by CodePipeline and the external tool with events to be detected. Currently only supported for webhooks that target an action type of GitHub.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {WebhookNotFoundException} <p>The specified webhook was entered in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyInput
  ): Promise<DeregisterWebhookWithThirdPartyOutput>;
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyInput,
    cb: (err: any, data?: DeregisterWebhookWithThirdPartyOutput) => void
  ): void;
  public deregisterWebhookWithThirdParty(
    args: DeregisterWebhookWithThirdPartyInput,
    cb?: (err: any, data?: DeregisterWebhookWithThirdPartyOutput) => void
  ): Promise<DeregisterWebhookWithThirdPartyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DeregisterWebhookWithThirdPartyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {StageNotFoundException} <p>The specified stage was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public disableStageTransition(
    args: DisableStageTransitionInput
  ): Promise<DisableStageTransitionOutput>;
  public disableStageTransition(
    args: DisableStageTransitionInput,
    cb: (err: any, data?: DisableStageTransitionOutput) => void
  ): void;
  public disableStageTransition(
    args: DisableStageTransitionInput,
    cb?: (err: any, data?: DisableStageTransitionOutput) => void
  ): Promise<DisableStageTransitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new DisableStageTransitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Enables artifacts in a pipeline to transition to a stage in a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {StageNotFoundException} <p>The specified stage was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public enableStageTransition(
    args: EnableStageTransitionInput
  ): Promise<EnableStageTransitionOutput>;
  public enableStageTransition(
    args: EnableStageTransitionInput,
    cb: (err: any, data?: EnableStageTransitionOutput) => void
  ): void;
  public enableStageTransition(
    args: EnableStageTransitionInput,
    cb?: (err: any, data?: EnableStageTransitionOutput) => void
  ): Promise<EnableStageTransitionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new EnableStageTransitionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about a job. Only used for custom actions.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getJobDetails(args: GetJobDetailsInput): Promise<GetJobDetailsOutput>;
  public getJobDetails(
    args: GetJobDetailsInput,
    cb: (err: any, data?: GetJobDetailsOutput) => void
  ): void;
  public getJobDetails(
    args: GetJobDetailsInput,
    cb?: (err: any, data?: GetJobDetailsOutput) => void
  ): Promise<GetJobDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetJobDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to return the entire structure of a pipeline in JSON format, which can then be modified and used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {PipelineVersionNotFoundException} <p>The specified pipeline version was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPipeline(args: GetPipelineInput): Promise<GetPipelineOutput>;
  public getPipeline(
    args: GetPipelineInput,
    cb: (err: any, data?: GetPipelineOutput) => void
  ): void;
  public getPipeline(
    args: GetPipelineInput,
    cb?: (err: any, data?: GetPipelineOutput) => void
  ): Promise<GetPipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about an execution of a pipeline, including details about artifacts, the pipeline execution ID, and the name, version, and status of the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {PipelineExecutionNotFoundException} <p>The pipeline execution was specified in an invalid format or cannot be found, or an execution ID does not belong to the specified pipeline. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPipelineExecution(
    args: GetPipelineExecutionInput
  ): Promise<GetPipelineExecutionOutput>;
  public getPipelineExecution(
    args: GetPipelineExecutionInput,
    cb: (err: any, data?: GetPipelineExecutionOutput) => void
  ): void;
  public getPipelineExecution(
    args: GetPipelineExecutionInput,
    cb?: (err: any, data?: GetPipelineExecutionOutput) => void
  ): Promise<GetPipelineExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPipelineExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about the state of a pipeline, including the stages and actions.</p> <note> <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code> fields indicate the source revision information, such as the commit ID, for the current state.</p> </note>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getPipelineState(
    args: GetPipelineStateInput
  ): Promise<GetPipelineStateOutput>;
  public getPipelineState(
    args: GetPipelineStateInput,
    cb: (err: any, data?: GetPipelineStateOutput) => void
  ): void;
  public getPipelineState(
    args: GetPipelineStateInput,
    cb?: (err: any, data?: GetPipelineStateOutput) => void
  ): Promise<GetPipelineStateOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetPipelineStateCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Requests the details of a job for a third party action. Only used for partner actions.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidClientTokenException} <p>The client token was specified in an invalid format</p>
   *   - {InvalidJobException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsInput
  ): Promise<GetThirdPartyJobDetailsOutput>;
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsInput,
    cb: (err: any, data?: GetThirdPartyJobDetailsOutput) => void
  ): void;
  public getThirdPartyJobDetails(
    args: GetThirdPartyJobDetailsInput,
    cb?: (err: any, data?: GetThirdPartyJobDetailsOutput) => void
  ): Promise<GetThirdPartyJobDetailsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new GetThirdPartyJobDetailsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Lists the action executions that have occurred in a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
   *   - {PipelineExecutionNotFoundException} <p>The pipeline execution was specified in an invalid format or cannot be found, or an execution ID does not belong to the specified pipeline. </p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listActionExecutions(
    args: ListActionExecutionsInput
  ): Promise<ListActionExecutionsOutput>;
  public listActionExecutions(
    args: ListActionExecutionsInput,
    cb: (err: any, data?: ListActionExecutionsOutput) => void
  ): void;
  public listActionExecutions(
    args: ListActionExecutionsInput,
    cb?: (err: any, data?: ListActionExecutionsOutput) => void
  ): Promise<ListActionExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListActionExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a summary of all AWS CodePipeline action types associated with your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listActionTypes(
    args: ListActionTypesInput
  ): Promise<ListActionTypesOutput>;
  public listActionTypes(
    args: ListActionTypesInput,
    cb: (err: any, data?: ListActionTypesOutput) => void
  ): void;
  public listActionTypes(
    args: ListActionTypesInput,
    cb?: (err: any, data?: ListActionTypesOutput) => void
  ): Promise<ListActionTypesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListActionTypesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a summary of the most recent executions for a pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPipelineExecutions(
    args: ListPipelineExecutionsInput
  ): Promise<ListPipelineExecutionsOutput>;
  public listPipelineExecutions(
    args: ListPipelineExecutionsInput,
    cb: (err: any, data?: ListPipelineExecutionsOutput) => void
  ): void;
  public listPipelineExecutions(
    args: ListPipelineExecutionsInput,
    cb?: (err: any, data?: ListPipelineExecutionsOutput) => void
  ): Promise<ListPipelineExecutionsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPipelineExecutionsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets a summary of all of the pipelines associated with your account.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listPipelines(args: ListPipelinesInput): Promise<ListPipelinesOutput>;
  public listPipelines(
    args: ListPipelinesInput,
    cb: (err: any, data?: ListPipelinesOutput) => void
  ): void;
  public listPipelines(
    args: ListPipelinesInput,
    cb?: (err: any, data?: ListPipelinesOutput) => void
  ): Promise<ListPipelinesOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListPipelinesCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Gets the set of key/value pairs (metadata) that are used to manage the resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was specified in an invalid format.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
   *   - {InvalidArnException} <p>The specified resource ARN is invalid.</p>
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
   * <p>Gets a listing of all the webhooks in this region for this account. The output lists all webhooks and includes the webhook URL and ARN, as well the configuration for each webhook.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidNextTokenException} <p>The next token was specified in an invalid format. Make sure that the next token you provided is the token returned by a previous call.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public listWebhooks(args: ListWebhooksInput): Promise<ListWebhooksOutput>;
  public listWebhooks(
    args: ListWebhooksInput,
    cb: (err: any, data?: ListWebhooksOutput) => void
  ): void;
  public listWebhooks(
    args: ListWebhooksInput,
    cb?: (err: any, data?: ListWebhooksOutput) => void
  ): Promise<ListWebhooksOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new ListWebhooksCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Returns information about any jobs for AWS CodePipeline to act upon. <code>PollForJobs</code> is only valid for action types with "Custom" in the owner field. If the action type contains "AWS" or "ThirdParty" in the owner field, the <code>PollForJobs</code> action returns an error.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts. Additionally, this API returns any secret values defined for the action.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ActionTypeNotFoundException} <p>The specified action type cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public pollForJobs(args: PollForJobsInput): Promise<PollForJobsOutput>;
  public pollForJobs(
    args: PollForJobsInput,
    cb: (err: any, data?: PollForJobsOutput) => void
  ): void;
  public pollForJobs(
    args: PollForJobsInput,
    cb?: (err: any, data?: PollForJobsOutput) => void
  ): Promise<PollForJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PollForJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Determines whether there are any third party jobs for a job worker to act on. Only used for partner actions.</p> <important> <p>When this API is called, AWS CodePipeline returns temporary credentials for the Amazon S3 bucket used to store artifacts for the pipeline, if the action requires access to that Amazon S3 bucket for input or output artifacts.</p> </important>
   *
   * This operation may fail with one of the following errors:
   *   - {ActionTypeNotFoundException} <p>The specified action type cannot be found.</p>
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsInput
  ): Promise<PollForThirdPartyJobsOutput>;
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsInput,
    cb: (err: any, data?: PollForThirdPartyJobsOutput) => void
  ): void;
  public pollForThirdPartyJobs(
    args: PollForThirdPartyJobsInput,
    cb?: (err: any, data?: PollForThirdPartyJobsOutput) => void
  ): Promise<PollForThirdPartyJobsOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PollForThirdPartyJobsCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides information to AWS CodePipeline about new revisions to a source.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {StageNotFoundException} <p>The specified stage was specified in an invalid format or cannot be found.</p>
   *   - {ActionNotFoundException} <p>The specified action cannot be found.</p>
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putActionRevision(
    args: PutActionRevisionInput
  ): Promise<PutActionRevisionOutput>;
  public putActionRevision(
    args: PutActionRevisionInput,
    cb: (err: any, data?: PutActionRevisionOutput) => void
  ): void;
  public putActionRevision(
    args: PutActionRevisionInput,
    cb?: (err: any, data?: PutActionRevisionOutput) => void
  ): Promise<PutActionRevisionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutActionRevisionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Provides the response to a manual approval request to AWS CodePipeline. Valid responses include Approved and Rejected.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {InvalidApprovalTokenException} <p>The approval request already received a response or has expired.</p>
   *   - {ApprovalAlreadyCompletedException} <p>The approval action has already been approved or rejected.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {StageNotFoundException} <p>The specified stage was specified in an invalid format or cannot be found.</p>
   *   - {ActionNotFoundException} <p>The specified action cannot be found.</p>
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putApprovalResult(
    args: PutApprovalResultInput
  ): Promise<PutApprovalResultOutput>;
  public putApprovalResult(
    args: PutApprovalResultInput,
    cb: (err: any, data?: PutApprovalResultOutput) => void
  ): void;
  public putApprovalResult(
    args: PutApprovalResultInput,
    cb?: (err: any, data?: PutApprovalResultOutput) => void
  ): Promise<PutApprovalResultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutApprovalResultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents the failure of a job as returned to the pipeline by a job worker. Only used for custom actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {InvalidJobStateException} <p>The specified job state was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putJobFailureResult(
    args: PutJobFailureResultInput
  ): Promise<PutJobFailureResultOutput>;
  public putJobFailureResult(
    args: PutJobFailureResultInput,
    cb: (err: any, data?: PutJobFailureResultOutput) => void
  ): void;
  public putJobFailureResult(
    args: PutJobFailureResultInput,
    cb?: (err: any, data?: PutJobFailureResultOutput) => void
  ): Promise<PutJobFailureResultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutJobFailureResultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents the success of a job as returned to the pipeline by a job worker. Only used for custom actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {InvalidJobStateException} <p>The specified job state was specified in an invalid format.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putJobSuccessResult(
    args: PutJobSuccessResultInput
  ): Promise<PutJobSuccessResultOutput>;
  public putJobSuccessResult(
    args: PutJobSuccessResultInput,
    cb: (err: any, data?: PutJobSuccessResultOutput) => void
  ): void;
  public putJobSuccessResult(
    args: PutJobSuccessResultInput,
    cb?: (err: any, data?: PutJobSuccessResultOutput) => void
  ): Promise<PutJobSuccessResultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutJobSuccessResultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents the failure of a third party job as returned to the pipeline by a job worker. Only used for partner actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {InvalidJobStateException} <p>The specified job state was specified in an invalid format.</p>
   *   - {InvalidClientTokenException} <p>The client token was specified in an invalid format</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultInput
  ): Promise<PutThirdPartyJobFailureResultOutput>;
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultInput,
    cb: (err: any, data?: PutThirdPartyJobFailureResultOutput) => void
  ): void;
  public putThirdPartyJobFailureResult(
    args: PutThirdPartyJobFailureResultInput,
    cb?: (err: any, data?: PutThirdPartyJobFailureResultOutput) => void
  ): Promise<PutThirdPartyJobFailureResultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutThirdPartyJobFailureResultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Represents the success of a third party job as returned to the pipeline by a job worker. Only used for partner actions.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {JobNotFoundException} <p>The specified job was specified in an invalid format or cannot be found.</p>
   *   - {InvalidJobStateException} <p>The specified job state was specified in an invalid format.</p>
   *   - {InvalidClientTokenException} <p>The client token was specified in an invalid format</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultInput
  ): Promise<PutThirdPartyJobSuccessResultOutput>;
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultInput,
    cb: (err: any, data?: PutThirdPartyJobSuccessResultOutput) => void
  ): void;
  public putThirdPartyJobSuccessResult(
    args: PutThirdPartyJobSuccessResultInput,
    cb?: (err: any, data?: PutThirdPartyJobSuccessResultOutput) => void
  ): Promise<PutThirdPartyJobSuccessResultOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutThirdPartyJobSuccessResultCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This URL can be supplied to third party source hosting providers to call every time there's a code change. When CodePipeline receives a POST request on this URL, the pipeline defined in the webhook is started as long as the POST request satisfied the authentication and filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty and DeregisterWebhookWithThirdParty APIs can be used to automatically configure supported third parties to call the generated webhook URL.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {LimitExceededException} <p>The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.</p>
   *   - {InvalidWebhookFilterPatternException} <p>The specified event filter rule is in an invalid format.</p>
   *   - {InvalidWebhookAuthenticationParametersException} <p>The specified authentication type is in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {TooManyTagsException} <p>The tags limit for a resource has been exceeded.</p>
   *   - {InvalidTagsException} <p>The specified resource tags are invalid.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public putWebhook(args: PutWebhookInput): Promise<PutWebhookOutput>;
  public putWebhook(
    args: PutWebhookInput,
    cb: (err: any, data?: PutWebhookOutput) => void
  ): void;
  public putWebhook(
    args: PutWebhookInput,
    cb?: (err: any, data?: PutWebhookOutput) => void
  ): Promise<PutWebhookOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new PutWebhookCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Configures a connection between the webhook that was created and the external tool with events to be detected.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {WebhookNotFoundException} <p>The specified webhook was entered in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyInput
  ): Promise<RegisterWebhookWithThirdPartyOutput>;
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyInput,
    cb: (err: any, data?: RegisterWebhookWithThirdPartyOutput) => void
  ): void;
  public registerWebhookWithThirdParty(
    args: RegisterWebhookWithThirdPartyInput,
    cb?: (err: any, data?: RegisterWebhookWithThirdPartyOutput) => void
  ): Promise<RegisterWebhookWithThirdPartyOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RegisterWebhookWithThirdPartyCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Resumes the pipeline execution by retrying the last failed actions in a stage.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {StageNotFoundException} <p>The specified stage was specified in an invalid format or cannot be found.</p>
   *   - {StageNotRetryableException} <p>The specified stage can't be retried because the pipeline structure or stage state changed after the stage was not completed; the stage contains no failed actions; one or more actions are still in progress; or another retry attempt is already in progress. </p>
   *   - {NotLatestPipelineExecutionException} <p>The stage has failed in a later run of the pipeline and the pipelineExecutionId associated with the request is out of date.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public retryStageExecution(
    args: RetryStageExecutionInput
  ): Promise<RetryStageExecutionOutput>;
  public retryStageExecution(
    args: RetryStageExecutionInput,
    cb: (err: any, data?: RetryStageExecutionOutput) => void
  ): void;
  public retryStageExecution(
    args: RetryStageExecutionInput,
    cb?: (err: any, data?: RetryStageExecutionOutput) => void
  ): Promise<RetryStageExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new RetryStageExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit to the source location specified as part of the pipeline.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {PipelineNotFoundException} <p>The specified pipeline was specified in an invalid format or cannot be found.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public startPipelineExecution(
    args: StartPipelineExecutionInput
  ): Promise<StartPipelineExecutionOutput>;
  public startPipelineExecution(
    args: StartPipelineExecutionInput,
    cb: (err: any, data?: StartPipelineExecutionOutput) => void
  ): void;
  public startPipelineExecution(
    args: StartPipelineExecutionInput,
    cb?: (err: any, data?: StartPipelineExecutionOutput) => void
  ): Promise<StartPipelineExecutionOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new StartPipelineExecutionCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }

  /**
   * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource. </p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was specified in an invalid format.</p>
   *   - {InvalidArnException} <p>The specified resource ARN is invalid.</p>
   *   - {TooManyTagsException} <p>The tags limit for a resource has been exceeded.</p>
   *   - {InvalidTagsException} <p>The specified resource tags are invalid.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
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
   * <p>Removes tags from an AWS resource.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {ResourceNotFoundException} <p>The specified resource was specified in an invalid format.</p>
   *   - {InvalidArnException} <p>The specified resource ARN is invalid.</p>
   *   - {InvalidTagsException} <p>The specified resource tags are invalid.</p>
   *   - {ConcurrentModificationException} <p>Unable to modify the tag due to a simultaneous update request.</p>
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
   * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON file with the pipeline structure in conjunction with <code>UpdatePipeline</code> to provide the full structure of the pipeline. Updating the pipeline increases the version number of the pipeline by 1.</p>
   *
   * This operation may fail with one of the following errors:
   *   - {ValidationException} <p>The validation was specified in an invalid format.</p>
   *   - {InvalidStageDeclarationException} <p>The specified stage declaration was specified in an invalid format.</p>
   *   - {InvalidActionDeclarationException} <p>The specified action declaration was specified in an invalid format.</p>
   *   - {InvalidBlockerDeclarationException} <p>Reserved for future use.</p>
   *   - {InvalidStructureException} <p>The specified structure was specified in an invalid format.</p>
   *   - {LimitExceededException} <p>The number of pipelines associated with the AWS account has exceeded the limit allowed for the account.</p>
   *   - {Error} An error originating from the SDK or customizations rather than the service
   */
  public updatePipeline(
    args: UpdatePipelineInput
  ): Promise<UpdatePipelineOutput>;
  public updatePipeline(
    args: UpdatePipelineInput,
    cb: (err: any, data?: UpdatePipelineOutput) => void
  ): void;
  public updatePipeline(
    args: UpdatePipelineInput,
    cb?: (err: any, data?: UpdatePipelineOutput) => void
  ): Promise<UpdatePipelineOutput> | void {
    // create the appropriate command and pass it to .send
    const command = new UpdatePipelineCommand(args);
    if (typeof cb === "function") {
      this.send(command, cb);
    } else {
      return this.send(command);
    }
  }
}
