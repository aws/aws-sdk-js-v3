import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { ActivateEventSourceRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ActivateEventSourceCommandInput = ActivateEventSourceRequest;
export declare type ActivateEventSourceCommandOutput = __MetadataBearer;
export declare class ActivateEventSourceCommand extends $Command<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: ActivateEventSourceCommandInput;
    constructor(input: ActivateEventSourceCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ActivateEventSourceCommandInput, ActivateEventSourceCommandOutput>;
    private serialize;
    private deserialize;
}
