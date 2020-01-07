import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DeactivateEventSourceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeactivateEventSourceCommandInput = DeactivateEventSourceRequest;
export declare type DeactivateEventSourceCommandOutput = __MetadataBearer;
export declare class DeactivateEventSourceCommand extends $Command<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DeactivateEventSourceCommandInput;
    constructor(input: DeactivateEventSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeactivateEventSourceCommandInput, DeactivateEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
