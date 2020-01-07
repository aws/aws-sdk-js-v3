import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DeleteSshPublicKeyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteSshPublicKeyCommandInput = DeleteSshPublicKeyRequest;
export declare type DeleteSshPublicKeyCommandOutput = __MetadataBearer;
export declare class DeleteSshPublicKeyCommand extends $Command<DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput, TransferClientResolvedConfig> {
    readonly input: DeleteSshPublicKeyCommandInput;
    constructor(input: DeleteSshPublicKeyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSshPublicKeyCommandInput, DeleteSshPublicKeyCommandOutput>;
    private serialize;
    private deserialize;
}
