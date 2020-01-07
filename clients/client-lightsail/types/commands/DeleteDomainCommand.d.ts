import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDomainRequest, DeleteDomainResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDomainCommandInput = DeleteDomainRequest;
export declare type DeleteDomainCommandOutput = DeleteDomainResult & __MetadataBearer;
export declare class DeleteDomainCommand extends $Command<DeleteDomainCommandInput, DeleteDomainCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDomainCommandInput;
    constructor(input: DeleteDomainCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDomainCommandInput, DeleteDomainCommandOutput>;
    private serialize;
    private deserialize;
}
