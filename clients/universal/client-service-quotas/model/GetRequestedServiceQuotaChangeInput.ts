import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetRequestedServiceQuotaChangeInput: _Structure_ = {
  type: "structure",
  required: ["RequestId"],
  members: {
    RequestId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
