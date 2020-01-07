import { SMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SMSClient";
import { TerminateAppRequest, TerminateAppResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateAppCommandInput = TerminateAppRequest;
export declare type TerminateAppCommandOutput = TerminateAppResponse & __MetadataBearer;
export declare class TerminateAppCommand extends $Command<TerminateAppCommandInput, TerminateAppCommandOutput, SMSClientResolvedConfig> {
    readonly input: TerminateAppCommandInput;
    constructor(input: TerminateAppCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateAppCommandInput, TerminateAppCommandOutput>;
    private serialize;
    private deserialize;
}
