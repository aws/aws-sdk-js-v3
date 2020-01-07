import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAutoMLJobRequest, CreateAutoMLJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAutoMLJobCommandInput = CreateAutoMLJobRequest;
export declare type CreateAutoMLJobCommandOutput = CreateAutoMLJobResponse & __MetadataBearer;
export declare class CreateAutoMLJobCommand extends $Command<CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateAutoMLJobCommandInput;
    constructor(input: CreateAutoMLJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput>;
    private serialize;
    private deserialize;
}
