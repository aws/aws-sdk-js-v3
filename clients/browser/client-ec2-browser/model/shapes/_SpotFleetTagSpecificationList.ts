import { List as _List_ } from "@aws-sdk/types";
import { _SpotFleetTagSpecification } from "./_SpotFleetTagSpecification";

export const _SpotFleetTagSpecificationList: _List_ = {
  type: "list",
  member: {
    shape: _SpotFleetTagSpecification,
    locationName: "item"
  }
};
