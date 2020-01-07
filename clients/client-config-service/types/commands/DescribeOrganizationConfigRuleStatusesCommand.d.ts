import { ConfigServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConfigServiceClient";
import { DescribeOrganizationConfigRuleStatusesRequest, DescribeOrganizationConfigRuleStatusesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeOrganizationConfigRuleStatusesCommandInput = DescribeOrganizationConfigRuleStatusesRequest;
export declare type DescribeOrganizationConfigRuleStatusesCommandOutput = DescribeOrganizationConfigRuleStatusesResponse & __MetadataBearer;
export declare class DescribeOrganizationConfigRuleStatusesCommand extends $Command<DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput, ConfigServiceClientResolvedConfig> {
    readonly input: DescribeOrganizationConfigRuleStatusesCommandInput;
    constructor(input: DescribeOrganizationConfigRuleStatusesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ConfigServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeOrganizationConfigRuleStatusesCommandInput, DescribeOrganizationConfigRuleStatusesCommandOutput>;
    private serialize;
    private deserialize;
}
