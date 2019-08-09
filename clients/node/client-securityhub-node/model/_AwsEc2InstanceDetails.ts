import { _StringList } from "./_StringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AwsEc2InstanceDetails: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    ImageId: {
      shape: {
        type: "string"
      }
    },
    IpV4Addresses: {
      shape: _StringList
    },
    IpV6Addresses: {
      shape: _StringList
    },
    KeyName: {
      shape: {
        type: "string"
      }
    },
    IamInstanceProfileArn: {
      shape: {
        type: "string"
      }
    },
    VpcId: {
      shape: {
        type: "string"
      }
    },
    SubnetId: {
      shape: {
        type: "string"
      }
    },
    LaunchedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
