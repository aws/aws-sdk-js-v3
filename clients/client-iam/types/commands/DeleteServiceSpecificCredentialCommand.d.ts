import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServiceSpecificCredentialRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteServiceSpecificCredentialCommandInput = DeleteServiceSpecificCredentialRequest;
export declare type DeleteServiceSpecificCredentialCommandOutput = __MetadataBearer;
export declare class DeleteServiceSpecificCredentialCommand extends $Command<DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteServiceSpecificCredentialCommandInput;
    constructor(input: DeleteServiceSpecificCredentialCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteServiceSpecificCredentialCommandInput, DeleteServiceSpecificCredentialCommandOutput>;
    private serialize;
    private deserialize;
}
