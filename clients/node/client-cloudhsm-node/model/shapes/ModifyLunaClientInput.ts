import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyLunaClientInput: _Structure_ = {
  type: "structure",
  required: ["ClientArn", "Certificate"],
  members: {
    ClientArn: {
      shape: {
        type: "string"
      }
    },
    Certificate: {
      shape: {
        type: "string",
        min: 600
      }
    }
  }
};
