import { GetWorkGroupInput } from "./GetWorkGroupInput";
import { GetWorkGroupOutput } from "./GetWorkGroupOutput";
import { InternalServerException } from "./InternalServerException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetWorkGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetWorkGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetWorkGroupInput
  },
  output: {
    shape: GetWorkGroupOutput
  },
  errors: [
    {
      shape: InternalServerException
    },
    {
      shape: InvalidRequestException
    }
  ]
};
