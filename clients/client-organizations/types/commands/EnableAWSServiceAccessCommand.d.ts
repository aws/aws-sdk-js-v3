import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { EnableAWSServiceAccessRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type EnableAWSServiceAccessCommandInput = EnableAWSServiceAccessRequest;
export declare type EnableAWSServiceAccessCommandOutput = __MetadataBearer;
export declare class EnableAWSServiceAccessCommand extends $Command<EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: EnableAWSServiceAccessCommandInput;
    constructor(input: EnableAWSServiceAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableAWSServiceAccessCommandInput, EnableAWSServiceAccessCommandOutput>;
    private serialize;
    private deserialize;
}
