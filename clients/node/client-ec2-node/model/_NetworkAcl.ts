import { _NetworkAclAssociationList } from "./_NetworkAclAssociationList";
import { _NetworkAclEntryList } from "./_NetworkAclEntryList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkAcl: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Associations: {
      shape: _NetworkAclAssociationList,
      locationName: "associationSet"
    },
    Entries: {
      shape: _NetworkAclEntryList,
      locationName: "entrySet"
    },
    IsDefault: {
      shape: {
        type: "boolean"
      },
      locationName: "default"
    },
    NetworkAclId: {
      shape: {
        type: "string"
      },
      locationName: "networkAclId"
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
    },
    OwnerId: {
      shape: {
        type: "string"
      },
      locationName: "ownerId"
    }
  }
};
