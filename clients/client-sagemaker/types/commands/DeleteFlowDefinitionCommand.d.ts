import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteFlowDefinitionRequest, DeleteFlowDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFlowDefinitionCommandInput = DeleteFlowDefinitionRequest;
export declare type DeleteFlowDefinitionCommandOutput = DeleteFlowDefinitionResponse & __MetadataBearer;
export declare class DeleteFlowDefinitionCommand extends $Command<DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteFlowDefinitionCommandInput;
    constructor(input: DeleteFlowDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
