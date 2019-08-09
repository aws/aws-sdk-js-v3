import { _TopContributors } from "./_TopContributors";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AttackProperty: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AttackLayer: {
      shape: {
        type: "string"
      }
    },
    AttackPropertyIdentifier: {
      shape: {
        type: "string"
      }
    },
    TopContributors: {
      shape: _TopContributors
    },
    Unit: {
      shape: {
        type: "string"
      }
    },
    Total: {
      shape: {
        type: "integer"
      }
    }
  }
};
