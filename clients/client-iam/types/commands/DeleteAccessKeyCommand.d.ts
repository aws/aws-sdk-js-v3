import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccessKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAccessKeyCommandInput = DeleteAccessKeyRequest;
export declare type DeleteAccessKeyCommandOutput = __MetadataBearer;
export declare class DeleteAccessKeyCommand extends $Command<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteAccessKeyCommandInput;
    constructor(input: DeleteAccessKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccessKeyCommandInput, DeleteAccessKeyCommandOutput>;
    private serialize;
    private deserialize;
}
