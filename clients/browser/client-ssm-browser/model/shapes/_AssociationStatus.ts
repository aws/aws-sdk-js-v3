import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AssociationStatus: _Structure_ = {
  type: "structure",
  required: ["Date", "Name", "Message"],
  members: {
    Date: {
      shape: {
        type: "timestamp"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Message: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdditionalInfo: {
      shape: {
        type: "string"
      }
    }
  }
};
