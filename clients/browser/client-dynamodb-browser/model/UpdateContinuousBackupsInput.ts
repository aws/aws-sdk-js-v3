import { _PointInTimeRecoverySpecification } from "./_PointInTimeRecoverySpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateContinuousBackupsInput: _Structure_ = {
  type: "structure",
  required: ["TableName", "PointInTimeRecoverySpecification"],
  members: {
    TableName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    PointInTimeRecoverySpecification: {
      shape: _PointInTimeRecoverySpecification
    }
  }
};
