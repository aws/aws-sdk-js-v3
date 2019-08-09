import { BuildSuggestersInput } from "./BuildSuggestersInput";
import { BuildSuggestersOutput } from "./BuildSuggestersOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
