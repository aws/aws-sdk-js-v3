import { DynamoDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DynamoDBClient";
import { UpdateTableReplicaAutoScalingInput, UpdateTableReplicaAutoScalingOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTableReplicaAutoScalingCommandInput = UpdateTableReplicaAutoScalingInput;
export declare type UpdateTableReplicaAutoScalingCommandOutput = UpdateTableReplicaAutoScalingOutput & __MetadataBearer;
export declare class UpdateTableReplicaAutoScalingCommand extends $Command<UpdateTableReplicaAutoScalingCommandInput, UpdateTableReplicaAutoScalingCommandOutput, DynamoDBClientResolvedConfig> {
    readonly input: UpdateTableReplicaAutoScalingCommandInput;
    constructor(input: UpdateTableReplicaAutoScalingCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DynamoDBClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTableReplicaAutoScalingCommandInput, UpdateTableReplicaAutoScalingCommandOutput>;
    private serialize;
    private deserialize;
}
