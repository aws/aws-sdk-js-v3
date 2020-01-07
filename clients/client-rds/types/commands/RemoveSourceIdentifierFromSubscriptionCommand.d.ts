import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RemoveSourceIdentifierFromSubscriptionMessage, RemoveSourceIdentifierFromSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveSourceIdentifierFromSubscriptionCommandInput = RemoveSourceIdentifierFromSubscriptionMessage;
export declare type RemoveSourceIdentifierFromSubscriptionCommandOutput = RemoveSourceIdentifierFromSubscriptionResult & __MetadataBearer;
export declare class RemoveSourceIdentifierFromSubscriptionCommand extends $Command<RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput, RDSClientResolvedConfig> {
    readonly input: RemoveSourceIdentifierFromSubscriptionCommandInput;
    constructor(input: RemoveSourceIdentifierFromSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveSourceIdentifierFromSubscriptionCommandInput, RemoveSourceIdentifierFromSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
