import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompromisedCredentialsActionsType: _Structure_ = {
  type: "structure",
  required: ["EventAction"],
  members: {
    EventAction: {
      shape: {
        type: "string"
      }
    }
  }
};
