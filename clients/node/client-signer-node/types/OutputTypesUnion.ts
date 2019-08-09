import { CancelSigningProfileOutput } from "./CancelSigningProfileOutput";
import { DescribeSigningJobOutput } from "./DescribeSigningJobOutput";
import { GetSigningPlatformOutput } from "./GetSigningPlatformOutput";
import { GetSigningProfileOutput } from "./GetSigningProfileOutput";
import { ListSigningJobsOutput } from "./ListSigningJobsOutput";
import { ListSigningPlatformsOutput } from "./ListSigningPlatformsOutput";
import { ListSigningProfilesOutput } from "./ListSigningProfilesOutput";
import { PutSigningProfileOutput } from "./PutSigningProfileOutput";
import { StartSigningJobOutput } from "./StartSigningJobOutput";
export type OutputTypesUnion =
  | CancelSigningProfileOutput
  | DescribeSigningJobOutput
  | GetSigningPlatformOutput
  | GetSigningProfileOutput
  | ListSigningJobsOutput
  | ListSigningPlatformsOutput
  | ListSigningProfilesOutput
  | PutSigningProfileOutput
  | StartSigningJobOutput;
