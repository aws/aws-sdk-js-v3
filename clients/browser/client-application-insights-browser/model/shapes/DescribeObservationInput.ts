import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeObservationInput: _Structure_ = {
  type: "structure",
  required: ["ObservationId"],
  members: {
    ObservationId: {
      shape: {
        type: "string"
      }
    }
  }
};
