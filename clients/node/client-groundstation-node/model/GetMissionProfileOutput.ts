import { _DataflowEdgeList } from "./_DataflowEdgeList";
import { _TagsMap } from "./_TagsMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMissionProfileOutput: _Structure_ = {
  type: "structure",
  required: [],
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
    missionProfileArn: {
      shape: {
        type: "string"
      }
    },
    missionProfileId: {
      shape: {
        type: "string"
      }
    },
    name: {
      shape: {
        type: "string"
      }
    },
    region: {
      shape: {
        type: "string"
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
