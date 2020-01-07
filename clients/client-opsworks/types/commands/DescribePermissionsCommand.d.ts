import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribePermissionsRequest, DescribePermissionsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribePermissionsCommandInput = DescribePermissionsRequest;
export declare type DescribePermissionsCommandOutput = DescribePermissionsResult & __MetadataBearer;
export declare class DescribePermissionsCommand extends $Command<DescribePermissionsCommandInput, DescribePermissionsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribePermissionsCommandInput;
    constructor(input: DescribePermissionsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePermissionsCommandInput, DescribePermissionsCommandOutput>;
    private serialize;
    private deserialize;
}
