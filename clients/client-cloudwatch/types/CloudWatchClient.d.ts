import { DeleteAlarmsCommandInput, DeleteAlarmsCommandOutput } from "./commands/DeleteAlarmsCommand";
import { DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput } from "./commands/DeleteAnomalyDetectorCommand";
import { DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput } from "./commands/DeleteDashboardsCommand";
import { DeleteInsightRulesCommandInput, DeleteInsightRulesCommandOutput } from "./commands/DeleteInsightRulesCommand";
import { DescribeAlarmHistoryCommandInput, DescribeAlarmHistoryCommandOutput } from "./commands/DescribeAlarmHistoryCommand";
import { DescribeAlarmsCommandInput, DescribeAlarmsCommandOutput } from "./commands/DescribeAlarmsCommand";
import { DescribeAlarmsForMetricCommandInput, DescribeAlarmsForMetricCommandOutput } from "./commands/DescribeAlarmsForMetricCommand";
import { DescribeAnomalyDetectorsCommandInput, DescribeAnomalyDetectorsCommandOutput } from "./commands/DescribeAnomalyDetectorsCommand";
import { DescribeInsightRulesCommandInput, DescribeInsightRulesCommandOutput } from "./commands/DescribeInsightRulesCommand";
import { DisableAlarmActionsCommandInput, DisableAlarmActionsCommandOutput } from "./commands/DisableAlarmActionsCommand";
import { DisableInsightRulesCommandInput, DisableInsightRulesCommandOutput } from "./commands/DisableInsightRulesCommand";
import { EnableAlarmActionsCommandInput, EnableAlarmActionsCommandOutput } from "./commands/EnableAlarmActionsCommand";
import { EnableInsightRulesCommandInput, EnableInsightRulesCommandOutput } from "./commands/EnableInsightRulesCommand";
import { GetDashboardCommandInput, GetDashboardCommandOutput } from "./commands/GetDashboardCommand";
import { GetInsightRuleReportCommandInput, GetInsightRuleReportCommandOutput } from "./commands/GetInsightRuleReportCommand";
import { GetMetricDataCommandInput, GetMetricDataCommandOutput } from "./commands/GetMetricDataCommand";
import { GetMetricStatisticsCommandInput, GetMetricStatisticsCommandOutput } from "./commands/GetMetricStatisticsCommand";
import { GetMetricWidgetImageCommandInput, GetMetricWidgetImageCommandOutput } from "./commands/GetMetricWidgetImageCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListMetricsCommandInput, ListMetricsCommandOutput } from "./commands/ListMetricsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput } from "./commands/PutAnomalyDetectorCommand";
import { PutDashboardCommandInput, PutDashboardCommandOutput } from "./commands/PutDashboardCommand";
import { PutInsightRuleCommandInput, PutInsightRuleCommandOutput } from "./commands/PutInsightRuleCommand";
import { PutMetricAlarmCommandInput, PutMetricAlarmCommandOutput } from "./commands/PutMetricAlarmCommand";
import { PutMetricDataCommandInput, PutMetricDataCommandOutput } from "./commands/PutMetricDataCommand";
import { SetAlarmStateCommandInput, SetAlarmStateCommandOutput } from "./commands/SetAlarmStateCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { EndpointsInputConfig, EndpointsResolvedConfig, RegionInputConfig, RegionResolvedConfig } from "@aws-sdk/config-resolver";
import { HostHeaderInputConfig, HostHeaderResolvedConfig } from "@aws-sdk/middleware-host-header";
import { RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import { AwsAuthInputConfig, AwsAuthResolvedConfig } from "@aws-sdk/middleware-signing";
import { UserAgentInputConfig, UserAgentResolvedConfig } from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import { Client as __Client, SmithyConfiguration as __SmithyConfiguration, SmithyResolvedConfiguration as __SmithyResolvedConfiguration } from "@aws-sdk/smithy-client";
import { RegionInfoProvider, Credentials as __Credentials, Decoder as __Decoder, Encoder as __Encoder, HashConstructor as __HashConstructor, HttpHandlerOptions as __HttpHandlerOptions, Provider as __Provider, StreamCollector as __StreamCollector, UrlParser as __UrlParser } from "@aws-sdk/types";
export declare type ServiceInputTypes = DeleteAlarmsCommandInput | DeleteAnomalyDetectorCommandInput | DeleteDashboardsCommandInput | DeleteInsightRulesCommandInput | DescribeAlarmHistoryCommandInput | DescribeAlarmsCommandInput | DescribeAlarmsForMetricCommandInput | DescribeAnomalyDetectorsCommandInput | DescribeInsightRulesCommandInput | DisableAlarmActionsCommandInput | DisableInsightRulesCommandInput | EnableAlarmActionsCommandInput | EnableInsightRulesCommandInput | GetDashboardCommandInput | GetInsightRuleReportCommandInput | GetMetricDataCommandInput | GetMetricStatisticsCommandInput | GetMetricWidgetImageCommandInput | ListDashboardsCommandInput | ListMetricsCommandInput | ListTagsForResourceCommandInput | PutAnomalyDetectorCommandInput | PutDashboardCommandInput | PutInsightRuleCommandInput | PutMetricAlarmCommandInput | PutMetricDataCommandInput | SetAlarmStateCommandInput | TagResourceCommandInput | UntagResourceCommandInput;
export declare type ServiceOutputTypes = DeleteAlarmsCommandOutput | DeleteAnomalyDetectorCommandOutput | DeleteDashboardsCommandOutput | DeleteInsightRulesCommandOutput | DescribeAlarmHistoryCommandOutput | DescribeAlarmsCommandOutput | DescribeAlarmsForMetricCommandOutput | DescribeAnomalyDetectorsCommandOutput | DescribeInsightRulesCommandOutput | DisableAlarmActionsCommandOutput | DisableInsightRulesCommandOutput | EnableAlarmActionsCommandOutput | EnableInsightRulesCommandOutput | GetDashboardCommandOutput | GetInsightRuleReportCommandOutput | GetMetricDataCommandOutput | GetMetricStatisticsCommandOutput | GetMetricWidgetImageCommandOutput | ListDashboardsCommandOutput | ListMetricsCommandOutput | ListTagsForResourceCommandOutput | PutAnomalyDetectorCommandOutput | PutDashboardCommandOutput | PutInsightRuleCommandOutput | PutMetricAlarmCommandOutput | PutMetricDataCommandOutput | SetAlarmStateCommandOutput | TagResourceCommandOutput | UntagResourceCommandOutput;
export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
    /**
     * The HTTP handler to use. Fetch in browser and Https in Nodejs.
     */
    requestHandler?: __HttpHandler;
    /**
     * A constructor for a class implementing the @aws-sdk/types.Hash interface
     * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
     */
    sha256?: __HashConstructor;
    /**
     * The function that will be used to convert strings into HTTP endpoints.
     */
    urlParser?: __UrlParser;
    /**
     * A function that can calculate the length of a request body.
     */
    bodyLengthChecker?: (body: any) => number | undefined;
    /**
     * A function that converts a stream into an array of bytes.
     */
    streamCollector?: __StreamCollector;
    /**
     * The function that will be used to convert a base64-encoded string to a byte array
     */
    base64Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a base64-encoded string
     */
    base64Encoder?: __Encoder;
    /**
     * The function that will be used to convert a UTF8-encoded string to a byte array
     */
    utf8Decoder?: __Decoder;
    /**
     * The function that will be used to convert binary data to a UTF-8 encoded string
     */
    utf8Encoder?: __Encoder;
    /**
     * The string that will be used to populate default value in 'User-Agent' header
     */
    defaultUserAgent?: string;
    /**
     * The runtime environment
     */
    runtime?: string;
    /**
     * Disable dyanamically changing the endpoint of the client based on the hostPrefix
     * trait of an operation.
     */
    disableHostPrefix?: boolean;
    /**
     * The service name with which to sign requests.
     */
    signingName?: string;
    /**
     * Default credentials provider; Not available in browser runtime
     */
    credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;
    /**
     * Provider function that return promise of a region string
     */
    regionDefaultProvider?: (input: any) => __Provider<string>;
    /**
     * Fetch related hostname, signing name or signing region with given region.
     */
    regionInfoProvider?: RegionInfoProvider;
}
export declare type CloudWatchClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> & ClientDefaults & RegionInputConfig & EndpointsInputConfig & AwsAuthInputConfig & RetryInputConfig & UserAgentInputConfig & HostHeaderInputConfig;
export declare type CloudWatchClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> & Required<ClientDefaults> & RegionResolvedConfig & EndpointsResolvedConfig & AwsAuthResolvedConfig & RetryResolvedConfig & UserAgentResolvedConfig & HostHeaderResolvedConfig;
/**
 * <p>Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the
 * 			applications you run on AWS in real time. You can use CloudWatch to collect and track
 * 			metrics, which are the variables you want to measure for your resources and
 * 			applications.</p>
 *
 * 		       <p>CloudWatch alarms send notifications or automatically change the resources
 * 			you are monitoring based on rules that you define. For example, you can monitor the CPU
 * 			usage and disk reads and writes of your Amazon EC2
 * 			instances. Then, use this data to determine whether you should launch additional
 * 			instances to handle increased load. You can also use this data to stop under-used
 * 			instances to save money.</p>
 *
 * 		       <p>In addition to monitoring the built-in metrics that come with AWS, you can monitor
 * 			your own custom metrics. With CloudWatch, you gain system-wide visibility into resource
 * 			utilization, application performance, and operational health.</p>
 */
export declare class CloudWatchClient extends __Client<__HttpHandlerOptions, ServiceInputTypes, ServiceOutputTypes, CloudWatchClientResolvedConfig> {
    readonly config: CloudWatchClientResolvedConfig;
    constructor(configuration: CloudWatchClientConfig);
    destroy(): void;
}
