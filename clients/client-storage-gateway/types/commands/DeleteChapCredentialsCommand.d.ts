import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { DeleteChapCredentialsInput, DeleteChapCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteChapCredentialsCommandInput = DeleteChapCredentialsInput;
export declare type DeleteChapCredentialsCommandOutput = DeleteChapCredentialsOutput & __MetadataBearer;
export declare class DeleteChapCredentialsCommand extends $Command<DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: DeleteChapCredentialsCommandInput;
    constructor(input: DeleteChapCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteChapCredentialsCommandInput, DeleteChapCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
