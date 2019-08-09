import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopGameSessionPlacementInput: _Structure_ = {
  type: "structure",
  required: ["PlacementId"],
  members: {
    PlacementId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
