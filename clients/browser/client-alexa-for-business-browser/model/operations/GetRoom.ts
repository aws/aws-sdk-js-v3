import { GetRoomInput } from "../shapes/GetRoomInput";
import { GetRoomOutput } from "../shapes/GetRoomOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetRoomInput
  },
  output: {
    shape: GetRoomOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
