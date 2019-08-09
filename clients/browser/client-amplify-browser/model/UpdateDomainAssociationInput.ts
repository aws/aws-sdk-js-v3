import { _SubDomainSettings } from "./_SubDomainSettings";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateDomainAssociationInput: _Structure_ = {
  type: "structure",
  required: ["appId", "domainName", "subDomainSettings"],
  members: {
    appId: {
      shape: {
        type: "string",
        min: 1
      },
      location: "uri",
      locationName: "appId"
    },
    domainName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "domainName"
    },
    enableAutoSubDomain: {
      shape: {
        type: "boolean"
      }
    },
    subDomainSettings: {
      shape: _SubDomainSettings
    }
  }
};
