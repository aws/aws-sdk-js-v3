import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedAccountsForOrganizationRequest, DescribeAffectedAccountsForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAffectedAccountsForOrganizationCommandInput = DescribeAffectedAccountsForOrganizationRequest;
export declare type DescribeAffectedAccountsForOrganizationCommandOutput = DescribeAffectedAccountsForOrganizationResponse & __MetadataBearer;
export declare class DescribeAffectedAccountsForOrganizationCommand extends $Command<DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeAffectedAccountsForOrganizationCommandInput;
    constructor(input: DescribeAffectedAccountsForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAffectedAccountsForOrganizationCommandInput, DescribeAffectedAccountsForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
