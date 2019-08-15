import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SubDomainSetting: _Structure_ = {
  type: "structure",
  required: ["prefix", "branchName"],
  members: {
    prefix: {
      shape: {
        type: "string"
      }
    },
    branchName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
