import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDomainStatisticsReportInput: _Structure_ = {
  type: "structure",
  required: ["Domain", "StartDate", "EndDate"],
  members: {
    Domain: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "Domain"
    },
    StartDate: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "StartDate"
    },
    EndDate: {
      shape: {
        type: "timestamp"
      },
      location: "querystring",
      locationName: "EndDate"
    }
  }
};
