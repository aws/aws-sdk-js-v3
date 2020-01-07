import { SQSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SQSClient";
import { AddPermissionRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddPermissionCommandInput = AddPermissionRequest;
export declare type AddPermissionCommandOutput = __MetadataBearer;
export declare class AddPermissionCommand extends $Command<AddPermissionCommandInput, AddPermissionCommandOutput, SQSClientResolvedConfig> {
    readonly input: AddPermissionCommandInput;
    constructor(input: AddPermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SQSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddPermissionCommandInput, AddPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
