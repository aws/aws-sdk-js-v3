import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateAccountRequest, CreateAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateAccountCommandInput = CreateAccountRequest;
export declare type CreateAccountCommandOutput = CreateAccountResponse & __MetadataBearer;
export declare class CreateAccountCommand extends $Command<CreateAccountCommandInput, CreateAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreateAccountCommandInput;
    constructor(input: CreateAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateAccountCommandInput, CreateAccountCommandOutput>;
    private serialize;
    private deserialize;
}
