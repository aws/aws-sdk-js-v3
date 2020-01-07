import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { RemovePermissionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemovePermissionCommandInput = RemovePermissionInput;
export declare type RemovePermissionCommandOutput = __MetadataBearer;
export declare class RemovePermissionCommand extends $Command<RemovePermissionCommandInput, RemovePermissionCommandOutput, SNSClientResolvedConfig> {
    readonly input: RemovePermissionCommandInput;
    constructor(input: RemovePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemovePermissionCommandInput, RemovePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
