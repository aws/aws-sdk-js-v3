import { CreateVPCEConfigurationInput } from "../shapes/CreateVPCEConfigurationInput";
import { CreateVPCEConfigurationOutput } from "../shapes/CreateVPCEConfigurationOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
