import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DeleteEventSubscriptionMessage } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventSubscriptionCommandInput = DeleteEventSubscriptionMessage;
export declare type DeleteEventSubscriptionCommandOutput = __MetadataBearer;
export declare class DeleteEventSubscriptionCommand extends $Command<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput, RedshiftClientResolvedConfig> {
    readonly input: DeleteEventSubscriptionCommandInput;
    constructor(input: DeleteEventSubscriptionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RedshiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventSubscriptionCommandInput, DeleteEventSubscriptionCommandOutput>;
    private serialize;
    private deserialize;
}
