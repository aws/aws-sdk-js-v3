import { GetProfileInput } from "./GetProfileInput";
import { GetProfileOutput } from "./GetProfileOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
