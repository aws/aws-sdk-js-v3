import { _DataCatalogEncryptionSettings } from "./_DataCatalogEncryptionSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDataCatalogEncryptionSettingsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DataCatalogEncryptionSettings: {
      shape: _DataCatalogEncryptionSettings
    }
  }
};
