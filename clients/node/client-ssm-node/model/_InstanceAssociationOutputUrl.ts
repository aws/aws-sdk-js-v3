import { _S3OutputUrl } from "./_S3OutputUrl";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAssociationOutputUrl: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3OutputUrl: {
      shape: _S3OutputUrl
    }
  }
};
