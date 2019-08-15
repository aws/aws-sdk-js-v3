import { _ProvisioningArtifactParameters } from "./_ProvisioningArtifactParameters";
import { _ConstraintSummaries } from "./_ConstraintSummaries";
import { _UsageInstructions } from "./_UsageInstructions";
import { _TagOptionSummaries } from "./_TagOptionSummaries";
import { _ProvisioningArtifactPreferences } from "./_ProvisioningArtifactPreferences";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeProvisioningParametersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ProvisioningArtifactParameters: {
      shape: _ProvisioningArtifactParameters
    },
    ConstraintSummaries: {
      shape: _ConstraintSummaries
    },
    UsageInstructions: {
      shape: _UsageInstructions
    },
    TagOptions: {
      shape: _TagOptionSummaries
    },
    ProvisioningArtifactPreferences: {
      shape: _ProvisioningArtifactPreferences
    }
  }
};
