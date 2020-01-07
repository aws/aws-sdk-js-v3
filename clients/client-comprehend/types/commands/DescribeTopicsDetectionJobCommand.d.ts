import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeTopicsDetectionJobRequest, DescribeTopicsDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTopicsDetectionJobCommandInput = DescribeTopicsDetectionJobRequest;
export declare type DescribeTopicsDetectionJobCommandOutput = DescribeTopicsDetectionJobResponse & __MetadataBearer;
export declare class DescribeTopicsDetectionJobCommand extends $Command<DescribeTopicsDetectionJobCommandInput, DescribeTopicsDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeTopicsDetectionJobCommandInput;
    constructor(input: DescribeTopicsDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTopicsDetectionJobCommandInput, DescribeTopicsDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
