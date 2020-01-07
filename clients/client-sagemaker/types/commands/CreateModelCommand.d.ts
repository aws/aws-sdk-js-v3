import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateModelInput, CreateModelOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateModelCommandInput = CreateModelInput;
export declare type CreateModelCommandOutput = CreateModelOutput & __MetadataBearer;
export declare class CreateModelCommand extends $Command<CreateModelCommandInput, CreateModelCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateModelCommandInput;
    constructor(input: CreateModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateModelCommandInput, CreateModelCommandOutput>;
    private serialize;
    private deserialize;
}
