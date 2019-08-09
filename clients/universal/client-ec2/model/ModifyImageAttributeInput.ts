import { _AttributeValue } from "./_AttributeValue";
import { _LaunchPermissionModifications } from "./_LaunchPermissionModifications";
import { _ProductCodeStringList } from "./_ProductCodeStringList";
import { _UserGroupStringList } from "./_UserGroupStringList";
import { _UserIdStringList } from "./_UserIdStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyImageAttributeInput: _Structure_ = {
  type: "structure",
  required: ["ImageId"],
  members: {
    Attribute: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: _AttributeValue
    },
    ImageId: {
      shape: {
        type: "string"
      }
    },
    LaunchPermission: {
      shape: _LaunchPermissionModifications
    },
    OperationType: {
      shape: {
        type: "string"
      }
    },
    ProductCodes: {
      shape: _ProductCodeStringList,
      locationName: "ProductCode"
    },
    UserGroups: {
      shape: _UserGroupStringList,
      locationName: "UserGroup"
    },
    UserIds: {
      shape: _UserIdStringList,
      locationName: "UserId"
    },
    Value: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    }
  }
};
