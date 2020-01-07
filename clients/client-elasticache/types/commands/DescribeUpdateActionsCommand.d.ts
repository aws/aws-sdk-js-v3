import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeUpdateActionsMessage, UpdateActionsMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUpdateActionsCommandInput = DescribeUpdateActionsMessage;
export declare type DescribeUpdateActionsCommandOutput = UpdateActionsMessage & __MetadataBearer;
export declare class DescribeUpdateActionsCommand extends $Command<DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeUpdateActionsCommandInput;
    constructor(input: DescribeUpdateActionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUpdateActionsCommandInput, DescribeUpdateActionsCommandOutput>;
    private serialize;
    private deserialize;
}
