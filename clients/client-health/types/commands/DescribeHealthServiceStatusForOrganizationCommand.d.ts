import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeHealthServiceStatusForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHealthServiceStatusForOrganizationCommandInput = {};
export declare type DescribeHealthServiceStatusForOrganizationCommandOutput = DescribeHealthServiceStatusForOrganizationResponse & __MetadataBearer;
export declare class DescribeHealthServiceStatusForOrganizationCommand extends $Command<DescribeHealthServiceStatusForOrganizationCommandInput, DescribeHealthServiceStatusForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeHealthServiceStatusForOrganizationCommandInput;
    constructor(input: DescribeHealthServiceStatusForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHealthServiceStatusForOrganizationCommandInput, DescribeHealthServiceStatusForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
