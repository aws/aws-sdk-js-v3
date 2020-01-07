import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { AttachRolePolicyRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type AttachRolePolicyCommandInput = AttachRolePolicyRequest;
export declare type AttachRolePolicyCommandOutput = __MetadataBearer;
export declare class AttachRolePolicyCommand extends $Command<AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput, IAMClientResolvedConfig> {
    readonly input: AttachRolePolicyCommandInput;
    constructor(input: AttachRolePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AttachRolePolicyCommandInput, AttachRolePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
