import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateNFSFileShareInput, CreateNFSFileShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateNFSFileShareCommandInput = CreateNFSFileShareInput;
export declare type CreateNFSFileShareCommandOutput = CreateNFSFileShareOutput & __MetadataBearer;
export declare class CreateNFSFileShareCommand extends $Command<CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateNFSFileShareCommandInput;
    constructor(input: CreateNFSFileShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNFSFileShareCommandInput, CreateNFSFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
