import { _UserPoolPolicyType } from "./_UserPoolPolicyType";
import { _LambdaConfigType } from "./_LambdaConfigType";
import { _VerifiedAttributesListType } from "./_VerifiedAttributesListType";
import { _AliasAttributesListType } from "./_AliasAttributesListType";
import { _UsernameAttributesListType } from "./_UsernameAttributesListType";
import { _VerificationMessageTemplateType } from "./_VerificationMessageTemplateType";
import { _DeviceConfigurationType } from "./_DeviceConfigurationType";
import { _EmailConfigurationType } from "./_EmailConfigurationType";
import { _SmsConfigurationType } from "./_SmsConfigurationType";
import { _UserPoolTagsType } from "./_UserPoolTagsType";
import { _AdminCreateUserConfigType } from "./_AdminCreateUserConfigType";
import { _SchemaAttributesListType } from "./_SchemaAttributesListType";
import { _UserPoolAddOnsType } from "./_UserPoolAddOnsType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateUserPoolInput: _Structure_ = {
  type: "structure",
  required: ["PoolName"],
  members: {
    PoolName: {
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
    EmailConfiguration: {
      shape: _EmailConfigurationType
    },
    SmsConfiguration: {
      shape: _SmsConfigurationType
    },
    UserPoolTags: {
      shape: _UserPoolTagsType
    },
    AdminCreateUserConfig: {
      shape: _AdminCreateUserConfigType
    },
    Schema: {
      shape: _SchemaAttributesListType
    },
    UserPoolAddOns: {
      shape: _UserPoolAddOnsType
    }
  }
};
