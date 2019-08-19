import { _S3OutputLocation } from "./_S3OutputLocation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _InstanceAssociationOutputLocation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Location: {
      shape: _S3OutputLocation
    }
  }
};
