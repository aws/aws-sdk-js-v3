import { DeleteRoomInput } from "./DeleteRoomInput";
import { DeleteRoomOutput } from "./DeleteRoomOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteRoomInput
  },
  output: {
    shape: DeleteRoomOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    }
  ]
};
