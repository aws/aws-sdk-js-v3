import { _AccessLogSettings } from "./_AccessLogSettings";
import { _RouteSettings } from "./_RouteSettings";
import { _RouteSettingsMap } from "./_RouteSettingsMap";
import { _StageVariablesMap } from "./_StageVariablesMap";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Stage: _Structure_ = {
  type: "structure",
  required: ["StageName"],
  members: {
    AccessLogSettings: {
      shape: _AccessLogSettings,
      locationName: "accessLogSettings"
    },
    ClientCertificateId: {
      shape: {
        type: "string"
      },
      locationName: "clientCertificateId"
    },
    CreatedDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "createdDate"
    },
    DefaultRouteSettings: {
      shape: _RouteSettings,
      locationName: "defaultRouteSettings"
    },
    DeploymentId: {
      shape: {
        type: "string"
      },
      locationName: "deploymentId"
    },
    Description: {
      shape: {
        type: "string"
      },
      locationName: "description"
    },
    LastUpdatedDate: {
      shape: {
        type: "timestamp",
        timestampFormat: "iso8601"
      },
      locationName: "lastUpdatedDate"
    },
    RouteSettings: {
      shape: _RouteSettingsMap,
      locationName: "routeSettings"
    },
    StageName: {
      shape: {
        type: "string"
      },
      locationName: "stageName"
    },
    StageVariables: {
      shape: _StageVariablesMap,
      locationName: "stageVariables"
    },
    Tags: {
      shape: _Tags,
      locationName: "tags"
    }
  }
};
