import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateConnectorInput: _Structure_ = {
  type: "structure",
  required: ["connectorId"],
  members: {
    connectorId: {
      shape: {
        type: "string"
      }
    }
  }
};
