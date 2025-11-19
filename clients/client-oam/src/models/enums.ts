// smithy-typescript generated code
/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_APPLICATIONINSIGHTS_APPLICATION: "AWS::ApplicationInsights::Application",
  AWS_APPLICATION_SIGNALS_SERVICE: "AWS::ApplicationSignals::Service",
  AWS_APPLICATION_SIGNALS_SLO: "AWS::ApplicationSignals::ServiceLevelObjective",
  AWS_CLOUDWATCH_METRIC: "AWS::CloudWatch::Metric",
  AWS_INTERNETMONITOR_MONITOR: "AWS::InternetMonitor::Monitor",
  AWS_LOGS_LOGGROUP: "AWS::Logs::LogGroup",
  AWS_XRAY_TRACE: "AWS::XRay::Trace",
} as const;
/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];
