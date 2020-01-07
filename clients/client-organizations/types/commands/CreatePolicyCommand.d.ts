import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreatePolicyRequest, CreatePolicyResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreatePolicyCommandInput = CreatePolicyRequest;
export declare type CreatePolicyCommandOutput = CreatePolicyResponse & __MetadataBearer;
export declare class CreatePolicyCommand extends $Command<CreatePolicyCommandInput, CreatePolicyCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreatePolicyCommandInput;
    constructor(input: CreatePolicyCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePolicyCommandInput, CreatePolicyCommandOutput>;
    private serialize;
    private deserialize;
}
