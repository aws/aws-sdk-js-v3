import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeFlowDefinitionRequest, DescribeFlowDefinitionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeFlowDefinitionCommandInput = DescribeFlowDefinitionRequest;
export declare type DescribeFlowDefinitionCommandOutput = DescribeFlowDefinitionResponse & __MetadataBearer;
export declare class DescribeFlowDefinitionCommand extends $Command<DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeFlowDefinitionCommandInput;
    constructor(input: DescribeFlowDefinitionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput>;
    private serialize;
    private deserialize;
}
