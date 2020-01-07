import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { CopyImageRequest, CopyImageResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CopyImageCommandInput = CopyImageRequest;
export declare type CopyImageCommandOutput = CopyImageResponse & __MetadataBearer;
export declare class CopyImageCommand extends $Command<CopyImageCommandInput, CopyImageCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: CopyImageCommandInput;
    constructor(input: CopyImageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CopyImageCommandInput, CopyImageCommandOutput>;
    private serialize;
    private deserialize;
}
