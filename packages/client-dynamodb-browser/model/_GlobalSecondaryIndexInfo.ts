import { _KeySchema } from "./_KeySchema";
import { _Projection } from "./_Projection";
import { _ProvisionedThroughput } from "./_ProvisionedThroughput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GlobalSecondaryIndexInfo: _Structure_ = {
  type: "structure",
  required: [],
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
