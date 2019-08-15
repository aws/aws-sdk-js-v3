import { ListAuditTasksInput } from "../shapes/ListAuditTasksInput";
import { ListAuditTasksOutput } from "../shapes/ListAuditTasksOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ThrottlingException } from "../shapes/ThrottlingException";
import { InternalFailureException } from "../shapes/InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListAuditTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAuditTasks",
  http: {
    method: "GET",
    requestUri: "/audit/tasks"
  },
  input: {
    shape: ListAuditTasksInput
  },
  output: {
    shape: ListAuditTasksOutput
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
    }
  ]
};
