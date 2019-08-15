import { _Repository } from "./_Repository";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRepositoryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    repository: {
      shape: _Repository
    }
  }
};
