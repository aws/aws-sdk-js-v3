import { _QueryExecutionContext } from "./_QueryExecutionContext";
import { _ResultConfiguration } from "./_ResultConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartQueryExecutionInput: _Structure_ = {
  type: "structure",
  required: ["QueryString"],
  members: {
    QueryString: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ClientRequestToken: {
      shape: {
        type: "string",
        min: 32
      }
    },
    QueryExecutionContext: {
      shape: _QueryExecutionContext
    },
    ResultConfiguration: {
      shape: _ResultConfiguration
    },
    WorkGroup: {
      shape: {
        type: "string"
      }
    }
  }
};
