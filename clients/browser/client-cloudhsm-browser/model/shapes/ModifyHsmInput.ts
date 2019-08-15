import { Structure as _Structure_ } from "@aws-sdk/types";

export const ModifyHsmInput: _Structure_ = {
  type: "structure",
  required: ["HsmArn"],
  members: {
    HsmArn: {
      shape: {
        type: "string"
      },
      locationName: "HsmArn"
    },
    SubnetId: {
      shape: {
        type: "string"
      },
      locationName: "SubnetId"
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
    SyslogIp: {
      shape: {
        type: "string"
      },
      locationName: "SyslogIp"
    }
  }
};
