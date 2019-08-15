import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseBundle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    bundleId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    price: {
      shape: {
        type: "float"
      }
    },
    ramSizeInGb: {
      shape: {
        type: "float"
      }
    },
    diskSizeInGb: {
      shape: {
        type: "integer"
      }
    },
    transferPerMonthInGb: {
      shape: {
        type: "integer"
      }
    },
    cpuCount: {
      shape: {
        type: "integer"
      }
    },
    isEncrypted: {
      shape: {
        type: "boolean"
      }
    },
    isActive: {
      shape: {
        type: "boolean"
      }
    }
  }
};
