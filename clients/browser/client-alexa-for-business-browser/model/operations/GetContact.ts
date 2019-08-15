import { GetContactInput } from "../shapes/GetContactInput";
import { GetContactOutput } from "../shapes/GetContactOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetContact: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetContact",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetContactInput
  },
  output: {
    shape: GetContactOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
