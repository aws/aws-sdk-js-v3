import { List as _List_ } from "@aws-sdk/types";
import { _AnomalyDetector } from "./_AnomalyDetector";

export const _AnomalyDetectors: _List_ = {
  type: "list",
  member: {
    shape: _AnomalyDetector
  }
};
