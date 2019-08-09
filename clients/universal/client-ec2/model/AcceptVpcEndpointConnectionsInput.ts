import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AcceptVpcEndpointConnectionsInput: _Structure_ = {
  type: "structure",
  required: ["ServiceId", "VpcEndpointIds"],
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
    VpcEndpointIds: {
      shape: _ValueStringList,
      locationName: "VpcEndpointId"
    }
  }
};
