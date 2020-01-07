import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { CreateAccountAliasRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAccountAliasCommandInput = CreateAccountAliasRequest;
export declare type CreateAccountAliasCommandOutput = __MetadataBearer;
export declare class CreateAccountAliasCommand extends $Command<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput, IAMClientResolvedConfig> {
    readonly input: CreateAccountAliasCommandInput;
    constructor(input: CreateAccountAliasCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccountAliasCommandInput, CreateAccountAliasCommandOutput>;
    private serialize;
    private deserialize;
}
