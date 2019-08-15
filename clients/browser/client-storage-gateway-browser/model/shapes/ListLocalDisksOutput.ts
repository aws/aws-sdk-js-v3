import { _Disks } from "./_Disks";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListLocalDisksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GatewayARN: {
      shape: {
        type: "string",
        min: 50
      }
    },
    Disks: {
      shape: _Disks
    }
  }
};
