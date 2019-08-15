import { _ResourceLocation } from "./_ResourceLocation";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelationalDatabaseSnapshot: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    arn: {
      shape: {
        type: "string"
      }
    },
    supportCode: {
      shape: {
        type: "string"
      }
    },
    createdAt: {
      shape: {
        type: "timestamp"
      }
    },
    location: {
      shape: _ResourceLocation
    },
    resourceType: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagList
    },
    engine: {
      shape: {
        type: "string"
      }
    },
    engineVersion: {
      shape: {
        type: "string"
      }
    },
    sizeInGb: {
      shape: {
        type: "integer"
      }
    },
    state: {
      shape: {
        type: "string"
      }
    },
    fromRelationalDatabaseName: {
      shape: {
        type: "string"
      }
    },
    fromRelationalDatabaseArn: {
      shape: {
        type: "string"
      }
    },
    fromRelationalDatabaseBundleId: {
      shape: {
        type: "string"
      }
    },
    fromRelationalDatabaseBlueprintId: {
      shape: {
        type: "string"
      }
    }
  }
};
