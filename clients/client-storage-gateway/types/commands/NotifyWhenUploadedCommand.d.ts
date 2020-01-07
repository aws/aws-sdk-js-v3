import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { NotifyWhenUploadedInput, NotifyWhenUploadedOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type NotifyWhenUploadedCommandInput = NotifyWhenUploadedInput;
export declare type NotifyWhenUploadedCommandOutput = NotifyWhenUploadedOutput & __MetadataBearer;
export declare class NotifyWhenUploadedCommand extends $Command<NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: NotifyWhenUploadedCommandInput;
    constructor(input: NotifyWhenUploadedCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<NotifyWhenUploadedCommandInput, NotifyWhenUploadedCommandOutput>;
    private serialize;
    private deserialize;
}
