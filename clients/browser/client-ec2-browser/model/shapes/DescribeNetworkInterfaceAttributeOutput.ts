import { _NetworkInterfaceAttachment } from "./_NetworkInterfaceAttachment";
import { _AttributeValue } from "./_AttributeValue";
import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNetworkInterfaceAttributeOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Attachment: {
      shape: _NetworkInterfaceAttachment,
      locationName: "attachment"
    },
    Description: {
      shape: _AttributeValue,
      locationName: "description"
    },
    Groups: {
      shape: _GroupIdentifierList,
      locationName: "groupSet"
    },
    NetworkInterfaceId: {
      shape: {
        type: "string"
      },
      locationName: "networkInterfaceId"
    },
    SourceDestCheck: {
      shape: _AttributeBooleanValue,
      locationName: "sourceDestCheck"
    }
  }
};
