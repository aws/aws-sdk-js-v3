import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { CompleteMigrationMessage, CompleteMigrationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CompleteMigrationCommandInput = CompleteMigrationMessage;
export declare type CompleteMigrationCommandOutput = CompleteMigrationResponse & __MetadataBearer;
export declare class CompleteMigrationCommand extends $Command<CompleteMigrationCommandInput, CompleteMigrationCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: CompleteMigrationCommandInput;
    constructor(input: CompleteMigrationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CompleteMigrationCommandInput, CompleteMigrationCommandOutput>;
    private serialize;
    private deserialize;
}
