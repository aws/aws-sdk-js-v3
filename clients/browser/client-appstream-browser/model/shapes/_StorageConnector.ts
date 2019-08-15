import { _DomainList } from "./_DomainList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StorageConnector: _Structure_ = {
  type: "structure",
  required: ["ConnectorType"],
  members: {
    ConnectorType: {
      shape: {
        type: "string"
      }
    },
    ResourceIdentifier: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Domains: {
      shape: _DomainList
    }
  }
};
