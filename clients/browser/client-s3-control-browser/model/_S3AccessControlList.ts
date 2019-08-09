import { _S3ObjectOwner } from "./_S3ObjectOwner";
import { _S3GrantList } from "./_S3GrantList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _S3AccessControlList: _Structure_ = {
  type: "structure",
  required: ["Owner"],
  members: {
    Owner: {
      shape: _S3ObjectOwner
    },
    Grants: {
      shape: _S3GrantList
    }
  }
};
