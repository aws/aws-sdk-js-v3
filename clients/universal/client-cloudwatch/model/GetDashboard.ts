import { GetDashboardInput } from "./GetDashboardInput";
import { GetDashboardOutput } from "./GetDashboardOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { DashboardNotFoundError } from "./DashboardNotFoundError";
import { InternalServiceFault } from "./InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDashboard: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDashboard",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDashboardInput
  },
  output: {
    shape: GetDashboardOutput,
    resultWrapper: "GetDashboardResult"
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: DashboardNotFoundError
    },
    {
      shape: InternalServiceFault
    }
  ]
};
