import { GetDeviceInput } from "./GetDeviceInput";
import { GetDeviceOutput } from "./GetDeviceOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeviceInput
  },
  output: {
    shape: GetDeviceOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
