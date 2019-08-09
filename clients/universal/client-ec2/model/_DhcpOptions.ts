import { _DhcpConfigurationList } from "./_DhcpConfigurationList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DhcpOptions: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DhcpConfigurations: {
      shape: _DhcpConfigurationList,
      locationName: "dhcpConfigurationSet"
    },
    DhcpOptionsId: {
      shape: {
        type: "string"
      },
      locationName: "dhcpOptionsId"
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    }
  }
};
