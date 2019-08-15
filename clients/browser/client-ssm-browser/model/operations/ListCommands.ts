import { ListCommandsInput } from "../shapes/ListCommandsInput";
import { ListCommandsOutput } from "../shapes/ListCommandsOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidCommandId } from "../shapes/InvalidCommandId";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidFilterKey } from "../shapes/InvalidFilterKey";
import { InvalidNextToken } from "../shapes/InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
