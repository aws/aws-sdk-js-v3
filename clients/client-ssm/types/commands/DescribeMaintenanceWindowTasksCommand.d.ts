import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowTasksRequest, DescribeMaintenanceWindowTasksResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowTasksCommandInput = DescribeMaintenanceWindowTasksRequest;
export declare type DescribeMaintenanceWindowTasksCommandOutput = DescribeMaintenanceWindowTasksResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowTasksCommand extends $Command<DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowTasksCommandInput;
    constructor(input: DescribeMaintenanceWindowTasksCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowTasksCommandInput, DescribeMaintenanceWindowTasksCommandOutput>;
    private serialize;
    private deserialize;
}
