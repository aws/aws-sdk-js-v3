import { _DataflowEdgeList } from "./_DataflowEdgeList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateMissionProfileInput: _Structure_ = {
  type: "structure",
  required: ["missionProfileId"],
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
    missionProfileId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "missionProfileId"
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    trackingConfigArn: {
      shape: {
        type: "string"
      }
    }
  }
};
