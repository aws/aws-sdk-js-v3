import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DisableDomainTransferLockRequest, DisableDomainTransferLockResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableDomainTransferLockCommandInput = DisableDomainTransferLockRequest;
export declare type DisableDomainTransferLockCommandOutput = DisableDomainTransferLockResponse & __MetadataBearer;
export declare class DisableDomainTransferLockCommand extends $Command<DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: DisableDomainTransferLockCommandInput;
    constructor(input: DisableDomainTransferLockCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableDomainTransferLockCommandInput, DisableDomainTransferLockCommandOutput>;
    private serialize;
    private deserialize;
}
