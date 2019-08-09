import { PutDestinationInput } from "./PutDestinationInput";
import { PutDestinationOutput } from "./PutDestinationOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { OperationAbortedException } from "./OperationAbortedException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
