import { ListTasksInput } from "./ListTasksInput";
import { ListTasksOutput } from "./ListTasksOutput";
import { InvalidRequestException } from "./InvalidRequestException";
import { InternalException } from "./InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListTasks: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTasks",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListTasksInput
  },
  output: {
    shape: ListTasksOutput
  },
  errors: [
    {
      shape: InvalidRequestException
    },
    {
      shape: InternalException
    }
  ]
};
