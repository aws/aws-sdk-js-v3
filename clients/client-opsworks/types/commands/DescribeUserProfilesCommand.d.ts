import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeUserProfilesRequest, DescribeUserProfilesResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUserProfilesCommandInput = DescribeUserProfilesRequest;
export declare type DescribeUserProfilesCommandOutput = DescribeUserProfilesResult & __MetadataBearer;
export declare class DescribeUserProfilesCommand extends $Command<DescribeUserProfilesCommandInput, DescribeUserProfilesCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeUserProfilesCommandInput;
    constructor(input: DescribeUserProfilesCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUserProfilesCommandInput, DescribeUserProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
