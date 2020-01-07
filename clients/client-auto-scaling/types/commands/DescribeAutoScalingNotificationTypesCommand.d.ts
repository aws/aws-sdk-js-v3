import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAutoScalingNotificationTypesAnswer } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAutoScalingNotificationTypesCommandInput = {};
export declare type DescribeAutoScalingNotificationTypesCommandOutput = DescribeAutoScalingNotificationTypesAnswer & __MetadataBearer;
export declare class DescribeAutoScalingNotificationTypesCommand extends $Command<DescribeAutoScalingNotificationTypesCommandInput, DescribeAutoScalingNotificationTypesCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeAutoScalingNotificationTypesCommandInput;
    constructor(input: DescribeAutoScalingNotificationTypesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutoScalingNotificationTypesCommandInput, DescribeAutoScalingNotificationTypesCommandOutput>;
    private serialize;
    private deserialize;
}
