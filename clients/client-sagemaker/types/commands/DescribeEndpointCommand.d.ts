import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeEndpointInput, DescribeEndpointOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEndpointCommandInput = DescribeEndpointInput;
export declare type DescribeEndpointCommandOutput = DescribeEndpointOutput & __MetadataBearer;
export declare class DescribeEndpointCommand extends $Command<DescribeEndpointCommandInput, DescribeEndpointCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeEndpointCommandInput;
    constructor(input: DescribeEndpointCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEndpointCommandInput, DescribeEndpointCommandOutput>;
    private serialize;
    private deserialize;
}
