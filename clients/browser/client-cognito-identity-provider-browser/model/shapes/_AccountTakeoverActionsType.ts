import { _AccountTakeoverActionType } from "./_AccountTakeoverActionType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountTakeoverActionsType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LowAction: {
      shape: _AccountTakeoverActionType
    },
    MediumAction: {
      shape: _AccountTakeoverActionType
    },
    HighAction: {
      shape: _AccountTakeoverActionType
    }
  }
};
