import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventDetailsForOrganizationRequest, DescribeEventDetailsForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventDetailsForOrganizationCommandInput = DescribeEventDetailsForOrganizationRequest;
export declare type DescribeEventDetailsForOrganizationCommandOutput = DescribeEventDetailsForOrganizationResponse & __MetadataBearer;
export declare class DescribeEventDetailsForOrganizationCommand extends $Command<DescribeEventDetailsForOrganizationCommandInput, DescribeEventDetailsForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventDetailsForOrganizationCommandInput;
    constructor(input: DescribeEventDetailsForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventDetailsForOrganizationCommandInput, DescribeEventDetailsForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
