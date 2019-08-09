import { _MatchCriteria } from "./_MatchCriteria";
import { _ConnectionProperties } from "./_ConnectionProperties";
import { _PhysicalConnectionRequirements } from "./_PhysicalConnectionRequirements";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionInput: _Structure_ = {
  type: "structure",
  required: ["Name", "ConnectionType", "ConnectionProperties"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ConnectionType: {
      shape: {
        type: "string"
      }
    },
    MatchCriteria: {
      shape: _MatchCriteria
    },
    ConnectionProperties: {
      shape: _ConnectionProperties
    },
    PhysicalConnectionRequirements: {
      shape: _PhysicalConnectionRequirements
    }
  }
};
