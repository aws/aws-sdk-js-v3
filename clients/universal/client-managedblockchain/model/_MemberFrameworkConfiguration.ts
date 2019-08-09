import { _MemberFabricConfiguration } from "./_MemberFabricConfiguration";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberFrameworkConfiguration: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fabric: {
      shape: _MemberFabricConfiguration
    }
  }
};
