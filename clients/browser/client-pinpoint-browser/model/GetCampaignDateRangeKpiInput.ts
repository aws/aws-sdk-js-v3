import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCampaignDateRangeKpiInput: _Structure_ = {
  type: "structure",
  required: ["ApplicationId", "KpiName", "CampaignId"],
  members: {
    ApplicationId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "application-id"
    },
    CampaignId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "campaign-id"
    },
    EndTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      location: "querystring",
      locationName: "end-time"
    },
    KpiName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "kpi-name"
    },
    NextToken: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "next-token"
    },
    PageSize: {
      shape: {
        type: "string"
      },
      location: "querystring",
      locationName: "page-size"
    },
    StartTime: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      location: "querystring",
      locationName: "start-time"
    }
  }
};
