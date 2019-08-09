import { _StringList } from "./_StringList";
import { _ConsumedLicenseSummaryList } from "./_ConsumedLicenseSummaryList";
import { _ManagedResourceSummaryList } from "./_ManagedResourceSummaryList";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetLicenseConfigurationOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    LicenseConfigurationId: {
      shape: {
        type: "string"
      }
    },
    LicenseConfigurationArn: {
      shape: {
        type: "string"
      }
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    LicenseCountingType: {
      shape: {
        type: "string"
      }
    },
    LicenseRules: {
      shape: _StringList
    },
    LicenseCount: {
      shape: {
        type: "integer"
      }
    },
    LicenseCountHardLimit: {
      shape: {
        type: "boolean"
      }
    },
    ConsumedLicenses: {
      shape: {
        type: "integer"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    },
    OwnerAccountId: {
      shape: {
        type: "string"
      }
    },
    ConsumedLicenseSummaryList: {
      shape: _ConsumedLicenseSummaryList
    },
    ManagedResourceSummaryList: {
      shape: _ManagedResourceSummaryList
    },
    Tags: {
      shape: _TagList
    }
  }
};
