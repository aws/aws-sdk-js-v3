import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseEventsRequest, GetRelationalDatabaseEventsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseEventsCommandInput = GetRelationalDatabaseEventsRequest;
export declare type GetRelationalDatabaseEventsCommandOutput = GetRelationalDatabaseEventsResult & __MetadataBearer;
export declare class GetRelationalDatabaseEventsCommand extends $Command<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseEventsCommandInput;
    constructor(input: GetRelationalDatabaseEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseEventsCommandInput, GetRelationalDatabaseEventsCommandOutput>;
    private serialize;
    private deserialize;
}
