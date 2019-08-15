import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteHsmInput: _Structure_ = {
  type: "structure",
  required: ["ClusterId"],
  members: {
    ClusterId: {
      shape: {
        type: "string"
      }
    },
    HsmId: {
      shape: {
        type: "string"
      }
    },
    EniId: {
      shape: {
        type: "string"
      }
    },
    EniIp: {
      shape: {
        type: "string"
      }
    }
  }
};
