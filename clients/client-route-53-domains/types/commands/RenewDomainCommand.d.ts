import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { RenewDomainRequest, RenewDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RenewDomainCommandInput = RenewDomainRequest;
export declare type RenewDomainCommandOutput = RenewDomainResponse & __MetadataBearer;
export declare class RenewDomainCommand extends $Command<RenewDomainCommandInput, RenewDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: RenewDomainCommandInput;
    constructor(input: RenewDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RenewDomainCommandInput, RenewDomainCommandOutput>;
    private serialize;
    private deserialize;
}
