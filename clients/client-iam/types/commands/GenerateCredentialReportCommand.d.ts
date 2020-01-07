import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GenerateCredentialReportResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GenerateCredentialReportCommandInput = {};
export declare type GenerateCredentialReportCommandOutput = GenerateCredentialReportResponse & __MetadataBearer;
export declare class GenerateCredentialReportCommand extends $Command<GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput, IAMClientResolvedConfig> {
    readonly input: GenerateCredentialReportCommandInput;
    constructor(input: GenerateCredentialReportCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateCredentialReportCommandInput, GenerateCredentialReportCommandOutput>;
    private serialize;
    private deserialize;
}
