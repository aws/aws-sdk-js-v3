import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainNameserversRequest, UpdateDomainNameserversResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDomainNameserversCommandInput = UpdateDomainNameserversRequest;
export declare type UpdateDomainNameserversCommandOutput = UpdateDomainNameserversResponse & __MetadataBearer;
export declare class UpdateDomainNameserversCommand extends $Command<UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateDomainNameserversCommandInput;
    constructor(input: UpdateDomainNameserversCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainNameserversCommandInput, UpdateDomainNameserversCommandOutput>;
    private serialize;
    private deserialize;
}
