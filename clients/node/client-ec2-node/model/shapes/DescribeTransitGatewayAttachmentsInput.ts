import { _TransitGatewayAttachmentIdStringList } from "./_TransitGatewayAttachmentIdStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTransitGatewayAttachmentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TransitGatewayAttachmentIds: {
      shape: _TransitGatewayAttachmentIdStringList
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
