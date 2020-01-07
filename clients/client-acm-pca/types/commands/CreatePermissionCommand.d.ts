import { ACMPCAClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMPCAClient";
import { CreatePermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePermissionCommandInput = CreatePermissionRequest;
export declare type CreatePermissionCommandOutput = __MetadataBearer;
export declare class CreatePermissionCommand extends $Command<CreatePermissionCommandInput, CreatePermissionCommandOutput, ACMPCAClientResolvedConfig> {
    readonly input: CreatePermissionCommandInput;
    constructor(input: CreatePermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ACMPCAClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePermissionCommandInput, CreatePermissionCommandOutput>;
    private serialize;
    private deserialize;
}
