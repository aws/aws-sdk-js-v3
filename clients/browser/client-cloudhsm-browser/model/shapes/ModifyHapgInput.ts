import { _PartitionSerialList } from "./_PartitionSerialList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyHapgInput: _Structure_ = {
  type: "structure",
  required: ["HapgArn"],
  members: {
    HapgArn: {
      shape: {
        type: "string"
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    },
    PartitionSerialList: {
      shape: _PartitionSerialList
    }
  }
};
