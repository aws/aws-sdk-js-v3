import { GetHealthCheckCountInput } from "../shapes/GetHealthCheckCountInput";
import { GetHealthCheckCountOutput } from "../shapes/GetHealthCheckCountOutput";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetHealthCheckCount: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetHealthCheckCount",
  http: {
    method: "GET",
    requestUri: "/2013-04-01/healthcheckcount"
  },
  input: {
    shape: GetHealthCheckCountInput
  },
  output: {
    shape: GetHealthCheckCountOutput
  },
  errors: []
};
