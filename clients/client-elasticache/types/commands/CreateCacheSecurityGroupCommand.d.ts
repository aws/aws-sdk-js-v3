import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CreateCacheSecurityGroupMessage, CreateCacheSecurityGroupResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCacheSecurityGroupCommandInput = CreateCacheSecurityGroupMessage;
export declare type CreateCacheSecurityGroupCommandOutput = CreateCacheSecurityGroupResult & __MetadataBearer;
export declare class CreateCacheSecurityGroupCommand extends $Command<CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CreateCacheSecurityGroupCommandInput;
    constructor(input: CreateCacheSecurityGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCacheSecurityGroupCommandInput, CreateCacheSecurityGroupCommandOutput>;
    private serialize;
    private deserialize;
}
