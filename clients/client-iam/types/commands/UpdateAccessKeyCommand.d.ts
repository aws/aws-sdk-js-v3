import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateAccessKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateAccessKeyCommandInput = UpdateAccessKeyRequest;
export declare type UpdateAccessKeyCommandOutput = __MetadataBearer;
export declare class UpdateAccessKeyCommand extends $Command<UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateAccessKeyCommandInput;
    constructor(input: UpdateAccessKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateAccessKeyCommandInput, UpdateAccessKeyCommandOutput>;
    private serialize;
    private deserialize;
}
