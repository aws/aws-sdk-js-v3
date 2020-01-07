import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteDomainEntryRequest, DeleteDomainEntryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteDomainEntryCommandInput = DeleteDomainEntryRequest;
export declare type DeleteDomainEntryCommandOutput = DeleteDomainEntryResult & __MetadataBearer;
export declare class DeleteDomainEntryCommand extends $Command<DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput, LightsailClientResolvedConfig> {
    readonly input: DeleteDomainEntryCommandInput;
    constructor(input: DeleteDomainEntryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDomainEntryCommandInput, DeleteDomainEntryCommandOutput>;
    private serialize;
    private deserialize;
}
