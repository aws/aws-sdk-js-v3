import { _CustomDomainConfigType } from "./_CustomDomainConfigType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DomainDescriptionType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AWSAccountId: {
      shape: {
        type: "string"
      }
    },
    Domain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    S3Bucket: {
      shape: {
        type: "string",
        min: 3
      }
    },
    CloudFrontDistribution: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CustomDomainConfig: {
      shape: _CustomDomainConfigType
    }
  }
};
