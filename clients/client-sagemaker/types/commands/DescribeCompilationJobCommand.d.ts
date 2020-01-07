import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeCompilationJobRequest, DescribeCompilationJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCompilationJobCommandInput = DescribeCompilationJobRequest;
export declare type DescribeCompilationJobCommandOutput = DescribeCompilationJobResponse & __MetadataBearer;
export declare class DescribeCompilationJobCommand extends $Command<DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeCompilationJobCommandInput;
    constructor(input: DescribeCompilationJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput>;
    private serialize;
    private deserialize;
}
