import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteHsmConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["HsmConfigurationIdentifier"],
  members: {
    HsmConfigurationIdentifier: {
      shape: {
        type: "string"
      }
    }
  }
};
