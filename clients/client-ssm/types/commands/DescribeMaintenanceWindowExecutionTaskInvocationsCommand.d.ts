import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowExecutionTaskInvocationsRequest, DescribeMaintenanceWindowExecutionTaskInvocationsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput = DescribeMaintenanceWindowExecutionTaskInvocationsRequest;
export declare type DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput = DescribeMaintenanceWindowExecutionTaskInvocationsResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowExecutionTaskInvocationsCommand extends $Command<DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput;
    constructor(input: DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowExecutionTaskInvocationsCommandInput, DescribeMaintenanceWindowExecutionTaskInvocationsCommandOutput>;
    private serialize;
    private deserialize;
}
