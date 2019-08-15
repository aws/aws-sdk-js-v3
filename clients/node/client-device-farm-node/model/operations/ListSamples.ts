import { ListSamplesInput } from "../shapes/ListSamplesInput";
import { ListSamplesOutput } from "../shapes/ListSamplesOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSamples: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSamples",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSamplesInput
  },
  output: {
    shape: ListSamplesOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
