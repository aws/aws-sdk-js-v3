import { ListSimulationJobsInput } from "./ListSimulationJobsInput";
import { ListSimulationJobsOutput } from "./ListSimulationJobsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { InternalServerException } from "./InternalServerException";
import { ThrottlingException } from "./ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSimulationJobs: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSimulationJobs",
  http: {
    method: "POST",
    requestUri: "/listSimulationJobs"
  },
  input: {
    shape: ListSimulationJobsInput
  },
  output: {
    shape: ListSimulationJobsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: InternalServerException
    },
    {
      shape: ThrottlingException
    }
  ]
};
