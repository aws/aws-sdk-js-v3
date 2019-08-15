import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateBrokerOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BrokerArn: {
      shape: {
        type: "string"
      },
      locationName: "brokerArn"
    },
    BrokerId: {
      shape: {
        type: "string"
      },
      locationName: "brokerId"
    }
  }
};
