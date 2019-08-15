import { CreateActivityInput } from "../shapes/CreateActivityInput";
import { CreateActivityOutput } from "../shapes/CreateActivityOutput";
import { ActivityLimitExceeded } from "../shapes/ActivityLimitExceeded";
import { InvalidName } from "../shapes/InvalidName";
import { TooManyTags } from "../shapes/TooManyTags";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateActivity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateActivity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateActivityInput
  },
  output: {
    shape: CreateActivityOutput
  },
  errors: [
    {
      shape: ActivityLimitExceeded
    },
    {
      shape: InvalidName
    },
    {
      shape: TooManyTags
    }
  ]
};
