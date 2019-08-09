import { ___listOfParameterDefinition } from "./___listOfParameterDefinition";
import { ___listOfCapability } from "./___listOfCapability";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateApplicationVersionOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      locationName: "applicationId"
    },
    CreationTime: {
      shape: {
        type: "string"
      },
      locationName: "creationTime"
    },
    ParameterDefinitions: {
      shape: ___listOfParameterDefinition,
      locationName: "parameterDefinitions"
    },
    RequiredCapabilities: {
      shape: ___listOfCapability,
      locationName: "requiredCapabilities"
    },
    ResourcesSupported: {
      shape: {
        type: "boolean"
      },
      locationName: "resourcesSupported"
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
    TemplateUrl: {
      shape: {
        type: "string"
      },
      locationName: "templateUrl"
    }
  }
};
