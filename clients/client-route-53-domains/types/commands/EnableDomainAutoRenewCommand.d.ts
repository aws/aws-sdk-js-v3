import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { EnableDomainAutoRenewRequest, EnableDomainAutoRenewResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableDomainAutoRenewCommandInput = EnableDomainAutoRenewRequest;
export declare type EnableDomainAutoRenewCommandOutput = EnableDomainAutoRenewResponse & __MetadataBearer;
export declare class EnableDomainAutoRenewCommand extends $Command<EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: EnableDomainAutoRenewCommandInput;
    constructor(input: EnableDomainAutoRenewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableDomainAutoRenewCommandInput, EnableDomainAutoRenewCommandOutput>;
    private serialize;
    private deserialize;
}
