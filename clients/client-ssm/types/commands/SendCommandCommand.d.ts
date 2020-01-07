import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { SendCommandRequest, SendCommandResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SendCommandCommandInput = SendCommandRequest;
export declare type SendCommandCommandOutput = SendCommandResult & __MetadataBearer;
export declare class SendCommandCommand extends $Command<SendCommandCommandInput, SendCommandCommandOutput, SSMClientResolvedConfig> {
    readonly input: SendCommandCommandInput;
    constructor(input: SendCommandCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SendCommandCommandInput, SendCommandCommandOutput>;
    private serialize;
    private deserialize;
}
