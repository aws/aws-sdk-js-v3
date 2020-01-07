import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ModifyDocumentPermissionCommandInput = ModifyDocumentPermissionRequest;
export declare type ModifyDocumentPermissionCommandOutput = ModifyDocumentPermissionResponse & __MetadataBearer;
export declare class ModifyDocumentPermissionCommand extends $Command<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput, SSMClientResolvedConfig> {
    readonly input: ModifyDocumentPermissionCommandInput;
    constructor(input: ModifyDocumentPermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDocumentPermissionCommandInput, ModifyDocumentPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
