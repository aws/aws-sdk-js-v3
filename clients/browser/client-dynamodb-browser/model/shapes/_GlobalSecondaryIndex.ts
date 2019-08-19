import { _KeySchema } from "./_KeySchema";
import { _Projection } from "./_Projection";
import { _ProvisionedThroughput } from "./_ProvisionedThroughput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlobalSecondaryIndex: _Structure_ = {
  type: "structure",
  required: ["IndexName", "KeySchema", "Projection"],
  members: {
    IndexName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    KeySchema: {
      shape: _KeySchema
    },
    Projection: {
      shape: _Projection
    },
    ProvisionedThroughput: {
      shape: _ProvisionedThroughput
    }
  }
};
