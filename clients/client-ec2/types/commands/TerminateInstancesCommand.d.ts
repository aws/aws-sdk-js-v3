import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { TerminateInstancesRequest, TerminateInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateInstancesCommandInput = TerminateInstancesRequest;
export declare type TerminateInstancesCommandOutput = TerminateInstancesResult & __MetadataBearer;
export declare class TerminateInstancesCommand extends $Command<TerminateInstancesCommandInput, TerminateInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: TerminateInstancesCommandInput;
    constructor(input: TerminateInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateInstancesCommandInput, TerminateInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
