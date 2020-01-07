import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AddRoleToInstanceProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AddRoleToInstanceProfileCommandInput = AddRoleToInstanceProfileRequest;
export declare type AddRoleToInstanceProfileCommandOutput = __MetadataBearer;
export declare class AddRoleToInstanceProfileCommand extends $Command<AddRoleToInstanceProfileCommandInput, AddRoleToInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: AddRoleToInstanceProfileCommandInput;
    constructor(input: AddRoleToInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AddRoleToInstanceProfileCommandInput, AddRoleToInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
