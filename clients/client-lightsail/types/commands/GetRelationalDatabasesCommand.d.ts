import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabasesRequest, GetRelationalDatabasesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabasesCommandInput = GetRelationalDatabasesRequest;
export declare type GetRelationalDatabasesCommandOutput = GetRelationalDatabasesResult & __MetadataBearer;
export declare class GetRelationalDatabasesCommand extends $Command<GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabasesCommandInput;
    constructor(input: GetRelationalDatabasesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabasesCommandInput, GetRelationalDatabasesCommandOutput>;
    private serialize;
    private deserialize;
}
