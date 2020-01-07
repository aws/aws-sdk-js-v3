import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { CheckDomainTransferabilityRequest, CheckDomainTransferabilityResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CheckDomainTransferabilityCommandInput = CheckDomainTransferabilityRequest;
export declare type CheckDomainTransferabilityCommandOutput = CheckDomainTransferabilityResponse & __MetadataBearer;
export declare class CheckDomainTransferabilityCommand extends $Command<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: CheckDomainTransferabilityCommandInput;
    constructor(input: CheckDomainTransferabilityCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckDomainTransferabilityCommandInput, CheckDomainTransferabilityCommandOutput>;
    private serialize;
    private deserialize;
}
