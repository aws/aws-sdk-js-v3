import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { UpdateDomainEntryRequest, UpdateDomainEntryResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateDomainEntryCommandInput = UpdateDomainEntryRequest;
export declare type UpdateDomainEntryCommandOutput = UpdateDomainEntryResult & __MetadataBearer;
export declare class UpdateDomainEntryCommand extends $Command<UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput, LightsailClientResolvedConfig> {
    readonly input: UpdateDomainEntryCommandInput;
    constructor(input: UpdateDomainEntryCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LightsailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateDomainEntryCommandInput, UpdateDomainEntryCommandOutput>;
    private serialize;
    private deserialize;
}
