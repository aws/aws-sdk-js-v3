import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcClassicLink: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClassicLinkEnabled: {
      shape: {
        type: "boolean"
      },
      locationName: "classicLinkEnabled"
    },
    Tags: {
      shape: _TagList,
      locationName: "tagSet"
    },
    VpcId: {
      shape: {
        type: "string"
      },
      locationName: "vpcId"
    }
  }
};
