import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DeleteDomainRequest, DeleteDomainResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDomainCommandInput = DeleteDomainRequest;
export declare type DeleteDomainCommandOutput = DeleteDomainResponse & __MetadataBearer;
export declare class DeleteDomainCommand extends $Command<DeleteDomainCommandInput, DeleteDomainCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DeleteDomainCommandInput;
    constructor(input: DeleteDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDomainCommandInput, DeleteDomainCommandOutput>;
    private serialize;
    private deserialize;
}
