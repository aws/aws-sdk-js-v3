import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { TransferDomainRequest, TransferDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type TransferDomainCommandInput = TransferDomainRequest;
export declare type TransferDomainCommandOutput = TransferDomainResponse & __MetadataBearer;
export declare class TransferDomainCommand extends $Command<TransferDomainCommandInput, TransferDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: TransferDomainCommandInput;
    constructor(input: TransferDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<TransferDomainCommandInput, TransferDomainCommandOutput>;
    private serialize;
    private deserialize;
}
