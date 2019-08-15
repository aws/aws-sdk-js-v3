import { _TransitGatewayRequestOptions } from "./_TransitGatewayRequestOptions";
import { _TagSpecificationList } from "./_TagSpecificationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTransitGatewayInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Description: {
      shape: {
        type: "string"
      }
    },
    Options: {
      shape: _TransitGatewayRequestOptions
    },
    TagSpecifications: {
      shape: _TagSpecificationList,
      locationName: "TagSpecification"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    }
  }
};
