import { _S3Action } from "./_S3Action";
import { _BounceAction } from "./_BounceAction";
import { _WorkmailAction } from "./_WorkmailAction";
import { _LambdaAction } from "./_LambdaAction";
import { _StopAction } from "./_StopAction";
import { _AddHeaderAction } from "./_AddHeaderAction";
import { _SNSAction } from "./_SNSAction";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ReceiptAction: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    S3Action: {
      shape: _S3Action
    },
    BounceAction: {
      shape: _BounceAction
    },
    WorkmailAction: {
      shape: _WorkmailAction
    },
    LambdaAction: {
      shape: _LambdaAction
    },
    StopAction: {
      shape: _StopAction
    },
    AddHeaderAction: {
      shape: _AddHeaderAction
    },
    SNSAction: {
      shape: _SNSAction
    }
  }
};
