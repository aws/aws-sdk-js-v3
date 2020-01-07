import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetUploadRequest, GetUploadResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type GetUploadCommandInput = GetUploadRequest;
export declare type GetUploadCommandOutput = GetUploadResult & __MetadataBearer;
export declare class GetUploadCommand extends $Command<GetUploadCommandInput, GetUploadCommandOutput, DeviceFarmClientResolvedConfig> {
    readonly input: GetUploadCommandInput;
    constructor(input: GetUploadCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DeviceFarmClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetUploadCommandInput, GetUploadCommandOutput>;
    private serialize;
    private deserialize;
}
