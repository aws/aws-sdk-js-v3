import { ___listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12 } from "./___listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SpekeKeyProvider: _Structure_ = {
  type: "structure",
  required: [],
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
    SystemIds: {
      shape: ___listOf__stringPattern09aFAF809aFAF409aFAF409aFAF409aFAF12,
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
