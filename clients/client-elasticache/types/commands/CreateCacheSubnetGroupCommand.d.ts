import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheSubnetGroupMessage, CreateCacheSubnetGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCacheSubnetGroupCommandInput = CreateCacheSubnetGroupMessage;
export declare type CreateCacheSubnetGroupCommandOutput = CreateCacheSubnetGroupResult & __MetadataBearer;
export declare class CreateCacheSubnetGroupCommand extends $Command<CreateCacheSubnetGroupCommandInput, CreateCacheSubnetGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateCacheSubnetGroupCommandInput;
    constructor(input: CreateCacheSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCacheSubnetGroupCommandInput, CreateCacheSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
