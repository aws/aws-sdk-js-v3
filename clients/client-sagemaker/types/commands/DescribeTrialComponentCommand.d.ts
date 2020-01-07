import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DescribeTrialComponentRequest, DescribeTrialComponentResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTrialComponentCommandInput = DescribeTrialComponentRequest;
export declare type DescribeTrialComponentCommandOutput = DescribeTrialComponentResponse & __MetadataBearer;
export declare class DescribeTrialComponentCommand extends $Command<DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DescribeTrialComponentCommandInput;
    constructor(input: DescribeTrialComponentCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
