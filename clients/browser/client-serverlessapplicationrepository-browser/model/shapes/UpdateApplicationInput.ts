import { ___listOf__string } from "./___listOf__string";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateApplicationInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "applicationId"
    },
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
    }
  }
};
