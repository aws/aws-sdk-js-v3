import { _CatalogImportStatus } from "./_CatalogImportStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCatalogImportStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ImportStatus: {
      shape: _CatalogImportStatus
    }
  }
};
