import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModelPackageContainerDefinition: _Structure_ = {
  type: "structure",
  required: ["Image"],
  members: {
    ContainerHostname: {
      shape: {
        type: "string"
      }
    },
    Image: {
      shape: {
        type: "string"
      }
    },
    ImageDigest: {
      shape: {
        type: "string"
      }
    },
    ModelDataUrl: {
      shape: {
        type: "string"
      }
    },
    ProductId: {
      shape: {
        type: "string"
      }
    }
  }
};
