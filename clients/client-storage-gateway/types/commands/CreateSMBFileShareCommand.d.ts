import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { CreateSMBFileShareInput, CreateSMBFileShareOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateSMBFileShareCommandInput = CreateSMBFileShareInput;
export declare type CreateSMBFileShareCommandOutput = CreateSMBFileShareOutput & __MetadataBearer;
export declare class CreateSMBFileShareCommand extends $Command<CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: CreateSMBFileShareCommandInput;
    constructor(input: CreateSMBFileShareCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateSMBFileShareCommandInput, CreateSMBFileShareCommandOutput>;
    private serialize;
    private deserialize;
}
