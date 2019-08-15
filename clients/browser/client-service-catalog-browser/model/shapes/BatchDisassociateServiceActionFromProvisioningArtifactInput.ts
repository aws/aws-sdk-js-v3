import { _ServiceActionAssociations } from "./_ServiceActionAssociations";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const BatchDisassociateServiceActionFromProvisioningArtifactInput: _Structure_ = {
  type: "structure",
  required: ["ServiceActionAssociations"],
  members: {
    ServiceActionAssociations: {
      shape: _ServiceActionAssociations
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
