import { UpdateRoomInput } from "./UpdateRoomInput";
import { UpdateRoomOutput } from "./UpdateRoomOutput";
import { NotFoundException } from "./NotFoundException";
import { NameInUseException } from "./NameInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
