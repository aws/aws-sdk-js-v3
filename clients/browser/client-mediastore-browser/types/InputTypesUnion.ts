import { CreateContainerInput } from "./CreateContainerInput";
import { DeleteContainerInput } from "./DeleteContainerInput";
import { DeleteContainerPolicyInput } from "./DeleteContainerPolicyInput";
import { DeleteCorsPolicyInput } from "./DeleteCorsPolicyInput";
import { DeleteLifecyclePolicyInput } from "./DeleteLifecyclePolicyInput";
import { DescribeContainerInput } from "./DescribeContainerInput";
import { GetContainerPolicyInput } from "./GetContainerPolicyInput";
import { GetCorsPolicyInput } from "./GetCorsPolicyInput";
import { GetLifecyclePolicyInput } from "./GetLifecyclePolicyInput";
import { ListContainersInput } from "./ListContainersInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutContainerPolicyInput } from "./PutContainerPolicyInput";
import { PutCorsPolicyInput } from "./PutCorsPolicyInput";
import { PutLifecyclePolicyInput } from "./PutLifecyclePolicyInput";
import { StartAccessLoggingInput } from "./StartAccessLoggingInput";
import { StopAccessLoggingInput } from "./StopAccessLoggingInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
export type InputTypesUnion =
  | CreateContainerInput
  | DeleteContainerInput
  | DeleteContainerPolicyInput
  | DeleteCorsPolicyInput
  | DeleteLifecyclePolicyInput
  | DescribeContainerInput
  | GetContainerPolicyInput
  | GetCorsPolicyInput
  | GetLifecyclePolicyInput
  | ListContainersInput
  | ListTagsForResourceInput
  | PutContainerPolicyInput
  | PutCorsPolicyInput
  | PutLifecyclePolicyInput
  | StartAccessLoggingInput
  | StopAccessLoggingInput
  | TagResourceInput
  | UntagResourceInput;
