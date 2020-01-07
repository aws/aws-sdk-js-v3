import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConfigRulesRequest, DescribeOrganizationConfigRulesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationConfigRulesCommandInput = DescribeOrganizationConfigRulesRequest;
export declare type DescribeOrganizationConfigRulesCommandOutput = DescribeOrganizationConfigRulesResponse & __MetadataBearer;
export declare class DescribeOrganizationConfigRulesCommand extends $Command<DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConfigRulesCommandInput;
    constructor(input: DescribeOrganizationConfigRulesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConfigRulesCommandInput, DescribeOrganizationConfigRulesCommandOutput>;
    private serialize;
    private deserialize;
}
