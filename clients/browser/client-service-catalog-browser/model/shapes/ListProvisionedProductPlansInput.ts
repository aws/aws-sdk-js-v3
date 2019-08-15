import { _AccessLevelFilter } from "./_AccessLevelFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListProvisionedProductPlansInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    ProvisionProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PageSize: {
      shape: {
        type: "integer"
      }
    },
    PageToken: {
      shape: {
        type: "string"
      }
    },
    AccessLevelFilter: {
      shape: _AccessLevelFilter
    }
  }
};
