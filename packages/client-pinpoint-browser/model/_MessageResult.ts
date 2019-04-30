import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MessageResult: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DeliveryStatus: {
      shape: {
        type: "string"
      }
    },
    MessageId: {
      shape: {
        type: "string"
      }
    },
    StatusCode: {
      shape: {
        type: "integer"
      }
    },
    StatusMessage: {
      shape: {
        type: "string"
      }
    },
    UpdatedToken: {
      shape: {
        type: "string"
      }
    }
  }
};
