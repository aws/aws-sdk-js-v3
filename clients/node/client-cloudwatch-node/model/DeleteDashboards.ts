import { DeleteDashboardsInput } from "./DeleteDashboardsInput";
import { DeleteDashboardsOutput } from "./DeleteDashboardsOutput";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { DashboardNotFoundError } from "./DashboardNotFoundError";
import { InternalServiceFault } from "./InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
