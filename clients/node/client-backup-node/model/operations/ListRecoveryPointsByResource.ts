import { ListRecoveryPointsByResourceInput } from "../shapes/ListRecoveryPointsByResourceInput";
import { ListRecoveryPointsByResourceOutput } from "../shapes/ListRecoveryPointsByResourceOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListRecoveryPointsByResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListRecoveryPointsByResource",
  http: {
    method: "GET",
    requestUri: "/resources/{resourceArn}/recovery-points/"
  },
  input: {
    shape: ListRecoveryPointsByResourceInput
  },
  output: {
    shape: ListRecoveryPointsByResourceOutput
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
