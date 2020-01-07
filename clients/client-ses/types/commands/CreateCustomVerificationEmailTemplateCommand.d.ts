import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { CreateCustomVerificationEmailTemplateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateCustomVerificationEmailTemplateCommandInput = CreateCustomVerificationEmailTemplateRequest;
export declare type CreateCustomVerificationEmailTemplateCommandOutput = __MetadataBearer;
export declare class CreateCustomVerificationEmailTemplateCommand extends $Command<CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: CreateCustomVerificationEmailTemplateCommandInput;
    constructor(input: CreateCustomVerificationEmailTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
