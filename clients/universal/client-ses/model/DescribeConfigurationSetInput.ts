import { _ConfigurationSetAttributeList } from "./_ConfigurationSetAttributeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeConfigurationSetInput: _Structure_ = {
  type: "structure",
  required: ["ConfigurationSetName"],
  members: {
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    ConfigurationSetAttributeNames: {
      shape: _ConfigurationSetAttributeList
    }
  }
};
