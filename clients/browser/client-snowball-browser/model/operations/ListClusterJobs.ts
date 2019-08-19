import { ListClusterJobsInput } from "../shapes/ListClusterJobsInput";
import { ListClusterJobsOutput } from "../shapes/ListClusterJobsOutput";
import { InvalidResourceException } from "../shapes/InvalidResourceException";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListClusterJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListClusterJobs",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListClusterJobsInput
  },
  output: {
    shape: ListClusterJobsOutput
  },
  errors: [
    {
      shape: InvalidResourceException
    },
    {
      shape: InvalidNextTokenException
    }
  ]
};
