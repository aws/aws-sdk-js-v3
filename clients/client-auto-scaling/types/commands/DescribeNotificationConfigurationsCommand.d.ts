import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeNotificationConfigurationsAnswer, DescribeNotificationConfigurationsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeNotificationConfigurationsCommandInput = DescribeNotificationConfigurationsType;
export declare type DescribeNotificationConfigurationsCommandOutput = DescribeNotificationConfigurationsAnswer & __MetadataBearer;
export declare class DescribeNotificationConfigurationsCommand extends $Command<DescribeNotificationConfigurationsCommandInput, DescribeNotificationConfigurationsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeNotificationConfigurationsCommandInput;
    constructor(input: DescribeNotificationConfigurationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotificationConfigurationsCommandInput, DescribeNotificationConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
