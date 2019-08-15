import { _fieldList } from "./_fieldList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineObject: _Structure_ = {
  type: "structure",
  required: ["id", "name", "fields"],
  members: {
    id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    fields: {
      shape: _fieldList
    }
  }
};
