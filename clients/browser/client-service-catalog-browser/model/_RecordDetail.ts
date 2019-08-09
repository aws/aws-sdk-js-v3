import { _RecordErrors } from "./_RecordErrors";
import { _RecordTags } from "./_RecordTags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RecordDetail: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RecordId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisionedProductName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    CreatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    UpdatedTime: {
      shape: {
        type: "timestamp"
      }
    },
    ProvisionedProductType: {
      shape: {
        type: "string"
      }
    },
    RecordType: {
      shape: {
        type: "string"
      }
    },
    ProvisionedProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProductId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ProvisioningArtifactId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    PathId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RecordErrors: {
      shape: _RecordErrors
    },
    RecordTags: {
      shape: _RecordTags
    }
  }
};
