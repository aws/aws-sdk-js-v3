import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteAccountAliasRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DeleteAccountAliasCommandInput = DeleteAccountAliasRequest;
export declare type DeleteAccountAliasCommandOutput = __MetadataBearer;
export declare class DeleteAccountAliasCommand extends $Command<DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput, IAMClientResolvedConfig> {
    readonly input: DeleteAccountAliasCommandInput;
    constructor(input: DeleteAccountAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteAccountAliasCommandInput, DeleteAccountAliasCommandOutput>;
    private serialize;
    private deserialize;
}
