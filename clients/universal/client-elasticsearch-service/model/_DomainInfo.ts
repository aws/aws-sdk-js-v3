import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainInfo: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DomainName: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
