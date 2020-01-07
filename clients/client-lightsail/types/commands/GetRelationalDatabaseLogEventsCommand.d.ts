import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseLogEventsRequest, GetRelationalDatabaseLogEventsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseLogEventsCommandInput = GetRelationalDatabaseLogEventsRequest;
export declare type GetRelationalDatabaseLogEventsCommandOutput = GetRelationalDatabaseLogEventsResult & __MetadataBearer;
export declare class GetRelationalDatabaseLogEventsCommand extends $Command<GetRelationalDatabaseLogEventsCommandInput, GetRelationalDatabaseLogEventsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseLogEventsCommandInput;
    constructor(input: GetRelationalDatabaseLogEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseLogEventsCommandInput, GetRelationalDatabaseLogEventsCommandOutput>;
    private serialize;
    private deserialize;
}
