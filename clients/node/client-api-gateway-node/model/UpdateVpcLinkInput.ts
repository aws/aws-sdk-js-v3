import { _ListOfPatchOperation } from "./_ListOfPatchOperation";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateVpcLinkInput: _Structure_ = {
  type: "structure",
  required: ["vpcLinkId"],
  members: {
    vpcLinkId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "vpclink_id"
    },
    patchOperations: {
      shape: _ListOfPatchOperation
    }
  }
};
