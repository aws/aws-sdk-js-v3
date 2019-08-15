import { _listOfButtons } from "./_listOfButtons";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _GenericAttachment: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    title: {
      shape: {
        type: "string",
        min: 1
      }
    },
    subTitle: {
      shape: {
        type: "string",
        min: 1
      }
    },
    attachmentLinkUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    imageUrl: {
      shape: {
        type: "string",
        min: 1
      }
    },
    buttons: {
      shape: _listOfButtons
    }
  }
};
