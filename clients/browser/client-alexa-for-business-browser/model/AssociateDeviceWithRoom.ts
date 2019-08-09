import { AssociateDeviceWithRoomInput } from "./AssociateDeviceWithRoomInput";
import { AssociateDeviceWithRoomOutput } from "./AssociateDeviceWithRoomOutput";
import { LimitExceededException } from "./LimitExceededException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateDeviceWithRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDeviceWithRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDeviceWithRoomInput
  },
  output: {
    shape: AssociateDeviceWithRoomOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: DeviceNotRegisteredException
    }
  ]
};
