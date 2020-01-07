import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type LeaveOrganizationCommandInput = {};
export declare type LeaveOrganizationCommandOutput = __MetadataBearer;
export declare class LeaveOrganizationCommand extends $Command<LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: LeaveOrganizationCommandInput;
    constructor(input: LeaveOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<LeaveOrganizationCommandInput, LeaveOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
