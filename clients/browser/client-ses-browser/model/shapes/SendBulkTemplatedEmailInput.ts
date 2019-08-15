import { _AddressList } from "./_AddressList";
import { _MessageTagList } from "./_MessageTagList";
import { _BulkEmailDestinationList } from "./_BulkEmailDestinationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SendBulkTemplatedEmailInput: _Structure_ = {
  type: "structure",
  required: ["Source", "Template", "Destinations"],
  members: {
    Source: {
      shape: {
        type: "string"
      }
    },
    SourceArn: {
      shape: {
        type: "string"
      }
    },
    ReplyToAddresses: {
      shape: _AddressList
    },
    ReturnPath: {
      shape: {
        type: "string"
      }
    },
    ReturnPathArn: {
      shape: {
        type: "string"
      }
    },
    ConfigurationSetName: {
      shape: {
        type: "string"
      }
    },
    DefaultTags: {
      shape: _MessageTagList
    },
    Template: {
      shape: {
        type: "string"
      }
    },
    TemplateArn: {
      shape: {
        type: "string"
      }
    },
    DefaultTemplateData: {
      shape: {
        type: "string"
      }
    },
    Destinations: {
      shape: _BulkEmailDestinationList
    }
  }
};
