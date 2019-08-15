import { _fieldList } from "./_fieldList";
import { _tagList } from "./_tagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PipelineDescription: _Structure_ = {
  type: "structure",
  required: ["pipelineId", "name", "fields"],
  members: {
    pipelineId: {
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
    },
    description: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _tagList
    }
  }
};
