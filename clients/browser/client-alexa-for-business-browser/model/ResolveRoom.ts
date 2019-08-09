import { ResolveRoomInput } from "./ResolveRoomInput";
import { ResolveRoomOutput } from "./ResolveRoomOutput";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ResolveRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ResolveRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ResolveRoomInput
  },
  output: {
    shape: ResolveRoomOutput
  },
  errors: [
    {
      shape: NotFoundException
    }
  ]
};
