import { _ListOfTreatmentResource } from "./_ListOfTreatmentResource";
import { _CampaignState } from "./_CampaignState";
import { _CampaignHook } from "./_CampaignHook";
import { _CampaignLimits } from "./_CampaignLimits";
import { _MessageConfiguration } from "./_MessageConfiguration";
import { _Schedule } from "./_Schedule";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CampaignResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdditionalTreatments: {
      shape: _ListOfTreatmentResource
    },
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "string"
      }
    },
    DefaultState: {
      shape: _CampaignState
    },
    Description: {
      shape: {
        type: "string"
      }
    },
    HoldoutPercent: {
      shape: {
        type: "integer"
      }
    },
    Hook: {
      shape: _CampaignHook
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    IsPaused: {
      shape: {
        type: "boolean"
      }
    },
    LastModifiedDate: {
      shape: {
        type: "string"
      }
    },
    Limits: {
      shape: _CampaignLimits
    },
    MessageConfiguration: {
      shape: _MessageConfiguration
    },
    Name: {
      shape: {
        type: "string"
      }
    },
    Schedule: {
      shape: _Schedule
    },
    SegmentId: {
      shape: {
        type: "string"
      }
    },
    SegmentVersion: {
      shape: {
        type: "integer"
      }
    },
    State: {
      shape: _CampaignState
    },
    TreatmentDescription: {
      shape: {
        type: "string"
      }
    },
    TreatmentName: {
      shape: {
        type: "string"
      }
    },
    Version: {
      shape: {
        type: "integer"
      }
    }
  }
};
