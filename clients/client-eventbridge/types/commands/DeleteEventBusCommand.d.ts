import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { DeleteEventBusRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventBusCommandInput = DeleteEventBusRequest;
export declare type DeleteEventBusCommandOutput = __MetadataBearer;
export declare class DeleteEventBusCommand extends $Command<DeleteEventBusCommandInput, DeleteEventBusCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: DeleteEventBusCommandInput;
    constructor(input: DeleteEventBusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventBusCommandInput, DeleteEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
