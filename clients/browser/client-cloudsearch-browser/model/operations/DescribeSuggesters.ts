import { DescribeSuggestersInput } from "../shapes/DescribeSuggestersInput";
import { DescribeSuggestersOutput } from "../shapes/DescribeSuggestersOutput";
import { BaseException } from "../shapes/BaseException";
import { InternalException } from "../shapes/InternalException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeSuggesters: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSuggesters",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DescribeSuggestersInput
  },
  output: {
    shape: DescribeSuggestersOutput,
    resultWrapper: "DescribeSuggestersResult"
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
