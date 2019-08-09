import { ListAuditTasksInput } from "./ListAuditTasksInput";
import { ListAuditTasksOutput } from "./ListAuditTasksOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { ThrottlingException } from "./ThrottlingException";
import { InternalFailureException } from "./InternalFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
