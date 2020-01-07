import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { RunScheduledInstancesRequest, RunScheduledInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RunScheduledInstancesCommandInput = RunScheduledInstancesRequest;
export declare type RunScheduledInstancesCommandOutput = RunScheduledInstancesResult & __MetadataBearer;
export declare class RunScheduledInstancesCommand extends $Command<RunScheduledInstancesCommandInput, RunScheduledInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: RunScheduledInstancesCommandInput;
    constructor(input: RunScheduledInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RunScheduledInstancesCommandInput, RunScheduledInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
