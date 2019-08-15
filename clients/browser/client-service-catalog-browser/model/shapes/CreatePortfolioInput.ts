import { _AddTags } from "./_AddTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreatePortfolioInput: _Structure_ = {
  type: "structure",
  required: ["DisplayName", "ProviderName", "IdempotencyToken"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    DisplayName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    ProviderName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _AddTags
    },
    IdempotencyToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
