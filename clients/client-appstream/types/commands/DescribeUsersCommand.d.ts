import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeUsersRequest, DescribeUsersResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeUsersCommandInput = DescribeUsersRequest;
export declare type DescribeUsersCommandOutput = DescribeUsersResult & __MetadataBearer;
export declare class DescribeUsersCommand extends $Command<DescribeUsersCommandInput, DescribeUsersCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeUsersCommandInput;
    constructor(input: DescribeUsersCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeUsersCommandInput, DescribeUsersCommandOutput>;
    private serialize;
    private deserialize;
}
