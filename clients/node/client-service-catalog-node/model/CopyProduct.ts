import { CopyProductInput } from "./CopyProductInput";
import { CopyProductOutput } from "./CopyProductOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParametersException } from "./InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CopyProduct: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CopyProduct",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CopyProductInput
  },
  output: {
    shape: CopyProductOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParametersException
    }
  ]
};
