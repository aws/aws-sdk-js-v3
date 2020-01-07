import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { DescribeTableReplicaAutoScalingInput, DescribeTableReplicaAutoScalingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeTableReplicaAutoScalingCommandInput = DescribeTableReplicaAutoScalingInput;
export declare type DescribeTableReplicaAutoScalingCommandOutput = DescribeTableReplicaAutoScalingOutput & __MetadataBearer;
export declare class DescribeTableReplicaAutoScalingCommand extends $Command<DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: DescribeTableReplicaAutoScalingCommandInput;
    constructor(input: DescribeTableReplicaAutoScalingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeTableReplicaAutoScalingCommandInput, DescribeTableReplicaAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
