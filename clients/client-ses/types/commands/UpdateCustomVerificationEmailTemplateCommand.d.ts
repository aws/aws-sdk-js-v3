import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { UpdateCustomVerificationEmailTemplateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateCustomVerificationEmailTemplateCommandInput = UpdateCustomVerificationEmailTemplateRequest;
export declare type UpdateCustomVerificationEmailTemplateCommandOutput = __MetadataBearer;
export declare class UpdateCustomVerificationEmailTemplateCommand extends $Command<UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: UpdateCustomVerificationEmailTemplateCommandInput;
    constructor(input: UpdateCustomVerificationEmailTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
