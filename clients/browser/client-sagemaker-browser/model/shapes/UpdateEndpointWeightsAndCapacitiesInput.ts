import { _DesiredWeightAndCapacityList } from "./_DesiredWeightAndCapacityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateEndpointWeightsAndCapacitiesInput: _Structure_ = {
  type: "structure",
  required: ["EndpointName", "DesiredWeightsAndCapacities"],
  members: {
    EndpointName: {
      shape: {
        type: "string"
      }
    },
    DesiredWeightsAndCapacities: {
      shape: _DesiredWeightAndCapacityList
    }
  }
};
