import { ListSecurityConfigurationsInput } from "./ListSecurityConfigurationsInput";
import { ListSecurityConfigurationsOutput } from "./ListSecurityConfigurationsOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSecurityConfigurations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSecurityConfigurations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSecurityConfigurationsInput
  },
  output: {
    shape: ListSecurityConfigurationsOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
