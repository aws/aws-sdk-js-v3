import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteClientVpnEndpointInput: _Structure_ = {
  type: "structure",
  required: ["ClientVpnEndpointId"],
  members: {
    ClientVpnEndpointId: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
