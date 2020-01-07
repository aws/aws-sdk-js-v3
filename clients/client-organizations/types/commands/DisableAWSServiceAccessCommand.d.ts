import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DisableAWSServiceAccessRequest } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DisableAWSServiceAccessCommandInput = DisableAWSServiceAccessRequest;
export declare type DisableAWSServiceAccessCommandOutput = __MetadataBearer;
export declare class DisableAWSServiceAccessCommand extends $Command<DisableAWSServiceAccessCommandInput, DisableAWSServiceAccessCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DisableAWSServiceAccessCommandInput;
    constructor(input: DisableAWSServiceAccessCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableAWSServiceAccessCommandInput, DisableAWSServiceAccessCommandOutput>;
    private serialize;
    private deserialize;
}
