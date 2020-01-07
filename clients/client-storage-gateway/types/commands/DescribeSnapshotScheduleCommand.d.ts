import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeSnapshotScheduleInput, DescribeSnapshotScheduleOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotScheduleCommandInput = DescribeSnapshotScheduleInput;
export declare type DescribeSnapshotScheduleCommandOutput = DescribeSnapshotScheduleOutput & __MetadataBearer;
export declare class DescribeSnapshotScheduleCommand extends $Command<DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeSnapshotScheduleCommandInput;
    constructor(input: DescribeSnapshotScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotScheduleCommandInput, DescribeSnapshotScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
