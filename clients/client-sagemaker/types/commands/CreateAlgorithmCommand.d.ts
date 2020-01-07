import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateAlgorithmInput, CreateAlgorithmOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAlgorithmCommandInput = CreateAlgorithmInput;
export declare type CreateAlgorithmCommandOutput = CreateAlgorithmOutput & __MetadataBearer;
export declare class CreateAlgorithmCommand extends $Command<CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateAlgorithmCommandInput;
    constructor(input: CreateAlgorithmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
