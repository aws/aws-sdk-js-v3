import { PutDestinationInput } from "../shapes/PutDestinationInput";
import { PutDestinationOutput } from "../shapes/PutDestinationOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OperationAbortedException } from "../shapes/OperationAbortedException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutDestination: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDestination",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutDestinationInput
  },
  output: {
    shape: PutDestinationOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: OperationAbortedException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
