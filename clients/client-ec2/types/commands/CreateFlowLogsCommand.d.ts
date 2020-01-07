import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateFlowLogsRequest, CreateFlowLogsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateFlowLogsCommandInput = CreateFlowLogsRequest;
export declare type CreateFlowLogsCommandOutput = CreateFlowLogsResult & __MetadataBearer;
export declare class CreateFlowLogsCommand extends $Command<CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateFlowLogsCommandInput;
    constructor(input: CreateFlowLogsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateFlowLogsCommandInput, CreateFlowLogsCommandOutput>;
    private serialize;
    private deserialize;
}
