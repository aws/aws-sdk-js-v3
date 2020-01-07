import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteEventSubscriptionMessage, DeleteEventSubscriptionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventSubscriptionCommandInput = DeleteEventSubscriptionMessage;
export declare type DeleteEventSubscriptionCommandOutput = DeleteEventSubscriptionResult & __MetadataBearer;
export declare class DeleteEventSubscriptionCommand extends $Command<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput, RDSClientResolvedConfig> {
    readonly input: DeleteEventSubscriptionCommandInput;
    constructor(input: DeleteEventSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
