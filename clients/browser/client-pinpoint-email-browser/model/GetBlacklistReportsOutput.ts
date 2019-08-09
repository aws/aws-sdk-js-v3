import { _BlacklistReport } from "./_BlacklistReport";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetBlacklistReportsOutput: _Structure_ = {
  type: "structure",
  required: ["BlacklistReport"],
  members: {
    BlacklistReport: {
      shape: _BlacklistReport
    }
  }
};
