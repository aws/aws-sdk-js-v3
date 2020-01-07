import { RekognitionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RekognitionClient";
import { DeleteStreamProcessorRequest, DeleteStreamProcessorResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteStreamProcessorCommandInput = DeleteStreamProcessorRequest;
export declare type DeleteStreamProcessorCommandOutput = DeleteStreamProcessorResponse & __MetadataBearer;
export declare class DeleteStreamProcessorCommand extends $Command<DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput, RekognitionClientResolvedConfig> {
    readonly input: DeleteStreamProcessorCommandInput;
    constructor(input: DeleteStreamProcessorCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RekognitionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteStreamProcessorCommandInput, DeleteStreamProcessorCommandOutput>;
    private serialize;
    private deserialize;
}
