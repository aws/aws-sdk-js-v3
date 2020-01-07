import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StopQueryExecutionInput, StopQueryExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopQueryExecutionCommandInput = StopQueryExecutionInput;
export declare type StopQueryExecutionCommandOutput = StopQueryExecutionOutput & __MetadataBearer;
export declare class StopQueryExecutionCommand extends $Command<StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput, AthenaClientResolvedConfig> {
    readonly input: StopQueryExecutionCommandInput;
    constructor(input: StopQueryExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopQueryExecutionCommandInput, StopQueryExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
