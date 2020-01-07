import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeScheduledActionsMessage, ScheduledActionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeScheduledActionsCommandInput = DescribeScheduledActionsMessage;
export declare type DescribeScheduledActionsCommandOutput = ScheduledActionsMessage & __MetadataBearer;
export declare class DescribeScheduledActionsCommand extends $Command<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeScheduledActionsCommandInput;
    constructor(input: DescribeScheduledActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeScheduledActionsCommandInput, DescribeScheduledActionsCommandOutput>;
    private serialize;
    private deserialize;
}
