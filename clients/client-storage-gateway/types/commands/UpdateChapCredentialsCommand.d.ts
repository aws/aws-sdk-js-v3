import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { UpdateChapCredentialsInput, UpdateChapCredentialsOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateChapCredentialsCommandInput = UpdateChapCredentialsInput;
export declare type UpdateChapCredentialsCommandOutput = UpdateChapCredentialsOutput & __MetadataBearer;
export declare class UpdateChapCredentialsCommand extends $Command<UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: UpdateChapCredentialsCommandInput;
    constructor(input: UpdateChapCredentialsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateChapCredentialsCommandInput, UpdateChapCredentialsCommandOutput>;
    private serialize;
    private deserialize;
}
