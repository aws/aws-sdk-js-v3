import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddWorkingStorageInput, AddWorkingStorageOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddWorkingStorageCommandInput = AddWorkingStorageInput;
export declare type AddWorkingStorageCommandOutput = AddWorkingStorageOutput & __MetadataBearer;
export declare class AddWorkingStorageCommand extends $Command<AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AddWorkingStorageCommandInput;
    constructor(input: AddWorkingStorageCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddWorkingStorageCommandInput, AddWorkingStorageCommandOutput>;
    private serialize;
    private deserialize;
}
