import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListServiceActionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
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
