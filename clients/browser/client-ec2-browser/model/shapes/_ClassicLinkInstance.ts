import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ClassicLinkInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
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
