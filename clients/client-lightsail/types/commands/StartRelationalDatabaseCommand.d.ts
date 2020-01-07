import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StartRelationalDatabaseRequest, StartRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartRelationalDatabaseCommandInput = StartRelationalDatabaseRequest;
export declare type StartRelationalDatabaseCommandOutput = StartRelationalDatabaseResult & __MetadataBearer;
export declare class StartRelationalDatabaseCommand extends $Command<StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: StartRelationalDatabaseCommandInput;
    constructor(input: StartRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartRelationalDatabaseCommandInput, StartRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
