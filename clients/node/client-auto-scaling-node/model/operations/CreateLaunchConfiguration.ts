import { CreateLaunchConfigurationInput } from "../shapes/CreateLaunchConfigurationInput";
import { CreateLaunchConfigurationOutput } from "../shapes/CreateLaunchConfigurationOutput";
import { AlreadyExistsFault } from "../shapes/AlreadyExistsFault";
import { LimitExceededFault } from "../shapes/LimitExceededFault";
import { ResourceContentionFault } from "../shapes/ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateLaunchConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateLaunchConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateLaunchConfigurationInput
  },
  output: {
    shape: CreateLaunchConfigurationOutput
  },
  errors: [
    {
      shape: AlreadyExistsFault
    },
    {
      shape: LimitExceededFault
    },
    {
      shape: ResourceContentionFault
    }
  ]
};
