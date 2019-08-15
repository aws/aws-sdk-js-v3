import { _RelatedObservations } from "./_RelatedObservations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProblemObservationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RelatedObservations: {
      shape: _RelatedObservations
    }
  }
};
