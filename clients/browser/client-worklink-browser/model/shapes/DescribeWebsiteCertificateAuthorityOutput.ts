import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeWebsiteCertificateAuthorityOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Certificate: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    DisplayName: {
      shape: {
        type: "string"
      }
    }
  }
};
