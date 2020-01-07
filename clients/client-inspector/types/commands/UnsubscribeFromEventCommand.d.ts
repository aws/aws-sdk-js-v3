import { InspectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../InspectorClient";
import { UnsubscribeFromEventRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UnsubscribeFromEventCommandInput = UnsubscribeFromEventRequest;
export declare type UnsubscribeFromEventCommandOutput = __MetadataBearer;
export declare class UnsubscribeFromEventCommand extends $Command<UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput, InspectorClientResolvedConfig> {
    readonly input: UnsubscribeFromEventCommandInput;
    constructor(input: UnsubscribeFromEventCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: InspectorClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UnsubscribeFromEventCommandInput, UnsubscribeFromEventCommandOutput>;
    private serialize;
    private deserialize;
}
