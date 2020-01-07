import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTargetsCommandInput = RemoveTargetsRequest;
export declare type RemoveTargetsCommandOutput = RemoveTargetsResponse & __MetadataBearer;
export declare class RemoveTargetsCommand extends $Command<RemoveTargetsCommandInput, RemoveTargetsCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: RemoveTargetsCommandInput;
    constructor(input: RemoveTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
