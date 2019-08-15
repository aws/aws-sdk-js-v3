import { _Query } from "./_Query";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const QueryObjectsInput: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "sphere"],
  members: {
    pipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    query: {
      shape: _Query
    },
    sphere: {
      shape: {
        type: "string"
      }
    },
    marker: {
      shape: {
        type: "string"
      }
    },
    limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
