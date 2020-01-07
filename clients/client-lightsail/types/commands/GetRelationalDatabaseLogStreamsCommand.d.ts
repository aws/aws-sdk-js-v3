import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseLogStreamsRequest, GetRelationalDatabaseLogStreamsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseLogStreamsCommandInput = GetRelationalDatabaseLogStreamsRequest;
export declare type GetRelationalDatabaseLogStreamsCommandOutput = GetRelationalDatabaseLogStreamsResult & __MetadataBearer;
export declare class GetRelationalDatabaseLogStreamsCommand extends $Command<GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseLogStreamsCommandInput;
    constructor(input: GetRelationalDatabaseLogStreamsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseLogStreamsCommandInput, GetRelationalDatabaseLogStreamsCommandOutput>;
    private serialize;
    private deserialize;
}
