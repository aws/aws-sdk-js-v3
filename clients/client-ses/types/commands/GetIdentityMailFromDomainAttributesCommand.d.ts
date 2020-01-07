import { SESClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SESClient";
import { GetIdentityMailFromDomainAttributesRequest, GetIdentityMailFromDomainAttributesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetIdentityMailFromDomainAttributesCommandInput = GetIdentityMailFromDomainAttributesRequest;
export declare type GetIdentityMailFromDomainAttributesCommandOutput = GetIdentityMailFromDomainAttributesResponse & __MetadataBearer;
export declare class GetIdentityMailFromDomainAttributesCommand extends $Command<GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput, SESClientResolvedConfig> {
    readonly input: GetIdentityMailFromDomainAttributesCommandInput;
    constructor(input: GetIdentityMailFromDomainAttributesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SESClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetIdentityMailFromDomainAttributesCommandInput, GetIdentityMailFromDomainAttributesCommandOutput>;
    private serialize;
    private deserialize;
}
