import { GetPlanInput } from "./GetPlanInput";
import { GetPlanOutput } from "./GetPlanOutput";
import { InvalidInputException } from "./InvalidInputException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
