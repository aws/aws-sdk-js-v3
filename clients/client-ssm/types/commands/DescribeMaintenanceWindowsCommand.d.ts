import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowsRequest, DescribeMaintenanceWindowsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowsCommandInput = DescribeMaintenanceWindowsRequest;
export declare type DescribeMaintenanceWindowsCommandOutput = DescribeMaintenanceWindowsResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowsCommand extends $Command<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowsCommandInput;
    constructor(input: DescribeMaintenanceWindowsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowsCommandInput, DescribeMaintenanceWindowsCommandOutput>;
    private serialize;
    private deserialize;
}
