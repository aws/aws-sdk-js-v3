import { CreateActivityInput } from "./CreateActivityInput";
import { CreateActivityOutput } from "./CreateActivityOutput";
import { ActivityLimitExceeded } from "./ActivityLimitExceeded";
import { InvalidName } from "./InvalidName";
import { TooManyTags } from "./TooManyTags";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
