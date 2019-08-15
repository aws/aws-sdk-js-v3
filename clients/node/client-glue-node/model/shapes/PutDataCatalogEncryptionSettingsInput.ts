import { _DataCatalogEncryptionSettings } from "./_DataCatalogEncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutDataCatalogEncryptionSettingsInput: _Structure_ = {
  type: "structure",
  required: ["DataCatalogEncryptionSettings"],
  members: {
    CatalogId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    DataCatalogEncryptionSettings: {
      shape: _DataCatalogEncryptionSettings
    }
  }
};
