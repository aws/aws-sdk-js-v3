import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupNameMessage, ModifyCacheParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyCacheParameterGroupCommandInput = ModifyCacheParameterGroupMessage;
export declare type ModifyCacheParameterGroupCommandOutput = CacheParameterGroupNameMessage & __MetadataBearer;
export declare class ModifyCacheParameterGroupCommand extends $Command<ModifyCacheParameterGroupCommandInput, ModifyCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ModifyCacheParameterGroupCommandInput;
    constructor(input: ModifyCacheParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyCacheParameterGroupCommandInput, ModifyCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
