import { Route53DomainsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../Route53DomainsClient";
import { DeleteTagsForDomainRequest, DeleteTagsForDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteTagsForDomainCommandInput = DeleteTagsForDomainRequest;
export declare type DeleteTagsForDomainCommandOutput = DeleteTagsForDomainResponse & __MetadataBearer;
export declare class DeleteTagsForDomainCommand extends $Command<DeleteTagsForDomainCommandInput, DeleteTagsForDomainCommandOutput, Route53DomainsClientResolvedConfig> {
    readonly input: DeleteTagsForDomainCommandInput;
    constructor(input: DeleteTagsForDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: Route53DomainsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTagsForDomainCommandInput, DeleteTagsForDomainCommandOutput>;
    private serialize;
    private deserialize;
}
