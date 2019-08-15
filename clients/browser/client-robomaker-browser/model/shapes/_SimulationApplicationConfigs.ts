import { List as _List_ } from "@aws-sdk/types";
import { _SimulationApplicationConfig } from "./_SimulationApplicationConfig";

export const _SimulationApplicationConfigs: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _SimulationApplicationConfig
  }
};
