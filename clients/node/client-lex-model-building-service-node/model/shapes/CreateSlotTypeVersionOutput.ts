import { _EnumerationValues } from "./_EnumerationValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateSlotTypeVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    description: {
      shape: {
        type: "string"
      }
    },
    enumerationValues: {
      shape: _EnumerationValues
    },
    lastUpdatedDate: {
      shape: {
        type: "timestamp"
      }
    },
    createdDate: {
      shape: {
        type: "timestamp"
      }
    },
    version: {
      shape: {
        type: "string",
        min: 1
      }
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
    }
  }
};
