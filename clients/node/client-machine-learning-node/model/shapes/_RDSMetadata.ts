import { _RDSDatabase } from "./_RDSDatabase";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RDSMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Database: {
      shape: _RDSDatabase
    },
    DatabaseUserName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    SelectSqlQuery: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ResourceRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceRole: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DataPipelineId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
