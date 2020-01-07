import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { AddSourceIdentifierToSubscriptionMessage, AddSourceIdentifierToSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddSourceIdentifierToSubscriptionCommandInput = AddSourceIdentifierToSubscriptionMessage;
export declare type AddSourceIdentifierToSubscriptionCommandOutput = AddSourceIdentifierToSubscriptionResult & __MetadataBearer;
export declare class AddSourceIdentifierToSubscriptionCommand extends $Command<AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput, NeptuneClientResolvedConfig> {
    readonly input: AddSourceIdentifierToSubscriptionCommandInput;
    constructor(input: AddSourceIdentifierToSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: NeptuneClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddSourceIdentifierToSubscriptionCommandInput, AddSourceIdentifierToSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
