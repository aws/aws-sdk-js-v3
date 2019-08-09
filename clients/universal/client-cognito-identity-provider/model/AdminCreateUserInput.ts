import { _AttributeListType } from "./_AttributeListType";
import { _DeliveryMediumListType } from "./_DeliveryMediumListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminCreateUserInput: _Structure_ = {
  type: "structure",
  required: ["UserPoolId", "Username"],
  members: {
    UserPoolId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Username: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    UserAttributes: {
      shape: _AttributeListType
    },
    ValidationData: {
      shape: _AttributeListType
    },
    TemporaryPassword: {
      shape: {
        type: "string",
        sensitive: true,
        min: 6
      }
    },
    ForceAliasCreation: {
      shape: {
        type: "boolean"
      }
    },
    MessageAction: {
      shape: {
        type: "string"
      }
    },
    DesiredDeliveryMediums: {
      shape: _DeliveryMediumListType
    }
  }
};
