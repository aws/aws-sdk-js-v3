import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelInput, DescribeModelOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeModelCommandInput = DescribeModelInput;
export declare type DescribeModelCommandOutput = DescribeModelOutput & __MetadataBearer;
export declare class DescribeModelCommand extends $Command<DescribeModelCommandInput, DescribeModelCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeModelCommandInput;
    constructor(input: DescribeModelCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelCommandInput, DescribeModelCommandOutput>;
    private serialize;
    private deserialize;
}
