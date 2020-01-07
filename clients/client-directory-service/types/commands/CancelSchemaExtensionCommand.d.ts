import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { CancelSchemaExtensionRequest, CancelSchemaExtensionResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CancelSchemaExtensionCommandInput = CancelSchemaExtensionRequest;
export declare type CancelSchemaExtensionCommandOutput = CancelSchemaExtensionResult & __MetadataBearer;
export declare class CancelSchemaExtensionCommand extends $Command<CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: CancelSchemaExtensionCommandInput;
    constructor(input: CancelSchemaExtensionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelSchemaExtensionCommandInput, CancelSchemaExtensionCommandOutput>;
    private serialize;
    private deserialize;
}
