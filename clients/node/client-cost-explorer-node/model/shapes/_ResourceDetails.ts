import { _EC2ResourceDetails } from "./_EC2ResourceDetails";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EC2ResourceDetails: {
      shape: _EC2ResourceDetails
    }
  }
};
