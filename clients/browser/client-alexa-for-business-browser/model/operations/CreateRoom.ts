import { CreateRoomInput } from "../shapes/CreateRoomInput";
import { CreateRoomOutput } from "../shapes/CreateRoomOutput";
import { AlreadyExistsException } from "../shapes/AlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateRoomInput
  },
  output: {
    shape: CreateRoomOutput
  },
  errors: [
    {
      shape: AlreadyExistsException
    },
    {
      shape: LimitExceededException
    }
  ]
};
