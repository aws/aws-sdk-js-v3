import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Ec2AmiResource: _Structure_ = {
  type: "structure",
  required: ["AmiId"],
  members: {
    AmiId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    SnowballAmiId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
