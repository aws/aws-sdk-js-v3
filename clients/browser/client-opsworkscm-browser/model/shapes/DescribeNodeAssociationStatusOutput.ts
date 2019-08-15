import { _EngineAttributes } from "./_EngineAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeNodeAssociationStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NodeAssociationStatus: {
      shape: {
        type: "string"
      }
    },
    EngineAttributes: {
      shape: _EngineAttributes
    }
  }
};
