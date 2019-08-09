import { GetContactInput } from "./GetContactInput";
import { GetContactOutput } from "./GetContactOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
