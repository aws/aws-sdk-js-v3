import { SFNClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SFNClient";
import { StartExecutionInput, StartExecutionOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartExecutionCommandInput = StartExecutionInput;
export declare type StartExecutionCommandOutput = StartExecutionOutput & __MetadataBearer;
export declare class StartExecutionCommand extends $Command<StartExecutionCommandInput, StartExecutionCommandOutput, SFNClientResolvedConfig> {
    readonly input: StartExecutionCommandInput;
    constructor(input: StartExecutionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SFNClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExecutionCommandInput, StartExecutionCommandOutput>;
    private serialize;
    private deserialize;
}
