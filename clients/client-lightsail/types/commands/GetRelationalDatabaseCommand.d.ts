import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseRequest, GetRelationalDatabaseResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseCommandInput = GetRelationalDatabaseRequest;
export declare type GetRelationalDatabaseCommandOutput = GetRelationalDatabaseResult & __MetadataBearer;
export declare class GetRelationalDatabaseCommand extends $Command<GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseCommandInput;
    constructor(input: GetRelationalDatabaseCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseCommandInput, GetRelationalDatabaseCommandOutput>;
    private serialize;
    private deserialize;
}
