import { ___listOf__string } from "./___listOf__string";
import { _Version } from "./_Version";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationOutput: _Structure_ = {
  type: "structure",
  required: [],
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
    LicenseUrl: {
      shape: {
        type: "string"
      },
      locationName: "licenseUrl"
    },
    Name: {
      shape: {
        type: "string"
      },
      locationName: "name"
    },
    ReadmeUrl: {
      shape: {
        type: "string"
      },
      locationName: "readmeUrl"
    },
    SpdxLicenseId: {
      shape: {
        type: "string"
      },
      locationName: "spdxLicenseId"
    },
    Version: {
      shape: _Version,
      locationName: "version"
    }
  }
};
