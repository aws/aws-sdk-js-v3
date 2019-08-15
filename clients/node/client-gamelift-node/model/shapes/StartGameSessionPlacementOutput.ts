import { _GameSessionPlacement } from "./_GameSessionPlacement";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartGameSessionPlacementOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GameSessionPlacement: {
      shape: _GameSessionPlacement
    }
  }
};
