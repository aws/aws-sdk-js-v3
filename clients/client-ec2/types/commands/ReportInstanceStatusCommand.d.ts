import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ReportInstanceStatusRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ReportInstanceStatusCommandInput = ReportInstanceStatusRequest;
export declare type ReportInstanceStatusCommandOutput = __MetadataBearer;
export declare class ReportInstanceStatusCommand extends $Command<ReportInstanceStatusCommandInput, ReportInstanceStatusCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ReportInstanceStatusCommandInput;
    constructor(input: ReportInstanceStatusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ReportInstanceStatusCommandInput, ReportInstanceStatusCommandOutput>;
    private serialize;
    private deserialize;
}
