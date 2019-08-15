import { ListDashboardsInput } from "../shapes/ListDashboardsInput";
import { ListDashboardsOutput } from "../shapes/ListDashboardsOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDashboards: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDashboards",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDashboardsInput
  },
  output: {
    shape: ListDashboardsOutput,
    resultWrapper: "ListDashboardsResult"
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: InternalServiceFault
    }
  ]
};
