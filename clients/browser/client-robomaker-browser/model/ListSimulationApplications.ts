import { ListSimulationApplicationsInput } from "./ListSimulationApplicationsInput";
import { ListSimulationApplicationsOutput } from "./ListSimulationApplicationsOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalServerException } from "./InternalServerException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
