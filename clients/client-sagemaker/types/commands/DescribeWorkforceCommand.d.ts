import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeWorkforceRequest, DescribeWorkforceResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeWorkforceCommandInput = DescribeWorkforceRequest;
export declare type DescribeWorkforceCommandOutput = DescribeWorkforceResponse & __MetadataBearer;
export declare class DescribeWorkforceCommand extends $Command<DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeWorkforceCommandInput;
    constructor(input: DescribeWorkforceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput>;
    private serialize;
    private deserialize;
}
