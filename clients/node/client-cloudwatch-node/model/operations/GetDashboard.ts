import { GetDashboardInput } from "../shapes/GetDashboardInput";
import { GetDashboardOutput } from "../shapes/GetDashboardOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { DashboardNotFoundError } from "../shapes/DashboardNotFoundError";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
