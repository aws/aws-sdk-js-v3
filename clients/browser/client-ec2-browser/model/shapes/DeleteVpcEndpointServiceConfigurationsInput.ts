import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpcEndpointServiceConfigurationsInput: _Structure_ = {
  type: "structure",
  required: ["ServiceIds"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ServiceIds: {
      shape: _ValueStringList,
      locationName: "ServiceId"
    }
  }
};
