import { _PlatformProgrammingLanguages } from "./_PlatformProgrammingLanguages";
import { _PlatformFrameworks } from "./_PlatformFrameworks";
import { _CustomAmiList } from "./_CustomAmiList";
import { _SupportedTierList } from "./_SupportedTierList";
import { _SupportedAddonList } from "./_SupportedAddonList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _PlatformDescription: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlatformArn: {
      shape: {
        type: "string"
      }
    },
    PlatformOwner: {
      shape: {
        type: "string"
      }
    },
    PlatformName: {
      shape: {
        type: "string"
      }
    },
    PlatformVersion: {
      shape: {
        type: "string"
      }
    },
    SolutionStackName: {
      shape: {
        type: "string"
      }
    },
    PlatformStatus: {
      shape: {
        type: "string"
      }
    },
    DateCreated: {
      shape: {
        type: "timestamp"
      }
    },
    DateUpdated: {
      shape: {
        type: "timestamp"
      }
    },
    PlatformCategory: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    Maintainer: {
      shape: {
        type: "string"
      }
    },
    OperatingSystemName: {
      shape: {
        type: "string"
      }
    },
    OperatingSystemVersion: {
      shape: {
        type: "string"
      }
    },
    ProgrammingLanguages: {
      shape: _PlatformProgrammingLanguages
    },
    Frameworks: {
      shape: _PlatformFrameworks
    },
    CustomAmiList: {
      shape: _CustomAmiList
    },
    SupportedTierList: {
      shape: _SupportedTierList
    },
    SupportedAddonList: {
      shape: _SupportedAddonList
    }
  }
};
