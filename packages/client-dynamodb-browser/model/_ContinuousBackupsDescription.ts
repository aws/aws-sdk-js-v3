import { _PointInTimeRecoveryDescription } from "./_PointInTimeRecoveryDescription";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ContinuousBackupsDescription: _Structure_ = {
  type: "structure",
  required: ["ContinuousBackupsStatus"],
  members: {
    ContinuousBackupsStatus: {
      shape: {
        type: "string"
      }
    },
    PointInTimeRecoveryDescription: {
      shape: _PointInTimeRecoveryDescription
    }
  }
};
