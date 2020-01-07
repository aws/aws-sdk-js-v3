import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ResetServiceSpecificCredentialRequest, ResetServiceSpecificCredentialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type ResetServiceSpecificCredentialCommandInput = ResetServiceSpecificCredentialRequest;
export declare type ResetServiceSpecificCredentialCommandOutput = ResetServiceSpecificCredentialResponse & __MetadataBearer;
export declare class ResetServiceSpecificCredentialCommand extends $Command<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig> {
    readonly input: ResetServiceSpecificCredentialCommandInput;
    constructor(input: ResetServiceSpecificCredentialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ResetServiceSpecificCredentialCommandInput, ResetServiceSpecificCredentialCommandOutput>;
    private serialize;
    private deserialize;
}
