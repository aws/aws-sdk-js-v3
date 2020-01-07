import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowTargetsRequest, DescribeMaintenanceWindowTargetsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowTargetsCommandInput = DescribeMaintenanceWindowTargetsRequest;
export declare type DescribeMaintenanceWindowTargetsCommandOutput = DescribeMaintenanceWindowTargetsResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowTargetsCommand extends $Command<DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowTargetsCommandInput;
    constructor(input: DescribeMaintenanceWindowTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowTargetsCommandInput, DescribeMaintenanceWindowTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
