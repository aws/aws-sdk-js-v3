import { _Resolver } from "./_Resolver";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateResolverOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resolver: {
      shape: _Resolver
    }
  }
};
