import { ListSamplesInput } from "./ListSamplesInput";
import { ListSamplesOutput } from "./ListSamplesOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
