import { _AccessLogSettings } from "./_AccessLogSettings";
import { _RouteSettings } from "./_RouteSettings";
import { _RouteSettingsMap } from "./_RouteSettingsMap";
import { _StageVariablesMap } from "./_StageVariablesMap";
import { _Tags } from "./_Tags";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStageInput: _Structure_ = {
  type: "structure",
  required: ["ApiId", "StageName"],
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
