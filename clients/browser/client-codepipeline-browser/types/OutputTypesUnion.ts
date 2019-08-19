import { AcknowledgeJobOutput } from "./AcknowledgeJobOutput";
import { AcknowledgeThirdPartyJobOutput } from "./AcknowledgeThirdPartyJobOutput";
import { CreateCustomActionTypeOutput } from "./CreateCustomActionTypeOutput";
import { CreatePipelineOutput } from "./CreatePipelineOutput";
import { DeleteCustomActionTypeOutput } from "./DeleteCustomActionTypeOutput";
import { DeletePipelineOutput } from "./DeletePipelineOutput";
import { DeleteWebhookOutput } from "./DeleteWebhookOutput";
import { DeregisterWebhookWithThirdPartyOutput } from "./DeregisterWebhookWithThirdPartyOutput";
import { DisableStageTransitionOutput } from "./DisableStageTransitionOutput";
import { EnableStageTransitionOutput } from "./EnableStageTransitionOutput";
import { GetJobDetailsOutput } from "./GetJobDetailsOutput";
import { GetPipelineOutput } from "./GetPipelineOutput";
import { GetPipelineExecutionOutput } from "./GetPipelineExecutionOutput";
import { GetPipelineStateOutput } from "./GetPipelineStateOutput";
import { GetThirdPartyJobDetailsOutput } from "./GetThirdPartyJobDetailsOutput";
import { ListActionExecutionsOutput } from "./ListActionExecutionsOutput";
import { ListActionTypesOutput } from "./ListActionTypesOutput";
import { ListPipelineExecutionsOutput } from "./ListPipelineExecutionsOutput";
import { ListPipelinesOutput } from "./ListPipelinesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { ListWebhooksOutput } from "./ListWebhooksOutput";
import { PollForJobsOutput } from "./PollForJobsOutput";
import { PollForThirdPartyJobsOutput } from "./PollForThirdPartyJobsOutput";
import { PutActionRevisionOutput } from "./PutActionRevisionOutput";
import { PutApprovalResultOutput } from "./PutApprovalResultOutput";
import { PutJobFailureResultOutput } from "./PutJobFailureResultOutput";
import { PutJobSuccessResultOutput } from "./PutJobSuccessResultOutput";
import { PutThirdPartyJobFailureResultOutput } from "./PutThirdPartyJobFailureResultOutput";
import { PutThirdPartyJobSuccessResultOutput } from "./PutThirdPartyJobSuccessResultOutput";
import { PutWebhookOutput } from "./PutWebhookOutput";
import { RegisterWebhookWithThirdPartyOutput } from "./RegisterWebhookWithThirdPartyOutput";
import { RetryStageExecutionOutput } from "./RetryStageExecutionOutput";
import { StartPipelineExecutionOutput } from "./StartPipelineExecutionOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UpdatePipelineOutput } from "./UpdatePipelineOutput";
export type OutputTypesUnion =
  | AcknowledgeJobOutput
  | AcknowledgeThirdPartyJobOutput
  | CreateCustomActionTypeOutput
  | CreatePipelineOutput
  | DeleteCustomActionTypeOutput
  | DeletePipelineOutput
  | DeleteWebhookOutput
  | DeregisterWebhookWithThirdPartyOutput
  | DisableStageTransitionOutput
  | EnableStageTransitionOutput
  | GetJobDetailsOutput
  | GetPipelineOutput
  | GetPipelineExecutionOutput
  | GetPipelineStateOutput
  | GetThirdPartyJobDetailsOutput
  | ListActionExecutionsOutput
  | ListActionTypesOutput
  | ListPipelineExecutionsOutput
  | ListPipelinesOutput
  | ListTagsForResourceOutput
  | ListWebhooksOutput
  | PollForJobsOutput
  | PollForThirdPartyJobsOutput
  | PutActionRevisionOutput
  | PutApprovalResultOutput
  | PutJobFailureResultOutput
  | PutJobSuccessResultOutput
  | PutThirdPartyJobFailureResultOutput
  | PutThirdPartyJobSuccessResultOutput
  | PutWebhookOutput
  | RegisterWebhookWithThirdPartyOutput
  | RetryStageExecutionOutput
  | StartPipelineExecutionOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UpdatePipelineOutput;
