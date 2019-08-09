import { GetRoomInput } from "./GetRoomInput";
import { GetRoomOutput } from "./GetRoomOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
