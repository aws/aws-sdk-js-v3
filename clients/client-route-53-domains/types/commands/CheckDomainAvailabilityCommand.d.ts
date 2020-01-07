import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { CheckDomainAvailabilityRequest, CheckDomainAvailabilityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CheckDomainAvailabilityCommandInput = CheckDomainAvailabilityRequest;
export declare type CheckDomainAvailabilityCommandOutput = CheckDomainAvailabilityResponse & __MetadataBearer;
export declare class CheckDomainAvailabilityCommand extends $Command<CheckDomainAvailabilityCommandInput, CheckDomainAvailabilityCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: CheckDomainAvailabilityCommandInput;
    constructor(input: CheckDomainAvailabilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckDomainAvailabilityCommandInput, CheckDomainAvailabilityCommandOutput>;
    private serialize;
    private deserialize;
}
