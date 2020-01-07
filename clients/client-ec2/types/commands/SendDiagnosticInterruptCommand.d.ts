import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { SendDiagnosticInterruptRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendDiagnosticInterruptCommandInput = SendDiagnosticInterruptRequest;
export declare type SendDiagnosticInterruptCommandOutput = __MetadataBearer;
export declare class SendDiagnosticInterruptCommand extends $Command<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput, EC2ClientResolvedConfig> {
    readonly input: SendDiagnosticInterruptCommandInput;
    constructor(input: SendDiagnosticInterruptCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendDiagnosticInterruptCommandInput, SendDiagnosticInterruptCommandOutput>;
    private serialize;
    private deserialize;
}
