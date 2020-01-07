import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { PutPartnerEventsRequest, PutPartnerEventsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutPartnerEventsCommandInput = PutPartnerEventsRequest;
export declare type PutPartnerEventsCommandOutput = PutPartnerEventsResponse & __MetadataBearer;
export declare class PutPartnerEventsCommand extends $Command<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: PutPartnerEventsCommandInput;
    constructor(input: PutPartnerEventsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPartnerEventsCommandInput, PutPartnerEventsCommandOutput>;
    private serialize;
    private deserialize;
}
