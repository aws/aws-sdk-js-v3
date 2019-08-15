import { _CatalogEntry } from "./_CatalogEntry";
import { _CatalogEntries } from "./_CatalogEntries";
import { _Location } from "./_Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetMappingInput: _Structure_ = {
  type: "structure",
  required: ["Source"],
  members: {
    Source: {
      shape: _CatalogEntry
    },
    Sinks: {
      shape: _CatalogEntries
    },
    Location: {
      shape: _Location
    }
  }
};
