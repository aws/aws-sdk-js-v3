import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmInput: _Structure_ = {
  type: "structure",
  required: ["SubnetId", "SshKey", "IamRoleArn", "SubscriptionType"],
  members: {
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "SubnetId"
    },
    SshKey: {
      shape: {
        type: "string"
      },
      locationName: "SshKey"
    },
    EniIp: {
      shape: {
        type: "string"
      },
      locationName: "EniIp"
    },
    IamRoleArn: {
      shape: {
        type: "string"
      },
      locationName: "IamRoleArn"
    },
    ExternalId: {
      shape: {
        type: "string"
      },
      locationName: "ExternalId"
    },
    SubscriptionType: {
      shape: {
        type: "string"
      },
      locationName: "SubscriptionType"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "ClientToken"
    },
    SyslogIp: {
      shape: {
        type: "string"
      },
      locationName: "SyslogIp"
    }
  }
};
