import { _Geometry } from "./_Geometry";
import { _RelationshipList } from "./_RelationshipList";
import { _EntityTypes } from "./_EntityTypes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Block: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    BlockType: {
      shape: {
        type: "string"
      }
    },
    Confidence: {
      shape: {
        type: "float"
      }
    },
    Text: {
      shape: {
        type: "string"
      }
    },
    RowIndex: {
      shape: {
        type: "integer"
      }
    },
    ColumnIndex: {
      shape: {
        type: "integer"
      }
    },
    RowSpan: {
      shape: {
        type: "integer"
      }
    },
    ColumnSpan: {
      shape: {
        type: "integer"
      }
    },
    Geometry: {
      shape: _Geometry
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Relationships: {
      shape: _RelationshipList
    },
    EntityTypes: {
      shape: _EntityTypes
    },
    SelectionStatus: {
      shape: {
        type: "string"
      }
    },
    Page: {
      shape: {
        type: "integer"
      }
    }
  }
};
