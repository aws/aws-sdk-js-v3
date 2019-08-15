import { _SqlParameterSets } from "./_SqlParameterSets";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchExecuteStatementInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "secretArn", "sql"],
  members: {
    database: {
      shape: {
        type: "string"
      }
    },
    parameterSets: {
      shape: _SqlParameterSets
    },
    resourceArn: {
      shape: {
        type: "string"
      }
    },
    schema: {
      shape: {
        type: "string"
      }
    },
    secretArn: {
      shape: {
        type: "string"
      }
    },
    sql: {
      shape: {
        type: "string"
      }
    },
    transactionId: {
      shape: {
        type: "string"
      }
    }
  }
};
