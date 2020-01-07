import { ServiceInputTypes, ServiceOutputTypes, WorkMailClientResolvedConfig } from "../WorkMailClient";
import { DescribeOrganizationRequest, DescribeOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationCommandInput = DescribeOrganizationRequest;
export declare type DescribeOrganizationCommandOutput = DescribeOrganizationResponse & __MetadataBearer;
export declare class DescribeOrganizationCommand extends $Command<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput, WorkMailClientResolvedConfig> {
    readonly input: DescribeOrganizationCommandInput;
    constructor(input: DescribeOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkMailClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationCommandInput, DescribeOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
