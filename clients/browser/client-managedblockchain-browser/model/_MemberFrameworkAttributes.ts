import { _MemberFabricAttributes } from "./_MemberFabricAttributes";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MemberFrameworkAttributes: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Fabric: {
      shape: _MemberFabricAttributes
    }
  }
};
