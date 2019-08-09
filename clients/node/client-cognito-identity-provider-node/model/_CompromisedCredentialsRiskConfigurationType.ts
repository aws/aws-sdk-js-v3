import { _EventFiltersType } from "./_EventFiltersType";
import { _CompromisedCredentialsActionsType } from "./_CompromisedCredentialsActionsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CompromisedCredentialsRiskConfigurationType: _Structure_ = {
  type: "structure",
  required: ["Actions"],
  members: {
    EventFilter: {
      shape: _EventFiltersType
    },
    Actions: {
      shape: _CompromisedCredentialsActionsType
    }
  }
};
