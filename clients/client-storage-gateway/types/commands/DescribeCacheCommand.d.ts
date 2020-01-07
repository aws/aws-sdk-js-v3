import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeCacheInput, DescribeCacheOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCacheCommandInput = DescribeCacheInput;
export declare type DescribeCacheCommandOutput = DescribeCacheOutput & __MetadataBearer;
export declare class DescribeCacheCommand extends $Command<DescribeCacheCommandInput, DescribeCacheCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeCacheCommandInput;
    constructor(input: DescribeCacheCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCacheCommandInput, DescribeCacheCommandOutput>;
    private serialize;
    private deserialize;
}
