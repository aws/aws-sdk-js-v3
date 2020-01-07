import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { RemovePermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemovePermissionCommandInput = RemovePermissionRequest;
export declare type RemovePermissionCommandOutput = __MetadataBearer;
export declare class RemovePermissionCommand extends $Command<RemovePermissionCommandInput, RemovePermissionCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: RemovePermissionCommandInput;
    constructor(input: RemovePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
