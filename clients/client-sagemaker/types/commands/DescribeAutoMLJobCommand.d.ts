import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeAutoMLJobRequest, DescribeAutoMLJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAutoMLJobCommandInput = DescribeAutoMLJobRequest;
export declare type DescribeAutoMLJobCommandOutput = DescribeAutoMLJobResponse & __MetadataBearer;
export declare class DescribeAutoMLJobCommand extends $Command<DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeAutoMLJobCommandInput;
    constructor(input: DescribeAutoMLJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput>;
    private serialize;
    private deserialize;
}
