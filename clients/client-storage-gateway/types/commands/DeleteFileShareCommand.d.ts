import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteFileShareInput, DeleteFileShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteFileShareCommandInput = DeleteFileShareInput;
export declare type DeleteFileShareCommandOutput = DeleteFileShareOutput & __MetadataBearer;
export declare class DeleteFileShareCommand extends $Command<DeleteFileShareCommandInput, DeleteFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteFileShareCommandInput;
    constructor(input: DeleteFileShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteFileShareCommandInput, DeleteFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
