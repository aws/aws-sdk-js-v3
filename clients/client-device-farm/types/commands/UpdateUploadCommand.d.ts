import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateUploadRequest, UpdateUploadResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateUploadCommandInput = UpdateUploadRequest;
export declare type UpdateUploadCommandOutput = UpdateUploadResult & __MetadataBearer;
export declare class UpdateUploadCommand extends $Command<UpdateUploadCommandInput, UpdateUploadCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: UpdateUploadCommandInput;
    constructor(input: UpdateUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateUploadCommandInput, UpdateUploadCommandOutput>;
    private serialize;
    private deserialize;
}
