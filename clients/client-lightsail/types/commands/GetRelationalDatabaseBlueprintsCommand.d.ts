import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBlueprintsRequest, GetRelationalDatabaseBlueprintsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseBlueprintsCommandInput = GetRelationalDatabaseBlueprintsRequest;
export declare type GetRelationalDatabaseBlueprintsCommandOutput = GetRelationalDatabaseBlueprintsResult & __MetadataBearer;
export declare class GetRelationalDatabaseBlueprintsCommand extends $Command<GetRelationalDatabaseBlueprintsCommandInput, GetRelationalDatabaseBlueprintsCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseBlueprintsCommandInput;
    constructor(input: GetRelationalDatabaseBlueprintsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseBlueprintsCommandInput, GetRelationalDatabaseBlueprintsCommandOutput>;
    private serialize;
    private deserialize;
}
