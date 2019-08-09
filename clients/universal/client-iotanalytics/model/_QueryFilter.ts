import { _DeltaTime } from "./_DeltaTime";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryFilter: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    deltaTime: {
      shape: _DeltaTime
    }
  }
};
