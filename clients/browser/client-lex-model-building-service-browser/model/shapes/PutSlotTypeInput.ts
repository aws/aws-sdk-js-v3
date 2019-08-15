import { _EnumerationValues } from "./_EnumerationValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutSlotTypeInput: _Structure_ = {
  type: "structure",
  required: ["name"],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "name"
    },
    description: {
      shape: {
        type: "string"
      }
    },
    enumerationValues: {
      shape: _EnumerationValues
    },
    checksum: {
      shape: {
        type: "string"
      }
    },
    valueSelectionStrategy: {
      shape: {
        type: "string"
      }
    },
    createVersion: {
      shape: {
        type: "boolean"
      }
    }
  }
};
