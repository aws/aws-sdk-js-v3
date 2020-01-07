import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowExecutionsRequest, DescribeMaintenanceWindowExecutionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowExecutionsCommandInput = DescribeMaintenanceWindowExecutionsRequest;
export declare type DescribeMaintenanceWindowExecutionsCommandOutput = DescribeMaintenanceWindowExecutionsResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowExecutionsCommand extends $Command<DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowExecutionsCommandInput;
    constructor(input: DescribeMaintenanceWindowExecutionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowExecutionsCommandInput, DescribeMaintenanceWindowExecutionsCommandOutput>;
    private serialize;
    private deserialize;
}
