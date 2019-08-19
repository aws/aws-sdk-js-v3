import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HttpRouteMatch: _Structure_ = {
  type: "structure",
  required: ["prefix"],
  members: {
    prefix: {
      shape: {
        type: "string"
      }
    }
  }
};
