import { _EnvironmentVariables } from "./_EnvironmentVariables";
import { _RegistryCredential } from "./_RegistryCredential";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ProjectEnvironment: _Structure_ = {
  type: "structure",
  required: ["type", "image", "computeType"],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    image: {
      shape: {
        type: "string",
        min: 1
      }
    },
    computeType: {
      shape: {
        type: "string"
      }
    },
    environmentVariables: {
      shape: _EnvironmentVariables
    },
    privilegedMode: {
      shape: {
        type: "boolean"
      }
    },
    certificate: {
      shape: {
        type: "string"
      }
    },
    registryCredential: {
      shape: _RegistryCredential
    },
    imagePullCredentialsType: {
      shape: {
        type: "string"
      }
    }
  }
};
