import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProvisioningArtifactsForServiceActionInput: _Structure_ = {
  type: "structure",
  required: ["ServiceActionId"],
  members: {
    ServiceActionId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    },
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    }
  }
};
