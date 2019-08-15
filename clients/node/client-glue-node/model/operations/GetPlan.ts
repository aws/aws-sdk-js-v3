import { GetPlanInput } from "../shapes/GetPlanInput";
import { GetPlanOutput } from "../shapes/GetPlanOutput";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetPlan: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetPlan",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetPlanInput
  },
  output: {
    shape: GetPlanOutput
  },
  errors: [
    {
      shape: InvalidInputException
    },
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
