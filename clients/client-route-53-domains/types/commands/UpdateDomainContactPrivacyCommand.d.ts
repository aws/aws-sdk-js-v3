import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContactPrivacyRequest, UpdateDomainContactPrivacyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDomainContactPrivacyCommandInput = UpdateDomainContactPrivacyRequest;
export declare type UpdateDomainContactPrivacyCommandOutput = UpdateDomainContactPrivacyResponse & __MetadataBearer;
export declare class UpdateDomainContactPrivacyCommand extends $Command<UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateDomainContactPrivacyCommandInput;
    constructor(input: UpdateDomainContactPrivacyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainContactPrivacyCommandInput, UpdateDomainContactPrivacyCommandOutput>;
    private serialize;
    private deserialize;
}
