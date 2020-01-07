import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutPermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type PutPermissionCommandInput = PutPermissionRequest;
export declare type PutPermissionCommandOutput = __MetadataBearer;
export declare class PutPermissionCommand extends $Command<PutPermissionCommandInput, PutPermissionCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: PutPermissionCommandInput;
    constructor(input: PutPermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPermissionCommandInput, PutPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
