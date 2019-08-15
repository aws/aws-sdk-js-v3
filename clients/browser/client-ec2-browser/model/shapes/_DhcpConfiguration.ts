import { _DhcpConfigurationValueList } from "./_DhcpConfigurationValueList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DhcpConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Key: {
      shape: {
        type: "string"
      },
      locationName: "key"
    },
    Values: {
      shape: _DhcpConfigurationValueList,
      locationName: "valueSet"
    }
  }
};
