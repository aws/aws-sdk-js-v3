import { _ServiceEndpoint } from "./_ServiceEndpoint";
import { _Limits } from "./_Limits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainStatus: _Structure_ = {
  type: "structure",
  required: ["DomainId", "DomainName", "RequiresIndexDocuments"],
  members: {
    DomainId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    ARN: {
      shape: {
        type: "string"
      }
    },
    Created: {
      shape: {
        type: "boolean"
      }
    },
    Deleted: {
      shape: {
        type: "boolean"
      }
    },
    DocService: {
      shape: _ServiceEndpoint
    },
    SearchService: {
      shape: _ServiceEndpoint
    },
    RequiresIndexDocuments: {
      shape: {
        type: "boolean"
      }
    },
    Processing: {
      shape: {
        type: "boolean"
      }
    },
    SearchInstanceType: {
      shape: {
        type: "string"
      }
    },
    SearchPartitionCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    SearchInstanceCount: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Limits: {
      shape: _Limits
    }
  }
};
