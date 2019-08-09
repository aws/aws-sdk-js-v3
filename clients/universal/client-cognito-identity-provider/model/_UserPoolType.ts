import { _UserPoolPolicyType } from "./_UserPoolPolicyType";
import { _LambdaConfigType } from "./_LambdaConfigType";
import { _SchemaAttributesListType } from "./_SchemaAttributesListType";
import { _VerifiedAttributesListType } from "./_VerifiedAttributesListType";
import { _AliasAttributesListType } from "./_AliasAttributesListType";
import { _UsernameAttributesListType } from "./_UsernameAttributesListType";
import { _VerificationMessageTemplateType } from "./_VerificationMessageTemplateType";
import { _DeviceConfigurationType } from "./_DeviceConfigurationType";
import { _EmailConfigurationType } from "./_EmailConfigurationType";
import { _SmsConfigurationType } from "./_SmsConfigurationType";
import { _UserPoolTagsType } from "./_UserPoolTagsType";
import { _AdminCreateUserConfigType } from "./_AdminCreateUserConfigType";
import { _UserPoolAddOnsType } from "./_UserPoolAddOnsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UserPoolType: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Policies: {
      shape: _UserPoolPolicyType
    },
    LambdaConfig: {
      shape: _LambdaConfigType
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "timestamp"
      }
    },
    CreationDate: {
      shape: {
        type: "timestamp"
      }
    },
    SchemaAttributes: {
      shape: _SchemaAttributesListType
    },
    AutoVerifiedAttributes: {
      shape: _VerifiedAttributesListType
    },
    AliasAttributes: {
      shape: _AliasAttributesListType
    },
    UsernameAttributes: {
      shape: _UsernameAttributesListType
    },
    SmsVerificationMessage: {
      shape: {
        type: "string",
        min: 6
      }
    },
    EmailVerificationMessage: {
      shape: {
        type: "string",
        min: 6
      }
    },
    EmailVerificationSubject: {
      shape: {
        type: "string",
        min: 1
      }
    },
    VerificationMessageTemplate: {
      shape: _VerificationMessageTemplateType
    },
    SmsAuthenticationMessage: {
      shape: {
        type: "string",
        min: 6
      }
    },
    MfaConfiguration: {
      shape: {
        type: "string"
      }
    },
    DeviceConfiguration: {
      shape: _DeviceConfigurationType
    },
    EstimatedNumberOfUsers: {
      shape: {
        type: "integer"
      }
    },
    EmailConfiguration: {
      shape: _EmailConfigurationType
    },
    SmsConfiguration: {
      shape: _SmsConfigurationType
    },
    UserPoolTags: {
      shape: _UserPoolTagsType
    },
    SmsConfigurationFailure: {
      shape: {
        type: "string"
      }
    },
    EmailConfigurationFailure: {
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
    CustomDomain: {
      shape: {
        type: "string",
        min: 1
      }
    },
    AdminCreateUserConfig: {
      shape: _AdminCreateUserConfigType
    },
    UserPoolAddOns: {
      shape: _UserPoolAddOnsType
    },
    Arn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
