import { _MapOfListOf__string } from "./_MapOfListOf__string";
import { _EndpointDemographic } from "./_EndpointDemographic";
import { _EndpointLocation } from "./_EndpointLocation";
import { _MapOf__double } from "./_MapOf__double";
import { _EndpointUser } from "./_EndpointUser";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _EndpointResponse: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Address: {
      shape: {
        type: "string"
      }
    },
    ApplicationId: {
      shape: {
        type: "string"
      }
    },
    Attributes: {
      shape: _MapOfListOf__string
    },
    ChannelType: {
      shape: {
        type: "string"
      }
    },
    CohortId: {
      shape: {
        type: "string"
      }
    },
    CreationDate: {
      shape: {
        type: "string"
      }
    },
    Demographic: {
      shape: _EndpointDemographic
    },
    EffectiveDate: {
      shape: {
        type: "string"
      }
    },
    EndpointStatus: {
      shape: {
        type: "string"
      }
    },
    Id: {
      shape: {
        type: "string"
      }
    },
    Location: {
      shape: _EndpointLocation
    },
    Metrics: {
      shape: _MapOf__double
    },
    OptOut: {
      shape: {
        type: "string"
      }
    },
    RequestId: {
      shape: {
        type: "string"
      }
    },
    User: {
      shape: _EndpointUser
    }
  }
};
