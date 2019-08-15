import { _AttributeMap } from "./_AttributeMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StreamRecord: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApproximateCreationDateTime: {
      shape: {
        type: "timestamp"
      }
    },
    Keys: {
      shape: _AttributeMap
    },
    NewImage: {
      shape: _AttributeMap
    },
    OldImage: {
      shape: _AttributeMap
    },
    SequenceNumber: {
      shape: {
        type: "string",
        min: 21
      }
    },
    SizeBytes: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    StreamViewType: {
      shape: {
        type: "string"
      }
    }
  }
};
