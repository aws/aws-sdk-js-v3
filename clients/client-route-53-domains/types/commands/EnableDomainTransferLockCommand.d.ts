import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { EnableDomainTransferLockRequest, EnableDomainTransferLockResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableDomainTransferLockCommandInput = EnableDomainTransferLockRequest;
export declare type EnableDomainTransferLockCommandOutput = EnableDomainTransferLockResponse & __MetadataBearer;
export declare class EnableDomainTransferLockCommand extends $Command<EnableDomainTransferLockCommandInput, EnableDomainTransferLockCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: EnableDomainTransferLockCommandInput;
    constructor(input: EnableDomainTransferLockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableDomainTransferLockCommandInput, EnableDomainTransferLockCommandOutput>;
    private serialize;
    private deserialize;
}
