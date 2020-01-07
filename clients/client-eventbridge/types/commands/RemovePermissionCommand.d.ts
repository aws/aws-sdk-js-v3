import { EventBridgeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EventBridgeClient";
import { RemovePermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemovePermissionCommandInput = RemovePermissionRequest;
export declare type RemovePermissionCommandOutput = __MetadataBearer;
export declare class RemovePermissionCommand extends $Command<RemovePermissionCommandInput, RemovePermissionCommandOutput, EventBridgeClientResolvedConfig> {
    readonly input: RemovePermissionCommandInput;
    constructor(input: RemovePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EventBridgeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
