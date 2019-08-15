import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteBrokerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      locationName: "brokerId"
    }
  }
};
