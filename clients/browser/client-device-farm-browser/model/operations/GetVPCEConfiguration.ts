import { GetVPCEConfigurationInput } from "../shapes/GetVPCEConfigurationInput";
import { GetVPCEConfigurationOutput } from "../shapes/GetVPCEConfigurationOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
