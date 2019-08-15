import { List as _List_ } from "@aws-sdk/types";
import { _SpotFleetLaunchSpecification } from "./_SpotFleetLaunchSpecification";

export const _LaunchSpecsList: _List_ = {
  type: "list",
  member: {
    shape: _SpotFleetLaunchSpecification,
    locationName: "item"
  }
};
