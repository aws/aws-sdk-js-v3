import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { UpdateTagsForDomainRequest, UpdateTagsForDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateTagsForDomainCommandInput = UpdateTagsForDomainRequest;
export declare type UpdateTagsForDomainCommandOutput = UpdateTagsForDomainResponse & __MetadataBearer;
export declare class UpdateTagsForDomainCommand extends $Command<UpdateTagsForDomainCommandInput, UpdateTagsForDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: UpdateTagsForDomainCommandInput;
    constructor(input: UpdateTagsForDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateTagsForDomainCommandInput, UpdateTagsForDomainCommandOutput>;
    private serialize;
    private deserialize;
}
