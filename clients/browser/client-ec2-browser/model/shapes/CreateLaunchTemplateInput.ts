import { _RequestLaunchTemplateData } from "./_RequestLaunchTemplateData";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLaunchTemplateInput: _Structure_ = {
  type: "structure",
  required: ["LaunchTemplateName", "LaunchTemplateData"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    ClientToken: {
      shape: {
        type: "string"
      }
    },
    LaunchTemplateName: {
      shape: {
        type: "string",
        min: 3
      }
    },
    VersionDescription: {
      shape: {
        type: "string"
      }
    },
    LaunchTemplateData: {
      shape: _RequestLaunchTemplateData
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    }
  }
};
