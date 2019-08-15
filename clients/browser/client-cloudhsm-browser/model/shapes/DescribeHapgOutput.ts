import { _HsmList } from "./_HsmList";
import { _PartitionSerialList } from "./_PartitionSerialList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHapgOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    HapgArn: {
      shape: {
        type: "string"
      }
    },
    HapgSerial: {
      shape: {
        type: "string"
      }
    },
    HsmsLastActionFailed: {
      shape: _HsmList
    },
    HsmsPendingDeletion: {
      shape: _HsmList
    },
    HsmsPendingRegistration: {
      shape: _HsmList
    },
    Label: {
      shape: {
        type: "string"
      }
    },
    LastModifiedTimestamp: {
      shape: {
        type: "string"
      }
    },
    PartitionSerialList: {
      shape: _PartitionSerialList
    },
    State: {
      shape: {
        type: "string"
      }
    }
  }
};
