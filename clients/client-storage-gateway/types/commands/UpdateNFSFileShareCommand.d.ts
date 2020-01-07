import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateNFSFileShareInput, UpdateNFSFileShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateNFSFileShareCommandInput = UpdateNFSFileShareInput;
export declare type UpdateNFSFileShareCommandOutput = UpdateNFSFileShareOutput & __MetadataBearer;
export declare class UpdateNFSFileShareCommand extends $Command<UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateNFSFileShareCommandInput;
    constructor(input: UpdateNFSFileShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNFSFileShareCommandInput, UpdateNFSFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
