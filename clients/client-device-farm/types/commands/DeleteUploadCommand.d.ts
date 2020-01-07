import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteUploadRequest, DeleteUploadResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteUploadCommandInput = DeleteUploadRequest;
export declare type DeleteUploadCommandOutput = DeleteUploadResult & __MetadataBearer;
export declare class DeleteUploadCommand extends $Command<DeleteUploadCommandInput, DeleteUploadCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: DeleteUploadCommandInput;
    constructor(input: DeleteUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteUploadCommandInput, DeleteUploadCommandOutput>;
    private serialize;
    private deserialize;
}
