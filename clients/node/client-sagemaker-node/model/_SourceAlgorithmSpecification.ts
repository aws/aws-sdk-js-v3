import { _SourceAlgorithmList } from "./_SourceAlgorithmList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SourceAlgorithmSpecification: _Structure_ = {
  type: "structure",
  required: ["SourceAlgorithms"],
  members: {
    SourceAlgorithms: {
      shape: _SourceAlgorithmList
    }
  }
};
