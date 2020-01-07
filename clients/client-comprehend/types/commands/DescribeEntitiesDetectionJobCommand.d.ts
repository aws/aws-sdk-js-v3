import { ComprehendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendClient";
import { DescribeEntitiesDetectionJobRequest, DescribeEntitiesDetectionJobResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEntitiesDetectionJobCommandInput = DescribeEntitiesDetectionJobRequest;
export declare type DescribeEntitiesDetectionJobCommandOutput = DescribeEntitiesDetectionJobResponse & __MetadataBearer;
export declare class DescribeEntitiesDetectionJobCommand extends $Command<DescribeEntitiesDetectionJobCommandInput, DescribeEntitiesDetectionJobCommandOutput, ComprehendClientResolvedConfig> {
    readonly input: DescribeEntitiesDetectionJobCommandInput;
    constructor(input: DescribeEntitiesDetectionJobCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEntitiesDetectionJobCommandInput, DescribeEntitiesDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
