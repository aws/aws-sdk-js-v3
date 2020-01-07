import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateServiceSpecificCredentialRequest, CreateServiceSpecificCredentialResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateServiceSpecificCredentialCommandInput = CreateServiceSpecificCredentialRequest;
export declare type CreateServiceSpecificCredentialCommandOutput = CreateServiceSpecificCredentialResponse & __MetadataBearer;
export declare class CreateServiceSpecificCredentialCommand extends $Command<CreateServiceSpecificCredentialCommandInput, CreateServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateServiceSpecificCredentialCommandInput;
    constructor(input: CreateServiceSpecificCredentialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateServiceSpecificCredentialCommandInput, CreateServiceSpecificCredentialCommandOutput>;
    private serialize;
    private deserialize;
}
