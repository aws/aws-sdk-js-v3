import { MigrationHubConfigClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubConfigClient";
import { DescribeHomeRegionControlsRequest, DescribeHomeRegionControlsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeHomeRegionControlsCommandInput = DescribeHomeRegionControlsRequest;
export declare type DescribeHomeRegionControlsCommandOutput = DescribeHomeRegionControlsResult & __MetadataBearer;
export declare class DescribeHomeRegionControlsCommand extends $Command<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput, MigrationHubConfigClientResolvedConfig> {
    readonly input: DescribeHomeRegionControlsCommandInput;
    constructor(input: DescribeHomeRegionControlsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MigrationHubConfigClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeHomeRegionControlsCommandInput, DescribeHomeRegionControlsCommandOutput>;
    private serialize;
    private deserialize;
}
