import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeSnapshotSchedulesMessage, DescribeSnapshotSchedulesOutputMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeSnapshotSchedulesCommandInput = DescribeSnapshotSchedulesMessage;
export declare type DescribeSnapshotSchedulesCommandOutput = DescribeSnapshotSchedulesOutputMessage & __MetadataBearer;
export declare class DescribeSnapshotSchedulesCommand extends $Command<DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DescribeSnapshotSchedulesCommandInput;
    constructor(input: DescribeSnapshotSchedulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSnapshotSchedulesCommandInput, DescribeSnapshotSchedulesCommandOutput>;
    private serialize;
    private deserialize;
}
