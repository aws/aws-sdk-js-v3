import { ApplicationAutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ApplicationAutoScalingClient";
import { DescribeScheduledActionsRequest, DescribeScheduledActionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScheduledActionsCommandInput = DescribeScheduledActionsRequest;
export declare type DescribeScheduledActionsCommandOutput = DescribeScheduledActionsResponse & __MetadataBearer;
export declare class DescribeScheduledActionsCommand extends $Command<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput, ApplicationAutoScalingClientResolvedConfig> {
    readonly input: DescribeScheduledActionsCommandInput;
    constructor(input: DescribeScheduledActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ApplicationAutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput>;
    private serialize;
    private deserialize;
}
