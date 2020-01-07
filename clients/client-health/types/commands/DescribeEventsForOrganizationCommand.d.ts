import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeEventsForOrganizationRequest, DescribeEventsForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeEventsForOrganizationCommandInput = DescribeEventsForOrganizationRequest;
export declare type DescribeEventsForOrganizationCommandOutput = DescribeEventsForOrganizationResponse & __MetadataBearer;
export declare class DescribeEventsForOrganizationCommand extends $Command<DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeEventsForOrganizationCommandInput;
    constructor(input: DescribeEventsForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeEventsForOrganizationCommandInput, DescribeEventsForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
