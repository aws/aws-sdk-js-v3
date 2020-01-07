import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { StopRelationalDatabaseRequest, StopRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopRelationalDatabaseCommandInput = StopRelationalDatabaseRequest;
export declare type StopRelationalDatabaseCommandOutput = StopRelationalDatabaseResult & __MetadataBearer;
export declare class StopRelationalDatabaseCommand extends $Command<StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: StopRelationalDatabaseCommandInput;
    constructor(input: StopRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopRelationalDatabaseCommandInput, StopRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
