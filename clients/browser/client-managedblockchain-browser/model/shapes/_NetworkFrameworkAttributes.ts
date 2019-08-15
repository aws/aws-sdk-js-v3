import { _NetworkFabricAttributes } from "./_NetworkFabricAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _NetworkFrameworkAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fabric: {
      shape: _NetworkFabricAttributes
    }
  }
};
