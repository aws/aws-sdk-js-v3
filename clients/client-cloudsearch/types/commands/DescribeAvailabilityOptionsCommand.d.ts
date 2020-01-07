import { CloudSearchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudSearchClient";
import { DescribeAvailabilityOptionsRequest, DescribeAvailabilityOptionsResponse } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAvailabilityOptionsCommandInput = DescribeAvailabilityOptionsRequest;
export declare type DescribeAvailabilityOptionsCommandOutput = DescribeAvailabilityOptionsResponse & __MetadataBearer;
export declare class DescribeAvailabilityOptionsCommand extends $Command<DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput, CloudSearchClientResolvedConfig> {
    readonly input: DescribeAvailabilityOptionsCommandInput;
    constructor(input: DescribeAvailabilityOptionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudSearchClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAvailabilityOptionsCommandInput, DescribeAvailabilityOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
