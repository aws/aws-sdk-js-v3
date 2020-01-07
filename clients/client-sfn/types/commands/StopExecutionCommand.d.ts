import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { StopExecutionInput, StopExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopExecutionCommandInput = StopExecutionInput;
export declare type StopExecutionCommandOutput = StopExecutionOutput & __MetadataBearer;
export declare class StopExecutionCommand extends $Command<StopExecutionCommandInput, StopExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: StopExecutionCommandInput;
    constructor(input: StopExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopExecutionCommandInput, StopExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
