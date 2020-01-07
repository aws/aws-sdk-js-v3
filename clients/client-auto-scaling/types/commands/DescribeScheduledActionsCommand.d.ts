import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeScheduledActionsType, ScheduledActionsType } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScheduledActionsCommandInput = DescribeScheduledActionsType;
export declare type DescribeScheduledActionsCommandOutput = ScheduledActionsType & __MetadataBearer;
export declare class DescribeScheduledActionsCommand extends $Command<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput, AutoScalingClientResolvedConfig> {
    readonly input: DescribeScheduledActionsCommandInput;
    constructor(input: DescribeScheduledActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AutoScalingClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput>;
    private serialize;
    private deserialize;
}
