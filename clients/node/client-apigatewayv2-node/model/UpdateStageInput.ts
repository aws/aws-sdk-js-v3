import { _AccessLogSettings } from "./_AccessLogSettings";
import { _RouteSettings } from "./_RouteSettings";
import { _RouteSettingsMap } from "./_RouteSettingsMap";
import { _StageVariablesMap } from "./_StageVariablesMap";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStageInput: _Structure_ = {
  type: "structure",
  required: ["StageName", "ApiId"],
  members: {
    AccessLogSettings: {
      shape: _AccessLogSettings,
      locationName: "accessLogSettings"
    },
    ApiId: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "apiId"
    },
    ClientCertificateId: {
      shape: {
        type: "string"
      },
      locationName: "clientCertificateId"
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
    RouteSettings: {
      shape: _RouteSettingsMap,
      locationName: "routeSettings"
    },
    StageName: {
      shape: {
        type: "string"
      },
      location: "uri",
      locationName: "stageName"
    },
    StageVariables: {
      shape: _StageVariablesMap,
      locationName: "stageVariables"
    }
  }
};
