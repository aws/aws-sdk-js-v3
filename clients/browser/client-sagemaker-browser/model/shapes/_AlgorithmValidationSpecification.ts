import { _AlgorithmValidationProfiles } from "./_AlgorithmValidationProfiles";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlgorithmValidationSpecification: _Structure_ = {
  type: "structure",
  required: ["ValidationRole", "ValidationProfiles"],
  members: {
    ValidationRole: {
      shape: {
        type: "string",
        min: 20
      }
    },
    ValidationProfiles: {
      shape: _AlgorithmValidationProfiles
    }
  }
};
