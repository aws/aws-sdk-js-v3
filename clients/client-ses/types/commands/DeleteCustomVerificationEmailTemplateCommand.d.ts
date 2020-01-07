import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { DeleteCustomVerificationEmailTemplateRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteCustomVerificationEmailTemplateCommandInput = DeleteCustomVerificationEmailTemplateRequest;
export declare type DeleteCustomVerificationEmailTemplateCommandOutput = __MetadataBearer;
export declare class DeleteCustomVerificationEmailTemplateCommand extends $Command<DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput, SESClientResolvedConfig> {
    readonly input: DeleteCustomVerificationEmailTemplateCommandInput;
    constructor(input: DeleteCustomVerificationEmailTemplateCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCustomVerificationEmailTemplateCommandInput, DeleteCustomVerificationEmailTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
