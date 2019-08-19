import { ListDistributionsInput } from "../shapes/ListDistributionsInput";
import { ListDistributionsOutput } from "../shapes/ListDistributionsOutput";
import { InvalidArgument } from "../shapes/InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDistributions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDistributions",
  http: {
    method: "GET",
    requestUri: "/2019-03-26/distribution"
  },
  input: {
    shape: ListDistributionsInput
  },
  output: {
    shape: ListDistributionsOutput
  },
  errors: [
    {
      shape: InvalidArgument
    }
  ]
};
