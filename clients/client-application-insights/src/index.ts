// smithy-typescript generated code
/* eslint-disable */
/**
 * <fullname>Amazon CloudWatch Application Insights</fullname>
 *          <p> Amazon CloudWatch Application Insights is a service that helps you detect common
 *          problems with your applications. It enables you to pinpoint the source of issues in your
 *          applications (built with technologies such as Microsoft IIS, .NET, and Microsoft SQL
 *          Server), by providing key insights into detected problems.</p>
 *          <p>After you onboard your application, CloudWatch Application Insights identifies,
 *          recommends, and sets up metrics and logs. It continuously analyzes and correlates your
 *          metrics and logs for unusual behavior to surface actionable problems with your application.
 *          For example, if your application is slow and unresponsive and leading to HTTP 500 errors in
 *          your Application Load Balancer (ALB), Application Insights informs you that a memory
 *          pressure problem with your SQL Server database is occurring. It bases this analysis on
 *          impactful metrics and log errors. </p>
 *
 * @packageDocumentation
 */
export * from "./ApplicationInsightsClient";
export * from "./ApplicationInsights";
export { ClientInputEndpointParameters } from "./endpoint/EndpointParameters";
export * from "./commands";
export * from "./pagination";
export * from "./models";

export { ApplicationInsightsServiceException } from "./models/ApplicationInsightsServiceException";
