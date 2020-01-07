import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeModelPackageInput, DescribeModelPackageOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeModelPackageCommandInput = DescribeModelPackageInput;
export declare type DescribeModelPackageCommandOutput = DescribeModelPackageOutput & __MetadataBearer;
export declare class DescribeModelPackageCommand extends $Command<DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeModelPackageCommandInput;
    constructor(input: DescribeModelPackageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput>;
    private serialize;
    private deserialize;
}
