import { CreateContainerOutput } from "./CreateContainerOutput";
import { DeleteContainerOutput } from "./DeleteContainerOutput";
import { DeleteContainerPolicyOutput } from "./DeleteContainerPolicyOutput";
import { DeleteCorsPolicyOutput } from "./DeleteCorsPolicyOutput";
import { DeleteLifecyclePolicyOutput } from "./DeleteLifecyclePolicyOutput";
import { DescribeContainerOutput } from "./DescribeContainerOutput";
import { GetContainerPolicyOutput } from "./GetContainerPolicyOutput";
import { GetCorsPolicyOutput } from "./GetCorsPolicyOutput";
import { GetLifecyclePolicyOutput } from "./GetLifecyclePolicyOutput";
import { ListContainersOutput } from "./ListContainersOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { PutContainerPolicyOutput } from "./PutContainerPolicyOutput";
import { PutCorsPolicyOutput } from "./PutCorsPolicyOutput";
import { PutLifecyclePolicyOutput } from "./PutLifecyclePolicyOutput";
import { StartAccessLoggingOutput } from "./StartAccessLoggingOutput";
import { StopAccessLoggingOutput } from "./StopAccessLoggingOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
export type OutputTypesUnion =
  | CreateContainerOutput
  | DeleteContainerOutput
  | DeleteContainerPolicyOutput
  | DeleteCorsPolicyOutput
  | DeleteLifecyclePolicyOutput
  | DescribeContainerOutput
  | GetContainerPolicyOutput
  | GetCorsPolicyOutput
  | GetLifecyclePolicyOutput
  | ListContainersOutput
  | ListTagsForResourceOutput
  | PutContainerPolicyOutput
  | PutCorsPolicyOutput
  | PutLifecyclePolicyOutput
  | StartAccessLoggingOutput
  | StopAccessLoggingOutput
  | TagResourceOutput
  | UntagResourceOutput;
