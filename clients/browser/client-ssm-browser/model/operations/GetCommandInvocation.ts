import { GetCommandInvocationInput } from "../shapes/GetCommandInvocationInput";
import { GetCommandInvocationOutput } from "../shapes/GetCommandInvocationOutput";
import { InternalServerError } from "../shapes/InternalServerError";
import { InvalidCommandId } from "../shapes/InvalidCommandId";
import { InvalidInstanceId } from "../shapes/InvalidInstanceId";
import { InvalidPluginName } from "../shapes/InvalidPluginName";
import { InvocationDoesNotExist } from "../shapes/InvocationDoesNotExist";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
