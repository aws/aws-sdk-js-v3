import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ImportWorkspaceImageInput: _Structure_ = {
  type: "structure",
  required: ["Ec2ImageId", "IngestionProcess", "ImageName", "ImageDescription"],
  members: {
    Ec2ImageId: {
      shape: {
        type: "string"
      }
    },
    IngestionProcess: {
      shape: {
        type: "string"
      }
    },
    ImageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ImageDescription: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
