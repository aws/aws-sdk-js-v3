import { CreateVPCEConfigurationInput } from "./CreateVPCEConfigurationInput";
import { CreateVPCEConfigurationOutput } from "./CreateVPCEConfigurationOutput";
import { ArgumentException } from "./ArgumentException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateVPCEConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateVPCEConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateVPCEConfigurationInput
  },
  output: {
    shape: CreateVPCEConfigurationOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
