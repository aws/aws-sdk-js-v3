import { _CodeContentUpdate } from "./_CodeContentUpdate";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationCodeConfigurationUpdate: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CodeContentTypeUpdate: {
      shape: {
        type: "string"
      }
    },
    CodeContentUpdate: {
      shape: _CodeContentUpdate
    }
  }
};
