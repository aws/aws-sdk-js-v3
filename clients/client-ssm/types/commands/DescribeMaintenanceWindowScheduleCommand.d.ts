import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeMaintenanceWindowScheduleRequest, DescribeMaintenanceWindowScheduleResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceWindowScheduleCommandInput = DescribeMaintenanceWindowScheduleRequest;
export declare type DescribeMaintenanceWindowScheduleCommandOutput = DescribeMaintenanceWindowScheduleResult & __MetadataBearer;
export declare class DescribeMaintenanceWindowScheduleCommand extends $Command<DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeMaintenanceWindowScheduleCommandInput;
    constructor(input: DescribeMaintenanceWindowScheduleCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceWindowScheduleCommandInput, DescribeMaintenanceWindowScheduleCommandOutput>;
    private serialize;
    private deserialize;
}
