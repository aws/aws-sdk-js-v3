import { GetProfileInput } from "../shapes/GetProfileInput";
import { GetProfileOutput } from "../shapes/GetProfileOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetProfileInput
  },
  output: {
    shape: GetProfileOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
