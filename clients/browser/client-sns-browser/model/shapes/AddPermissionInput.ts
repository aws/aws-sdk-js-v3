import { _DelegatesList } from "./_DelegatesList";
import { _ActionsList } from "./_ActionsList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AddPermissionInput: _Structure_ = {
  type: "structure",
  required: ["TopicArn", "Label", "AWSAccountId", "ActionName"],
  members: {
    TopicArn: {
      shape: {
        type: "string"
      }
    },
    Label: {
      shape: {
        type: "string"
      }
    },
    AWSAccountId: {
      shape: _DelegatesList
    },
    ActionName: {
      shape: _ActionsList
    }
  }
};
