import { ListInputsInput } from "../shapes/ListInputsInput";
import { ListInputsOutput } from "../shapes/ListInputsOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListInputs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListInputs",
  http: {
    method: "GET",
    requestUri: "/inputs"
  },
  input: {
    shape: ListInputsInput
  },
  output: {
    shape: ListInputsOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
