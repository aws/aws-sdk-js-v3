import { ListClusterJobsInput } from "./ListClusterJobsInput";
import { ListClusterJobsOutput } from "./ListClusterJobsOutput";
import { InvalidResourceException } from "./InvalidResourceException";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
