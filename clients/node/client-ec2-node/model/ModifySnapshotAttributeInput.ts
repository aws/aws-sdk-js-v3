import { _CreateVolumePermissionModifications } from "./_CreateVolumePermissionModifications";
import { _GroupNameStringList } from "./_GroupNameStringList";
import { _UserIdStringList } from "./_UserIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifySnapshotAttributeInput: _Structure_ = {
  type: "structure",
  required: ["SnapshotId"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    CreateVolumePermission: {
      shape: _CreateVolumePermissionModifications
    },
    GroupNames: {
      shape: _GroupNameStringList,
      locationName: "UserGroup"
    },
    OperationType: {
      shape: {
        type: "string"
      }
    },
    SnapshotId: {
      shape: {
        type: "string"
      }
    },
    UserIds: {
      shape: _UserIdStringList,
      locationName: "UserId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
