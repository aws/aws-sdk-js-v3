import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RepositoryCredentials: _Structure_ = {
  type: "structure",
  required: ["credentialsParameter"],
  members: {
    credentialsParameter: {
      shape: {
        type: "string"
      }
    }
  }
};
