import { ListDistributionsInput } from "./ListDistributionsInput";
import { ListDistributionsOutput } from "./ListDistributionsOutput";
import { InvalidArgument } from "./InvalidArgument";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListDistributions2019_03_26: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDistributions2019_03_26",
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
