import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeleteEventBusRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteEventBusCommandInput = DeleteEventBusRequest;
export declare type DeleteEventBusCommandOutput = __MetadataBearer;
export declare class DeleteEventBusCommand extends $Command<DeleteEventBusCommandInput, DeleteEventBusCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DeleteEventBusCommandInput;
    constructor(input: DeleteEventBusCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteEventBusCommandInput, DeleteEventBusCommandOutput>;
    private serialize;
    private deserialize;
}
