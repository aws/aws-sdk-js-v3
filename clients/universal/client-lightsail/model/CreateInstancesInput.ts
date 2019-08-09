import { _StringList } from "./_StringList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateInstancesInput: _Structure_ = {
  type: "structure",
  required: ["instanceNames", "availabilityZone", "blueprintId", "bundleId"],
  members: {
    instanceNames: {
      shape: _StringList
    },
    availabilityZone: {
      shape: {
        type: "string"
      }
    },
    customImageName: {
      shape: {
        type: "string"
      }
    },
    blueprintId: {
      shape: {
        type: "string"
      }
    },
    bundleId: {
      shape: {
        type: "string"
      }
    },
    userData: {
      shape: {
        type: "string"
      }
    },
    keyPairName: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    }
  }
};
