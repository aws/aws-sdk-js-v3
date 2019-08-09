import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListBudgetsForResourceInput: _Structure_ = {
  type: "structure",
  required: ["ResourceId"],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ResourceId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
