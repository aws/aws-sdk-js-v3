import { StartOnDemandAuditTaskInput } from "../shapes/StartOnDemandAuditTaskInput";
import { StartOnDemandAuditTaskOutput } from "../shapes/StartOnDemandAuditTaskOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartOnDemandAuditTask: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartOnDemandAuditTask",
  http: {
    method: "POST",
    requestUri: "/audit/tasks"
  },
  input: {
    shape: StartOnDemandAuditTaskInput
  },
  output: {
    shape: StartOnDemandAuditTaskOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: ThrottlingException
    },
    {
      shape: InternalFailureException
    },
    {
      shape: LimitExceededException
    }
  ]
};
