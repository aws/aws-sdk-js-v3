import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateDomainContactRequest, UpdateDomainContactResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDomainContactCommandInput = UpdateDomainContactRequest;
export declare type UpdateDomainContactCommandOutput = UpdateDomainContactResponse & __MetadataBearer;
export declare class UpdateDomainContactCommand extends $Command<UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateDomainContactCommandInput;
    constructor(input: UpdateDomainContactCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainContactCommandInput, UpdateDomainContactCommandOutput>;
    private serialize;
    private deserialize;
}
