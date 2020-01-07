import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DescribeMaintenanceStartTimeInput, DescribeMaintenanceStartTimeOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeMaintenanceStartTimeCommandInput = DescribeMaintenanceStartTimeInput;
export declare type DescribeMaintenanceStartTimeCommandOutput = DescribeMaintenanceStartTimeOutput & __MetadataBearer;
export declare class DescribeMaintenanceStartTimeCommand extends $Command<DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DescribeMaintenanceStartTimeCommandInput;
    constructor(input: DescribeMaintenanceStartTimeCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMaintenanceStartTimeCommandInput, DescribeMaintenanceStartTimeCommandOutput>;
    private serialize;
    private deserialize;
}
