import { BuildSuggestersInput } from "../shapes/BuildSuggestersInput";
import { BuildSuggestersOutput } from "../shapes/BuildSuggestersOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BuildSuggesters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BuildSuggesters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: BuildSuggestersInput
  },
  output: {
    shape: BuildSuggestersOutput,
    resultWrapper: "BuildSuggestersResult"
  },
  errors: [
    {
      shape: BaseException
    },
    {
      shape: InternalException
    },
    {
      shape: ResourceNotFoundException
    }
  ]
};
