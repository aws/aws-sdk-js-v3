import { AthenaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AthenaClient";
import { StartQueryExecutionInput, StartQueryExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartQueryExecutionCommandInput = StartQueryExecutionInput;
export declare type StartQueryExecutionCommandOutput = StartQueryExecutionOutput & __MetadataBearer;
export declare class StartQueryExecutionCommand extends $Command<StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput, AthenaClientResolvedConfig> {
    readonly input: StartQueryExecutionCommandInput;
    constructor(input: StartQueryExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AthenaClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartQueryExecutionCommandInput, StartQueryExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
