import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCustomKeyStoreOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CustomKeyStoreId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
