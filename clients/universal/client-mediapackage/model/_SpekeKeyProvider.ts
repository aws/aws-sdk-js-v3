import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpekeKeyProvider: _Structure_ = {
  type: "structure",
  required: ["Url", "ResourceId", "RoleArn", "SystemIds"],
  members: {
    CertificateArn: {
      shape: {
        type: "string"
      },
      locationName: "certificateArn"
    },
    ResourceId: {
      shape: {
        type: "string"
      },
      locationName: "resourceId"
    },
    RoleArn: {
      shape: {
        type: "string"
      },
      locationName: "roleArn"
    },
    SystemIds: {
      shape: ___listOf__string,
      locationName: "systemIds"
    },
    Url: {
      shape: {
        type: "string"
      },
      locationName: "url"
    }
  }
};
