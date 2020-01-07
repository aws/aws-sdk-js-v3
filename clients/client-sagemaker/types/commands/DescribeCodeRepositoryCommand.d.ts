import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeCodeRepositoryInput, DescribeCodeRepositoryOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeCodeRepositoryCommandInput = DescribeCodeRepositoryInput;
export declare type DescribeCodeRepositoryCommandOutput = DescribeCodeRepositoryOutput & __MetadataBearer;
export declare class DescribeCodeRepositoryCommand extends $Command<DescribeCodeRepositoryCommandInput, DescribeCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeCodeRepositoryCommandInput;
    constructor(input: DescribeCodeRepositoryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeCodeRepositoryCommandInput, DescribeCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
