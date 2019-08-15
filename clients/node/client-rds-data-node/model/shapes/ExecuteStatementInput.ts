import { _SqlParametersList } from "./_SqlParametersList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteStatementInput: _Structure_ = {
  type: "structure",
  required: ["resourceArn", "secretArn", "sql"],
  members: {
    continueAfterTimeout: {
      shape: {
        type: "boolean"
      }
    },
    database: {
      shape: {
        type: "string"
      }
    },
    includeResultMetadata: {
      shape: {
        type: "boolean"
      }
    },
    parameters: {
      shape: _SqlParametersList
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
