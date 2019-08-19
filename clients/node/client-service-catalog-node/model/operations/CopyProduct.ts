import { CopyProductInput } from "../shapes/CopyProductInput";
import { CopyProductOutput } from "../shapes/CopyProductOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParametersException } from "../shapes/InvalidParametersException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
