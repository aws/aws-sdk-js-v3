import { _ObservationList } from "./_ObservationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RelatedObservations: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ObservationList: {
      shape: _ObservationList
    }
  }
};
