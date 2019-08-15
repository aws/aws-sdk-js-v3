import { ListTasksInput } from "../shapes/ListTasksInput";
import { ListTasksOutput } from "../shapes/ListTasksOutput";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { InternalException } from "../shapes/InternalException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
