import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeAvailabilityMonitorTestInput, DescribeAvailabilityMonitorTestOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAvailabilityMonitorTestCommandInput = DescribeAvailabilityMonitorTestInput;
export declare type DescribeAvailabilityMonitorTestCommandOutput = DescribeAvailabilityMonitorTestOutput & __MetadataBearer;
export declare class DescribeAvailabilityMonitorTestCommand extends $Command<DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeAvailabilityMonitorTestCommandInput;
    constructor(input: DescribeAvailabilityMonitorTestCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailabilityMonitorTestCommandInput, DescribeAvailabilityMonitorTestCommandOutput>;
    private serialize;
    private deserialize;
}
