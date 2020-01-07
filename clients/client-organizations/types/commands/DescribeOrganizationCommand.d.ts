import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationCommandInput = {};
export declare type DescribeOrganizationCommandOutput = DescribeOrganizationResponse & __MetadataBearer;
export declare class DescribeOrganizationCommand extends $Command<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeOrganizationCommandInput;
    constructor(input: DescribeOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
