import { _NetworkFabricConfiguration } from "./_NetworkFabricConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkFrameworkConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fabric: {
      shape: _NetworkFabricConfiguration
    }
  }
};
