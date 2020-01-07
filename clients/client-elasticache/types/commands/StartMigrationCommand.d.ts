import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { StartMigrationMessage, StartMigrationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartMigrationCommandInput = StartMigrationMessage;
export declare type StartMigrationCommandOutput = StartMigrationResponse & __MetadataBearer;
export declare class StartMigrationCommand extends $Command<StartMigrationCommandInput, StartMigrationCommandOutput, ElastiCacheClientResolvedConfig> {
    readonly input: StartMigrationCommandInput;
    constructor(input: StartMigrationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ElastiCacheClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartMigrationCommandInput, StartMigrationCommandOutput>;
    private serialize;
    private deserialize;
}
