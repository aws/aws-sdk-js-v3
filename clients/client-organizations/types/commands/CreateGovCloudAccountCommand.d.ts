import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { CreateGovCloudAccountRequest, CreateGovCloudAccountResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type CreateGovCloudAccountCommandInput = CreateGovCloudAccountRequest;
export declare type CreateGovCloudAccountCommandOutput = CreateGovCloudAccountResponse & __MetadataBearer;
export declare class CreateGovCloudAccountCommand extends $Command<CreateGovCloudAccountCommandInput, CreateGovCloudAccountCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: CreateGovCloudAccountCommandInput;
    constructor(input: CreateGovCloudAccountCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateGovCloudAccountCommandInput, CreateGovCloudAccountCommandOutput>;
    private serialize;
    private deserialize;
}
