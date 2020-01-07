import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopTransformJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopTransformJobCommandInput = StopTransformJobRequest;
export declare type StopTransformJobCommandOutput = __MetadataBearer;
export declare class StopTransformJobCommand extends $Command<StopTransformJobCommandInput, StopTransformJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopTransformJobCommandInput;
    constructor(input: StopTransformJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopTransformJobCommandInput, StopTransformJobCommandOutput>;
    private serialize;
    private deserialize;
}
