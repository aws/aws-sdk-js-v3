import { _NotifyConfigurationType } from "./_NotifyConfigurationType";
import { _AccountTakeoverActionsType } from "./_AccountTakeoverActionsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AccountTakeoverRiskConfigurationType: _Structure_ = {
  type: "structure",
  required: ["Actions"],
  members: {
    NotifyConfiguration: {
      shape: _NotifyConfigurationType
    },
    Actions: {
      shape: _AccountTakeoverActionsType
    }
  }
};
