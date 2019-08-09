import { ListCommandsInput } from "./ListCommandsInput";
import { ListCommandsOutput } from "./ListCommandsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCommands: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCommands",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCommandsInput
  },
  output: {
    shape: ListCommandsOutput
  },
  errors: [
    {
      shape: InternalServerError
    },
    {
      shape: InvalidCommandId
    },
    {
      shape: InvalidInstanceId
    },
    {
      shape: InvalidFilterKey
    },
    {
      shape: InvalidNextToken
    }
  ]
};
