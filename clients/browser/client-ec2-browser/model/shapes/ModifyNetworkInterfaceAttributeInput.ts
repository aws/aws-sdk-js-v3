import { _NetworkInterfaceAttachmentChanges } from "./_NetworkInterfaceAttachmentChanges";
import { _AttributeValue } from "./_AttributeValue";
import { _SecurityGroupIdStringList } from "./_SecurityGroupIdStringList";
import { _AttributeBooleanValue } from "./_AttributeBooleanValue";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyNetworkInterfaceAttributeInput: _Structure_ = {
  type: "structure",
  required: ["NetworkInterfaceId"],
  members: {
    Attachment: {
      shape: _NetworkInterfaceAttachmentChanges,
      locationName: "attachment"
    },
    Description: {
      shape: _AttributeValue,
      locationName: "description"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    Groups: {
      shape: _SecurityGroupIdStringList,
      locationName: "SecurityGroupId"
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
