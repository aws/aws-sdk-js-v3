import { _ExecutionParameterMap } from "./_ExecutionParameterMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ExecuteProvisionedProductServiceActionInput: _Structure_ = {
  type: "structure",
  required: ["ProvisionedProductId", "ServiceActionId", "ExecuteToken"],
  members: {
    ProvisionedProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ServiceActionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ExecuteToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: _ExecutionParameterMap
    }
  }
};
