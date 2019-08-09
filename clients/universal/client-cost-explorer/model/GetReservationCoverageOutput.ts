import { _CoveragesByTime } from "./_CoveragesByTime";
import { _Coverage } from "./_Coverage";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetReservationCoverageOutput: _Structure_ = {
  type: "structure",
  required: ["CoveragesByTime"],
  members: {
    CoveragesByTime: {
      shape: _CoveragesByTime
    },
    Total: {
      shape: _Coverage
    },
    NextPageToken: {
      shape: {
        type: "string"
      }
    }
  }
};
