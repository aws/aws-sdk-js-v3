import { _CustomerAgentInfo } from "./_CustomerAgentInfo";
import { _CustomerConnectorInfo } from "./_CustomerConnectorInfo";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetDiscoverySummaryOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    servers: {
      shape: {
        type: "integer"
      }
    },
    applications: {
      shape: {
        type: "integer"
      }
    },
    serversMappedToApplications: {
      shape: {
        type: "integer"
      }
    },
    serversMappedtoTags: {
      shape: {
        type: "integer"
      }
    },
    agentSummary: {
      shape: _CustomerAgentInfo
    },
    connectorSummary: {
      shape: _CustomerConnectorInfo
    }
  }
};
