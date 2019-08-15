import { ___listOf__string } from "./___listOf__string";
import { ___listOfParameterValue } from "./___listOfParameterValue";
import { _RollbackConfiguration } from "./_RollbackConfiguration";
import { ___listOfTag } from "./___listOfTag";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCloudFormationChangeSetInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "StackName"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "applicationId"
    },
    Capabilities: {
      shape: ___listOf__string,
      locationName: "capabilities"
    },
    ChangeSetName: {
      shape: {
        type: "string"
      },
      locationName: "changeSetName"
    },
    ClientToken: {
      shape: {
        type: "string"
      },
      locationName: "clientToken"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    NotificationArns: {
      shape: ___listOf__string,
      locationName: "notificationArns"
    },
    ParameterOverrides: {
      shape: ___listOfParameterValue,
      locationName: "parameterOverrides"
    },
    ResourceTypes: {
      shape: ___listOf__string,
      locationName: "resourceTypes"
    },
    RollbackConfiguration: {
      shape: _RollbackConfiguration,
      locationName: "rollbackConfiguration"
    },
    SemanticVersion: {
      shape: {
        type: "string"
      },
      locationName: "semanticVersion"
    },
    StackName: {
      shape: {
        type: "string"
      },
      locationName: "stackName"
    },
    Tags: {
      shape: ___listOfTag,
      locationName: "tags"
    },
    TemplateId: {
      shape: {
        type: "string"
      },
      locationName: "templateId"
    }
  }
};
