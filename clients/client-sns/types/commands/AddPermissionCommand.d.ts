import { SNSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SNSClient";
import { AddPermissionInput } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddPermissionCommandInput = AddPermissionInput;
export declare type AddPermissionCommandOutput = __MetadataBearer;
export declare class AddPermissionCommand extends $Command<AddPermissionCommandInput, AddPermissionCommandOutput, SNSClientResolvedConfig> {
    readonly input: AddPermissionCommandInput;
    constructor(input: AddPermissionCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SNSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddPermissionCommandInput, AddPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
