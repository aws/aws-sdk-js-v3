import { _FailedServiceActionAssociations } from "./_FailedServiceActionAssociations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDisassociateServiceActionFromProvisioningArtifactOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    FailedServiceActionAssociations: {
      shape: _FailedServiceActionAssociations
    }
  }
};
