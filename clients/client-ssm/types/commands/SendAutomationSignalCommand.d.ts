import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { SendAutomationSignalRequest, SendAutomationSignalResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendAutomationSignalCommandInput = SendAutomationSignalRequest;
export declare type SendAutomationSignalCommandOutput = SendAutomationSignalResult & __MetadataBearer;
export declare class SendAutomationSignalCommand extends $Command<SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput, SSMClientResolvedConfig> {
    readonly input: SendAutomationSignalCommandInput;
    constructor(input: SendAutomationSignalCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendAutomationSignalCommandInput, SendAutomationSignalCommandOutput>;
    private serialize;
    private deserialize;
}
