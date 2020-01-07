import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DeleteServerRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServerCommandInput = DeleteServerRequest;
export declare type DeleteServerCommandOutput = __MetadataBearer;
export declare class DeleteServerCommand extends $Command<DeleteServerCommandInput, DeleteServerCommandOutput, TransferClientResolvedConfig> {
    readonly input: DeleteServerCommandInput;
    constructor(input: DeleteServerCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServerCommandInput, DeleteServerCommandOutput>;
    private serialize;
    private deserialize;
}
