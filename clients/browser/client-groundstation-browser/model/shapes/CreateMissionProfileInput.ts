import { _DataflowEdgeList } from "./_DataflowEdgeList";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateMissionProfileInput: _Structure_ = {
  type: "structure",
  required: [
    "dataflowEdges",
    "minimumViableContactDurationSeconds",
    "name",
    "trackingConfigArn"
  ],
  members: {
    contactPostPassDurationSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    contactPrePassDurationSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    dataflowEdges: {
      shape: _DataflowEdgeList
    },
    minimumViableContactDurationSeconds: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    tags: {
      shape: _TagsMap
    },
    trackingConfigArn: {
      shape: {
        type: "string"
      }
    }
  }
};
