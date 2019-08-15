import { _StringList } from "./_StringList";
import { _TagsMap } from "./_TagsMap";
import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ComputeResource: _Structure_ = {
  type: "structure",
  required: [
    "type",
    "minvCpus",
    "maxvCpus",
    "instanceTypes",
    "subnets",
    "instanceRole"
  ],
  members: {
    type: {
      shape: {
        type: "string"
      }
    },
    minvCpus: {
      shape: {
        type: "integer"
      }
    },
    maxvCpus: {
      shape: {
        type: "integer"
      }
    },
    desiredvCpus: {
      shape: {
        type: "integer"
      }
    },
    instanceTypes: {
      shape: _StringList
    },
    imageId: {
      shape: {
        type: "string"
      }
    },
    subnets: {
      shape: _StringList
    },
    securityGroupIds: {
      shape: _StringList
    },
    ec2KeyPair: {
      shape: {
        type: "string"
      }
    },
    instanceRole: {
      shape: {
        type: "string"
      }
    },
    tags: {
      shape: _TagsMap
    },
    placementGroup: {
      shape: {
        type: "string"
      }
    },
    bidPercentage: {
      shape: {
        type: "integer"
      }
    },
    spotIamFleetRole: {
      shape: {
        type: "string"
      }
    },
    launchTemplate: {
      shape: _LaunchTemplateSpecification
    }
  }
};
