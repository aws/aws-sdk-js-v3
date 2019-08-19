import { PutDashboardInput } from "../shapes/PutDashboardInput";
import { PutDashboardOutput } from "../shapes/PutDashboardOutput";
import { DashboardInvalidInputError } from "../shapes/DashboardInvalidInputError";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutDashboard: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDashboard",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutDashboardInput
  },
  output: {
    shape: PutDashboardOutput,
    resultWrapper: "PutDashboardResult"
  },
  errors: [
    {
      shape: DashboardInvalidInputError
    },
    {
      shape: InternalServiceFault
    }
  ]
};
