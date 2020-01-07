import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { MonitorInstancesRequest, MonitorInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type MonitorInstancesCommandInput = MonitorInstancesRequest;
export declare type MonitorInstancesCommandOutput = MonitorInstancesResult & __MetadataBearer;
export declare class MonitorInstancesCommand extends $Command<MonitorInstancesCommandInput, MonitorInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: MonitorInstancesCommandInput;
    constructor(input: MonitorInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MonitorInstancesCommandInput, MonitorInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
