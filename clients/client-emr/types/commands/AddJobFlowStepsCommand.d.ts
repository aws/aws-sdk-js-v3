import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { AddJobFlowStepsInput, AddJobFlowStepsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddJobFlowStepsCommandInput = AddJobFlowStepsInput;
export declare type AddJobFlowStepsCommandOutput = AddJobFlowStepsOutput & __MetadataBearer;
export declare class AddJobFlowStepsCommand extends $Command<AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput, EMRClientResolvedConfig> {
    readonly input: AddJobFlowStepsCommandInput;
    constructor(input: AddJobFlowStepsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EMRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddJobFlowStepsCommandInput, AddJobFlowStepsCommandOutput>;
    private serialize;
    private deserialize;
}
