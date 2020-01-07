import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseBundlesRequest, GetRelationalDatabaseBundlesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseBundlesCommandInput = GetRelationalDatabaseBundlesRequest;
export declare type GetRelationalDatabaseBundlesCommandOutput = GetRelationalDatabaseBundlesResult & __MetadataBearer;
export declare class GetRelationalDatabaseBundlesCommand extends $Command<GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseBundlesCommandInput;
    constructor(input: GetRelationalDatabaseBundlesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseBundlesCommandInput, GetRelationalDatabaseBundlesCommandOutput>;
    private serialize;
    private deserialize;
}
