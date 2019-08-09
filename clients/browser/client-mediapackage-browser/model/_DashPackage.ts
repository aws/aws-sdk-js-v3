import { _AdTriggers } from "./_AdTriggers";
import { _DashEncryption } from "./_DashEncryption";
import { ___listOf__PeriodTriggersElement } from "./___listOf__PeriodTriggersElement";
import { _StreamSelection } from "./_StreamSelection";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DashPackage: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AdTriggers: {
      shape: _AdTriggers,
      locationName: "adTriggers"
    },
    AdsOnDeliveryRestrictions: {
      shape: {
        type: "string"
      },
      locationName: "adsOnDeliveryRestrictions"
    },
    Encryption: {
      shape: _DashEncryption,
      locationName: "encryption"
    },
    ManifestLayout: {
      shape: {
        type: "string"
      },
      locationName: "manifestLayout"
    },
    ManifestWindowSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "manifestWindowSeconds"
    },
    MinBufferTimeSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "minBufferTimeSeconds"
    },
    MinUpdatePeriodSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "minUpdatePeriodSeconds"
    },
    PeriodTriggers: {
      shape: ___listOf__PeriodTriggersElement,
      locationName: "periodTriggers"
    },
    Profile: {
      shape: {
        type: "string"
      },
      locationName: "profile"
    },
    SegmentDurationSeconds: {
      shape: {
        type: "integer"
      },
      locationName: "segmentDurationSeconds"
    },
    SegmentTemplateFormat: {
      shape: {
        type: "string"
      },
      locationName: "segmentTemplateFormat"
    },
    StreamSelection: {
      shape: _StreamSelection,
      locationName: "streamSelection"
    },
    SuggestedPresentationDelaySeconds: {
      shape: {
        type: "integer"
      },
      locationName: "suggestedPresentationDelaySeconds"
    }
  }
};
