import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { GetQueryExecutionInput, GetQueryExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetQueryExecutionCommandInput = GetQueryExecutionInput;
export declare type GetQueryExecutionCommandOutput = GetQueryExecutionOutput & __MetadataBearer;
export declare class GetQueryExecutionCommand extends $Command<GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput, AthenaClientResolvedConfig> {
    readonly input: GetQueryExecutionCommandInput;
    constructor(input: GetQueryExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetQueryExecutionCommandInput, GetQueryExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
