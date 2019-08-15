import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseHardware: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    cpuCount: {
      shape: {
        type: "integer"
      }
    },
    diskSizeInGb: {
      shape: {
        type: "integer"
      }
    },
    ramSizeInGb: {
      shape: {
        type: "float"
      }
    }
  }
};
