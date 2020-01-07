import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StartStreamProcessorRequest, StartStreamProcessorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StartStreamProcessorCommandInput = StartStreamProcessorRequest;
export declare type StartStreamProcessorCommandOutput = StartStreamProcessorResponse & __MetadataBearer;
export declare class StartStreamProcessorCommand extends $Command<StartStreamProcessorCommandInput, StartStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StartStreamProcessorCommandInput;
    constructor(input: StartStreamProcessorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartStreamProcessorCommandInput, StartStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
