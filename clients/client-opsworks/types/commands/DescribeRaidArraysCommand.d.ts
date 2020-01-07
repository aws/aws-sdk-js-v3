import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeRaidArraysRequest, DescribeRaidArraysResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeRaidArraysCommandInput = DescribeRaidArraysRequest;
export declare type DescribeRaidArraysCommandOutput = DescribeRaidArraysResult & __MetadataBearer;
export declare class DescribeRaidArraysCommand extends $Command<DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeRaidArraysCommandInput;
    constructor(input: DescribeRaidArraysCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRaidArraysCommandInput, DescribeRaidArraysCommandOutput>;
    private serialize;
    private deserialize;
}
