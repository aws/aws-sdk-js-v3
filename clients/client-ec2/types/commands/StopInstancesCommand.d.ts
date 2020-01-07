import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { StopInstancesRequest, StopInstancesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type StopInstancesCommandInput = StopInstancesRequest;
export declare type StopInstancesCommandOutput = StopInstancesResult & __MetadataBearer;
export declare class StopInstancesCommand extends $Command<StopInstancesCommandInput, StopInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: StopInstancesCommandInput;
    constructor(input: StopInstancesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopInstancesCommandInput, StopInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
