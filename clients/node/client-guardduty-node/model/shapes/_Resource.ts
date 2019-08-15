import { _AccessKeyDetails } from "./_AccessKeyDetails";
import { _InstanceDetails } from "./_InstanceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Resource: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AccessKeyDetails: {
      shape: _AccessKeyDetails,
      locationName: "accessKeyDetails"
    },
    InstanceDetails: {
      shape: _InstanceDetails,
      locationName: "instanceDetails"
    },
    ResourceType: {
      shape: {
        type: "string"
      },
      locationName: "resourceType"
    }
  }
};
