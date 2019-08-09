import { CancelSigningProfileInput } from "./CancelSigningProfileInput";
import { DescribeSigningJobInput } from "./DescribeSigningJobInput";
import { GetSigningPlatformInput } from "./GetSigningPlatformInput";
import { GetSigningProfileInput } from "./GetSigningProfileInput";
import { ListSigningJobsInput } from "./ListSigningJobsInput";
import { ListSigningPlatformsInput } from "./ListSigningPlatformsInput";
import { ListSigningProfilesInput } from "./ListSigningProfilesInput";
import { PutSigningProfileInput } from "./PutSigningProfileInput";
import { StartSigningJobInput } from "./StartSigningJobInput";
export type InputTypesUnion =
  | CancelSigningProfileInput
  | DescribeSigningJobInput
  | GetSigningPlatformInput
  | GetSigningProfileInput
  | ListSigningJobsInput
  | ListSigningPlatformsInput
  | ListSigningProfilesInput
  | PutSigningProfileInput
  | StartSigningJobInput;
