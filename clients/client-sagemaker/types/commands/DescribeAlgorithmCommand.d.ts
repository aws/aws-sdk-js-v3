import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeAlgorithmInput, DescribeAlgorithmOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAlgorithmCommandInput = DescribeAlgorithmInput;
export declare type DescribeAlgorithmCommandOutput = DescribeAlgorithmOutput & __MetadataBearer;
export declare class DescribeAlgorithmCommand extends $Command<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeAlgorithmCommandInput;
    constructor(input: DescribeAlgorithmCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput>;
    private serialize;
    private deserialize;
}
