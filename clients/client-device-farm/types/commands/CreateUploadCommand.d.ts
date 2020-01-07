import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateUploadRequest, CreateUploadResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateUploadCommandInput = CreateUploadRequest;
export declare type CreateUploadCommandOutput = CreateUploadResult & __MetadataBearer;
export declare class CreateUploadCommand extends $Command<CreateUploadCommandInput, CreateUploadCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: CreateUploadCommandInput;
    constructor(input: CreateUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateUploadCommandInput, CreateUploadCommandOutput>;
    private serialize;
    private deserialize;
}
