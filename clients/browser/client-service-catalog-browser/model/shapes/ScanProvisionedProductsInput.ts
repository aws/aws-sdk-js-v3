import { _AccessLevelFilter } from "./_AccessLevelFilter";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ScanProvisionedProductsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AcceptLanguage: {
      shape: {
        type: "string"
      }
    },
    AccessLevelFilter: {
      shape: _AccessLevelFilter
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
    }
  }
};
