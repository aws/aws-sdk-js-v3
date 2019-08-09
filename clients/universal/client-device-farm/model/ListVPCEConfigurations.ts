import { ListVPCEConfigurationsInput } from "./ListVPCEConfigurationsInput";
import { ListVPCEConfigurationsOutput } from "./ListVPCEConfigurationsOutput";
import { ArgumentException } from "./ArgumentException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListVPCEConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVPCEConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListVPCEConfigurationsInput
  },
  output: {
    shape: ListVPCEConfigurationsOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
