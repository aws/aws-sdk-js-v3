import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAppRequest, CreateAppResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAppCommandInput = CreateAppRequest;
export declare type CreateAppCommandOutput = CreateAppResponse & __MetadataBearer;
export declare class CreateAppCommand extends $Command<CreateAppCommandInput, CreateAppCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateAppCommandInput;
    constructor(input: CreateAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAppCommandInput, CreateAppCommandOutput>;
    private serialize;
    private deserialize;
}
