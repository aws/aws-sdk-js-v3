import { _AssociationDescriptionList } from "./_AssociationDescriptionList";
import { _FailedCreateAssociationList } from "./_FailedCreateAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateAssociationBatchOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Successful: {
      shape: _AssociationDescriptionList
    },
    Failed: {
      shape: _FailedCreateAssociationList
    }
  }
};
