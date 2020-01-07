import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { ModifyCacheSubnetGroupMessage, ModifyCacheSubnetGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyCacheSubnetGroupCommandInput = ModifyCacheSubnetGroupMessage;
export declare type ModifyCacheSubnetGroupCommandOutput = ModifyCacheSubnetGroupResult & __MetadataBearer;
export declare class ModifyCacheSubnetGroupCommand extends $Command<ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyCacheSubnetGroupCommandInput;
    constructor(input: ModifyCacheSubnetGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCacheSubnetGroupCommandInput, ModifyCacheSubnetGroupCommandOutput>;
    private serialize;
    private deserialize;
}
