import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateServiceSpecificCredentialRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type UpdateServiceSpecificCredentialCommandInput = UpdateServiceSpecificCredentialRequest;
export declare type UpdateServiceSpecificCredentialCommandOutput = __MetadataBearer;
export declare class UpdateServiceSpecificCredentialCommand extends $Command<UpdateServiceSpecificCredentialCommandInput, UpdateServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig> {
    readonly input: UpdateServiceSpecificCredentialCommandInput;
    constructor(input: UpdateServiceSpecificCredentialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateServiceSpecificCredentialCommandInput, UpdateServiceSpecificCredentialCommandOutput>;
    private serialize;
    private deserialize;
}
