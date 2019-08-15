import { DeleteDashboardsInput } from "../shapes/DeleteDashboardsInput";
import { DeleteDashboardsOutput } from "../shapes/DeleteDashboardsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { DashboardNotFoundError } from "../shapes/DashboardNotFoundError";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDashboards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDashboards",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDashboardsInput
  },
  output: {
    shape: DeleteDashboardsOutput,
    resultWrapper: "DeleteDashboardsResult"
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
