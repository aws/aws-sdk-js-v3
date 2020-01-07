import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowsForTargetRequest, DescribeMaintenanceWindowsForTargetResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowsForTargetCommandInput = DescribeMaintenanceWindowsForTargetRequest;
export declare type DescribeMaintenanceWindowsForTargetCommandOutput = DescribeMaintenanceWindowsForTargetResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowsForTargetCommand extends $Command<DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowsForTargetCommandInput;
    constructor(input: DescribeMaintenanceWindowsForTargetCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowsForTargetCommandInput, DescribeMaintenanceWindowsForTargetCommandOutput>;
    private serialize;
    private deserialize;
}
