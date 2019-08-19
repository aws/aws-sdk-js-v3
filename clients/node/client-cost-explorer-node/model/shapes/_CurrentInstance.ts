import { _TagValuesList } from "./_TagValuesList";
import { _ResourceDetails } from "./_ResourceDetails";
import { _ResourceUtilization } from "./_ResourceUtilization";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CurrentInstance: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ResourceId: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagValuesList
    },
    ResourceDetails: {
      shape: _ResourceDetails
    },
    ResourceUtilization: {
      shape: _ResourceUtilization
    },
    ReservationCoveredHoursInLookbackPeriod: {
      shape: {
        type: "string"
      }
    },
    OnDemandHoursInLookbackPeriod: {
      shape: {
        type: "string"
      }
    },
    TotalRunningHoursInLookbackPeriod: {
      shape: {
        type: "string"
      }
    },
    MonthlyCost: {
      shape: {
        type: "string"
      }
    },
    CurrencyCode: {
      shape: {
        type: "string"
      }
    }
  }
};
