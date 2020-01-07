import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { AddUploadBufferInput, AddUploadBufferOutput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddUploadBufferCommandInput = AddUploadBufferInput;
export declare type AddUploadBufferCommandOutput = AddUploadBufferOutput & __MetadataBearer;
export declare class AddUploadBufferCommand extends $Command<AddUploadBufferCommandInput, AddUploadBufferCommandOutput, StorageGatewayClientResolvedConfig> {
    readonly input: AddUploadBufferCommandInput;
    constructor(input: AddUploadBufferCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: StorageGatewayClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddUploadBufferCommandInput, AddUploadBufferCommandOutput>;
    private serialize;
    private deserialize;
}
