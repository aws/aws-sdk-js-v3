import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { DescribeStackDriftDetectionStatusInput, DescribeStackDriftDetectionStatusOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeStackDriftDetectionStatusCommandInput = DescribeStackDriftDetectionStatusInput;
export declare type DescribeStackDriftDetectionStatusCommandOutput = DescribeStackDriftDetectionStatusOutput & __MetadataBearer;
export declare class DescribeStackDriftDetectionStatusCommand extends $Command<DescribeStackDriftDetectionStatusCommandInput, DescribeStackDriftDetectionStatusCommandOutput, CloudFormationClientResolvedConfig> {
    readonly input: DescribeStackDriftDetectionStatusCommandInput;
    constructor(input: DescribeStackDriftDetectionStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudFormationClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeStackDriftDetectionStatusCommandInput, DescribeStackDriftDetectionStatusCommandOutput>;
    private serialize;
    private deserialize;
}
