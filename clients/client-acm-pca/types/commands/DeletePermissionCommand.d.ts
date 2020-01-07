import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { DeletePermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeletePermissionCommandInput = DeletePermissionRequest;
export declare type DeletePermissionCommandOutput = __MetadataBearer;
export declare class DeletePermissionCommand extends $Command<DeletePermissionCommandInput, DeletePermissionCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: DeletePermissionCommandInput;
    constructor(input: DeletePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeletePermissionCommandInput, DeletePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
