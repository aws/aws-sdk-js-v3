import { GetVPCEConfigurationInput } from "./GetVPCEConfigurationInput";
import { GetVPCEConfigurationOutput } from "./GetVPCEConfigurationOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVPCEConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVPCEConfiguration",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetVPCEConfigurationInput
  },
  output: {
    shape: GetVPCEConfigurationOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
