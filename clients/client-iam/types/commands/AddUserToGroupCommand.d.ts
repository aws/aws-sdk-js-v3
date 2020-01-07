import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddUserToGroupRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddUserToGroupCommandInput = AddUserToGroupRequest;
export declare type AddUserToGroupCommandOutput = __MetadataBearer;
export declare class AddUserToGroupCommand extends $Command<AddUserToGroupCommandInput, AddUserToGroupCommandOutput, IAMClientResolvedConfig> {
    readonly input: AddUserToGroupCommandInput;
    constructor(input: AddUserToGroupCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddUserToGroupCommandInput, AddUserToGroupCommandOutput>;
    private serialize;
    private deserialize;
}
