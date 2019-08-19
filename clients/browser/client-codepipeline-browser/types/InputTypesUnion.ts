import { AcknowledgeJobInput } from "./AcknowledgeJobInput";
import { AcknowledgeThirdPartyJobInput } from "./AcknowledgeThirdPartyJobInput";
import { CreateCustomActionTypeInput } from "./CreateCustomActionTypeInput";
import { CreatePipelineInput } from "./CreatePipelineInput";
import { DeleteCustomActionTypeInput } from "./DeleteCustomActionTypeInput";
import { DeletePipelineInput } from "./DeletePipelineInput";
import { DeleteWebhookInput } from "./DeleteWebhookInput";
import { DeregisterWebhookWithThirdPartyInput } from "./DeregisterWebhookWithThirdPartyInput";
import { DisableStageTransitionInput } from "./DisableStageTransitionInput";
import { EnableStageTransitionInput } from "./EnableStageTransitionInput";
import { GetJobDetailsInput } from "./GetJobDetailsInput";
import { GetPipelineInput } from "./GetPipelineInput";
import { GetPipelineExecutionInput } from "./GetPipelineExecutionInput";
import { GetPipelineStateInput } from "./GetPipelineStateInput";
import { GetThirdPartyJobDetailsInput } from "./GetThirdPartyJobDetailsInput";
import { ListActionExecutionsInput } from "./ListActionExecutionsInput";
import { ListActionTypesInput } from "./ListActionTypesInput";
import { ListPipelineExecutionsInput } from "./ListPipelineExecutionsInput";
import { ListPipelinesInput } from "./ListPipelinesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { ListWebhooksInput } from "./ListWebhooksInput";
import { PollForJobsInput } from "./PollForJobsInput";
import { PollForThirdPartyJobsInput } from "./PollForThirdPartyJobsInput";
import { PutActionRevisionInput } from "./PutActionRevisionInput";
import { PutApprovalResultInput } from "./PutApprovalResultInput";
import { PutJobFailureResultInput } from "./PutJobFailureResultInput";
import { PutJobSuccessResultInput } from "./PutJobSuccessResultInput";
import { PutThirdPartyJobFailureResultInput } from "./PutThirdPartyJobFailureResultInput";
import { PutThirdPartyJobSuccessResultInput } from "./PutThirdPartyJobSuccessResultInput";
import { PutWebhookInput } from "./PutWebhookInput";
import { RegisterWebhookWithThirdPartyInput } from "./RegisterWebhookWithThirdPartyInput";
import { RetryStageExecutionInput } from "./RetryStageExecutionInput";
import { StartPipelineExecutionInput } from "./StartPipelineExecutionInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UpdatePipelineInput } from "./UpdatePipelineInput";
export type InputTypesUnion =
  | AcknowledgeJobInput
  | AcknowledgeThirdPartyJobInput
  | CreateCustomActionTypeInput
  | CreatePipelineInput
  | DeleteCustomActionTypeInput
  | DeletePipelineInput
  | DeleteWebhookInput
  | DeregisterWebhookWithThirdPartyInput
  | DisableStageTransitionInput
  | EnableStageTransitionInput
  | GetJobDetailsInput
  | GetPipelineInput
  | GetPipelineExecutionInput
  | GetPipelineStateInput
  | GetThirdPartyJobDetailsInput
  | ListActionExecutionsInput
  | ListActionTypesInput
  | ListPipelineExecutionsInput
  | ListPipelinesInput
  | ListTagsForResourceInput
  | ListWebhooksInput
  | PollForJobsInput
  | PollForThirdPartyJobsInput
  | PutActionRevisionInput
  | PutApprovalResultInput
  | PutJobFailureResultInput
  | PutJobSuccessResultInput
  | PutThirdPartyJobFailureResultInput
  | PutThirdPartyJobSuccessResultInput
  | PutWebhookInput
  | RegisterWebhookWithThirdPartyInput
  | RetryStageExecutionInput
  | StartPipelineExecutionInput
  | TagResourceInput
  | UntagResourceInput
  | UpdatePipelineInput;
