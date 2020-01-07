import { CodePipelineClient } from "./CodePipelineClient";
import { AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput } from "./commands/AcknowledgeJobCommand";
import { AcknowledgeThirdPartyJobCommandInput, AcknowledgeThirdPartyJobCommandOutput } from "./commands/AcknowledgeThirdPartyJobCommand";
import { CreateCustomActionTypeCommandInput, CreateCustomActionTypeCommandOutput } from "./commands/CreateCustomActionTypeCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { DeleteCustomActionTypeCommandInput, DeleteCustomActionTypeCommandOutput } from "./commands/DeleteCustomActionTypeCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "./commands/DeleteWebhookCommand";
import { DeregisterWebhookWithThirdPartyCommandInput, DeregisterWebhookWithThirdPartyCommandOutput } from "./commands/DeregisterWebhookWithThirdPartyCommand";
import { DisableStageTransitionCommandInput, DisableStageTransitionCommandOutput } from "./commands/DisableStageTransitionCommand";
import { EnableStageTransitionCommandInput, EnableStageTransitionCommandOutput } from "./commands/EnableStageTransitionCommand";
import { GetJobDetailsCommandInput, GetJobDetailsCommandOutput } from "./commands/GetJobDetailsCommand";
import { GetPipelineCommandInput, GetPipelineCommandOutput } from "./commands/GetPipelineCommand";
import { GetPipelineExecutionCommandInput, GetPipelineExecutionCommandOutput } from "./commands/GetPipelineExecutionCommand";
import { GetPipelineStateCommandInput, GetPipelineStateCommandOutput } from "./commands/GetPipelineStateCommand";
import { GetThirdPartyJobDetailsCommandInput, GetThirdPartyJobDetailsCommandOutput } from "./commands/GetThirdPartyJobDetailsCommand";
import { ListActionExecutionsCommandInput, ListActionExecutionsCommandOutput } from "./commands/ListActionExecutionsCommand";
import { ListActionTypesCommandInput, ListActionTypesCommandOutput } from "./commands/ListActionTypesCommand";
import { ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput } from "./commands/ListPipelineExecutionsCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWebhooksCommandInput, ListWebhooksCommandOutput } from "./commands/ListWebhooksCommand";
import { PollForJobsCommandInput, PollForJobsCommandOutput } from "./commands/PollForJobsCommand";
import { PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput } from "./commands/PollForThirdPartyJobsCommand";
import { PutActionRevisionCommandInput, PutActionRevisionCommandOutput } from "./commands/PutActionRevisionCommand";
import { PutApprovalResultCommandInput, PutApprovalResultCommandOutput } from "./commands/PutApprovalResultCommand";
import { PutJobFailureResultCommandInput, PutJobFailureResultCommandOutput } from "./commands/PutJobFailureResultCommand";
import { PutJobSuccessResultCommandInput, PutJobSuccessResultCommandOutput } from "./commands/PutJobSuccessResultCommand";
import { PutThirdPartyJobFailureResultCommandInput, PutThirdPartyJobFailureResultCommandOutput } from "./commands/PutThirdPartyJobFailureResultCommand";
import { PutThirdPartyJobSuccessResultCommandInput, PutThirdPartyJobSuccessResultCommandOutput } from "./commands/PutThirdPartyJobSuccessResultCommand";
import { PutWebhookCommandInput, PutWebhookCommandOutput } from "./commands/PutWebhookCommand";
import { RegisterWebhookWithThirdPartyCommandInput, RegisterWebhookWithThirdPartyCommandOutput } from "./commands/RegisterWebhookWithThirdPartyCommand";
import { RetryStageExecutionCommandInput, RetryStageExecutionCommandOutput } from "./commands/RetryStageExecutionCommand";
import { StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput } from "./commands/StartPipelineExecutionCommand";
import { StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput } from "./commands/StopPipelineExecutionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class CodePipeline extends CodePipelineClient {
    /**
     * <p>Returns information about a specified job and whether that job has been received by
     *             the job worker. Used for custom actions only.</p>
     */
    acknowledgeJob(args: AcknowledgeJobCommandInput, options?: __HttpHandlerOptions): Promise<AcknowledgeJobCommandOutput>;
    acknowledgeJob(args: AcknowledgeJobCommandInput, cb: (err: any, data?: AcknowledgeJobCommandOutput) => void): void;
    acknowledgeJob(args: AcknowledgeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcknowledgeJobCommandOutput) => void): void;
    /**
     * <p>Confirms a job worker has received the specified job. Used for partner actions
     *             only.</p>
     */
    acknowledgeThirdPartyJob(args: AcknowledgeThirdPartyJobCommandInput, options?: __HttpHandlerOptions): Promise<AcknowledgeThirdPartyJobCommandOutput>;
    acknowledgeThirdPartyJob(args: AcknowledgeThirdPartyJobCommandInput, cb: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void): void;
    acknowledgeThirdPartyJob(args: AcknowledgeThirdPartyJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AcknowledgeThirdPartyJobCommandOutput) => void): void;
    /**
     * <p>Creates a new custom action that can be used in all pipelines associated with the
     *             AWS account. Only used for custom actions.</p>
     */
    createCustomActionType(args: CreateCustomActionTypeCommandInput, options?: __HttpHandlerOptions): Promise<CreateCustomActionTypeCommandOutput>;
    createCustomActionType(args: CreateCustomActionTypeCommandInput, cb: (err: any, data?: CreateCustomActionTypeCommandOutput) => void): void;
    createCustomActionType(args: CreateCustomActionTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCustomActionTypeCommandOutput) => void): void;
    /**
     * <p>Creates a pipeline.</p>
     *         <note>
     *             <p>In the pipeline structure, you must include either <code>artifactStore</code>
     *                 or <code>artifactStores</code> in your pipeline, but you cannot use both. If you
     *                 create a cross-region action in your pipeline, you must use
     *                     <code>artifactStores</code>.</p>
     *         </note>
     */
    createPipeline(args: CreatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<CreatePipelineCommandOutput>;
    createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    createPipeline(args: CreatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
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
    deleteCustomActionType(args: DeleteCustomActionTypeCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCustomActionTypeCommandOutput>;
    deleteCustomActionType(args: DeleteCustomActionTypeCommandInput, cb: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void): void;
    deleteCustomActionType(args: DeleteCustomActionTypeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCustomActionTypeCommandOutput) => void): void;
    /**
     * <p>Deletes the specified pipeline.</p>
     */
    deletePipeline(args: DeletePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeletePipelineCommandOutput>;
    deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    deletePipeline(args: DeletePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    /**
     * <p>Deletes a previously created webhook by name. Deleting the webhook stops AWS
     *             CodePipeline from starting a pipeline every time an external event occurs. The API
     *             returns successfully when trying to delete a webhook that is already deleted. If a
     *             deleted webhook is re-created by calling PutWebhook with the same name, it will have a
     *             different URL.</p>
     */
    deleteWebhook(args: DeleteWebhookCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWebhookCommandOutput>;
    deleteWebhook(args: DeleteWebhookCommandInput, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
    deleteWebhook(args: DeleteWebhookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWebhookCommandOutput) => void): void;
    /**
     * <p>Removes the connection between the webhook that was created by CodePipeline and the
     *             external tool with events to be detected. Currently supported only for webhooks that
     *             target an action type of GitHub.</p>
     */
    deregisterWebhookWithThirdParty(args: DeregisterWebhookWithThirdPartyCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterWebhookWithThirdPartyCommandOutput>;
    deregisterWebhookWithThirdParty(args: DeregisterWebhookWithThirdPartyCommandInput, cb: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void): void;
    deregisterWebhookWithThirdParty(args: DeregisterWebhookWithThirdPartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterWebhookWithThirdPartyCommandOutput) => void): void;
    /**
     * <p>Prevents artifacts in a pipeline from transitioning to the next stage in the
     *             pipeline.</p>
     */
    disableStageTransition(args: DisableStageTransitionCommandInput, options?: __HttpHandlerOptions): Promise<DisableStageTransitionCommandOutput>;
    disableStageTransition(args: DisableStageTransitionCommandInput, cb: (err: any, data?: DisableStageTransitionCommandOutput) => void): void;
    disableStageTransition(args: DisableStageTransitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableStageTransitionCommandOutput) => void): void;
    /**
     * <p>Enables artifacts in a pipeline to transition to a stage in a pipeline.</p>
     */
    enableStageTransition(args: EnableStageTransitionCommandInput, options?: __HttpHandlerOptions): Promise<EnableStageTransitionCommandOutput>;
    enableStageTransition(args: EnableStageTransitionCommandInput, cb: (err: any, data?: EnableStageTransitionCommandOutput) => void): void;
    enableStageTransition(args: EnableStageTransitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableStageTransitionCommandOutput) => void): void;
    /**
     * <p>Returns information about a job. Used for custom actions only.</p>
     *         <important>
     *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
     *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
     *                 that S3 bucket for input or output artifacts. This API also returns any secret
     *                 values defined for the action.</p>
     *         </important>
     */
    getJobDetails(args: GetJobDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetJobDetailsCommandOutput>;
    getJobDetails(args: GetJobDetailsCommandInput, cb: (err: any, data?: GetJobDetailsCommandOutput) => void): void;
    getJobDetails(args: GetJobDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetJobDetailsCommandOutput) => void): void;
    /**
     * <p>Returns the metadata, structure, stages, and actions of a pipeline. Can be used to
     *             return the entire structure of a pipeline in JSON format, which can then be modified and
     *             used to update the pipeline structure with <a>UpdatePipeline</a>.</p>
     */
    getPipeline(args: GetPipelineCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineCommandOutput>;
    getPipeline(args: GetPipelineCommandInput, cb: (err: any, data?: GetPipelineCommandOutput) => void): void;
    getPipeline(args: GetPipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPipelineCommandOutput) => void): void;
    /**
     * <p>Returns information about an execution of a pipeline, including details about
     *             artifacts, the pipeline execution ID, and the name, version, and status of the
     *             pipeline.</p>
     */
    getPipelineExecution(args: GetPipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineExecutionCommandOutput>;
    getPipelineExecution(args: GetPipelineExecutionCommandInput, cb: (err: any, data?: GetPipelineExecutionCommandOutput) => void): void;
    getPipelineExecution(args: GetPipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPipelineExecutionCommandOutput) => void): void;
    /**
     * <p>Returns information about the state of a pipeline, including the stages and
     *             actions.</p>
     *         <note>
     *             <p>Values returned in the <code>revisionId</code> and <code>revisionUrl</code>
     *                 fields indicate the source revision information, such as the commit ID, for the
     *                 current state.</p>
     *         </note>
     */
    getPipelineState(args: GetPipelineStateCommandInput, options?: __HttpHandlerOptions): Promise<GetPipelineStateCommandOutput>;
    getPipelineState(args: GetPipelineStateCommandInput, cb: (err: any, data?: GetPipelineStateCommandOutput) => void): void;
    getPipelineState(args: GetPipelineStateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPipelineStateCommandOutput) => void): void;
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
    getThirdPartyJobDetails(args: GetThirdPartyJobDetailsCommandInput, options?: __HttpHandlerOptions): Promise<GetThirdPartyJobDetailsCommandOutput>;
    getThirdPartyJobDetails(args: GetThirdPartyJobDetailsCommandInput, cb: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void): void;
    getThirdPartyJobDetails(args: GetThirdPartyJobDetailsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetThirdPartyJobDetailsCommandOutput) => void): void;
    /**
     * <p>Lists the action executions that have occurred in a pipeline.</p>
     */
    listActionExecutions(args: ListActionExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionExecutionsCommandOutput>;
    listActionExecutions(args: ListActionExecutionsCommandInput, cb: (err: any, data?: ListActionExecutionsCommandOutput) => void): void;
    listActionExecutions(args: ListActionExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActionExecutionsCommandOutput) => void): void;
    /**
     * <p>Gets a summary of all AWS CodePipeline action types associated with your
     *             account.</p>
     */
    listActionTypes(args: ListActionTypesCommandInput, options?: __HttpHandlerOptions): Promise<ListActionTypesCommandOutput>;
    listActionTypes(args: ListActionTypesCommandInput, cb: (err: any, data?: ListActionTypesCommandOutput) => void): void;
    listActionTypes(args: ListActionTypesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActionTypesCommandOutput) => void): void;
    /**
     * <p>Gets a summary of the most recent executions for a pipeline.</p>
     */
    listPipelineExecutions(args: ListPipelineExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelineExecutionsCommandOutput>;
    listPipelineExecutions(args: ListPipelineExecutionsCommandInput, cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void): void;
    listPipelineExecutions(args: ListPipelineExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void): void;
    /**
     * <p>Gets a summary of all of the pipelines associated with your account.</p>
     */
    listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
    listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    listPipelines(args: ListPipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    /**
     * <p>Gets the set of key-value pairs (metadata) that are used to manage the
     *             resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Gets a listing of all the webhooks in this AWS Region for this account. The output
     *             lists all webhooks and includes the webhook URL and ARN and the configuration for each
     *             webhook.</p>
     */
    listWebhooks(args: ListWebhooksCommandInput, options?: __HttpHandlerOptions): Promise<ListWebhooksCommandOutput>;
    listWebhooks(args: ListWebhooksCommandInput, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
    listWebhooks(args: ListWebhooksCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWebhooksCommandOutput) => void): void;
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
    pollForJobs(args: PollForJobsCommandInput, options?: __HttpHandlerOptions): Promise<PollForJobsCommandOutput>;
    pollForJobs(args: PollForJobsCommandInput, cb: (err: any, data?: PollForJobsCommandOutput) => void): void;
    pollForJobs(args: PollForJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PollForJobsCommandOutput) => void): void;
    /**
     * <p>Determines whether there are any third party jobs for a job worker to act on. Used
     *             for partner actions only.</p>
     *         <important>
     *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
     *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
     *                 that S3 bucket for input or output artifacts.</p>
     *         </important>
     */
    pollForThirdPartyJobs(args: PollForThirdPartyJobsCommandInput, options?: __HttpHandlerOptions): Promise<PollForThirdPartyJobsCommandOutput>;
    pollForThirdPartyJobs(args: PollForThirdPartyJobsCommandInput, cb: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void): void;
    pollForThirdPartyJobs(args: PollForThirdPartyJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PollForThirdPartyJobsCommandOutput) => void): void;
    /**
     * <p>Provides information to AWS CodePipeline about new revisions to a source.</p>
     */
    putActionRevision(args: PutActionRevisionCommandInput, options?: __HttpHandlerOptions): Promise<PutActionRevisionCommandOutput>;
    putActionRevision(args: PutActionRevisionCommandInput, cb: (err: any, data?: PutActionRevisionCommandOutput) => void): void;
    putActionRevision(args: PutActionRevisionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutActionRevisionCommandOutput) => void): void;
    /**
     * <p>Provides the response to a manual approval request to AWS CodePipeline. Valid
     *             responses include Approved and Rejected.</p>
     */
    putApprovalResult(args: PutApprovalResultCommandInput, options?: __HttpHandlerOptions): Promise<PutApprovalResultCommandOutput>;
    putApprovalResult(args: PutApprovalResultCommandInput, cb: (err: any, data?: PutApprovalResultCommandOutput) => void): void;
    putApprovalResult(args: PutApprovalResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutApprovalResultCommandOutput) => void): void;
    /**
     * <p>Represents the failure of a job as returned to the pipeline by a job worker. Used
     *             for custom actions only.</p>
     */
    putJobFailureResult(args: PutJobFailureResultCommandInput, options?: __HttpHandlerOptions): Promise<PutJobFailureResultCommandOutput>;
    putJobFailureResult(args: PutJobFailureResultCommandInput, cb: (err: any, data?: PutJobFailureResultCommandOutput) => void): void;
    putJobFailureResult(args: PutJobFailureResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutJobFailureResultCommandOutput) => void): void;
    /**
     * <p>Represents the success of a job as returned to the pipeline by a job worker. Used
     *             for custom actions only.</p>
     */
    putJobSuccessResult(args: PutJobSuccessResultCommandInput, options?: __HttpHandlerOptions): Promise<PutJobSuccessResultCommandOutput>;
    putJobSuccessResult(args: PutJobSuccessResultCommandInput, cb: (err: any, data?: PutJobSuccessResultCommandOutput) => void): void;
    putJobSuccessResult(args: PutJobSuccessResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutJobSuccessResultCommandOutput) => void): void;
    /**
     * <p>Represents the failure of a third party job as returned to the pipeline by a job
     *             worker. Used for partner actions only.</p>
     */
    putThirdPartyJobFailureResult(args: PutThirdPartyJobFailureResultCommandInput, options?: __HttpHandlerOptions): Promise<PutThirdPartyJobFailureResultCommandOutput>;
    putThirdPartyJobFailureResult(args: PutThirdPartyJobFailureResultCommandInput, cb: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void): void;
    putThirdPartyJobFailureResult(args: PutThirdPartyJobFailureResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutThirdPartyJobFailureResultCommandOutput) => void): void;
    /**
     * <p>Represents the success of a third party job as returned to the pipeline by a job
     *             worker. Used for partner actions only.</p>
     */
    putThirdPartyJobSuccessResult(args: PutThirdPartyJobSuccessResultCommandInput, options?: __HttpHandlerOptions): Promise<PutThirdPartyJobSuccessResultCommandOutput>;
    putThirdPartyJobSuccessResult(args: PutThirdPartyJobSuccessResultCommandInput, cb: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void): void;
    putThirdPartyJobSuccessResult(args: PutThirdPartyJobSuccessResultCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutThirdPartyJobSuccessResultCommandOutput) => void): void;
    /**
     * <p>Defines a webhook and returns a unique webhook URL generated by CodePipeline. This
     *             URL can be supplied to third party source hosting providers to call every time there's a
     *             code change. When CodePipeline receives a POST request on this URL, the pipeline defined
     *             in the webhook is started as long as the POST request satisfied the authentication and
     *             filtering requirements supplied when defining the webhook. RegisterWebhookWithThirdParty
     *             and DeregisterWebhookWithThirdParty APIs can be used to automatically configure
     *             supported third parties to call the generated webhook URL.</p>
     */
    putWebhook(args: PutWebhookCommandInput, options?: __HttpHandlerOptions): Promise<PutWebhookCommandOutput>;
    putWebhook(args: PutWebhookCommandInput, cb: (err: any, data?: PutWebhookCommandOutput) => void): void;
    putWebhook(args: PutWebhookCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutWebhookCommandOutput) => void): void;
    /**
     * <p>Configures a connection between the webhook that was created and the external tool
     *             with events to be detected.</p>
     */
    registerWebhookWithThirdParty(args: RegisterWebhookWithThirdPartyCommandInput, options?: __HttpHandlerOptions): Promise<RegisterWebhookWithThirdPartyCommandOutput>;
    registerWebhookWithThirdParty(args: RegisterWebhookWithThirdPartyCommandInput, cb: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void): void;
    registerWebhookWithThirdParty(args: RegisterWebhookWithThirdPartyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterWebhookWithThirdPartyCommandOutput) => void): void;
    /**
     * <p>Resumes the pipeline execution by retrying the last failed actions in a stage. You
     *             can retry a stage immediately if any of the actions in the stage fail. When you retry,
     *             all actions that are still in progress continue working, and failed actions are
     *             triggered again.</p>
     */
    retryStageExecution(args: RetryStageExecutionCommandInput, options?: __HttpHandlerOptions): Promise<RetryStageExecutionCommandOutput>;
    retryStageExecution(args: RetryStageExecutionCommandInput, cb: (err: any, data?: RetryStageExecutionCommandOutput) => void): void;
    retryStageExecution(args: RetryStageExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RetryStageExecutionCommandOutput) => void): void;
    /**
     * <p>Starts the specified pipeline. Specifically, it begins processing the latest commit
     *             to the source location specified as part of the pipeline.</p>
     */
    startPipelineExecution(args: StartPipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartPipelineExecutionCommandOutput>;
    startPipelineExecution(args: StartPipelineExecutionCommandInput, cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void): void;
    startPipelineExecution(args: StartPipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void): void;
    /**
     * <p>Stops the specified pipeline execution. You choose to either stop the pipeline
     *             execution by completing in-progress actions without starting subsequent actions, or by
     *             abandoning in-progress actions. While completing or abandoning in-progress actions, the
     *             pipeline execution is in a <code>Stopping</code> state. After all in-progress actions
     *             are completed or abandoned, the pipeline execution is in a <code>Stopped</code>
     *             state.</p>
     */
    stopPipelineExecution(args: StopPipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StopPipelineExecutionCommandOutput>;
    stopPipelineExecution(args: StopPipelineExecutionCommandInput, cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void): void;
    stopPipelineExecution(args: StopPipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void): void;
    /**
     * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used
     *             to manage a resource. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from an AWS resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a specified pipeline with edits or changes to its structure. Use a JSON
     *             file with the pipeline structure and <code>UpdatePipeline</code> to provide the full
     *             structure of the pipeline. Updating the pipeline increases the version number of the
     *             pipeline by 1.</p>
     */
    updatePipeline(args: UpdatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineCommandOutput>;
    updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
    updatePipeline(args: UpdatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
}
