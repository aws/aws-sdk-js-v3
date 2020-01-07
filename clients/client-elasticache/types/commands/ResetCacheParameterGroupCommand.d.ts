import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CacheParameterGroupNameMessage, ResetCacheParameterGroupMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetCacheParameterGroupCommandInput = ResetCacheParameterGroupMessage;
export declare type ResetCacheParameterGroupCommandOutput = CacheParameterGroupNameMessage & __MetadataBearer;
export declare class ResetCacheParameterGroupCommand extends $Command<ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: ResetCacheParameterGroupCommandInput;
    constructor(input: ResetCacheParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetCacheParameterGroupCommandInput, ResetCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
