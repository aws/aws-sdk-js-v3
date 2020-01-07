import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateTrialComponentRequest, UpdateTrialComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTrialComponentCommandInput = UpdateTrialComponentRequest;
export declare type UpdateTrialComponentCommandOutput = UpdateTrialComponentResponse & __MetadataBearer;
export declare class UpdateTrialComponentCommand extends $Command<UpdateTrialComponentCommandInput, UpdateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateTrialComponentCommandInput;
    constructor(input: UpdateTrialComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTrialComponentCommandInput, UpdateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
