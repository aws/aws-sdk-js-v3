import { _VpcCidrBlockState } from "./_VpcCidrBlockState";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _VpcCidrBlockAssociation: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationId: {
      shape: {
        type: "string"
      },
      locationName: "associationId"
    },
    CidrBlock: {
      shape: {
        type: "string"
      },
      locationName: "cidrBlock"
    },
    CidrBlockState: {
      shape: _VpcCidrBlockState,
      locationName: "cidrBlockState"
    }
  }
};
