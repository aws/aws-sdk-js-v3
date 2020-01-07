import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateFlowDefinitionRequest, CreateFlowDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFlowDefinitionCommandInput = CreateFlowDefinitionRequest;
export declare type CreateFlowDefinitionCommandOutput = CreateFlowDefinitionResponse & __MetadataBearer;
export declare class CreateFlowDefinitionCommand extends $Command<CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateFlowDefinitionCommandInput;
    constructor(input: CreateFlowDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
