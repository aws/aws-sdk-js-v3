import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheParameterGroupMessage, CreateCacheParameterGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCacheParameterGroupCommandInput = CreateCacheParameterGroupMessage;
export declare type CreateCacheParameterGroupCommandOutput = CreateCacheParameterGroupResult & __MetadataBearer;
export declare class CreateCacheParameterGroupCommand extends $Command<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateCacheParameterGroupCommandInput;
    constructor(input: CreateCacheParameterGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCacheParameterGroupCommandInput, CreateCacheParameterGroupCommandOutput>;
    private serialize;
    private deserialize;
}
