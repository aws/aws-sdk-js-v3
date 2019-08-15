import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteVpcEndpointsInput: _Structure_ = {
  type: "structure",
  required: ["VpcEndpointIds"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    VpcEndpointIds: {
      shape: _ValueStringList,
      locationName: "VpcEndpointId"
    }
  }
};
