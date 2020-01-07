import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopCompilationJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopCompilationJobCommandInput = StopCompilationJobRequest;
export declare type StopCompilationJobCommandOutput = __MetadataBearer;
export declare class StopCompilationJobCommand extends $Command<StopCompilationJobCommandInput, StopCompilationJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopCompilationJobCommandInput;
    constructor(input: StopCompilationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopCompilationJobCommandInput, StopCompilationJobCommandOutput>;
    private serialize;
    private deserialize;
}
