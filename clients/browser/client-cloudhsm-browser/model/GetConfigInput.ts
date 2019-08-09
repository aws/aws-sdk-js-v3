import { _HapgList } from "./_HapgList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetConfigInput: _Structure_ = {
  type: "structure",
  required: ["ClientArn", "ClientVersion", "HapgList"],
  members: {
    ClientArn: {
      shape: {
        type: "string"
      }
    },
    ClientVersion: {
      shape: {
        type: "string"
      }
    },
    HapgList: {
      shape: _HapgList
    }
  }
};
