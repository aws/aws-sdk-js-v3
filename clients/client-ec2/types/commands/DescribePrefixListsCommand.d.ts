import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DescribePrefixListsRequest, DescribePrefixListsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePrefixListsCommandInput = DescribePrefixListsRequest;
export declare type DescribePrefixListsCommandOutput = DescribePrefixListsResult & __MetadataBearer;
export declare class DescribePrefixListsCommand extends $Command<DescribePrefixListsCommandInput, DescribePrefixListsCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DescribePrefixListsCommandInput;
    constructor(input: DescribePrefixListsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePrefixListsCommandInput, DescribePrefixListsCommandOutput>;
    private serialize;
    private deserialize;
}
