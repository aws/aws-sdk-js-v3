import { _MappingList } from "./_MappingList";
import { _CatalogEntry } from "./_CatalogEntry";
import { _CatalogEntries } from "./_CatalogEntries";
import { _Location } from "./_Location";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetPlanInput: _Structure_ = {
  type: "structure",
  required: ["Mapping", "Source"],
  members: {
    Mapping: {
      shape: _MappingList
    },
    Source: {
      shape: _CatalogEntry
    },
    Sinks: {
      shape: _CatalogEntries
    },
    Location: {
      shape: _Location
    },
    Language: {
      shape: {
        type: "string"
      }
    }
  }
};
