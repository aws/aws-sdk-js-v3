import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DnsRequestAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Domain: {
      shape: {
        type: "string"
      },
      locationName: "domain"
    }
  }
};
