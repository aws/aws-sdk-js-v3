import { _SshPublicKeys } from "./_SshPublicKeys";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DescribedUser: _Structure_ = {
  type: "structure",
  required: ["Arn"],
  members: {
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    HomeDirectory: {
      shape: {
        type: "string"
      }
    },
    Policy: {
      shape: {
        type: "string"
      }
    },
    Role: {
      shape: {
        type: "string"
      }
    },
    SshPublicKeys: {
      shape: _SshPublicKeys
    },
    Tags: {
      shape: _Tags
    },
    UserName: {
      shape: {
        type: "string"
      }
    }
  }
};
