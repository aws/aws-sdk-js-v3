import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MovingAddressStatus: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    MoveStatus: {
      shape: {
        type: "string"
      },
      locationName: "moveStatus"
    },
    PublicIp: {
      shape: {
        type: "string"
      },
      locationName: "publicIp"
    }
  }
};
