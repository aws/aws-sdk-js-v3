import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["Description", "Name", "Author"],
  members: {
    Author: {
      shape: {
        type: "string"
      },
      locationName: "author"
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
    LicenseBody: {
      shape: {
        type: "string"
      },
      locationName: "licenseBody"
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
    ReadmeBody: {
      shape: {
        type: "string"
      },
      locationName: "readmeBody"
    },
    ReadmeUrl: {
      shape: {
        type: "string"
      },
      locationName: "readmeUrl"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      locationName: "semanticVersion"
    },
    SourceCodeArchiveUrl: {
      shape: {
        type: "string"
      },
      locationName: "sourceCodeArchiveUrl"
    },
    SourceCodeUrl: {
      shape: {
        type: "string"
      },
      locationName: "sourceCodeUrl"
    },
    SpdxLicenseId: {
      shape: {
        type: "string"
      },
      locationName: "spdxLicenseId"
    },
    TemplateBody: {
      shape: {
        type: "string"
      },
      locationName: "templateBody"
    },
    TemplateUrl: {
      shape: {
        type: "string"
      },
      locationName: "templateUrl"
    }
  }
};
