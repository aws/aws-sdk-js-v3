import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { GetRelationalDatabaseParametersRequest, GetRelationalDatabaseParametersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetRelationalDatabaseParametersCommandInput = GetRelationalDatabaseParametersRequest;
export declare type GetRelationalDatabaseParametersCommandOutput = GetRelationalDatabaseParametersResult & __MetadataBearer;
export declare class GetRelationalDatabaseParametersCommand extends $Command<GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput, LightsailClientResolvedConfig> {
    readonly input: GetRelationalDatabaseParametersCommandInput;
    constructor(input: GetRelationalDatabaseParametersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRelationalDatabaseParametersCommandInput, GetRelationalDatabaseParametersCommandOutput>;
    private serialize;
    private deserialize;
}
