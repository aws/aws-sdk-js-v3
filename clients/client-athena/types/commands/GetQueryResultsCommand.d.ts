import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetQueryResultsInput, GetQueryResultsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQueryResultsCommandInput = GetQueryResultsInput;
export declare type GetQueryResultsCommandOutput = GetQueryResultsOutput & __MetadataBearer;
export declare class GetQueryResultsCommand extends $Command<GetQueryResultsCommandInput, GetQueryResultsCommandOutput, AthenaClientResolvedConfig> {
    readonly input: GetQueryResultsCommandInput;
    constructor(input: GetQueryResultsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueryResultsCommandInput, GetQueryResultsCommandOutput>;
    private serialize;
    private deserialize;
}
