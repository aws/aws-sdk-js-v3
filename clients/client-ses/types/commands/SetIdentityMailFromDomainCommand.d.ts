import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { SetIdentityMailFromDomainRequest, SetIdentityMailFromDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type SetIdentityMailFromDomainCommandInput = SetIdentityMailFromDomainRequest;
export declare type SetIdentityMailFromDomainCommandOutput = SetIdentityMailFromDomainResponse & __MetadataBearer;
export declare class SetIdentityMailFromDomainCommand extends $Command<SetIdentityMailFromDomainCommandInput, SetIdentityMailFromDomainCommandOutput, SESClientResolvedConfig> {
    readonly input: SetIdentityMailFromDomainCommandInput;
    constructor(input: SetIdentityMailFromDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<SetIdentityMailFromDomainCommandInput, SetIdentityMailFromDomainCommandOutput>;
    private serialize;
    private deserialize;
}
