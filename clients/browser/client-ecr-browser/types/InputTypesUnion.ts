import { BatchCheckLayerAvailabilityInput } from "./BatchCheckLayerAvailabilityInput";
import { BatchDeleteImageInput } from "./BatchDeleteImageInput";
import { BatchGetImageInput } from "./BatchGetImageInput";
import { CompleteLayerUploadInput } from "./CompleteLayerUploadInput";
import { CreateRepositoryInput } from "./CreateRepositoryInput";
import { DeleteLifecyclePolicyInput } from "./DeleteLifecyclePolicyInput";
import { DeleteRepositoryInput } from "./DeleteRepositoryInput";
import { DeleteRepositoryPolicyInput } from "./DeleteRepositoryPolicyInput";
import { DescribeImagesInput } from "./DescribeImagesInput";
import { DescribeRepositoriesInput } from "./DescribeRepositoriesInput";
import { GetAuthorizationTokenInput } from "./GetAuthorizationTokenInput";
import { GetDownloadUrlForLayerInput } from "./GetDownloadUrlForLayerInput";
import { GetLifecyclePolicyInput } from "./GetLifecyclePolicyInput";
import { GetLifecyclePolicyPreviewInput } from "./GetLifecyclePolicyPreviewInput";
import { GetRepositoryPolicyInput } from "./GetRepositoryPolicyInput";
import { InitiateLayerUploadInput } from "./InitiateLayerUploadInput";
import { ListImagesInput } from "./ListImagesInput";
import { ListTagsForResourceInput } from "./ListTagsForResourceInput";
import { PutImageInput } from "./PutImageInput";
import { PutImageTagMutabilityInput } from "./PutImageTagMutabilityInput";
import { PutLifecyclePolicyInput } from "./PutLifecyclePolicyInput";
import { SetRepositoryPolicyInput } from "./SetRepositoryPolicyInput";
import { StartLifecyclePolicyPreviewInput } from "./StartLifecyclePolicyPreviewInput";
import { TagResourceInput } from "./TagResourceInput";
import { UntagResourceInput } from "./UntagResourceInput";
import { UploadLayerPartInput } from "./UploadLayerPartInput";
export type InputTypesUnion =
  | BatchCheckLayerAvailabilityInput
  | BatchDeleteImageInput
  | BatchGetImageInput
  | CompleteLayerUploadInput
  | CreateRepositoryInput
  | DeleteLifecyclePolicyInput
  | DeleteRepositoryInput
  | DeleteRepositoryPolicyInput
  | DescribeImagesInput
  | DescribeRepositoriesInput
  | GetAuthorizationTokenInput
  | GetDownloadUrlForLayerInput
  | GetLifecyclePolicyInput
  | GetLifecyclePolicyPreviewInput
  | GetRepositoryPolicyInput
  | InitiateLayerUploadInput
  | ListImagesInput
  | ListTagsForResourceInput
  | PutImageInput
  | PutImageTagMutabilityInput
  | PutLifecyclePolicyInput
  | SetRepositoryPolicyInput
  | StartLifecyclePolicyPreviewInput
  | TagResourceInput
  | UntagResourceInput
  | UploadLayerPartInput;
