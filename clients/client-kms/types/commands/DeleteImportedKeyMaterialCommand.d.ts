import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { DeleteImportedKeyMaterialRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteImportedKeyMaterialCommandInput = DeleteImportedKeyMaterialRequest;
export declare type DeleteImportedKeyMaterialCommandOutput = __MetadataBearer;
export declare class DeleteImportedKeyMaterialCommand extends $Command<DeleteImportedKeyMaterialCommandInput, DeleteImportedKeyMaterialCommandOutput, KMSClientResolvedConfig> {
    readonly input: DeleteImportedKeyMaterialCommandInput;
    constructor(input: DeleteImportedKeyMaterialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteImportedKeyMaterialCommandInput, DeleteImportedKeyMaterialCommandOutput>;
    private serialize;
    private deserialize;
}
