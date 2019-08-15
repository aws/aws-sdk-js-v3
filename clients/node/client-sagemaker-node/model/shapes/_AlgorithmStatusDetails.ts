import { _AlgorithmStatusItemList } from "./_AlgorithmStatusItemList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmStatusDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ValidationStatuses: {
      shape: _AlgorithmStatusItemList
    },
    ImageScanStatuses: {
      shape: _AlgorithmStatusItemList
    }
  }
};
