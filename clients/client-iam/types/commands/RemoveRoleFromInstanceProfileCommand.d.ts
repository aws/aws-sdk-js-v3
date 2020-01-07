import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { RemoveRoleFromInstanceProfileRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type RemoveRoleFromInstanceProfileCommandInput = RemoveRoleFromInstanceProfileRequest;
export declare type RemoveRoleFromInstanceProfileCommandOutput = __MetadataBearer;
export declare class RemoveRoleFromInstanceProfileCommand extends $Command<RemoveRoleFromInstanceProfileCommandInput, RemoveRoleFromInstanceProfileCommandOutput, IAMClientResolvedConfig> {
    readonly input: RemoveRoleFromInstanceProfileCommandInput;
    constructor(input: RemoveRoleFromInstanceProfileCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RemoveRoleFromInstanceProfileCommandInput, RemoveRoleFromInstanceProfileCommandOutput>;
    private serialize;
    private deserialize;
}
