import { DisassociateDeviceFromRoomInput } from "../shapes/DisassociateDeviceFromRoomInput";
import { DisassociateDeviceFromRoomOutput } from "../shapes/DisassociateDeviceFromRoomOutput";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { DeviceNotRegisteredException } from "../shapes/DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateDeviceFromRoom: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDeviceFromRoom",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateDeviceFromRoomInput
  },
  output: {
    shape: DisassociateDeviceFromRoomOutput
  },
  errors: [
    {
      shape: ConcurrentModificationException
    },
    {
      shape: DeviceNotRegisteredException
    }
  ]
};
