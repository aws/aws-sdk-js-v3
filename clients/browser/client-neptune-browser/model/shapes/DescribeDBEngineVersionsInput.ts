import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBEngineVersionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Engine: {
      shape: {
        type: "string"
      }
    },
    EngineVersion: {
      shape: {
        type: "string"
      }
    },
    DBParameterGroupFamily: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    DefaultOnly: {
      shape: {
        type: "boolean"
      }
    },
    ListSupportedCharacterSets: {
      shape: {
        type: "boolean"
      }
    },
    ListSupportedTimezones: {
      shape: {
        type: "boolean"
      }
    }
  }
};
