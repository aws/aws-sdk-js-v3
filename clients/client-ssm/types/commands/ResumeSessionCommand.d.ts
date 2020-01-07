import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ResumeSessionRequest, ResumeSessionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResumeSessionCommandInput = ResumeSessionRequest;
export declare type ResumeSessionCommandOutput = ResumeSessionResponse & __MetadataBearer;
export declare class ResumeSessionCommand extends $Command<ResumeSessionCommandInput, ResumeSessionCommandOutput, SSMClientResolvedConfig> {
    readonly input: ResumeSessionCommandInput;
    constructor(input: ResumeSessionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResumeSessionCommandInput, ResumeSessionCommandOutput>;
    private serialize;
    private deserialize;
}
