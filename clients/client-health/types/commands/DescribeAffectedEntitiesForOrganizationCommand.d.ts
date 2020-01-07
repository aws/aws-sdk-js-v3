import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedEntitiesForOrganizationRequest, DescribeAffectedEntitiesForOrganizationResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAffectedEntitiesForOrganizationCommandInput = DescribeAffectedEntitiesForOrganizationRequest;
export declare type DescribeAffectedEntitiesForOrganizationCommandOutput = DescribeAffectedEntitiesForOrganizationResponse & __MetadataBearer;
export declare class DescribeAffectedEntitiesForOrganizationCommand extends $Command<DescribeAffectedEntitiesForOrganizationCommandInput, DescribeAffectedEntitiesForOrganizationCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeAffectedEntitiesForOrganizationCommandInput;
    constructor(input: DescribeAffectedEntitiesForOrganizationCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAffectedEntitiesForOrganizationCommandInput, DescribeAffectedEntitiesForOrganizationCommandOutput>;
    private serialize;
    private deserialize;
}
