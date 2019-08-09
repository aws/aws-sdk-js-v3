import { BatchCheckLayerAvailabilityOutput } from "./BatchCheckLayerAvailabilityOutput";
import { BatchDeleteImageOutput } from "./BatchDeleteImageOutput";
import { BatchGetImageOutput } from "./BatchGetImageOutput";
import { CompleteLayerUploadOutput } from "./CompleteLayerUploadOutput";
import { CreateRepositoryOutput } from "./CreateRepositoryOutput";
import { DeleteLifecyclePolicyOutput } from "./DeleteLifecyclePolicyOutput";
import { DeleteRepositoryOutput } from "./DeleteRepositoryOutput";
import { DeleteRepositoryPolicyOutput } from "./DeleteRepositoryPolicyOutput";
import { DescribeImagesOutput } from "./DescribeImagesOutput";
import { DescribeRepositoriesOutput } from "./DescribeRepositoriesOutput";
import { GetAuthorizationTokenOutput } from "./GetAuthorizationTokenOutput";
import { GetDownloadUrlForLayerOutput } from "./GetDownloadUrlForLayerOutput";
import { GetLifecyclePolicyOutput } from "./GetLifecyclePolicyOutput";
import { GetLifecyclePolicyPreviewOutput } from "./GetLifecyclePolicyPreviewOutput";
import { GetRepositoryPolicyOutput } from "./GetRepositoryPolicyOutput";
import { InitiateLayerUploadOutput } from "./InitiateLayerUploadOutput";
import { ListImagesOutput } from "./ListImagesOutput";
import { ListTagsForResourceOutput } from "./ListTagsForResourceOutput";
import { PutImageOutput } from "./PutImageOutput";
import { PutImageTagMutabilityOutput } from "./PutImageTagMutabilityOutput";
import { PutLifecyclePolicyOutput } from "./PutLifecyclePolicyOutput";
import { SetRepositoryPolicyOutput } from "./SetRepositoryPolicyOutput";
import { StartLifecyclePolicyPreviewOutput } from "./StartLifecyclePolicyPreviewOutput";
import { TagResourceOutput } from "./TagResourceOutput";
import { UntagResourceOutput } from "./UntagResourceOutput";
import { UploadLayerPartOutput } from "./UploadLayerPartOutput";
export type OutputTypesUnion =
  | BatchCheckLayerAvailabilityOutput
  | BatchDeleteImageOutput
  | BatchGetImageOutput
  | CompleteLayerUploadOutput
  | CreateRepositoryOutput
  | DeleteLifecyclePolicyOutput
  | DeleteRepositoryOutput
  | DeleteRepositoryPolicyOutput
  | DescribeImagesOutput
  | DescribeRepositoriesOutput
  | GetAuthorizationTokenOutput
  | GetDownloadUrlForLayerOutput
  | GetLifecyclePolicyOutput
  | GetLifecyclePolicyPreviewOutput
  | GetRepositoryPolicyOutput
  | InitiateLayerUploadOutput
  | ListImagesOutput
  | ListTagsForResourceOutput
  | PutImageOutput
  | PutImageTagMutabilityOutput
  | PutLifecyclePolicyOutput
  | SetRepositoryPolicyOutput
  | StartLifecyclePolicyPreviewOutput
  | TagResourceOutput
  | UntagResourceOutput
  | UploadLayerPartOutput;
