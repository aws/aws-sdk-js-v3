import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ApplicationSummary: _Structure_ = {
  type: "structure",
  required: ["Description", "Author", "ApplicationId", "Name"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      locationName: "applicationId"
    },
    Author: {
      shape: {
        type: "string"
      },
      locationName: "author"
    },
    CreationTime: {
      shape: {
        type: "string"
      },
      locationName: "creationTime"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    HomePageUrl: {
      shape: {
        type: "string"
      },
      locationName: "homePageUrl"
    },
    Labels: {
      shape: ___listOf__string,
      locationName: "labels"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    SpdxLicenseId: {
      shape: {
        type: "string"
      },
      locationName: "spdxLicenseId"
    }
  }
};
