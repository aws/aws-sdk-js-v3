import { _FpgaImageIdList } from "./_FpgaImageIdList";
import { _OwnerStringList } from "./_OwnerStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFpgaImagesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    FpgaImageIds: {
      shape: _FpgaImageIdList,
      locationName: "FpgaImageId"
    },
    Owners: {
      shape: _OwnerStringList,
      locationName: "Owner"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    }
  }
};
