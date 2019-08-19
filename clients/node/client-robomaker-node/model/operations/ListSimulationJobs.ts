import { ListSimulationJobsInput } from "../shapes/ListSimulationJobsInput";
import { ListSimulationJobsOutput } from "../shapes/ListSimulationJobsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { InternalServerException } from "../shapes/InternalServerException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
