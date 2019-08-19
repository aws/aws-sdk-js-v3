import { ListVaultsInput } from "../shapes/ListVaultsInput";
import { ListVaultsOutput } from "../shapes/ListVaultsOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListVaults: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListVaults",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults"
  },
  input: {
    shape: ListVaultsInput
  },
  output: {
    shape: ListVaultsOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
