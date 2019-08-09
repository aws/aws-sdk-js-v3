import { GetCommandInvocationInput } from "./GetCommandInvocationInput";
import { GetCommandInvocationOutput } from "./GetCommandInvocationOutput";
import { InternalServerError } from "./InternalServerError";
import { InvalidCommandId } from "./InvalidCommandId";
import { InvalidInstanceId } from "./InvalidInstanceId";
import { InvalidPluginName } from "./InvalidPluginName";
import { InvocationDoesNotExist } from "./InvocationDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetCommandInvocation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCommandInvocation",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCommandInvocationInput
  },
  output: {
    shape: GetCommandInvocationOutput
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
      shape: InvalidPluginName
    },
    {
      shape: InvocationDoesNotExist
    }
  ]
};
