import { _UserIdStringList } from "./_UserIdStringList";
import { _UserGroupStringList } from "./_UserGroupStringList";
import { _ProductCodeStringList } from "./_ProductCodeStringList";
import { _LoadPermissionModifications } from "./_LoadPermissionModifications";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyFpgaImageAttributeInput: _Structure_ = {
  type: "structure",
  required: ["FpgaImageId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    FpgaImageId: {
      shape: {
        type: "string"
      }
    },
    Attribute: {
      shape: {
        type: "string"
      }
    },
    OperationType: {
      shape: {
        type: "string"
      }
    },
    UserIds: {
      shape: _UserIdStringList,
      locationName: "UserId"
    },
    UserGroups: {
      shape: _UserGroupStringList,
      locationName: "UserGroup"
    },
    ProductCodes: {
      shape: _ProductCodeStringList,
      locationName: "ProductCode"
    },
    LoadPermission: {
      shape: _LoadPermissionModifications
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    }
  }
};
