import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopAutoMLJobRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopAutoMLJobCommandInput = StopAutoMLJobRequest;
export declare type StopAutoMLJobCommandOutput = __MetadataBearer;
export declare class StopAutoMLJobCommand extends $Command<StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopAutoMLJobCommandInput;
    constructor(input: StopAutoMLJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput>;
    private serialize;
    private deserialize;
}
