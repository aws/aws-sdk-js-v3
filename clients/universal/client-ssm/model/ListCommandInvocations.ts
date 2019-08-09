import { ListCommandInvocationsInput } from "./ListCommandInvocationsInput";
import { ListCommandInvocationsOutput } from "./ListCommandInvocationsOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidFilterKey } from "./InvalidFilterKey";
import { InvalidNextToken } from "./InvalidNextToken";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListCommandInvocations: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListCommandInvocations",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListCommandInvocationsInput
  },
  output: {
    shape: ListCommandInvocationsOutput
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
