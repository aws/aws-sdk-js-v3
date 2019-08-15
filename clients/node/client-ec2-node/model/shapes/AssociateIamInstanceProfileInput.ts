import { _IamInstanceProfileSpecification } from "./_IamInstanceProfileSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateIamInstanceProfileInput: _Structure_ = {
  type: "structure",
  required: ["IamInstanceProfile", "InstanceId"],
  members: {
    IamInstanceProfile: {
      shape: _IamInstanceProfileSpecification
    },
    InstanceId: {
      shape: {
        type: "string"
      }
    }
  }
};
