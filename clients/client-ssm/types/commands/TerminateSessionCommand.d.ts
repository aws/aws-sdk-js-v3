import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { TerminateSessionRequest, TerminateSessionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TerminateSessionCommandInput = TerminateSessionRequest;
export declare type TerminateSessionCommandOutput = TerminateSessionResponse & __MetadataBearer;
export declare class TerminateSessionCommand extends $Command<TerminateSessionCommandInput, TerminateSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: TerminateSessionCommandInput;
    constructor(input: TerminateSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TerminateSessionCommandInput, TerminateSessionCommandOutput>;
    private serialize;
    private deserialize;
}
