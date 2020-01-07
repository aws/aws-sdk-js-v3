import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowExecutionTasksRequest, DescribeMaintenanceWindowExecutionTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowExecutionTasksCommandInput = DescribeMaintenanceWindowExecutionTasksRequest;
export declare type DescribeMaintenanceWindowExecutionTasksCommandOutput = DescribeMaintenanceWindowExecutionTasksResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowExecutionTasksCommand extends $Command<DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowExecutionTasksCommandInput;
    constructor(input: DescribeMaintenanceWindowExecutionTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowExecutionTasksCommandInput, DescribeMaintenanceWindowExecutionTasksCommandOutput>;
    private serialize;
    private deserialize;
}
