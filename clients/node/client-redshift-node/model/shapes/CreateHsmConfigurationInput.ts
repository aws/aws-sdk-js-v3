import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateHsmConfigurationInput: _Structure_ = {
  type: "structure",
  required: [
    "HsmConfigurationIdentifier",
    "Description",
    "HsmIpAddress",
    "HsmPartitionName",
    "HsmPartitionPassword",
    "HsmServerPublicCertificate"
  ],
  members: {
    HsmConfigurationIdentifier: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    HsmIpAddress: {
      shape: {
        type: "string"
      }
    },
    HsmPartitionName: {
      shape: {
        type: "string"
      }
    },
    HsmPartitionPassword: {
      shape: {
        type: "string"
      }
    },
    HsmServerPublicCertificate: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
