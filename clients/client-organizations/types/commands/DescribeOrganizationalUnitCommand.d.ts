import { OrganizationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OrganizationsClient";
import { DescribeOrganizationalUnitRequest, DescribeOrganizationalUnitResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationalUnitCommandInput = DescribeOrganizationalUnitRequest;
export declare type DescribeOrganizationalUnitCommandOutput = DescribeOrganizationalUnitResponse & __MetadataBearer;
export declare class DescribeOrganizationalUnitCommand extends $Command<DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput, OrganizationsClientResolvedConfig> {
    readonly input: DescribeOrganizationalUnitCommandInput;
    constructor(input: DescribeOrganizationalUnitCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OrganizationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationalUnitCommandInput, DescribeOrganizationalUnitCommandOutput>;
    private serialize;
    private deserialize;
}
