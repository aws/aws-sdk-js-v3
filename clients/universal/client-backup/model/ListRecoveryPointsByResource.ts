import { ListRecoveryPointsByResourceInput } from "./ListRecoveryPointsByResourceInput";
import { ListRecoveryPointsByResourceOutput } from "./ListRecoveryPointsByResourceOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
