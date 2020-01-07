import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrialComponentRequest, CreateTrialComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrialComponentCommandInput = CreateTrialComponentRequest;
export declare type CreateTrialComponentCommandOutput = CreateTrialComponentResponse & __MetadataBearer;
export declare class CreateTrialComponentCommand extends $Command<CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTrialComponentCommandInput;
    constructor(input: CreateTrialComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
