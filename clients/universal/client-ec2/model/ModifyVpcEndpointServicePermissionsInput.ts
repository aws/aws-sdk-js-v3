import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyVpcEndpointServicePermissionsInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ServiceId: {
      shape: {
        type: "string"
      }
    },
    AddAllowedPrincipals: {
      shape: _ValueStringList
    },
    RemoveAllowedPrincipals: {
      shape: _ValueStringList
    }
  }
};
