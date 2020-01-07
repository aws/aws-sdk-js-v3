import { HealthClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthClient";
import { DescribeAffectedEntitiesRequest, DescribeAffectedEntitiesResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAffectedEntitiesCommandInput = DescribeAffectedEntitiesRequest;
export declare type DescribeAffectedEntitiesCommandOutput = DescribeAffectedEntitiesResponse & __MetadataBearer;
export declare class DescribeAffectedEntitiesCommand extends $Command<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput, HealthClientResolvedConfig> {
    readonly input: DescribeAffectedEntitiesCommandInput;
    constructor(input: DescribeAffectedEntitiesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAffectedEntitiesCommandInput, DescribeAffectedEntitiesCommandOutput>;
    private serialize;
    private deserialize;
}
