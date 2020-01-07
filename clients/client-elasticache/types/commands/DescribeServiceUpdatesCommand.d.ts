import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { DescribeServiceUpdatesMessage, ServiceUpdatesMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeServiceUpdatesCommandInput = DescribeServiceUpdatesMessage;
export declare type DescribeServiceUpdatesCommandOutput = ServiceUpdatesMessage & __MetadataBearer;
export declare class DescribeServiceUpdatesCommand extends $Command<DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: DescribeServiceUpdatesCommandInput;
    constructor(input: DescribeServiceUpdatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeServiceUpdatesCommandInput, DescribeServiceUpdatesCommandOutput>;
    private serialize;
    private deserialize;
}
