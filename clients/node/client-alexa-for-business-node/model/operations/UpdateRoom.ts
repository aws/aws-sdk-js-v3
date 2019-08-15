import { UpdateRoomInput } from "../shapes/UpdateRoomInput";
import { UpdateRoomOutput } from "../shapes/UpdateRoomOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { NameInUseException } from "../shapes/NameInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateRoomInput
  },
  output: {
    shape: UpdateRoomOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: NameInUseException
    }
  ]
};
