import { AppStreamClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppStreamClient";
import { DescribeImagePermissionsRequest, DescribeImagePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeImagePermissionsCommandInput = DescribeImagePermissionsRequest;
export declare type DescribeImagePermissionsCommandOutput = DescribeImagePermissionsResult & __MetadataBearer;
export declare class DescribeImagePermissionsCommand extends $Command<DescribeImagePermissionsCommandInput, DescribeImagePermissionsCommandOutput, AppStreamClientResolvedConfig> {
    readonly input: DescribeImagePermissionsCommandInput;
    constructor(input: DescribeImagePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: AppStreamClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeImagePermissionsCommandInput, DescribeImagePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
