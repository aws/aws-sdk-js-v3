import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePartnerEventSourceInput: _Structure_ = {
  type: "structure",
  required: ["Name", "Account"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Account: {
      shape: {
        type: "string",
        min: 12
      }
    }
  }
};
