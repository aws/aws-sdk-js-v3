import { CreateLaunchConfigurationInput } from "./CreateLaunchConfigurationInput";
import { CreateLaunchConfigurationOutput } from "./CreateLaunchConfigurationOutput";
import { AlreadyExistsFault } from "./AlreadyExistsFault";
import { LimitExceededFault } from "./LimitExceededFault";
import { ResourceContentionFault } from "./ResourceContentionFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
