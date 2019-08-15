import { ResolveRoomInput } from "../shapes/ResolveRoomInput";
import { ResolveRoomOutput } from "../shapes/ResolveRoomOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
