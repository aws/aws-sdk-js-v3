import { _S3Resources } from "./_S3Resources";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateS3ResourcesInput: _Structure_ = {
  type: "structure",
  required: ["associatedS3Resources"],
  members: {
    memberAccountId: {
      shape: {
        type: "string"
      }
    },
    associatedS3Resources: {
      shape: _S3Resources
    }
  }
};
