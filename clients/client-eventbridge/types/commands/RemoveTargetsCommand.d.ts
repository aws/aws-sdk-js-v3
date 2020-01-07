import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { RemoveTargetsRequest, RemoveTargetsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveTargetsCommandInput = RemoveTargetsRequest;
export declare type RemoveTargetsCommandOutput = RemoveTargetsResponse & __MetadataBearer;
export declare class RemoveTargetsCommand extends $Command<RemoveTargetsCommandInput, RemoveTargetsCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: RemoveTargetsCommandInput;
    constructor(input: RemoveTargetsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveTargetsCommandInput, RemoveTargetsCommandOutput>;
    private serialize;
    private deserialize;
}
