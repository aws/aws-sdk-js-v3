import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteConfigurationAggregatorInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationAggregatorName"],
  members: {
    ConfigurationAggregatorName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
