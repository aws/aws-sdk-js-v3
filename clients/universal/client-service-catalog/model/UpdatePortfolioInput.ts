import { _AddTags } from "./_AddTags";
import { _TagKeys } from "./_TagKeys";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdatePortfolioInput: _Structure_ = {
  type: "structure",
  required: ["Id"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string",
        min: 1
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
    AddTags: {
      shape: _AddTags
    },
    RemoveTags: {
      shape: _TagKeys
    }
  }
};
