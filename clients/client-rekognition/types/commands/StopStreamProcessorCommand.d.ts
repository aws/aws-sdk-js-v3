import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { StopStreamProcessorRequest, StopStreamProcessorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopStreamProcessorCommandInput = StopStreamProcessorRequest;
export declare type StopStreamProcessorCommandOutput = StopStreamProcessorResponse & __MetadataBearer;
export declare class StopStreamProcessorCommand extends $Command<StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: StopStreamProcessorCommandInput;
    constructor(input: StopStreamProcessorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopStreamProcessorCommandInput, StopStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
