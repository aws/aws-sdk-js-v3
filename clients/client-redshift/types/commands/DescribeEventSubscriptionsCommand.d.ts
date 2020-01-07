import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventSubscriptionsCommandInput = DescribeEventSubscriptionsMessage;
export declare type DescribeEventSubscriptionsCommandOutput = EventSubscriptionsMessage & __MetadataBearer;
export declare class DescribeEventSubscriptionsCommand extends $Command<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeEventSubscriptionsCommandInput;
    constructor(input: DescribeEventSubscriptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventSubscriptionsCommandInput, DescribeEventSubscriptionsCommandOutput>;
    private serialize;
    private deserialize;
}
