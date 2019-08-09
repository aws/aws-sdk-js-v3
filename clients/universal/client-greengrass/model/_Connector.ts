import { ___mapOf__string } from "./___mapOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Connector: _Structure_ = {
  type: "structure",
  required: ["ConnectorArn", "Id"],
  members: {
    ConnectorArn: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Parameters: {
      shape: ___mapOf__string
    }
  }
};
