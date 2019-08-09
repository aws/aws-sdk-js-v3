import { _EnvironmentIdList } from "./_EnvironmentIdList";
import { _EnvironmentNamesList } from "./_EnvironmentNamesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VersionLabel: {
      shape: {
        type: "string",
        min: 1
      }
    },
    EnvironmentIds: {
      shape: _EnvironmentIdList
    },
    EnvironmentNames: {
      shape: _EnvironmentNamesList
    },
    IncludeDeleted: {
      shape: {
        type: "boolean"
      }
    },
    IncludedDeletedBackTo: {
      shape: {
        type: "timestamp"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
