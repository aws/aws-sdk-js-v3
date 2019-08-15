import { _S3ResourcesClassification } from "./_S3ResourcesClassification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateS3ResourcesInput: _Structure_ = {
  type: "structure",
  required: ["s3Resources"],
  members: {
    memberAccountId: {
      shape: {
        type: "string"
      }
    },
    s3Resources: {
      shape: _S3ResourcesClassification
    }
  }
};
