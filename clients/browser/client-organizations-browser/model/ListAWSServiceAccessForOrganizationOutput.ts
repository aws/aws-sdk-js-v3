import { _EnabledServicePrincipals } from "./_EnabledServicePrincipals";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAWSServiceAccessForOrganizationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnabledServicePrincipals: {
      shape: _EnabledServicePrincipals
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
