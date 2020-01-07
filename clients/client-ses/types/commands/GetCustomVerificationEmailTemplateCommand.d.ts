import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetCustomVerificationEmailTemplateRequest, GetCustomVerificationEmailTemplateResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetCustomVerificationEmailTemplateCommandInput = GetCustomVerificationEmailTemplateRequest;
export declare type GetCustomVerificationEmailTemplateCommandOutput = GetCustomVerificationEmailTemplateResponse & __MetadataBearer;
export declare class GetCustomVerificationEmailTemplateCommand extends $Command<GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: GetCustomVerificationEmailTemplateCommandInput;
    constructor(input: GetCustomVerificationEmailTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetCustomVerificationEmailTemplateCommandInput, GetCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
