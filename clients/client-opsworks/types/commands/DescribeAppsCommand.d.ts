import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { DescribeAppsRequest, DescribeAppsResult } from "../models/index";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export declare type DescribeAppsCommandInput = DescribeAppsRequest;
export declare type DescribeAppsCommandOutput = DescribeAppsResult & __MetadataBearer;
export declare class DescribeAppsCommand extends $Command<DescribeAppsCommandInput, DescribeAppsCommandOutput, OpsWorksClientResolvedConfig> {
    readonly input: DescribeAppsCommandInput;
    constructor(input: DescribeAppsCommandInput);
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: OpsWorksClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeAppsCommandInput, DescribeAppsCommandOutput>;
    private serialize;
    private deserialize;
}
