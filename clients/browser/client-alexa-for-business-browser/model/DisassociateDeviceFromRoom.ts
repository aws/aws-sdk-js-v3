import { DisassociateDeviceFromRoomInput } from "./DisassociateDeviceFromRoomInput";
import { DisassociateDeviceFromRoomOutput } from "./DisassociateDeviceFromRoomOutput";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
