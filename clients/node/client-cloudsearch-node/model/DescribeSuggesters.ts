import { DescribeSuggestersInput } from "./DescribeSuggestersInput";
import { DescribeSuggestersOutput } from "./DescribeSuggestersOutput";
import { BaseException } from "./BaseException";
import { InternalException } from "./InternalException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
