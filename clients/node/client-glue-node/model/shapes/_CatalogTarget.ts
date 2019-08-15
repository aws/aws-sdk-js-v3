import { _CatalogTablesList } from "./_CatalogTablesList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CatalogTarget: _Structure_ = {
  type: "structure",
  required: ["DatabaseName", "Tables"],
  members: {
    DatabaseName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tables: {
      shape: _CatalogTablesList
    }
  }
};
