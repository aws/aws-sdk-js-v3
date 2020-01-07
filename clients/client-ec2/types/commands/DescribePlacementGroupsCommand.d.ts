import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePlacementGroupsRequest, DescribePlacementGroupsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePlacementGroupsCommandInput = DescribePlacementGroupsRequest;
export declare type DescribePlacementGroupsCommandOutput = DescribePlacementGroupsResult & __MetadataBearer;
export declare class DescribePlacementGroupsCommand extends $Command<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribePlacementGroupsCommandInput;
    constructor(input: DescribePlacementGroupsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePlacementGroupsCommandInput, DescribePlacementGroupsCommandOutput>;
    private serialize;
    private deserialize;
}
