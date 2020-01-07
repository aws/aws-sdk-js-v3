import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeEndpointConfigInput, DescribeEndpointConfigOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointConfigCommandInput = DescribeEndpointConfigInput;
export declare type DescribeEndpointConfigCommandOutput = DescribeEndpointConfigOutput & __MetadataBearer;
export declare class DescribeEndpointConfigCommand extends $Command<DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeEndpointConfigCommandInput;
    constructor(input: DescribeEndpointConfigCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput>;
    private serialize;
    private deserialize;
}
