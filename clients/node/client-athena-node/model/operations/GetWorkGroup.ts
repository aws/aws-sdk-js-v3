import { GetWorkGroupInput } from "../shapes/GetWorkGroupInput";
import { GetWorkGroupOutput } from "../shapes/GetWorkGroupOutput";
import { InternalServerException } from "../shapes/InternalServerException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
