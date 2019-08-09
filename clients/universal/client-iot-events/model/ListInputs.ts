import { ListInputsInput } from "./ListInputsInput";
import { ListInputsOutput } from "./ListInputsOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
