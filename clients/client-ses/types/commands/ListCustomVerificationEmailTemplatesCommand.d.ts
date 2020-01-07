import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { ListCustomVerificationEmailTemplatesRequest, ListCustomVerificationEmailTemplatesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ListCustomVerificationEmailTemplatesCommandInput = ListCustomVerificationEmailTemplatesRequest;
export declare type ListCustomVerificationEmailTemplatesCommandOutput = ListCustomVerificationEmailTemplatesResponse & __MetadataBearer;
export declare class ListCustomVerificationEmailTemplatesCommand extends $Command<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput, SESClientResolvedConfig> {
    readonly input: ListCustomVerificationEmailTemplatesCommandInput;
    constructor(input: ListCustomVerificationEmailTemplatesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListCustomVerificationEmailTemplatesCommandInput, ListCustomVerificationEmailTemplatesCommandOutput>;
    private serialize;
    private deserialize;
}
