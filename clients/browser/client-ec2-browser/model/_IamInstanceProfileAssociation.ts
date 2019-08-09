import { _IamInstanceProfile } from "./_IamInstanceProfile";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _IamInstanceProfileAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
    InstanceId: {
      shape: {
        type: "string"
      },
      locationName: "instanceId"
    },
    IamInstanceProfile: {
      shape: _IamInstanceProfile,
      locationName: "iamInstanceProfile"
    },
    State: {
      shape: {
        type: "string"
      },
      locationName: "state"
    },
    Timestamp: {
      shape: {
        type: "timestamp"
      },
      locationName: "timestamp"
    }
  }
};
