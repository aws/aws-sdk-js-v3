import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DisableDomainAutoRenewRequest, DisableDomainAutoRenewResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableDomainAutoRenewCommandInput = DisableDomainAutoRenewRequest;
export declare type DisableDomainAutoRenewCommandOutput = DisableDomainAutoRenewResponse & __MetadataBearer;
export declare class DisableDomainAutoRenewCommand extends $Command<DisableDomainAutoRenewCommandInput, DisableDomainAutoRenewCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: DisableDomainAutoRenewCommandInput;
    constructor(input: DisableDomainAutoRenewCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableDomainAutoRenewCommandInput, DisableDomainAutoRenewCommandOutput>;
    private serialize;
    private deserialize;
}
