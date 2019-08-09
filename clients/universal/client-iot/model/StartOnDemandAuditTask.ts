import { StartOnDemandAuditTaskInput } from "./StartOnDemandAuditTaskInput";
import { StartOnDemandAuditTaskOutput } from "./StartOnDemandAuditTaskOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
