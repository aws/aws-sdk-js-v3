import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateTrialRequest, CreateTrialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateTrialCommandInput = CreateTrialRequest;
export declare type CreateTrialCommandOutput = CreateTrialResponse & __MetadataBearer;
export declare class CreateTrialCommand extends $Command<CreateTrialCommandInput, CreateTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateTrialCommandInput;
    constructor(input: CreateTrialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateTrialCommandInput, CreateTrialCommandOutput>;
    private serialize;
    private deserialize;
}
