import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportCatalogToGlueInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
