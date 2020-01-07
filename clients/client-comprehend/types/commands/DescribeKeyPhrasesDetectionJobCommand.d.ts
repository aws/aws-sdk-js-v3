import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeKeyPhrasesDetectionJobRequest, DescribeKeyPhrasesDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeKeyPhrasesDetectionJobCommandInput = DescribeKeyPhrasesDetectionJobRequest;
export declare type DescribeKeyPhrasesDetectionJobCommandOutput = DescribeKeyPhrasesDetectionJobResponse & __MetadataBearer;
export declare class DescribeKeyPhrasesDetectionJobCommand extends $Command<DescribeKeyPhrasesDetectionJobCommandInput, DescribeKeyPhrasesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeKeyPhrasesDetectionJobCommandInput;
    constructor(input: DescribeKeyPhrasesDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeKeyPhrasesDetectionJobCommandInput, DescribeKeyPhrasesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
