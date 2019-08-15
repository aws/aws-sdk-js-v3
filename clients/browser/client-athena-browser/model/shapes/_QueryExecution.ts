import { _ResultConfiguration } from "./_ResultConfiguration";
import { _QueryExecutionContext } from "./_QueryExecutionContext";
import { _QueryExecutionStatus } from "./_QueryExecutionStatus";
import { _QueryExecutionStatistics } from "./_QueryExecutionStatistics";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _QueryExecution: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    QueryExecutionId: {
      shape: {
        type: "string"
      }
    },
    Query: {
      shape: {
        type: "string",
        min: 1
      }
    },
    StatementType: {
      shape: {
        type: "string"
      }
    },
    ResultConfiguration: {
      shape: _ResultConfiguration
    },
    QueryExecutionContext: {
      shape: _QueryExecutionContext
    },
    Status: {
      shape: _QueryExecutionStatus
    },
    Statistics: {
      shape: _QueryExecutionStatistics
    },
    WorkGroup: {
      shape: {
        type: "string"
      }
    }
  }
};
