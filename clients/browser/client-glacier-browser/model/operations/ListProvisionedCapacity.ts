import { ListProvisionedCapacityInput } from "../shapes/ListProvisionedCapacityInput";
import { ListProvisionedCapacityOutput } from "../shapes/ListProvisionedCapacityOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListProvisionedCapacity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListProvisionedCapacity",
  http: {
    method: "GET",
    requestUri: "/{accountId}/provisioned-capacity"
  },
  input: {
    shape: ListProvisionedCapacityInput
  },
  output: {
    shape: ListProvisionedCapacityOutput
  },
  errors: [
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
