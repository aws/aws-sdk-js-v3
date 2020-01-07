import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { CreateStreamProcessorRequest, CreateStreamProcessorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateStreamProcessorCommandInput = CreateStreamProcessorRequest;
export declare type CreateStreamProcessorCommandOutput = CreateStreamProcessorResponse & __MetadataBearer;
export declare class CreateStreamProcessorCommand extends $Command<CreateStreamProcessorCommandInput, CreateStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: CreateStreamProcessorCommandInput;
    constructor(input: CreateStreamProcessorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateStreamProcessorCommandInput, CreateStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
