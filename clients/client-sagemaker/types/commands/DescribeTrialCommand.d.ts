import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrialRequest, DescribeTrialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrialCommandInput = DescribeTrialRequest;
export declare type DescribeTrialCommandOutput = DescribeTrialResponse & __MetadataBearer;
export declare class DescribeTrialCommand extends $Command<DescribeTrialCommandInput, DescribeTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTrialCommandInput;
    constructor(input: DescribeTrialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrialCommandInput, DescribeTrialCommandOutput>;
    private serialize;
    private deserialize;
}
