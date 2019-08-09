import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeBrokerInput: _Structure_ = {
  type: "structure",
  required: ["BrokerId"],
  members: {
    BrokerId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "broker-id"
    }
  }
};
