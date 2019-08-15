import { ListSimulationApplicationsInput } from "../shapes/ListSimulationApplicationsInput";
import { ListSimulationApplicationsOutput } from "../shapes/ListSimulationApplicationsOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalServerException } from "../shapes/InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListSimulationApplications: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSimulationApplications",
  http: {
    method: "POST",
    requestUri: "/listSimulationApplications"
  },
  input: {
    shape: ListSimulationApplicationsInput
  },
  output: {
    shape: ListSimulationApplicationsOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalServerException
    }
  ]
};
